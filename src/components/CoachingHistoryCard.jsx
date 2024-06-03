import React from "react";
import { Box, Card, CardHeader, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function CoachingHistoryCard({ coaching }) {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <>
      <Card sx={{ backgroundColor: "#FFF9EF", display: "flex", flexGrow: 1 }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Link
              to={`/coaching/${coaching._id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardHeader title={coaching.title} />
                <Box sx={{ display: "flex", flexDirection: "column", p: 2 }}>
                  <Typography>{coaching.location}</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      flexGrow: 1,
                    }}
                  >
                    <Typography>{coaching.eventName}</Typography>
                    {bull}
                    <Typography>{coaching.createdDateTime}</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      flexGrow: 1,
                    }}
                  >
                    <Typography>RM{coaching.eventPrice}</Typography>
                    <Typography>{coaching.eventDate}</Typography>
                  </Box>
                </Box>
              </Box>
            </Link>
          </Box>
        </Box>
      </Card>
    </>
  );
}
