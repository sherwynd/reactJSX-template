import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Typography, Box } from "@mui/material";

import { Link } from "react-router-dom";

export function BlogHistoryCard({ product }) {
  return (
    <Card sx={{ flexGrow: 1 }}>
      <CardContent sx={{ p: 0 }}>
        <CardMedia
          sx={{ height: 250 }}
          component="img"
          image={product.img}
          alt="media"
        />
      </CardContent>

      <CardContent sx={{ bgcolor: "secondary.main" }}>
        <Link
          to={`/discover/${product.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Typography noWrap variant="h6" marginTop={-1}>
            {product.title}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography>RM{product.price}</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexGrow: 1,
                  flexDirection: "row",
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    flexGrow: 1,
                    justifyContent: "flex-start",
                  }}
                >
                  RM{product.price}
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    flexGrow: 1,
                    justifyContent: "flex-end",
                  }}
                >
                  {product.listed}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Link>
      </CardContent>
    </Card>
  );
}
