import Posts from "../models/PostsModel.js";
import path from "path";
import fs from "fs";

export const getPosts = async (req, res) => {
  try {
    const response = await Posts.findAll({
      order: [["id", "DESC"]],
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getPostsById = async (req, res) => {
  try {
    const response = await Posts.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createPosts = async (req, res) => {
  if (req.files === null)
    return res.status(400).json({ msg: "No File Uploaded" });
  const { title, content } = req.body;
  const file = req.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowType = [".png", ".jpg", ".jpeg"];

  if (!allowType.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: "Invalid Image" });
  if (fileSize > 5000000)
    return res.status(422).json({ msg: "Image must be less than 5 MB" });

  file.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await Posts.create({
        title: title,
        content: content,
        image: fileName,
        url: url,
      });
      res.status(200).json("Post Created");
    } catch (error) {
      console.log(error.message);
    }
  });
};

export const updatePosts = async (req, res) => {
  if (req.files === null)
    return res.status(400).json({ msg: "No File Uploaded" });
  const { title, content } = req.body;
  const file = req.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowType = [".png", ".jpg", ".jpeg"];

  if (!allowType.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: "Invalid Image" });
  if (fileSize > 5000000)
    return res.status(422).json({ msg: "Image must be less than 5 MB" });

  file.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await Posts.update(
        {
          title: title,
          content: content,
          image: fileName,
          url: url,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(200).json("Post Updated");
    } catch (error) {
      console.log(error.message);
    }
  });
};

export const deletePosts = async (req, res) => {
  try {
    const post = await Posts.findOne({ where: { id: req.params.id } });
    if (!post) return res.status(404).json({ msg: "Post not found" });

    // Remove the image file
    const filePath = path.join("public", "images", post.image);
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error("Failed to delete image:", err.message);
      }
    });

    // Delete the post record
    await Posts.destroy({
      where: { id: req.params.id },
    });

    res.status(200).json({ msg: "Post deleted successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server error" });
  }
};
