import React from 'react';
import ContentArea from './ContentArea';
import SideBar from './SideBar';

import './App.css';

export default function App() {
  return (
    <div className="app__content">
      <SideBar />
      <ContentArea />
    </div>
  );
}
