import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CartProductList } from "../../components/Cart/CartProduct/CartProductList";
import { DeliveryAddress } from "../../components/Cart/DeliveryAddress/DeliveryAddress";
import { OrderSummary } from "../../components/Cart/OrderSummary/OrderSummary";
import axios from "axios";
import { CoachingOrderSummary } from "../../components/Cart/OrderSummary/CoachingOrderSummary";

export const CoachingCart = () => {
  const { state } = useLocation();
  const userData = JSON.parse(localStorage.getItem("profile"));
  const refId = userData.refId;

  const event = state;


  return (
    <div className="container mx-auto mt-6 p-5">
      <h1 className="text-2xl font-bold mb-4">My Cart</h1>
      <CoachingOrderSummary event={event} />
    </div>
  );
};
