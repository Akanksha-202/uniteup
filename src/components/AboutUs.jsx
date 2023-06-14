import React from 'react';
import { styled } from '@mui/system';
import { Typography, Grid, Box } from '@mui/material';
import Image from '../assets/about.jpg';

const AboutUsContainer = styled(Box)(({ theme }) => ({
    backgroundColor: 'black',
    color: 'white',
    padding: theme.spacing(2),
    maxWidth: 1000,
    margin: '0 auto',
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
}));

const Content = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    marginTop: theme.spacing(1), 
}));

const Headline = styled(Typography)(({ theme }) => ({
    fontSize: 32,
    fontWeight: 'bold',
    [theme.breakpoints.up('lg')]: {
        marginTop: -30, // Adjust the negative margin value as per your preference
    },
    
}));

const ButtonWrapper = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    position: 'relative',
    top: '20px',
    right: '35px',
    [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(4),
      },
}));

const Rectangle = styled('div')({
    backgroundColor: '#B090D7',
    width: '50px',
    height: '30px',
    margin: '0 auto',
});

const Button = styled('button')({
    position: 'absolute',
    backgroundColor: '#F7D1F8',
    color: 'black',
    padding: '3px 8px',
    cursor: 'pointer',
    border: 'none',
    transition: 'background-color 0.3s ease',
    '&:hover': {
        backgroundColor: '#B090D7',
        color: 'white',
    },
});

const ImageContainer = styled(Box)(({ theme }) => ({
    marginLeft: theme.spacing(2),

}));

const AboutUs = () => {
    return (
        <AboutUsContainer>
            <Grid container alignItems="center">
                <Grid item xs={12} sm={6}>
                    <Content>
                        <Headline variant="h2">About Us</Headline>
                        <br />
                        <Typography variant="body1">
                        Our website is a dedicated platform designed to connect freshers and college students interested in tech-related projects. We aim to address the challenges of finding suitable team members and provide a space for collaboration and project discovery. Our goal is to empower individuals, foster innovation, and create opportunities for personal and professional growth. By facilitating project matchmaking, offering resources, and promoting skill development, we strive to create a vibrant community where users can connect, collaborate, and pursue their passion for technology. Join us and unlock your potential in the world of tech projects.
                        </Typography>
                        <ButtonWrapper>
                            <Button>Read More</Button>
                            <Rectangle />
                        </ButtonWrapper>
                    </Content>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ImageContainer>
                        <img src={Image} alt="About Us" />
                    </ImageContainer>
                </Grid>
            </Grid>
        </AboutUsContainer>
    );
};

export default AboutUs;
