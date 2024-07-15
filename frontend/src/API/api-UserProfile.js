import { retrieveProfile } from '../redux/userSlice';


const API_URL = "http://localhost:3001/api/v1/user/profile";

export const getUserProfileAPI = async ({ token }, dispatch) => {
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Une erreur est survenue lors de la récupération du profil.");
    }

    const data = await response.json();
    console.log('data.body:', data.body);
    dispatch(retrieveProfile(data.body)); 
    return data.body;
  } catch (error) {
    console.error('Erreur lors de la récupération du profil utilisateur :', error);
    throw error;
  }
};



/*import { retrieveProfile } from '../redux/userSlice';


const API_URL = "http://localhost:3001/api/v1/user/profile";

// Fonction pour récupérer le profil utilisateur
export const getUserProfileAPI = async ({ token }, dispatch) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Une erreur est survenue lors de la récupération du profil.");
    }

    const data = await response.json();
    console.log('data.body:', data.body);
    dispatch(retrieveProfile(data.body)); 
    return data.body; // Assurez-vous que `data.body` contient les données du profil utilisateur
  } catch (error) {
    console.error('Erreur lors de la récupération du profil utilisateur :', error);
    throw error; // Propager l'erreur pour la gérer dans le composant
  }
};*/







// Fonction pour mettre à jour le profil utilisateur
/*export const updateUserProfileAPI = async ({ user, token }) => {
  if (!token) {
    console.error('No token provided');
    return null;
  }

  try {
    const response = await fetch(`${API_URL}`, {
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
};*/


/*import { retrieveToken } from '../redux/userSlice';

const API_URL = "http://localhost:3001/api/v1/user/profile";

export const getUserProfileAPI = async (user, dispatch) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await response.json(); // Déclaration de data

    if (!response.ok) {
      console.error("Vos identifiants ne sont pas valides.");
      return null;  // Retourner null en cas d'erreur
    } else {
      const token = data.body.token;
      dispatch(retrieveToken(token));  // Passer dispatch en paramètre
      return token;
    }
  } catch (error) { 
    console.error('Erreur connexion :', error);
    return null;  // Retourner null en cas d'erreur
  }
};

export const updateUserProfileAPI = async (user) => {
  const state = store.getState();
  const token = state.token.value;

  if (!token) {
    console.error('No token found in store');
    return null;
  }

  try{
    const response = await fetch(`${API_URL}`, {
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
    const updatedUserName = updatedProfileData.body.userName;
    store.dispatch(retrieveUserName(updatedUserName));
    console.log(updateUserName)
    return updatedProfileData.body;
  } else {
    throw new Error("Invalid updated profile data structure");
  }

} catch (error) {
  console.error('Error updating profile:', error);
  return null;
}
};*/

