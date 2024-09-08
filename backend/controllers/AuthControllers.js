import Users from "../models/UsersModel.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

export const Login = async (req, res) => {
  try {
    const user = await Users.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!user) return res.status(404).json({ msg: "User Not Found" });
    const match = await argon2.verify(user.password, req.body.password);
    if (!match) return res.status(400).json({ msg: "Wrong Password" });

    const userId = user.uuid;
    const name = user.name;
    const email = user.email;
    const role = user.role;

    const accessToken = jwt.sign(
      {
        userId,
        name,
        email,
        role,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "20m",
      }
    );
    const refreshToken = jwt.sign(
      {
        userId,
        name,
        email,
        role,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );

    await Users.update(
      { refresh_token: refreshToken },
      {
        where: {
          uuid: userId,
        },
      }
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.status(200).json({ accessToken });
  } catch (error) {
    res.status(404).json({ msg: "Email tidak di temukan" });
  }
};

export const LogOut = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) {
    return res.status(404).json({ msg: "Silahkan login terlebih dahulu" });
  }

  const user = await Users.findOne({ where: { refresh_token: refreshToken } });
  if (!user) {
    return res.status(404).json({ msg: "User tidak di temukan" });
  }
  const userId = user.uuid;
  await Users.update(
    {
      refresh_token: refreshToken,
    },
    {
      where: {
        uuid: userId,
      },
    }
  );
  res.clearCookie("refreshToken");
  res.status(200).json({ msg: "Berhasil Logout" });
};
