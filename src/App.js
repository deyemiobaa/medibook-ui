import React, { useEffect } from 'react';
import {
  Routes, Route, useLocation, Navigate,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home/Home';
import BookAppointment from './components/BookAppointment/BookAppointment';
import DoctorDetails from './components/DoctorDetails/DoctorDetails';
import MyAppointments from './components/MyAppointments/MyAppointments';
import LoginPage from './components/Authentication/LoginPage/LoginPage';
import SignUpPage from './components/Authentication/SignUpPage/SignUpPage';
import Navigation from './components/Navigation/Navigation';
import { authenticatedNav, unauthenticatedNav } from './assets/navigation';
import storage from './app/localStorage';
import AddDoctor from './components/AddDoctor/AddDoctor';
import DeleteItem from './components/DeleteItem/DeleteItem';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const role = storage.get('role');

  const location = useLocation();

  useEffect(() => { }, [location]);

  if (storage.get('token')) {
    return (
      <div className="grid justify-items-end">
        <ToastContainer autoClose={2500} />
        <Navigation urls={authenticatedNav} />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/appointments" element={<MyAppointments />} />
          {role === 'admin' && (
            <>
              <Route path="/doctors/new" element={<AddDoctor />} />
              <Route path="/doctors/delete" element={<DeleteItem />} />
            </>
          )}
          <Route path="/book-appointment/:id" element={<BookAppointment />} />
          <Route path="/doctor/details/:name" element={<DoctorDetails />} />
        </Routes>
      </div>
    );
  }
  return (
    <div className="grid justify-items-end">
      <ToastContainer autoClose={2500} />
      <Navigation urls={unauthenticatedNav} />
      <Routes>
        <Route path="*" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/doctors/new" element={<AddDoctor />} />
        <Route path="/doctors/delete" element={<DeleteItem />} />
      </Routes>
    </div>
  );
}

export default App;
