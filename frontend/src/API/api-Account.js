export async function getAccounts() {
    const token = 'votre_token_bearer_ici';
    try {
      const response = await fetch('http://localhost:3001/api/v1/accounts', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log('Comptes :', data);
      return data; // Retourner les données
    } catch (error) {
      console.error('Erreur lors de la récupération des comptes :', error);
    }
  }
  
  export async function getAccountDetails(accountId) {
    const token = 'votre_token_bearer_ici';
    try {
      const response = await fetch(`http://localhost:3001/api/v1/accounts/${accountId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log('Détails du compte :', data);
      return data; // Retourner les données
    } catch (error) {
      console.error('Erreur lors de la récupération des détails du compte :', error);
    }
  }
  
  export async function getAccountTransactions(accountId) {
    const token = 'votre_token_bearer_ici';
    try {
      const response = await fetch(`http://localhost:3001/api/v1/accounts/${accountId}/transactions`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log('Transactions du compte :', data);
      return data; // Retourner les données
    } catch (error) {
      console.error('Erreur lors de la récupération des transactions :', error);
    }
  }
  
  export async function getTransactionDetails(transactionId) {
    const token = 'votre_token_bearer_ici';
    try {
      const response = await fetch(`http://localhost:3001/api/v1/transactions/${transactionId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log('Détails de la transaction :', data);
      return data; // Retourner les données
    } catch (error) {
      console.error('Erreur lors de la récupération des détails de la transaction :', error);
    }
  }
  
  export async function updateTransaction(transactionId, category, notes) {
    const token = 'votre_token_bearer_ici';
    try {
      const response = await fetch(`http://localhost:3001/api/v1/transactions/${transactionId}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ category, notes })
      });
      const data = await response.json();
      console.log('Réponse de mise à jour de la transaction :', data);
      return data; // Retourner les données
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la transaction :', error);
    }
  }