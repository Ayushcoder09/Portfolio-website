import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { useTheme } from "../ThemeContext";

export default function Footer() {
  const { theme } = useTheme();
  const purple = theme === "dark" ? "#a259ff" : "#6c2eb7";
  const purpleDark = theme === "dark" ? "#2d1a3a" : "#f3eaff";
  const royalBlue = "#1a237e";
  const lightGrey = "#f5f6fa";

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
      }}
    >
      <Typography
        variant="body2"
        sx={{ color: theme === "light" ? royalBlue : "#fff", fontFamily: "Fira Mono, monospace" }}
      >
        Connect me on{" "}
        <Link
          href="https://github.com/Ayushcoder09"
          color={theme === "light" ? royalBlue : purple}
          underline="hover"
          mx={0.5}
          sx={{ fontFamily: "Fira Mono, monospace" }}
        >
          GitHub
        </Link>
       &nbsp;and{" "}
        <Link
          href="https://www.linkedin.com/in/ayush-maheshwari09/"
          color={theme === "light" ? royalBlue : purple}
          underline="hover"
          mx={0.5}
          sx={{ fontFamily: "Fira Mono, monospace" }}
        >
          LinkedIn
        </Link>
        .
      </Typography>
      <Typography
        variant="caption"
        sx={{
          color: purple,
          fontFamily: "Fira Mono, monospace",
          display: "block",
          mt: 2,
        }}
      >
        Noida, India — Open to remote and hybrid full stack opportunities
      </Typography>
    </Box>
  );
}
