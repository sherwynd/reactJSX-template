import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { IconButton, Typography, Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

export function ProductCard({ product }) {
  const { updateFavouriteUserinDatabase } = useContext(ProductContext);

  const [favourite, setFavourite] = useState(false);
  const [favouriteCount, setFavouriteCount] = useState(product.favouriteCount);
  const [favouriteCounter, setFavouriteCounter] = useState(product.favouriteCount.length);

  const profile = {
    user_id: "6699",
  }

  useEffect(() => {
    if (favouriteCount.includes(profile.user_id)) {
      setFavourite(true);
    }
    updateFavouriteUserinDatabase(product._id, favouriteCount);
  }, [favouriteCount, favouriteCounter])


  const handleFavourite = () => {
    // setFavourite(!favourite)
    if (favouriteCount.includes(profile.user_id)) {
      setFavourite(!favourite)
      const index = favouriteCount.indexOf(profile.user_id);
      favouriteCount.splice(index, 1);
      setFavouriteCount([...favouriteCount]);
      setFavouriteCounter(favouriteCounter - 1);
    } else {
      setFavouriteCount([...favouriteCount, profile.user_id]);
      setFavouriteCounter(favouriteCounter + 1);
    }
  };

  return (
    <div>
      <Card elevation={3}>
        <CardContent sx={{ p: 0 }}>
          <CardMedia
            component="img"
            image={`http://localhost:3000/${product.imgs[0]}`}
            alt={product.imgs[0]}
          />
        </CardContent>

        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="avatar">
              {/* {product.profile.name.charAt(0)} */}
              T
            </Avatar>
          }
          action={
            <IconButton aria-label="Love" onClick={handleFavourite}>
              {favourite === false ? <FavoriteIcon /> : <FavoriteIcon color='warning' />}
              <Typography m={0.3}>{favouriteCounter}</Typography>
            </IconButton>
          }
          // subheader={product.profile.name}
          subheader="test"
          sx={{ bgcolor: "secondary.main" }}
        />
        <CardContent sx={{ bgcolor: "secondary.main" }}>
          <Link to={{ pathname: `/discover/${product._id}`, state: { product } }} style={{ textDecoration: 'none', color: 'black' }} >
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