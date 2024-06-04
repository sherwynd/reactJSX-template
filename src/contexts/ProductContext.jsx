import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [contextLoading, setContextLoading] = useState(true);

  const profile = JSON.parse(localStorage.getItem("profile"));

  const refId = profile?.refId || "";

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/discover");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      const availableProducts = json.filter(
        (product) => product.isAvailable && product.creatorId !== refId
      );
      setProducts(availableProducts);
      setContextLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const getProduct = (id) => {
    return products.find((product) => product._id === id);
  };

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const updateProduct = (product) => {
    const index = products.findIndex((p) => p._id === product._id);
    const updatedProducts = [...products];
    updatedProducts[index] = product;
    const availableProducts = updatedProducts.filter(
      (product) => product.isAvailable && product.creatorId !== refId
    );
    setProducts(availableProducts);
  };

  const setProductUnavailable = (productId) => {
    //set useState product isAvailable to false
    const index = products.findIndex((p) => p._id === productId);
    const updatedProducts = [...products];
    updatedProducts[index].isAvailable = false;
    const availableProducts = updatedProducts.filter(
      (product) => product.isAvailable && product.creatorId !== refId
    );
    setProducts(availableProducts);
  };

  const updateProductFavourite = (product) => {
    const index = products.findIndex((p) => p._id === product._id);
    const updatedProducts = [...products];
    updatedProducts[index] = product;
    setProducts(updatedProducts);
  };

  const removeProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/discover/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete product");
      }
      setProducts(products.filter((product) => product._id !== id));
      console.log("product with id", id, "deleted successfully");
      navigate("/discover");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const updateFavouriteUserinDatabase = async (id, favouriteCount) => {
    try {
      const response = await fetch(`http://localhost:3000/discover/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          favouriteCount: favouriteCount,
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      updateProductFavourite(json);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        contextLoading,
        fetchProducts,
        getProduct,
        addProduct,
        removeProduct,
        updateProduct,
        updateFavouriteUserinDatabase,
        updateProductFavourite,
        setProductUnavailable,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
