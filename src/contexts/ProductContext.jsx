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

    const updateProduct = (product) => {
        const index = products.findIndex(p => p._id === product._id);
        console.log(product);
        const updatedProducts = [...products];
        updatedProducts[index] = product;

        // try {
        //     const formData = new FormData();
        //     formData.append('title', product.title);
        //     formData.append('price', product.price);
        //     formData.append('description', product.description);
        //     formData.append('category', product.category);
        //     formData.append('brand', product.brand);
        //     formData.append('location', product.location);
        //     formData.append('condition', product.condition);
        //     formData.append('acquisition', product.acquisition);

        //     const response = fetch(`http://localhost:3000/discover/${product._id}`, {
        //         method: 'PATCH',
        //         body: formData,
        //     });
        //     if (!response.ok) {
        //         throw new Error('Failed to update product');
        //     }
        //     setProducts(updatedProducts);
        //     console.log('product with id', product._id, 'updated successfully');
        // }
        // catch (error) {
        //     console.error('Error updating product:', error);
        // }
    }

    const updateProductFavourite = (product) => {
        const index = products.findIndex(p => p._id === product._id);
        const updatedProducts = [...products];
        updatedProducts[index] = product;
        setProducts(updatedProducts);
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

    const updateFavouriteUserinDatabase = async (id, favouriteCount) => {
        try {
            const response = await fetch(`http://localhost:3000/discover/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    favouriteCount: favouriteCount
                })
            })
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const json = await response.json();
            updateProductFavourite(json);
        }
        catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <ProductContext.Provider value={{ products, getProduct, addProduct, removeProduct, updateProduct, updateFavouriteUserinDatabase }}>
            {props.children}
        </ProductContext.Provider>
    );
}
