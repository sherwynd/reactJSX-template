import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardHeader, CardContent, Avatar, Typography, IconButton, TextField, Button, Box, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
import Carousel from 'react-material-ui-carousel';

export const BlogDetails = () => {
  const { postId } = useParams(); // Get the postId from the URL parameters

  // Simulated posts data
  const allPosts = [
    {
      id: 1,
      user: {
        name: 'Sherwynd',
        avatar: 'https://via.placeholder.com/150',
      },
      heading: 'First Post',
      description: 'Today marathon so tired!',
      images: [
        "../src/assets/images/cutie.png",
        "../src/assets/images/cutie2.png",
        "../src/assets/images/cutie3.png",
        "../src/assets/images/cutie4.png",
      ],
      timestamp: '2 hours ago',
      comments: [
        { id: 1, text: 'Great job!', user: 'Alice' },
        { id: 2, text: 'Wow!', user: 'Bob' },
      ],
    },
  ];

  // Find the selected post based on the postId
  const selectedPost = allPosts.find(post => post.id === parseInt(1));
  const [isEditing, setIsEditing] = useState(false);
  const [editedHeading, setEditedHeading] = useState(selectedPost ? selectedPost.heading : '');
  const [editedDescription, setEditedDescription] = useState(selectedPost ? selectedPost.description : '');
  const [newComment, setNewComment] = useState('');

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
      selectedPost.comments.push({ id: selectedPost.comments.length + 1, text: newComment, user: 'New User' });
      setNewComment('');
    }
  };

  if (!selectedPost) {
    return <div>No post found!</div>;
  }

  return (
    <div>
      <Card>
        <CardHeader
          avatar={<Avatar aria-label="avatar" src={selectedPost.user.avatar} />}
          title={selectedPost.user.name}
          subheader={selectedPost.timestamp}
          action={
            <>
              <IconButton aria-label="edit post" onClick={handleEdit}>
                <EditIcon />
              </IconButton>
              <IconButton aria-label="delete post" onClick={handleDelete}>
                <DeleteIcon />
              </IconButton>
            </>
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
              <Typography variant="h4">{selectedPost.heading}</Typography>
              <Typography variant="body1">{selectedPost.description}</Typography>
              <Carousel>
                {selectedPost.images.map((image, index) => (
                  <img key={index} src={image} alt={`Image ${index + 1}`} style={{ width: '100%' }} />
                ))}
              </Carousel>
              <Typography variant="h6">Comments:</Typography>
              <List>
                {selectedPost.comments.map((comment) => (
                  <ListItem key={comment.id}>
                    <ListItemAvatar>
                      <Avatar>{comment.user[0]}</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={comment.text} secondary={comment.user} />
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
              <Button startIcon={<SendIcon />} onClick={handleAddComment}>
                Send
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};