export const getAllAppointments = async (baseURL, token) => {
  const response = await fetch(`${baseURL}/appointments`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    });
  const result = await response.json();
  return result; // [{ id: '...', name: '...', date: '...', duration: '...', total: '...' }]
};
export const scheduleAppointment = async (baseURL, token, date, duration, doctorId) => {
  const response = await fetch(`${baseURL}/appointments`,
    {
      method: 'POST',
      body: JSON.stringify({
        date,
        duration,
        doctor_id: doctorId,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    });
  const result = await response.json();
  return result; // { message: '...', status: '...' }
};

export const cancelAppointment = async (baseURL, token, id) => {
  const response = await fetch(`${baseURL}/appointments/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    });
  const result = await response.json();
  return result; // { message: '...', status: '...' }
};
