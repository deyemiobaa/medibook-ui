import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Counter } from './redux/counter/Counter';
import Reserve from './components/Reserve/Reserve';
import Specialization from './components/Specialization/Specialzation';
import SpecialCases from './components/SpecialCases/SpecialCases';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <>
      < Navigation />
      <Routes>
        <Route path="/" exact element={<Reserve />} />
        <Route path="/Specialization" exact element={<Specialization />} />
        <Route path="/SpecialCases" exact element={<SpecialCases />} />
      </Routes>
    </>
  );
}

export default App;
