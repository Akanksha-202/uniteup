import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import Home from './Home';
import Login from '../components/Login';
import SignUp from './SignMeUp';
import Project from './Project';
import Profile from './Profile';
import Navbar from '../components/Navbar';

function Routess() {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </Router>
        </div>
    );
}

export default Routess;
