"use client"
//region Global Imports
import { Box, Link } from "@mui/material";
//endregion

const COMPONENT_KEY = "Footer";

function Footer() {
    return (
      <Box component='footer' sx={{ bgcolor: '#f0f0f0', width: '100%', mt: 'auto', py: 3,     position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
   
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 1 }}>
          <img src="/next.svg" alt="Logo" style={{ height: 40 }} />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 1 }}>
          <Link href="#" sx={{ mr: 2 }}>Link 1</Link>
          <Link href="#" sx={{ mr: 2 }}>Link 2</Link>
          <Link href="#">Link 3</Link>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 1 }}>
          <Link href="#" sx={{ mr: 2 }}>Link soc-1</Link>
          <Link href="#" sx={{ mr: 2 }}>Link soc-2</Link>
          <Link href="#">Link soc-3</Link>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 1 }}>
          <p>&copy; 2023 My Company. All rights reserved.</p>
        </Box>
    </Box>
      );
}

export { COMPONENT_KEY };
export default Footer;