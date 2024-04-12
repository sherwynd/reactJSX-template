import {
  AppBar,
  Avatar,
  Badge,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Card,
  CssBaseline,
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
  Rating,
  TextField,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { mainNavbarProfileHistory } from "../../contexts/NavbarProfileHistory";

export function Profile() {
  const [ratingStarValue, setRatingStarValue] = useState(3.5);
  return (
    <>
      <CssBaseline />
      <Box>
        <Box>
          <Avatar></Avatar>
          <List>
            {mainNavbarProfileHistory.map((text, index) => (
              <ListItem key={text.id} disablePadding>
                <ListItemButton>
                  {/* Issue happended */}
                  <ListItemIcon>
                    {index % 2 === 0 ? "logo" : "logo"}
                  </ListItemIcon>
                  <ListItemText primary={text.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box>
          <Typography>Avatar Nickname</Typography>
          <Typography>Avatar Username</Typography>
          <Rating
            name="read-only"
            value={ratingStarValue}
            precision={0.5}
            readOnly
          />
          <Typography>Avatar Phone Number</Typography>
          <Typography>Avatar Description</Typography>
        </Box>
        Profile mou
      </Box>
    </>
  );
}
