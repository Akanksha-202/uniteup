import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Card, CardContent, Typography, TextField, Button } from '@material-ui/core';


const Login = () => {


    return (
        <Container fluid className=" mt-20 p-4" style={{ height: '80vh' }}>
            <Grid container>
                <Grid item md={5} className=' text-md-start d-flex flex-column justify-content-center'>
                    <div>
                        <Typography variant='h2' className="my-5 display-3 ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)', fontWeight: 'bolder' }}>
                            COLLABORATE<br />
                            <span style={{ color: 'hsl(218, 81%, 75%)' }}> INNOVATE<br /> SUCCEED</span>
                        </Typography>

                        <br />
                        <Typography variant="body1" className='px-3' style={{ color: 'hsl(218, 81%, 85%)' }}>
                            Find your perfect fellowmate with UniteUp: The ultimate matching platform for developers and like-minded companions.
                            Sign up now and unlock a world of ompatibility and shared experiences.Your ideal fellowmate is just a click away
                        </Typography>
                    </div>
                </Grid>

                <Grid item md={6} className="position-relative">
                    <div className='ml-20' style={{ width: '100%' }}>
                        <Card className="my-5 mx-5 bgGlass" style={{ width: '90%' }}>
                            <CardContent className='p-5'>
                                <Typography variant="h3" component="h3" className="my-3 display-3 fw-bold ls-tight px-3" style={{ color: '#444876', fontSize: '24px' }}>
                                    USER LOGIN <br />
                                </Typography>

                                <TextField variant="outlined" margin="normal" fullWidth label="Email" id="form3" type="email" />
                                <TextField variant="outlined" margin="normal" fullWidth label="Password" id="form4" type="password" />


                                <div className="text-center mt-5">
                                    <Button variant="contained" size="large" className='w-100 mb-3 ' style={{ maxWidth: '200px', margin: '0 auto', backgroundColor: '#386bc6', color: 'white' }}>
                                        LOGIN
                                    </Button>

                                    <br />
                                    <br />

                                    <Typography variant="body1">don't have an account yet?</Typography>
                                    
                                    <Link to="/signup" style={{
                                        fontWeight: '700',
                                        fontSize: '18px',
                                        color: '#386bc6',
                                    }}>CREATE ACCOUNT</Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
