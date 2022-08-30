import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { signinAsync } from '../../../redux/users/usersSlice';
import useForm from '../../useForm';

export default function LoginPage() {
  const { values, handleChange } = useForm({
    username: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    isLoading, message,
  } = useSelector((state) => state.users);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signinAsync(values))
      .unwrap()
      .then(() => {
        navigate('/', { replace: true });
        window.location.reload();
      }).catch(() => {
        toast.error(message);
      });
  };

  return (
    <div className="w-full px-5 py-24 text-gray-600 justify-self-center sm:w-[85%] bg-lime-400 sm:justify-self-end sm:py-16 min-h-screen">
      <div className="max-w-sm m-auto bg-white bg-opacity-25 rounded shadow-xl">
        <form className="p-10" onSubmit={handleSubmit}>
          <p className="mb-8 text-2xl font-light text-center text-blue-600">
            Login
          </p>
          <div className="mb-2">
            <input
              onChange={handleChange}
              value={values.username}
              type="text"
              name="username"
              className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
              placeholder="Username"
            />
          </div>
          <div className="mb-2">
            <input
              onChange={handleChange}
              value={values.password}
              type="password"
              name="password"
              className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between mt-4">
            <button
              disabled={isLoading
                || (values.password.length < 1 || values.username.length < 1)}
              type="submit"
              className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in rounded-lg shadow-md disabled:opacity-50 bg-lime-800 focus:ring-lime-400 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 enabled:disabled:hover:bg-lime-500"
            >
              Login
            </button>
          </div>
        </form>
        <div className="py-5 text-center">
          <Link to="/signup" className="text-base font-medium align-baseline hover:text-gray-800">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}
