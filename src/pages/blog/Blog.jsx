import React, { useState, useEffect, useRef } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  IconButton,
  TextField,
  Button,
  MenuItem,
  Select,
  Grid,
  Paper,
  Box,
  NativeSelect,
  InputLabel,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { BlogCard } from "../../components/BlogCard";


export const BlogPost = () => {

  const [blogs, setBlogs] = useState([]);
  const profile = JSON.parse(localStorage.getItem('profile'));
  const userId = userData._id;
  const refId = userData.refId;
  const [imgs, setImgs] = useState([]);


  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:3000/blogs/blogs");
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
        formData.append('heading', heading);
        formData.append('description', description);
        imgs.forEach((file) => {
          formData.append('imgs', file);
        });
        formData.append('comments', JSON.stringify([]));
        formData.append('favouriteCount', JSON.stringify([]));
        formData.append('creatorId', creatorId);
    try {
        const response = await fetch('http://localhost:3000/blogs/blogs', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
          const newBlog = await response.json();
          navigate(`/blog-details/${newBlog._id}`);
        } else {
          console.error('Failed to create blog post');
        }
        } catch (error) {
          console.error('Error:', error);
        }
      };

  const handleImageChange = (e) => {
      if (e.target.files) {

        const newFiles = Array.from(e.target.files);
        setImgs((prevImgs) => [...prevImgs, ...newFiles]);
        console.log(imgs)

        const filesArray = Array.from(e.target.files).map((file) =>
            URL.createObjectURL(file)
        );

        setSelectedFiles((prevImages) => prevImages.concat(filesArray));
        Array.from(e.target.files).map(
            (file) => URL.revokeObjectURL(file)
        );
    }
    };
    

  const navigate = useNavigate();
  const [showPostForm, setShowPostForm] = useState(true);
  const [hidden, setHidden] = useState(false);
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [currentUser, setCurrentUser] = useState({
    id: 1,
    name: "Sherwynd",
    avatar: "../src/assets/images/avatar.png",
    profilePic: "../src/assets/images/profile.png",
    timestamp: "Just now",
  });
  const [posts, setPosts] = useState([
    {
      id: 1,
      description: "I Love Marathon!",
      timestamp: "2 hours ago",
      images: [
        "../src/assets/images/cutie.png",
        "../src/assets/images/cutie2.png",
        "../src/assets/images/cutie3.png",
        "../src/assets/images/cutie4.png",
      ],
      user: {
        id: 1,
        name: "Sherwynd (Me)",
      },
      like: 10,
      comments: 2,
    },
    {
      id: 2,
      description: "I love FOOTBALL!",
      timestamp: "3 hours ago",
      images: [
        "../src/assets/images/football.png",
        "../src/assets/images/football2.png",
      ],
      user: {
        id: 1,
        name: "Neville",
      },
      like: 20,
      comments: 9,
    },
  ]);

  // Event handler to navigate to post details
  const handleNavigateToDetails = (postId) => {
    navigate(`/blog-details/${postId}`);
    
  };

  const handleHidePost = (postId) => {
    // Logic to hide the post with postId
    console.log(`Hide post with ID ${postId}`);
  };

  return (
    <div>
      <div>
        <Typography variant="h3" sx={{ mt: 3, ml: 1 }}>
          Blog
        </Typography>

        {showPostForm && (
          <Card style={{ marginBottom: "20px" }}>
            <Box sx={{ m: 2, flexDirection: "column" }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <Avatar
                    aria-label="avatar"
                    src="../src/assets/images/user1.png"
                  />
                </Grid>
                <Grid item>
                  <Typography>Sherwynd</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Blog Heading"
                    fullWidth
                    value={heading}
                    onChange={(e) => setHeading(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Blog Description"
                    fullWidth
                    multiline
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    onClick={handleSubmit()}
                  >
                    Post
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    onClick={handleImageChange()}
                  >
                    Upload
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Card>
        )}
      </div>

      {blogs.map((post) => (
        <BlogCard key={post._id} post={post} />
        // <Card
        //   key={post.id}
        //   onClick={() => handleNavigateToDetails(post.id)}
        //   style={{ cursor: "pointer", marginBottom: "20px" }}
        // >
        //   <Box sx={{ display: "flex", flexDirection: "row", flexGrow: 1 }}>
        //     <Avatar
        //       sx={{ m: 2, justifyContent: "center", alignItems: "center" }}
        //       alt={post.name}
        //       src={currentUser.profilePic}
        //     />
        //     <Box sx={{ m: 2, flexDirection: "column" }}>
        //       <Typography variant="subtitle1">{post.name}</Typography>
        //       <Typography variant="subtitle2">{post.timestamp}</Typography>
        //     </Box>
        //     <Box
        //       sx={{ display: "flex", justifyContent: "flex-end", flexGrow: 1 }}
        //     >
        //       <VisibilityOffIcon
        //         variant="contained"
        //         color="primary"
        //         sx={{ height: 40, alignItems: "flex-end", m: 2 }}
        //       ></VisibilityOffIcon>
        //     </Box>
        //   </Box>
        //   <Box sx={{ mx: 3, display: "flex", flexDirection: "column" }}>
        //     <Typography variant="h5" style={{}} sx={{ mx: 8 }}>
        //       {post.description}
        //     </Typography>
        //     <Carousel>
        //       {post.images.map((img, i) => (
        //         <Item key={i} item={{ img }} />
        //       ))}
        //     </Carousel>
        //     <Box sx={{ display: "flex", flexDirection: "row", m: 1 }}>
        //       <span>
        //         <IconButton
        //           aria-label="add to favouries"
        //           style={{ marginRight: "8px" }}
        //         >
        //           <FavoriteIcon color="primary" />
        //         </IconButton>
        //         <Typography variant="body2" style={{ display: "inline" }}>
        //           {post.like}
        //         </Typography>
        //       </span>
        //       <span>
        //         <IconButton
        //           aria-label="comment post"
        //           style={{ marginLeft: "16px" }}
        //         >
        //           <CommentIcon color="primary" />
        //         </IconButton>
        //         <Typography variant="body2" style={{ display: "inline" }}>
        //           {post.comments}
        //         </Typography>
        //       </span>
        //     </Box>
        //   </Box>
        //   {/* Hide icon */}
        // </Card>
      ))}
    </div>
  );
};


function Item({ item }) {
  return (
    <Paper sx={{ height: "70vh" }}>
      <Box
        component="img"
        src={item.img}
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      ></Box>
    </Paper>
  );
}
