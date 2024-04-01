import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { IconButton, Typography } from '@mui/material';
import { Settings } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';



export function PostCard({ post }) {
  return (
    <div>
      <Card>
        <CardContent sx={{ p: 0 }}>
          <CardMedia
            component="img"
            image={post.img}
            alt="media"
          />
        </CardContent>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="avatar">
              C
            </Avatar>
          }
          action={
            <IconButton aria-label="Love">
              <FavoriteIcon />
              <Typography m={0.3}>10</Typography>
            </IconButton>
          }
          subheader="Chiam Yin Kia"
        />
        <CardContent>
          <Typography variant='h6' marginY={-2}>{post.title}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}