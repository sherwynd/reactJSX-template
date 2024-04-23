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
import { PurchaseHistoryCard } from "../../components/PurchaseHistoryCard";
import AvatarA from "../../assets/images/image1.png";
import AvatarB from "../../assets/images/Fake-Jordan.png";
import AvatarC from "../../assets/images/image2.png";
import AvatarD from "../../assets/images/avatar.png";
export function PurchaseHistory() {
  const [ratingStarHistoryValue, setRatingStarHistoryValue] = useState(3.5);
  const [reviewValue, setReviewValue] = useState(10);
  const purchase = [
    //sample
    {
      id: 0,
      name: "Muhammad Ali",
      title: "Ipsum amet, consectetur adipiscing elit 1",
      date: "2021-10-10",
      price: 100,
      img: AvatarA,
    },
    {
      id: 1,
      name: "Lee Chung Wai",
      title: "Ipsum amet, consectetur adipiscing elit 1",
      date: "2021-10-10",
      price: 100,
      img: AvatarC,
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
