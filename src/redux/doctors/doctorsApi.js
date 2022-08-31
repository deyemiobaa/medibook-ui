import storage from '../../app/localStorage';

const token = storage.get('token');

export const getDoctors = async (baseURL) => {
  const response = await fetch(`${baseURL}/doctors`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    });
  const result = await response.json();
  return result; // { message: '...', status: '...' }
};

export const postDoctor = async (baseURL, name, specialization, hourly, available, picture) => {
  const response = await fetch(`${baseURL}/doctors`,
    {
      method: 'POST',
      body: JSON.stringify({
        name,
        specialization,
        hourly_rate: hourly,
        available_times: available,
        picture,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    });
  const result = await response.json();
  return result; // { message: '...', status: '...' }
};

export const deleteDoctor = async (baseURL, id) => {
  const response = await fetch(`${baseURL}/doctors/${id}`,
    {
      method: 'DELETE',
      body: JSON.stringify({
        id,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    });
  const result = await response.json();
  return result;
};
