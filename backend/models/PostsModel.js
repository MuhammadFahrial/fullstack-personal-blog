import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UsersModel.js";

const { DataTypes } = Sequelize;

const Posts = db.define(
  "posts",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: DataTypes.STRING,
    url: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

// Users.hasMany(Posts);
// Posts.belongsTo(Users, { foreignKey: "userId" });

(async () => {
  await db.sync();
})();

export default Posts;
