import { Box, Button } from "@mui/material";
import { ResponsiveDrawer } from "../../components/Navbar";
import { ThemeProvider } from "@emotion/react";
import theme from "../../theme/color";
import EventCard from "../../components/EventCard";
import Grid from '@mui/material/Grid';

export function Coaching() {
  const eventIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <ThemeProvider theme={theme}>
      <ResponsiveDrawer> 
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
          <Button variant="outlined" color="primary">
            Create
          </Button>
        </Box>
        <Box sx={{ mt: 2}}>
          <Grid container spacing={4}>
            {eventIds.map(id => (
              <Grid key={id}item xs={12} sm={6} md={4}>
                <EventCard id={id}/>
              </Grid>
            ))}
          </Grid>
        </Box>
      </ResponsiveDrawer>
    </ThemeProvider>
  );
}
