const API_URL = "http://localhost:3001/api/v1/user/login";

import { retrieveToken } from '../redux/userSlice';

export const getLoginUser = async (user, dispatch) => {
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
      showPopupAlert("Vos identifiants ne sont pas valides.");
      return null;
    } else {
      const token = data.body.token;
      dispatch(retrieveToken(token));  // Passer dispatch en paramètre
      console.log("api-auth", token)
      return token;
    }
  } catch (error) { 
    console.error('Erreur connexion :', error);
    return null; 
  }
};

