import React from "react";
import {
  Box,
  Typography,
  Link,
  IconButton,
  Tooltip,
  Fade,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useTheme } from "../ThemeContext";

export default function Footer() {
  const { theme } = useTheme();
  const purple = theme === "dark" ? "#a259ff" : "#6c2eb7";
  const purpleDark = theme === "dark" ? "#2d1a3a" : "#f3eaff";
  const royalBlue = "#1a237e";
  const lightGrey = "#f5f6fa";
  const year = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: theme === "light" ? lightGrey : purpleDark,
        color: theme === "light" ? royalBlue : "#fff",
        fontFamily: "Fira Mono, monospace",
        py: { xs: 2, sm: 4 },
        px: { xs: 1, sm: 2, md: 4 },
        textAlign: "center",
        mt: { xs: 4, sm: 8 },
        borderTop: `2px solid ${purple}`,
        fontSize: { xs: 14, sm: 16 },
        letterSpacing: 1,
        transition: "background 0.3s, color 0.3s",
        position: "relative",
      }}
    >
      <Fade in={true} timeout={1200}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Box>
            <Tooltip title="GitHub" arrow>
              <IconButton
                component="a"
                href="https://github.com/Ayushcoder09"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: theme === "light" ? royalBlue : purple, mx: 1 }}
              >
                <GitHubIcon fontSize="medium" />
              </IconButton>
            </Tooltip>
            <Tooltip title="LinkedIn" arrow>
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/ayush-maheshwari09/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: theme === "light" ? royalBlue : purple, mx: 1 }}
              >
                <LinkedInIcon fontSize="medium" />
              </IconButton>
            </Tooltip>
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: theme === "light" ? royalBlue : "#fff",
              fontFamily: "Fira Mono, monospace",
            }}
          >
            Connect with me on GitHub & LinkedIn
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: purple,
              fontFamily: "Fira Mono, monospace",
              display: "block",
              mt: 1,
            }}
          >
            Noida, India — Open to remote and hybrid full stack opportunities
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: theme === "light" ? royalBlue : "#fff", mt: 1 }}
          >
            © {year} Ayush Maheshwari
          </Typography>
          <Tooltip title="Back to Top" arrow>
            <IconButton
              onClick={handleScrollTop}
              sx={{
                mt: 1,
                color: theme === "light" ? royalBlue : purple,
                bgcolor: theme === "light" ? lightGrey : purpleDark,
                border: `1px solid ${purple}`,
                "&:hover": {
                  bgcolor: purple,
                  color: "#fff",
                },
                transition: "all 0.2s",
              }}
              size="large"
              aria-label="Back to Top"
            >
              <KeyboardArrowUpIcon fontSize="inherit" />
            </IconButton>
          </Tooltip>
        </Box>
      </Fade>
    </Box>
  );
}
