import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Rooms from "../pages/Rooms";
import RoomSingle from "../pages/RoomSingle";
import Blog from "../pages/Blog";
import Booking from "../pages/Booking";
import BlogSingle from "../pages/BlogSingle";
import Contact from "../pages/Contact";
import Header from "../components/Header";
import NotFound from "./NotFound";

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/room-single" element={<RoomSingle />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/blog-single" element={<BlogSingle />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
