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