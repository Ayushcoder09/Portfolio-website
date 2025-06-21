import React from "react";
import { Box, Typography, Paper, Stack, Chip, Fade } from "@mui/material";
import CodeIcon from '@mui/icons-material/Code';

const skills = [
  "Java", "SQL", "JavaScript", "TypeScript", "HTML", "CSS", "Angular", "Spring Boot", "JQuery", "React", "Maven", "Node.js", "Git", "GitHub", "MySQL", "Jenkins", "Swagger", "Github Copilot", "AWS", "Azure Devops", "Jira"
];

const purple = '#a259ff';
const purpleDark = '#2d1a3a';

export default function Skills() {
  return (
    <Box sx={{ py: 8, px: { xs: 2, sm: 4, md: 6 }, maxWidth: 1100, mx: "auto", fontFamily: 'Fira Mono, monospace' }}>
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
          transition: 'color 0.3s',
          '&:hover': {
            color: '#fff',
            background: `linear-gradient(90deg, ${purple} 0%, #fff 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          },
        }}
      >
        Technical Skills
      </Typography>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 4, bgcolor: purpleDark, border: `2px solid ${purple}`, fontFamily: 'Fira Mono, monospace', color: '#fff', overflow: 'hidden', transition: 'box-shadow 0.3s', '&:hover': { boxShadow: `0 0 24px ${purple}` } }}>
        <Stack direction="row" alignItems="center" spacing={1} mb={3}>
          <CodeIcon sx={{ color: purple, fontSize: 32, transition: 'color 0.3s', '&:hover': { color: '#fff' } }} />
          <Typography variant="h5" fontWeight={700} sx={{ color: purple, fontFamily: 'Fira Mono, monospace', letterSpacing: 1, transition: 'color 0.3s', '&:hover': { color: '#fff' } }}>
            Technologies & Tools
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center">
          {skills.map((skill, idx) => (
            <Fade in={true} timeout={600 + idx * 40} key={skill}>
              <Chip
                label={skill}
                sx={{
                  bgcolor: '#20132b',
                  color: purple,
                  border: `1px solid ${purple}`,
                  fontFamily: 'Fira Mono, monospace',
                  mb: 1,
                  mx: 0.5,
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  letterSpacing: 1,
                  transition: 'all 0.2s',
                  cursor: 'pointer',
                  '&:hover': {
                    bgcolor: purple,
                    color: '#fff',
                    borderColor: '#fff',
                    transform: 'scale(1.08) rotate(-2deg)',
                    boxShadow: `0 0 12px ${purple}`,
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
  );
}
