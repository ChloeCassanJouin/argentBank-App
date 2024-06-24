const API_URL = "http://localhost:3001/api/v1/user/login";
const UNAUTHORIZED_STATUS = 401;
const NOT_FOUND_STATUS = 404;

export const getLoginUser = async (user) => {
  try {
    const isValidUser = verifyUser(user);
    if (!isValidUser) {
      console.error("Échec vérification utilisateur :", user);
      return;
    }

    //mon appel vers l'API
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    console.log("Statut réponse :", response.status);

    // les vérifications si erreur 401 ou 404
    if (response.status === UNAUTHORIZED_STATUS || response.status === NOT_FOUND_STATUS) {
      showPopupAlert("Vos identifiants ne sont pas valides.");
      return;
    }

    const data = await response.json();
    console.log("Etat data :", data);

    if (data.token) {
      localStorage.setItem("token", data.token);
      window.location.href = "../src/pages/User.jsx";
      console.log("Token stocké :", data.token);
    } else {
      console.error("Token non récupéré :", data);
    }

    return data;

  } catch (error) {
    console.error('Erreur connexion :', error);
    return [];
  }
};

const verifyUser = (user) => {
  if (!user || !user.email || !user.password) {
    console.error("identifiant invalide :", user);
    return false;
  }
  return true;
};

// S'assurer que les éléments sont correctement sélectionnés
document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submit");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  if (submitButton && emailInput && passwordInput) {
    submitButton.addEventListener("click", function (event) {
      event.preventDefault();
      clearAlerts();
      const user = {
        email: emailInput.value,
        password: passwordInput.value,
      };
      getLoginUser(user);
    });
  } else {
    console.error("Éléments du formulaire non trouvés");
  }
});

/*export const getLoginUser = async (user) => {
  try {

    const recuperationValeurID = VerifID(user);
    if (!recuperationValeurID) {
      console.error("User verification failed:", user);
      return;
    }

    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    console.log("Response status:", response.status);

    if (response.status === 401 || response.status === 404) {
      showPopupAlert("Vos identifiants ne sont pas valides.");
      return;
    }

    const data = await response.json();
    console.log("Response data:", data);

    if (data.token) {
      localStorage.setItem("token", data.token);
      window.location.href = "../src/pages/User.jsx";
      console.log("Token stored:", data.token);
    } else {
      console.error("No token found in response:", data);
    }

    return data;

  } catch (error) {
    console.error('Error loading the JSON file_api.jsx:', error);
    return [];
  }
};

const VerifID = (user) => {
  if (!user || !user.email || !user.password) {
    console.error("Invalid user object:", user);
    return false;
  }
};

//récupération des valeurs email et password
submit.addEventListener("click", function (event) {
  event.preventDefault();
  clearAlerts();
  const user = {
    email: emailInput.value,
    password: passwordInput.value,
  };
  login(user);
});*/