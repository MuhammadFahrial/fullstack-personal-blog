import React from "react";
import Layout from "../../template/Layout";
import Image from "../../../assets/heroImage.jpg";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      <div className="hero bg-base-100 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={Image}
            className="max-w-xs rounded-lg shadow-2xl mask mask-circle lg:ml-16"
            alt="images"
          />
          <div>
            <p className="py-6 lg:w-96 leading-8">
              Hai semua... kenalin saya Rial, maaf ya perkenalannya agak kaku,
              selamat datang di blog yang aneh, semoga kalian suka apa yang saya
              tulis dan tidak membosankan hehe....
            </p>
            <NavLink to={"/blog"} className="btn btn-outline mr-4">
              Masuk ke Blog
            </NavLink>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
