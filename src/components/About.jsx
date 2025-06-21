import { Box, Typography, Paper } from "@mui/material";
import Fade from "@mui/material/Fade";
import { useTheme } from "../ThemeContext";

export default function About() {
  const { theme } = useTheme();
  const purple = theme === "dark" ? "#a259ff" : "#6c2eb7";
  const purpleDark = theme === "dark" ? "#2d1a3a" : "#f3eaff";
  const royalBlue = "#1a237e";
  const lightGrey = "#f5f6fa";

  return (
    <Fade in={true} timeout={1200}>
      <Box
        id="about"
        sx={{
          py: { xs: 4, sm: 6 },
          px: { xs: 1, sm: 2, md: 4 },
          maxWidth: { xs: "100%", md: 1100 },
          mx: "auto",
          fontFamily: "Fira Mono, monospace",
          bgcolor: theme === "light" ? lightGrey : undefined,
        }}
      >
        {/* Accessibility: Add role, aria-label, tabIndex */}
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
          About Me
        </Typography>
        <Paper
          elevation={4}
          sx={{
            p: { xs: 2, sm: 4 },
            borderRadius: 4,
            bgcolor: theme === "light" ? lightGrey : purpleDark,
            border: `2px solid ${purple}`,
            color: theme === "light" ? royalBlue : "#fff",
            fontFamily: "Fira Mono, monospace",
            overflow: "hidden",
            transition: "box-shadow 0.3s",
            "&:hover": { boxShadow: `0 0 24px ${purple}` },
          }}
        >
          <Typography
            variant="body1"
            color={theme === "light" ? royalBlue : "#fff"}
            sx={{ fontFamily: "Fira Mono, monospace", mb: 2, transition: "color 0.3s" }}
          >
            With 2.9 years of hands-on experience as a Full Stack Developer, I
            excel in designing and building robust backend systems using Java,
            Spring Boot, and microservices, as well as delivering dynamic
            front-end applications with Angular. I am highly skilled in Agile
            methodologies and the full software development lifecycle (SDLC),
            ensuring timely and efficient project delivery. My expertise spans
            cloud platforms (AWS, Azure), CI/CD automation with Jenkins, and
            collaborative code management using GitHub. I am passionate about
            solving complex technical challenges, optimizing system performance,
            and driving innovation in cross-functional teams to deliver impactful
            business solutions.
          </Typography>
        </Paper>
      </Box>
    </Fade>
  );
}
