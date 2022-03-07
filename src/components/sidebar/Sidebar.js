import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
   <aside className="sidebar">
  <div className="sidebar-container">
    <div className="sidebar-header">
      <div className="brand">
        <div className="logo">
          <span className="l l1" />
          <span className="l l2" />
          <span className="l l3" />
          <span className="l l4" />
          <span className="l l5" />
        </div> BizMkononi
      </div>
    </div>
    <nav className="menu">
      <ul className="sidebar-menu metismenu" id="sidebar-menu">
        <li className="active">
          <a href="index.html">
            <i className="fa fa-home" /> Dashboard </a>
        </li>
        <li>
          <a href>
            <i className="fa fa-th-large" /> Items Manager <i className="fa arrow" />
          </a>
          <ul className="sidebar-nav collapse">
            <li>
              <a href="items-list.html"> Items List </a>
            </li>
            <li>
              <a href="item-editor.html"> Item Editor </a>
            </li>
          </ul>
        </li>
        <li>
          <a href>
            <i className="fa fa-area-chart" /> Charts <i className="fa arrow" />
          </a>
          <ul className="sidebar-nav collapse">
            <li>
              <a href="charts-flot.html"> Flot Charts </a>
            </li>
            <li>
              <a href="charts-morris.html"> Morris Charts </a>
            </li>
          </ul>
        </li>
        <li>
          <a href>
            <i className="fa fa-table" /> Tables <i className="fa arrow" />
          </a>
          <ul className="sidebar-nav collapse">
            <li>
              <a href="static-tables.html"> Static Tables </a>
            </li>
            <li>
              <a href="responsive-tables.html"> Responsive Tables </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="forms.html">
            <i className="fa fa-pencil-square-o" /> Forms </a>
        </li>
        <li>
          <a href>
            <i className="fa fa-desktop" /> UI Elements <i className="fa arrow" />
          </a>
          <ul className="sidebar-nav collapse">
            <li>
              <a href="buttons.html"> Buttons </a>
            </li>
            <li>
              <a href="cards.html"> Cards </a>
            </li>
            <li>
              <a href="typography.html"> Typography </a>
            </li>
            <li>
              <a href="icons.html"> Icons </a>
            </li>
            <li>
              <a href="grid.html"> Grid </a>
            </li>
          </ul>
        </li>
        <li>
          <a href>
            <i className="fa fa-file-text-o" /> Pages <i className="fa arrow" />
          </a>
          <ul className="sidebar-nav collapse">
            <li>
              <a href="login.html"> Login </a>
            </li>
            <li>
              <a href="signup.html"> Sign Up </a>
            </li>
            <li>
              <a href="reset.html"> Reset </a>
            </li>
            <li>
              <a href="error-404.html"> Error 404 App </a>
            </li>
            <li>
              <a href="error-404-alt.html"> Error 404 Global </a>
            </li>
            <li>
              <a href="error-500.html"> Error 500 App </a>
            </li>
            <li>
              <a href="error-500-alt.html"> Error 500 Global </a>
            </li>
          </ul>
        </li>
        <li>
          <a href>
            <i className="fa fa-sitemap" /> Menu Levels <i className="fa arrow" />
          </a>
          <ul className="sidebar-nav collapse">
            <li>
              <a href="#"> Second Level Item <i className="fa arrow" />
              </a>
              <ul className="sidebar-nav collapse">
                <li>
                  <a href="#"> Third Level Item </a>
                </li>
                <li>
                  <a href="#"> Third Level Item </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#"> Second Level Item </a>
            </li>
            <li>
              <a href="#"> Second Level Item <i className="fa arrow" />
              </a>
              <ul className="sidebar-nav collapse">
                <li>
                  <a href="#"> Third Level Item </a>
                </li>
                <li>
                  <a href="#"> Third Level Item </a>
                </li>
                <li>
                  <a href="#"> Third Level Item <i className="fa arrow" />
                  </a>
                  <ul className="sidebar-nav collapse">
                    <li>
                      <a href="#"> Fourth Level Item </a>
                    </li>
                    <li>
                      <a href="#"> Fourth Level Item </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="screenful.html">
            <i className="fa fa-bar-chart" /> Agile Metrics <span className="label label-screenful">by Screenful</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/modularcode/modular-admin-html">
            <i className="fa fa-github-alt" /> Theme Docs </a>
        </li>
      </ul>
    </nav>
  </div>
  <footer className="sidebar-footer">
    <ul className="sidebar-menu metismenu" id="customize-menu">
      <li>
        <ul className="collapse">
          <li className="customize">
            <div className="customize-item">
              <div className="row customize-header">
                <div className="col-4">
                </div>
                <div className="col-4">
                  <label className="title">fixed</label>
                </div>
                <div className="col-4">
                  <label className="title">static</label>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <label className="title">Sidebar:</label>
                </div>
                <div className="col-4">
                  <label>
                    <input className="radio" type="radio" name="sidebarPosition" defaultValue="sidebar-fixed" />
                    <span />
                  </label>
                </div>
                <div className="col-4">
                  <label>
                    <input className="radio" type="radio" name="sidebarPosition" defaultValue />
                    <span />
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <label className="title">Header:</label>
                </div>
                <div className="col-4">
                  <label>
                    <input className="radio" type="radio" name="headerPosition" defaultValue="header-fixed" />
                    <span />
                  </label>
                </div>
                <div className="col-4">
                  <label>
                    <input className="radio" type="radio" name="headerPosition" defaultValue />
                    <span />
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <label className="title">Footer:</label>
                </div>
                <div className="col-4">
                  <label>
                    <input className="radio" type="radio" name="footerPosition" defaultValue="footer-fixed" />
                    <span />
                  </label>
                </div>
                <div className="col-4">
                  <label>
                    <input className="radio" type="radio" name="footerPosition" defaultValue />
                    <span />
                  </label>
                </div>
              </div>
            </div>
            <div className="customize-item">
              <ul className="customize-colors">
                <li>
                  <span className="color-item color-red" data-theme="red" />
                </li>
                <li>
                  <span className="color-item color-orange" data-theme="orange" />
                </li>
                <li>
                  <span className="color-item color-green" data-theme />
                </li>
                <li>
                  <span className="color-item color-seagreen" data-theme="seagreen" />
                </li>
                <li>
                  <span className="color-item color-blue active" data-theme="blue" />
                </li>
                <li>
                  <span className="color-item color-purple" data-theme="purple" />
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <a href>
          <i className="fa fa-cog" /> Customize </a>
      </li>
    </ul>
  </footer>
</aside>

  )
}

export default Sidebar