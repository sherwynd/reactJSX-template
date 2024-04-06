import {
  AppBar,
  Avatar,
  Badge,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Card,
  FormControl,
  InputAdornment,
  IconButton,
  InputLabel,
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

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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
    if (!password || !password.length) {
      setPasswordError("Password is required");
      return false;
    } else {
      setPasswordError("");
    }
    const loginFormDetail = { email, password };

    console.log(loginFormDetail);

    const requestTestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginFormDetail),
    };

    // Perform the POST request
    fetch("http://localhost:3000/auth/loginAccount", requestTestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("There was an error!", error));
  };
  return (
    <>
      <Box>
        <Box>Login mou</Box>
        <Paper elevation={8}>
          <Box>
            <TextField
              required
              id="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError && emailError.length ? true : false}
              helperText={emailError}
              margin="normal"
            />
            <TextField
              required
              type={showPassword ? "text" : "password"}
              id="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={passwordError && passwordError.length ? true : false}
              helperText={passwordError}
              margin="normal"
            />
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>

            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
}
