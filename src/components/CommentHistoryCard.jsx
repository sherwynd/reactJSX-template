import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Typography, Rating, Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";

export function CommentHistoryCard({ comment }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/auth/getAccount/${comment.refId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();

        setUser(json);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user:", error);
        setLoading(false);
      }
    };

    if (comment.refId) {
      fetchUser();
    } else {
      setLoading(false);
    }
  }, [comment.refId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="avatar">
            {comment.userDetail.username.charAt(0)}
          </Avatar>
        }
        title={comment.userDetail.username}
        subheader={
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Rating
              name="user-rating"
              value={comment.ratingValue}
              precision={0.5}
              readOnly
            />
            <Typography>{comment.ratingDate}</Typography>
          </Box>
        }
      />
      <CardContent>
        <Typography>{comment.ratingComment}</Typography>
      </CardContent>
    </Card>
  );
}
