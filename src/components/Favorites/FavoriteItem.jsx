import React from 'react';
import { useNavigate } from 'react-router-dom';

const FavoriteItem = ({ name, description, price, image, type }) => {
  const navigate = useNavigate();
  const navigateCart = () => {
    navigate('/cart');
  };
  return (
    <div className='pb-3'>
      <div className="w-full max-w-5xl h-64 relative flex items-center bg-orange-50 rounded-2xl shadow p-4">
        {/* Image container */}
        <img className="w-52 h-52 rounded-2xl object-cover" src={image} alt={name} />

        {/* Details container */}
        <div className="flex flex-col justify-between ml-4">
          {/* Name and description */}
          <div>
            <div className="text-xl font-bold">{name}</div>
            <div className="text-md text-gray-700">{description}</div>
          </div>

          {/* Price and buttons container */}
          <div className="flex items-center pt-20">
            {/* Price */}
            <div className="text-3xl font-bold">{price}</div>

            {/* Buttons */}

            {type !== 'rating' && (
              <div className="flex ml-20 ">
                <button className="bg-orange-300 text-black px-4 py-2 rounded-xl border border-black text-lg font-normal mr-2" onClick={navigateCart}>BUY</button>
                <button className="bg-orange-300 text-black px-4 py-2 rounded-xl border border-black text-lg font-normal">REMOVE</button>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteItem;