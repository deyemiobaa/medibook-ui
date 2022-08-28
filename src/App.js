import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import BookAppointment from './components/BookAppointment/BookAppointment';
import MyReservations from './components/MyReservations/MyReservations';
import LoginPage from './components/Authentication/LoginPage/LoginPage';
import SignUpPage from './components/Authentication/SignUpPage/SignUpPage';
import Navigation from './components/Navigation/Navigation';
import { authenticatedNav, unauthenticatedNav } from './assests/navigation';
import storage from './app/localStorage';

function App() {
  if (storage.get('token')) {
    return (
      <div className="grid min-h-screen justify-items-end">
        <Navigation urls={authenticatedNav} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointments" element={<MyReservations />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    );
  }
  return (
    <div className="grid min-h-screen justify-items-end">
      <Navigation urls={unauthenticatedNav} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
