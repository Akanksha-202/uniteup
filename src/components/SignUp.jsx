import { Button, Container, Grid, Card, CardContent, CardMedia, TextField, FormControlLabel, Checkbox } from '@mui/material';
import { AccountCircle, Email, Lock, VpnKey, GitHub } from '@mui/icons-material';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { React, useState } from 'react';
import { auth } from '../config';
import '../CSS/signup.css';

function SignUp() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    github: "",
    pass: " ",

  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonnDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.github || !values.pass) {
      setErrorMsg("Please Fill All Fields");
      return;
    }
    setErrorMsg("");
    setSubmitButtonnDisabled(true);
  
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonnDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        console.log(user);
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonnDisabled(false);
        setErrorMsg(err.message);
      });
  };
  
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
                <TextField label="Your Name" id="form1" type="text" className="w-100" onChange={(event) =>
                  setValues((prev) => ({ ...prev, name: event.target.value }))} />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <Email fontSize="small" className="me-3" />
                <TextField label="Your Email" id="form2" type="email" onChange={(event) =>
                  setValues((prev) => ({ ...prev, email: event.target.value }))} />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <GitHub fontSize="small" className="me-3" />
                <TextField label="Your Github Id" id="form2" type="link" onChange={(event) =>
                  setValues((prev) => ({ ...prev, github: event.target.value }))} />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <Lock fontSize="small" className="me-3" />
                <TextField label="Password" id="form3" type="password" onChange={(event) =>
                  setValues((prev) => ({ ...prev, pass: event.target.value }))} />
              </div>


              <div className="mb-4">
                <FormControlLabel
                  control={<Checkbox name="flexCheck" value="" id="flexCheckDefault" />}
                  label="Subscribe to our newsletter"
                />
              </div>

              <Button className="mb-4" size="large" style={{ backgroundColor: '#386bc6', color: 'white' }} onClick={handleSubmission}
                disabled={submitButtonDisabled}>
                Register
              </Button>
              <b className='error'>{errorMsg}</b>
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
