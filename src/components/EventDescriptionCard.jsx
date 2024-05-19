import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function EventDescriptionCard({ event }) {
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

            <Link to={`/coachingCart`}>
              <Button
                sx={{ width: 200, height: 35, borderRadius: 5 }}
                variant="outlined"
                size="small"
              >
                Subscribe
              </Button>
            </Link>
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
