import React, { useState } from 'react';
import Button from '@mui/material/Button';

export const AddAddress = ({ addAddress }) => {
    const userData = JSON.parse(localStorage.getItem('profile'));
    const userId = userData._id;
    const refId = userData.refId;

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
        <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Add New Address</h3>
            <form className="grid grid-cols-3 gap-4" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={newAddress.name} onChange={handleInputChange}
                    className="col-span-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent" />
                <input type="number" name="phone" placeholder="Phone Number" value={newAddress.phone} onChange={handleInputChange}
                    className="col-span-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent" />
                <input type="text" name="line1" placeholder="Address Line 1" value={newAddress.line1} onChange={handleInputChange}
                    className="col-span-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent" />
                <input type="text" name="line2" placeholder="Address Line 2" value={newAddress.line2} onChange={handleInputChange}
                    className="col-span-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent" />
                <input type="text" name="city" placeholder="City/Town" value={newAddress.city} onChange={handleInputChange}
                    className="col-span-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent" />
                <input type="text" name="zip" placeholder="ZIP Code" value={newAddress.zip} onChange={handleInputChange}
                    className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent" />
                <Button type="submit" className="mt-4 col-span-3 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Add Address
                </Button>
            </form>
        </div>
    );
};