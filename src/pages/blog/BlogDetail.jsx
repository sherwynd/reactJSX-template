import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

export const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("profile"));
  const [userProfile, setUserProfile] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [blogDetail, setBlogDetail] = useState();
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [editedHeading, setEditedHeading] = useState("");
  const [editedDescription, setEditedDescription] = useState("");

  const fetchBlogById = async () => {
    try {
      const response = await fetch(`http://localhost:3000/blogs/blogs/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch blog details");
      }
      const data = await response.json();
      setBlogDetail(data);
      setComment(data.comments);
    } catch (error) {
      console.error("Error fetching blog details:", error);
    }
  };

  useEffect(() => {
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

  const handleEdit = () => {
    setEditedHeading(blogDetail.heading);
    setEditedDescription(blogDetail.description);
    setIsEditing(true);
  };

  const handleSaveEdit = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/blogs/blogs/${userData.refId}/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            heading: editedHeading,
            description: editedDescription,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update blog");
      }
      await fetchBlogById();
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedHeading(blogDetail.heading);
    setEditedDescription(blogDetail.description);
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3000/blogs/blogs/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete blog");
      }
      navigate("/blog"); // Redirect to blogs list or another appropriate page
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  const handleAddComment = async () => {
    if (newComment) {
      const formData = {
        text: newComment,
        userId: userData._id,
      };
      try {
        const response = await fetch(
          `http://localhost:3000/blogs/comments/${id}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ formData }),
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        await response.json();
        setNewComment("");
        await fetchBlogById(); // Refetch blog details after adding a comment
      } catch (error) {
        console.error("Error posting comments:", error);
      }
    }
  };

  if (loading || !blogDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="avatar">
              {userProfile?.username?.charAt(0)}
            </Avatar>
          }
          title={userProfile?.username}
          subheader={blogDetail.createdAt}
          action={
            userData.refId === blogDetail.creatorId && (
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
                {comment.map((comment) => (
                  <ListItem key={comment._id}>
                    <ListItemAvatar>
                      <Avatar>
                        {comment.username ? comment.username.charAt(0) : "?"}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={comment.text}
                      secondary={comment.username || "Unknown"}
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
