const API_URL = "http://localhost:3001/api/v1/user/profile";

import { store } from '../store/store.js';
import { retrieveUserName } from '../store/store.js';

export const getUserProfileAPI = async (token) => {
  try {
    const response = await fetch(`${API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      }
    });
    const profileData = await response.json(); 
    console.log("Etat profileData :", profileData);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      const profileInformations = data.body.id;
      store.dispatch(retrieveUserName(profileInformations))
      console.log(profileInformations);
      return profileInformations;
    }

  } catch (error) { 
    console.error('Erreur connexion :', error);
    return null; 
  }
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
};