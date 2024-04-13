import { Grid, Box, Button } from "@mui/material";
import { ProductCard } from "../../components/ProductCard";
import { Link } from "react-router-dom";

export function Discover() {
    const products = [
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 100,
            img: "src\\assets\\images\\image1.png",
            condition: "new",
            category: "electronics",
            brand: "apple",
            id: 1
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 69,
            img: "src\\assets\\images\\image2.png",
            condition: "not new",
            category: "shoe",
            brand: "pineapple",
            id: 2
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 777,
            img: "src\\assets\\images\\image2.png",
            condition: "like new",
            category: "sports",
            brand: "nike",
            id: 3
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 1010,
            img: "src\\assets\\images\\image2.png",
            condition: "old",
            category: "fruit",
            brand: "orange",
            id: 4
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 9,
            img: "src\\assets\\images\\image1.png",
            condition: "very new",
            category: "not electronics",
            brand: "not apple",
            id: 5
        }
    ];
    return (
        <Box sx={{
            margin: 5,
            // minWidth: 350
        }}>
            <Grid container spacing={3}>
                {products.map(product => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
