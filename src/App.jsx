import React, { useEffect, useState } from 'react';
import Routess from './pages/Routess';
import { useScrollTrigger } from '@mui/material';
import { auth } from './config';

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
    <Routess />
  );
}

export default App;
