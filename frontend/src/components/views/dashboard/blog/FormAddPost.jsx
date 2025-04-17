import axios from "axios";
import React, { useState } from "react";

const FormAddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");

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

    const token = sessionStorage.getItem("token");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/posts`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Upload Success");
      setTitle("");
      setContent("");
      return response.data;
    } catch (error) {
      console.log(error.response);
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
