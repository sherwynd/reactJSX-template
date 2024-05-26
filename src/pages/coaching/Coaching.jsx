import React, { useState, useEffect } from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Outlet, useNavigate } from "react-router-dom";
import theme from "../../theme/color";
import EventCard from "../../components/EventCard";

export function Coaching() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:3000/event");
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const handleCreateClick = () => {
    navigate("/coaching/create");
  };

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h3" sx={{ mt: 3, ml: 1 }}>
        Coaching
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
        <Button
          sx={{ borderRadius: 5 }}
          onClick={handleCreateClick}
          variant="outlined"
          color="primary"
        >
          Create
        </Button>
      </Box>

      <Grid container spacing={4}>
        {events.map((event) => (
          <Grid key={event.id} item xs={12} sm={6} md={4}>
            <EventCard event={event} />
          </Grid>
        ))}
      </Grid>
      <Outlet />
    </ThemeProvider>
  );
}
