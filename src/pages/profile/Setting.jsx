import {
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  TextField,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { apiGeneralTemplate } from "../../services/api";

export function Setting() {
  const navigate = useNavigate();
  const inputFileRef = useRef(null);
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [nickname, setNickname] = useState("");
  const [nicknameError, setNicknameError] = useState("");
  const [profilePicture, setProfilePicture] = useState();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");
  const { profile } = useSelector((state) => state.profile);

  useEffect(() => {
    setUsername(profile.username);
    setNickname(profile.nickname);
    setProfilePicture(profile.profilePicture);
    setPhoneNumber(profile.phoneNumber);
    setDescription(profile.description);
  }, []);

  const handleAvatarClick = () => {
    inputFileRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePicture(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
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

    const method = "PATCH";
    const profileFormDetail = {
      username,
      nickname,
      phoneNumber,
      description,
      profilePicture,
    };
    const controller = `auth/editAccount/${profile._id}`;
    const data = await apiGeneralTemplate(
      method,
      profileFormDetail,
      controller
    );
    if (data.error) {
      console.error(data.error);
    } else {
      localStorage.setItem("profile", JSON.stringify(data));
      navigate("/discover");
      window.location.reload();
    }
  };
  const handleBack = () => {
    navigate(`/profile/${profile.refId}`);
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
              src={profilePicture}
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
