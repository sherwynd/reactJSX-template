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

export function Setting() {
  return (
    <>
      <Box>
        <TextField id="username" label="Username" variant="filled" />
        <TextField id="nickname" label="Nickname" variant="filled" />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="filled"
        />
      </Box>
    </>
  );
}
