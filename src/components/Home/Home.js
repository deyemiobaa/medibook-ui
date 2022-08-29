import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import doctorData from '../../assets/data';
import doctorImg from '../../assets/doctor1.jpg';

const Home = () => {
  const doctors = useSelector((state) => state);
  console.log(doctors);
  return (
    <section className="px-5 py-24 text-gray-600 sm:py-16 sm:w-[85%]">
      <div className="flex flex-col items-center w-full mb-20 text-center">
        <h1 className="mb-4 text-2xl font-black text-gray-900 title-font">
          Welcome to Medi Book
        </h1>
        <p className="mx-auto text-base leading-relaxed lg:w-2/3">
          This is the list of all available Doctors
        </p>
      </div>
      <div className="flex flex-wrap m-4">
        {doctorData.map((doctor) => (
          <div key={doctor.id} className="p-4 lg:w-1/3 md:w-1/2">
            <div className="flex flex-col items-center h-full text-center">
              <img
                alt="team"
                className="object-cover object-center mb-4 rounded-full"
                src={doctorImg}
              />
              <div className="w-full">
                <h2 className="text-lg font-bold text-gray-900 title-font">
                  {doctor.name}
                </h2>
                <h3 className="mb-3 text-gray-500">{doctor.speciality}</h3>
                <p className="mb-4">{doctor.email}</p>
                <span className="inline-flex">
                  <Link to="/doctor-details">
                    <button
                      type="button"
                      className="px-4 py-2 font-bold text-white rounded-full bg-lime-400 hover:bg-lime-700"
                    >
                      View Doctor
                    </button>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
