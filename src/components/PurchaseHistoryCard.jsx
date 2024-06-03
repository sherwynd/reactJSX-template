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
    navigate(`/rating/${purchase._id}`);
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
                image={`http://localhost:3000/${purchase.imgs[0]}`}
                alt="media"
              />
            </CardContent>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardHeader title={purchase.title} />
              <Typography>Category : {purchase.category}</Typography>
              <Typography>Condition : {purchase.condition}</Typography>
              <Typography>{purchase.createdAt}</Typography>
              <Typography>RM{purchase.price}</Typography>
            </Box>
          </Box>
          {!purchase.rated && <Button onClick={handleRate}>Rate Now</Button>}
        </Box>
      </Card>
    </>
  );
}
