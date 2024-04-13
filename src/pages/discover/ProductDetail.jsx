import React from 'react';
import { useParams } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel'
import { Paper, Grid, Box, Avatar, Typography, Rating, Button } from '@mui/material'
import { red } from '@mui/material/colors';
import { CommentCard } from "../../components/CommentCard";


export default function ProductDetail() {
  const { id } = useParams();
  const items = [
    {
      img: "../src/assets/images/image1.png"
    },
    {
      img: "../src/assets/images/image2.png"
    }
  ]

  const comments = [
    {
      id: 1,
      name: "Chiam Yin Kia",
      text: "Comment 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    },
    {
      id: 2,
      name: "Chiam Yin Kia",
      text: "Comment 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    },
    {
      id: 3,
      name: "Chiam Yin Kia",
      text: "Comment 3 Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    }
  ]
  return (
    <div>
      <Typography variant='h4' sx={{ mx: 8, my: 3 }}>Product Detail</Typography>
      <Grid container overflow="hidden">
        <Grid item xs={5}>
          <Carousel>
            {
              items.map((item, i) => <Item key={i} item={item} />)
            }
          </Carousel>
        </Grid>
        <Grid item xs={7}>
          <Grid container>
            <Grid item display="flex" xs={12}>
              <Avatar sx={{ bgcolor: red[500], height: 60, width: 60, mx: 2 }} aria-label="avatar">
                C
              </Avatar>
              <div>
                <Typography variant='h6'>
                  Chiam Yin Kia
                </Typography>
                <Typography>
                  @chiamyinkia
                </Typography>
              </div>
              <Rating
                sx={{ my: .3, mx: 2 }}
                name="user-rating"
                value="4.5"
                precision="0.5"
                readOnly />
              <Button variant="contained" color="primary">Buy Now</Button>
            </Grid>
            <Grid item>
              <Typography variant='h5' sx={{ m: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Typography>
              <Typography variant='h6' sx={{ m: 2 }}>
                RM69
              </Typography>
              <Typography sx={{ m: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
              <Grid container sx={{ m: 2 }}>
                <Grid item xs={6}>
                  <Typography variant='h6'>
                    Condition
                  </Typography>
                  <Typography>
                    Like New
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant='h6'>
                    Category
                  </Typography>
                  <Typography>
                    Tower
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant='h6'>
                    Brand
                  </Typography>
                  <Typography>
                    Japan
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant='h6'>
                    Listed
                  </Typography>
                  <Typography>
                    11-11-2024
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant='h6'>
                    Acquisition
                  </Typography>
                  <Typography>
                    Meetup<br />
                    Delivery
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant='h5' sx={{ my: 5 }}>
                    Review on Seller
                  </Typography>
                  <Grid container spacing={2}>
                    {comments.map(comment => (
                      <Grid item key={comment.id} xs={12} sx={{mr: 5}}>
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
