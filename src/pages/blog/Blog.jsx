import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardActions, Avatar, Typography, IconButton, TextField, Button, MenuItem, Select } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
//import { useHistory } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import SendIcon from '@mui/icons-material/Send';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';

export const BlogPost = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState('');
    const [isMuted, setIsMuted] = useState(false);
    const [commentText, setCommentText] = useState('');
    const [liked, setLiked] = useState(false);
    const [comments, setComments] = useState([]);
    const [showPostForm, setShowPostForm] = useState(true);
    const [hidden, setHidden] = useState(false);

    const post = {
      id: 1,
      user: {
        id: 1,
        name: 'Teh Ying Wah',
        avatar: 'https://via.placeholder.com/150',
      },
      text: 'Sherwynd and YingWah You Yi Chang Cun',
      photo: 'https://via.placeholder.com/400',
      timestamp: '24 hours ago',
      likes: 10
    };
  
    const currentUser = {
      id: 1,
      name: 'YingWah',
    };
    
    //const history = useHistory();

    const handleEdit = () => {
      setIsEditing(true);
    };
  
    const handleDelete = () => {
      // Implement delete functionality
    };
  
    const handleSaveEdit = () => {
      // Implement save edit functionality
      setIsEditing(false);
    };
  
    const handleCancelEdit = () => {
      setIsEditing(false);
      setEditedText(post.text);
    };
  
    const handleMuteToggle = () => {
      setIsMuted(!isMuted);
    };
  
    const handleLike = () => {
      setLiked(!liked); // Toggle liked state
    };
  
    const handleComment = () => {
        const newComment = {
            id: comments.length + 1,
            text: commentText,
            user: currentUser,
            timestamp: new Date().toLocaleString()
          };
          setComments([...comments, newComment]);
      // Implement comment functionality
      setCommentText('');
    };


    const handlePost = () => {
    // Implement post functionality
    };

    const handleUndoMute = () => {
      setHidden(false);
    };

    const handleHidePost = () => {
      setHidden(true);
    };

    const handleNavigateToDetails = () => {
      history.push('/blog-details', { post });
    };

    return (
    <>
        {showPostForm && (
          <Card style={{ marginBottom: '16px' }}>
            <CardHeader
              avatar={<Avatar aria-label="avatar" src={currentUser.avatar} />}
              title={currentUser.name}
            />
            <CardContent>
              <TextField
                multiline
                fullWidth
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                placeholder="What's on your mind?"
                variant="outlined"
              />
            </CardContent>
            <CardActions>
              <Button onClick={handlePost} color="primary">Post</Button>
            </CardActions>
          </Card>
    )}
  
    {!hidden && (
      <Card onClick={handleNavigateToDetails} style={{ cursor: 'pointer' }}>
        <CardHeader
          avatar={<Avatar aria-label="avatar" src={post.user.avatar} />}
          title={post.user.name}
          subheader={post.timestamp}
          action={
            <>
                <IconButton aria-label="edit post" onClick={handleEdit}>
                <EditIcon />
                </IconButton>
                <IconButton aria-label="delete post" onClick={handleDelete}>
                <DeleteIcon />
                </IconButton>
                <Select
                value={isMuted ? 'Muted' : 'Unmuted'}
                onChange={handleMuteToggle}
                style={{ marginRight: '16px' }}
                >
                <MenuItem value="Unmuted">Unmute</MenuItem>
                <MenuItem value="Muted">Mute</MenuItem>
                </Select>
                <Typography>{post.likes}</Typography>
                <IconButton aria-label="like post" onClick={handleLike}>
                <FavoriteIcon color={liked ? 'error' : 'inherit'} />
              </IconButton>
            </>
          }
        />
        <CardContent>
          <Typography variant="body1" component="p">
            {isEditing ? (
            <TextField
              multiline
              fullWidth
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              variant="outlined"
            />
          ) : (
              post.text
          )}
          </Typography>
          {post.photo && (
            <img src={post.photo} alt="Post" style={{ maxWidth: '100%', marginTop: '1rem' }} />
          )}
        </CardContent>
          <CardActions>
            <IconButton aria-label="comment post" onClick={handleComment}>
              <ArrowForwardIcon />
            </IconButton>
            <TextField
              fullWidth
              value={`${comments.length} Comments`}
              variant="outlined"
              disabled
            />
            <IconButton aria-label="send comment" onClick={handleComment}>
              <SendIcon />
            </IconButton>
          </CardActions>
        </Card>
      )}

      {hidden && (
        <Card>
          <CardContent>
            <Typography>Blog hidden</Typography>
            <Button onClick={handleUndoMute} color="primary">Undo</Button>
          </CardContent>
        </Card>
      )}
    </>
  );
};

// export default FacebookPost;