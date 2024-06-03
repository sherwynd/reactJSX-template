import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { PurchaseHistoryCard } from "../../components/PurchaseHistoryCard";
import { apiGetTemplate } from "../../services/api";

export function PurchaseHistory() {
  const { refId } = useParams();
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // /getAllInvoicesByUser/:refId
  useEffect(() => {
    const fetchPurchaseHistory = async () => {
      try {
        const method = "GET";
        const controller = `invoice/findAllInvoiceWithProductByUser/${refId}`;
        const data = await apiGetTemplate(method, controller);
        if (data.error) {
          throw new Error(data.error);
        }
        setPurchaseHistory(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (refId) {
      fetchPurchaseHistory();
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
      <Box sx={{ display: "flex", flexGrow: 1, flexDirection: "column" }}>
        {purchaseHistory.map((purchase) => (
          <Box key={purchase._id} sx={{ mx: 2, my: 1 }}>
            <PurchaseHistoryCard purchase={purchase} />
          </Box>
        ))}
      </Box>
    </>
  );
}
