import { Box, Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { ProductHistoryCard } from "../../components/ProductHistoryCard";
import { apiGetTemplate } from "../../services/api";

export function ProductHistory() {
  const { refId } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductHistory = async () => {
      try {
        const method = "GET";
        const controller = `discover/getProductsByUser/${refId}`;
        const data = await apiGetTemplate(method, controller);
        if (data.error) {
          throw new Error(data.error);
        }
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (refId) {
      fetchProductHistory();
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
            {product.map((product) => (
              <Grid item xs={4} key={product._id}>
                <ProductHistoryCard product={product} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </>
  );
}
