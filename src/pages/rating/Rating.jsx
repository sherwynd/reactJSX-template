import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FavoriteItem from '../../components/Favorites/FavoriteItem';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const Rate = () => {


    // How to pass this page
    // <button onClick={() => handleRateClick(productId)}>Rate</button>
    // const navigate = useNavigate();
    // const handleRateClick = (productId) => {
    //     navigate(`/rate/${productId}`);
    // };

    const { productIdPassed } = useParams();
    const [productData, setProductData] = useState([]);
    const [ratingValue, setRatingValue] = useState(2); // default value
    const [ratingComment, setRatingComment] = useState('');
    const [productId, setProductId] = useState('');
    const [productOwner, setProductOwner] = useState('');
    const [open, setOpen] = useState(false); // State to handle modal visibility
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem('profile'));
    const currentId = userData.refId;

    useEffect(() => {
        getProductData();
    }, []);

    const getProductData = async () => {
        try {
            // Command for next line and open second command
            // const response = await fetch(`http://localhost:3000/discover/66544fde1b4a040eebfade1d`);
            const response = await fetch(`http://localhost:3000/discover/${productIdPassed}`);
            const data = await response.json();
            setProductData([data]); // Wrap the single object in an array
            setProductId(data._id);
            setProductOwner(data.creatorId); // Assuming `creatorId` is a field in the product data
            console.log(data);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    const navToMain = () => {
        navigate('/discover');
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const confirmRating = async () => {
        try {
            const raterRefId = currentId;
            const response = await fetch('http://localhost:3000/rating/rate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    productId,
                    raterRefId,
                    productOwner,
                    ratingValue,
                    ratingComment,
                })
            });
            const data = await response.json();
            console.log('Rating submitted:', data);
            navToMain(); // Navigate after successful rating
        } catch (error) {
            console.error('Error submitting rating:', error);
        }
    };

    return (
        <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
            <Card sx={{ width: '60%', p: 4, bgcolor: '#F5DCC3' }}>
                <Typography variant="h4" component="div" sx={{ mb: 4 }}>
                    Rating
                </Typography>
                <Box display="flex" justifyContent="center" flexDirection="column">
                    {productData.map((item) => (
                        <FavoriteItem
                            key={item._id}
                            id={item._id}
                            name={item.title}
                            description={item.description}
                            price={`RM ${item.price}`}
                            image={`http://localhost:3000/${item.imgs[0]}`}
                            type='rating'
                        />
                    ))}
                </Box>
                <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
                    <Typography variant="h6" color="text.secondary">
                        How was the Seller and Product?
                    </Typography>
                    <Box display="flex">
                        <Rating
                            name="rating"
                            value={ratingValue}
                            onChange={(event, newValue) => {
                                setRatingValue(newValue);
                            }}
                            size="large"
                        />
                    </Box>
                    <TextField
                        multiline
                        rows={3}
                        placeholder="Leave a message, if you want"
                        variant="outlined"
                        fullWidth
                        sx={{ mt: 3, mb: 2, maxWidth: '75%', bgcolor: '#FFFFFF' }}
                        value={ratingComment}
                        onChange={(e) => setRatingComment(e.target.value)}
                    />
                    <Button color="error" variant="contained" sx={{ py: 2 }} onClick={handleClickOpen}>
                        Rate now
                    </Button>
                </Box>
            </Card>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Confirm Rating</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to submit this rating?
                    </DialogContentText>
                    <Typography variant="h6">Rating: {ratingValue} stars</Typography>
                    <Typography variant="h6">Comment:</Typography>
                    <Typography variant="body1">{ratingComment}</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={confirmRating} color="primary">
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
