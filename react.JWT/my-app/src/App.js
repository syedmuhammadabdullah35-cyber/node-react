import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// ✅ Correct paths
import Signup from './signup/signup';
import Login from './login/login';
import Dashboard from './comp/dashboard/dashboard';
import Header from './Header/Header';

function App() {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;