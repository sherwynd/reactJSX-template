import { Box, Grid, Paper, styled } from "@mui/material";
import { ProductHistoryCard } from "../../components/ProductHistoryCard";

export function ProductHistory() {
  const products = [];

  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", m: 1, flexGrow: 1 }}
      >
        <Grid container spacing={1}>
          {products.map((product) => (
            <Grid item xs={4} key={product.id}>
              <ProductHistoryCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
