import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import AchievementsCard from "./components/Achievements";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { ThemeProvider as CustomThemeProvider, useTheme } from "./ThemeContext";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#a259ff",
    },
    background: {
      default: "#181a20",
      paper: "#23272f",
    },
    text: {
      primary: "#fff",
      secondary: "#b0b3b8",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

function AppContent() {
  const { theme } = useTheme();
  return (
    <div
      lang="en"
      role="main"
      aria-label="Portfolio Main Content"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background:
          theme === "light"
            ? "#f5f6fa"
            : "linear-gradient(135deg, #23272f 0%, #181a20 100%)",
      }}
    >
      <Navbar />
      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certificates />
        <AchievementsCard />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <CustomThemeProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <AppContent />
      </ThemeProvider>
    </CustomThemeProvider>
  );
}

export default App;
