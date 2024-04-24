import { Box, Grid, Paper, styled } from "@mui/material";
import { ProductHistoryCard } from "../../components/ProductHistoryCard";
import AvatarA from "../../assets/images/shoe1.jpg";
import AvatarB from "../../assets/images/basket1.jpeg";
import AvatarC from "../../assets/images/shoe6.webp";
import AvatarD from "../../assets/images/ball2.jpg";
export function ProductHistory() {
  const products = [
    {
      title: "Ipsum amet, consectetur adipiscing elit 1",
      description:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 100,
      img: AvatarA,
      condition: "new",
      category: "electronics",
      brand: "apple",
      listed: "2021-10-10",
      id: 1,
    },
    {
      title: "Lorem  dolor sit amet, adipiscing elit 2",
      description:
        "Dolor sit eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 69,
      img: AvatarB,
      condition: "not new",
      category: "shoe",
      brand: "pineapple",
      listed: "2021-10-10",
      id: 2,
    },
    {
      title: "Lorem ipsum dolor adipiscing elit 3",
      description:
        "Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      price: 777,
      img: AvatarC,
      condition: "like new",
      category: "sports",
      brand: "nike",
      listed: "2021-10-10",
      id: 3,
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur elit 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt aliqua.",
      price: 1010,
      img: AvatarD,
      condition: "old",
      category: "fruit",
      brand: "orange",
      listed: "2021-10-10",
      id: 4,
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 9,
      img: AvatarC,
      condition: "very new",
      category: "not electronics",
      brand: "not apple",
      listed: "2021-10-10",
      id: 5,
    },
    {
      title: "Dolor sit amet, consectetur adipiscing elit 1",
      description:
        "Lorem ipsum dolconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 666,
      img: AvatarA,
      condition: "new",
      category: "electronics",
      brand: "apple",
      listed: "2021-10-10",
      id: 6,
    },
    {
      title: "Lorem dolor sit amet, consectetur adipiscing elit 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 111,
      img: AvatarC,
      condition: "new",
      category: "electronics",
      brand: "apple",
      listed: "2021-10-10",
      id: 7,
    },
  ];

  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", m: 1, flexGrow: 1 }}
      >
        <Grid container spacing={1}>
          {products.map((product) => (
            <Grid item xs={4} key={product.id}>
              <ProductHistoryCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
