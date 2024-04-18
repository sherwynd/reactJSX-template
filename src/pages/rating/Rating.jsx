import React from 'react';
import FavoriteItem from '../../components/Favorites/FavoriteItem';
import { useNavigate } from 'react-router-dom';


export const Rating = () => {
    const favoritesData = [
        {
            id: 1,
            name: "LDNIO SC5319 Power Socket",
            description: "2500W Power Socket with Surge Protector",
            price: "RM 43.00",
            image: 'https://img.lazcdn.com/g/p/650b6fda8badf95bae363e7d55b11ae1.jpg_720x720q80.jpg',
            type: 'rating',
        },
        // {
        //     id: 1,
        //     name: "LDNIO SC5319 Power Socket",
        //     description: "2500W Power Socket with Surge Protector",
        //     price: "RM 43.00",
        //     image: 'https://img.lazcdn.com/g/p/650b6fda8badf95bae363e7d55b11ae1.jpg_720x720q80.jpg',
        // },
    ];
    const navigate = useNavigate();

    const navToMain = () => {
        navigate('/');
    };

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="flex flex-col justify-center p-4 w-5/12 border bg-orange-300 rounded-lg">
                <span className="text-4xl font-bold p-5 text-left">Rating</span>
                <div className='flex items-center justify-center'>
                    <div className="w-full px-5 pb-3">
                        {favoritesData.map(item => (
                            <FavoriteItem key={item.id} {...item} />
                        ))}
                    </div>
                </div>

                <div className=" w-full flex flex-col items-center">
                    <div className="flex flex-col items-center pb-3 space-y-3">
                        <span className="text-lg text-gray-800">How was the product?</span>
                        <div className="flex space-x-3">
                            <svg className="w-12 h-12 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg className="w-12 h-12 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg className="w-12 h-12 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg className="w-12 h-12 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg className="w-12 h-12 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>
                    </div>
                    <div className="w-3/4 flex flex-col">
                        <textarea rows="3" className="p-4 text-gray-500 rounded-xl resize-none" placeholder='Leave a message, if you want'></textarea>
                        <button className="py-3 my-8 text-lg bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl text-white" onClick={navToMain}>Rate now</button>
                    </div>
                </div>
            </div>
        </div>

    )
}