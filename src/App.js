import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import BookAppointment from './components/BookAppointment/BookAppointment';
import MyReservations from './components/MyReservations/MyReservations';
import DoctorDetails from './components/DoctorDetails/DoctorDetails';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/BookAppointment" exact element={<BookAppointment />} />
        <Route path="/my-reservations" exact element={<MyReservations />} />
        <Route path="/DoctorDetails" exact element={<DoctorDetails />} />
      </Routes>
    </>
  );
}

export default App;
