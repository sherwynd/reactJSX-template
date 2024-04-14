import { Box } from "@mui/material";
import { ProductCard } from "../../components/ProductCard";
import Masonry from "react-masonry-css";

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
            img: "src\\assets\\images\\Fake-Jordan.png",
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
            img: "src\\assets\\images\\avatar.png",
            condition: "old",
            category: "fruit",
            brand: "orange",
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
            id: 5
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 666,
            img: "src\\assets\\images\\image1.png",
            condition: "new",
            category: "electronics",
            brand: "apple",
            id: 6
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 111,
            img: "src\\assets\\images\\image2.png",
            condition: "new",
            category: "electronics",
            brand: "apple",
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
