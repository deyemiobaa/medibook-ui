import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getDoctorsAsync } from '../redux/doctors/doctorsSlice';

export default function Home() {
  const { doctors } = useSelector((state) => state.doctors);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDoctorsAsync());
  }, []);

  return (
    <section className="px-5 py-24 text-gray-600 sm:py-16 sm:w-[85%] w-full min-h-screen">
      <div className="flex flex-col items-center w-full mb-20 text-center">
        <h1 className="mb-4 text-2xl font-black text-gray-900 title-font">
          Welcome to Medi Book
        </h1>
        <p className="mx-auto text-base leading-relaxed lg:w-2/3">
          This is the list of all available Doctors
        </p>
      </div>
      <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="flex flex-col items-center h-full p-4 text-center">
            <img
              alt={doctor.name}
              className="object-cover object-center mb-4"
              src={doctor.picture}
            />
            <div className="w-full">
              <h2 className="text-lg font-bold text-gray-900 title-font">
                {doctor.name}
              </h2>
              <h3 className="mb-3 text-gray-500">{doctor.specialization}</h3>
              <p className="mb-4">{doctor.email}</p>
              <Link to={`/doctor/details/${doctor.name}`}>
                <button
                  type="button"
                  className="px-4 py-2 font-bold text-white rounded-full bg-lime-400 hover:bg-lime-700"
                >
                  View Doctor
                </button>
              </Link>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
