const API_URL = "http://localhost:3001/api/v1/user/profile";

export const getUserProfileAPI = async ({ token }) => {
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
      return profileInformations;
    }
  } catch (error) {
    console.error('Erreur lors de la récupération du profil utilisateur :', error);
    throw error;
  }
};

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
