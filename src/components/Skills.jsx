import React from "react";
import { Box, Typography, Paper, Stack, Chip, Fade } from "@mui/material";
import CodeIcon from '@mui/icons-material/Code';
import { useTheme } from "../ThemeContext";

const skills = [
  "Java", "SQL", "JavaScript", "TypeScript", "HTML", "CSS", "Angular", "Spring Boot", "JQuery", "React", "Maven", "Node.js", "Git", "GitHub", "MySQL", "Jenkins", "Swagger", "Github Copilot", "AWS", "Azure Devops", "Jira"
];

export default function Skills() {
  const { theme } = useTheme();
  const purple = theme === "dark" ? "#a259ff" : "#6c2eb7";
  const purpleDark = theme === "dark" ? "#2d1a3a" : "#f3eaff";
  const royalBlue = "#1a237e";
  const lightGrey = "#f5f6fa";

  return (
    <Fade in={true} timeout={1200}>
      <Box id="skills" sx={{ py: { xs: 4, sm: 6 }, px: { xs: 1, sm: 2, md: 4 }, maxWidth: { xs: '100%', md: 1100 }, mx: "auto", fontFamily: 'Fira Mono, monospace', bgcolor: theme === "light" ? lightGrey : undefined }}>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          fontWeight={700}
          color={theme === "light" ? royalBlue : purple}
          mb={4}
          sx={{
            fontFamily: 'Fira Mono, monospace',
            letterSpacing: 2,
            transition: 'color 0.3s',
            '&:hover': {
              color: theme === "light" ? royalBlue : '#fff',
              background: theme === "light" ? undefined : `linear-gradient(90deg, ${purple} 0%, #fff 100%)`,
              WebkitBackgroundClip: theme === "light" ? undefined : 'text',
              WebkitTextFillColor: theme === "light" ? undefined : 'transparent',
            },
          }}
        >
          Technical Skills
        </Typography>
        <Paper elevation={4} sx={{ p: { xs: 2, sm: 4 }, borderRadius: 4, bgcolor: theme === "light" ? lightGrey : purpleDark, border: `2px solid ${purple}`, fontFamily: 'Fira Mono, monospace', color: theme === "light" ? royalBlue : '#fff', overflow: 'hidden', transition: 'box-shadow 0.3s', '&:hover': { boxShadow: `0 0 24px ${purple}` } }}>
          <Stack direction="row" alignItems="center" spacing={1} mb={3}>
            <CodeIcon sx={{ color: theme === "light" ? royalBlue : purple, fontSize: 32, transition: 'color 0.3s', '&:hover': { color: theme === "light" ? royalBlue : '#fff' } }} />
            <Typography variant="h5" fontWeight={700} sx={{ color: theme === "light" ? royalBlue : purple, fontFamily: 'Fira Mono, monospace', letterSpacing: 1, transition: 'color 0.3s', '&:hover': { color: theme === "light" ? royalBlue : '#fff' } }}>
              Technologies & Tools
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center">
            {skills.map((skill, idx) => (
              <Fade in={true} timeout={600 + idx * 40} key={skill}>
                <Chip
                  label={skill}
                  sx={{
                    bgcolor: theme === "light" ? '#e3e6f3' : '#20132b',
                    color: theme === "light" ? royalBlue : purple,
                    border: `1px solid ${theme === "light" ? royalBlue : purple}`,
                    fontFamily: 'Fira Mono, monospace',
                    mb: 1,
                    mx: 0.5,
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    letterSpacing: 1,
                    transition: 'all 0.2s',
                    cursor: 'pointer',
                    '&:hover': {
                      bgcolor: theme === "light" ? royalBlue : purple,
                      color: '#fff',
                      borderColor: '#fff',
                      transform: 'scale(1.08) rotate(-2deg)',
                      boxShadow: `0 0 12px ${theme === "light" ? royalBlue : purple}`,
                    },
                    '&:active': {
                      transform: 'scale(0.98)',
                    },
                  }}
                />
              </Fade>
            ))}
          </Stack>
        </Paper>
      </Box>
    </Fade>
  );
}
