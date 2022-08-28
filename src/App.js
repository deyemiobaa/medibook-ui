import React, { useEffect } from 'react';
import {
  Routes, Route, useLocation, Navigate,
} from 'react-router-dom';
import Home from './components/Home/Home';
import BookAppointment from './components/BookAppointment/BookAppointment';
import MyReservations from './components/MyReservations/MyReservations';
import LoginPage from './components/Authentication/LoginPage/LoginPage';
import SignUpPage from './components/Authentication/SignUpPage/SignUpPage';
import Navigation from './components/Navigation/Navigation';
import { authenticatedNav, unauthenticatedNav } from './assests/navigation';
import storage from './app/localStorage';
import 'toastify-js/src/toastify.css';

function App() {
  const location = useLocation();

  useEffect(() => {
  }, [location]);

  if (storage.get('token')) {
    return (
      <div className="grid min-h-screen justify-items-end">
        <Navigation urls={authenticatedNav} />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/appointments" element={<MyReservations />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
        </Routes>
      </div>
    );
  }
  return (
    <div className="grid min-h-screen justify-items-end">
      <Navigation urls={unauthenticatedNav} />
      <Routes>
        <Route path="*" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
