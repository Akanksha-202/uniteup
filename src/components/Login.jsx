import { React, useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import '../CSS/login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config';

function Login() {

    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        pass: "",
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleSubmission = () => {
        if (!values.email || !values.pass) {
            setErrorMsg("Fill all fields");
            return;
        }
        setErrorMsg("");

        setSubmitButtonDisabled(true);
        signInWithEmailAndPassword(auth, values.email, values.pass)
            .then(async (res) => {
                setSubmitButtonDisabled(false);

                navigate("/");
            })
            .catch((err) => {
                setSubmitButtonDisabled(false);
                setErrorMsg(err.message);
            });
    };
    return (
        <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden' style={{ height: '100vh' }}>
            <MDBRow>
                <MDBCol md='5' className='text-center text-md-start d-flex flex-column justify-content-center'>
                    <div className='text-section'>
                        <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)' }}>
                            COLLABORATE<br />
                            <span style={{ color: 'hsl(218, 81%, 75%)' }}> INNOVATE<br /> SUCCEED</span>
                        </h1>

                        <p className='px-3' style={{ color: 'hsl(218, 81%, 85%)' }}>
                            Find your perfect fellowmate with UniteUp: The ultimate matching platform for <br />developers and like-minded companions.
                            Sign up now and unlock a world of<br /> compatibility and shared experiences.Your ideal fellowmate is just a click away

                        </p>
                    </div>
                </MDBCol>

                <MDBCol md='6' className='position-relative' >
                    <div className='form-section' style={{ width: '100%' }}>
                        <MDBCard className='my-5 mx-5 bg-glass' style={{ width: '90%' }}>
                            <MDBCardBody className='p-5'>
                                <h3 className="my-3 display-3 fw-bold ls-tight px-3" style={{ color: '#444876', fontSize: '24px' }}>
                                    USER LOGIN <br />
                                </h3>


                                <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' onChange={(event) =>
                                    setValues((prev) => ({ ...prev, email: event.target.value }))
                                } />
                                <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' onChange={(event) =>
                                    setValues((prev) => ({ ...prev, pass: event.target.value }))
                                } />

                                <div className="text-center">

                                    <MDBBtn disabled={submitButtonDisabled} className='w-100 mb-3' size='md' style={{ maxWidth: '200px', margin: '0 auto' }}
                                        onClick={handleSubmission}
                                    >
                                        LOGIN
                                    </MDBBtn>

                                    <p>don't have an account yet?</p>
                                    <Link to="/signup" className='.mylink'><b>CREATE ACCOUNT</b></Link><br />
                                    <b className='error'>{errorMsg}</b>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                </MDBCol>

            </MDBRow>
        </MDBContainer>
    );
}

export default Login;
