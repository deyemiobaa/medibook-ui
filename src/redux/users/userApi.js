export const signin = async (baseURL, username, password) => {
  const response = await fetch(`${baseURL}/authenticate`,
    {
      method: 'POST',
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  const result = await response.json();
  return result; // { token: '...', role: '...', name: '...' }
};

export const signup = async (baseURL, username, password, confirmation) => {
  const response = await fetch(`${baseURL}/signup`,
    {
      method: 'POST',
      body: JSON.stringify({
        user: {
          username,
          password,
          password_confirmation: confirmation,
        },
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  const result = await response.json();
  return result; // { message: '...', status: '...' }
};
