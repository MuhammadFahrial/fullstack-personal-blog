import React from "react";
import Navbar from "../header/Navbar";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <section>
      <header className="sticky z-50 top-0">
        <Navbar />
      </header>
      <main className="container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </section>
  );
};

export default Layout;
