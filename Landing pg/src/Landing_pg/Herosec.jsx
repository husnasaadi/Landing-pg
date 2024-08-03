// src/Landing_pg/Herosec.jsx

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'; // Import Grid
import Typography from '@mui/material/Typography'; // Import Typography
import Logo from '../assets/images/Logo.png';
import HeroImage from '../assets/images/hero.png'; // Correct variable name

const Herosec = () => {
  return (
    <div>
      <AppBar position="static" color="default">
        <Container maxWidth="lg">
          <Toolbar>
            {/* Logo with responsive sizes */}
            <img
              src={Logo}
              alt="Logo"
              style={{
                width: '150px', // Adjust width as needed
                height: '30px', // Adjust height as needed
                marginRight: 'auto', // Add some space between logo and menu
              }}
            />
            {/* Responsive navigation buttons */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
              <Button color="inherit">Home</Button>
              <Button color="inherit">About Us</Button>
              <Button color="inherit">Training</Button>
              <Button color="inherit">Contact Us</Button>
            </Box>
            {/* Menu button for smaller screens */}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: 'flex', md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '60vh', // Adjust the height as needed
          backgroundColor: '#f5f5f5', // Light background color if no image
        }}
      >
        <Container>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={HeroImage} // Correct variable name
                alt="Hero"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 1 , color:"darkgreen"
              }}>
              Introduction to
              Jawan Pakistan
              </Typography>
              <Typography variant="p" component="p" sx={{ mb: 4, color:"darkgreen" }}>
               The foundation of every state is the education and skills set of its youth. Jawan Pakistan is such an organization of Pakistan who is not only working on youth education but also enhancing skills set in youth either Free of cost or in a very low cost. This initiative, initially developed by a single person and with almost no seed capital, promotes entrepreneurship and innovation and Sustainable Development Goal, which promotes inclusive and sustainable economic growth.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      </Box>
    </div>
  );
};

export default Herosec;
