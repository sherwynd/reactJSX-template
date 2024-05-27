import { Box } from "@mui/material";
import { ProductHistoryCard } from "../../components/ProductHistoryCard";

import { useState } from "react";
import { PurchaseHistoryCard } from "../../components/PurchaseHistoryCard";

export function PurchaseHistory() {
  const [ratingStarHistoryValue, setRatingStarHistoryValue] = useState(3.5);
  const [reviewValue, setReviewValue] = useState(10);
  const purchase = [];
  return (
    <>
      <Box sx={{ display: "flex", flexGrow: 1, flexDirection: "column" }}>
        {purchase.map((purchase) => (
          <Box key={purchase.id} sx={{ mx: 2, my: 1 }}>
            <PurchaseHistoryCard purchase={purchase} />
          </Box>
        ))}
      </Box>
    </>
  );
}
