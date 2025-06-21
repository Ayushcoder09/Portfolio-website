import React from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";
import Fade from "@mui/material/Fade";
import { useTheme } from "../ThemeContext";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Cognizant",
    location: "Noida",
    client: "Health Care Service Corporation (HCSC)",
    period: "Oct 2024 – Present",
    responsibilities: [
      "Contributed to the development of a Single Page Application (SPA) based on micro-frontend architecture using Angular, enhancing user engagement by 15%.",
      "Spearheaded backend microservices development using Java and Spring Boot, leading to a 25% improvement in system performance.",
      "Collaborated daily with cross-functional teams, utilizing tools such as GitHub to ensure project success, resulting in a 20% increase in code quality and efficiency.",
      "Utilized CI/CD tools like Jenkins, PCF, and UCD to automate the deployment process, reducing deployment time by 30%.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Cognizant",
    location: "Noida",
    client: "Excellus BCBS",
    period: "Aug 2022 – Oct 2024",
    responsibilities: [
      "Enhanced user engagement by developing a dynamic provider page using JavaScript, Core Java, and Spring MVC, leading to 20% increase in data collection efficiency.",
      "Improved Veracode & Sonar code performance score from 60% to 83% by optimizing Java and JavaScript logic across multiple pages.",
      "Improved user experience by developing and implementing JavaScript input fields on the claim page with enhanced jQuery-based validation reducing input errors by 15%.",
      "Ensured high-quality production releases by conducting comprehensive User Acceptance Testing (UAT) and orchestrating smooth deployments on Microsoft Azure.",
      "Enhanced application quality and usability by incorporating stakeholders feedback into iterative improvements throughout development lifecycle.",
    ],
  },
];

export default function Experience() {
  const { theme } = useTheme();
  const purple = theme === "dark" ? "#a259ff" : "#6c2eb7";
  const purpleDark = theme === "dark" ? "#2d1a3a" : "#f3eaff";
  const royalBlue = "#1a237e";
  const lightGrey = "#f5f6fa";

  return (
    <Fade in={true} timeout={1200}>
      <Box
        id="experience"
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
          Experience
        </Typography>
        <Stack spacing={{ xs: 2, md: 4 }}>
          {experiences.map((exp, idx) => (
            <Paper
              key={idx}
              elevation={4}
              sx={{
                p: 4,
                borderRadius: 4,
                bgcolor: theme === "light" ? lightGrey : purpleDark,
                border: `2px solid ${purple}`,
                color: theme === "light" ? royalBlue : "#fff",
                fontFamily: "Fira Mono, monospace",
              }}
            >
              <Typography
                variant="h5"
                fontWeight={700}
                color={purple}
                sx={{ fontFamily: "Fira Mono, monospace" }}
                aria-label={`Role: ${exp.role}, Company: ${exp.company}, Location: ${exp.location}`}
              >
                {exp.role} - {exp.company}{" "}
                <span style={{ color: theme === "light" ? royalBlue : "#fff", fontWeight: 400 }}>
                  ({exp.location})
                </span>
              </Typography>
              <Typography
                variant="subtitle1"
                color={theme === "light" ? royalBlue : "#fff"}
                sx={{ mb: 0.5, fontFamily: "Fira Mono, monospace" }}
                aria-label={`Period: ${exp.period}, Client: ${exp.client}`}
              >
                {exp.period} | Client: {exp.client}
              </Typography>
              <ul style={{ marginLeft: 20 }}>
                {exp.responsibilities.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      marginBottom: 4,
                      color: purple,
                      fontFamily: "Fira Mono, monospace",
                    }}
                    aria-label={`Responsibility: ${item}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Paper>
          ))}
        </Stack>
      </Box>
    </Fade>
  );
}
