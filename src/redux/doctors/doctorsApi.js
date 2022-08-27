export const getDoctors = async (baseURL) => {
  const response = await fetch(`${baseURL}/doctors`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  const result = await response.json();
  return result; // { message: '...', status: '...' }
};
