import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Stack, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const purple = '#a259ff';
const purpleDark = '#2d1a3a';

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function scrollToSection(e, href) {
  e.preventDefault();
  const id = href.replace('#', '');
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -80; // adjust for navbar height
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <AppBar position="fixed" elevation={6} sx={{ bgcolor: purpleDark, borderBottom: `2px solid ${purple}`, boxShadow: `0 0 16px ${purple}`, fontFamily: 'Fira Mono, monospace', zIndex: 1201 }}>
      <Toolbar sx={{ justifyContent: 'space-between', minHeight: { xs: 56, md: 72 } }}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ display: { xs: 'inline-flex', md: 'none' }, color: purple }} onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" fontWeight={700} letterSpacing={2} sx={{ fontSize: { xs: '1.1rem', md: '1.5rem' }, color: purple, fontFamily: 'Fira Mono, monospace' }}>
            Ayush Maheshwari
          </Typography>
        </Stack>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          {navLinks.map((link) => (
            <Button key={link.label} href={link.href} onClick={e => scrollToSection(e, link.href)} sx={{ fontWeight: 700, fontSize: '1rem', color: purple, fontFamily: 'Fira Mono, monospace', '&:hover': { color: '#fff', bgcolor: purple } }}>
              {link.label}
            </Button>
          ))}
        </Box>
        {/* Mobile Drawer */}
        <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
          <Box sx={{ width: 220, bgcolor: purpleDark, height: '100%' }} role="presentation" onClick={handleDrawerClose}>
            <List>
              {navLinks.map((link) => (
                <ListItem key={link.label} disablePadding>
                  <ListItemButton component="a" href={link.href} onClick={e => scrollToSection(e, link.href)} sx={{ color: purple, fontFamily: 'Fira Mono, monospace' }}>
                    <ListItemText primary={link.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
