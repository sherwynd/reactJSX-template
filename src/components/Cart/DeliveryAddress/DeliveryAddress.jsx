import React, { useState } from 'react';
import { Button, TextField, Radio, RadioGroup, FormControlLabel, Box } from '@mui/material';

export const DeliveryAddress = ({ addresses, selectedAddressId, setSelectedAddressId, addAddress, deleteAddress }) => {
  const handleAddressChange = (event) => {
    setSelectedAddressId(event.target.value);
  };

  const [newAddress, setNewAddress] = useState({
    address_name: '',
    address_phone: '',
    address_line1: '',
    address_line2: '',
    address_city: '',
    address_zip: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewAddress(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newAddress.address_name || !newAddress.address_phone || !newAddress.address_line1 || !newAddress.address_line2 || !newAddress.address_city || !newAddress.address_zip) {
      alert('Please fill all fields.');
      return;
    }
    addAddress(newAddress);
    setNewAddress({
      address_name: '',
      address_phone: '',
      address_line1: '',
      address_line2: '',
      address_city: '',
      address_zip: '',
    }); // Reset form after submission
  };

  return (
    <Box sx={{ maxWidth: '4xl', mx: 'auto', px: 4, pt: 5, pb: 6, bgcolor: '#FFFDE7', boxShadow: 3, borderRadius: 2 }}>
      <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1rem' }}>Delivery Address</h2>
      <RadioGroup name="address" value={selectedAddressId} onChange={handleAddressChange}>
        {addresses.map((address) => (
          <Box key={address._id} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <FormControlLabel
              value={address._id}
              control={<Radio color="primary" />}
              label={`${address.address_name}, ${address.address_phone} - ${address.address_line1}, ${address.address_line2}, ${address.address_city}, ${address.address_zip}`}
              sx={{ flexGrow: 1 }}
            />
            <Button
              onClick={() => deleteAddress(address._id)}
              variant="outlined"
              color="secondary"
              sx={{ ml: 2 }}
            >
              Delete
            </Button>
          </Box>
        ))}
      </RadioGroup>

      <Box sx={{ mt: 3 }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '0.5rem' }}>Add New Address</h3>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          <TextField fullWidth label="Name" name="address_name" value={newAddress.address_name} onChange={handleInputChange} variant="outlined" sx={{ gridColumn: 'span 3', bgcolor: '#FFFFFF' }} />
          <TextField fullWidth label="Phone Number" name="address_phone" type="number" value={newAddress.address_phone} onChange={handleInputChange} variant="outlined" sx={{ gridColumn: 'span 3', bgcolor: '#FFFFFF' }} />
          <TextField fullWidth label="Address Line 1" name="address_line1" value={newAddress.address_line1} onChange={handleInputChange} variant="outlined" sx={{ gridColumn: 'span 3', bgcolor: '#FFFFFF' }} />
          <TextField fullWidth label="Address Line 2" name="address_line2" value={newAddress.address_line2} onChange={handleInputChange} variant="outlined" sx={{ gridColumn: 'span 3', bgcolor: '#FFFFFF' }} />
          <TextField fullWidth label="City/Town" name="address_city" value={newAddress.address_city} onChange={handleInputChange} variant="outlined" sx={{ gridColumn: 'span 2', bgcolor: '#FFFFFF' }} />
          <TextField fullWidth label="ZIP Code" name="address_zip" value={newAddress.address_zip} onChange={handleInputChange} variant="outlined" sx={{ gridColumn: 'span 1', bgcolor: '#FFFFFF' }} />
          <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 1, gridColumn: 'span 3' }}>
            Add Address
          </Button>
        </form>
      </Box>
    </Box>
  );
};
