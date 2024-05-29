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
import { useNavigate, useParams } from "react-router-dom";
import logo from "../../assets/images/Logo.webp";
import { ThemeProvider } from "@emotion/react";
import theme from "../../theme/color";

export function ResetPassword() {
  const navigate = useNavigate();
  const { token } = useParams();
  const [secretKey, setSecretKey] = useState("");
  const [secretKeyError, setSecretKeyError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!secretKey) {
      setSecretKeyError("Secret Key is required, refer to your email");
      return false;
    } else {
      setSecretKeyError("");
    }
    if (!newPassword) {
      setNewPasswordError("New Password is required");
      return false;
    } else {
      setNewPasswordError("");
    }
    const resetPasswordFormDetail = { secretKey, newPassword };

    const requestTestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(resetPasswordFormDetail),
    };
    fetch(
      `http://localhost:3000/auth/resetPassword/${token}`,
      requestTestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.error(data.error);
          return false;
        } else {
          navigate("/login");
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
              Reset Password
            </Typography>
          </Box>
          <TextField
            fullWidth
            required
            id="secretKey"
            label="Secret Key"
            value={secretKey}
            onChange={(e) => setSecretKey(e.target.value)}
            error={!!secretKeyError}
            helperText={secretKeyError}
            margin="normal"
          />
          <TextField
            fullWidth
            required
            type={showPassword ? "text" : "password"}
            id="newPassword"
            label="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            error={!!newPasswordError}
            helperText={newPasswordError}
            margin="normal"
            InputProps={{
              endAdornment: (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
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
