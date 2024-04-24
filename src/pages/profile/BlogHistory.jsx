import {
  AppBar,
  Avatar,
  Badge,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Card,
  Container,
  FormControl,
  Grid,
  InputAdornment,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  OutlinedInput,
  Paper,
  TextField,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { BlogHistoryCard } from "../../components/BlogHistoryCard";
import AvatarA from "../../assets/images/cutie.png";
import AvatarB from "../../assets/images/cutie2.png";
import AvatarC from "../../assets/images/cutie3.png";
import AvatarD from "../../assets/images/cutie4.png";
export function BlogHistory() {
  const blogs = [
    {
      title: "First Post",
      description:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      like: 10,
      comments: 2899,
      img: AvatarA,
      listed: "2021-10-10",
      id: 1,
    },
    {
      title: "Second Post",
      description:
        "Dolor sit eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      like: 10,
      comments: 2899,
      img: AvatarB,
      listed: "2021-10-10",
      id: 2,
    },
    {
      title: "Third Post",
      description:
        "Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      like: 10,
      comments: 2899,
      img: AvatarC,
      listed: "2021-10-10",
      id: 3,
    },
    {
      title: "Fourth Post",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt aliqua.",
      like: 10,
      comments: 2899,
      img: AvatarA,
      listed: "2021-10-10",
      id: 4,
    },
  ];
  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", m: 1, flexGrow: 1 }}
      >
        <Grid container spacing={1}>
          {blogs.map((blog) => (
            <Grid item xs={4} key={blog.id}>
              <BlogHistoryCard blog={blog} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
