import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import doctorImg from '../../assests/doctor1.jpg';

const DoctorDetails = () => (
  <div className="flex">
    <Navigation />
    <div className="mx-auto">
      <h1>Doctor Profile</h1>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <img src={doctorImg} alt="doctor-img" />
          <Link exact to="/BookAppointment">
            <button type="submit" className="bg-lime-400 rounded-full text-white p-3">Book Appointment</button>
          </Link>
        </div>
        <div>
          <h1>Rabia Naeem</h1>
          <h3>rabia@gmail.com</h3>
          <div>
            <ul>
              <li className="flex justify-between">
                <p>City :</p>
                <p>Lahore</p>
              </li>
              <li className="flex justify-between">
                <p>State :</p>
                <p>Punjab</p>
              </li>
              <li className="flex justify-between">
                <p>Address:</p>
                <p>Pakistan</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DoctorDetails;
