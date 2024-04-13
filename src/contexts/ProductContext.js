import React, {createContext, useState} from "react";
import uuid from "uuid";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
    const [products, setProducts] = useState([
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 100,
            img: "src\\assets\\images\\image1.png",
            condition: "new",
            category: "electronics",
            brand: "apple",
            id: 1
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 69,
            img: "src\\assets\\images\\image2.png",
            condition: "not new",
            category: "shoe",
            brand: "pineapple",
            id: 2
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 777,
            img: "src\\assets\\images\\image2.png",
            condition: "like new",
            category: "sports",
            brand: "nike",
            id: 3
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 1010,
            img: "src\\assets\\images\\image2.png",
            condition: "old",
            category: "fruit",
            brand: "orange",
            id: 4
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 9,
            img: "src\\assets\\images\\image1.png",
            condition: "very new",
            category: "not electronics",
            brand: "not apple",
            id: 5
        }
    ]);
    const addProduct = (title, description, price, condition, category, brand, acquisition, img) => {
        setProducts([...products, {title, description, price, condition, category, brand, acquisition, img, id: uuid()}]);
    }
    const removeProduct = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };
    return (
        <ProductContext.Provider value={{products, addProduct, removeProduct}}>
            {props.children}
        </ProductContext.Provider>
    );
}

export default ProductContextProvider;