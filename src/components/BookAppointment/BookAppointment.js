import React from 'react';
import Navigation from '../Navigation/Navigation';

const BookAppointment = () => (
  <>
    <div className=" flex">
      <Navigation />
      <section className="bg-lime-400 w-full h-screen body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl text-center title-font text-black mb-4 font-bold">
              Book Appointment
            </h1>
          </div>
          <div className="lg:w-1/2 sm:mx-auto sm:mb-2">
            <div className="p-2">
              <form className="flex flex-col justify-center  bg-lime-800 rounded">
                <h1 className="text-lg font-medium text-white p-3">
                  Select a Doctor
                </h1>
                <select className="p-2 mx-3 rounded">
                  <option value="actual value 0">Select Doctor</option>
                  <option value="actual value 1">Rabia Naeem</option>
                  <option value="actual value 2">Doctor 2</option>
                  <option value="actual value 3">Doctor 3</option>
                </select>
                <h1 className="text-lg font-medium text-white p-3">
                  Select a Specific Day & Time
                </h1>
                <input type="date" className="p-2 mx-3 rounded" />
                <input type="time" className="p-2 m-3 rounded" />
                <button
                  type="submit"
                  className="p-3 my-5 w-[160px] mx-auto rounded-full bg-white font-bold text-lime-600 hover:bg-lime-500 hover:text-white"
                >
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
);

export default BookAppointment;
