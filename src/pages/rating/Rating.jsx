import React from 'react';
import { useNavigate } from 'react-router-dom';
import FavoriteItem from '../../components/Favorites/FavoriteItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';

export const Rate = () => {
    const favoritesData = [
        {
            id: 1,
            name: "LDNIO SC5319 Power Socket",
            description: "2500W Power Socket with Surge Protector",
            price: "RM 43.00",
            image: 'https://img.lazcdn.com/g/p/650b6fda8badf95bae363e7d55b11ae1.jpg_720x720q80.jpg',
            type: 'rating',
        },
    ];

    const navigate = useNavigate();

    const navToMain = () => {
        navigate('/');
    };

    return (
        <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
            <Card sx={{ width: '60%', p: 4, bgcolor: '#F5DCC3' }}>
                <Typography variant="h4" component="div" sx={{ mb: 4 }}>
                    Rating
                </Typography>
                <Box display="flex" justifyContent="center" flexDirection="column">
                    {favoritesData.map((item) => (
                        <FavoriteItem key={item.id} {...item} />
                    ))}
                </Box>
                <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
                    <Typography variant="h6" color="text.secondary">
                        How was the Seller and Product?
                    </Typography>
                    <Box display="flex">
                        <Rating name="size-large" defaultValue={2} size="large" />
                    </Box>
                    <TextField
                        multiline
                        rows={3}
                        placeholder="Leave a message, if you want"
                        variant="outlined"
                        fullWidth
                        sx={{ mt: 3, mb: 2, maxWidth: '75%', bgcolor: '#FFFFFF' }}
                    />
                    <Button color="error" variant="contained" sx={{ py: 2 }} onClick={navToMain}>
                        Rate now
                    </Button>
                </Box>
            </Card>
        </Box>
    );
}
