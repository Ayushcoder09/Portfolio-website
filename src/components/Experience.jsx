import React from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";

const purple = '#a259ff';
const purpleDark = '#2d1a3a';

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Cognizant",
    location: "Noida (Hybrid)",
    client: "Health Care Service Corporation (HCSC)",
    period: "Oct 2024 – Present",
    responsibilities: [
      "Contributed to the development of a Single Page Application (SPA) based on micro-frontend architecture using Angular, enhancing user engagement by 15%.",
      "Spearheaded backend microservices development using Java and Spring Boot, leading to a 25% improvement in system performance.",
      "Collaborated daily with cross-functional teams, utilizing tools such as GitHub to ensure project success, resulting in a 20% increase in code quality and efficiency.",
      "Utilized CI/CD tools like Jenkins, PCF, and UCD to automate the deployment process, reducing deployment time by 30%."
    ]
  },
  {
    role: "Full Stack Developer",
    company: "Cognizant",
    location: "Noida (Hybrid)",
    client: "Excellus BCBS",
    period: "Aug 2022 – Oct 2024",
    responsibilities: [
      "Enhanced user engagement by developing a dynamic provider page using JavaScript, Core Java, and Spring MVC, leading to 20% increase in data collection efficiency.",
      "Improved Veracode & Sonar code performance score from 60% to 83% by optimizing Java and JavaScript logic across multiple pages.",
      "Improved user experience by developing and implementing JavaScript input fields on the claim page with enhanced jQuery-based validation reducing input errors by 15%.",
      "Ensured high-quality production releases by conducting comprehensive User Acceptance Testing (UAT) and orchestrating smooth deployments on Microsoft Azure.",
      "Enhanced application quality and usability by incorporating stakeholders feedback into iterative improvements throughout development lifecycle."
    ]
  }
];

export default function Experience() {
  return (
    <Box id="experience" sx={{ py: 8, px: { xs: 2, sm: 4, md: 6 }, maxWidth: 1100, mx: "auto", fontFamily: 'Fira Mono, monospace' }}>
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        fontWeight={700}
        color={purple}
        mb={4}
        sx={{
          fontFamily: 'Fira Mono, monospace',
          letterSpacing: 2,
        }}
      >
        Experience
      </Typography>
      <Stack spacing={4}>
        {experiences.map((exp, idx) => (
          <Paper
            key={idx}
            elevation={4}
            sx={{
              p: 4,
              borderRadius: 4,
              bgcolor: purpleDark,
              border: `2px solid ${purple}`,
              color: '#fff',
              fontFamily: 'Fira Mono, monospace',
            }}
          >
            <Typography variant="h5" fontWeight={700} color={purple} sx={{ fontFamily: 'Fira Mono, monospace' }}>
              {exp.role} - {exp.company} <span style={{ color: '#fff', fontWeight: 400 }}>({exp.location})</span>
            </Typography>
            <Typography variant="subtitle1" color="#fff" sx={{ mb: 0.5, fontFamily: 'Fira Mono, monospace' }}>
              {exp.period} | Client: {exp.client}
            </Typography>
            <ul style={{ marginLeft: 20 }}>
              {exp.responsibilities.map((item, i) => (
                <li key={i} style={{ marginBottom: 4, color: purple, fontFamily: 'Fira Mono, monospace' }}>{item}</li>
              ))}
            </ul>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
}
