import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Typography, Box } from "@mui/material";

import { Link } from "react-router-dom";

export function ProductHistoryCard({ product }) {
  return (
    <Card sx={{ flexGrow: 1 }}>
      <CardContent sx={{ p: 0 }}>
        <CardMedia
          sx={{ height: 250 }}
          component="img"
          image={`http://localhost:3000/${product.imgs[0]}`}
          alt={product.imgs[0]}
        />
      </CardContent>

      <CardContent sx={{ bgcolor: "secondary.main" }}>
        <Link
          to={`/discover/${product._id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Typography noWrap variant="h6" marginTop={-1}>
            {product.title}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>RM{product.price}</Typography>
            <Typography>{product.listed}</Typography>
          </Box>
        </Link>
      </CardContent>
    </Card>
  );
}
