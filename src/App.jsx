import { useState } from "react";
import "./App.css";
import { AppBar } from "@mui/material";
import Appbar from "./components/Appbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Createpost from "./components/CreatePost";
import Postlist from "./components/PostList";
import Post from "./components/Post";


function App() {
  return (
    <div className="app-container">
      <Sidebar />
      
      <div className="content" >
      <Appbar />
      <Createpost/>
      <Postlist></Postlist>
      <Post></Post>
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
