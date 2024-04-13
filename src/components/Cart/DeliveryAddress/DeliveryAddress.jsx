import { Phone } from '@mui/icons-material';
import React, { useState } from 'react'

export const DeliveryAddress = () => {
    const [addresses, setAddresses] = useState([
        { id: 1, name: "test", phone: "012345678910", line1: "Address Line 1.", line2: "Address Line 2.", city: "Selangor", zip: "45801" },
        { id: 2, name: "test", phone: "012345678910", line1: "Address Line 1.", line2: "Address Line 2.", city: "KL", zip: "45202" },
        { id: 3, name: "test", phone: "012345678910", line1: "Address Line 1.", line2: "Address Line 2.", city: "Kedah", zip: "48614" }
    ]);
    const [selectedAddressId, setSelectedAddressId] = useState(addresses[0].id);
    const [newAddress, setNewAddress] = useState({ name: '', phone: '', line1: '', line2: '', city: '', zip: '' });

    const handleAddressChange = (event) => {
        setSelectedAddressId(Number(event.target.value));
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewAddress(prev => ({ ...prev, [name]: value }));
    };

    const handleAddAddress = (event) => {
        event.preventDefault();
        if (!newAddress.name || !newAddress.phone || !newAddress.line1 || !newAddress.line2 || !newAddress.city || !newAddress.zip) {
            alert('Please fill all fields.');
            return;
        }
        const newId = addresses.length + 1; // simple ID assignment
        setAddresses(prev => [...prev, { id: newId, ...newAddress }]);
        setNewAddress({ name: '', phone: '', line1: '', line2: '', city: '', zip: '' }); // Reset form
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-6 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Delivery Address</h2>
            <div className="space-y-4">
                {addresses.map((address) => (
                    <div key={address.id} className="flex items-center">
                        <input
                            type="radio"
                            name="address"
                            value={address.id}
                            checked={selectedAddressId === address.id}
                            onChange={handleAddressChange}
                            className="form-radio h-5 w-5 text-blue-600"
                        />
                        <label htmlFor={address.id} className="ml-2 text-sm font-medium text-gray-700">
                            <span className="font-bold text-base">{`${address.name}, ${address.phone}`}</span>
                            <br />
                            {`${address.line1}, ${address.line2}, ${address.city}, ${address.zip}`}
                        </label>
                    </div>
                ))}
            </div>
            <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Add New Address</h3>
                <div className="grid grid-cols-3 gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={newAddress.name}
                        onChange={handleInputChange}
                        className="col-span-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                        type="number"
                        name="phone"
                        placeholder="Phone Number"
                        value={newAddress.phone}
                        onChange={handleInputChange}
                        className="col-span-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                        type="text"
                        name="line1"
                        placeholder="Address Line 1"
                        value={newAddress.line1}
                        onChange={handleInputChange}
                        className="col-span-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                        type="text"
                        name="line2"
                        placeholder="Address Line 2"
                        value={newAddress.line2}
                        onChange={handleInputChange}
                        className="col-span-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                        type="text"
                        name="city"
                        placeholder="City/Town"
                        value={newAddress.city}
                        onChange={handleInputChange}
                        className="col-span-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                        type="text"
                        name="zip"
                        placeholder="ZIP Code"
                        value={newAddress.zip}
                        onChange={handleInputChange}
                        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
                <button onClick={handleAddAddress} className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Add Address
                </button>

                <div>

                </div>
            </div>
        </div>
    );
};