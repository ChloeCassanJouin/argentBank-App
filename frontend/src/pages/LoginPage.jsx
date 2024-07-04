import React, { useState } from 'react';
import LoginContent from '../components/LoginContent';


export default function LoginPage() {

  return (
    <>   
      <LoginContent />
    </>
  );
}


  /*const token = getLoginUser();


  useEffect(() => { 

    async function fetchApiData() {
      try {
        const ApiData = await getLoginUser();
        setData(ApiData);
      } catch (error) {
        console.error('Error fetching login user data:', error); 
      }
    }

    fetchApiData();
  }, []); */
