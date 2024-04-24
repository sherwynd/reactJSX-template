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
import { useState } from "react";
import { CoachingHistoryCard } from "../../components/CoachingHistoryCard.jsx";

export function CoachingHistory() {
  const coachings = [
    //sample
    {
      id: 0,
      name: "Muhammad Ali",
      title: "Crazy SweatJam Event FCSIT",
      description:
        "Lore m ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra purus mauris, vel venenatis velit ornare elementum. Mauris tempor arcu id massa molestie, a hendrerit lacus mattis. Ut lacinia sed est non consectetur. In ornare nisi nisl, in auctor nisl condimentum id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam gravida congue elit, quis dapibus mi mollis eu. Curabitur augue urna, hendrerit sed consectetur eget, aliquam sit amet massa. Nullam tincidunt a mauris et pulvinar. Maecenas tincidunt laoreet eros, quis placerat eros aliquet tincidunt. Etiam luctus arcu et dignissim vestibulum. Praesent dapibus nec tellus eget cursus.",
      date: "2021-10-10",
      location: "FSCIT Block a",
      challenges: [
        { activityName: "Sweat with Yua Mikami", intensity: 5, complexity: 5 },
        {
          activityName: "Cycling with Yua Mikami",
          intensity: 5,
          complexity: 3,
        },
      ],
      price: 100,
    },
    {
      id: 1,
      name: "Muhammad Ali",
      title: "Crazy SweatJam Event FCSIT",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra purus mauris, vel venenatis velit ornare elementum. Mauris tempor arcu id massa molestie, a hendrerit lacus mattis. Ut lacinia sed est non consectetur. In ornare nisi nisl, in auctor nisl condimentum id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam gravida congue elit, quis dapibus mi mollis eu. Curabitur augue urna, hendrerit sed consectetur eget, aliquam sit amet massa. Nullam tincidunt a mauris et pulvinar. Maecenas tincidunt laoreet eros, quis placerat eros aliquet tincidunt. Etiam luctus arcu et dignissim vestibulum. Praesent dapibus nec tellus eget cursus.",
      date: "2021-10-10",
      location: "FSCIT Block a",
      price: 100,
    },
  ];
  return (
    <>
      <Box sx={{ display: "flex", flexGrow: 1, flexDirection: "column" }}>
        {coachings.map((coaching) => (
          <Box key={coaching.id} sx={{ mx: 2, my: 1 }}>
            <CoachingHistoryCard coaching={coaching} />
          </Box>
        ))}
      </Box>
    </>
  );
}
