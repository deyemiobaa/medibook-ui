import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import BookAppointment from './components/BookAppointment/BookAppointment';
import MyReservations from './components/MyReservations/MyReservations';
import LoginPage from './components/Authentication/LoginPage/LoginPage';

function App() {
  return (
    <>
      <LoginPage />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/my-reservations" exact element={<MyReservations />} />
        <Route path="/book-appointment" exact element={<BookAppointment />} />
      </Routes>
    </>
  );
}

export default App;
