import { TextField, Typography, Button, FormControl, InputLabel, InputAdornment, OutlinedInput, Select, MenuItem, Stack, Grid, Box, Paper, Input, FormLabel } from '@mui/material';
import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductContext } from '../../contexts/ProductContext';

const ProductFormUpdate = () => {
  const { id } = useParams();
  const { removeProduct, updateProduct } = useContext(ProductContext);
  const [product, setProduct] = useState({});

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [condition, setCondition] = useState('');
  const [acquisition, setAcquisition] = useState('');
  const [imgs, setImgs] = useState([]);

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/discover/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        setProduct(json);
        setTitle(json.title);
        setPrice(json.price);
        setDescription(json.description);
        setLocation(json.location);
        setBrand(json.brand);
        setCategory(json.category);
        setCondition(json.condition);
        setAcquisition(json.acquisition);
        setImgs(json.imgs);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [id]);

  const updateDatabase = async () => {
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('price', price);
      formData.append('description', description);
      formData.append('category', category);
      formData.append('brand', brand);
      formData.append('location', location);
      formData.append('condition', condition);
      formData.append('acquisition', acquisition);
      imgs.forEach((file) => {
        formData.append('imgs', file);
      });
      console.log(formData.get('title'));
      const response = await fetch(`http://localhost:3000/discover/${id}`, {
        method: 'PATCH',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to update product');
      }

      const updatedProduct = await response.json();
      updateProduct(updatedProduct);
      console.log('Product updated successfully');
    } catch (error) {
      console.error('Error updating product:', error);
      setError(error.message);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateDatabase();
    navigate('/discover');
  };


  const handleRemove = async (e) => {
    e.preventDefault();
    if (confirm("Are you sure you want to remove this item?")) {
      try {
        removeProduct(id);
        navigate('/discover');
      } catch (error) {
        setError(error.message);
      }
    }
    else {
      console.log("Product is not deleted");
    }
  }

  const [selectedFiles, setSelectedFiles] = useState([]);
  const handleImageChange = (e) => {
    if (e.target.files) {

      const newFiles = Array.from(e.target.files);
      console.log(newFiles)
      setImgs((prevImgs) => [...prevImgs, ...newFiles]);
      console.log(imgs)

      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file)
      );
    }
  };
  const loadImages = (imgs) => {
    const filesArray = Array.from(imgs).map((file) =>
      URL.createObjectURL(file)
    );
    setSelectedFiles((prevImages) => prevImages.concat(filesArray));
    Array.from(imgs).map(
      (file) => URL.revokeObjectURL(file)
    );
  };

  const renderPhotos = (source) => {
    if (source.length === 0) {
      return (
        <Typography variant="h6" sx={{ m: 2 }}>No images selected</Typography>
      )
    }
    return source.map((photo, index) => {
      return (
        <Grid item lg={2} key={index}>
          <Box component="img" src={photo} key={photo} sx={{ width: "20vh", height: "20vh", m: 1, objectFit: "contain" }} alt="" />
        </Grid>
      )
    });
  };

  if (product.title === '') {
    return <Typography>Loading...</Typography>;
  }

  return (
    <>
      <Paper elevation={2} sx={{ bgcolor: "secondary.main", p: 5 }}>
        <Typography variant='h4' sx={{ m: 2 }}>Sell your Item</Typography>
        <form onSubmit={handleUpdate}>
          <Stack spacing={2} sx={{ justifyContent: "center", alignItems: "center", display: "flex", mb: 5 }}>

            <FormControl required sx={{ m: 1, width: "50%" }} >
              <InputLabel htmlFor="title">Title</InputLabel>
              <OutlinedInput
                id="title"
                label="title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </FormControl>

            <FormControl required sx={{ m: 1, width: "50%" }}>
              <InputLabel htmlFor="price">Price</InputLabel>
              <OutlinedInput
                id="price"
                startAdornment={<InputAdornment position="start">RM</InputAdornment>}
                label="price"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
            </FormControl>

            <TextField
              required
              id="description"
              label="Description"
              multiline
              rows={5}
              onChange={(e) => setDescription(e.target.value)}
              sx={{ m: 1, width: "50%" }}
              value={description}
            />

            <FormControl required sx={{ m: 1, width: "50%" }}>
              <InputLabel htmlFor="location">Location</InputLabel>
              <OutlinedInput
                id="location"
                label="location"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
              />
            </FormControl>

            <FormControl required sx={{ m: 1, width: "50%" }}>
              <InputLabel htmlFor="brand">Brand</InputLabel>
              <OutlinedInput
                id="brand"
                label="Brand"
                onChange={(e) => setBrand(e.target.value)}
                value={brand}
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
                    value={category}
                    label="Category"
                    onChange={(e) => setCategory(e.target.value)}
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
                    value={condition}
                    label="Condition"
                    onChange={(e) => setCondition(e.target.value)}
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
                    value={acquisition}
                    label="Acquisition"
                    onChange={(e) => setAcquisition(e.target.value)}
                  >
                    <MenuItem value="Meet-up Only">Meet-up Only</MenuItem>
                    <MenuItem value="Delivery Only">Delivery Only</MenuItem>
                    <MenuItem value="Meet-up or Delivery">Meet-up or Delivery</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            {/* <Box sx={{ width: "50%" }}>
              <Box component={Input} type="file" id="file" multiple onChange={handleImageChange} sx={{ display: 'none' }} />
              <Box className="label-holder">
                <Button component={FormLabel} htmlFor="file" className="label" sx={{ width: "100%", borderRadius: 3 }} variant="outlined" >
                  Upload Images
                </Button>
              </Box>
            </Box>
            <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center", px: "5vh" }}>{renderPhotos(selectedFiles)}
            </Grid> */}

            <Box sx={{ display: "flex", width: "50%" }}>
              <Button variant="outlined" color="success" type="submit" sx={{ m: 1, width: "100%", borderRadius: 3 }}>Save and Update</Button>
              <Button onClick={handleRemove} variant="outlined" color="warning" sx={{ m: 1, width: "100%", borderRadius: 3 }}>Remove Item</Button>
            </Box>
          </Stack >
        </form>
      </Paper>
    </>

  )
}

export default ProductFormUpdate;