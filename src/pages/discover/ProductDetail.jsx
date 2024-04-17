import React from 'react';
import { useParams } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel'
import { Paper, Grid, Box, Avatar, Typography, Rating, Button } from '@mui/material'
import { red } from '@mui/material/colors';
import { CommentCard } from "../../components/CommentCard";
import { Link } from 'react-router-dom';


export default function ProductDetail() {
  const { id } = useParams();

  const imgs = [
    //sample
    {
      img: "../src/assets/images/image1.png"
    },
    {
      img: "../src/assets/images/image2.png"
    },
    {
      img: "../src/assets/images/Fake-Jordan.png"
    },
    {
      img: "../src/assets/images/avatar.png"
    },
  ]

  const comments = [
    //sample
    {
      id: 1,
      name: "Chiam Yin Kia",
      text: "Comment 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "2021-10-10"
    },
    {
      id: 2,
      name: "Chiam Yin Kia",
      text: "Comment 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      date: "2022-11-11"
    },
    {
      id: 3,
      name: "Chiam Yin Kia",
      text: "Comment 3 Lorem ipsum dolor, sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "2023-12-12"
    }
  ]

  const product = {
    //sample
    title: "Ipsum amet, consectetur adipiscing elit 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 100,
    img: "src\\assets\\images\\image1.png",
    condition: "New",
    category: "Electronics",
    brand: "Apple",
    listed: "2021-10-10",
    location: "Malaysia",
    acquisition: "Meetup or Delivery",
    id: 1
  };

  const profile = {
    //sample
    name: "Chiam Yin Kia",
    username: "@chiamyinkia",
    rating: 4.5,
    id: 6699
  }

  const ownProfile = {
    name: "Chiam Yin Kia",
    username: "@chiamyinkia",
    rating: 4.5,
    //match the id to see the 'update button'
    id: 669
  }

  return (
    <div>
      <Typography variant='h4' sx={{ mx: 8, my: 3 }}>Product Detail</Typography>
      <Grid container overflow="hidden">
        <Grid item xs={12} sm={12} md={5}>
          <Carousel>
            {
              imgs.map((img, i) => <Item key={i} item={img} />)
            }
          </Carousel>
        </Grid>
        <Grid item xs={12} sm={12} md={7}>
          <Grid container>
            <Grid item sx={{ my: 3, display: "flex", justifyContent: "space-between" }}>
              <Avatar sx={{ bgcolor: red[500], height: 60, width: 60, mx: 2 }} aria-label="avatar">
                C
              </Avatar>
              <Box>
                <Typography variant='h6'>
                  {profile.name}
                </Typography>
                <Typography>
                  {profile.username}
                </Typography>
              </Box>
              <Rating
                sx={{ my: .3, mx: 2 }}
                name="user-rating"
                value={profile.rating}
                precision={0.5}
                readOnly />
              <Link to={`/payment/${id}`} >
                {profile.id != ownProfile.id && <Button variant="contained" color="primary">Buy Now</Button>}
              </Link>
              <Link to={`/discover/${id}/update`} >
                {profile.id == ownProfile.id && <Button variant="outlined" sx={{ mx: 2 }} >Update</Button>}
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h5' sx={{ m: 2 }}>
                {product.title}
              </Typography>
              <Typography variant='h6' sx={{ m: 2 }}>
                RM69
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
                <Grid item xs={12}>
                  <Typography variant='h5' sx={{ my: 5 }}>
                    Review on Seller
                  </Typography>
                  <Grid container spacing={2}>
                    {comments.map(comment => (
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

    </div>
  );
};

function Item(props) {
  return (
    <Paper sx={{ mx: 8, height: '70vh' }}>
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
