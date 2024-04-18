import FavoriteItem from '../../components/Favorites/FavoriteItem';


export const Favorites = () => {
    const favoritesData = [
        {
            id: 1,
            name: "LDNIO SC5319 Power Socket",
            description: "2500W Power Socket with Surge Protector",
            price: "RM 43.00",
            image: 'https://img.lazcdn.com/g/p/650b6fda8badf95bae363e7d55b11ae1.jpg_720x720q80.jpg',
        },
        {
            id: 1,
            name: "LDNIO SC5319 Power Socket",
            description: "2500W Power Socket with Surge Protector",
            price: "RM 43.00",
            image: 'https://img.lazcdn.com/g/p/650b6fda8badf95bae363e7d55b11ae1.jpg_720x720q80.jpg',
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <h2 className="text-2xl font-bold mb-3">Favourites</h2>
            <div className="w-full max-w-2xl">
                {favoritesData.map(item => (
                    <FavoriteItem key={item.id} {...item} />
                ))}
            </div>

        </div >
    );
};