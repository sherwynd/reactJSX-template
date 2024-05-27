import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Tooltip,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { useParams, useNavigate } from "react-router-dom";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import theme from "../../theme/color";
import { styled } from "@mui/material/styles";
import { FitnessCenter } from "@mui/icons-material";
import Rating from "@mui/material/Rating";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#000000",
  },
  "& .MuiRating-iconHover": {
    color: "#000000",
  },
});

export default function CoachingUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`http://localhost:3000/event/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch event");
        }
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

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
    try {
      const response = await fetch(`http://localhost:3000/event/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to update event");
      }

      navigate(`/coaching/${id}`);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error}</Typography>;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          Edit Event
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
                      value={dayjs(formData.eventDate)}
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
                      value={dayjs(formData.eventTime)}
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
                  Update Event
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  );
}
