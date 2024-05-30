import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CartProductList } from '../../components/Cart/CartProduct/CartProductList';
import { DeliveryAddress } from '../../components/Cart/DeliveryAddress/DeliveryAddress';
import { OrderSummary } from '../../components/Cart/OrderSummary/OrderSummary';
import axios from 'axios';

export const Cart = () => {
  const location = useLocation();
  const userData = JSON.parse(localStorage.getItem('profile'));
  const refId = userData.refId;

  const [products, setProducts] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [selectedAddressId, setSelectedAddressId] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/address/${refId}`)
      .then(response => {
        setAddresses(response.data);
        if (response.data.length > 0) {
          setSelectedAddressId(response.data[0]._id);
        }
      })
      .catch(error => {
        console.error("There was an error fetching the addresses!", error);
      });
  }, [refId]);

  useEffect(() => {
    if (location.state && location.state.product) {
      setProducts([location.state.product]); // Set the product in the cart
    }
  }, [location.state]);

  const addAddress = (newAddress) => {
    axios.post(`http://localhost:3000/address/${refId}`, newAddress)
      .then(response => {
        setAddresses([...addresses, response.data]);
      })
      .catch(error => {
        console.error("There was an error adding the address!", error);
      });
  };

  const deleteAddress = (addressId) => {
    axios.delete(`http://localhost:3000/address/${refId}/${addressId}`)
      .then(response => {
        setAddresses(addresses.filter(address => address._id !== addressId));
      })
      .catch(error => {
        console.error("There was an error deleting the address!", error);
      });
  };

  const selectedAddress = addresses.find(address => address._id === selectedAddressId);

  return (
    <div className="container mx-auto mt-6 p-5">
      <h1 className="text-2xl font-bold mb-4">My Cart</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <DeliveryAddress
            addresses={addresses}
            selectedAddressId={selectedAddressId}
            setSelectedAddressId={setSelectedAddressId}
            addAddress={addAddress}
            deleteAddress={deleteAddress}
          />
        </div>
        <div className="md:col-span-2">
          <CartProductList products={products} setProducts={setProducts} />
          <OrderSummary products={products} address={selectedAddress} />
        </div>
      </div>
    </div>
  );
};
