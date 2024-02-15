import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions, Fab } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Badge from "@mui/material/Badge";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { PostList } from "../store/post-list-store";
import { useState } from "react";


export default function Post({ post }) {
  const { deletePost } = useContext(PostList);
  
  const [likeEnabled, setLikeEnabled] = useState(false);
  const [likeCount, setLikeCount] = useState(post.reactions);

  const handleLikeToggle = () => {
    setLikeEnabled(!likeEnabled);
    if (!likeEnabled) {
      setLikeCount(likeCount + 1);
    } else {
      setLikeCount(likeCount - 1);
    }
  };

  return (
    <Card className="post-card" sx={{ maxWidth: 345 }}>
      <CardContent>
        <MdDelete className="delete-icon" onClick={()=> deletePost(post.id)} />
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
          badgeContent={post.reactions}
          className="like-button"
        >
          <Fab
            
            size="small"
            color={likeEnabled ? "error" : "default"}
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
