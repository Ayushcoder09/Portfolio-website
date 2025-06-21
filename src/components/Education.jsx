import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import { useTheme } from "../ThemeContext";
import Fade from "@mui/material/Fade";

const education = [
  {
    university: "Dr. A. P. J. Abdul Kalam Technical University",
    degree: "BTech in Computer Science",
    period: "July 2018 – July 2022",
    cgpa: "8/10",
    coursework: "Data Structures and Algorithms, DBMS, Operating System",
  },
];

export default function Education() {
  const { theme } = useTheme();
  const purple = theme === "dark" ? "#a259ff" : "#6c2eb7";
  const purpleDark = theme === "dark" ? "#2d1a3a" : "#f3eaff";
  const royalBlue = "#1a237e";
  const lightGrey = "#f5f6fa";

  return (
    <Fade in={true} timeout={1200}>
      <Box
        id="education"
        sx={{
          py: { xs: 4, sm: 6 },
          px: { xs: 1, sm: 2, md: 4 },
          maxWidth: { xs: '100%', md: 1100 },
          mx: "auto",
          fontFamily: "Fira Mono, monospace",
          bgcolor: theme === "light" ? lightGrey : undefined,
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          fontWeight={700}
          color={theme === "light" ? royalBlue : purple}
          mb={4}
          sx={{
            fontFamily: "Fira Mono, monospace",
            letterSpacing: 2,
            transition: "color 0.3s",
          }}
        >
          Education
        </Typography>
        <Paper
          elevation={4}
          sx={{
            p: { xs: 2, sm: 4 },
            borderRadius: 4,
            bgcolor: theme === "light" ? lightGrey : purpleDark,
            border: `2px solid ${purple}`,
            color: theme === "light" ? royalBlue : "#fff",
            fontFamily: "Fira Mono, monospace",
            overflow: "hidden",
            transition: "box-shadow 0.3s",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <SchoolIcon sx={{ color: theme === "light" ? royalBlue : purple, fontSize: 36, mr: 1 }} />
          </Box>
          <div
            style={{
              fontWeight: 600,
              fontSize: "1.1rem",
              color: theme === "light" ? royalBlue : purple,
              marginBottom: 8,
            }}
          >
            {education[0].university}
          </div>
          <div style={{ color: theme === "light" ? royalBlue : "#fff", marginBottom: 4 }}>
            {education[0].degree}
            <br />
            {education[0].period}
            <br />
            CGPA: {education[0].cgpa}
          </div>
          <div style={{ color: theme === "light" ? royalBlue : purple, marginTop: 8, fontSize: "0.95rem" }}>
            Coursework: {education[0].coursework}
          </div>
        </Paper>
      </Box>
    </Fade>
  );
}
