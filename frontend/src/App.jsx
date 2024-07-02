import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../src/pages/HomePage';
import LoginPage from '../src/pages/LoginPage';
import UserPage from '../src/pages/UserPage';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

/*import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthForm from './features/auth/AuthForm';
import UserProfile from './features/user/UserProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AuthForm />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;*/