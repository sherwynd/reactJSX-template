import {
  AppBar,
  Avatar,
  Badge,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Card,
  Divider,
  FormControl,
  InputAdornment,
  IconButton,
  InputLabel,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  OutlinedInput,
  Paper,
  TextField,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function ForgotPassword() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.length) {
      setEmailError("Email is required");
      return false;
    } else {
      setEmailError("");
    }
    if (!newPassword || !newPassword.length) {
      setNewPasswordError("New Password is required");
      return false;
    } else {
      setNewPasswordError("");
    }
    const forgotPasswordFormDetail = { email, newPassword };

    console.log(forgotPasswordFormDetail);

    // const requestTestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(loginFormDetail),
    // };

    // // Perform the POST request
    // fetch("http://localhost:3000/auth/loginAccount", requestTestOptions)
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => console.error("There was an error!", error));
  };
  const handleNavigateToLogin = (e) => {
    navigate("/login");
  };
  return (
    <>
      <Box>
        <Box>Forgot Password mou</Box>
        <Paper sx={{ minWidth: "400px", maxWidth: "600px" }} elevation={8}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                display: "flex",
                flexGrow: 1,
                alignItems: "center",
                mx: 5,
                maxWidth: "100%",
              }}
            >
              <TextField
                fullWidth
                required
                id="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError && emailError.length ? true : false}
                helperText={emailError}
                margin="normal"
              />
              <IconButton
                sx={{
                  m: 0.5,
                  opacity: 0,
                }}
                aria-label="toggle password visibility"
                disabled
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </Box>
            <Box sx={{ display: "flex", flex: 1, alignItems: "center", mx: 5 }}>
              <TextField
                fullWidth
                required
                type={showPassword ? "text" : "password"}
                id="newPassword"
                label="Password"
                value={newPassword}
                onChange={(e) => setPassword(e.target.value)}
                error={
                  newPasswordError && newPasswordError.length ? true : false
                }
                helperText={newPasswordError}
                margin="normal"
              />
              <IconButton
                sx={{
                  m: 0.5,
                }}
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </Box>
            <Box sx={{ display: "flex", mx: 5, my: 2 }}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleNavigateToLogin}
              >
                Cancel
              </Button>
              <IconButton
                sx={{
                  m: 0.5,
                  opacity: 0,
                }}
                aria-label="toggle password visibility"
                disabled
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </Box>

            <Box sx={{ display: "flex", mx: 5, my: 2 }}>
              <Button
                fullWidth
                variant="contained"
                color="success"
                onClick={handleSubmit}
              >
                Submit
              </Button>
              <IconButton
                sx={{
                  m: 0.5,
                  opacity: 0,
                }}
                aria-label="toggle password visibility"
                disabled
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
}
