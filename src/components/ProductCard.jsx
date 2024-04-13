import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { IconButton, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';

export function ProductCard({ product }) {

  return (
    <div>
      <Card>
        <CardContent sx={{ p: 0 }}>
          <CardMedia
            component="img"
            image={product.img}
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
          <Link to={`/discover/${product.id}`} style={{ textDecoration: 'none', color: 'black' }} >
            <Typography variant='h6' marginTop={-2}>{product.title}</Typography>
            <Typography>RM{product.price}</Typography>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}