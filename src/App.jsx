import React, { useEffect, useState } from 'react';
import Routess from './pages/Routess';
import { useScrollTrigger } from '@mui/material';
import { auth } from './config';
import { AuthProvider } from './components/AuthContext';

function App() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      }
      else {
        setUserName("");
      }
    });
  }, []);
  return (
    <AuthProvider>
      <Routess />
    </AuthProvider>

  );
}

export default App;
