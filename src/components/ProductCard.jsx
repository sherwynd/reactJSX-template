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
import { useState, useContext, useRef } from 'react';
import { ProductContext } from '../contexts/ProductContext';

export function ProductCard({ product }) {
  const { updateFavouriteUserinDatabase } = useContext(ProductContext);
  const userData = JSON.parse(localStorage.getItem('profile'));
  const userId = userData._id;
  const refId = userData.refId;
  const favouriteProducts = userData.favourites || [];
  const [creatorProfile, setCreatorProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const isFirstRender = useRef(true);

  const [favourite, setFavourite] = useState(false);
  const [favouriteCount, setFavouriteCount] = useState(product.favouriteCount);
  const [favouriteCounter, setFavouriteCounter] = useState(product.favouriteCount.length);

  useEffect(() => {
    const fetchCreatorProfile = async () => {
      const response = await fetch(`http://localhost:3000/auth/getAccount/${product.creatorId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
      setCreatorProfile(json);
      setLoading(false);
    }
    fetchCreatorProfile();
  }, [product.creatorId])

  useEffect(() => {
    if (favouriteCount.includes(userId)) {
      setFavourite(true);
    }
    updateFavouriteUserinDatabase(product._id, favouriteCount);
  }, [favouriteCount, favouriteCounter])

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    updateFavouriteProductsinDatabase(userId, favouriteProducts);
  }, [favouriteProducts])

  const updateFavouriteProductsinDatabase = async (userId, favouriteProducts) => {
    const response = await fetch(`http://localhost:3000/auth/editAccount/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ favourites: favouriteProducts })
    })
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  }


  const handleFavourite = () => {
    if (favouriteCount.includes(userId)) {
      setFavourite(!favourite)
      //remove refId from favouriteCount
      const removedRefId = favouriteCount.filter(id => id !== userId);
      setFavouriteCount([...removedRefId]);
      setFavouriteCounter(favouriteCounter - 1);

      //remove product._id from favouriteProducts
      const removedProducts = favouriteProducts.filter(id => id !== product._id);
      userData.favourites = removedProducts;
      localStorage.setItem('profile', JSON.stringify(userData));
    }
    else {
      //add refId to favouriteCount
      setFavouriteCount([...favouriteCount, userId]);
      setFavouriteCounter(favouriteCounter + 1);

      //add productId to favourites
      const newFavouriteProducts = [...favouriteProducts, product._id];
      userData.favourites = newFavouriteProducts;
      localStorage.setItem('profile', JSON.stringify(userData));
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

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
              {creatorProfile.username.charAt(0)}
            </Avatar>
          }
          action={
            <IconButton aria-label="Love" onClick={handleFavourite}>
              {favourite === false ? <FavoriteIcon /> : <FavoriteIcon color='warning' />}
              <Typography m={0.3}>{favouriteCounter}</Typography>
            </IconButton>
          }
          subheader={creatorProfile.username}
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