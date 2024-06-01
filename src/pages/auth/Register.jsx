import {
  Box,
  Button,
  IconButton,
  Paper,
  TextField,
  Typography,
  Link,
  Divider,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/Logo.webp"; // Update the path if necessary
import { ThemeProvider } from "@emotion/react";
import theme from "../../theme/color";
import { apiGeneralTemplate } from "../../services/api";

export function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [usernameError, setUsernameError] = useState("");
  const [nicknameError, setNicknameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [repeatPasswordError, setRepeatPasswordError] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;
    if (!username) {
      setUsernameError("Username is required");
      valid = false;
    } else {
      setUsernameError("");
    }
    if (!nickname) {
      setNicknameError("Nickname is required");
      valid = false;
    } else {
      setNicknameError("");
    }
    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else {
      setEmailError("");
    }
    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    } else {
      setPasswordError("");
    }
    if (!repeatPassword) {
      setRepeatPasswordError("Repeat Password is required");
      valid = false;
    } else if (password !== repeatPassword) {
      setPasswordError("Passwords do not match");
      setRepeatPasswordError("Passwords do not match");
      valid = false;
    } else {
      setRepeatPasswordError("");
    }
    if (valid) {
      const registerDetail = { username, nickname, email, password };
      const method = "POST";
      const controller = "auth/registerAccount";
      const data = await apiGeneralTemplate(method, registerDetail, controller);
      if (data.error === "Username already taken.") {
        setUsernameError(data.error);
      } else if (data.error === "Email already taken.") {
        setEmailError(data.error);
      } else if (data.error) {
        // Pop Up Error in here
        console.error(data.error);
      } else {
        // Run pop up
        navigate("/login");
      }
    }
  };
  const handleNavigateToLogin = () => {
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
          <img
            src={logo}
            alt="Sport Mou Logo"
            style={{ width: 150, marginBottom: 5 }}
          />
          <Typography variant="h5" component="h1" sx={{ mb: 2 }}>
            Register
          </Typography>
          <TextField
            required
            fullWidth
            id="username"
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={!!usernameError}
            helperText={usernameError}
            margin="normal"
          />
          <TextField
            required
            fullWidth
            id="nickname"
            label="Nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            error={!!nicknameError}
            helperText={nicknameError}
            margin="normal"
          />
          <TextField
            required
            fullWidth
            id="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!emailError}
            helperText={emailError}
            margin="normal"
          />
          <TextField
            required
            fullWidth
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
          <TextField
            required
            fullWidth
            type="password"
            id="repeatPassword"
            label="Repeat Password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            error={!!repeatPasswordError}
            helperText={repeatPasswordError}
            margin="normal"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
          <Divider sx={{ width: "100%", my: 2 }} />
          <Link
            sx={{
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={handleNavigateToLogin}
          >
            Already Have an Account?
          </Link>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}
