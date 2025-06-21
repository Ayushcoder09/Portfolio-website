import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Stack,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NightlightIcon from "@mui/icons-material/Nightlight";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useTheme } from "../ThemeContext";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

function scrollToSection(e, href) {
  e.preventDefault();
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -80; // adjust for navbar height
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const purple = theme === "dark" ? "#a259ff" : "#6c2eb7";
  const purpleDark = theme === "dark" ? "#2d1a3a" : "#f3eaff";
  const royalBlue = "#1a237e";
  const lightGrey = "#f5f6fa";

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <nav
      style={{
        background: theme === "light" ? lightGrey : purpleDark,
        color: theme === "light" ? royalBlue : "#fff",
        fontFamily: "Fira Mono, monospace",
        borderBottom: `2px solid ${purple}`,
        padding: "12px 0",
        position: "sticky",
        top: 0,
        zIndex: 100,
        transition: "background 0.3s, color 0.3s",
        width: "100%",
        fontSize: "clamp(1rem, 2vw, 1.1rem)",
      }}
    >
      <AppBar
        position="fixed"
        elevation={6}
        sx={{
          bgcolor: purpleDark,
          borderBottom: `2px solid ${purple}`,
          boxShadow: `0 0 16px ${purple}`,
          fontFamily: "Fira Mono, monospace",
          zIndex: 1201,
        }}
      >
        <Toolbar
          sx={{ justifyContent: "space-between", minHeight: { xs: 56, md: 72 } }}
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: "inline-flex", md: "none" }, color: purple }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              fontWeight={700}
              letterSpacing={2}
              sx={{
                fontSize: { xs: "1.1rem", md: "1.5rem" },
                color: purple,
                fontFamily: "Fira Mono, monospace",
              }}
            >
              Ayush Maheshwari
            </Typography>
          </Stack>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navLinks.map((link) => (
              <Button
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                sx={{
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: purple,
                  fontFamily: "Fira Mono, monospace",
                  "&:hover": { color: "#fff", bgcolor: purple },
                }}
              >
                {link.label}
              </Button>
            ))}
            {/* Theme toggle icon for desktop */}
            <IconButton
              onClick={toggleTheme}
              aria-label="Toggle theme"
              sx={{ ml: 2, color: purple, display: { xs: "none", md: "inline-flex" } }}
            >
              {theme === "dark" ? <NightlightIcon /> : <WbSunnyIcon />}
            </IconButton>
          </Box>
          {/* Mobile: theme toggle icon on right */}
          <Box sx={{ display: { xs: "inline-flex", md: "none" }, alignItems: "center" }}>
            <IconButton
              onClick={toggleTheme}
              aria-label="Toggle theme"
              sx={{ color: purple, ml: 1 }}
            >
              {theme === "dark" ? <NightlightIcon /> : <WbSunnyIcon />}
            </IconButton>
          </Box>
          {/* Mobile Drawer */}
          <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
            <Box
              sx={{ width: 220, bgcolor: purpleDark, height: "100%" }}
              role="presentation"
              onClick={handleDrawerClose}
            >
              <List>
                {navLinks.map((link) => (
                  <ListItem key={link.label} disablePadding>
                    <ListItemButton
                      component="a"
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      sx={{ color: purple, fontFamily: 'Fira Mono, monospace', fontWeight: 700, fontSize: '1rem' }}
                    >
                      <ListItemText primary={link.label} sx={{ fontFamily: 'Fira Mono, monospace', fontWeight: 700, fontSize: '1rem' }} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </Toolbar>
      </AppBar>
    </nav>
  );
}
