import React from 'react';
import { useParams } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel'
import { Paper, Grid, Box, Avatar, Typography, Rating, Button, IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';
import { CommentCard } from "../../components/CommentCard";
import { Link } from 'react-router-dom';
import { useState } from 'react';


const ProductDetail = () => {
  const { id } = useParams();

  //sample
  const product = {
    title: "Ipsum amet, consectetur adipiscing elit 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    price: 249.00,
    img: "src\\assets\\images\\shoe1.jpg",
    condition: "Like New",
    category: "Shoes",
    brand: "Asics",
    listed: "2021-10-10",
    location: "Putrajaya",
    acquisition: "Delivery Only",
    isAvailable: true,
    favouriteCount: 8,
    id: 1,
    imgs: [
      {
        img: "../src/assets/images/shoe1.jpg"
      },
      {
        img: "../src/assets/images/shoe2.jpg"
      }
    ],
    profile: {
      name: "Lee Tian Sien",
      username: "@tslee",
      rating: 4.5,
      id: 6699,
      phone: "0123456789",
      comments: [
        {
          id: 1,
          name: "Sherwynd Liew",
          text: "Review 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          date: "2021-10-10"
        },
        {
          id: 2,
          name: "Neville Teh",
          text: "Review 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
          date: "2022-11-11"
        },
        {
          id: 3,
          name: "Carrot Hong",
          text: "Review 3 Lorem ipsum dolor, sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          date: "2023-12-12"
        }
      ]
    }
  };

  const ownProfile = {
    name: "Lee Tian Sien",
    username: "@tslee",
    rating: 4.5,
    //match the id to see the 'update button'
    id: 669
  }

  const [favourite, setFavourite] = useState(false);
  const [favouriteCount, setFavouriteCount] = useState(product.favouriteCount);
  const handleFavourite = () => {
    setFavourite(!favourite)
    setFavouriteCount(favourite ? favouriteCount - 1 : favouriteCount + 1);
  };

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={5} sx={{ mb: 1 }}>
        <Typography variant='h4' sx={{ mx: 8, my: 1 }}>Product Detail</Typography>
        <Carousel>
          {
            product.imgs.map((img, i) => <Item key={i} item={img} />)
          }
        </Carousel>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={7} sx={{ bgcolor: "secondary.main" }} style={{ height: '85vh', overflowY: 'auto', overflowX: "hidden" }}>
        <Grid container>
          <Grid item sx={{ my: 3, display: "flex", justifyContent: "space-between" }}>
            <Avatar sx={{ bgcolor: red[500], height: 60, width: 60, mx: 2 }} aria-label="avatar">
              {product.profile.name.charAt(0)}
            </Avatar>
            <Box>
              <Typography variant='h6'>
                {product.profile.name}
              </Typography>
              <Typography>
                {product.profile.username}
              </Typography>
            </Box>
            <Rating
              sx={{ my: .3, mx: 2 }}
              name="user-rating"
              value={product.profile.rating}
              precision={0.5}
              readOnly />
            <Link to={`/cart`} >
              {product.profile.id != ownProfile.id && <Button variant="outlined" color="primary" sx={{borderRadius: 3}}>Buy Now</Button>}
            </Link>

            <Link to={`/discover/${product.id}/update`} >
              {product.profile.id == ownProfile.id && <Button variant="outlined" sx={{ mx: 2, borderRadius: 3 }} >Update</Button>}
            </Link>

            <Box>
              {product.profile.id != ownProfile.id &&
                <Button aria-label="Love" onClick={handleFavourite} sx={{ mx: 2, py: .9, borderRadius: 3 }} variant='outlined'>
                  {!favourite ? <FavoriteIcon /> : <FavoriteIcon color='warning' />}
                  <Typography>{favouriteCount}</Typography>
                </Button>
              }
            </Box>

          </Grid>
          <Grid item xs={12}>
            <Typography variant='h5' sx={{ m: 2 }}>
              {product.title}
            </Typography>
            <Typography variant='h6' sx={{ m: 2 }}>
              RM {product.price.toFixed(2)}
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
                  {product.listed}
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
                  {product.profile.phone}
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
                  {product.profile.comments.map(comment => (
                    <Grid item key={comment.id} xs={12} sx={{ mr: 5 }}>
                      <CommentCard comment={comment} />
                    </Grid>
                  ))}
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
        src={props.item.img}
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
