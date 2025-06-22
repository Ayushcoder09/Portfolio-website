import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Stack,
  Chip,
  Fade,
  IconButton,
} from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightlightIcon from "@mui/icons-material/Nightlight";
import DownloadIcon from "@mui/icons-material/Download";
import { useTheme } from "../ThemeContext";

const heroSkills = [
  "Java",
  "Spring Boot",
  "Angular",
  "React",
  "AWS",
  "Jenkins",
  "GitHub",
  "Microservices",
];

const purple = "#a259ff";
const purpleDark = "#2d1a3a";
const royalBlue = "#1a237e";
const lightGrey = "#f5f6fa";

const typingText = [
  "Full Stack Developer",
  "Java, Spring Boot, Angular, React, node.js",
];

export default function Hero() {
  const { theme, toggleTheme } = useTheme();

  const [displayedText, setDisplayedText] = useState("");
  const [textIdx, setTextIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    if (!deleting && charIdx < typingText[textIdx].length) {
      timeout = setTimeout(() => setCharIdx(charIdx + 1), 60);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(charIdx - 1), 30);
    } else {
      timeout = setTimeout(() => {
        setDeleting(!deleting);
        if (!deleting) {
          setTimeout(() => setTextIdx((textIdx + 1) % typingText.length), 500);
        }
      }, 1000);
    }
    setDisplayedText(typingText[textIdx].slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, textIdx]);

  return (
    <Fade in={true} timeout={1200}>
      <Box
        id="hero"
        sx={{
          py: { xs: 4, sm: 6 },
          px: { xs: 1, sm: 2, md: 4 },
          maxWidth: { xs: '100%', md: 1100 },
          mx: "auto",
          fontFamily: "Fira Mono, monospace",
          bgcolor: theme === "light" ? "#f5f6fa" : undefined,
          background:
            theme === "light"
              ? "linear-gradient(135deg, #e3e6f3 0%, #f5f6fa 100%)"
              : undefined,
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          alignItems={{ xs: "stretch", sm: "center" }}
          justifyContent="flex-end"
          mb={2}
        >
          {/* Removed original Download Resume button */}
        </Stack>
        <Paper
          elevation={8}
          sx={{
            p: { xs: 2, sm: 3, md: 6 },
            borderRadius: 4,
            bgcolor: theme === "light" ? "#e3e6f3" : purpleDark,
            border: `2px solid ${purple}`,
            boxShadow: `0 0 24px ${purple}`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "Fira Mono, monospace",
            position: "relative",
            overflow: "hidden",
            transition: "box-shadow 0.3s",
            width: "100%",
            maxWidth: 700,
            mx: "auto",
            "&:hover": { boxShadow: `0 0 48px ${purple}` },
          }}
        >
          <Typography
            variant="h2"
            fontWeight={700}
            color={theme === "light" ? royalBlue : purple}
            sx={{
              fontFamily: "Fira Mono, monospace",
              letterSpacing: 2,
              mb: 2,
              transition: "color 0.3s",
            }}
          >
            Ayush Maheshwari
          </Typography>
          <Typography
            variant="h5"
            color={theme === "light" ? royalBlue : "#fff"}
            sx={{ fontFamily: "Fira Mono, monospace", mb: 3, transition: "color 0.3s" }}
          >
            {displayedText}
          </Typography>
          <style>{`@keyframes blink { 0%, 100% { border-color: transparent; } 50% { border-color: ${purple}; } }`}</style>
          <Stack
            direction="row"
            spacing={1}
            flexWrap="wrap"
            justifyContent="center"
            mb={3}
            sx={{ width: "100%" }}
          >
            {heroSkills.map((skill, idx) => (
              <Fade in={true} timeout={600 + idx * 60} key={skill}>
                <Chip
                  label={skill}
                  sx={{
                    bgcolor: theme === "light" ? "#fff" : "#20132b",
                    color: theme === "light" ? royalBlue : purple,
                    border: `1px solid ${theme === "light" ? royalBlue : purple}`,
                    fontFamily: "Fira Mono, monospace",
                    mb: 1,
                    mx: 0.5,
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    letterSpacing: 1,
                    transition: "all 0.2s",
                    cursor: "pointer",
                    "&:hover": {
                      bgcolor: theme === "light" ? royalBlue : purple,
                      color: "#fff",
                      borderColor: "#fff",
                      transform: "scale(1.08) rotate(-2deg)",
                      boxShadow: `0 0 12px ${theme === "light" ? royalBlue : purple}`,
                    },
                    "&:active": {
                      transform: "scale(0.98)",
                    },
                  }}
                />
              </Fade>
            ))}
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ width: '100%', justifyContent: 'center', mt: 2 }}>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderRadius: 2,
                borderColor: theme === "light" ? royalBlue : purple,
                color: theme === "light" ? royalBlue : purple,
                fontWeight: 700,
                fontFamily: "Fira Mono, monospace",
                px: { xs: 2, sm: 5 },
                py: 1.5,
                fontSize: { xs: "1rem", sm: "1.2rem" },
                letterSpacing: 1,
                transition: "all 0.2s",
                width: { xs: "100%", sm: "auto" },
                mt: { xs: 2, sm: 0 },
                "&:hover": {
                  bgcolor: theme === "light" ? royalBlue : purple,
                  color: "#fff",
                  borderColor: "#fff",
                  transform: "scale(1.05)",
                },
              }}
              href="#projects"
            >
              View Projects
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<DownloadIcon />}
              sx={{
                borderRadius: 2,
                borderColor: theme === "light" ? royalBlue : purple,
                color: theme === "light" ? royalBlue : purple,
                fontWeight: 700,
                fontFamily: "Fira Mono, monospace",
                px: { xs: 2, sm: 5 },
                py: 1.5,
                fontSize: { xs: "1rem", sm: "1.2rem" },
                letterSpacing: 1,
                transition: "all 0.2s",
                width: { xs: "100%", sm: "auto" },
                mt: { xs: 2, sm: 0 },
                "&:hover": {
                  bgcolor: theme === "light" ? royalBlue : purple,
                  color: "#fff",
                  borderColor: "#fff",
                  transform: "scale(1.05)",
                },
              }}
              href={`${import.meta.env.BASE_URL}AyushResume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download Resume
            </Button>
          </Stack>
        </Paper>
      </Box>
    </Fade>
  );
}
