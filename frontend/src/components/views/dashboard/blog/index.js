import React, { useEffect } from "react";
import LayoutDashboard from "../../../template/LayoutDashboard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../../features/PostsSlice";
import FormAddPost from "./FormAddPost";
import { deletePost } from "../../../features/PostsSlice";

const BlogDasboard = () => {
  const dispatch = useDispatch();

  const { posts, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.post
  );

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const handleDeletePosts = async (postId) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;

    try {
      dispatch(deletePost(postId)).unwrap();
      alert("Post deleted successfully!");
      dispatch(getPosts());
    } catch (error) {
      console.error("Failed to delete post:", error);
      alert("Failed to delete post: " + error.message);
    }
  };

  return (
    <LayoutDashboard>
      {/* ADD NEW MODAL */}
      <button
        className="btn btn-success text-white my-6"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        Add New
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <FormAddPost />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      {/* TABLE POST */}

      {isLoading && (
        <span className="loading loading-infinity loading-lg"></span>
      )}
      {isError && <p>{message}</p>}
      <div className="overflow-x-auto">
        <table className="table table-fixed">
          <thead>
            <tr>
              <th>Title</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>

          {isSuccess && (
            <tbody>
              {posts.map((post, index) => (
                <tr key={index + 1}>
                  <th>{post.title}</th>

                  <td>
                    <img src={post.url} alt="images" className="w-24" />
                  </td>
                  <td>
                    <Link
                      to={`edit/${post.id}`}
                      className="btn btn-info mr-2 text-white"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-warning text-white"
                      onClick={() => handleDeletePosts(post.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>{" "}
      </div>
    </LayoutDashboard>
  );
};

export default BlogDasboard;
