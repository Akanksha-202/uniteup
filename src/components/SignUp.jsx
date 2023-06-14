import { Button, Container, Grid, Card, CardContent, CardMedia, TextField, FormControlLabel, Checkbox } from '@mui/material';
import { AccountCircle, Email, Lock, VpnKey, GitHub } from '@mui/icons-material';
import '../CSS/signup.css';

function SignUp() {
  return (
    <Container
      style={{
        height: '87vh',
        width: '100%',
        textAlign: 'center',
        paddingLeft: '15rem',
        marginTop: '3rem',
        background: 'linear-gradient(175deg, rgba(2, 0, 36, 1) 0%, rgba(28, 35, 69, 1) 67%, rgba(255, 153, 204, 1) 100%)',
      }}
    >
      <Card className="text-black m-5" style={{ borderRadius: '25px', width: '80%' }}>
        <CardContent>
          <Grid container>
            <Grid item md={6} lg={6} className="order-1 order-lg-1 d-flex flex-column align-items-center">
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <AccountCircle fontSize="small" className="me-3" />
                <TextField label="Your Name" id="form1" type="text" className="w-100" />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <Email fontSize="small" className="me-3" />
                <TextField label="Your Email" id="form2" type="email" />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <GitHub fontSize="small" className="me-3" />
                <TextField label="Your Github Id" id="form2" type="link" />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <Lock fontSize="small" className="me-3" />
                <TextField label="Password" id="form3" type="password" />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <VpnKey fontSize="small" className="me-3" />
                <TextField label="Repeat your password" id="form4" type="password" />
              </div>

              <div className="mb-4">
                <FormControlLabel
                  control={<Checkbox name="flexCheck" value="" id="flexCheckDefault" />}
                  label="Subscribe to our newsletter"
                />
              </div>

              <Button className="mb-4" size="large" style={{ backgroundColor: '#386bc6',color: 'white' }}>
                Register
              </Button>
            </Grid>

            <Grid item md={6} lg={6} className="order-1 order-lg-2 d-flex align-items-center">
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <CardMedia
                  component="img"
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  alt="Registration"
                  fluid
                />
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default SignUp;
