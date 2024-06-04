import React, { useEffect, useState } from "react";
import { CardHeader, CardContent, CardMedia, Paper } from "@mui/material";
import Card from "@mui/material/Card";
import { IconButton, Typography, Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Carousel from "react-material-ui-carousel";
import { useNavigate } from "react-router-dom";

export function BlogCard({ post, onToggleLike, onMutePost, currentId }) {
  const navigate = useNavigate();
  const [creatorProfile, setCreatorProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [favourite, setFavourite] = useState(
    post.likeRefId.includes(currentId)
  );
  const [favouriteCount, setFavouriteCount] = useState(post.likeRefId.length);

  useEffect(() => {
    const fetchCreatorProfile = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/auth/getAccount/${post.creatorId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        setCreatorProfile(json);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching creator profile:", error);
        setLoading(false);
      }
    };
    fetchCreatorProfile();
  }, [post.creatorId]);

  const handleNavigateToDetails = (postId) => {
    navigate(`/blog-details/${postId}`);
  };

  const handleToggleLikeClick = () => {
    onToggleLike(post._id, currentId);
    setFavourite(!favourite);
    setFavouriteCount(favourite ? favouriteCount - 1 : favouriteCount + 1);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const formattedDate = new Date(post.createdAt).toLocaleString();

  return (
    <Card key={post._id} style={{ marginBottom: "20px" }}>
      <Box sx={{ display: "flex", flexDirection: "row", flexGrow: 1 }}>
        <Avatar
          sx={{
            bgcolor: red[500],
            m: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
          aria-label="avatar"
        >
          {creatorProfile.username && creatorProfile.username.charAt(0)}
        </Avatar>
        <Box sx={{ m: 2, flexDirection: "column" }}>
          <Typography variant="subtitle1">{creatorProfile.username}</Typography>
          <Typography variant="subtitle2">{formattedDate}</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end", flexGrow: 1 }}>
          <IconButton
            variant="contained"
            color="primary"
            sx={{ height: 40, alignItems: "flex-end", m: 2 }}
            onClick={() => onMutePost(post._id, currentId)}
          >
            <VisibilityOffIcon />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ mx: 3, display: "flex", flexDirection: "column" }}>
        <Typography variant="h5" sx={{ mx: 8 }}>
          {post.heading}
        </Typography>
        <Carousel>
          {post.images.map((img, i) => (
            <img
              key={i}
              src={`http://localhost:3000/${img}`} // Adjust the path to match your server setup
              alt={`Image ${i + 1}`}
              onClick={() => handleNavigateToDetails(post._id)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </Carousel>
        <Box sx={{ display: "flex", flexDirection: "row", m: 1 }}>
          <span>
            <IconButton
              aria-label="add to favourites"
              onClick={handleToggleLikeClick}
              style={{ marginRight: "8px" }}
            >
              {favourite ? <FavoriteIcon color="warning" /> : <FavoriteIcon />}
            </IconButton>
            <Typography variant="body2" style={{ display: "inline" }}>
              {favouriteCount}
            </Typography>
          </span>
          <span>
            <IconButton
              aria-label="comment post"
              style={{ marginLeft: "16px" }}
              onClick={() => handleNavigateToDetails(post._id)}
            >
              <CommentIcon color="primary" />
            </IconButton>
            <Typography variant="body2" style={{ display: "inline" }}>
              {post.comments.length}
            </Typography>
          </span>
        </Box>
      </Box>
    </Card>
  );
}
