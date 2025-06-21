import { Box, Typography, Paper, Stack } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { useTheme } from "../ThemeContext";
import { Fade } from "@mui/material";

export default function Achievements() {
  const { theme } = useTheme();
  const purple = theme === "dark" ? "#a259ff" : "#6c2eb7";
  const purpleDark = theme === "dark" ? "#2d1a3a" : "#f3eaff";
  const royalBlue = "#1a237e";
  const lightGrey = "#f5f6fa";

  const achievements = [
    "Recognized by Business Unit as Star of the Month in January and February 2025 at Cognizant for Outstanding Performance.",
    "Received client appreciation for significantly improving the UI’s visual appeal.",
  ];

  return (
    <Fade in={true} timeout={1200}>
      <Box
        id="achievements"
        sx={{
          py: { xs: 4, sm: 6 },
          px: { xs: 1, sm: 2, md: 4 },
          maxWidth: { xs: "100%", md: 1100 },
          mx: "auto",
          fontFamily: "Fira Mono, monospace",
          scrollMarginTop: { xs: 70, md: 90 },
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
          Achievements
        </Typography>
        <Paper
          elevation={4}
          sx={{
            p: 4,
            px: { xs: 2, sm: 4, md: 6 },
            borderRadius: 4,
            bgcolor: theme === "light" ? lightGrey : purpleDark,
            border: `2px solid ${purple}`,
            color: theme === "light" ? royalBlue : "#fff",
            fontFamily: "Fira Mono, monospace",
            minHeight: 180,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            position: "relative",
            transition: "transform 0.2s",
            "&:hover": {
              transform: "scale(1.03)",
              boxShadow: `0 0 32px ${purple}`,
              borderColor: "#fff",
            },
          }}
        >
          <Stack direction="row" alignItems="center" spacing={1} mb={2}></Stack>
          <ul style={{ paddingLeft: 20, margin: 0 }}>
            {achievements.map((ach, idx) => (
              <li
                key={idx}
                style={{
                  marginBottom: 12,
                  color: purple,
                  fontWeight: 600,
                  fontSize: "1.05rem",
                }}
              >
                {ach}
              </li>
            ))}
          </ul>
        </Paper>
      </Box>
    </Fade>
  );
}
