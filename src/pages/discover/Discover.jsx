import { Grid, Box } from "@mui/material";
import { PostCard } from "../../components/PostCard";
import { ResponsiveDrawer } from "../../components/Navbar";

export function Discover() {
    const posts = [
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 1",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            img: "src\\assets\\images\\image1.png",
            id: 1
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 2",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            img: "src\\assets\\images\\image2.png",
            id: 2
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 3",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            img: "src\\assets\\images\\image2.png",
            id: 3
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 2",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            img: "src\\assets\\images\\image2.png",
            id: 4
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 1",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            img: "src\\assets\\images\\image1.png",
            id: 5
        }
    ];
    return (
        <Box sx={{
            display: "flex",
            mt: 12,
            ml: -5,
            mr: 5
            // mt: navbarWidth
        }}>
            <ResponsiveDrawer />
            <Grid container spacing={3}>
                {posts.map(post => (
                    <Grid item key={post.id} xs={12} sm={6} lg={4}>
                        <PostCard post={post} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
