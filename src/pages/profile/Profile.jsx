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
import { useState, useEffect, useContext } from "react";
import { mainNavbarProfileHistory } from "../../contexts/NavbarProfileHistory";
import { Link, Outlet, useNavigate } from "react-router-dom";
import AvatarA from "../../assets/images/Lebron.jpg";
import { AuthContext } from "../../contexts/AuthContext";

export function Profile() {
  const navigate = useNavigate();
  const { accessToken } = useContext(AuthContext); // Assuming you have accessToken in AuthContext
  const [profile, setProfile] = useState({
    username: "",
    nickname: "",
    rating: 0,
    reviewCount: 0,
    phoneNumber: "",
    bio: "",
    profilePicture: "",
  });
  const [ratingStarValue, setRatingStarValue] = useState(3.5);
  const [reviewValue, setReviewValue] = useState(10);
  const handleSetting = () => {
    navigate("/setting");
  };

  useEffect(() => {
    console.log(accessToken);
    const fetchProfile = async () => {
      try {
        const response = await fetch("http://localhost:3000/auth/getToken", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`, // Use the token from AuthContext
          },
        });
        if (response.ok) {
          const data = await response.json();
          const userProfile = data[0];
          setProfile({
            username: userProfile.username,
            nickname: userProfile.nickname,
            // rating: userProfile.rating,
            // reviewCount: userProfile.reviewCount,
            // phoneNumber: userProfile.phoneNumber,
            // bio: userProfile.bio,
            // profilePicture: userProfile.profilePicture,
          });
        } else {
          console.error("Failed to fetch profile");
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, [accessToken]);

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
            src={profile.profilePicture || AvatarA}
          />
          {/* can be into contexts */}
          <Typography
            sx={{
              my: 0.7,
            }}
            variant="h5"
          >
            {profile.nickname || "Lebfron James"}
          </Typography>
          <Typography
            sx={{
              my: 0.7,
            }}
          >
            @{profile.username || "mrsunshine"}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", my: 0.7 }}>
            <Typography sx={{ mx: 1, pt: 0.2 }}>
              {profile.ratingStarValue || ratingStarValue}
            </Typography>
            <Rating
              name="read-only"
              value={profile.ratingStarValue || ratingStarValue}
              precision={0.5}
              readOnly
            />
            <Typography sx={{ mx: 0.3, pt: 0.2 }}>
              ({profile.reviewValue || reviewValue})
            </Typography>
          </Box>
          <Typography
            sx={{
              my: 0.7,
            }}
          >
            {profile.phoneNumber || "No Phone Number"}
          </Typography>
          <Typography
            sx={{
              my: 0.7,
            }}
          >
            ({profile.description || "No description"})
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
                alignItems: "center",
                flexGrow: 1,
              }}
            >
              <Button sx={{ maxHeight: "50px" }} onClick={handleSetting}>
                Edit Profile
              </Button>
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
