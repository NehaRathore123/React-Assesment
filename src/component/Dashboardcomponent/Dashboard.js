import React from 'react';
import Sidebar from '../sidebarcomponent/Sidebar';
import Header from '../Topbarcomponent/TopBar';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
     
      <div style={{ flexGrow: 1 }}>
        <Header />
        <div style={{ padding: 20 }}>
        <Sidebar/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
