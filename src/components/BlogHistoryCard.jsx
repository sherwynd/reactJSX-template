import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Typography, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import { Link } from "react-router-dom";

export function BlogHistoryCard({ blog }) {
  return (
    <Card sx={{ flexGrow: 1 }}>
      <CardContent sx={{ p: 0 }}>
        <CardMedia
          sx={{ height: 250 }}
          component="img"
          image={`http://localhost:3000/${blog.images[0]}`}
          alt="media"
        />
      </CardContent>

      <CardContent sx={{ bgcolor: "secondary.main" }}>
        <Link
          to={`/blog-details/${blog._id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Typography noWrap variant="h6" marginTop={-1}>
            {blog.heading}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box sx={{ display: "flex", flexDirection: "row", flexGrow: 1 }}>
                <FavoriteIcon color="primary" />
                <Typography>{blog.likeRefId.length}</Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <CommentIcon color="primary" />
                <Typography>{blog.comments.length}</Typography>
              </Box>
              <Typography
                sx={{
                  display: "flex",
                  flexGrow: 1,
                  justifyContent: "flex-end",
                }}
              >
                {blog.listed}
              </Typography>
            </Box>
          </Box>
        </Link>
      </CardContent>
    </Card>
  );
}
