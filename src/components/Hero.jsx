import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Paper, Stack, Chip, Fade } from "@mui/material";

const heroSkills = [
  "Java", "Spring Boot", "Angular", "React", "AWS", "Jenkins", "GitHub", "Microservices"
];

const purple = '#a259ff';
const purpleDark = '#2d1a3a';

const typingText = [
  "Backend & Frontend Developer",
  "Java, Spring Boot, Angular, React, AWS",
  "Building scalable, robust, and beautiful web applications."
];

export default function Hero() {
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
    <Box id="hero" sx={{ pt: { xs: 10, md: 12 }, py: 8, px: { xs: 2, sm: 4, md: 6 }, maxWidth: 1100, mx: "auto", fontFamily: 'Fira Mono, monospace', scrollMarginTop: { xs: 70, md: 90 } }}>
      <Paper elevation={8} sx={{
        p: { xs: 3, md: 6 },
        borderRadius: 4,
        bgcolor: purpleDark,
        border: `2px solid ${purple}`,
        boxShadow: `0 0 24px ${purple}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Fira Mono, monospace',
        position: 'relative',
        overflow: 'hidden',
        transition: 'box-shadow 0.3s',
        '&:hover': { boxShadow: `0 0 48px ${purple}` },
      }}>
        <Typography variant="h2" fontWeight={800} gutterBottom sx={{ fontSize: { xs: '2.2rem', md: '3.2rem' }, color: purple, fontFamily: 'Fira Mono, monospace', letterSpacing: 2, mb: 1, transition: 'color 0.3s', '&:hover': { color: '#fff' } }}>
          Ayush Maheshwari
        </Typography>
        <Typography variant="h5" sx={{ mb: 2, minHeight: 40, maxWidth: 700, mx: 'auto', fontSize: { xs: '1.1rem', md: '1.5rem' }, color: '#fff', fontFamily: 'Fira Mono, monospace', textAlign: 'center', whiteSpace: 'pre', borderRight: `2px solid ${purple}`, animation: 'blink 1s steps(1) infinite' }}>
          {displayedText}
        </Typography>
        <style>{`@keyframes blink { 0%, 100% { border-color: transparent; } 50% { border-color: ${purple}; } }`}</style>
        <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center" mb={3}>
          {heroSkills.map((skill, idx) => (
            <Fade in={true} timeout={600 + idx * 60} key={skill}>
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
        <Button variant="outlined" size="large" sx={{ borderRadius: 2, borderColor: purple, color: purple, fontWeight: 700, fontFamily: 'Fira Mono, monospace', px: 5, py: 1.5, fontSize: '1.2rem', letterSpacing: 1, transition: 'all 0.2s', '&:hover': { bgcolor: purple, color: '#fff', borderColor: '#fff', transform: 'scale(1.05)' } }} href="#projects">
          View Projects
        </Button>
      </Paper>
    </Box>
  );
}
