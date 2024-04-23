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
import { Link, Outlet, useNavigate } from "react-router-dom";
import AvatarA from "../../assets/images/Lebron.jpg";

export function Profile() {
  const navigate = useNavigate();
  const [ratingStarValue, setRatingStarValue] = useState(3.5);
  const [reviewValue, setReviewValue] = useState(10);
  const handleSetting = () => {
    navigate("/setting");
  };
  return (
    <>
      <Box sx={{ my: 2, display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            flexDirection: "column",
            p: 2,
            maxWidth: "300px",
          }}
        >
          <Avatar
            sx={{
              display: "flex",
              width: 200,
              height: 200,
              m: 2,
              alignItems: "center",
              justifyContent: "center",
            }}
            src={AvatarA}
          />
          {/* can be into contexts */}
          <Typography
            sx={{
              my: 0.7,
            }}
            variant="h5"
          >
            Sapnu Puas
          </Typography>
          <Typography
            sx={{
              my: 0.7,
            }}
          >
            @sapnupuas
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", my: 0.7 }}>
            <Typography sx={{ mx: 1, pt: 0.2 }}>{ratingStarValue}</Typography>
            <Rating
              name="read-only"
              value={ratingStarValue}
              precision={0.5}
              readOnly
            />
            <Typography sx={{ mx: 0.3, pt: 0.2 }}>({reviewValue})</Typography>
          </Box>
          <Typography
            sx={{
              my: 0.7,
            }}
          >
            +60123456789
          </Typography>
          <Typography
            sx={{
              my: 0.7,
            }}
          >
            When people need me, remember sapnu puas
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          {" "}
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <List sx={{ display: "flex" }}>
              {mainNavbarProfileHistory.map((item, index) => (
                <ListItem
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                  key={item.id}
                  disablePadding
                >
                  <ListItemButton component={Link} to={item.route}>
                    <ListItemText
                      sx={{
                        display: "flex",
                        width: 40,
                        justifyContent: "center",
                      }}
                      primary={item.label}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                flexGrow: 1,
              }}
            >
              <Button onClick={handleSetting}>Edit Profile</Button>
            </Box>
          </Box>
          <Paper sx={{ display: "flex", flexGrow: 1 }}>
            <Outlet />
          </Paper>
        </Box>
      </Box>
    </>
  );
}
