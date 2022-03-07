import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
  <header className="header">
  <div className="header-block header-block-collapse d-lg-none d-xl-none">
    <button className="collapse-btn" id="sidebar-collapse-btn">
      <i className="fa fa-bars" />
    </button>
  </div>
  <div className="header-block header-block-search">
    <form role="search">
      <div className="input-container">
        <i className="fa fa-search" />
       
        <input type="search" placeholder="Search" />
        <div className="underline" />
      </div>
    </form>
  </div>
 
  <div className="header-block header-block-nav">
    <ul className="nav-profile">
      <li className="notifications new">
        <a href data-toggle="dropdown">
          <i className="fa fa-bell" />
          <sup>
            <span className="counter">8</span>
          </sup>
        </a>
        <div className="dropdown-menu notifications-dropdown-menu">
          <ul className="notifications-container">
            <li>
              <a href className="notification-item">
                <div className="img-col">
                  <div className="img" style={{backgroundImage: 'url("assets/faces/3.jpg")'}} />
                </div>
                <div className="body-col">
                  <p>
                    <span className="accent">Zack Alien</span> pushed new commit: <span className="accent">Fix page load performance issue</span>. </p>
                </div>
              </a>
            </li>
            <li>
              <a href className="notification-item">
                <div className="img-col">
                  <div className="img" style={{backgroundImage: 'url("assets/faces/5.jpg")'}} />
                </div>
                <div className="body-col">
                  <p>
                    <span className="accent">Amaya Hatsumi</span> started new task: <span className="accent">Dashboard UI design.</span>. </p>
                </div>
              </a>
            </li>
            <li>
              <a href className="notification-item">
                <div className="img-col">
                  <div className="img" style={{backgroundImage: 'url("assets/faces/8.jpg")'}} />
                </div>
                <div className="body-col">
                  <p>
                    <span className="accent">Andy Nouman</span> deployed new version of <span className="accent">NodeJS REST Api V3</span>
                  </p>
                </div>
              </a>
            </li>
          </ul>
          <footer>
            <ul>
              <li>
                <a href> View All </a>
              </li>
            </ul>
          </footer>
        </div>
      </li>
      <li className="profile dropdown">
        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
          <div className="img" style={{backgroundImage: 'url("https://avatars3.githubusercontent.com/u/3959008?v=3&s=40")'}}>
          </div>
          <span className="name"> John Doe </span>
        </a>
        <div className="dropdown-menu profile-dropdown-menu" aria-labelledby="dropdownMenu1">
          <a className="dropdown-item" href="#">
            <i className="fa fa-user icon" /> Profile </a>
          <a className="dropdown-item" href="#">
            <i className="fa fa-bell icon" /> Notifications </a>
          <a className="dropdown-item" href="#">
            <i className="fa fa-gear icon" /> Settings </a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="login.html">
            <i className="fa fa-power-off icon" /> Logout </a>
        </div>
      </li>
    </ul>
  </div>
</header>

  )
}

export default Navbar