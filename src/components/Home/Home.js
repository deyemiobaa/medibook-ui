import React from 'react';
import doctorImg from '../../assests/doctor1.jpg';
import Navigation from '../Navigation/Navigation';

const Home = () => (
  <div className="flex">
    <Navigation />
    <section className="text-gray-600 body-font overflow-scroll">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl title-font mb-4 text-gray-900 font-black">
            Welcome to Dashboard
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Directory of all preferred Doctors
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/3 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                className="rounded-full object-cover object-center mb-4"
                src={doctorImg}
              />
              <div className="w-full">
                <h2 className="title-font font-bold text-lg text-gray-900">
                  Rabia Naeem
                </h2>
                <h3 className="text-gray-500 mb-3">Heart Specialist</h3>
                <p className="mb-4">rabia.naeem@gmail.com</p>
                <span className="inline-flex">
                  <button type="button" className="bg-lime-400 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded-full">
                    View Doctor
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/3 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                className="rounded-full object-cover object-center mb-4"
                src={doctorImg}
              />
              <div className="w-full">
                <h2 className="title-font font-bold text-lg text-gray-900">
                  Rabia Naeem
                </h2>
                <h3 className="text-gray-500 mb-3">Heart Specialist</h3>
                <p className="mb-4">rabia.naeem@gmail.com</p>
                <span className="inline-flex">
                  <button type="button" className="bg-lime-400 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded-full">
                    View Doctor
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/3 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                className="rounded-full object-cover object-center mb-4"
                src={doctorImg}
              />
              <div className="w-full">
                <h2 className="title-font font-bold text-lg text-gray-900">
                  Rabia Naeem
                </h2>
                <h3 className="text-gray-500 mb-3">Heart Specialist</h3>
                <p className="mb-4">rabia.naeem@gmail.com</p>
                <span className="inline-flex">
                  <button type="button" className="bg-lime-400 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded-full">
                    View Doctor
                  </button>
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  </div>
);

export default Home;
