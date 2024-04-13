import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Place from "@mui/icons-material/Place";
import { ThemeProvider } from "@emotion/react";
//TODO: Import the font file
import { useNavigate } from "react-router-dom";

export default function EventCard({ id }) {
  const navigate = useNavigate();

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  const handleViewClick = () => {
    navigate(`/coaching/${id}`);
  };

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          Wed{bull}Nov 24{bull}2024{bull}8:00 PM
        </Typography>
        <Typography sx={{ fontWeight: 700 }} variant="h4" component="div">
          Crazy SweatJam Event FCSIT
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
              FCSIT
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ ml: 2 }}>
            8/10
          </Typography>
          <Button onClick={handleViewClick} variant="outlined" size="small">
            View
          </Button>
        </Box>
      </CardContent>
    </React.Fragment>
  );

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card
        variant="outlined"
        sx={{ backgroundColor: "#F2F2F2", borderRadius: 5, boxShadow: 2 }}
      >
        {card}
      </Card>
    </Box>
  );
}