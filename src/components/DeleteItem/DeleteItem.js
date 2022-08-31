import React from 'react';
import { appointments } from '../../assets/data';

export default function DeleteItem() {
  return (
    <section className="w-full px-5 py-24 sm:w-[85%] sm:py-16 justify-self-center sm:justify-self-end">
      <div className="flex flex-col items-center w-full mb-10 text-center">
        <h1 className="mb-4 text-2xl font-black text-gray-900 title-font">
          All Doctors
        </h1>
        <p className="text-base leading-relaxed lg:w-2/3">
          Here is the list of all Doctors.
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
                Date
              </th>
              <th className="p-3 text-sm font-semibold text-left bg-thead whitespace-nowrap text-textHeading">
                Time
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
                  {appointment.date}
                </td>
                <td className="px-3 py-4 text-sm font-normal text-left break-words bg-light text-textColor">
                  {appointment.time}
                </td>
                <td className="px-3 py-4 text-sm font-normal text-left break-words bg-light text-textColor">
                  <button
                    type="submit"
                    className="px-4 py-2 text-base font-medium text-center text-white transition duration-200 ease-in rounded-lg shadow-md disabled:opacity-50 bg-lime-800 focus:ring-lime-400 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 enabled:disabled:hover:bg-lime-500"
                  >
                    Delete

                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
