import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import BookAppointment from './components/BookAppointment/BookAppointment';
import MyReservations from './components/MyReservations/MyReservations';
// import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/BookAppointment" exact element={<BookAppointment />} />
        <Route path="/MyReservations" exact element={<MyReservations />} />
      </Routes>
    </>
  );
}

export default App;
