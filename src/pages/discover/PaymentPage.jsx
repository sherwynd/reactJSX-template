import { useParams } from "react-router-dom";
import { BottomNavigation, Box, Button, Paper, Typography } from "@mui/material";

const PaymentPage = () => {
    const { id } = useParams();

    return (
        <div>
            <Typography variant="h1">chotto matte ne, this page not in use, will route to other page later</Typography>
            <BottomNavigation component={Paper} elevation={10} sx={{ position: "fixed", bottom: 0, justifyContent: "flex-end", width: "100%"}}>
                <Box sx={{ display: "flex" }}>
                    <Box sx={{ mx: 2 }}>
                        <Typography>
                            Total Price
                        </Typography>
                        <Typography variant="h6" color="primary">
                            RM 101
                        </Typography>
                    </Box>
                    <Button variant="contained" color="primary">Place Order</Button>
                </Box>
            </BottomNavigation>
        </div>
    );
}

export default PaymentPage;