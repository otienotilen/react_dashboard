import "./Sidebar.css";
import logo from "../../assets/sales icon.svg";
import am from "../../assets/logo.png";
import {  Link } from 'react-router-dom';

import {useState} from "react";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  const [isActive, setIsActive] = useState(false)
  const checkStatus = () =>{
    if(isActive){
      setIsActive(false)
    }else{
      setIsActive(true)
    }
  }
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={am} alt="logo" />
          <h1>BizMkononi</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="dropdown">
          <div className="dropdown-btn" onClick={e => checkStatus()}>
             <i className="fa fa-briefcase" aria-hidden="true"></i>
               Insights
            <span className="fa fa-caret-down"></span>
            </div>
            {isActive && (
            
             <div className="dropdown-content">
               
            <div className="dropdown-item">
             <a href ="/overview"> <p>. Overview</p></a>
            </div>
            
             <div className="dropdown-item">
              <a href="/sales"><p>. Sales Insights</p></a>
            </div>

             <div className="dropdown-item">
              <a href="/team"><p>. Customers Insights</p></a>
            </div>
             <div className="dropdown-item">
              <a href="/main"><p>. Chum Rate Insights</p></a>
            </div>
             <div className="dropdown-item">
              <a href="/a"><p>. Revenue Insights</p></a>
            </div>
               
          </div>
           )}
         </div>
         
        <div className="sidebar__link">
          <div className="dropdown">
          <div className="dropdown-btn" >
             <i className="fa fa-building-o" aria-hidden="true"></i>
               Business
            <span className="fa fa-caret-down"></span>
            </div>
            
         </div>
        </div>
       <hr></hr>
        <div className="sidebar__link">
        <h6>Section</h6> 
        </div>
        
        <div className="sidebar__link">
          <div className="dropdown">
          <div className="dropdown-btn">
             <i className="fa fa-question" aria-hidden="true"></i>
               Sales
            <span className="fa fa-caret-down"></span>
            </div>
           
         </div>
        </div>
        <div className="sidebar__link">
          <div className="dropdown">
          <div className="dropdown-btn" >
             <i className="fa fa-sign-out" aria-hidden="true"></i>
               Supplies
            <span className="fa fa-caret-down"></span>
            </div>
           
         </div>
        </div>
        <div className="sidebar__link">
          <div className="dropdown">
          <div className="dropdown-btn" >
             <i className="fa fa-group" aria-hidden="true"></i>
               Customers
            <span className="fa fa-caret-down"></span>
            </div>
           
         </div>
        </div>
        <div className="sidebar__link">
          <div className="dropdown">
          <div className="dropdown-btn" >
             <i className="fa fa-files-o" aria-hidden="true"></i>
               Suppliers
            <span className="fa fa-caret-down"></span>
            </div>
           
         </div>
        </div>
        
        <div className="sidebar__link">
          <div className="dropdown">
          <div className="dropdown-btn" >
             <i className="fa fa-money" aria-hidden="true"></i>
               Products
            <span className="fa fa-caret-down"></span>
            </div>
           
         </div>
        </div>
        <div className="sidebar__link">
          <div className="dropdown">
          <div className="dropdown-btn" >
             <i className="fa fa-briefcase" aria-hidden="true"></i>
               Employees
            <span className="fa fa-caret-down"></span>
            </div>
           
         </div>
        </div>
    
      </div>
    </div>
  );
};

export default Sidebar;
