/*ous pouvez utiliser le hook useSelector pour accéder à l'état du store et le hook useDispatch pour envoyer des actions au store.

javascript
Copier le code
// App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default App;*/