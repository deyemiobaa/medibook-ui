import React from 'react';
import Navigation from '../Navigation/Navigation';
import { authenticatedNav } from '../../assests/navigation';

export default function BookAppointment() {
  return (
    <>
      <div className="sm:flex">
        <Navigation urls={authenticatedNav} />
        <h1>Book Appointment</h1>
      </div>
    </>
  );
}
