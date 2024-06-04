import { Box, Typography, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CoachingHistoryCard } from "../../components/CoachingHistoryCard";
import { apiGetTemplate } from "../../services/api";

export function EventHistory() {
  const { refId } = useParams();
  const [joinedEvent, setJoinedEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJoinedEventHistory = async () => {
      try {
        const method = "GET";
        const controller = `invoice/findAllInvoiceWithEventByUser/${refId}`;
        const data = await apiGetTemplate(method, controller);
        if (data.error) {
          throw new Error(data.error);
        }
        setJoinedEvent(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (refId) {
      fetchJoinedEventHistory();
    }
  }, [refId]);

  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", m: 1, flexGrow: 1 }}
      >
        {loading && <Typography>Loading...</Typography>}
        {error && <Typography>Error: {error}</Typography>}
        {!loading && !error && (
          <Grid container spacing={1}>
            {joinedEvent.map((coaching) => (
              <Grid item xs={4} key={coaching._id}>
                <CoachingHistoryCard event={coaching} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </>
  );
}
