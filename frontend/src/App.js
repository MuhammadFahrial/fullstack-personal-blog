import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/views/home";
import About from "./components/views/about";
import Blog from "./components/views/blog";
import Contact from "./components/views/contact";
import Dashboard from "./components/views/dashboard/home";
import BlogDasboard from "./components/views/dashboard/blog";
import Detail from "./components/views/detail";
import Login from "./components/views/login";
import ProtectedRouteAdmin from "./components/template/ProtectedRouteAdmin";
import FormEditPost from "./components/views/dashboard/blog/FormEditPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Detail />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRouteAdmin>
              <Dashboard />
            </ProtectedRouteAdmin>
          }
        />
        <Route
          path="/dashboard/blog"
          element={
            <ProtectedRouteAdmin>
              <BlogDasboard />
            </ProtectedRouteAdmin>
          }
        />
        <Route
          path="/dashboard/blog/edit/:id"
          element={
            <ProtectedRouteAdmin>
              <FormEditPost />
            </ProtectedRouteAdmin>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
