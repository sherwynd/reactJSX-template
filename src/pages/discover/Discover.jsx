import { Box, Button, Typography } from "@mui/material";
import { ProductCard } from "../../components/ProductCard";
import Masonry from "react-masonry-css";
import { useState, useEffect, useContext, useRef } from "react";
import Slider from "@mui/material/Slider";
import FilterListIcon from "@mui/icons-material/FilterList";
import { ProductContext } from "../../contexts/ProductContext";
import { SearchBar } from "../../components/common/SearchBar";
export function Discover() {
  const { products, contextLoading } = useContext(ProductContext);
  const [loading, setLoading] = useState(true);
  const isFirstRender = useRef(true);
  const [result, setResult] = useState();
  const breakpointColumnsObj = {
    default: 4,
    1500: 4,
    1200: 3,
    1000: 2,
    800: 1,
  };

  // Categories
  const categories = ['Running', 'Shirts', 'Badminton', 'Football', 'Swimming', 'Basketball', 'Table Tennis', 'Tennis', 'Squash', 'Hockey', 'Others'];

  // Filter products based on category
  const [filteredProducts, setFilteredProducts] = useState([...products]);

  useEffect(() => {
    if (products.length > 0 && isFirstRender.current) {
      setFilteredProducts(products);
      setLoading(false);
      isFirstRender.current = false;
    }
    if (result) {
      setFilteredProducts(result);
    }
  }, [products, result]);

  const filterProducts = (category) => {
    console.log(filteredProducts);
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  // price slider
  const [value, setValue] = useState([0, 2000]);
  const handleSlider = (event, newValue) => {
    setValue(newValue);
  };

  const filterPrice = () => {
    const filtered = products.filter(
      (product) => product.price >= value[0] && product.price <= value[1]
    );
    console.log(filtered);
    setFilteredProducts(filtered);
  };
  const handlePriceRange = () => {
    filterPrice();
  };

  if (contextLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      <SearchBar setResult={setResult} />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h3" sx={{ mt: 3, ml: 1 }}>
          Discover
        </Typography>
        <Box
          sx={{
            display: "flex",
            width: "40%",
            height: "10vh",
            mb: 3,
            justifyContent: "flex-end",
          }}
        >
          <Box sx={{ width: "100%", p: 2 }}>
            <Typography>Price Range</Typography>
            <Slider
              max={5000}
              min={0}
              getAriaLabel={() => "Price range"}
              value={value}
              onChange={handleSlider}
              valueLabelDisplay="auto"
              sx={{ ml: -1 }}
            />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography sx={{ ml: -1.5 }}>{value[0]}</Typography>
              <Typography sx={{ mr: -1 }}>{value[1]}</Typography>
            </Box>
          </Box>
          <Button
            variant="outlined"
            onClick={handlePriceRange}
            sx={{ pb: 1, ml: 2, borderRadius: 5 }}
          >
            <FilterListIcon />
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {categories.map((category, index) => (
          <Button
            key={index}
            sx={{
              mx: 1,
              mb: 3,
              width: "13vh",
              height: "8vh",
              fontSize: 14,
              borderRadius: 5,
            }}
            onClick={() => filterProducts(category)}
          >
            {category}
          </Button>
        ))}
      </Box>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {filteredProducts &&
          filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </Masonry>
    </Box>
  );
}
