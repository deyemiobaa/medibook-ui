import React from 'react';
import Navigation from '../Navigation/Navigation';

const BookAppointment = () => (
  <>
    <div className=" flex bg-lime-600 h-screen">
      <Navigation />
      <div className="font-bold mx-auto mt-5">
        <h1 className="text-xl text-white flex justify-center p-3">Book Appointment</h1>
        <div className="bg-lime-400 w-96 rounded items-center p-5">
          <h1 className="text-lg text-white p-3">Select a Specific Day</h1>
          <form className="flex flex-col justify-center">
            <input type="date" className="p-2 m-2" />
            <input type="time" className="p-2 m-2" />
            <button type="submit" className="p-3 my-5 w-[160px] mx-auto rounded-full bg-white text-lime-500 hover:bg-lime-700 hover:text-white">Book Now</button>
          </form>
        </div>
      </div>
    </div>
  </>
);

export default BookAppointment;
