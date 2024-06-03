import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

export function PurchaseHistoryCard({ purchase }) {
  const navigate = useNavigate();
  const handleRate = () => {
    navigate(`/rating`);
  };

  return (
    <>
      <Card>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <CardContent>
              <CardMedia
                sx={{ height: 150, width: 150 }}
                component="img"
                image={purchase.img}
                alt="media"
              />
            </CardContent>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardHeader title={purchase.title} />
              <Typography>Seller : {purchase.name}</Typography>
              <Typography>{purchase.date}</Typography>
              <Typography>RM{purchase.price}</Typography>
            </Box>
          </Box>
          <Button onClick={handleRate}>Rate Now</Button>
        </Box>
      </Card>
    </>
  );
}
