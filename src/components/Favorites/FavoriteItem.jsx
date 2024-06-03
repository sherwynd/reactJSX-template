import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { ProductContext } from '../../contexts/ProductContext';

const FavoriteItem = ({ id, name, description, price, image, type, onRemove }) => {
  const navigate = useNavigate();
  const [productData, setProductData] = useState([]);
  const { updateProductFavourite } = useContext(ProductContext);

  const navigateCart = () => {
    const product = {
      id,
      name,
      description,
      price: parseFloat(price.replace('RM', '').trim()),
      image,
      quantity: 1,
      isChecked: false
    };
    navigate('/cart', { state: { product } });
  };

  const navToProduct = async () => {
    try {
      const response = await fetch(`http://localhost:3000/discover/${id}`);
      const data = await response.json();
      setProductData(data);
      navigate(`/discover/${data._id}`, { state: { product: data } });
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  const removeFavourite = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem('profile'));
      const currentId = userData._id;
      const response = await fetch(`http://localhost:3000/invoice/removeFavouriteProduct/${currentId}/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Failed to remove product from favourites');
      }
      const json = await response.json();
      updateProductFavourite(json);
      console.log(json);
      const updatedFavourites = userData.favourites.filter(favId => favId !== id);
      userData.favourites = updatedFavourites;

      // Update local storage
      localStorage.setItem('profile', JSON.stringify(userData));

      onRemove();  // Call the function to refresh favorites
    } catch (error) {
      console.error('Error removing product:', error);
    }
  };

  return (
    <div className='pb-3'>
      <div className="w-full max-w-5xl mx-auto h-auto sm:h-64 flex flex-col sm:flex-row items-center bg-orange-50 rounded-2xl shadow p-5">
        <img className="w-full sm:w-52 h-48 sm:h-52 rounded-2xl object-cover mb-4 sm:mb-0" src={image} alt={name} onClick={navToProduct} />

        <div className="flex flex-col justify-between ml-0 sm:ml-4 w-full">
          <div onClick={navToProduct}>
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
                <Button className="px-4 py-2 rounded-xl border border-solid text-lg" variant="outlined" onClick={removeFavourite}>REMOVE</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteItem;
