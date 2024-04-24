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
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Link
              to={`/coaching/${coaching.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardHeader title={coaching.title} />
                <Box sx={{ display: "flex", flexDirection: "column", p: 2 }}>
                  <Typography>{coaching.location}</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      flexGrow: 1,
                    }}
                  >
                    <Typography>2 Activities</Typography>
                    <Typography>{coaching.time}</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      flexGrow: 1,
                    }}
                  >
                    <Typography>RM{coaching.price}</Typography>
                    <Typography>{coaching.date}</Typography>
                  </Box>
                </Box>
              </Box>
            </Link>
          </Box>
        </Box>
      </Card>
    </>
  );
}
