import React from 'react';

export const OrderSummary = ({ products }) => {
  const subtotal = products.reduce((acc, product) => product.isChecked ? acc + product.price * product.quantity : acc, 0);
  const shipping = 5; // Example fixed shipping cost
  const total = subtotal + shipping;

  return (
    <div className="p-4 border border-gray-200 rounded">
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
      <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
        Proceed to Buy
      </button>
    </div>
  );
};
