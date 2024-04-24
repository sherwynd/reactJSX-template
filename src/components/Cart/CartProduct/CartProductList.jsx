import React from "react";
import { CartProduct } from "./CartProduct";

export const CartProductList = ({ products }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Product</h2>
      {products.map((product) => (
        <CartProduct key={product.id} product={product} />
      ))}
    </div>
  );
};
