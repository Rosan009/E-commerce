
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import useTokenExpiryHandler from './hooks/useTokenExpiryHandler';
import { LoginForm } from './components/LoginForm';
import ProtectedRoute from './components/ProtectedRoute';
import { Home } from './components/Home';
import { SignIn } from './components/SignIn';


function App() {
  useTokenExpiryHandler(); // Automatically handle expired tokens

  return (

    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
