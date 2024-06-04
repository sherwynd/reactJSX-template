import {
  Box,
  Button,
  Divider,
  InputAdornment,
  IconButton,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import logo from "../../assets/images/Logo.webp";
import theme from "../../theme/color";
import { apiGeneralTemplate } from "../../services/api";
import { fetchProfile } from "../../stores/reducer/profileSlice";
import { useAuth } from "../../contexts/AuthContext";

export function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const handleSubmit = async (e) => {
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
    const method = "POST";
    const loginFormDetail = { email, password };
    const controller = "auth/loginAccount";
    const data = await apiGeneralTemplate(method, loginFormDetail, controller);
    if (data.error === "User or Email not found") {
      setEmailError(data.error);
    } else if (data.error === "Password does not match") {
      setPasswordError(data.error);
    } else if (data.error) {
      console.error(data.error);
    } else {
      await login(data.accessToken, data.refreshToken);
      navigate("/discover");
    }
  };

  const handleNavigateToRegister = (e) => {
    navigate("/register");
  };

  const handleNavigateToForgotPassword = (e) => {
    navigate("/forgotPassword");
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
            <img
              src={logo}
              alt="Sport Mou Logo"
              style={{ maxWidth: "150px" }}
            />
            <Typography variant="h5" component="h1" sx={{ mt: 1 }}>
              Sport Indirect
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
              ),
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
    </ThemeProvider>
  );
}
