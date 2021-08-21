import React from 'react';
import { AuthProvider } from './providers/auth';
import Routes from './Routes';


function App() {
  return (
    <AuthProvider>
      <Routes/>      
    </AuthProvider>
  );
}

export default App;
