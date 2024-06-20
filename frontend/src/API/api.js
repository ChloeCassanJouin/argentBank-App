export const getLoginUser = async (user) => {
  try {
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
      window.location.href = "../../index.html";
    }

    return data;

  } catch (error) {
    console.error('Error loading the JSON file_api.jsx:', error);
    return [];
  }
};
