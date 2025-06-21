import React from "react";
import { Box, Typography } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';

const purple = '#a259ff';
const purpleDark = '#2d1a3a';

const education = [
  {
    university: "Dr. A. P. J. Abdul Kalam Technical University",
    degree: "BTech in Computer Science",
    period: "July 2018 – July 2022",
    cgpa: "8/10",
    coursework: "Data Structures and Algorithms, DBMS, Operating System"
  }
];

export default function EducationCard() {
  return (
    <Box id="education" sx={{ py: 8, px: { xs: 2, sm: 4, md: 6 }, maxWidth: 1100, mx: "auto", fontFamily: 'Fira Mono, monospace', scrollMarginTop: { xs: 70, md: 90 } }}>
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
        Education
      </Typography>
      <Box component="div" sx={{
        p: 4,
        borderRadius: 4,
        bgcolor: `linear-gradient(135deg, ${purpleDark} 60%, #3d2c54 100%)`,
        border: `2px solid ${purple}`,
        color: purple,
        fontFamily: 'Fira Mono, monospace',
        minHeight: 180,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        position: 'relative',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.03)',
          boxShadow: `0 0 32px ${purple}`,
          borderColor: '#fff',
        },
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <SchoolIcon sx={{ color: purple, fontSize: 36, mr: 1 }} />
        </Box>
        <div style={{ fontWeight: 600, fontSize: '1.1rem', color: purple, marginBottom: 8 }}>{education[0].university}</div>
        <div style={{ color: '#fff', marginBottom: 4 }}>{education[0].degree}<br />{education[0].period}<br />CGPA: {education[0].cgpa}</div>
        <div style={{ color: purple, marginTop: 8, fontSize: '0.95rem' }}>Coursework: {education[0].coursework}</div>
      </Box>
    </Box>
  );
}
