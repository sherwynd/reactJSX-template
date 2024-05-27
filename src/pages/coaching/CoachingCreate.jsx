import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Rating,
  TextField,
  Typography,
  Tooltip,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { styled } from "@mui/material/styles";
import { FitnessCenter } from "@mui/icons-material";
import theme from "../../theme/color";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#000000",
  },
  "& .MuiRating-iconHover": {
    color: "#000000",
  },
});

export default function CoachingCreate() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    eventName: "",
    eventDescription: "",
    eventDate: dayjs(),
    eventTime: dayjs(),
    eventLocation: "",
    eventPrice: "",
    participantLimit: 0,
    activities: [
      { name: "", intensity: 2, complexity: 2 },
      { name: "", intensity: 2, complexity: 2 },
    ],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      eventDate: date,
    }));
  };

  const handleTimeChange = (time) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      eventTime: time,
    }));
  };

  const handleActivityChange = (index, field, value) => {
    const updatedActivities = formData.activities.map((activity, i) =>
      i === index ? { ...activity, [field]: value } : activity
    );
    setFormData((prevFormData) => ({
      ...prevFormData,
      activities: updatedActivities,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = JSON.parse(localStorage.getItem("profile"));
    const refId = userData.refId;

    const updatedFormData = {
      ...formData,
      createdBy: refId,
    };

    console.log("Form data submitted:", updatedFormData);

    try {
      const response = await fetch("http://localhost:3000/event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFormData),
      });

      if (!response.ok) {
        throw new Error("Failed to create event");
      }

      const data = await response.json();
      console.log("Event created:", data);
      navigate("/coaching");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          Create New Event
        </Typography>
        <Card sx={{ mx: 10, borderRadius: 5, boxShadow: 2 }}>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                {/* Event Details */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="event-name"
                    name="eventName"
                    label="Event Name"
                    variant="outlined"
                    value={formData.eventName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="event-description"
                    name="eventDescription"
                    label="Event Description"
                    variant="outlined"
                    multiline
                    rows={4}
                    value={formData.eventDescription}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      fullWidth
                      label="Pick your date"
                      value={formData.eventDate}
                      onChange={handleDateChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={6}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                      fullWidth
                      label="Choose Time"
                      value={formData.eventTime}
                      onChange={handleTimeChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="event-location"
                    name="eventLocation"
                    label="Event Location"
                    variant="outlined"
                    value={formData.eventLocation}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="event-price"
                    name="eventPrice"
                    label="Set Your Price (RM)"
                    variant="outlined"
                    value={formData.eventPrice}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="participant-limit"
                    name="participantLimit"
                    label="Set Participant Limit"
                    variant="outlined"
                    value={formData.participantLimit}
                    onChange={handleChange}
                  />
                </Grid>

                {/* Activity Details with Rating Icons for Intensity and Complexity */}
                {formData.activities.map((activity, index) => (
                  <React.Fragment key={index}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        id={`activity-name-${index}`}
                        label={`${index + 1} Activity Name`}
                        variant="outlined"
                        value={activity.name}
                        onChange={(e) =>
                          handleActivityChange(index, "name", e.target.value)
                        }
                      />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <Typography variant="subtitle2" gutterBottom>
                        Intensity
                      </Typography>
                      <Tooltip title="Select Intensity">
                        <StyledRating
                          name={`intensity-${index}`}
                          value={activity.intensity}
                          onChange={(event, newValue) =>
                            handleActivityChange(index, "intensity", newValue)
                          }
                          getLabelText={(value) =>
                            `${value} Heart${value !== 1 ? "s" : ""}`
                          }
                          precision={1}
                          icon={
                            <FitnessCenter
                              sx={{ mr: 2, rotate: "135deg" }}
                              fontSize="inherit"
                            />
                          }
                          emptyIcon={
                            <FitnessCenter
                              sx={{ mr: 2, rotate: "135deg" }}
                              fontSize="inherit"
                            />
                          }
                        />
                      </Tooltip>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <Tooltip title="Select Complexity">
                        <Typography variant="subtitle2" gutterBottom>
                          Complexity
                        </Typography>
                        <StyledRating
                          name={`complexity-${index}`}
                          value={activity.complexity}
                          onChange={(event, newValue) =>
                            handleActivityChange(index, "complexity", newValue)
                          }
                          getLabelText={(value) =>
                            `${value} Heart${value !== 1 ? "s" : ""}`
                          }
                          precision={1}
                          icon={
                            <FitnessCenter
                              sx={{ mr: 2, rotate: "135deg" }}
                              fontSize="inherit"
                            />
                          }
                          emptyIcon={
                            <FitnessCenter
                              sx={{ mr: 2, rotate: "135deg" }}
                              fontSize="inherit"
                            />
                          }
                        />
                      </Tooltip>
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>
              <Box component="div" sx={{ width: "50%" }}>
                <Button
                  variant="outlined"
                  color="primary"
                  type="submit"
                  sx={{ mt: 5, width: "100%" }}
                >
                  Create Event
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Box>
      <Outlet />
    </ThemeProvider>
  );
}
