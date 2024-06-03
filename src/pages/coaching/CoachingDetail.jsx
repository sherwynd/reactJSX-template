import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import {
  AccessTime,
  AttachMoney,
  CalendarMonth,
  FitnessCenter,
  Place,
} from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { ThemeProvider } from "@emotion/react";
import theme from "../../theme/color";
import EventDescriptionCard from "../../components/EventDescriptionCard";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#FFA31A",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CoachingDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        console.log("Fetching event with ID:", id);

        const response = await fetch(`http://localhost:3000/event/${id}`);
        console.log("Response status:", response.status);

        if (!response.ok) {
          throw new Error(`Failed to fetch event: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Fetched event data:", data);

        setEvent(data);

        // Fetch event subscribers
        const subscribersResponse = await fetch(
          `http://localhost:3000/event/${id}/subscribers`
        );

        if (!subscribersResponse.ok) {
          throw new Error(
            `Failed to fetch event subscribers: ${subscribersResponse.statusText}`
          );
        }

        const subscribersData = await subscribersResponse.json();
        console.log("Fetched event subscribers data:", subscribersData);
        setSubscribers(subscribersData);
      } catch (error) {
        console.error("Error fetching event:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error: {error}</Typography>;
  }

  if (!event) {
    return <Typography>Event not found</Typography>;
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ mt: 2, px: 5 }}>
        <EventDescriptionCard event={event} />
        <Box sx={{ mt: 2 }}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  minWidth: 275,
                  mt: 3,
                  boxShadow: 3,
                  backgroundColor: "#FFF9EF",
                  borderRadius: 5,
                }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontWeight: 700 }}
                    variant="h4"
                    component="div"
                  >
                    Details
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mt: 3,
                    }}
                  >
                    <CalendarMonth sx={{ width: 30, height: 30, mr: 2 }} />
                    <Typography sx={{ fontSize: 20 }}>
                      {event.eventDate}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mt: 1,
                    }}
                  >
                    <AccessTime sx={{ width: 30, height: 30, mr: 2 }} />
                    <Typography sx={{ fontSize: 20 }}>
                      {event.eventTime}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mt: 1,
                    }}
                  >
                    <Place sx={{ width: 30, height: 30, mr: 2 }} />
                    <Typography sx={{ fontSize: 20 }}>
                      {event.eventLocation}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mt: 1,
                    }}
                  >
                    <AttachMoney sx={{ width: 30, height: 30, mr: 2 }} />
                    <Typography sx={{ fontSize: 20 }}>
                      {event.eventPrice} MYR
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={9}>
              <Card
                sx={{
                  minWidth: 275,
                  mt: 3,
                  boxShadow: 3,
                  backgroundColor: "#FFF9EF",
                  borderRadius: 5,
                }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontWeight: 700 }}
                    variant="h4"
                    component="div"
                  >
                    Challenges Activities
                  </Typography>
                </CardContent>
                <Grid container>
                  {event.activities.map((activity, index) => (
                    <Grid item xs={12} sm={6} md={6} key={index}>
                      <Card
                        sx={{
                          minWidth: 275,
                          margin: 2,
                          boxShadow: 3,
                          borderRadius: 5,
                        }}
                      >
                        <CardContent>
                          <Typography
                            sx={{ fontWeight: 700, mb: 2 }}
                            component="div"
                          >
                            {activity.name}
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              width: "100%",
                              mb: 1,
                            }}
                          >
                            <Typography
                              sx={{
                                width: "40%",
                                minWidth: 100,
                                textAlign: "left",
                                mr: 2,
                              }}
                            >
                              Intensity
                            </Typography>
                            <Box
                              sx={{
                                width: "60%",
                                display: "flex",
                              }}
                            >
                              {[...Array(activity.intensity)].map((_, i) => (
                                <FitnessCenter
                                  key={i}
                                  sx={{ mr: 2, rotate: "135deg" }}
                                />
                              ))}
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              width: "100%",
                              mb: 1,
                            }}
                          >
                            <Typography
                              sx={{
                                width: "40%",
                                minWidth: 100,
                                textAlign: "left",
                                mr: 2,
                              }}
                            >
                              Complexity
                            </Typography>
                            <Box
                              sx={{
                                width: "60%",
                                display: "flex",
                              }}
                            >
                              {[...Array(activity.complexity)].map((_, i) => (
                                <FitnessCenter
                                  key={i}
                                  sx={{ mr: 2, rotate: "135deg" }}
                                />
                              ))}
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Card
            sx={{
              minWidth: 275,
              margin: 2,
              boxShadow: 3,
              borderRadius: 5,
              backgroundColor: "#FFF9EF",
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography
                  sx={{ fontWeight: 700 }}
                  variant="h4"
                  component="div"
                >
                  List of Participants In The Event
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <TableContainer
                  component={Paper}
                  sx={{ borderRadius: 5, maxWidth: 1000, maxHeight: 400 }}
                >
                  <Table aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell sx={{ width: "1/6" }}>
                          No
                        </StyledTableCell>
                        <StyledTableCell align="left" sx={{ width: "4/6" }}>
                          Name of Participants
                        </StyledTableCell>
                        <StyledTableCell align="left" sx={{ width: "1/6" }}>
                          Email of Participants
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {subscribers.map((subscribers, index) => (
                        <StyledTableRow key={subscribers._id}>
                          <StyledTableCell component="th" scope="row">
                            {index + 1}
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            {subscribers.username}
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            {subscribers.email}
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
