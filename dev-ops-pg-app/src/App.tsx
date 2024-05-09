import React from "react";
import { Router, RouterProvider } from "react-router-dom";
import { router } from "./routes";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  MenuList,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { useState, MouseEvent } from "react";

const App = () => {
  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);
  const openMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorNav(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorNav(null);
  };
  return (
    <>
      <RouterProvider router={router} />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <LocalLibraryIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            Devops Playground
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button color="inherit">Dashboard</Button>
            <Button color="inherit">Sign Up</Button>
            <Button color="inherit">Sign In</Button>
            <Button color="inherit">Home</Button>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={openMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              open={Boolean(anchorNav)}
              onClose={closeMenu}
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <MenuList>
                <MenuItem>Dashboard</MenuItem>
                <MenuItem>Sign Up</MenuItem>
                <MenuItem>Sign In</MenuItem>
                <MenuItem>Home</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <LocalLibraryIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default App;
