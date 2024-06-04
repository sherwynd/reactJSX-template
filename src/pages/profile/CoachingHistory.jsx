import { Box, Typography, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CoachingHistoryCard } from "../../components/CoachingHistoryCard";
import { apiGetTemplate } from "../../services/api";

export function CoachingHistory() {
  const { refId } = useParams();
  const [createdEvent, setCreatedEvent] = useState([]);
  const [joinedEvent, setJoinedEvent] = useState([]);
  // const [createdEventSet, setCreatedEventSet] = useState();
  // const [joinedEventSet, setJoinedEventSet] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCreatedEventHistory = async () => {
      try {
        const method = "GET";
        const controller = `event/user/${refId}`;
        const data = await apiGetTemplate(method, controller);
        if (data.error) {
          throw new Error(data.error);
        }
        setCreatedEvent(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // const fetchJoinedEventHistory = async () => {
    //   try {
    //     const method = "GET";
    //     const controller = `invoice/findAllInvoiceWithEventByUser/${refId}`;
    //     const data = await apiGetTemplate(method, controller);
    //     if (data.error) {
    //       throw new Error(data.error);
    //     }
    //     setJoinedEvent(data);
    //     console.log(data);
    //   } catch (err) {
    //     setError(err.message);
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    if (refId) {
      fetchCreatedEventHistory();
      // fetchJoinedEventHistory();
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
            {createdEvent.map((coaching) => (
              <Grid item xs={4} key={coaching._id}>
                <CoachingHistoryCard event={coaching} />
              </Grid>
            ))}

            {/* {joinedEvent.map((coaching) => (
              <Grid
                item
                xs={6}
                key={coaching._id}
                sx={{
                  display: "flex",
                  flexGrow: 1,
                  justifyContent: "center",
                }}
              >
                <CoachingHistoryCard coaching={coaching} />
              </Grid>
            ))} */}
          </Grid>
        )}
      </Box>
      {/* <Grid container spacing={2}>
        {joinedEventSet && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexGrow: 1,
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                flexGrow: 1,
              }}
              variant="h4"
            >
              Joined
            </Typography>

            {coachings.map((coaching) => (
              <Box
                key={coaching.id}
                sx={{
                  mx: 2,
                  my: 1,
                  display: "flex",
                  flexGrow: 1,
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <CoachingHistoryCard coaching={coaching} />
              </Box>
            ))}
          </Box>
        )}

        {createdEventSet && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexGrow: 1,
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                flexGrow: 1,
              }}
              variant="h4"
            >
              Created
            </Typography>
            {createdEvent.map((coaching) => (
              <Grid
                key={coaching._id}
                sx={{
                  mx: 2,
                  my: 1,
                  display: "flex",
                  flexGrow: 1,
                  justifyContent: "center",
                }}
              >
                <CoachingHistoryCard coaching={createdEvent} />
              </Grid>
            ))}
          </Box>
        )}
      </Grid> */}
    </>
  );
}
