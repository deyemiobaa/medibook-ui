import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Specialization from './components/BookAppointment/BookAppointment';
import SpecialCases from './components/MyReservations/MyReservations';
import LoginPage from './components/LoginPage/LoginPage';

function App() {
  return (
    <>
      <LoginPage />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Specialization" exact element={<Specialization />} />
        <Route path="/SpecialCases" exact element={<SpecialCases />} />
      </Routes>
    </>
  );
}

export default App;
