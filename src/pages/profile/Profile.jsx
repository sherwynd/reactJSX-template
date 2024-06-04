import {
  Avatar,
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Rating,
  Typography,
} from "@mui/material";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { apiGetTemplate } from "../../services/api";
import { useAuth } from "../../contexts/AuthContext";
import Chart from "../../components/Chart";

export function Profile() {
  const navigate = useNavigate();
  const { refId } = useParams();
  const [profile, setProfile] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ratingStarValue, setRatingStarValue] = useState(0);
  const [reviewValue, setReviewValue] = useState();
  const [visibleSetting, setVisibleSetting] = useState();
  const { currentRefId } = useAuth();
  const mainNavbarProfileHistory = [
    { id: 0, label: "Product", route: "productHistory" },
    { id: 1, label: "Blog", route: "blogHistory" },
    { id: 2, label: "Coaching", route: "coachingHistory" },
    { id: 3, label: "Event", route: "eventHistory" },
    { id: 4, label: "Rating", route: "ratingHistory" },
    { id: 5, label: "Purchased", route: "purchaseHistory" },
  ];

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const method = "GET";
        const controller = `auth/getAccount/${refId}`;
        const data = await apiGetTemplate(method, controller);
        if (data.error) {
          console.error(data.error);
        } else {
          setProfile(data);
          setLoading(false);
        }
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    const fetchRatingHistory = async () => {
      try {
        const method = "GET";
        const controller = `rating/allcommentsOfAUser/${refId}`;
        const data = await apiGetTemplate(method, controller);
        if (!data) {
          setReviewValue(0);
        } else if (data.error) {
          throw new Error(data.error);
        } else {
          setReviewValue(data.length);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchAverageRateHistory = async () => {
      try {
        const method = "GET";
        const controller = `rating/averageRatingOfAUser/${refId}`;
        const data = await apiGetTemplate(method, controller);
        if (!data) {
          setRatingStarValue(0);
        } else if (data.error) {
          throw new Error(data.error);
        } else {
          setRatingStarValue(data);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const checkSetting = async () => {
      if (currentRefId === refId) return setVisibleSetting(true);
      else return setVisibleSetting(false);
    };

    if (refId) {
      fetchProfile();
      checkSetting();
      fetchRatingHistory();
      fetchAverageRateHistory();
    }
  }, [refId]);

  const handleSetting = () => {
    navigate(`/setting/${profile.refId}`);
  };

  return (
    <>
      <Box sx={{ my: 2, display: "flex", flexDirection: "row" }}>
        {loading && <Typography>Loading...</Typography>}
        {error && <Typography>Error: {error}</Typography>}
        {!loading && !error && (
          <>
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
                src={profile.profilePicture || ""}
              />
              {/* can be into contexts */}
              <Typography
                sx={{
                  my: 0.7,
                }}
                variant="h5"
              >
                {profile.nickname || profile.username || "Loading nickname..."}
              </Typography>
              <Typography
                sx={{
                  my: 0.7,
                }}
              >
                @{profile.username || "Loading username..."}
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
                {profile.description || "No description"}
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
                  {visibleSetting && (
                    <Button sx={{ maxHeight: "50px" }} onClick={handleSetting}>
                      Edit Profile
                    </Button>
                  )}
                </Box>
              </Box>
              <Paper sx={{ display: "flex", flexGrow: 1 }}>
                <Outlet />
              </Paper>
            </Box>
          </>
        )}
      </Box>
      {/* E comm */}
      <Chart />
    </>
  );
}
