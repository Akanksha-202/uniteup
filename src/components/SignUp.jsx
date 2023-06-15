import { Button, Container, Grid, Card, CardContent, CardMedia, TextField, FormControlLabel, Checkbox } from '@mui/material';
import { AccountCircle, Email, Lock } from '@mui/icons-material';
import InfoIcon from '@mui/icons-material/Info';
import SpaIcon from '@mui/icons-material/Spa';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { React, useState, useContext } from 'react';
import { auth } from '../config';
import { AuthContext } from './AuthContext';
import '../CSS/signup.css';
import { db } from '../config';
import { collection, addDoc } from 'firebase/firestore';

function SignUp() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [values, setValues] = useState({
    name: "",
    email: "",
    bio: "",
    exp: "",
    link: "",
    pass: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const usersCollectionRef = collection(db, "users");

  const handleSubmission = async () => {
    if (!values.name || !values.email || !values.link || !values.pass) {
      setErrorMsg("Please Fill All Fields");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.pass);
      const user = userCredential.user;

      // Create the user document in Firestore
      await addDoc(usersCollectionRef, {
        name: values.name,
        email: values.email,
        bio: values.bio,
        exp: values.exp,
        link: values.link,
        uid: user.uid,
      });

      // Update the user profile
      await updateProfile(user, {
        displayName: values.name,
      });

      await login(values.email, values.pass);
      navigate("/");
    } catch (err) {
      setSubmitButtonDisabled(false);
      setErrorMsg(err.message);
    }
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
                <AccountCircle fontSize="small" className="me-3 mt-4" />
                <TextField label="Your Name" id="form1" type="text" className="w-100" onChange={(event) =>
                  setValues((prev) => ({ ...prev, name: event.target.value }))} />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <Email fontSize="small" className="me-3 mt-4" />
                <TextField label="Your Email" id="form2" type="email" onChange={(event) =>
                  setValues((prev) => ({ ...prev, email: event.target.value }))} />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <InfoIcon fontSize="small" className="me-3 mt-4" />
                <TextField label="Bio" id="form2" type="text" onChange={(event) =>
                  setValues((prev) => ({ ...prev, bio: event.target.value }))} />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <SpaIcon fontSize="small" className="me-3 mt-4" />
                <TextField label="Experience" id="form3" type="text" onChange={(event) =>
                  setValues((prev) => ({ ...prev, exp: event.target.value }))} />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <LinkedInIcon fontSize="small" className="me-3 mt-4" />
                <TextField label="LinkedIn" id="form3" type="link" onChange={(event) =>
                  setValues((prev) => ({ ...prev, link: event.target.value }))} />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <Lock fontSize="small" className="me-3 mt-4" />
                <TextField label="Set Password" id="form3" type="password" onChange={(event) =>
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
