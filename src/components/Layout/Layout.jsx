// import makeStyles from "@mui/styles/makeStyles";
import {
  Drawer,
  Typography,
  Button,
  useTheme,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  AppBar,
  Avatar,
  Box,
  IconButton,
  Divider,
  Toolbar,
} from "@mui/material";
import { mainNavbarItems } from "../../contexts/NavbarItems";
import { TopNavBar } from "./TopNavBar";

const drawerWidth = 240;

export function Layout({ children }) {
  const theme = useTheme();
  return (
    <>
      <TopNavBar />
      <Box sx={{ display: "flex" }}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              zIndex: -1,
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Divider />
          <List>
            {mainNavbarItems.map((text, index) => (
              <ListItem key={text.id} disablePadding>
                <ListItemButton>
                  {/* Issue happended */}
                  <ListItemIcon>
                    {index % 2 === 0 ? "logo" : "logo"}
                  </ListItemIcon>
                  <ListItemText primary={text.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    </>
  );
}
