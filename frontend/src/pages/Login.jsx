import React, { useState, useEffect } from 'react';
import Login from '../components/LoginContent';
import { getLoginUser } from '../API/api-auth';

export default function LoginPage() {
  const [data, setData] = useState([]); 
  // useState: Permet de gérer l'état local des composants fonctionnels. Exemple d'utilisation : gestion de la visibilité des éléments, stockage des données récupérées, etc.

  useEffect(() => { // useEffect: Utilisé pour les effets de bord, comme les appels API ou les mises à jour du DOM. Exemple d'utilisation : récupération des données lors du montage du composant, nettoyage d'effets de bord lors du démontage du composant.
    async function fetchApiData() {
      try {
        const ApiData = await getLoginUser();
        setData(ApiData);
      } catch (error) {
        console.error('Error fetching API data:', error);
      }
    }
    fetchApiData();
  }, []);

    return (
      <>   
        <Login data={data} />
      </>
    );
  }