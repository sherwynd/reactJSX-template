import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductContextProvider = (props) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:3000/discover');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const json = await response.json();
                setProducts(json);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts()
    }, [])

    const getProduct = (id) => {
        return products.find(product => product._id === id);
    }

    const addProduct = (product) => {
        setProducts([...products, product]);
    }

    const removeProduct = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/discover/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete product');
            }
            setProducts(products.filter(product => product._id !== id));
            console.log('product with id', id, 'deleted successfully');
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    }

    return (
        <ProductContext.Provider value={{ products, getProduct, addProduct, removeProduct }}>
            {props.children}
        </ProductContext.Provider>
    );
}
