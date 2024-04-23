import {
  Box,
  Button,
  Typography,
} from "@mui/material";
import { ProductCard } from "../../components/ProductCard";
import Masonry from "react-masonry-css";
import { useState } from "react";

export function Discover() {
    const products = [
        {
            title: "Ipsum amet, consectetur adipiscing elit 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 249.00,
            img: "src\\assets\\images\\shoe1.jpg",
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
            }
        },
        {
            title: "Ipsum amet, consectetur adipiscing elit 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 59,
            img: "src\\assets\\images\\shirt1.jpg",
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
            }
        },
        {
            title: "Ipsum amet, consectetur adipiscing elit 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 129.90,
            img: "src\\assets\\images\\racket1.jpeg",
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
            }
        },
        {
            title: "Ipsum amet, consectetur adipiscing elit 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 325,
            img: "src\\assets\\images\\shoe3.webp",
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
            }
        },
        {
            title: "Ipsum amet, consectetur adipiscing elit 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 99,
            img: "src\\assets\\images\\ball1.jpg",
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
            }
        },
        {
            title: "Ipsum amet, consectetur adipiscing elit 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 289.50,
            img: "src\\assets\\images\\shoe5.jpg",
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
            }
        },
        {
            title: "Ipsum amet, consectetur adipiscing elit 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 65,
            img: "src\\assets\\images\\swimming1.jpeg",
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
            }
        },
        {
            title: "Ipsum amet, consectetur adipiscing elit 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 180,
            img: "src\\assets\\images\\shoe6.webp",
            condition: "New",
            category: "Running",
            brand: "Apple",
            listed: "2021-10-10",
            location: "Johor Bahru",
            acquisition: "Meetup or Delivery",
            isAvailable: true,
            favouriteCount: 9,
            id: 8,
            profile: {
                name: "Alex Tan",
                username: "@tslee",
                rating: 4.5,
                id: 6699,
                phone: "0123456789",
            }
        },
        {
            title: "Ipsum amet, consectetur adipiscing elit 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 100,
            img: "src\\assets\\images\\swimming2.webp",
            condition: "New",
            category: "Swimming",
            brand: "Apple",
            listed: "2021-10-10",
            location: "Johor Bahru",
            acquisition: "Meetup or Delivery",
            isAvailable: true,
            favouriteCount: 3,
            id: 9,
            profile: {
                name: "Michael Phelps",
                username: "@tslee",
                rating: 4.5,
                id: 6699,
                phone: "0123456789",
            }
        },
        {
            title: "Ipsum amet, consectetur adipiscing elit 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 120,
            img: "src\\assets\\images\\basket1.jpeg",
            condition: "New",
            category: "Basketball",
            brand: "Apple",
            listed: "2021-10-10",
            location: "Johor Bahru",
            acquisition: "Meetup or Delivery",
            isAvailable: true,
            favouriteCount: 0,
            id: 10,
            profile: {
                name: "Michael Jordan",
                username: "@tslee",
                rating: 4.5,
                id: 6699,
                phone: "0123456789",
            }
        },
        {
            title: "Ipsum amet, consectetur adipiscing elit 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 215,
            img: "src\\assets\\images\\racket3.jpeg",
            condition: "New",
            category: "Badminton",
            brand: "Apple",
            listed: "2021-10-10",
            location: "Johor Bahru",
            acquisition: "Meetup or Delivery",
            isAvailable: true,
            favouriteCount: 17,
            id: 11,
            profile: {
                name: "Lee Chong Wei",
                username: "@tslee",
                rating: 4.5,
                id: 6699,
                phone: "0123456789",
            }
        },
        {
            title: "Ipsum amet, consectetur adipiscing elit 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 139,
            img: "src\\assets\\images\\tt1.webp",
            condition: "New",
            category: "Table Tennis",
            brand: "Apple",
            listed: "2021-10-10",
            location: "Johor Bahru",
            acquisition: "Meetup or Delivery",
            isAvailable: true,
            favouriteCount: 2,
            id: 12,
            profile: {
                name: "Ma Long",
                username: "@tslee",
                rating: 4.5,
                id: 6699,
                phone: "0123456789",
            }
        },
    ];

  const breakpointColumnsObj = {
    default: 4,
    1500: 4,
    1200: 3,
    1000: 2,
    800: 1,
  };

    const categories = ['All', 'Running', 'Shirts', 'Badminton', 'Football', 'Swimming', 'Basketball', 'Table Tennis', 'Tennis', 'Squash', 'Hockey', ];
    const [filteredProducts, setFilteredProducts] = useState(products);
    const filterProducts = (category) => {
        if (category === 'All') {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(product => product.category === category);
            setFilteredProducts(filtered);
        }
    };
    return (
        <Box>
            <Box sx={{ display: 'flex', overflowX: "auto", '&::-webkit-scrollbar': { display: 'none' } }}>
                {categories.map((category, index) => (
                    <Button key={index} sx={{ mx: 1, width: "350px", height: "8vh", fontSize: 14 }} onClick={() => filterProducts(category)}>
                        {category}
                    </Button>
                ))}
            </Box>

            <Typography variant="h3" sx={{ my: 2 }}>Discover</Typography>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {filteredProducts.map(product => (
                    <div key={product.id} >
                        <ProductCard product={product} />
                    </div>
                ))}
            </Masonry>
        </Box>
    );
}
