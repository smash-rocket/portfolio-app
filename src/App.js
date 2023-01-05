import React from 'react';
import LandingPage from './LandingPage';
import SideBar from './SideBar';
import './App.css';

export default function App() {
  return (
    <div className="app_content">
      <SideBar />
      <LandingPage />
    </div>
  );
}
