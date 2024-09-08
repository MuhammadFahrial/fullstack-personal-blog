import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../../template/Layout";
import moment from "moment";

const Detail = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [created, setCreated] = useState("");
  // const [preview, setPreview] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getPostsById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/posts/${id}`);
        setTitle(response.data.title);
        setContent(response.data.content);
        // setPreview(response.data.url);
        const createdAt = response.data.createdAt;
        setCreated(moment(createdAt).format("DD MMMM YYYY"));
      } catch (error) {
        console.log(error);
      }
    };

    getPostsById();
  }, [id]);

  const paragraphs = content.split("\n");

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center mt-16 mb-8">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="mb-8">{created}</p>
        {paragraphs.map((paragraf, index) => (
          <p key={index + 1} className="pb-8">
            {paragraf}
          </p>
        ))}
        {/* <img src={preview} alt="" className="w-24" /> */}
      </div>
    </Layout>
  );
};

export default Detail;
