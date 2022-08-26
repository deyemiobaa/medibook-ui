import React from 'react';
import Navigation from '../Navigation/Navigation';
import doctorImg from '../../assests/doctor1.jpg';
import doctorImg2 from '../../assests/doctor2.jpg';

export default function MyReservations() {
  return (
    <>
      <div className="sm:flex">
        <Navigation />
        <div className="reservations-container w-[80%]">
          <div className="flex m-20 sm:m-20 bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="flex-none w-24 md:w-48  relative">
              <img src={doctorImg} alt="doctor" className="absolute rounded-lg inset-0 w-full h-full object-cover" />
            </div>
            <form className="flex-auto p-6">
              <div className="flex flex-wrap">
                <h1 className="flex-auto text-xl font-semibold dark:text-gray-50">
                  Jannet Jackson
                </h1>
                <div className="text-xl font-semibold text-gray-500 dark:text-gray-300">
                  Date: 12.03.2022
                </div>
                <div className="w-full flex-none text-sm font-medium text-gray-500 dark:text-gray-300 mt-2">
                  Speciality:
                  {' '}
                  <span className="text-xl text-black"> Neurosurgeon</span>
                  {' '}
                  <br />
                  jannetjackson@gmail.com
                </div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                motif: continuous headaches and nausea
              </p>
              <div className="flex mb-4 text-sm font-medium">
                <button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  Meet Now
                </button>
              </div>
            </form>
          </div>

          <div className="flex m-20 sm:m-20 bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="flex-none w-24 md:w-48  relative">
              <img src={doctorImg2} alt="doctor" className="absolute rounded-lg inset-0 w-full h-full object-cover" />
            </div>
            <form className="flex-auto p-6">
              <div className="flex flex-wrap">
                <h1 className="flex-auto text-xl font-semibold dark:text-gray-50">
                  Auriane Kibala
                </h1>
                <div className="text-xl font-semibold text-gray-500 dark:text-gray-300">
                  Date: 12.03.2022
                </div>
                <div className="w-full flex-none text-sm font-medium text-gray-500 dark:text-gray-300 mt-2">
                  Speciality:
                  {' '}
                  <span className="text-xl text-black">Therapist</span>
                  {' '}
                  <br />
                  aurianekibala@gmail.com
                </div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                motif: depression and anxiety
              </p>
              <div className="flex mb-4 text-sm font-medium">
                <button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  Meet Now
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </>
  );
}
