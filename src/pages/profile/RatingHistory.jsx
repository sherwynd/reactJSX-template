import { Box, Grid, Rating, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CommentHistoryCard } from "../../components/CommentHistoryCard";
import { apiGetTemplate } from "../../services/api";

export function RatingHistory() {
  const [ratingStarHistoryValue, setRatingStarHistoryValue] = useState();
  const [reviewValue, setReviewValue] = useState(0);
  const { refId } = useParams();
  const [ratingHistory, setRatingHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // { /rating/averageRatingOfAUser/:raterRefId
  //   id: 1,
  //   name: "Sherwynd Liew",
  //   text: "Comment 1 Lorem ipsum dolor, sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   date: "2021-10-10",
  // },
  useEffect(() => {
    const fetchRatingHistory = async () => {
      try {
        const method = "GET";
        const controller = `rating/allcommentsOfAUser/${refId}`;
        const data = await apiGetTemplate(method, controller);
        if (data.error) {
          throw new Error(data.error);
        }
        console.log(data);
        setRatingHistory(data);
        setReviewValue(data.length);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchAverageRateHistory = async () => {
      try {
        const method = "GET";
        const controller = `rating/averageRatingOfAUser/${refId}`;
        const data = await apiGetTemplate(method, controller);
        if (data.error) {
          throw new Error(data.error);
        }
        setRatingStarHistoryValue(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (refId) {
      fetchRatingHistory();
      fetchAverageRateHistory();
    }
  }, [refId]);

  if (loading) {
    return <Box>Loading...</Box>;
  }

  if (error) {
    return <Box>Error: {error}</Box>;
  }
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", m: 1 }}>
        <Typography
          sx={{ display: "flex", justifyContent: "center" }}
          variant="h5"
        >
          {reviewValue}
        </Typography>
        <Rating
          name="read-only"
          value={ratingStarHistoryValue}
          precision={0.5}
          readOnly
        />
        <Typography sx={{ display: "flex", justifyContent: "center" }}>
          ({reviewValue} Reviews)
        </Typography>
      </Box>
      <Grid sx={{ m: 1 }} container spacing={2}>
        {ratingHistory.map((comment) => (
          <Grid item key={comment._id} xs={12} sx={{ mr: 5 }}>
            <CommentHistoryCard comment={comment} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
