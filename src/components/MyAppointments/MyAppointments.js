import React, { useEffect } from 'react';
import moment from 'moment';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getAllAppointmentsAsync, cancelAppointmentAsync } from '../../redux/appointments/appointmentsSlice';

export default function MyAppointments() {
  const dispatch = useDispatch();
  const { appointments, error } = useSelector((state) => state.appointments);
  useEffect(() => {
    dispatch(getAllAppointmentsAsync());
  }, [dispatch]);

  const cancelAppointment = (e) => {
    const { id } = e.target;
    dispatch(cancelAppointmentAsync(id))
      .unwrap()
      .then(() => {
        dispatch(getAllAppointmentsAsync());
        toast.success('Appointment cancelled successfully');
      })
      .catch(() => {
        toast.error(error);
      });
  };

  const convertToDate = (date) => moment(date).format('MMMM Do YYYY, [at] h:mm a');

  return (
    <section className="w-full px-5 py-24 sm:w-[85%] sm:py-16 justify-self-center sm:justify-self-end min-h-screen">
      <div className="flex flex-col items-center w-full mb-10 text-center">
        <h1 className="mb-4 text-2xl font-black text-gray-900 title-font">
          Appointments
        </h1>
        <p className="text-base leading-relaxed lg:w-2/3">
          Here is the list of all booked doctors.
        </p>
      </div>
      <div>
        <table className="w-full overflow-auto border-separate table-auto text-slate-500">
          <thead>
            <tr>
              <th className="p-3 text-sm font-semibold text-left bg-thead whitespace-nowrap text-textHeading">
                Doctor Name
              </th>
              <th className="p-3 text-sm font-semibold text-left bg-thead whitespace-nowrap text-textHeading">
                When
              </th>
              <th className="p-3 text-sm font-semibold text-left bg-thead whitespace-nowrap text-textHeading">
                Bill
              </th>
              <th className="p-3 text-sm font-semibold text-left bg-thead whitespace-nowrap text-textHeading">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td className="px-3 py-4 text-sm font-normal text-left break-words bg-light text-textColor">
                  {appointment.name}
                </td>
                <td className="px-3 py-4 text-sm font-normal text-left break-words bg-light text-textColor">
                  {convertToDate(appointment.date)}
                </td>
                <td className="px-3 py-4 text-sm font-normal text-left break-words bg-light text-textColor">
                  $
                  {appointment.total}
                </td>
                <td className="px-3 py-4 text-sm font-semibold text-left text-red-500 underline break-words bg-light">
                  <button type="button" onClick={cancelAppointment} id={appointment.id}>Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
