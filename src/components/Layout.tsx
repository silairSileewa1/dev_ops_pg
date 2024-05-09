import { MouseEvent, useState } from "react";
import { NavLink } from "react-router-dom";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  Toolbar,
  Typography,
} from "@mui/material";

import "./Layout.css";

const Layout = () => {
  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);
  const openMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorNav(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorNav(null);
  };

  return (
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
          <Button color="inherit">
            <NavLink
              className={({ isActive }) =>
                [
                  "app-bar-nav-links",
                  isActive ? "app-bar-nav-links-active" : "",
                ].join(" ")
              }
              to={"/"}
            >
              Home
            </NavLink>
          </Button>
          <Button color="inherit">
            <NavLink
              className={({ isActive }) =>
                [
                  "app-bar-nav-links",
                  isActive ? "app-bar-nav-links-active" : "",
                ].join(" ")
              }
              to={"/dashboard"}
            >
              Dashboard
            </NavLink>
          </Button>
          <Button color="inherit">
            <NavLink
              className={({ isActive }) =>
                [
                  "app-bar-nav-links",
                  isActive ? "app-bar-nav-links-active" : "",
                ].join(" ")
              }
              to={"/signup"}
            >
              Sign Up
            </NavLink>
          </Button>
          <Button color="inherit">
            <NavLink
              className={({ isActive }) =>
                [
                  "app-bar-nav-links",
                  isActive ? "app-bar-nav-links-active" : "",
                ].join(" ")
              }
              to={"/login"}
            >
              Login
            </NavLink>
          </Button>
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
              <MenuItem>
                <NavLink to={"/"}>Home</NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to={"/dashboard"}>Dashboard</NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to={"/signup"}>Sign Up</NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink to={"/login"}>Sign In</NavLink>
              </MenuItem>
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
  );
};

export default Layout;
