import React, { useEffect } from "react";
import Layout from "../../template/Layout";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../features/PostsSlice";

const Blog = () => {
  const dispatch = useDispatch();

  const { posts, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.post
  );

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Layout>
      <div className="hero bg-base-100 min-h-screen">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-5xl font-bold mb-8">Blog</h1>
            {isLoading && (
              <span className="loading loading-infinity loading-lg"></span>
            )}
            {isError && <p>{message}</p>}
            {isSuccess && (
              <div className="container flex flex-row flex-wrap gap-6 text-left justify-center">
                {posts.map((post, index) => (
                  <Link
                    to={`/blog/${post.id}`}
                    className="card bg-base-100 w-80 shadow-xl"
                    key={index + 1}
                  >
                    <figure className="">
                      <img
                        src={post.url}
                        alt=""
                        className="w-full hidden md:block"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{post.title}</h2>
                      <p>{post.createdAt.split("T")[0]}</p>
                      <div className="card-actions justify-end">
                        {/* <button className="btn btn-primary">Buy Now</button> */}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
