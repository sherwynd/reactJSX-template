import {
  Box,
  Button,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/Logo.webp";
import { ThemeProvider } from "@emotion/react";
import theme from "../../theme/color";

export function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError("Email is required");
      return false;
    } else {
      setEmailError("");
    }
    const forgotPasswordFormDetail = { email };

    const requestTestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(forgotPasswordFormDetail),
    };
    fetch("http://localhost:3000/auth/forgotPassword", requestTestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.error(data.error);
          return false;
        } else {
          navigate(`/resetPassword/${data.resetToken}`);
        }
      });
  };
  const handleNavigateToLogin = (e) => {
    navigate("/login");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundImage:
            'url("https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Paper
          sx={{
            p: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minWidth: 400,
            maxWidth: 600,
          }}
          elevation={8}
        >
          <Box sx={{ textAlign: "center" }}>
            <img
              src={logo}
              alt="Sport Mou Logo"
              style={{ maxWidth: "150px", marginBottom: "5px" }}
            />
            <Typography variant="h5" component="h1" sx={{ mb: 2 }}>
              Forgot Password
            </Typography>
          </Box>
          <TextField
            fullWidth
            required
            id="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!emailError}
            helperText={emailError}
            margin="normal"
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              mt: 2,
            }}
          >
            <Button
              variant="outlined"
              color="primary"
              onClick={handleNavigateToLogin}
            >
              Cancel
            </Button>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}
