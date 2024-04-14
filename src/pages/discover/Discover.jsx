import { Box, FormControl, InputLabel, OutlinedInput, InputAdornment, Button } from "@mui/material";
import { ProductCard } from "../../components/ProductCard";
import Masonry from "react-masonry-css";
import SearchIcon from '@mui/icons-material/Search';

export function Discover() {
    const products = [
        {
            title: "Ipsum amet, consectetur adipiscing elit 1",
            description: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 100,
            img: "src\\assets\\images\\image1.png",
            condition: "new",
            category: "electronics",
            brand: "apple",
            listed: "2021-10-10",
            id: 1
        },
        {
            title: "Lorem  dolor sit amet, adipiscing elit 2",
            description: "Dolor sit eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 69,
            img: "src\\assets\\images\\Fake-Jordan.png",
            condition: "not new",
            category: "shoe",
            brand: "pineapple",
            listed: "2021-10-10",
            id: 2
        },
        {
            title: "Lorem ipsum dolor adipiscing elit 3",
            description: "Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            price: 777,
            img: "src\\assets\\images\\image2.png",
            condition: "like new",
            category: "sports",
            brand: "nike",
            listed: "2021-10-10",
            id: 3
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur elit 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt aliqua.",
            price: 1010,
            img: "src\\assets\\images\\avatar.png",
            condition: "old",
            category: "fruit",
            brand: "orange",
            listed: "2021-10-10",
            id: 4
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 9,
            img: "src\\assets\\images\\Fake-Jordan.png",
            condition: "very new",
            category: "not electronics",
            brand: "not apple",
            listed: "2021-10-10",
            id: 5
        },
        {
            title: "Dolor sit amet, consectetur adipiscing elit 1",
            description: "Lorem ipsum dolconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 666,
            img: "src\\assets\\images\\image1.png",
            condition: "new",
            category: "electronics",
            brand: "apple",
            listed: "2021-10-10",
            id: 6
        },
        {
            title: "Lorem dolor sit amet, consectetur adipiscing elit 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 111,
            img: "src\\assets\\images\\image2.png",
            condition: "new",
            category: "electronics",
            brand: "apple",
            listed: "2021-10-10",
            id: 7
        },
    ];

    const breakpointColumnsObj = {
        default: 4,
        1500: 4,
        1100: 3,
        800: 2,
        500: 1
    };

    return (
        <Box sx={{
            margin: 5,
            // minWidth: 350
        }}>
            <Box component="form" sx={{ display: "flex", my: 3 }}>
                <FormControl required fullWidth>
                    <InputLabel htmlFor="outlined-adornment-search">Search</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-search"
                        startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
                        label="Amount"
                    />
                </FormControl>
                <Button variant="contained" color="success" type="submit" sx={{ mx: 1, width: "20vh" }}>Search</Button>
            </Box>

            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {products.map(product => (
                    <div key={product.id} >
                        <ProductCard product={product} />
                    </div>
                ))}
            </Masonry>
        </Box>
    );
}
