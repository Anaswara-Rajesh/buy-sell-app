import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Layout from './components/Layout';
import { Toaster } from 'react-hot-toast';
import ProfilePage from './pages/ProfilePage';
import EditProfile from './pages/EditProfile';
import UserLayout from './components/UserLayout';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Layout>
          <Toaster />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route element={<UserLayout />}>
              <Route path="/my-account" element={<ProfilePage />} />
              <Route path="/edit-profile" element={<EditProfile />} />
            </Route>
          </Routes>
        </Layout>
      </div>
    </Router>
  );
};

export default App;
