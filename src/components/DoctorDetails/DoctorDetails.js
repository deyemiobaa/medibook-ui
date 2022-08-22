/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import doctorImg from '../../assests/doctor1.jpg';

const DoctorDetails = () => (
  <div className="flex">
    <Navigation />
    <section className="body-font">
      <h1 className="flex justify-center title-font sm:text-4xl text-3xl font-bold text-gray-900 p-3">
        Doctor Profile
      </h1>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={doctorImg}
          />
          <Link exact to="/BookAppointment">
            <button
              type="submit"
              className="bg-lime-400 rounded text-white my-3 font-bold hover:bg-lime-700 inline-flex border-0 py-2 px-6 focus:outline-none text-lg"
            >
              Book Appointment
            </button>
          </Link>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="font-bold sm:text-xl text-xl mb-4 text-gray-900">
            Rabia Naeem
          </h1>
          <p className="mb-8 leading-relaxed">rabia.naeem@gmail.com</p>
          <div className="flex justify-center">
            <div>
              <ul>
                <li className="flex justify-between bg-gray-300 p-3 rounded">
                  <p className="font-bold ">City :</p>
                  <p>Lahore</p>
                </li>
                <li className="flex justify-between p-3">
                  <p className="font-bold">State :</p>
                  <p>Punjab</p>
                </li>
                <li className="flex justify-between bg-gray-300 p-3 rounded">
                  <p className="font-bold">Address:</p>
                  <p>Pakistan</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default DoctorDetails;
