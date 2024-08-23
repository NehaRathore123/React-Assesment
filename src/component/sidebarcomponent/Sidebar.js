import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FeedbackIcon from '@mui/icons-material/Feedback';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WorkIcon from '@mui/icons-material/Work';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ReportIcon from '@mui/icons-material/Assessment';
import MoneyIcon from '@mui/icons-material/MonetizationOn';
import CategoryIcon from '@mui/icons-material/Category';
import SettingsIcon from '@mui/icons-material/Settings';
import GridViewIcon from '@mui/icons-material/GridView';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import LogoutIcon from '@mui/icons-material/Logout';
import './sidebar.css'

import { useState,useEffect } from 'react';
import axios from 'axios';
import { faDisplay } from '@fortawesome/free-solid-svg-icons';
import { blue } from '@mui/material/colors';
const Sidebar = () => {
 
 const [userDetails,setUserDetails] =useState([])
  useEffect(()=>{
    axios.get("https://65682d079927836bd9742fb2.mockapi.io/list").then((response)=>{
      setUserDetails(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  })

  
 
  const menuItems = [
    { icon1: <GridViewIcon/> ,text: 'Dashboard', icon: <DashboardIcon /> },
    { icon1: <Inventory2Icon/>, text: 'Feedbacks',icon: <FeedbackIcon /> },
    { icon1: <PeopleOutlineRoundedIcon/>,text: 'Leaves',icon: <TimeToLeaveIcon /> },
    { icon1:<CalendarTodayIcon />, text: 'Attendance', icon: <CalendarTodayIcon /> },
    { icon1:<AccessTimeIcon/>, text: 'Daily Timesheet', icon: <AccessTimeIcon /> },
    {  text: 'Work Log', icon: <WorkIcon /> },
    { icon1:<CurrencyExchangeIcon/>, text: 'Reimbursements', icon: <ReceiptIcon /> },
    {icon1:<ContactMailIcon/>,  text: 'Reports', icon: <ReportIcon /> },
    { icon1:<AddBusinessIcon/>, text: 'My Expenses', icon: <MoneyIcon /> },
    { text: 'Income', icon: <MoneyIcon /> },
    { text: 'Categories', icon: <CategoryIcon /> },
    { text: 'Settings', icon: <SettingsIcon /> },
    { icon1:<LogoutIcon/>}
  ];

  return ( 
    <div style={{ width: 250 ,display:'flex'}}>
      <div className='Left-section'>
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{item.icon1}</ListItemIcon>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      </div>
      <div className='Right-section'>
      <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>age</th>
                       
                        
                    </tr>
                </thead>
               {
            
                userDetails.map((row)=>(
                <tr>
                    <td>{row._userId}</td>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td>{row.age}</td>
      </tr>

                ))
               }
            </table>
      </div>
    
    </div>
    
  );
};

export default Sidebar;
