import React from 'react';
import doctorImg from '../../assests/doctor1.jpg';
import doctorImg2 from '../../assests/doctor2.jpg';

export default function MyReservations() {
  return (
    <section className="px-5 py-24 text-gray-600 sm:py-16 sm:w-4/5">
      <div className="flex flex-col w-full mb-10 text-center">
        <h1 className="mb-4 text-2xl font-black text-gray-900 title-font">
          Appointments
        </h1>
        <p className="mx-auto text-base leading-relaxed lg:w-2/3">
          Here is the list of all booked doctors.
        </p>
      </div>
      <div className="flex m-[2%] sm:m-20 bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="relative flex-none w-24 md:w-48">
          <img src={doctorImg} alt="doctor" className="object-cover w-full h-full rounded-lg " />
        </div>
        <div className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-xl font-semibold dark:text-gray-50">
              Jannet Jackson
            </h1>
            <div className="text-xl font-semibold text-gray-500 dark:text-gray-300">
              Date: 12.03.2022
            </div>
            <div className="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">
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
            <button type="button" className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ">
              Meet Now
            </button>
          </div>
        </div>
      </div>

      <div className="flex  m-[2%] sm:m-20 bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="relative flex-none w-24 md:w-48">
          <img src={doctorImg2} alt="doctor" className="absolute inset-0 object-cover w-full h-full rounded-lg" />
        </div>
        <div className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-xl font-semibold dark:text-gray-50">
              Auriane Kibala
            </h1>
            <div className="text-xl font-semibold text-gray-500 dark:text-gray-300">
              Date: 12.03.2022
            </div>
            <div className="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">
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
            <button type="button" className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ">
              Meet Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
