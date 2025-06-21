import React from "react";
import { Box, Typography, Paper, Stack, Link, Grid } from "@mui/material";
import VerifiedIcon from '@mui/icons-material/Verified';
import CloudIcon from '@mui/icons-material/Cloud'; // AWS
import SmartToyIcon from '@mui/icons-material/SmartToy'; // Copilot
import CodeIcon from '@mui/icons-material/Code'; // GitHub
import SchoolIcon from '@mui/icons-material/School'; // Cambridge

const purple = '#a259ff';
const purpleDark = '#2d1a3a';

const certificates = [
  { name: "AWS Certified Cloud Practitioner", link: "https://www.credly.com/badges/7e3f3f3f-3f3f-3f3f-3f3f-3f3f3f3f3f3/public_url", icon: <CloudIcon sx={{ color: purple, fontSize: 40, mb: 1 }} /> },
  { name: "GitHub Copilot Certified", link: "https://www.credly.com/badges/8e3f3f3f-3f3f-3f3f-3f3f-3f3f3f3f3f3/public_url", icon: <SmartToyIcon sx={{ color: purple, fontSize: 40, mb: 1 }} /> },
  { name: "GitHub Foundations", link: "https://www.credly.com/badges/9e3f3f3f-3f3f-3f3f-3f3f-3f3f3f3f3f3/public_url", icon: <CodeIcon sx={{ color: purple, fontSize: 40, mb: 1 }} /> },
  { name: "Business English Certificate (BEC) by Cambridge", link: "https://www.cambridgeenglish.org/cefr-chart/", icon: <SchoolIcon sx={{ color: purple, fontSize: 40, mb: 1 }} /> },
];

function Ribbon() {
  return (
    <Box
      sx={{
        position: 'absolute',
        right: -32,
        top: 24,
        bgcolor: purple,
        color: '#fff',
        px: 2,
        py: 0.5,
        fontWeight: 700,
        fontSize: '0.95rem',
        fontFamily: 'Fira Mono, monospace',
        transform: 'rotate(45deg)',
        boxShadow: `0 2px 8px ${purple}44`,
        zIndex: 2,
      }}
    >
      CERTIFIED
    </Box>
  );
}

export default function Certificates() {
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
        }}
      >
        Certificates
      </Typography>
      <Grid container spacing={4}>
        {certificates.map((cert, idx) => (
          <Grid item xs={12} sm={6} md={6} key={idx}>
            <Box sx={{ position: 'relative', height: '100%' }}>
              <Ribbon />
              <Paper
                elevation={4}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  bgcolor: `linear-gradient(135deg, ${purpleDark} 60%, #3d2c54 100%)`,
                  border: `2px solid ${purple}`,
                  minHeight: 180,
                  minWidth: 0,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'Fira Mono, monospace',
                  position: 'relative',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.03)',
                    boxShadow: `0 0 32px ${purple}`,
                    borderColor: '#fff',
                  },
                }}
              >
                {cert.icon}
                <Typography
                  variant="h6"
                  align="center"
                  sx={{ color: purple, fontFamily: 'Fira Mono, monospace', fontWeight: 700, mb: 1 }}
                >
                  <Link href={cert.link} color={purple} underline="hover" target="_blank" sx={{ fontWeight: 700 }}>
                    {cert.name}
                  </Link>
                </Typography>
              </Paper>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
