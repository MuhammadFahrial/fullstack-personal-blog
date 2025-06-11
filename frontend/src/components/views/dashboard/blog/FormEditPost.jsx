import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LayoutDashboard from "../../../template/LayoutDashboard";
import { useDispatch } from "react-redux";
import { updatePost } from "../../../features/PostsSlice";
import { getPosts } from "../../../features/PostsSlice";

const FormEditPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    const getPostById = async () => {
      const response = await axios.get(`http://localhost:5000/posts/${id}`);
      setTitle(response.data.title);
      setContent(response.data.content);
      setFile(response.data.image);
      setPreview(response.data.url);
    };
    getPostById();
    modalView();
  }, [id]);

  const modalView = () => {
    document.getElementById("my_modal_4").showModal();
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveUpdatePost = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("file", file);

    try {
      dispatch(updatePost({ id, formData })).unwrap();
      dispatch(getPosts());
      alert("Post updated successfully!");
    } catch (error) {
      console.error("Failed to update post:", error);
      alert("Failed to update post: " + error.message);
    }
  };

  return (
    <LayoutDashboard>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form onSubmit={saveUpdatePost} className="join join-vertical w-full">
            <div className="join join-vertical mb-4">
              <label>Title</label>
              <input
                type="text"
                value={title}
                className="input input-bordered "
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label>Image</label>
              <input
                type="file"
                className="file-input file-input-bordered w-full"
                onChange={loadImage}
              />
              {preview ? (
                <figure className="">
                  <img src={preview} alt="Preview" className="w-64" />
                </figure>
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-col mb-2">
              <label> Content</label>
              <textarea
                className="textarea textarea-bordered  h-auto"
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
            <div>
              <button type="submit" className="btn btn-success text-white">
                Update
              </button>
            </div>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button
                className="btn"
                onClick={() => navigate("/dashboard/blog")}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </LayoutDashboard>
  );
};

export default FormEditPost;
