import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import Navbar from './Navbar';

function Routess() {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </Router>
        </div>
    );
}

export default Routess;
