const API_URL = "http://localhost:3001/api/v1/user/login";

export const getLoginUser = async (user) => {
  try {
    const isValidUser = verifyUser(user);
    if (!isValidUser) {
      console.error("Échec vérification utilisateur :", user);
      return;
    }

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      showPopupAlert("Vos identifiants ne sont pas valides.");
      return;
    }

    const data = await response.json(); // déclaration de DATA
    console.log("Etat data :", data);

    if (data.body.token) {
      localStorage.setItem("token", data.body.token);
    } else {
      console.error("Token non récupéré :", data);
    }

    return data;

  } catch (error) {
    console.error('Erreur connexion :', error);
    return [];
  }
};


//verifie si cases identifiant complétées
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
      const user = { // déclaration de USER
        email: emailInput.value,
        password: passwordInput.value,
      };
      getLoginUser(user, useNavigate());
    });
  } else {
    console.error("Éléments du formulaire non trouvés");
  }
});

//Apparition Pop Up
const showPopupAlert = (message) => {
  const alertContainer = document.getElementById("alert-container");
  if (alertContainer) {
    alertContainer.innerText = message;
    alertContainer.style.display = "block";
  } else {
    alert(message);
  }
};

//Suppression pop up
const clearAlerts = () => {
  const alertContainer = document.getElementById("alert-container");
  if (alertContainer) {
    alertContainer.innerText = "";
    alertContainer.style.display = "none";
  }
};