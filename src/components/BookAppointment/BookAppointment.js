import React from 'react';

const BookAppointment = () => (
  <section className="w-full justify-self-center sm:w-[85%] bg-lime-400 sm:justify-self-end">
    <div className="container px-5 py-24 mx-auto">
      <div className="mb-20 text-center">
        <h1 className="mb-4 text-2xl font-bold text-center text-black sm:text-3xl title-font">
          Book Appointment
        </h1>
      </div>
      <div className="max-w-lg sm:mx-auto sm:mb-2">
        <div className="p-2">
          <form className="flex flex-col justify-center rounded bg-lime-800">
            <h1 className="p-3 text-lg font-medium text-white">
              Select a Doctor
            </h1>
            <select className="p-2 mx-3 rounded">
              <option value="actual value 0">Select Doctor</option>
              <option value="actual value 1">Rabia Naeem</option>
              <option value="actual value 2">Doctor 2</option>
              <option value="actual value 3" selected={false}>Doctor 3</option>
            </select>
            <h1 className="p-3 text-lg font-medium text-white">
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
);

export default BookAppointment;
