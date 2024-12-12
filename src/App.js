import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Layout from './components/Layout';
import { Toaster } from 'react-hot-toast';
import ProfilePage from './pages/ProfilePage';
import EditProfile from './pages/EditProfile';
import UserLayout from './components/UserLayout';
import PostAdPage from './pages/PostAdPage';
import AdsPage from './pages/AdsPage';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Layout>
          <Toaster />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route element={<UserLayout />}>
              <Route path="/my-account" element={<ProfilePage />} />
              <Route path="/edit-profile" element={<EditProfile />} />
              <Route path="/add-post" element={<PostAdPage />} />
              <Route path='/ads' element={<AdsPage />} />
            </Route>
          </Routes>
        </Layout>
      </div>
    </Router>
  );
};

export default App;
