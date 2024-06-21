export const getLoginUser = async (user) => {
  try {
    console.log("Starting getLoginUser with user:", user);

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
  console.log("Verifying user:", user);
  if (!user || !user.email || !user.password) {
    console.error("Invalid user object:", user);
    return false;
  }
};