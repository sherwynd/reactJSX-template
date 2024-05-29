import FavoriteItem from '../../components/Favorites/FavoriteItem';
import { useParams, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

export const Favorites = () => {


    const userData = JSON.parse(localStorage.getItem('profile'));
    console.log(userData.refId);
    const currentRefId = userData.refId;
    const [favoritesData, setFavoritesData] = useState([]);

    useEffect(() => {
        const fetchFavoritesData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/discover/getFavouriteProductsByUser/${currentRefId}`);
                const data = await response.json();
                setFavoritesData(data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchFavoritesData();
    }, [currentRefId]);

    return (
        <div className='min-h-screen'>
            <div className="flex flex-col items-center justify-center p-4">
                <h2 className="text-2xl font-bold mb-3">Favourites</h2>
                <div className="w-full max-w-2xl md:max-w-4xl">
                    {favoritesData.map(item => (
                        <FavoriteItem
                            key={item._id}
                            name={item.title}
                            description={item.description}
                            price={`RM ${item.price}`}
                            image={`http://localhost:3000/${item.imgs[0]}`}
                            type={item.category}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
