import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const Postlist = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(true); // Set to true initially

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then(res => res.json())
      .then(data => {
        addInitialPosts(data.posts);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setFetching(false); // Set to false after fetch completes
      });
  }, []);

  return (
    <>
      {fetching &&  <LoadingSpinner/>}
      {!fetching && postList.length === 0 && 
        <WelcomeMessage />
      }
      {!fetching && postList.map(post => 
        <Post key={post.id} post={post} />
      )}
    </>
  );
};

export default Postlist;
