import React from "react";
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
import { Outlet } from "react-router-dom";
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
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          Create New Event
        </Typography>
        <Card sx={{ borderRadius: 5, boxShadow: 2 }}>
          <CardContent>
            <Grid container spacing={3}>
              {/* Event Details */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="event-name"
                  label="Event Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="event-description"
                  label="Event Description"
                  variant="outlined"
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    fullWidth
                    label="Pick your date"
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    fullWidth
                    label="Choose Time"
                    defaultValue={dayjs()}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="event-location"
                  label="Event Location"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="event-price"
                  label="Set Your Price (RM)"
                  variant="outlined"
                />
              </Grid>

              {/* Activity Details with Rating Icons for Intensity and Complexity */}
              {["First", "Second"].map((label, index) => (
                <>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id={`${label.toLowerCase()}-activity-name`}
                      label={`${label} Activity Name`}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Tooltip title="Select Intensity">
                      <StyledRating
                        name={`${label.toLowerCase()}-intensity`}
                        defaultValue={2}
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
                      <StyledRating
                        name={`${label.toLowerCase()}-complexity`}
                        defaultValue={2}
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
                </>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Box>
      <Outlet />
    </ThemeProvider>
  );
}
