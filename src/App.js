import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Specialization from './components/BookAppointment/BookAppointment';
import SpecialCases from './components/MyReservations/MyReservations';
import SignUpPage from './components/Authentication/SignUpPage/SignUpPage';

function App() {
  return (
    <>
    <SignUpPage />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Specialization" exact element={<Specialization />} />
        <Route path="/SpecialCases" exact element={<SpecialCases />} />
      </Routes>
    </>
  );
}

export default App;
