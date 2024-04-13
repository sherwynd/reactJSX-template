import React from 'react';
import { CartProduct } from './CartProduct';

export const CartProductList = ({ products, setProducts }) => {
  const handleQuantityChange = (productId, increment) => {
    setProducts(currentProducts =>
      currentProducts.map(product =>
        product.id === productId
          ? {
              ...product,
              quantity: increment ? product.quantity + 1 : Math.max(product.quantity - 1, 1)
            }
          : product
      )
    );
  };

  const toggleProductCheckbox = (productId) => {
    setProducts(currentProducts =>
      currentProducts.map(product =>
        product.id === productId
          ? { ...product, isChecked: !product.isChecked }
          : product
      )
    );
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
      {products.map(product => (
        <CartProduct
          key={product.id}
          product={product}
          onQuantityChange={handleQuantityChange}
          onToggleCheckbox={toggleProductCheckbox}
        />
      ))}
    </div>
  );
};
