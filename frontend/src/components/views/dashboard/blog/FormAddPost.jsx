import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../../features/PostsSlice";
import { getPosts } from "../../../features/PostsSlice";

const FormAddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");

  const dispatch = useDispatch();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const savePost = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("file", file);

    try {
      dispatch(addPost(formData)).unwrap();
      setTitle("");
      setContent("");
      setFile(null);
      setPreview("");
      alert("Post added successfully!");
      dispatch(getPosts());
    } catch (error) {
      console.error("Failed to add post:", error);
      alert("Failed to add post: " + error.message);
    }
  };

  return (
    <div>
      <form onSubmit={savePost} className="join join-vertical w-full">
        <div className="join join-vertical mb-4">
          <label>Title</label>
          <input
            type="text"
            value={title}
            className="input input-bordered "
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label>Image</label>
          <input
            type="file"
            className="file-input file-input-bordered w-full mb-2"
            onChange={loadImage}
          />
        </div>
        <div className="flex flex-col mb-2">
          <label> Content</label>
          <textarea
            className="textarea textarea-bordered mb-2 h-auto"
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <button type="submit" className="btn btn-success text-white">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormAddPost;
