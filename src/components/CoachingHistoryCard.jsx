import React from "react";
import {
  AppBar,
  Avatar,
  Badge,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
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
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";
import {
  AccessTime,
  AttachMoney,
  CalendarMonth,
  FitnessCenter,
  Place,
} from "@mui/icons-material";
export function CoachingHistoryCard({ coaching }) {
  return (
    <>
      <Card>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Link
              to={`/coaching/${coaching.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardHeader title={coaching.title} />
                <FitnessCenter sx={{ mr: 2, rotate: "135deg" }} />
                <Typography>{coaching.date}</Typography>
                <Typography>RM{coaching.price}</Typography>
              </Box>
            </Link>
          </Box>
        </Box>
      </Card>
    </>
  );
}
