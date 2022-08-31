import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDoctors, deleteDoctors } from '../redux/doctors/doctorsSlice';

export default function DeleteDoctor() {
  const { doctors } = useSelector((state) => state.doctors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  const handleDelete = (e) => {
    const { id } = e.target;
    dispatch(deleteDoctors(id));
    window.location.reload();
  };
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
                specialization
              </th>
              <th className="p-3 text-sm font-semibold text-left bg-thead whitespace-nowrap text-textHeading">
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr key={doctor.id}>
                <td className="px-3 py-4 text-sm font-normal text-left break-words bg-light text-textColor">
                  {doctor.name}
                </td>
                <td className="px-3 py-4 text-sm font-normal text-left break-words bg-light text-textColor">
                  {doctor.specialization}
                </td>
                <td className="px-3 py-4 text-sm font-normal text-left break-words bg-light text-textColor">
                  {doctor.available_times}
                </td>
                <td className="px-3 py-4 text-sm font-normal text-left break-words bg-light text-textColor">
                  <button
                    type="submit"
                    id={doctor.id}
                    onClick={handleDelete}
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
