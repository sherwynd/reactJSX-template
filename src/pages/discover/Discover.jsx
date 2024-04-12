import { Grid, Box } from "@mui/material";
import { PostCard } from "../../components/PostCard";
import { ResponsiveDrawer } from "../../components/Navbar";

export function Discover() {
    const posts = [
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            price: 100,
            img: "src\\assets\\images\\image1.png",
            id: 1
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            price: 69,
            img: "src\\assets\\images\\image2.png",
            id: 2
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            price: 777,
            img: "src\\assets\\images\\image2.png",
            id: 3
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            price: 1010,
            img: "src\\assets\\images\\image2.png",
            id: 4
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            price: 9,
            img: "src\\assets\\images\\image1.png",
            id: 5
        }
    ];
    return (
        <Box sx={{
            margin: 5,
            // minWidth: 350
        }}>
            <Grid container spacing={3}>
                {posts.map(post => (
                    <Grid item key={post.id} xs={12} sm={6} md={4} lg={3}>
                        <PostCard post={post} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
