import React, { useState } from 'react';
import { CartProductList } from '../../components/Cart/CartProduct/CartProductList';
import { DeliveryAddress } from '../../components/Cart/DeliveryAddress/DeliveryAddress';
import { OrderSummary } from '../../components/Cart/OrderSummary/OrderSummary';

export const Cart = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'LDNIO SC5319 Power Socket',
      description: '2500W Power Socket with Surge Protector',
      price: 43.00, // As a number for easier calculations
      image: 'https://img.lazcdn.com/g/p/650b6fda8badf95bae363e7d55b11ae1.jpg_720x720q80.jpg',
      quantity: 1,
      isChecked: false
    },
    {
      id: 2,
      name: 'LDNIO SC5319 Power Socket',
      description: '2500W Power Socket with Surge Protector',
      price: 43.00, // As a number for easier calculations
      image: 'https://img.lazcdn.com/g/p/650b6fda8badf95bae363e7d55b11ae1.jpg_720x720q80.jpg',
      quantity: 1,
      isChecked: false
    },
  ]);

  return (
    <div className="container mx-auto mt-6 p-5 bg-white shadow-md">
      <h1 className="text-2xl font-bold mb-4">My Cart</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <DeliveryAddress />
        </div>
        <div className="md:col-span-2">
          <CartProductList products={products} setProducts={setProducts} />
          <OrderSummary products={products} />
        </div>
      </div>
    </div>
  );
};
