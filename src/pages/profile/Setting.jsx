import {
  AppBar,
  Avatar,
  Badge,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Card,
  Container,
  CssBaseline,
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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import FakeJordan from "../../assets/images/Lebron.jpg";

export function Setting() {
  const navigate = useNavigate();
  const inputFileRef = useRef(null);

  const [username, setUsername] = useState("sanupuas");
  const [nickname, setNickname] = useState("Sapnu Puas");
  const [imageProfile, setImageProfile] = useState(FakeJordan);
  const [phoneNumber, setPhoneNumber] = useState("0123456789");
  const [description, setDescription] = useState(
    "When people need me, remember sapnu puas"
  );

  const [usernameError, setUsernameError] = useState("");
  const [nicknameError, setNicknameError] = useState("");

  const handleAvatarClick = () => {
    inputFileRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageProfile(e.target.result);
      };
      reader.readAsDataURL(file);
    }
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

    const profileFormDetail = { username, nickname, phoneNumber, description };

    console.log(profileFormDetail);
    navigate("/profile");
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
  const handleBack = () => {
    navigate("/profile");
  };
  return (
    <>
      <Container sx={{ display: "flex" }}>
        <Paper
          sx={{ display: "flex", flexDirection: "column", my: 2, flexGrow: 1 }}
        >
          <Box>
            <IconButton sx={{ mx: 2, mt: 2 }} onClick={handleBack}>
              <ArrowBackIcon />
            </IconButton>
          </Box>

          <TextField
            sx={{ mx: 2 }}
            id="username"
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={usernameError && usernameError.length ? true : false}
            helperText={usernameError}
            variant="filled"
            margin="normal"
          />
          <TextField
            sx={{ mx: 2 }}
            id="nickname"
            label="Nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            error={nicknameError && nicknameError.length ? true : false}
            helperText={nicknameError}
            variant="filled"
            margin="normal"
          />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Avatar
              sx={{
                display: "flex",
                justifyContent: "center",
                width: 160,
                height: 160,
                m: 1,
                cursor: "pointer",
              }}
              src={imageProfile}
              onClick={handleAvatarClick}
              alt="none"
            />
            <input
              type="file"
              ref={inputFileRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </Box>
          <TextField
            sx={{ mx: 2 }}
            id="phoneNumber"
            label="PhoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            variant="filled"
            margin="normal"
          />
          <TextField
            sx={{ mx: 2 }}
            id="description"
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            variant="filled"
            multiline
            maxRows={4}
            margin="normal"
          />
          <Box sx={{ display: "flex", justifyContent: "flex-end", m: 2 }}>
            <Button onClick={handleSubmit}>Confirm</Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
