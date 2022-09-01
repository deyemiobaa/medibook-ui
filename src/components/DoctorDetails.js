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
        {profile.name}
      </h1>
      <div className="container flex flex-col gap-4 mx-auto md:flex-row">
        <div className="mb-10 md:w-1/2 md:mb-0">
          <img
            className="object-contain object-left max-h-[500px]"
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
        <div className="md:w-1/2">
          <h2 className="mb-4 text-xl font-bold text-gray-900 sm:text-xl">
            Profile
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
