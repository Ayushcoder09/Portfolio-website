import React from "react";
import {
  Box,
  Typography,
  Paper,
  Link,
  Grid,
  Stack,
  Divider,
  Fade,
} from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud"; // AWS
import CodeIcon from "@mui/icons-material/Code"; // GitHub Copilot
import SchoolIcon from "@mui/icons-material/School"; // Cambridge
import { useTheme } from "../ThemeContext";

export default function Certificates() {
  const { theme } = useTheme();
  const purple = theme === "dark" ? "#a259ff" : "#6c2eb7";
  const purpleDark = theme === "dark" ? "#2d1a3a" : "#f3eaff";
  const purpleLight = "#c299fc";
  const royalBlue = "#1a237e";
  const lightGrey = "#f5f6fa";

  const certificates = [
    {
      name: "AWS Certified Cloud Practitioner",
      link: "https://drive.google.com/file/d/1-d2JYgNSJzFN3UTeZXbeI5Eu2e86An-a/view",
      icon: <CloudIcon sx={{ color: purpleLight, fontSize: 48 }} />,
      org: "AWS",
      date: "2023",
    },
    {
      name: "GitHub Copilot Certified",
      link: "https://drive.google.com/file/d/1_TrnpjVuEyXMQZ4QL3_n028Y7y3mMHIL/view",
      icon: <CodeIcon sx={{ color: purpleLight, fontSize: 48 }} />,
      org: "GitHub",
      date: "2025",
    },
    {
      name: "GitHub Foundations",
      link: "https://drive.google.com/file/d/1lwsEZC4lQ3WYqilbY1jN_Kwa__EuKYLw/view",
      icon: <CodeIcon sx={{ color: purpleLight, fontSize: 48 }} />,
      org: "GitHub",
      date: "2025",
    },
    {
      name: "Business English Certificate",
      link: "https://drive.google.com/file/d/1zGicHtlXaAV4t6Ef0vrDMQ8HIaMfI0c_/view",
      icon: <SchoolIcon sx={{ color: purpleLight, fontSize: 48 }} />,
      org: "Cambridge University",
      date: "2022",
    },
  ];

  return (
    <Fade in={true} timeout={1200}>
      <Box
        id="certificates"
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
            "&:hover": {
              color: theme === "light" ? royalBlue : "#fff",
              background:
                theme === "light"
                  ? undefined
                  : `linear-gradient(90deg, ${purple} 0%, #fff 100%)`,
              WebkitBackgroundClip: theme === "light" ? undefined : "text",
              WebkitTextFillColor: theme === "light" ? undefined : "transparent",
            },
          }}
        >
          Certificates
        </Typography>
        <Grid container spacing={{ xs: 2, md: 4 }} sx={{ display: "flex", flexWrap: "wrap" }}>
          {certificates.map((cert, idx) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              key={idx}
              sx={{ display: "flex", flex: 1, minWidth: 0 }}
            >
              <Paper
                elevation={6}
                sx={{
                  width: "100%",
                  minHeight: 260,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                  p: { xs: 2, sm: 3, md: 4 },
                  borderRadius: 4,
                  bgcolor: theme === "light" ? "#e3e6f3" : purpleDark,
                  border: `2px solid ${theme === "light" ? royalBlue : purple}`,
                  color: theme === "light" ? royalBlue : "#fff",
                  boxShadow: `0 4px 32px ${theme === "light" ? royalBlue : purple}33`,
                  position: "relative",
                  transition: "transform 0.2s",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: `0 0 32px ${theme === "light" ? royalBlue : purple}`,
                    borderColor: "#fff",
                  },
                  overflow: "hidden",
                  maxWidth: 500,
                  mx: "auto",
                }}
                onClick={() => window.open(cert.link, '_blank', 'noopener')}
              >
                <Box
                  sx={{
                    minWidth: 60,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 1,
                  }}
                >
                  {cert.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: theme === "light" ? royalBlue : purpleLight,
                    fontFamily: "Fira Mono, monospace",
                    fontWeight: 700,
                    wordBreak: "break-word",
                    whiteSpace: "normal",
                    overflowWrap: "break-word",
                    width: "100%",
                    textAlign: "center",
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {cert.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme === "light" ? royalBlue : "#fff",
                    fontFamily: "Fira Mono, monospace",
                    mb: 1,
                  }}
                >
                  {cert.org} &mdash; {cert.date}
                </Typography>
                <Link
                  href={cert.link}
                  color={theme === "light" ? royalBlue : purpleLight}
                  underline="hover"
                  target="_blank"
                  rel="noopener"
                  sx={{ fontFamily: "Fira Mono, monospace", fontWeight: 700 }}
                  onClick={e => e.stopPropagation()}
                >
                  View Certificate
                </Link>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Fade>
  );
}
