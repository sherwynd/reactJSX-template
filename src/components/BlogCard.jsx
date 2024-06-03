import React, { useEffect, useState, useContext, useRef } from "react";
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

export function BlogCard({ post }) {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("profile"));
  const refId = userData.refId;
  const favouriteProducts = userData.favourites || [];
  const [creatorProfile, setCreatorProfile] = useState({});
  const [loading, setLoading] = useState(true);

  const [favourite, setFavourite] = useState(false);
  const [favouriteCount, setFavouriteCount] = useState(post.favouriteCount);
  const [favouriteCounter, setFavouriteCounter] = useState(
    post.favouriteCount.length
  );

  useEffect(() => {
    const fetchCreatorProfile = async () => {
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
    };
    fetchCreatorProfile();
  }, [post.creatorId]);

  // useEffect(() => {
  //     if (favouriteCount.includes(userId)) {
  //       setFavourite(true);
  //     }
  //     updateFavouriteUserinDatabase(post._id, favouriteCount);
  //   }, [favouriteCount, favouriteCounter])

  // useEffect(() => {
  //     if (isFirstRender.current) {
  //       isFirstRender.current = false;
  //       return;
  //     }
  //     updateFavouritePostsInDatabase(userId, favouritePosts);
  //   }, [favouritePosts]);

  // const updateFavouritePostsInDatabase = async (userId, favouritePosts) => {
  //     const response = await fetch(`http://localhost:3000/auth/editAccount/${userId}`, {
  //       method: 'PATCH',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ favourites: favouritePosts }),
  //     });
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //   };

  // const handleFavourite = () => {
  //     if (favouriteCount.includes(userId)) {
  //       setFavourite(!favourite);
  //       const removedRefId = favouriteCount.filter((id) => id !== userId);
  //       setFavouriteCount([...removedRefId]);
  //       setFavouriteCounter(favouriteCounter - 1);

  //       const removedPosts = favouritePosts.filter((id) => id !== post._id);
  //       userData.favourites = removedPosts;
  //       localStorage.setItem('profile', JSON.stringify(userData));
  //     } else {
  //       setFavouriteCount([...favouriteCount, userId]);
  //       setFavouriteCounter(favouriteCounter + 1);

  //       const newFavouritePosts = [...favouritePosts, post._id];
  //       userData.favourites = newFavouritePosts;
  //       localStorage.setItem('profile', JSON.stringify(userData));
  //     }
  // };

  const handleNavigateToDetails = (postId) => {
    navigate(`/blog-details/${postId}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Card
      key={post._id}
      onClick={() => handleNavigateToDetails(post._id)}
      style={{ cursor: "pointer", marginBottom: "20px" }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", flexGrow: 1 }}>
        {
          <Avatar
            sx={{
              bgcolor: red[500],
              m: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
            aria-label="avatar"
          >
            {creatorProfile.username.charAt[0]}
          </Avatar>
        }
        <Box sx={{ m: 2, flexDirection: "column" }}>
          {/* <Typography variant="subtitle1">{post.user.name}</Typography> */}
          <Typography variant="subtitle2">{post.createdAt}</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end", flexGrow: 1 }}>
          <VisibilityOffIcon
            variant="contained"
            color="primary"
            sx={{ height: 40, alignItems: "flex-end", m: 2 }}
          ></VisibilityOffIcon>
        </Box>
      </Box>
      <Box sx={{ mx: 3, display: "flex", flexDirection: "column" }}>
        <Typography variant="h5" style={{}} sx={{ mx: 8 }}>
          {post.description}
        </Typography>
        <Carousel>
          {post.images.map((img, i) => (
            <img
              key={i}
              src={`http://localhost:3000/${img}`} // Adjust the path to match your server setup
              alt={`Image ${i + 1}`}
            />
          ))}
        </Carousel>
        <Box sx={{ display: "flex", flexDirection: "row", m: 1 }}>
          <span>
            {
              <IconButton
                aria-label="add to favourites"
                // onClick={handleFavourite}
                style={{ marginRight: "8px" }}
              >
                {favourite === false ? (
                  <FavoriteIcon />
                ) : (
                  <FavoriteIcon color="warning" />
                )}
              </IconButton>
            }
            <Typography variant="body2" style={{ display: "inline" }}>
              {favouriteCounter}
              {/* {post.like} */}
            </Typography>
          </span>
          <span>
            <IconButton
              aria-label="comment post"
              style={{ marginLeft: "16px" }}
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
