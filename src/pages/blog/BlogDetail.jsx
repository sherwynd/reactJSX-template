import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  IconButton,
  TextField,
  Button,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SendIcon from "@mui/icons-material/Send";
import Carousel from "react-material-ui-carousel";
import { useAuth } from "../../contexts/AuthContext";

export const BlogDetails = () => {
  const { id } = useParams();
  const userData = JSON.parse(localStorage.getItem("profile"));
  const [userProfile, setUserProfile] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [blogDetail, setBlogDetail] = useState();
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState("");

  // const userId = userData._id;
  // const refId = userData.refId;

  useEffect(() => {
    const fetchBlogById = async () => {
      try {
        const response = await fetch(`http://localhost:3000/blogs/blogs/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch blog details");
        }
        const data = await response.json();
        setBlogDetail(data);
        // setEditedHeading(data.heading);
        // setEditedDescription(data.description);
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    };

    fetchBlogById();
  }, [id]);

  useEffect(() => {
    if (blogDetail && blogDetail.creatorId) {
      const fetchCreatorProfile = async () => {
        try {
          const response = await fetch(
            `http://localhost:3000/auth/getAccount/${blogDetail.creatorId}`,
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
          const data = await response.json();
          setUserProfile(data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching creator profile:", error);
        }
      };
      fetchCreatorProfile();
    }
  }, [blogDetail]);

  // Simulated posts data
  // const allPosts = [
  //   {
  //     id: 1,
  //     user: {
  //       name: "Sherwynd",
  //       avatar: "https://via.placeholder.com/150",
  //     },
  //     heading: "I Love Marathon!",
  //     description: "Today marathon so tired! But so fun!",
  //     images: [
  //       "../src/assets/images/cutie.png",
  //       "../src/assets/images/cutie2.png",
  //       "../src/assets/images/cutie3.png",
  //       "../src/assets/images/cutie4.png",
  //     ],
  //     timestamp: "2 hours ago",
  //     comments: [
  //       { id: 1, text: "Great job!", user: "Carrot" },
  //       { id: 2, text: "Wow!", user: "XianHeng" },
  //     ],
  //   },
  // ];

  // Find the selected post based on the postId
  // const selectedPost = allPosts.find((post) => post.id === parseInt(1));
  // const [editedHeading, setEditedHeading] = useState(
  //   selectedPost ? selectedPost.heading : ""
  // );
  // const [editedDescription, setEditedDescription] = useState(
  //   selectedPost ? selectedPost.description : ""
  // );

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedHeading(selectedPost.heading);
    setEditedDescription(selectedPost.description);
  };

  const handleDelete = () => {
    // Implement delete functionality
  };

  const handleAddComment = () => {
    if (newComment) {
      // Normally, update your backend or state management here
      const updatedComments = [
        ...selectedPost.comments,
        {
          id: selectedPost.comments.length + 1,
          text: newComment,
          user: "New User",
        },
      ];
      // setSelectedPost({ ...selectedPost, comments: updatedComments });
      setNewComment("");
    }
  };
  //   if (newComment) {
  //     // Normally, update your backend or state management here
  //     selectedPost.comments.push({ id: selectedPost.comments.length + 1, text: newComment, user: 'New User' });
  //     setNewComment('');
  //   }
  // };

  if (loading || !blogDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="avatar">
              {userProfile.username.charAt(0)}
            </Avatar>
          }
          title={userProfile.username}
          subheader={blogDetail.createdAt}
          action={
            userData.refId === blogDetail.createdId && (
              <>
                <IconButton aria-label="edit post" onClick={handleEdit}>
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete post" onClick={handleDelete}>
                  <DeleteIcon />
                </IconButton>
              </>
            )
          }
        />
        <CardContent>
          {isEditing ? (
            <>
              <TextField
                label="Heading"
                fullWidth
                value={editedHeading}
                onChange={(e) => setEditedHeading(e.target.value)}
              />
              <TextField
                label="Description"
                fullWidth
                multiline
                rows={4}
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
              />
              <Button onClick={handleSaveEdit}>Done</Button>
              <Button onClick={handleCancelEdit}>Cancel</Button>
            </>
          ) : (
            <>
              <Typography variant="h4">{blogDetail.heading}</Typography>
              <Typography variant="body1">{blogDetail.description}</Typography>
              <Box
                sx={{
                  mx: 50,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "centre",
                  justifyContent: "centre",
                }}
              >
                <Carousel>
                  {blogDetail.images.map((image, index) => (
                    <img
                      key={index}
                      src={`http://localhost:3000/${image}`} // Adjust the path to match your server setup
                      alt={`Image ${index + 1}`}
                      style={{ width: "100%" }}
                    />
                  ))}
                </Carousel>
              </Box>
              <Typography variant="h6">Comments:</Typography>
              <List>
                {blogDetail.comments.map((comment) => (
                  <ListItem key={comment._id}>
                    <ListItemAvatar>
                      <Avatar>{comment.username.charAt[0]}</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={comment.text}
                      secondary={comment.username}
                    />
                  </ListItem>
                ))}
              </List>
              <TextField
                label="Write a comment..."
                fullWidth
                multiline
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <Button
                sx={{ m: 2 }}
                startIcon={<SendIcon />}
                onClick={handleAddComment}
              >
                Send
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
