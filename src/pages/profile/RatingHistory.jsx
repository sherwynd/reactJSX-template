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
  Rating,
  TextField,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { CommentCard } from "../../components/CommentCard";

export function RatingHistory() {
  const [ratingStarHistoryValue, setRatingStarHistoryValue] = useState(3.5);
  const [reviewValue, setReviewValue] = useState(10);
  const comments = [
    //sample
    {
      id: 1,
      name: "Sherwynd Liew",
      text: "Comment 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "2021-10-10",
    },
    {
      id: 2,
      name: "Xian Heng",
      text: "Comment 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      date: "2022-11-11",
    },
    {
      id: 3,
      name: "Carrot Hong",
      text: "Comment 3 Lorem ipsum dolor, sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "2023-12-12",
    },

    {
      id: 4,
      name: "Neville Teh",
      text: "Comment 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "2021-10-10",
    },
    {
      id: 5,
      name: "Tian Sien",
      text: "Comment 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      date: "2022-11-11",
    },
  ];
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", m: 1 }}>
        <Typography
          sx={{ display: "flex", justifyContent: "center" }}
          variant="h5"
        >
          {ratingStarHistoryValue}
        </Typography>
        <Rating
          name="read-only"
          value={ratingStarHistoryValue}
          precision={0.5}
          readOnly
        />
        <Typography sx={{ display: "flex", justifyContent: "center" }}>
          ({reviewValue} Reviews)
        </Typography>
      </Box>
      <Grid sx={{ m: 1 }} container spacing={2}>
        {comments.map((comment) => (
          <Grid item key={comment.id} xs={12} sx={{ mr: 5 }}>
            <CommentCard comment={comment} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
