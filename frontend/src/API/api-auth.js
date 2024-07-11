const API_URL = "http://localhost:3001/api/v1/user/login";

import { store } from '../store/store.js';
import { retrieveToken } from '../store/store.js';

export const getLoginUser = async (user) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await response.json(); // Déclaration de data
    console.log("Etat data :", data);

    if (!response.ok) {
      showPopupAlert("Vos identifiants ne sont pas valides.");
      return;
    } else {
      const token = data.body.token;
      store.dispatch(retrieveToken(token));
      console.log(token);
      return token; 
      
    }
  } catch (error) { 
    console.error('Erreur connexion :', error);
    return null; 
  }
};

