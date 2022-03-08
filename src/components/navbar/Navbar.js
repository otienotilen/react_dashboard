import "./Navbar.css";
import "../main/Main.css";
import avatar from "../../assets/avatar.svg";
import {  Link } from 'react-router-dom';

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
       <Link to="/main"> <a style={{paddingLeft: "50px"}}>Botique Shop</a></Link>

        <div className="site-header__search" >
        <div className="search search--location--header search--suggestions-open">
          <div className="search__body">
            <form className="search__form" action>
              <input className="search__input"
               name="search" placeholder="Search for insights, sales, customer"
               aria-label="Site search" type="text" autoComplete="off" defaultValue />
               <button className="search__button search__button--type--submit" 
               type="submit">
                 <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20}>
                   <path
                    d="M19.2,17.8c0,0-0.2,0.5-0.5
                    ,0.8c-0.4,0.4-0.9,0.6-0.9,0.6s-0.9,0.7-2.8-1.6c-1.1-1.4-2.2-2.8-3.1-3.9C10.9
                    ,14.5,9.5,15,8,15 c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7c0,1.5-0.5,2.9-1.3
                    ,4c1.1,0.8,2.5,2,4,3.1C20,16.8,19.2,17.8,19.2,17.8z M8,3C5.2,3,3,5.2,3,8 c0
                    ,2.8,2.2,5,5,5c2.8,0,5-2.2,5-5C13,5.2,10.8,3,8,3z" /></svg>
                    </button>
                    <div className="search__border" />
                    </form><div className="suggestions suggestions--location--header search__suggestions">
                      <ul className="suggestions__list" /></div></div></div></div>
        
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

