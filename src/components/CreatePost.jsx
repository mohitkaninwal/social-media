import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { PostList } from "../store/post-list-store";
import { useContext, useRef } from "react"; ``

export default function Createpost() {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef(null);
  const postTitleElement = useRef(null);
  const postBodyElement = useRef(null);
  const tagsElement = useRef(null);

  const handleSubmit = event => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const tags = tagsElement.current.value ? tagsElement.current.value.split(" ") : [];

    // userIdElement.current.value = "";
    // postTitleElement.current.value = "";
    // postBodyElement.current.value = "";
    // tagsElement.current.value = "";
    console.log(postBody)
    addPost(userId, postTitle, postBody, tags);
    event.target.reset();
  };
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { mb: 2, display: "block" },
        "& > :first-of-type": { mb: 2 },
        "& > :last-child": { mt: 2 },
      }}
      noValidate
      autoComplete="off"
      className="create-post"
      onSubmit={handleSubmit}
    >
      <TextField
        id="outlined-basic"
        htmlFor="userId"
        label="User Id"
        variant="outlined"
        fullWidth
        inputRef={userIdElement}
      />
      <TextField
        id="outlined-basic"
        htmlFor=""
        label="Post Title"
        variant="outlined"
        fullWidth
        inputRef={postTitleElement}
      />
      <TextField
        id="outlined-basic"
        htmlFor=""
        label="Hashtags"
        variant="outlined"
        fullWidth
        inputRef={tagsElement}
      />
      <TextField
        id="filled-basic"
        htmlFor=""
        label="Description"
        variant="filled"
        multiline
        rows={4}
        fullWidth
        inputRef={postBodyElement}
      />
      <Button variant="contained" color="primary" type="submit" >
        Post
      </Button>
    </Box>
  );
}
