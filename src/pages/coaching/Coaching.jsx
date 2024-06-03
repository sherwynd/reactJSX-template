import React, { useState, useEffect } from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Outlet, useNavigate } from "react-router-dom";
import theme from "../../theme/color";
import EventCard from "../../components/EventCard";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function Coaching() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("profile"));
  const refId = userData.refId;
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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

      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="My Events" {...a11yProps(0)} />
          <Tab label="Other Events" {...a11yProps(1)} />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <Grid container spacing={4}>
          {events
            .filter((event) => refId === event.createdBy)
            .map((event) => (
              <Grid key={event._id} item xs={12} sm={6} md={4}>
                <EventCard event={event} />
              </Grid>
            ))}
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Grid container spacing={4}>
          {events
            .filter((event) => refId !== event.createdBy)
            .map((event) => (
              <Grid key={event._id} item xs={12} sm={6} md={4}>
                <EventCard event={event} />
              </Grid>
            ))}
        </Grid>
      </CustomTabPanel>
      <Outlet />
    </ThemeProvider>
  );
}
