import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";

export default function EventDescriptionCard({ event }) {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("profile"));
  const refId = userData.refId;

  const handleEditClick = () => {
    navigate(`/coaching/${event._id}/update`);
  };

  const handleDeleteClick = async () => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        const response = await fetch(
          `http://localhost:3000/event/${event._id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to delete event");
        }

        console.log("Event deleted successfully");
        navigate("/coaching");
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleSubscribeClick = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/event/${event._id}/subscribe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ refId }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to subscribe to event");
      }

      console.log("Subscribed to event successfully");
      navigate("/coachingCart", {
        state: {
          eventName: event.eventName,
          eventPrice: event.eventPrice,
          eventId: event._id,
        }
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card
        variant="outlined"
        sx={{ backgroundColor: "#FFF9EF", borderRadius: 5, boxShadow: 2 }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 2,
            }}
          >
            <Typography sx={{ fontWeight: 700 }} variant="h3" component="div">
              {event.eventName}
            </Typography>
            {refId != event.createdBy && (
              <Button
                sx={{ width: 200, height: 35, borderRadius: 5 }}
                variant="outlined"
                size="small"
                onClick={handleSubscribeClick}
              >
                Subscribe
              </Button>
            )}
            {refId === event.createdBy && (
              <>
                <Button
                  sx={{ width: 100, height: 35, borderRadius: 5, ml: 2 }}
                  onClick={handleEditClick}
                  variant="outlined"
                  size="small"
                >
                  Edit
                </Button>
                <Button
                  sx={{ width: 100, height: 35, borderRadius: 5, ml: 2 }}
                  onClick={handleDeleteClick}
                  variant="outlined"
                  size="small"
                  color="error"
                >
                  Delete
                </Button>
              </>
            )}
          </Box>
          <Typography
            variant="body2"
            color="text.secondary"
            align="justify"
            sx={{ ml: 1 }}
          >
            {event.eventDescription}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
