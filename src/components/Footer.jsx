import React from "react";
import { Box, Typography, Link } from "@mui/material";

const purple = '#a259ff';
const purpleDark = '#2d1a3a';

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: purpleDark, color: purple, py: 4, px: { xs: 2, sm: 4, md: 6 }, textAlign: 'center', mt: 8, borderTop: `2px solid ${purple}`, fontFamily: 'Fira Mono, monospace' }}>
      <Typography variant="body2" sx={{ color: '#fff', fontFamily: 'Fira Mono, monospace' }}>
        Built with{' '}
        <Link href="https://react.dev/" color={purple} underline="hover" mx={0.5} sx={{ fontFamily: 'Fira Mono, monospace' }}>
          React
        </Link>
        &amp;{' '}
        <Link href="https://tailwindcss.com/" color={purple} underline="hover" mx={0.5} sx={{ fontFamily: 'Fira Mono, monospace' }}>
          Tailwind CSS
        </Link>.
      </Typography>
      <Typography variant="caption" sx={{ color: purple, fontFamily: 'Fira Mono, monospace', display: 'block', mt: 2 }}>
        Noida, India — Open to remote opportunities
      </Typography>
    </Box>
  );
}
