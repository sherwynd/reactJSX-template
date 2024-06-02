import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Modal,
  Box,
} from "@mui/material";
import { PaymentOptions } from "../Payment/PaymentOptions";
import axios from "axios";

export const CoachingOrderSummary = ({ event }) => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState("");
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);

  const total = event ? event.eventPrice : 0;

  const handleAlertClose = () => setAlertModalOpen(false);
  const handleConfirmClose = () => setConfirmModalOpen(false);

  const proceedToBuy = () => {
    if (!selectedMethod) {
      setAlertModalOpen(true);
    } else {
      setConfirmModalOpen(true);
    }
  };

  const handlePurchaseConfirmation = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem("profile"));
      const refId = userData.refId;
      const productId = event.eventId; // Assuming only one product in the cart for simplicity

      const invoiceData = {
        refId,
        productId,
        invoice_date: new Date(),
        invoice_amount: total,
        payment_method: selectedMethod,
        type: "event",
      };

      await axios.post(
        `http://localhost:3000/invoice/makeInvoiceByUser/${refId}/${productId}`,
        invoiceData
      );

      navigate("/coaching");
    } catch (error) {
      console.error("Error creating invoice:", error);
    }
  };

  const alertModalBody = (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography id="alert-modal-title" variant="h6" component="h2">
        Notification
      </Typography>
      <Typography id="alert-modal-description" sx={{ mt: 2, mb: 4 }}>
        Please select a payment method.
      </Typography>
      <Box display="flex" justifyContent="flex-end">
        <Button onClick={handleAlertClose} color="primary" variant="contained">
          Close
        </Button>
      </Box>
    </Box>
  );

  const confirmModalBody = (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography id="confirm-modal-title" variant="h6" component="h2">
        Confirm Purchase
      </Typography>
      <Typography id="confirm-modal-description" sx={{ mt: 2, mb: 4 }}>
        Are you sure you want to proceed with your purchase?
      </Typography>
      <Box display="flex" justifyContent="flex-end">
        <Button
          onClick={handlePurchaseConfirmation}
          sx={{ mr: 2 }}
          color="primary"
          variant="contained"
        >
          Yes
        </Button>
        <Button
          onClick={handleConfirmClose}
          color="secondary"
          variant="contained"
        >
          No
        </Button>
      </Box>
    </Box>
  );

  return (
    <Card
      sx={{
        p: 2,
        borderColor: "gray.200",
        borderRadius: 1,
        backgroundColor: "#FFFDE7",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          Order Summary
        </Typography>
        <Grid container spacing={1} justifyContent="space-between">
          <Grid item xs={6}>
            <Typography fontWeight="bold">Event Name</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography textAlign="right" fontWeight="bold">
              {event.eventName}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography fontWeight="bold">Total</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography textAlign="right" fontWeight="bold">
              RM{total}
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={1} mt={2}></Grid>
        <PaymentOptions
          selectedMethod={selectedMethod}
          onPaymentMethodChange={setSelectedMethod}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            mt: 2,
            bgcolor: "yellow.600",
            "&:hover": { bgcolor: "yellow.700" },
          }}
          onClick={proceedToBuy}
        >
          Proceed to Buy
        </Button>
      </CardContent>
      <Modal
        open={alertModalOpen}
        onClose={handleAlertClose}
        aria-labelledby="alert-modal-title"
        aria-describedby="alert-modal-description"
      >
        {alertModalBody}
      </Modal>
      <Modal
        open={confirmModalOpen}
        onClose={handleConfirmClose}
        aria-labelledby="confirm-modal-title"
        aria-describedby="confirm-modal-description"
      >
        {confirmModalBody}
      </Modal>
    </Card>
  );
};
