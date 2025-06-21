import React from "react";
import { Box, Typography, TextField, Button, Link, Paper, InputAdornment } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';

const purple = '#a259ff';
const purpleDark = '#2d1a3a';

export default function Contact() {
  return (
    <Box id="contact" sx={{ py: 8, px: { xs: 2, sm: 4, md: 6 }, maxWidth: 1100, mx: "auto", fontFamily: 'Fira Mono, monospace', scrollMarginTop: { xs: 70, md: 90 } }}>
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
        Contact
      </Typography>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 4, bgcolor: purpleDark, border: `2px solid ${purple}`, fontFamily: 'Fira Mono, monospace', color: '#fff', overflow: 'hidden' }}>
        <Typography variant="body1" sx={{ mb: 3, color: '#fff', fontFamily: 'Fira Mono, monospace' }}>
          Interested in working together or have a question? Fill out the form below or email me at{' '}
          <Link href="mailto:Ayushmaheshwari09.am.am@gmail.com" color={purple} fontWeight={700} sx={{ fontFamily: 'Fira Mono, monospace' }}>
            Ayushmaheshwari09.am.am@gmail.com
          </Link>
        </Typography>
        <Box component="form" sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, flexWrap: 'wrap' }}>
          <TextField 
            label="Your Name" 
            variant="outlined" 
            fullWidth 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon sx={{ color: purple }} />
                </InputAdornment>
              ),
            }}
            sx={{
              bgcolor: '#20132b',
              input: { color: purple, fontFamily: 'Fira Mono, monospace' },
              borderColor: purple,
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: purple },
                '&:hover fieldset': { borderColor: '#fff' },
                '&.Mui-focused fieldset': { borderColor: '#fff', boxShadow: `0 0 0 2px ${purple}` },
              },
              '& label': { color: purple },
              '& label.Mui-focused': { color: '#fff' },
            }}
          />
          <TextField 
            label="Your Email" 
            variant="outlined" 
            fullWidth 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: purple }} />
                </InputAdornment>
              ),
            }}
            sx={{
              bgcolor: '#20132b',
              input: { color: purple, fontFamily: 'Fira Mono, monospace' },
              borderColor: purple,
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: purple },
                '&:hover fieldset': { borderColor: '#fff' },
                '&.Mui-focused fieldset': { borderColor: '#fff', boxShadow: `0 0 0 2px ${purple}` },
              },
              '& label': { color: purple },
              '& label.Mui-focused': { color: '#fff' },
            }}
          />
          <TextField 
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
            }}
            sx={{
              bgcolor: '#20132b',
              input: { color: purple, fontFamily: 'Fira Mono, monospace' },
              borderColor: purple,
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: purple },
                '&:hover fieldset': { borderColor: '#fff' },
                '&.Mui-focused fieldset': { borderColor: '#fff', boxShadow: `0 0 0 2px ${purple}` },
              },
              '& label': { color: purple },
              '& label.Mui-focused': { color: '#fff' },
            }}
          />
          <Button type="submit" variant="outlined" size="large" sx={{ borderRadius: 2, borderColor: purple, color: purple, fontWeight: 700, fontFamily: 'Fira Mono, monospace', boxShadow: 3, '&:hover': { bgcolor: purple, color: '#fff', borderColor: '#fff' } }}>
            Send Message
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
