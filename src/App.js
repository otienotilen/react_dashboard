import { useState } from "react";
import "./App.css";
import Chart from "./components/charts/Chart";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Overview from './pages/Overview';
import Team from './pages/Team';
import Products from './pages/Overview';
import Apphome from './pages/Team';
import Sales from './pages/Sales';



const App = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    
    <div className="container">
     
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      
     <BrowserRouter>
          
         
        <Switch>
          
          <Route exact path="/" component={Main} />
          <Route path="/overview" component={Overview} />
          <Route exact path="/sales" component={Sales} />
          <Route exact path="/chart" component={Chart} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/signin" component={Overview} />
          <Route exact path="/a" component={Apphome} />
          
          <Route path="/products">
            <Products />
          </Route>
        </Switch>
      </BrowserRouter>
      
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default App;
