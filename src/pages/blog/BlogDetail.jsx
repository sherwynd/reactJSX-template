import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardHeader, CardContent, Avatar, Typography, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const BlogDetails = () => {
  const location = useLocation();
  const { post } = location.state;
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);

  const currentUser = {
    id: 1,
    name: 'John Doe',
    avatar: 'https://via.placeholder.com/150',
  };

  const handleComment = () => {
    const newComment = {
      id: comments.length + 1,
      text: commentText,
      user: currentUser,
      timestamp: new Date().toLocaleString()
    };
    setComments([...comments, newComment]);
    setCommentText('');
  };

  return (
    <>
      <Card>
        <CardHeader
          avatar={<Avatar aria-label="avatar" src={post.user.avatar} />}
          title={post.user.name}
          subheader={post.timestamp}
        />
        <CardContent>
          <Typography variant="body1" component="p">
            {post.text}
          </Typography>
          {post.photo && (
            <img src={post.photo} alt="Post" style={{ maxWidth: '100%', marginTop: '1rem' }} />
          )}
        </CardContent>
      </Card>

      <Typography variant="h6" style={{ margin: '1rem 0' }}>Comments</Typography>
      
      {comments.map(comment => (
        <Card key={comment.id} style={{ marginBottom: '8px' }}>
          <CardHeader
            avatar={<Avatar aria-label="avatar" src={comment.user.avatar} />}
            title={comment.user.name}
            subheader={comment.timestamp}
          />
          <CardContent>
            <Typography>{comment.text}</Typography>
          </CardContent>
        </Card>
      ))}

      <TextField
        fullWidth
        placeholder="Write a comment..."
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <IconButton aria-label="send comment" onClick={handleComment}>
        <SendIcon />
      </IconButton>
    </>
  );
};

//export default BlogDetails;
