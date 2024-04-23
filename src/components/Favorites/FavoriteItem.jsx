import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const FavoriteItem = ({ name, description, price, image, type }) => {
  const navigate = useNavigate();
  const navigateCart = () => {
    navigate('/cart');
  };

  return (
    <div className='pb-3'>
      <div className="w-full max-w-5xl mx-auto h-auto sm:h-64 flex flex-col sm:flex-row items-center bg-orange-50 rounded-2xl shadow p-4">
        <img className="w-full sm:w-52 h-48 sm:h-52 rounded-2xl object-cover mb-4 sm:mb-0" src={image} alt={name} />

        <div className="flex flex-col justify-between ml-0 sm:ml-4 w-full">
          <div>
            <div className="text-xl font-bold">{name}</div>
            <div className="text-md text-gray-700">{description}</div>
          </div>

          {/* Price and buttons container */}
          <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row items-center justify-between w-full pt-10">
            {/* Price */}
            <div className="text-3xl font-bold">{price}</div>

            {/* Buttons */}
            {type !== 'rating' && (
              <div className="flex space-x-2 mt-2 sm:mt-0">
                <Button className="px-4 py-2 rounded-xl border border-solid text-lg" variant="outlined" onClick={navigateCart}>BUY</Button>
                <Button className="px-4 py-2 rounded-xl border border-solid text-lg" variant="outlined">REMOVE</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteItem;
