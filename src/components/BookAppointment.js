import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { scheduleAppointmentAsync } from '../redux/appointments/appointmentsSlice';
import { getDoctorsAsync } from '../redux/doctors/doctorsSlice';
import Input from './Form/Input';
import Button from './Form/Button';
import FormScaffold from './Form/FormScaffold';
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
    dispatch(getDoctorsAsync());
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
    <FormScaffold title="Book Appointment" onSubmit={handleSubmit}>
      <label htmlFor="doctorId" className="flex flex-col p-3 text-sm font-medium text-white">
        Doctor
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
      <Input label="Date" type="date" name="date" value={values.date} onChange={handleChange} placeholder="20/05/2023" />
      <Input label="Time" type="time" name="time" value={values.time} onChange={handleChange} placeholder="16:00" />
      <Input label="Duration (in hours)" type="number" name="duration" value={values.duration} onChange={handleChange} placeholder="2" />
      <Button text="Book Now" disabled={values.doctorId === 'new'} />
    </FormScaffold>

  );
}
