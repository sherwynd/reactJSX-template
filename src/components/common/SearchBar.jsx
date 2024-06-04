import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Container from "@mui/material/Container";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { apiGetTemplate } from "../../services/api";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  border: `1px solid ${theme.palette.common.black}`,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export function SearchBar({ setResult }) {
  const [item, setItem] = useState();

  const fetchData = async (value) => {
    const method = "GET";
    const controller = "discover/";
    const data = await apiGetTemplate(method, controller);
    const result = data.filter((item) => {
      return item && item.title && item.title.toLowerCase().includes(value);
    });
    setResult(result);
  };
  const handleSearchChange = (value) => {
    setItem(value);
    fetchData(value);
  };
  return (
    <Container
      sx={{
        display: "flex",
        flexGrow: 1,
        minWidth: "600px",
        mr: 3,
        justifyContent: "center",
      }}
    >
      <Search>
        <SearchIconWrapper>
          <SearchIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => handleSearchChange(e.target.value)}
        />
      </Search>
    </Container>
  );
}
