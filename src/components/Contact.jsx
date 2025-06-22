import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Paper,
  InputAdornment,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";
import Fade from "@mui/material/Fade";
import { useTheme } from "../ThemeContext";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";

export default function Contact() {
  const { theme } = useTheme();
  const purple = theme === "dark" ? "#a259ff" : "#6c2eb7";
  const purpleDark = theme === "dark" ? "#2d1a3a" : "#f3eaff";
  const royalBlue = "#1a237e";
  const lightGrey = "#f5f6fa";

  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  return (
    <Fade in={true} timeout={1200}>
      <Box
        id="contact"
        sx={{
          py: { xs: 4, sm: 6 },
          px: { xs: 1, sm: 2, md: 4 },
          maxWidth: { xs: "100%", md: 1100 },
          mx: "auto",
          fontFamily: "Fira Mono, monospace",
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
          }}
        >
          Contact
        </Typography>
        <Paper
          elevation={4}
          sx={{
            p: { xs: 2, sm: 4 },
            borderRadius: 4,
            bgcolor: theme === "light" ? "#e3e6f3" : purpleDark,
            border: `2px solid ${purple}`,
            color: theme === "light" ? royalBlue : "#fff",
            fontFamily: "Fira Mono, monospace",
            overflow: "hidden",
            transition: "box-shadow 0.3s",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              color: theme === "light" ? royalBlue : "#fff",
              fontFamily: "Fira Mono, monospace",
            }}
          >
            Interested in working together or have a question? Fill out the form
            below or email me at{" "}
            <Link
              href="mailto:Ayushmaheshwari09.am.am@gmail.com"
              color={purple}
              fontWeight={700}
              sx={{ fontFamily: "Fira Mono, monospace" }}
            >
              Ayushmaheshwari09.am.am@gmail.com
            </Link>
          </Typography>
          <Box
            component="form"
            ref={formRef}
            onSubmit={async (e) => {
              e.preventDefault();
              setSending(true);
              setSent(false);
              setError(null);
              try {
                await emailjs.sendForm(
                  "service_k5eyg69", // <-- Replace with your EmailJS service ID
                  "template_4q4ghgs", // <-- Replace with your EmailJS template ID
                  formRef.current,
                  "SB9OO8hJVQhBP6K3x" // <-- Replace with your EmailJS public key (user ID)
                );
                setSent(true);
                formRef.current.reset();
              } catch (err) {
                setError("Failed to send message. Please try again later.");
              } finally {
                setSending(false);
              }
            }}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <TextField
              name="your_name"
              label="Your Name"
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon sx={{ color: purple }} />
                  </InputAdornment>
                ),
                style: {
                  background: theme === "light" ? "#fff" : "#20132b",
                  color: theme === "light" ? royalBlue : "#fff",
                  fontFamily: "Fira Mono, monospace",
                },
              }}
              InputLabelProps={{
                style: {
                  color: theme === "light" ? royalBlue : "#fff",
                  fontFamily: "Fira Mono, monospace",
                },
              }}
              sx={{
                bgcolor: "#20132b",
                borderColor: purple,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: purple },
                  "&:hover fieldset": { borderColor: "#fff" },
                  "&.Mui-focused fieldset": {
                    borderColor: "#fff",
                    boxShadow: `0 0 0 2px ${purple}`,
                  },
                },
                "& label": { color: purple },
                "& label.Mui-focused": { color: "#fff" },
              }}
            />
            <TextField
              name="your_email"
              label="Your Email"
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon sx={{ color: purple }} />
                  </InputAdornment>
                ),
                style: {
                  background: theme === "light" ? "#fff" : "#20132b",
                  color: theme === "light" ? royalBlue : "#fff",
                  fontFamily: "Fira Mono, monospace",
                },
              }}
              InputLabelProps={{
                style: {
                  color: theme === "light" ? royalBlue : "#fff",
                  fontFamily: "Fira Mono, monospace",
                },
              }}
              sx={{
                bgcolor: "#20132b",
                borderColor: purple,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: purple },
                  "&:hover fieldset": { borderColor: "#fff" },
                  "&.Mui-focused fieldset": {
                    borderColor: "#fff",
                    boxShadow: `0 0 0 2px ${purple}`,
                  },
                },
                "& label": { color: purple },
                "& label.Mui-focused": { color: "#fff" },
              }}
            />
            <TextField
              name="your_message"
              label="Your Message"
              variant="outlined"
              fullWidth
              multiline
              rows={5}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MessageIcon sx={{ color: purple }} />
                  </InputAdornment>
                ),
                style: {
                  background: theme === "light" ? "#fff" : "#20132b",
                  color: theme === "light" ? royalBlue : "#fff",
                  fontFamily: "Fira Mono, monospace",
                },
              }}
              InputLabelProps={{
                style: {
                  color: theme === "light" ? royalBlue : "#fff",
                  fontFamily: "Fira Mono, monospace",
                },
              }}
              sx={{
                bgcolor: "#20132b",
                borderColor: purple,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: purple },
                  "&:hover fieldset": { borderColor: "#fff" },
                  "&.Mui-focused fieldset": {
                    borderColor: "#fff",
                    boxShadow: `0 0 0 2px ${purple}`,
                  },
                },
                "& label": { color: purple },
                "& label.Mui-focused": { color: "#fff" },
              }}
            />
            <Button
              type="submit"
              variant="outlined"
              size="large"
              disabled={sending}
              sx={{
                borderRadius: 2,
                borderColor: purple,
                color: purple,
                fontWeight: 700,
                fontFamily: "Fira Mono, monospace",
                boxShadow: 3,
                "&:hover": {
                  bgcolor: purple,
                  color: "#fff",
                  borderColor: "#fff",
                },
              }}
            >
              {sending ? "Sending..." : sent ? "Sent!" : "Send Message"}
            </Button>
            {error && (
              <Typography color="error" sx={{ mt: 1, width: "100%" }}>
                {error}
              </Typography>
            )}
            {sent && !error && (
              <Typography color="success.main" sx={{ mt: 1, width: "100%" }}>
                Message sent successfully!
              </Typography>
            )}
          </Box>
        </Paper>
      </Box>
    </Fade>
  );
}
