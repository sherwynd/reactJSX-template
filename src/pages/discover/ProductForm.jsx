import { TextField, Typography, Button, FormControl, InputLabel, InputAdornment, OutlinedInput, Select, MenuItem, Stack } from '@mui/material';
import { useState } from 'react';

const ProductForm = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');
    const [condition, setCondition] = useState('');
    const [acquisition, setAcquisition] = useState('');
    const [img, setImg] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const product = { title, price, description, category, brand, condition, img, location };
        console.log(product);
    }

    // function handleImage(e) {
    //     console.log(e.target.files);
    //     setImg(URL.createObjectURL(e.target.files[0]));
    // }

    return (
        <>
            <Typography variant='h4' sx={{ m: 5 }}>Sell your Item</Typography>
            <Stack spacing={2} component="form" onSubmit={handleSubmit} sx={{ justifyContent: "center", alignItems: "center", display: "flex", mb: 5 }}>

                <FormControl required value={title} onChange={(e) => setTitle(e.target.title)} sx={{ m: 1, width: '100vh' }}>
                    <InputLabel htmlFor="Title">Title</InputLabel>
                    <OutlinedInput
                        id="title"
                        label="Title"
                    />
                </FormControl>

                <FormControl required value={price} onChange={(e) => setTitle(e.target.price)} sx={{ m: 1, width: '100vh' }}>
                    <InputLabel htmlFor="amount">Price</InputLabel>
                    <OutlinedInput
                        id="amount"
                        startAdornment={<InputAdornment position="start">RM</InputAdornment>}
                        label="Amount"
                    />
                </FormControl>

                <TextField
                    required
                    id="description"
                    label="Description"
                    multiline
                    rows={5}
                    onChange={(e) => setDescription(e.target.value)}
                    sx={{ m: 1, width: '100vh' }}
                />

                <FormControl required sx={{ m: 1, width: '100vh' }}>
                    <InputLabel htmlFor="location">Location</InputLabel>
                    <OutlinedInput
                        id="location"
                        label="location"
                    />
                </FormControl>

                <FormControl required sx={{ m: 1, width: '100vh' }}>
                    <InputLabel htmlFor="brand">Brand</InputLabel>
                    <OutlinedInput
                        id="brand"
                        label="Brand"
                    />
                </FormControl>

                <div>
                    <FormControl required sx={{ m: 1, width: '32vh' }}>
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

                    <FormControl required sx={{ m: 1, width: '32vh' }}>
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

                    <FormControl required sx={{ m: 1, width: '32vh' }}>
                        <InputLabel id="acquisition">Acquisition</InputLabel>
                        <Select
                            labelId="acquisition-label"
                            id="acquisition"
                            value={acquisition}
                            label="Acquisition"
                            onChange={(e) => setAcquisition(e.target.value)}
                        >
                            <MenuItem value="New">Meet-up Only</MenuItem>
                            <MenuItem value="Like New">Delivery Only</MenuItem>
                            <MenuItem value="Very Good">Meet-up or Delivery</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                {/* <TextField required type="text" placeholder="Image URL" value={img} onChange={(e) => setImg(e.target.value)} sx={{ m: 1, width: "100vh" }} /> */}
                <input
                    required
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="image-upload"
                    multiple
                    type="file"
                />
                <label htmlFor="image-upload">
                    <Button variant="outlined" color='primary' component="span" sx={{ m: 1, width: '100vh' }}>
                        Upload
                    </Button>
                </label>

                <Button variant="contained" color="primary" type="submit" sx={{ m: 1, width: "100vh" }}>Submit</Button>
            </Stack>
        </>

    )
}

export default ProductForm;