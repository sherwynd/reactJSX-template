import React, { useState } from 'react';
import { Button, TextField, Radio, RadioGroup, FormControlLabel, Box } from '@mui/material';

export const DeliveryAddress = ({ addresses, selectedAddressId, setSelectedAddressId, addAddress }) => {
    const handleAddressChange = (event) => {
        setSelectedAddressId(Number(event.target.value));
    };

    const [newAddress, setNewAddress] = useState({
        name: '',
        phone: '',
        line1: '',
        line2: '',
        city: '',
        zip: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewAddress(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!newAddress.name || !newAddress.phone || !newAddress.line1 || !newAddress.line2 || !newAddress.city || !newAddress.zip) {
            alert('Please fill all fields.');
            return;
        }
        addAddress(newAddress);
        setNewAddress({ name: '', phone: '', line1: '', line2: '', city: '', zip: '' }); // Reset form after submission
    };

    return (
        <Box sx={{ maxWidth: '4xl', mx: 'auto', px: 4, pt: 5, pb: 6, bgcolor: '#FFFDE7', boxShadow: 3, borderRadius: 2 }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1rem' }}>Delivery Address</h2>
            <RadioGroup name="address" value={selectedAddressId} onChange={handleAddressChange}>
                {addresses.map((address) => (
                    <FormControlLabel
                        key={address.id}
                        value={address.id}
                        control={<Radio color="primary" />}
                        label={`${address.name}, ${address.phone} - ${address.line1}, ${address.line2}, ${address.city}, ${address.zip}`}
                        sx={{ mb: 2 }}
                    />
                ))}
            </RadioGroup>

            <Box sx={{ mt: 3 }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '0.5rem' }}>Add New Address</h3>
                <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                    <TextField fullWidth label="Name" name="name" value={newAddress.name} onChange={handleInputChange} variant="outlined" sx={{ gridColumn: 'span 3', bgcolor: '#FFFFFF' }} />
                    <TextField fullWidth label="Phone Number" name="phone" type="number" value={newAddress.phone} onChange={handleInputChange} variant="outlined" sx={{ gridColumn: 'span 3', bgcolor: '#FFFFFF' }} />
                    <TextField fullWidth label="Address Line 1" name="line1" value={newAddress.line1} onChange={handleInputChange} variant="outlined" sx={{ gridColumn: 'span 3', bgcolor: '#FFFFFF' }} />
                    <TextField fullWidth label="Address Line 2" name="line2" value={newAddress.line2} onChange={handleInputChange} variant="outlined" sx={{ gridColumn: 'span 3', bgcolor: '#FFFFFF' }} />
                    <TextField fullWidth label="City/Town" name="city" value={newAddress.city} onChange={handleInputChange} variant="outlined" sx={{ gridColumn: 'span 2', bgcolor: '#FFFFFF' }} />
                    <TextField fullWidth label="ZIP Code" name="zip" value={newAddress.zip} onChange={handleInputChange} variant="outlined" sx={{ gridColumn: 'span 1', bgcolor: '#FFFFFF' }} />
                    <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 1, gridColumn: 'span 3' }}>
                        Add Address
                    </Button>
                </form>
            </Box>
        </Box>
    );
};
