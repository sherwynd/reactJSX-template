import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PaymentOptions } from '../Payment/PaymentOptions';

export const OrderSummary = ({ products, address }) => {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState('Online Banking'); // Default selected method

  const subtotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
  const shipping = 5;
  const total = subtotal + shipping;

  const proceedToBuy = () => {
    navigate('/rating');
  };

  return (
    <div className="p-4 border border-gray-200 rounded bg-yellow-50">
      <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
      <div className="flex justify-between mb-2">
        <span>Sub-total</span>
        <span>RM{subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Shipping</span>
        <span>RM{shipping.toFixed(2)}</span>
      </div>
      <div className="flex justify-between font-bold">
        <span>Total</span>
        <span>RM{total.toFixed(2)}</span>
      </div>
      <div className='pb-5'>
        {address && (
          <div className="mt-4">
            <h4>Shipping to:</h4>
            <p className="font-bold">{`${address.name}, ${address.line1}, ${address.line2}, ${address.city}, ${address.zip}`}</p>
          </div>
        )}
      </div>
      <PaymentOptions selectedMethod={selectedMethod} onPaymentMethodChange={setSelectedMethod} />
      <button className="w-full mt-4 bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700 transition-colors"
        onClick={proceedToBuy}>
        Proceed to Buy
      </button>
    </div>
  );
};