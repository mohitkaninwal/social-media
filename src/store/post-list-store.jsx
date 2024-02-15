import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      post => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: 20,
        tags: tags,
      },
    });
    console.log(`values are ${postTitle}`)
  };

  const deletePost = postId => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi, Friends I am going to Mumbai for my vacations to enjoy with my family",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Mohit Kumar",
    body: "Hi,My name is Mohit and currently pursuing my BTech degree from GJU, Hisar. I specialise in JavaScript, Reactjs, Redux, MaterialUI and C++. Currently working on this project." ,
    reactions: 12,
    userId: "user-1",
    tags: ["Btech", "8thSem"],
  },
];

export default PostListProvider;
