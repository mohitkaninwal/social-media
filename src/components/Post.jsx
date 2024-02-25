import React, { useReducer } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions, Fab } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Badge from "@mui/material/Badge";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { PostList } from "../store/post-list-store";

// Reducer function to manage like state and count
const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_LIKE":
      return {
        ...state,
        likeEnabled: !state.likeEnabled,
        likeCount: state.likeEnabled ? state.likeCount - 1 : state.likeCount + 1
      };
    default:
      return state;
  }
};

export default function Post({ post }) {
  const { deletePost } = useContext(PostList);

  const initialState = {
    likeEnabled: false,
    likeCount: post.reactions
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleLikeToggle = () => {
    dispatch({ type: "TOGGLE_LIKE" });
  };

  return (
    <Card className="post-card" sx={{ maxWidth: 345 }}>
      <CardContent>
        <MdDelete className="delete-icon" onClick={() => deletePost(post.id)} />
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.body}
        </Typography>
      </CardContent>

      <CardActions>
        {post.tags.map(tag => (
          <Button key={tag} size="small" color="primary">
            {`#${tag}`}
          </Button>
        ))}
      </CardActions>
      <CardActions>
        <Badge
          color="error"
          badgeContent={state.likeCount} // Update badgeContent with likeCount from state
          className="like-button"
        >
          <Fab
            size="small"
            color={state.likeEnabled ? "error" : "default"} // Use likeEnabled from state
            aria-label="like"
            onClick={handleLikeToggle}
          >
            <FavoriteIcon />
          </Fab>
        </Badge>
        <Button
          size="small"
          color="primary"
          sx={{
            bgcolor: "#3f51b5",
            color: "#fff",
            "&:hover": {
              bgcolor: "#303f9f",
            },
          }}
        >
          Share
        </Button>
      </CardActions>
    </Card>
  );
}

