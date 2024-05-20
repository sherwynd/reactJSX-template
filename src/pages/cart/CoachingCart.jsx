import React, { useState } from "react";
import { CartProductList } from "../../components/Cart/CartProduct/CartProductList";
import { DeliveryAddress } from "../../components/Cart/DeliveryAddress/DeliveryAddress";
import { OrderSummary } from "../../components/Cart/OrderSummary/OrderSummary";
import { CoachingOrderSummary } from "../../components/Cart/OrderSummary/CoachingOrderSummary";

export const CoachingCart = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Crazy Sweat Jam Event",
      description: "Product code: 212960",
      price: 549.0, // As a number for easier calculations
      image: "src\\assets\\images\\fitness-event.png",
      quantity: 1,
      isChecked: false,
    },
    // {
    //   id: 2,
    //   name: 'LDNIO SC5319 Power Socket',
    //   description: '2500W Power Socket with Surge Protector',
    //   price: 43.00, // As a number for easier calculations
    //   image: 'https://img.lazcdn.com/g/p/650b6fda8badf95bae363e7d55b11ae1.jpg_720x720q80.jpg',
    //   quantity: 1,
    //   isChecked: false
    // },
  ]);

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "hkr0528@gmail.com",
      phone: "0123456789",
      line1: "Address Line 1",
      line2: "Address Line 2",
      city: "Selangor",
      zip: "45801",
    },
    {
      id: 2,
      name: "Name 2",
      phone: "9876543210",
      line1: "Address Line 1",
      line2: "Address Line 2",
      city: "KL",
      zip: "45202",
    },
    {
      id: 3,
      name: "Name 3",
      phone: "1234567890",
      line1: "Address Line 1",
      line2: "Address Line 2",
      city: "Kedah",
      zip: "48614",
    },
  ]);
  const [selectedAddressId, setSelectedAddressId] = useState(addresses[0].id);

  const selectedAddress = addresses.find(
    (address) => address.id === selectedAddressId
  );

  return (
    <div className="px-20">
      <h1 className="text-2xl font-bold mb-4">Subscription Payment</h1>
      <div className="md:col-span-2">
        <CartProductList products={products} setProducts={setProducts} />
        <CoachingOrderSummary products={products} address={selectedAddress} />
      </div>
    </div>
  );
};
