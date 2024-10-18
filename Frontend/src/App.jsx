import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Rooms from "./pages/Rooms";
import RoomSingle from "./pages/RoomSingle";
import Blog from "./pages/Blog";
import Booking from "./pages/Booking";
import BlogSingle from "./pages/BlogSingle";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Routing from "./utils/Routing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routing />
    </>
  );
}

export default App;
