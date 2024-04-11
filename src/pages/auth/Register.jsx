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

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !username.length) {
      setUsernameError("Username is required");
      return false;
    } else {
      setUsernameError("");
    }
    if (!nickname || !nickname.length) {
      setNicknameError("Nickname is required");
      return false;
    } else {
      setNicknameError("");
    }
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
    if (!repeatPassword || !repeatPassword.length) {
      setRepeatPasswordError("Repeat Password is required");
      return false;
    } else if (password != repeatPassword) {
      setPasswordError("Both passowrd does not match");
      setRepeatPasswordError("Both passowrd does not match");
      return false;
    } else {
      setRepeatPasswordError("");
    }
    const registerDetail = { username, nickname, email, password };
    console.log(registerDetail);
  };
  const handleNavigateToLogin = (e) => {
    navigate("/login");
  };

  return (
    <>
      <Box>
        <Box>Register mou</Box>

        <Paper sx={{ minWidth: "400px", maxWidth: "600px" }} elevation={8}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mx: 5,
              maxWidth: "100%",
            }}
          >
            <TextField
              required
              id="username"
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              error={usernameError && usernameError.length ? true : false}
              helperText={usernameError}
              margin="normal"
            />
            <TextField
              required
              id="nickname"
              label="Nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              error={nicknameError && nicknameError.length ? true : false}
              helperText={nicknameError}
              margin="normal"
            />
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
            <Box
              sx={{
                display: "flex",
                flexGrow: 1,
                alignItems: "center",
                maxWidth: "100%",
              }}
            >
              <TextField
                fullWidth
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
            </Box>
            <TextField
              required
              type="password"
              id="repeatPassword"
              label="Repeat Password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              error={
                repeatPasswordError && repeatPasswordError.length ? true : false
              }
              helperText={repeatPasswordError}
              margin="normal"
            />

            <Button
              sx={{ my: 2 }}
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Divider sx={{ mx: 2 }} />

            <Link
              sx={{ display: "flex", justifyContent: "center", my: 2 }}
              href=""
              onClick={handleNavigateToLogin}
            >
              Already Have an Account?
            </Link>
          </Box>
        </Paper>
      </Box>
    </>
  );
}
