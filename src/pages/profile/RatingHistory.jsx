import { Box, Grid, Rating, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CommentHistoryCard } from "../../components/CommentHistoryCard";
import { apiGetTemplate } from "../../services/api";

export function RatingHistory() {
  const [ratingStarHistoryValue, setRatingStarHistoryValue] = useState(0);
  const [reviewValue, setReviewValue] = useState(0);
  const { refId } = useParams();
  const [ratingHistory, setRatingHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRatingHistory = async () => {
      try {
        const method = "GET";
        const controller = `rating/allcommentsOfAUser/${refId}`;
        const data = await apiGetTemplate(method, controller);
        if (!data) {
          setRatingHistory([]);
          setReviewValue(0);
        } else if (data.error) {
          throw new Error(data.error);
        } else {
          setRatingHistory(data);
          setReviewValue(data.length);
        }
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
        if (!data) {
          setRatingStarHistoryValue(0);
        } else if (data.error) {
          throw new Error(data.error);
        } else {
          setRatingStarHistoryValue(data);
        }
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
          {ratingStarHistoryValue}
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
