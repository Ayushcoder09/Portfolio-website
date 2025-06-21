import React from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const purple = '#a259ff';
const purpleDark = '#2d1a3a';

const achievements = [
  "Recognized by Business Unit as Star of the Month in January and February 2025 at Cognizant for Outstanding Performance.",
  "Received client appreciation for significantly improving the UI’s visual appeal."
];

export function AchievementsCard() {
  return (
    <Box id="achievements" sx={{ py: 8, px: { xs: 2, sm: 4, md: 6 }, maxWidth: 1100, mx: "auto", fontFamily: 'Fira Mono, monospace', scrollMarginTop: { xs: 70, md: 90 } }}>
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
        Achievements
      </Typography>
      <Paper elevation={4} sx={{
        p: 4,
        px: { xs: 2, sm: 4, md: 6 },
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
        <Stack direction="row" alignItems="center" spacing={1} mb={2}>
          <EmojiEventsIcon sx={{ color: purple, fontSize: 36 }} />
        </Stack>
        <ul style={{ paddingLeft: 20, margin: 0 }}>
          {achievements.map((ach, idx) => (
            <li key={idx} style={{ marginBottom: 12, color: purple, fontWeight: 600, fontSize: '1.05rem' }}>{ach}</li>
          ))}
        </ul>
      </Paper>
    </Box>
  );
}

export default AchievementsCard;
