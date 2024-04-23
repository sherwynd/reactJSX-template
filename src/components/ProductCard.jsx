import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { IconButton, Typography, Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function ProductCard({ product }) {

  const [favourite, setFavourite] = useState(false);
  const handleFavourite = () => { 
    setFavourite(!favourite)
    product.favouriteCount = favourite ? product.favouriteCount - 1 : product.favouriteCount + 1;
   };

  // const profile = {
  //   name: "Sherwynd Liew",
  // }

  return (
    <div>
      <Card elevation={3}>
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
              {product.profile.name.charAt(0)}
            </Avatar>
          }
          action={
            <IconButton aria-label="Love" onClick={handleFavourite}>
              {!favourite ? <FavoriteIcon /> : <FavoriteIcon color='warning' />}
              <Typography m={0.3}>{product.favouriteCount}</Typography>
            </IconButton>
          }
          subheader={product.profile.name}
          sx={{ bgcolor: "secondary.main" }}
        />
        <CardContent sx={{ bgcolor: "secondary.main" }}>
          <Link to={`/discover/${product.id}` } style={{ textDecoration: 'none', color: 'black' }} >
            <Typography variant='subtitle2' marginTop={-2}>{product.title}</Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>RM{product.price.toFixed(2)}</Typography>
              <Typography>{product.listed}</Typography>
            </Box>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}