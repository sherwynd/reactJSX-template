import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PaymentOptions } from '../Payment/PaymentOptions';
import { Typography, Button, Card, CardContent, Grid } from '@mui/material';

export const OrderSummary = ({ products, address }) => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState('');

  const subtotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
  const shipping = 5;
  const total = subtotal + shipping;

  const proceedToBuy = () => {
    if (!selectedMethod) {
      window.alert('Please select a payment method.');
    } else {
      if (window.confirm('Are you sure you want to proceed with your purchase?')) {
        navigate('/rating');
      }
    }
  };

  return (
    <Card sx={{ p: 2, borderColor: 'gray.200', borderRadius: 1, backgroundColor: '#FFFDE7' }}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          Order Summary
        </Typography>
        <Grid container spacing={1} justifyContent="space-between">
          <Grid item xs={6}>
            <Typography>Sub-total</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography textAlign="right">RM{subtotal.toFixed(2)}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Shipping</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography textAlign="right">RM{shipping.toFixed(2)}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography fontWeight="bold">Total</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography textAlign="right" fontWeight="bold">RM{total.toFixed(2)}</Typography>
          </Grid>
        </Grid>
        {address && (
          <Grid container spacing={1} mt={2}>
            <Grid item xs={12}>
              <Typography variant="subtitle1">Shipping to:</Typography>
              <Typography fontWeight="bold">{`${address.name}, ${address.line1}, ${address.line2}, ${address.city}, ${address.zip}`}</Typography>
            </Grid>
          </Grid>
        )}
        <PaymentOptions selectedMethod={selectedMethod} onPaymentMethodChange={setSelectedMethod} />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2, bgcolor: 'yellow.600', '&:hover': { bgcolor: 'yellow.700' } }}
          onClick={proceedToBuy}
        >
          Proceed to Buy
        </Button>
      </CardContent>
    </Card>
  );
};
