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
import Addproject from './Addproject';
import Projectdesc from './Projectdesc';
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
                    <Route path="/add" element={<Addproject />} />
                    <Route path="/desc/:projectId" element={<Projectdesc />} /> 
                </Routes>
            </Router>
        </div>
    );
}

export default Routess;
