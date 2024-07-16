import { retrieveProfile } from '../redux/userSlice';


const API_URL = "http://localhost:3001/api/v1/user/profile";

export const getUserProfileAPI = async ({ token }, dispatch) => {
  if (!token) {
    console.error('No token provided');
    return null;
  }

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error("Une erreur est survenue lors de la récupération du profil.");
    } else {
      const profileInformations = data.body;
      console.log('api-UserProfile', profileInformations);
    dispatch(retrieveProfile(profileInformations)); 
    return profileInformations;
    }
  } catch (error) {
    console.error('Erreur lors de la récupération du profil utilisateur :', error);
    throw error;
  }
};



// Fonction pour mettre à jour le profil utilisateur
export const updateUserProfileAPI = async ({ user, token }) => {
  if (!token) {
    console.error('No token provided');
    return null;
  }

  try {
    const response = await fetch(API_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } 

    const updatedProfileData = await response.json();
    console.log("Updated profile data:", updatedProfileData);

    if (updatedProfileData && updatedProfileData.body) {
      return updatedProfileData.body;
    } else {
      throw new Error("Invalid updated profile data structure");
    }

  } catch (error) {
    console.error('Error updating profile:', error);
    return null;
  }
};
