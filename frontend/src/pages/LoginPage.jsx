import React, { useState, useEffect } from 'react';
import LoginContent from '../components/LoginContent';
import { getLoginUser } from '../API/api-auth';
//import { useNavigate } from "react-router-dom";




export default function LoginPage() {
  const [data, setData] = useState([]); 
  const token = getLoginUser();
  //const navigate = useNavigate();

  useEffect(() => { 
    /*if(data.body.token) {
      submitButton.addEventListener("click", function (event) {
        navigate("src/pages/UserPage.jsx")
      })
    }*/
    async function fetchApiData() {
      try {
        const ApiData = await getLoginUser();
        setData(ApiData);
      } catch (error) {
        console.error('Error fetching login user data:', error); 
      }
    }

    fetchApiData();
  }, []); 



  return (
    <>   
      <LoginContent data={data} />
    </>
  );
}