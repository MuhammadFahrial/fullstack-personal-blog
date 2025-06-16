import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import cookieParser from "cookie-parser";
import PostRoute from "./routes/PostRoute.js";
import UserRoute from "./routes/UserRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import dotenv from "dotenv";
import db from "./config/Database.js";
import { adminOnly } from "./middleware/verifyToken.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

try {
  await db.authenticate();
} catch (error) {
  console.log(error);
}

app.use(
  cors({
    origin: "http://localhost:3000", // domain untuk mengakses api, dapat berupa array
    credentials: true, // agar frontend akan mengirimkan cookie beserta credentialnya
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(FileUpload());
app.use(express.static("public"));

app.get("/admin-only", adminOnly, (req, res) => {
  res.json({ valid: true });
});

app.use(UserRoute);
app.use(AuthRoute);
app.use(PostRoute);

try {
  app.listen(PORT, () => console.log("Server up and running..."));
} catch (err) {
  console.error("Unable to connect to the database:", err);
}
