import { Box, Grid } from "@mui/material";
import { BlogHistoryCard } from "../../components/BlogHistoryCard";
export function BlogHistory() {
  const blogs = [];
  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", m: 1, flexGrow: 1 }}
      >
        <Grid container spacing={1}>
          {blogs.map((blog) => (
            <Grid item xs={4} key={blog.id}>
              <BlogHistoryCard blog={blog} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
