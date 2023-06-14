
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../CSS/signup.css';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { React, useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import { auth } from '../config';


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

        createUserWithEmailAndPassword(auth, values.email, values.pass).then(
            async (res) => {
                setSubmitButtonnDisabled(false);
                const user = res.user;
                await updateProfile(user)
                console.log(user, {
                    displayName: values.name,
                });
                navigate("/");
            }
        )
            .catch((err) => {
                setSubmitButtonnDisabled(false);
                setErrorMsg(err.message);


            })
    };



    return (
        <MDBContainer fluid style={{ ...{ height: '100vh' }, ...{ width: '100%' }, ...{ textAlign: 'center' }, ...{ paddingLeft: '15rem' } }}>

            <MDBCard className='text-black m-5' style={{ ...{ borderRadius: '25px' }, ...{ width: '80%' } }}>
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                            <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                            <div className="d-flex flex-row align-items-center mb-4 ">
                                <MDBIcon fas icon="user me-3" size='lg' />
                                <MDBInput label='Your Name' id='form1' type='text' className='w-100'
                                    onChange={(event) =>
                                        setValues((prev) => ({ ...prev, name: event.target.value }))
                                    }
                                />

                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="envelope me-3" size='lg' />
                                <MDBInput label='Your Email' id='form2' type='email'
                                    onChange={(event) =>
                                        setValues((prev) => ({ ...prev, email: event.target.value }))
                                    }
                                />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="terminal me-3" size='lg' />
                                <MDBInput label='Your Github Id' id='form2' type='link'
                                    onChange={(event) =>
                                        setValues((prev) => ({ ...prev, github: event.target.value }))
                                    }
                                />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="lock me-3" size='lg' />
                                <MDBInput label='Password' id='form3' type='password'
                                    onChange={(event) =>
                                        setValues((prev) => ({ ...prev, pass: event.target.value }))
                                    }
                                />
                            </div>

                            <div className='mb-4'>
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                            </div>

                            <MDBBtn className='mb-4' size='lg'
                                onClick={handleSubmission}
                                disabled={submitButtonDisabled}
                            >Register</MDBBtn>

                            <b className='error'>{errorMsg}</b>

                        </MDBCol>

                        <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
                        </MDBCol>

                    </MDBRow>
                </MDBCardBody>
            </MDBCard>

        </MDBContainer>
    );
}


export default SignUp;