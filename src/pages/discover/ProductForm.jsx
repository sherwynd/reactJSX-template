import { Label } from '@mui/icons-material';
import { TextField, Typography, Button, FormControl, InputLabel, InputAdornment, OutlinedInput, Select, MenuItem, Stack, Box, Grid, Paper, Input, FormLabel } from '@mui/material';
import { useState } from 'react';

const ProductForm = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(1);
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');
    const [location, setLocation] = useState('');
    const [condition, setCondition] = useState('');
    const [acquisition, setAcquisition] = useState('');
    const [img, setImg] = useState('');
    const [id, setId] = useState(1);

    const product = { title, price, description, category, brand, location, condition, acquisition, img, id };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("product with id " + id + " is created");
        console.log(product);
    }

    const [selectedFiles, setSelectedFiles] = useState([]);
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
                <Stack spacing={2} component="form" onSubmit={handleSubmit} sx={{ justifyContent: "center", alignItems: "center", display: "flex", mb: 5 }}>

                    <FormControl required sx={{ m: 1, width: "50%" }} >
                        <InputLabel htmlFor="title">Title</InputLabel>
                        <OutlinedInput
                            id="title"
                            label="title"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </FormControl>

                    <FormControl required sx={{ m: 1, width: "50%" }}>
                        <InputLabel htmlFor="price">Price</InputLabel>
                        <OutlinedInput
                            id="price"
                            startAdornment={<InputAdornment position="start">RM</InputAdornment>}
                            label="price"
                            onChange={(e) => setPrice(e.target.value)}
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
                    />

                    <FormControl required sx={{ m: 1, width: "50%" }}>
                        <InputLabel htmlFor="location">Location</InputLabel>
                        <OutlinedInput
                            id="location"
                            label="location"
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </FormControl>

                    <FormControl required sx={{ m: 1, width: "50%" }}>
                        <InputLabel htmlFor="brand">Brand</InputLabel>
                        <OutlinedInput
                            id="brand"
                            label="Brand"
                            onChange={(e) => setBrand(e.target.value)}
                        />
                    </FormControl>

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

                    <Box sx={{ width: "50%" }}>
                        <Box component={Input} type="file" id="file" multiple onChange={handleImageChange} sx={{ display: 'none' }} />
                        <Box className="label-holder">
                            <Button component={FormLabel} htmlFor="file" className="label" sx={{ width: "100%" }}>
                                Upload Images
                            </Button>
                        </Box>
                    </Box>
                    <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center", px: "5vh" }}>{renderPhotos(selectedFiles)}
                    </Grid>

                    <Button onSubmit={handleSubmit} variant="outlined" color="primary" type="submit" sx={{ m: 1, width: "50%" }}>Submit</Button>
                </Stack >
            </Paper>
        </>

    )
}

export default ProductForm;