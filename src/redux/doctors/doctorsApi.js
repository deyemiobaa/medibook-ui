import storage from '../../app/localStorage';

const token = storage.get('token');

const getDoctors = async (baseURL) => {
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

export default getDoctors;
