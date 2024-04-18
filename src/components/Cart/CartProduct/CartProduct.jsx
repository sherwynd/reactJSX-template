import React from 'react';

export const CartProduct = ({ product }) => {
    const { quantity } = product;

    return (
        <div className="flex items-center justify-between p-6 bg-yellow-50 shadow-lg rounded-lg mb-6 border">
            <div className="flex items-start">
                <div className="flex-shrink-0 ml-4">
                    <img className="h-24 w-24 rounded-lg object-cover" src={product.image} alt={product.name} />
                </div>
                <div className="ml-6">
                    <h4 className="text-lg font-medium text-gray-900">{product.name}</h4>
                    <p className="text-sm text-gray-500">{product.description}</p>
                    <div className="mt-2 flex">
                        <input type="text" className="w-16 text-center bg-gray-200 text-gray-700 border-none focus:ring-2 focus:ring-blue-500" value={quantity} readOnly />
                    </div>
                </div>
            </div>
            <div className="flex items-center">
                <span className="text-xl font-bold text-gray-900">RM{product.price}</span>
            </div>
        </div>
    );
};