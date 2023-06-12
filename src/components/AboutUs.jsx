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
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo inventore officiis temporibus pariatur sit rem cum quam assumenda! Ipsum hic excepturi aliquam dolorum repellat, assumenda porro saepe laudantium quam id.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sit nisi ratione, fugiat dolorem nostrum totam earum aut repellendus asperiores numquam consectetur velit? Totam odio amet quis libero veniam. Neque!
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, repudiandae voluptatibus quis nobis eligendi fugiat necessitatibus. Harum aperiam culpa, rem id placeat, molestias inventore mollitia minus, facilis iure quas. Minima!
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
