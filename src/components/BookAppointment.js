import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { scheduleAppointmentAsync } from '../redux/appointments/appointmentsSlice';
import { fetchDoctors } from '../redux/doctors/doctorsSlice';
import useForm from './Form/useForm';

export default function BookAppointment() {
  const { doctors } = useSelector((state) => state.doctors);

  const { id } = useParams();
  const { values, handleChange } = useForm({
    date: '',
    time: '',
    duration: '',
    doctorId: id,
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDoctors());
  }, []);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const args = {
      date: `${values.date} ${values.time}`,
      duration: values.duration,
      doctorId: values.doctorId,
    };
    dispatch(scheduleAppointmentAsync(args))
      .unwrap()
      .then(() => {
        navigate('/appointments');
        toast.success('Appointment booked successfully');
      })
      .catch(() => {
        toast.error('Appointment booking failed');
      });
  };
  return (
    <section className="w-full justify-self-center sm:w-[85%] bg-lime-400 sm:justify-self-end min-h-screen">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-center text-black sm:text-3xl title-font">
            Book Appointment
          </h1>
        </div>
        <div className="max-w-lg sm:mx-auto sm:mb-2">
          <div className="p-2">
            <form className="flex flex-col justify-center rounded bg-lime-800" onSubmit={handleSubmit}>
              <label htmlFor="doctorId" className="flex flex-col p-3 text-sm font-medium text-white">
                Select a Doctor
                <select
                  className="p-2 mt-1 text-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                  id="doctorId"
                  name="doctorId"
                  value={values.doctorId}
                  onChange={handleChange}
                >
                  <option value="default">Select a doctor</option>
                  {doctors.map((doctor) => (
                    <option key={doctor.id} value={doctor.id}>
                      {doctor.name}
                    </option>
                  ))}
                </select>
              </label>
              <label htmlFor="date" className="flex flex-col p-3 text-sm font-medium text-white">
                Select Date
                <input
                  onChange={handleChange}
                  type="date"
                  id="date"
                  className="p-2 mt-1 text-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                  name="date"
                />
              </label>
              <label htmlFor="time" className="flex flex-col p-3 text-sm font-medium text-white">
                Select Time
                <input
                  onChange={handleChange}
                  type="time"
                  id="time"
                  className="p-2 mt-1 text-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                  name="time"
                />
              </label>
              <label htmlFor="duration" className="flex flex-col p-3 text-sm font-medium text-white">
                Duration (in hours)
                <input
                  onChange={handleChange}
                  type="number"
                  id="duration"
                  className="p-2 mt-1 text-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                  name="duration"
                />
              </label>
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
}
