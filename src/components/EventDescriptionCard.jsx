import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";

export default function EventDescriptionCard() {
  const navigate = useNavigate();

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  const card = (
    <React.Fragment>
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
            Crazy SweatJam Event FCSIT
          </Typography>

          <Link to={`/cart`}>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra
          purus mauris, vel venenatis velit ornare elementum. Mauris tempor arcu
          id massa molestie, a hendrerit lacus mattis. Ut lacinia sed est non
          consectetur. In ornare nisi nisl, in auctor nisl condimentum id.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Nam gravida congue elit, quis dapibus mi
          mollis eu. Curabitur augue urna, hendrerit sed consectetur eget,
          aliquam sit amet massa. Nullam tincidunt a mauris et pulvinar.
          Maecenas tincidunt laoreet eros, quis placerat eros aliquet tincidunt.
          Etiam luctus arcu et dignissim vestibulum. Praesent dapibus nec tellus
          eget cursus.
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card
        variant="outlined"
        sx={{ backgroundColor: "#FFF9EF", borderRadius: 5, boxShadow: 2 }}
      >
        {card}
      </Card>
    </Box>
  );
}
