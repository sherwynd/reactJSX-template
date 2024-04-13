import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
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
                    subheader="Chiam Yin Kia"

                />
                <CardContent>
                    <Typography>{comment.text}</Typography>
                </CardContent>
            </Card>
        </div>
    );
}