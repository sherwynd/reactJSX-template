import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { useParams, Link } from 'react-router-dom';
import { Paper, Grid, Box, Avatar, Typography, Rating, Button } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';
import { CommentCard } from "../../components/CommentCard";
import { useState, useContext, useEffect, useRef } from 'react';
import { ProductContext } from "../../contexts/ProductContext";


const ProductDetail = () => {
  const { id } = useParams();
  const { updateFavouriteUserinDatabase } = useContext(ProductContext);
  const [product, setProduct] = useState({});
  const [favourite, setFavourite] = useState(false);
  const [favouriteCount, setFavouriteCount] = useState([]);
  const [favouriteCounter, setFavouriteCounter] = useState(0);
  const isFirstRender = useRef(true);

  const [creatorProfile, setCreatorProfile] = useState({});
  const profile = JSON.parse(localStorage.getItem('profile'));
  const userId = profile._id;
  const refId = profile.refId;
  const favouriteProducts = profile.favourites || [];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/discover/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        setProduct(json);
        if (json.favouriteCount.includes(userId)) {
          setFavourite(true);
        }
        setFavouriteCount(json.favouriteCount);
        setFavouriteCounter(json.favouriteCount.length);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProduct()
  }, [id]);

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
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    updateFavouriteUserinDatabase(id, favouriteCount);
  }, [favourite])

  useEffect(() => {
    updateFavouriteProductsinDatabase(userId, favouriteProducts);
  }, [favouriteProducts])

  const updateFavouriteProductsinDatabase = async (refId, favouriteProducts) => {
    const response = await fetch(`http://localhost:3000/auth/editAccount/${refId}`, {
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
      setFavourite(false);
      const index = favouriteCount.indexOf(userId);
      favouriteCount.splice(index, 1);
      setFavouriteCount([...favouriteCount]);
      setFavouriteCounter(favouriteCounter - 1);

      //remove product._id from favouriteProducts
      const removedProducts = favouriteProducts.filter(id => id !== product._id);
      localStorage.setItem('profile', JSON.stringify([{
        ...profile, favourites: [...removedProducts]
      }]));
    } else {
      setFavourite(true);
      setFavouriteCount([...favouriteCount, userId]);
      setFavouriteCounter(favouriteCounter + 1);

      //add productId to favourites
      const newFavouriteProducts = [...favouriteProducts, product._id];
      localStorage.setItem('profile', JSON.stringify([{
        ...profile, favourites: [...favouriteProducts, product._id]
      }]));
    }
  };

  const createdAt = typeof product.createdAt === 'string' ? product.createdAt : '';
  const listedDate = JSON.stringify(createdAt).substring(1, 11);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={5} sx={{ mb: 1 }}>
        <Typography variant='h4' sx={{ mx: 8, my: 1 }}>Product Detail</Typography>
        <Carousel>
          {
            product.imgs && product.imgs.map((img, i) => <Item key={i} item={img} />)
          }
        </Carousel>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={7} sx={{ bgcolor: "secondary.main" }} style={{ height: '85vh', overflowY: 'auto', overflowX: "hidden" }}>
        <Grid container>
          <Grid item sx={{ my: 3, display: "flex", justifyContent: "space-between" }}>
            <Avatar sx={{ bgcolor: red[500], height: 60, width: 60, mx: 2 }} aria-label="avatar">
              {creatorProfile.username.charAt(0)}
            </Avatar>
            <Box>
              <Typography variant='h6'>
                {creatorProfile.nickname}
              </Typography>
              <Typography>
                {creatorProfile.username}
              </Typography>
            </Box>
            <Rating
              sx={{ my: .3, mx: 2 }}
              name="user-rating"
              // value={product.profile.rating}
              value={profile.rating}
              precision={0.5}
              readOnly />
            <Link to={`/cart`} >
              {product.creatorId != refId && <Button variant="outlined" color="primary" sx={{ borderRadius: 3 }}>Buy Now</Button>}
            </Link>

            <Link to={`/discover/${id}/update`} >
              {product.creatorId == refId && <Button variant="outlined" sx={{ mx: 2, borderRadius: 3 }} >Update</Button>}
            </Link>

            <Box>
                <Button aria-label="Love" onClick={handleFavourite} sx={{ mx: 2, py: .9, borderRadius: 3 }} variant='outlined'>
                  {favourite === false ? <FavoriteIcon /> : <FavoriteIcon color='warning' />}
                  <Typography>{favouriteCounter}</Typography>
                </Button>
            </Box>

          </Grid>
          <Grid item xs={12}>
            <Typography variant='h5' sx={{ m: 2 }}>
              {product.title}
            </Typography>
            <Typography variant='h6' sx={{ m: 2 }}>
              RM {product.price}
            </Typography>
            <Typography sx={{ m: 2 }}>
              {product.description}
            </Typography>
            <Grid container sx={{ m: 2 }}>
              <Grid item xs={6}>
                <Typography variant='h6'>
                  Condition
                </Typography>
                <Typography>
                  {product.condition}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant='h6'>
                  Category
                </Typography>
                <Typography>
                  {product.category}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant='h6'>
                  Brand
                </Typography>
                <Typography>
                  {product.brand}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant='h6'>
                  Listed
                </Typography>
                <Typography>
                  {listedDate}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant='h6'>
                  Acquisition
                </Typography>
                <Typography>
                  {product.acquisition}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant='h6'>
                  Location
                </Typography>
                <Typography>
                  {product.location}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant='h6'>
                  Contact
                </Typography>
                <Typography>
                  {/* {product.profile.phone} */}
                  {creatorProfile.email}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant='h6'>
                  Status
                </Typography>
                <Typography>
                  {product.isAvailable == true ? "Available" : "Sold"}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='h5' sx={{ my: 5 }}>
                  Review on Seller
                </Typography>
                <Grid container spacing={2}>
                  {/* {product.profile.comments.map(comment => (
                    <Grid item key={comment.id} xs={12} sx={{ mr: 5 }}>
                      <CommentCard comment={comment} />
                    </Grid>
                  ))} */}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

function Item(props) {
  return (
    <Paper elevation={3} sx={{ mx: 8, height: '70vh' }}>
      <Box component="img"
        src={`http://localhost:3000/${props.item}`}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          objectFit: "contain"
        }}
      >
      </Box>
    </Paper>
  )
}

export default ProductDetail;
