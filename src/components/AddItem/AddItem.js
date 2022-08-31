/* eslint-disable arrow-body-style */
import React from 'react';
import { useDispatch } from 'react-redux';
import { postDoctors } from '../../redux/doctors/doctorsSlice';
import useForm from '../Authentication/useForm';

const AddItem = () => {
  const dispatch = useDispatch();
  const { values, handleChange } = useForm({
    name: '',
    specialization: '',
    hourly: '',
    available: '',
    picture: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(postDoctors(values));
  };
  return (
    <div className="w-full px-5 py-24 text-gray-600 justify-self-center sm:w-[85%] bg-lime-400 sm:justify-self-end sm:py-16">
      <div className="max-w-xl m-auto bg-white bg-opacity-25 rounded shadow-xl">
        <form className="p-10" onSubmit={handleSubmit}>
          <p className="mb-8 text-2xl font-medium text-center text-gray-700">
            Add New Doctor
          </p>
          <div className="mb-2">
            <label htmlFor="docname" className="font-medium">
              Name:
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={values.name}
                className="flex-1 w-64 mx-16 px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                placeholder="Name"
              />
            </label>
          </div>
          <div className="mb-2">
            <label htmlFor="specilization" className="font-medium">
              Specialization:
              <input
                type="text"
                name="specialization"
                onChange={handleChange}
                value={values.specialization}
                className="flex-1 w-64 px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                placeholder="Specialization"
              />
            </label>
          </div>
          <div className="mb-2">
            <label htmlFor="hours" className="font-medium">
              Hourly Rate:
              <input
                type="number"
                name="hourly"
                onChange={handleChange}
                value={values.hourly}
                className="flex-1 w-64 mx-4 px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                placeholder="Hours"
              />
            </label>
          </div>
          <div className="mb-2">
            <label htmlFor="from" className="font-medium">
              available times:
              <input
                type="text"
                name="available"
                onChange={handleChange}
                value={values.available}
                className="py-2 px-2 rounded-lg mx-1 my-2 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                placeholder="Available times"
              />
            </label>
          </div>
          <div className="mb-2">
            <label htmlFor="from" className="font-medium">
              Upload picture:
              <input
                type="text"
                name="picture"
                onChange={handleChange}
                value={values.picture}
                className="py-2 px-2 rounded-lg mx-1 my-2 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                placeholder="Upload picture"
              />
            </label>
          </div>
          <div className="flex items-center justify-center mt-4">
            <button
              type="submit"
              className="w-64 px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in rounded-lg shadow-md disabled:opacity-50 bg-lime-800 focus:ring-lime-400 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 enabled:disabled:hover:bg-lime-500"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
