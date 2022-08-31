import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { signupAsync } from '../../redux/users/usersSlice';
import useForm from '../Form/useForm';

export default function SignUpPage() {
  const { values, handleChange } = useForm({
    username: '',
    password: '',
    confirmation: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    isLoading, message,
  } = useSelector((state) => state.users);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signupAsync(values)).unwrap().then(() => {
      navigate('/login', { replace: true });
      toast.success(message);
    }).catch(() => {
      toast.error(message);
    });
  };

  return (
    <div className="w-full px-5 py-24 text-gray-600 justify-self-center sm:w-[85%] bg-lime-400 sm:justify-self-end sm:py-16 min-h-screen">
      <div className="max-w-sm m-auto bg-white bg-opacity-25 rounded shadow-xl">
        <form className="p-10" onSubmit={handleSubmit}>
          <p className="mb-8 text-2xl font-light text-center text-gray-700">
            Sign up
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
          <div className="mb-2">
            <input
              onChange={handleChange}
              value={values.confirmation}
              type="password"
              name="confirmation"
              className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
              placeholder="Confirm Password"
            />
            {
              (values.confirmation.length > 0
                && values.password !== values.confirmation
              )
              && <p className="py-4 text-xs italic text-red-600">Passwords do not match</p>
            }
          </div>
          <div className="flex items-center justify-between mt-4">
            <button
              disabled={
                isLoading
                || (values.password.length < 1 || values.confirmation !== values.password)
              }
              type="submit"
              className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in rounded-lg shadow-md disabled:opacity-50 bg-lime-800 focus:ring-lime-400 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 enabled:disabled:hover:bg-lime-500"
            >
              Signup
            </button>
          </div>
        </form>
        <div className="py-5 text-center">
          <Link to="/login" className="text-base font-medium align-baseline hover:text-gray-800">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
