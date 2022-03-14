import "./Navbar.css";
import "../main/Main.css";
import "../../pages/Team.css";

import {  Link } from 'react-router-dom';

import React, { useState, useEffect } from "react";
import SearchIcon from "../../pages/search.svg";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";


const Navbar = ({ sidebarOpen, openSidebar }) => {
   const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
   
   useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <nav className="navBar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
        <a style={{ marginLeft: "30px"}}>Botique Shop</a>

         <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for insights , sales,"
        /> 
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      </div>
      <div className="navbar__right">
        <a >
          <i className="fa fa-bell" aria-hidden="true"></i>
        </a>
        <a>
          <i className="fa fa-clock-o" aria-hidden="true"></i>
        </a>
        {/* <a href="#!">
          <img width="30" src={avatar} alt="avatar" />
        </a> */}
        <div className="jss13">
          <div className="headerProfile jss124">
            <button className="MuiButtonBase-root MuiIconButton-root jss125
             MuiIconButton-colorInherit MuiIconButton-edgeStart" 
             tabIndex={0} type="button" aria-label="Search"
              aria-controls="simple-menu" aria-haspopup="true">
                <span className="MuiIconButton-label">
                  <div className="MuiAvatar-root MuiAvatar-circle jss126">
                    <img alt="Gevorg" src="https://avatars3.githubusercontent.com/u/3959008?v=3&s=40"
                     className="MuiAvatar-img" />
                  </div>
                <span className="jss127">Joe Doe
                </span>
                <svg className="MuiSvgIcon-root" focusable="false"
                 viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10l5 5 5-5z" />
                 </svg>
                 </span>
                 <span className="MuiTouchRipple-root" />
             </button>
           </div>
         </div>

      </div>
    </nav>
  );
};

export default Navbar;

