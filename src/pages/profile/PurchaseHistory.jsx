import { Box, Grid, Paper, styled } from "@mui/material";
import { ProductHistoryCard } from "../../components/ProductHistoryCard";
// import AvatarA from "../../assets/images/shoe1.jpg";
// import AvatarB from "../../assets/images/racket1.jpeg";
// import AvatarC from "../../assets/images/ball1.jpg";
// import AvatarD from "../../assets/images/swimming1.jpeg";
export function PurchaseHistory() {
  const [ratingStarHistoryValue, setRatingStarHistoryValue] = useState(3.5);
  const [reviewValue, setReviewValue] = useState(10);
  const purchase = [
    //sample
    {
      id: 0,
      name: "Muhammad Ali",
      title: "Ipsum amet, consectetur adipiscing elit 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 249.0,
      img: "../src/assets/images/shoe1.jpg",
      condition: "New",
      category: "Running",
      brand: "Asics",
      listed: "2021-10-10",
      location: "Cyberjaya",
      acquisition: "Delivery Only",
      isAvailable: true,
      favouriteCount: 8,
      id: 1,
      profile: {
        name: "Lee Tian Sien",
        username: "@tslee",
        rating: 4.5,
        id: 6699,
        phone: "0123456789",
      },
    },
    {
      title: "Ipsum amet, consectetur adipiscing elit 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 59,
      img: "../src/assets/images/shirt1.jpg",
      condition: "New",
      category: "Shirts",
      brand: "Apple",
      listed: "2021-10-10",
      location: "Kulim",
      acquisition: "Meetup or Delivery",
      isAvailable: true,
      favouriteCount: 6,
      id: 2,
      profile: {
        name: "Sherwynd Liew",
        username: "@tslee",
        rating: 4.5,
        id: 6699,
        phone: "0123456789",
      },
    },
    {
      title: "Ipsum amet, consectetur adipiscing elit 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 129.9,
      img: "../src/assets/images/racket1.jpeg",
      condition: "New",
      category: "Badminton",
      brand: "Apple",
      listed: "2021-10-10",
      location: "Alor Setar",
      acquisition: "Meetup or Delivery",
      isAvailable: true,
      favouriteCount: 23,
      id: 3,
      profile: {
        name: "Carrot Hong",
        username: "@tslee",
        rating: 4.5,
        id: 6699,
        phone: "0123456789",
      },
    },
    {
      title: "Ipsum amet, consectetur adipiscing elit 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 325,
      img: "../src/assets/images/shoe3.webp",
      condition: "New",
      category: "Running",
      brand: "Apple",
      listed: "2021-10-10",
      location: "Melaka",
      acquisition: "Meetup or Delivery",
      isAvailable: true,
      favouriteCount: 0,
      id: 4,
      profile: {
        name: "Nevelle Teh",
        username: "@tslee",
        rating: 4.5,
        id: 6699,
        phone: "0123456789",
      },
    },
    {
      title: "Ipsum amet, consectetur adipiscing elit 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 99,
      img: "../src/assets/images/ball1.jpg",
      condition: "New",
      category: "Football",
      brand: "Apple",
      listed: "2021-10-10",
      location: "Pahang",
      acquisition: "Meetup or Delivery",
      isAvailable: true,
      favouriteCount: 1,
      id: 5,
      profile: {
        name: "Xian Heng",
        username: "@tslee",
        rating: 4.5,
        id: 6699,
        phone: "0123456789",
      },
    },
    {
      title: "Ipsum amet, consectetur adipiscing elit 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 289.5,
      img: "../src/assets/images/shoe5.jpg",
      condition: "New",
      category: "Running",
      brand: "Adidas",
      listed: "2021-10-10",
      location: "Penang",
      acquisition: "Meetup or Delivery",
      isAvailable: true,
      favouriteCount: 13,
      id: 6,
      profile: {
        name: "John Doe",
        username: "@tslee",
        rating: 4.5,
        id: 6699,
        phone: "0123456789",
      },
    },
    {
      title: "Ipsum amet, consectetur adipiscing elit 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 65,
      img: "../src/assets/images/swimming1.jpeg",
      condition: "New",
      category: "Swimming",
      brand: "Nike",
      listed: "2021-10-10",
      location: "Johor Bahru",
      acquisition: "Meetup or Delivery",
      isAvailable: true,
      favouriteCount: 6,
      id: 7,
      profile: {
        name: "Pandelela Rinong",
        username: "@tslee",
        rating: 4.5,
        id: 6699,
        phone: "0123456789",
      },
    },
  ];
  return (
    <>
      <Box sx={{ display: "flex", flexGrow: 1, flexDirection: "column" }}>
        {purchase.map((purchase) => (
          <Box key={purchase.id} sx={{ mx: 2, my: 1 }}>
            <PurchaseHistoryCard purchase={purchase} />
          </Box>
        ))}
      </Box>
    </>
  );
}
