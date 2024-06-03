import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Typography, Rating, Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';


export function CommentCard({ rating }) {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                console.log(rating.raterRefId);
                const response = await fetch(`http://localhost:3000/auth/getAccount/${rating.raterRefId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const json = await response.json();
                setUser(json);
                console.log(json);
                setLoading(false); 
            } catch (error) {
                console.error('Error fetching user:', error);
                setLoading(false); 
            }
        };

        if (rating.raterRefId) {
            fetchUser();
        } else {
            setLoading(false);
        }
    }, [rating.raterRefId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="avatar">
                            {user.username.charAt(0)}
                        </Avatar>
                    }
                    title={user.username}
                    subheader={
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Rating
                                name="user-rating"
                                value={rating.ratingValue}
                                precision={0.5}
                                readOnly />
                            <Typography>{rating.ratingDate}</Typography>
                        </Box>
                    }
                />
                <CardContent>
                    <Typography>{rating.ratingComment}</Typography>
                </CardContent>
            </Card>
        </div>
    );
}