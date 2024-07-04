import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../src/pages/HomePage';
import LoginPage from '../src/pages/LoginPage';
import UserPage from '../src/pages/UserPage';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import { store } from './store/store';
import { Provider } from 'react-redux';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<ProtectedRoute element={UserPage} />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
