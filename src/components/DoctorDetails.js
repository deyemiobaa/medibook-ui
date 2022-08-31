import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getDoctorsAsync } from '../redux/doctors/doctorsSlice';

export default function DoctorDetails() {
  const { name } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctorsAsync());
  }, []);

  const { doctors } = useSelector((state) => state.doctors);
  const profile = doctors.filter((profile) => profile.name === name)[0];

  return (
    <section className="px-5 py-24 text-gray-600 sm:py-16 sm:w-[85%] w-full min-h-screen">
      <h1 className="mb-4 text-2xl font-black text-gray-900 title-font">
        Doctor Profile
      </h1>
      <div className="container flex flex-col mx-auto md:flex-row">
        <div className="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={profile.picture}
          />
          <Link to={`/book-appointment/${profile.id}`}>
            <button
              type="button"
              className="inline-flex px-3 py-2 my-3 text-xs font-bold text-white border-0 rounded-full bg-lime-400 hover:bg-lime-700 focus:outline-none lg:text-lg"
            >
              Book Appointment
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
          <h2 className="mb-4 text-xl font-bold text-gray-900 sm:text-xl">
            {profile.name}
          </h2>

          <div className="w-full">
            <div className="flex justify-between p-3 font-bold bg-gray-300">
              <p>Specialization:</p>
              <p className="font-normal">{profile.specialization}</p>
            </div>
            <div className="flex justify-between p-3 font-bold">
              <p>Available times:</p>
              <p className="font-normal">{profile.available_times}</p>
            </div>
            <div className="flex justify-between p-3 font-bold bg-gray-300">
              <p>Hourly Rate ($):</p>
              <p className="font-normal">{profile.hourly_rate}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
