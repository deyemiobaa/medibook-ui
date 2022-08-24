/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import doctorImg from '../../assests/doctor1.jpg';

const DoctorDetails = () => (
  <div className="flex">
    <Navigation />
    <section className="body-font w-full h-screen">
      <h1 className="flex justify-center title-font sm:text-4xl text-3xl font-bold text-gray-900 mt-5">
        Doctor Profile
      </h1>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={doctorImg}
          />
          <Link exact to="/BookAppointment">
            <button
              type="submit"
              className="bg-lime-400 rounded-full text-white my-3 font-bold hover:bg-lime-700 inline-flex border-0 py-2 px-6 focus:outline-none text-xs lg:text-lg"
            >
              Book Appointment
            </button>
          </Link>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="font-bold sm:text-xl text-xl mb-4 text-gray-900">
            Rabia Naeem
          </h1>
          <p className="mb-8 leading-relaxed text-gray-700">rabia.naeem@gmail.com</p>

          <div className="grid grid-cols-6 gap-y-3 rounded">
            <div className="col-span-5 bg-gray-300 p-3 font-bold">City :</div>
            <div className=" bg-gray-300 py-3">lahore</div>
            <div className="col-start-1 col-end-6 font-bold p-3">State :</div>
            <div>Punjab</div>
            <div className="col-span-4 bg-gray-300 font-bold p-3">Country :</div>
            <div className="col-span-2 bg-gray-300 px-10 py-3">Pakistan</div>
          </div>
          {/* <div>
            <ul>
              <li className="flex justify-between bg-gray-300 p-3 rounded">
                <p className="font-bold ">City:</p>
                <p>Lahore</p>
              </li>
              <li className="flex justify-between p-3">
                <p className="font-bold">State:</p>
                <p>Punjab</p>
              </li>
              <li className="flex justify-between bg-gray-300 p-3 rounded">
                <p className="font-bold">Address:</p>
                <p className="pl-10">Pakistan</p>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </section>
  </div>
);

export default DoctorDetails;
