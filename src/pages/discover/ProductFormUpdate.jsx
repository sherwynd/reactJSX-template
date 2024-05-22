import { TextField, Typography, Button, FormControl, InputLabel, InputAdornment, OutlinedInput, Select, MenuItem, Stack, Grid, Box, Paper, Input, FormLabel } from '@mui/material';
import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductContext } from '../../contexts/ProductContext';

const ProductForm = () => {
  const { id } = useParams();
  const { removeProduct } = useContext(ProductContext);
  
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [location, setLocation] = useState('');
  const [condition, setCondition] = useState('');
  const [acquisition, setAcquisition] = useState('');
  // const [img, setImg] = useState('');
  
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  const [product, setProduct] = useState({
    title,
    price,
    description,
    category,
    brand,
    location,
    condition,
    acquisition,
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/discover/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();

        setProduct(json);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProduct()
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (confirm("Are you sure you want to update this item?")) {
      const response = await fetch(`http://localhost:3000/discover/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      const json = await response.json();
      alert("The product is updated.");
      navigate(`/discover/${id}`);
      if (!response.ok) {
        setError(json.message);
      }
      if (response.ok) {
        setError(null);
        console.log("The product is updated.", json);
      }
    }
    else {
      console.log("product with is not updated");
    }
  }

  const handleRemove = async (e) => {
    e.preventDefault();
    if (confirm("Are you sure you want to remove this item?")) {
      try {
        await removeProduct(id);
        navigate('/discover');
      } catch (error) {
        setError(error.message);
      }
    }
    else {
      console.log("Product is not deleted");
    }
  }

  const [selectedFiles, setSelectedFiles] = useState(["\\src\\assets\\images\\shoe1.jpg", "\\src\\assets\\images\\shoe2.jpg"]);
  const handleImageChange = (e) => {
    // console.log(e.target.files[])
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      // console.log("filesArray: ", filesArray);
      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file)
      );
    }
  };
  const renderPhotos = (source) => {
    console.log("source: ", source);
    return source.map((photo) => {
      return (
        <Grid item lg={2}>
          <Box component="img" src={photo} key={photo} sx={{ width: "20vh", height: "20vh", m: 1, objectFit: "contain" }} alt="" />
        </Grid>
      )
    });
  };

  return (
    <>
      <Paper elevation={2} sx={{ bgcolor: "secondary.main", p: 5 }}>
        <Typography variant='h4' sx={{ m: 2 }}>Sell your Item</Typography>
        <Stack spacing={2} component="form" onSubmit={handleUpdate} sx={{ justifyContent: "center", alignItems: "center", display: "flex", mb: 5 }}>

          <FormControl required sx={{ m: 1, width: "50%" }} >
            <InputLabel htmlFor="title">Title</InputLabel>
            <OutlinedInput
              id="title"
              label="title"
              onChange={(e) => setProduct({ ...product, title: e.target.value })}
              value={product.title}
            />
          </FormControl>

          <FormControl required sx={{ m: 1, width: "50%" }}>
            <InputLabel htmlFor="price">Price</InputLabel>
            <OutlinedInput
              id="price"
              startAdornment={<InputAdornment position="start">RM</InputAdornment>}
              label="price"
              onChange={(e) => setProduct({ ...product, price: e.target.value })}
              value={product.price}
            />
          </FormControl>

          <TextField
            required
            id="description"
            label="Description"
            multiline
            rows={5}
            onChange={(e) => setProduct({ ...product, description: e.target.value })}
            sx={{ m: 1, width: "50%" }}
            value={product.description}
          />

          <FormControl required sx={{ m: 1, width: "50%" }}>
            <InputLabel htmlFor="location">Location</InputLabel>
            <OutlinedInput
              id="location"
              label="location"
              onChange={(e) => setProduct({ ...product, location: e.target.value })}
              value={product.location}
            />
          </FormControl>

          <FormControl required sx={{ m: 1, width: "50%" }}>
            <InputLabel htmlFor="brand">Brand</InputLabel>
            <OutlinedInput
              id="brand"
              label="Brand"
              onChange={(e) => setProduct({ ...product, brand: e.target.value })}
              value={product.brand}
            />
          </FormControl>

          {/* <TextField required type="text" placeholder="Image URL" value={img} onChange={(e) => setImg(e.target.value)} sx={{ m: 1, width: "100vh" }} /> */}
          <input
            // required
            accept="image/*"
            style={{ display: 'none' }}
            id="image-upload"
            multiple
            type="file"
          />

          <Grid container sx={{ width: "50%", justifyContent: "center", alignItems: "center" }}>
            <Grid item xs={12} md={3} sx={{ m: 1 }}>
              <FormControl required sx={{ width: "100%" }}>
                <InputLabel id="category">Category</InputLabel>
                <Select
                  labelId="category-label"
                  id="category"
                  value={product.category}
                  label="Category"
                  onChange={(e) => setProduct({ ...product, category: e.target.value })}
                >
                  <MenuItem value="Racquets">Racquets</MenuItem>
                  <MenuItem value="Sport Shoes">Sport Shoes</MenuItem>
                  <MenuItem value="Balls">Balls</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={3} sx={{ m: 1 }}>

              <FormControl required sx={{ width: "100%" }}>
                <InputLabel id="condition">Condition</InputLabel>
                <Select
                  labelId="condition-label"
                  id="condition"
                  value={product.condition}
                  label="Condition"
                  onChange={(e) => setProduct({ ...product, condition: e.target.value })}
                >
                  <MenuItem value="New">New</MenuItem>
                  <MenuItem value="Like New">Like New</MenuItem>
                  <MenuItem value="Very Good">Very Good</MenuItem>
                  <MenuItem value="Good">Good</MenuItem>
                  <MenuItem value="Acceptable">Acceptable</MenuItem>
                  <MenuItem value="Poor">Poor</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={3} sx={{ m: 1 }}>
              <FormControl required sx={{ width: "100%" }}>
                <InputLabel id="acquisition">Acquisition</InputLabel>
                <Select
                  labelId="acquisition-label"
                  id="acquisition"
                  value={product.acquisition}
                  label="Acquisition"
                  onChange={(e) => setProduct({ ...product, acquisition: e.target.value })}
                >
                  <MenuItem value="Meet-up Only">Meet-up Only</MenuItem>
                  <MenuItem value="Delivery Only">Delivery Only</MenuItem>
                  <MenuItem value="Meet-up or Delivery">Meet-up or Delivery</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Box sx={{ width: "50%" }}>
            <Box component={Input} type="file" id="file" multiple onChange={handleImageChange} sx={{ display: 'none' }} />
            <Box className="label-holder">
              <Button component={FormLabel} htmlFor="file" className="label" sx={{ width: "100%", borderRadius: 3 }} variant="outlined" >
                Upload Images
              </Button>
            </Box>
          </Box>
          <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center", px: "5vh" }}>{renderPhotos(selectedFiles)}
          </Grid>

          <Box sx={{ display: "flex", width: "50%" }}>
            <Button variant="outlined" color="success" type="submit" sx={{ m: 1, width: "100%", borderRadius: 3 }}>Save and Update</Button>
            <Button onClick={handleRemove} variant="outlined" color="warning" sx={{ m: 1, width: "100%", borderRadius: 3 }}>Remove Item</Button>
          </Box>
        </Stack >
      </Paper>
    </>

  )
}

export default ProductForm;