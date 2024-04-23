import React from 'react';

export const PaymentOptions = ({ selectedMethod, onPaymentMethodChange }) => {
  const paymentMethods = [
    { name: 'Online Banking' },
    { name: 'Credit Card' },
    { name: 'PayPal' }
  ];

  // A generic button class for all payment methods
  const buttonClass = "text-gray-900 hover:text-white border border-gray-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 transition-colors duration-200 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800";

  return (
    <div className="payment-options">
      <h2 className="text-lg font-semibold mt-5">Payment Method</h2>
      {paymentMethods.map((method, index) => (
        <button
          key={index}
          type="button"
          className={buttonClass}
          onClick={() => onPaymentMethodChange(method.name)}
          aria-pressed={selectedMethod === method.name}
        >
          {method.name}
        </button>
      ))}
    </div>
  );
};