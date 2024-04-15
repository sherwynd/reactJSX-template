import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Typography, Rating, Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';


export function CommentCard({ comment }) {

    return (
        <div>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="avatar">
                            C
                        </Avatar>
                    }
                    title="Yua Mikami"
                    subheader={
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Rating
                                name="user-rating"
                                value={4.5}
                                precision={0.5}
                                readOnly />
                            <Typography>{comment.date}</Typography>
                        </Box>
                    }
                />
                <CardContent>
                    <Typography>{comment.text}</Typography>
                </CardContent>
            </Card>
        </div>
    );
}