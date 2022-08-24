import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import doctorImg from '../../assests/doctor1.jpg';
import barImg from '../../assests/circle-bar.png';

const DoctorDetails = () => (
  <div className="flex">
    <Navigation />
    <section className="body-font w-full h-screen">
      <h1 className="flex justify-center title-font sm:text-4xl text-3xl font-bold text-gray-900 mt-5 underline decoration-lime-400">
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
          <p className="mb-8 leading-relaxed text-gray-700">
            rabia.naeem@gmail.com
          </p>

          <div className="grid grid-cols-2 xl:grid-cols-6 gap-y-3">
            <div className="xl:col-start-1 xl:col-end-5 bg-gray-300 p-3 font-bold">
              City :
            </div>
            <div className=" bg-gray-300 p-3">lahore</div>
            <div className=" xl:col-start-1 xl:col-end-5 font-bold p-3">
              State :
            </div>
            <div className="p-3">Punjab</div>
            <div className="xl:col-start-1 xl:col-end-5 bg-gray-300 font-bold p-3">
              Country:
            </div>
            <div className=" bg-gray-300 p-3">Pakistan</div>
          </div>
          <img
            src={barImg}
            alt="circle-bar"
            className="w-25 h-56 p-5 rounded-full"
          />
        </div>
      </div>
    </section>
  </div>
);

export default DoctorDetails;
