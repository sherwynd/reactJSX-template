import * as React from "react";

import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
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

import FavoritIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { mainNavbarItems } from "../contexts/NavbarItems";
import { ThemeProvider } from "@emotion/react";
import theme from "../theme/color";
import { styled } from "@mui/system";
import FakeJordan from "../assets/images/Lebron.jpg";
import LogoImage from "../assets/images/Logo.webp";
import { SearchBar } from "./common/SearchBar";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const drawerWidth = 240;

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
export function NavBar(props) {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const navigate = useNavigate();

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleReturn = () => {
    navigate("/");
  };
  const handleClose = () => {
    navigate("/profile");
    setAnchorEl(null);
  };
  const handleSetting = () => {
    navigate("/setting");
    setAnchorEl(null);
  };
  const handleLogOut = () => {
    navigate("/login");
    setAnchorEl(null);
  };

  const drawer = (
    <div>
      <Toolbar sx={{ backgroundColor: "#FFC876", minHeight: "70px" }} />
      <Divider />
      <List>
        {mainNavbarItems.map((item, index) => (
          <ListItem
            key={item.id}
            onClick={() => navigate(`/${item.route}`)}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        <CssBaseline />
        {/* Top Bar */}
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            // width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            zIndex: 1300,
          }}
        >
          <Toolbar>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                flexGrow: 1,
              }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <IconButton sx={{ m: 1 }} onClick={handleReturn}>
                <Avatar src={LogoImage} />
              </IconButton>
              <Typography
                sx={{ flexGrow: 1 }}
                variant="h5"
                noWrap
                component="div"
              >
                Sport Mou
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexGrow: 1,
              }}
            >
              <SearchBar />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                flexGrow: 1,
              }}
            >
              <Link to={`/sell`}>
                <Button sx={{ mr: 1, borderRadius: 3 }} variant="outlined" color="warning">
                  Sell
                </Button>
              </Link>
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
                  <Avatar src={FakeJordan} />
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
                <MenuItem
                  sx={{ justifyContent: "center" }}
                  onClick={handleClose}
                >
                  <AccountCircleIcon sx={{ mr: 0.3 }} />
                  Account
                </MenuItem>
                <MenuItem onClick={handleSetting}>
                  <SettingsIcon sx={{ mr: 0.3 }} />
                  Setting
                </MenuItem>
                <MenuItem onClick={handleLogOut}>
                  <LogoutIcon sx={{ mr: 0.3 }} />
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
        {/* Side Bar */}
        <Box
          component="nav"
          sx={{
            width: { sm: drawerWidth },
            flexShrink: { sm: 0 },
          }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
              zIndex: 1400,
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};
