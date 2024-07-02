/*const API_URL = "http://localhost:3001/api/v1/user";

export const getUserProfileAPI = async (token) => {
  const response = await fetch(`${API_URL}/profile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  });

  return handleResponse(response);
};

export const updateUserProfileAPI = async (token, user) => {
  const response = await fetch(`${API_URL}/profile`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(user),
  });

  return handleResponse(response);
};*/


/*const API_URL = "http://localhost:3001/api/v1/user";

export const getUserProfile = async (token) => {
  const response = await fetch(`${API_URL}/profile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  });

  return handleResponse(response);
};

export const updateUserProfile = async (token, user) => {
  const response = await fetch(`${API_URL}/profile`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(user),
  });

  return handleResponse(response);
};*/

/*export const getUserProfile = async (token) => {
  const response = await fetch('/api/profile', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const data = await response.json();
  return data;
};

export const updateUserProfile = async (token, userDetails) => {
  const response = await fetch('/api/profile', {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userDetails)
  });
  const data = await response.json();
  return data;
};*/