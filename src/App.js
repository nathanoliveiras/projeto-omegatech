import React from 'react';
import { AuthProvider } from './providers/auth';
import Routes from './Routes';
import { Router } from 'react-router-dom';
import history from './history';



function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Routes/>
      </Router>      
    </AuthProvider>
  );
}

export default App;
