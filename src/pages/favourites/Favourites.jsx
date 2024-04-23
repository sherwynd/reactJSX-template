import FavoriteItem from '../../components/Favorites/FavoriteItem';
import React from 'react';

export const Favorites = () => {
    const favoritesData = [
        {
            id: 1,
            name: "Adidas Terrex Soul Stride Mens Trail Running Shoes",
            description: "Product code: 213015",
            price: "RM 219.00",
            image: 'https://cdn.media.amplience.net/i/frasersdev/21301512_o?fmt=auto&w=1200&h=1200&sm=scaleFit&$h-ttl$',
        },
        {
            id: 2,
            name: "Asics Novablast 4 Mens Running Shoes",
            description: "Product code: 212960",
            price: "RM 549.00",
            image: 'https://cdn.media.amplience.net/i/frasersdev/21296048_o?fmt=auto&w=1200&h=1200&sm=scaleFit&$h-ttl$',
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <h2 className="text-2xl font-bold mb-3">Favourites</h2>
            <div className="w-full max-w-2xl md:max-w-4xl">
                {favoritesData.map(item => (
                    <FavoriteItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
};
