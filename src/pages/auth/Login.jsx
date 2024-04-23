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
import logo from "../../assets/images/Logo.webp";

export function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const handleSubmit = (e) => {
    navigate("/discover");
    e.preventDefault();
    if (!email) {
      setEmailError("Email is required");
      return false;
    } else {
      setEmailError("");
    }
    if (!password) {
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
    fetch("http://localhost:3000/auth/loginAccount", requestTestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("There was an error!", error));
  };

  const handleNavigateToRegister = (e) => {
    navigate("/register");
  };

  const handleNavigateToForgotPassword = (e) => {
    navigate("/forgotPassword");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: 'url("https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minWidth: "400px",
          maxWidth: "600px",
          p: 2,
          flexDirection: "column",
        }}
        elevation={8}
      >
        <Box sx={{ textAlign: "center", my: 2 }}>
          <img src={logo} alt="Sport Mou Logo" style={{ maxWidth: "150px" }} />
          <Typography variant="h5" component="h1" sx={{ mt: 1 }}>
            Sport Mou
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
        <TextField
          fullWidth
          required
          type={showPassword ? "text" : "password"}
          id="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!passwordError}
          helperText={passwordError}
          margin="normal"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ mt: 2 }}
        >
          Login
        </Button>
        <Link
          sx={{ display: "flex", justifyContent: "center", my: 2 }}
          href=""
          onClick={handleNavigateToForgotPassword}
        >
          Forgot Password?
        </Link>
        <Divider sx={{ width: "100%", my: 2 }} />
        <Button
          fullWidth
          variant="contained"
          color="success"
          onClick={handleNavigateToRegister}
        >
          Register an Account
        </Button>
      </Paper>
    </Box>
  );
}
