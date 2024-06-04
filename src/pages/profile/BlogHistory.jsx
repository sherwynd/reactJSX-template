import { Box, Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { apiGetTemplate } from "../../services/api";
import { BlogHistoryCard } from "../../components/BlogHistoryCard";

export function BlogHistory() {
  const { refId } = useParams();
  const [blogHistory, setBlogHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogHistory = async () => {
      try {
        const method = "GET";
        const controller = `blogs/blogsHistory/${refId}`;
        const data = await apiGetTemplate(method, controller);
        if (data.error) {
          throw new Error(data.error);
        }
        setBlogHistory([data]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (refId) {
      fetchBlogHistory();
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
            {blogHistory.map((blog) => (
              <Grid item xs={4} key={blog._id}>
                <BlogHistoryCard blog={blog} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </>
  );
}
