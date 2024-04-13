import React from 'react';

export const CartProduct = ({ product, onQuantityChange, onToggleCheckbox }) => {
    const { quantity, isChecked } = product;
    const handleDecrease = () => onQuantityChange(product.id, false);
    const handleIncrease = () => onQuantityChange(product.id, true);
    const handleCheckboxToggle = () => onToggleCheckbox(product.id);

    return (
        <div className="flex items-center justify-between p-6 bg-white shadow-lg rounded-lg mb-6 border">
            <div className="flex items-start">
                <div className="flex items-center h-6">
                    <input
                        id={`checkbox-${product.id}`}
                        aria-describedby={`checkbox-${product.id}`}
                        name={`checkbox-${product.id}`}
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxToggle}
                        className="focus:ring-blue-500 h-6 w-6 text-blue-600 border-gray-300 rounded"
                    />
                </div>
                <div className="flex-shrink-0 ml-4">
                    <img className="h-24 w-24 rounded-lg object-cover" src={product.image} alt={product.name} />
                </div>
                <div className="ml-6">
                    <h4 className="text-lg font-medium text-gray-900">{product.name}</h4>
                    <p className="text-sm text-gray-500">{product.description}</p>
                    <div className="mt-2 flex">
                        <button onClick={handleDecrease} className="text-gray-600 hover:text-gray-800 bg-gray-200 hover:bg-gray-300 rounded-l-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500">-</button>
                        <input type="text" className="w-16 text-center bg-gray-200 text-gray-700 border-none focus:ring-2 focus:ring-blue-500" value={quantity} readOnly />
                        <button onClick={handleIncrease} className="text-gray-600 hover:text-gray-800 bg-gray-200 hover:bg-gray-300 rounded-r-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500">+</button>
                    </div>
                </div>
            </div>
            <div className="flex items-center">
                <span className="text-xl font-bold text-gray-900">RM{product.price}</span>
            </div>
        </div>
    );
};
