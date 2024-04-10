import {
  AppBar,
  Avatar,
  Badge,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { styled } from "@mui/system";
import { mainNavbarItems } from "../../contexts/NavbarItems";
import { Link } from "react-router-dom";
import * as React from "react";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const iconMap = {
  logout: LogoutIcon,
  // home: HomeIcon,
  // map other string names to icon components
};

export function TopNavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    console.log("handle");
    setAnchorEl(null);
  };
  const handleSetting = () => {
    console.log("Setting");
    setAnchorEl(null);
  };
  const handleLogOut = () => {
    console.log("Log Out");
    setAnchorEl(null);
  };
  return (
    <>
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Avatar sx={{ m: 1 }} src="../assets/images/Fake-Jordan.png" />
            <Typography variant="h6" sx={{ flexGrow: 1 }} component="div">
              Sport Mou
            </Typography>

            <List sx={{ display: "flex", flexGrow: 1 }}>
              {mainNavbarItems.map((item, index) => (
                <ListItem
                  sx={{ display: "flex" }}
                  alignItems="center"
                  key={item.id}
                  disablePadding
                >
                  <ListItemButton component={Link} to={item.route}>
                    {iconMap[item]}
                    <ListItemText sx={{ width: 20 }} primary={item.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Box
              sx={{ display: "flex", justifyContent: "flex-end", flexGrow: 1 }}
            >
              <IconButton
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar src="../assets/images/Fake-Jordan.png" />
                </StyledBadge>
              </IconButton>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>
                  <LogoutIcon />
                  Account
                </MenuItem>
                <MenuItem onClick={handleSetting}>
                  <LogoutIcon />
                  Setting
                </MenuItem>
                <MenuItem onClick={handleLogOut}>
                  <LogoutIcon />
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
