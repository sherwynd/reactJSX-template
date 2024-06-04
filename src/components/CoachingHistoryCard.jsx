import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Place from "@mui/icons-material/Place";
import { Link } from "react-router-dom";

export function CoachingHistoryCard({ event }) {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  // const currentParticipants = event.subscribers ? event.subscribers.length : 0;

  const card = (
    <React.Fragment>
      <CardContent>
        <Link
          to={`/coaching/${event._id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            {/* {new Date(event.eventDate).toLocaleDateString()} */}
            {event.eventDate}
            {bull}
            {event.eventTime}
          </Typography>
          <Typography sx={{ fontWeight: 700 }} variant="h4" component="div">
            {event.eventName}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Place />
              <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                {event.eventLocation}
              </Typography>
            </Box>
          </Box>
        </Link>
      </CardContent>
    </React.Fragment>
  );

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card
        variant="outlined"
        sx={{ backgroundColor: "#FFF9EF", borderRadius: 5, boxShadow: 2 }}
      >
        {card}
      </Card>
    </Box>
  );
}
