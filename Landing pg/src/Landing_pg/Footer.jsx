import React from 'react';
import { Box, Container, Typography, Link, Grid } from '@mui/material';
import { Phone, Email } from '@mui/icons-material';
import Logo from '../assets/images/Logo.png'; 

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f8f8f8',
        padding: '24px 0',
        marginTop: 'auto',
        borderTop: '1px solid #e0e0e0',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <img
              src={Logo}
              alt="Logo"
              style={{
                width: '150px', 
                height: '30px', 
                marginRight: 'auto', 
              }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                fontWeight: 'bold', 
                mb: 2,
                color: 'green',  // Set the text color to green
              }}
            >
              COMPANY
            </Typography>
            <Grid container direction="column">
              <Link 
                href="/" 
                color="green" 
                underline="none" 
                sx={{ 
                  mb: 1,
                  '&:hover': {
                    color: 'darkgreen', // Change color on hover
                    textDecoration: 'underline', // Underline on hover
                  },
                }}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                color="green" 
                underline="none" 
                sx={{ 
                  mb: 1,
                  '&:hover': {
                    color: 'darkgreen', // Change color on hover
                    textDecoration: 'underline', // Underline on hover
                  },
                }}
              >
                About us
              </Link>
              <Link 
                href="/trainings" 
                color="green" 
                underline="none" 
                sx={{ 
                  mb: 1,
                  '&:hover': {
                    color: 'darkgreen', // Change color on hover
                    textDecoration: 'underline', // Underline on hover
                  },
                }}
              >
                Trainings
              </Link>
              <Link 
                href="/contact" 
                color="green" 
                underline="none"
                sx={{
                  '&:hover': {
                    color: 'darkgreen', // Change color on hover
                    textDecoration: 'underline', // Underline on hover
                  },
                }}
              >
                Contact us
              </Link>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                fontWeight: 'bold', 
                mb: 2,
                color: 'green',  // Set the text color to green
              }}
            >
              CONTACT DETAILS
            </Typography>
            <Typography variant="body2" color="green" sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
              <Phone sx={{ mr: 1 }} /> Muhammad Ali Mughal
            </Typography>
            <Typography variant="body2" color="green" sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
              <Phone sx={{ mr: 1 }} /> +923005292675
            </Typography>
            <Link 
              href="mailto:jawantechpk@gmail.com" 
              color="green" 
              underline="none"
              sx={{
                display: 'flex',
                alignItems: 'center',
                '&:hover': {
                  color: 'darkgreen', // Change color on hover
                },
              }}
            >
              <Email sx={{ mr: 1 }} /> jawantechpk@gmail.com
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
