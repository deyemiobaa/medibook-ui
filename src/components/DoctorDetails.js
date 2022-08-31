import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDoctors } from '../redux/doctors/doctorsSlice';

export default function DoctorDetails() {
  const { name } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDoctors());
  }, []);

  const { doctors } = useSelector((state) => state.doctors);
  const profile = doctors.filter((profile) => profile.name === name)[0];

  return (
    <div className="flex">
      <section className="w-full h-screen body-font">
        <h1 className="flex justify-center mt-5 text-3xl font-bold text-gray-900 underline title-font sm:text-4xl decoration-lime-400">
          Doctor Profile
        </h1>
        <div className="container flex flex-col px-5 py-24 mx-auto md:flex-row">
          <div className="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={profile.picture}
            />
            <Link exact to="/BookAppointment">
              <button
                type="submit"
                className="inline-flex px-6 py-2 my-3 text-xs font-bold text-white border-0 rounded-full bg-lime-400 hover:bg-lime-700 focus:outline-none lg:text-lg"
              >
                Book Appointment
              </button>
            </Link>
          </div>
          <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
            <h1 className="mb-4 text-xl font-bold text-gray-900 sm:text-xl">
              {profile.name}
            </h1>

            <div className="grid grid-cols-2 xl:grid-cols-6 gap-y-3">
              <div className="p-3 font-bold bg-gray-300 xl:col-start-1 xl:col-end-5">
                specialization :
              </div>
              <div className="p-3 bg-gray-300 ">{profile.specialization}</div>
              <div className="p-3 font-bold xl:col-start-1 xl:col-end-5">
                available  :
              </div>
              <div className="p-3">{profile.available_times}</div>
              <div className="p-3 font-bold bg-gray-300 xl:col-start-1 xl:col-end-5">
                Hourly Rate:
              </div>
              <div className="p-3 bg-gray-300 ">{profile.hourly_rate}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
