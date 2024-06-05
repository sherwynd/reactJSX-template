import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

export default function EventDescriptionCard({ event }) {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("profile"));
  const refId = userData.refId;

  const [open, setOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    // Check if the user is already subscribed to the event
    if (event.subscribers.includes(refId)) {
      setIsSubscribed(true);
    }
  }, [event.subscribers, refId]);

  const handleEditClick = () => {
    navigate(`/coaching/${event._id}/update`);
  };

  const handleDeleteClick = async () => {
    setDeleteOpen(false);
    try {
      const response = await fetch(`http://localhost:3000/event/${event._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete event");
      }

      console.log("Event deleted successfully");
      navigate("/coaching");
    } catch (error) {
      console.error("Error:", error);
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
      setIsSubscribed(true);
      navigate("/coachingCart", {
        state: {
          eventName: event.eventName,
          eventPrice: event.eventPrice,
          eventId: event._id,
        },
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = (confirm) => {
    setOpen(false);
    if (confirm) {
      handleSubscribeClick();
    }
  };

  const handleDeleteOpenDialog = () => {
    setDeleteOpen(true);
  };

  const handleDeleteCloseDialog = (confirm) => {
    setDeleteOpen(false);
    if (confirm) {
      handleDeleteClick();
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
            {refId !== event.createdBy && (
              <Button
                sx={{ width: 200, height: 35, borderRadius: 5 }}
                variant="outlined"
                size="small"
                onClick={handleOpenDialog}
                disabled={isSubscribed}
              >
                {isSubscribed ? "Subscribed" : "Subscribe"}
              </Button>
            )}
            {refId === event.createdBy && (
              <Box>
                <IconButton
                  sx={{ ml: 1 }}
                  onClick={handleEditClick}
                  size="small"
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  sx={{ ml: 1 }}
                  onClick={handleDeleteOpenDialog}
                  size="small"
                  color="error"
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
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

      <Dialog
        open={open}
        onClose={() => handleCloseDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Subscribe to Event"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to subscribe to this event?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleCloseDialog(true)} autoFocus>
            Yes
          </Button>
          <Button onClick={() => handleCloseDialog(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={deleteOpen}
        onClose={() => handleDeleteCloseDialog(false)}
        aria-labelledby="alert-dialog-delete-title"
        aria-describedby="alert-dialog-delete-description"
      >
        <DialogTitle id="alert-dialog-delete-title">
          {"Delete Event"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-delete-description">
            Are you sure you want to delete this event? This action cannot be
            undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleDeleteCloseDialog(true)} autoFocus>
            Yes
          </Button>
          <Button onClick={() => handleDeleteCloseDialog(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
