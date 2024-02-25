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
import PostListProvider from "./store/post-list-store";
import RightSidebar from "./components/RightSidebar";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

        <div className="content">
          <Appbar />
          {/* <div className='right-sidebar'> <RightSidebar /></div> */}
          {selectedTab === "Home" ? <Postlist /> : <Createpost />}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
