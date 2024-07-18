const API_URL = "http://localhost:3001/api/v1/user/login";

export const getLoginUser = async (user) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error("Vos identifiants ne sont pas valides.");
    } else {
      const token = data.body.token;
      console.log("api-auth", token);
      return token;
    }
  } catch (error) {
    console.error('Erreur connexion :', error);
    throw error;
  }
};