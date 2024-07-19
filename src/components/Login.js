import React from 'react';
import { Button } from '@material-ui/core';

function Login() {
  const handleLogin = () => {
    // Redirect to GitHub OAuth
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=YOUR_CLIENT_ID';
  };

  return (
    <div>
      <h1>Login with GitHub</h1>
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login with GitHub
      </Button>
    </div>
  );
}

export default Login;
