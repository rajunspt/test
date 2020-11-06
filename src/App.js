import React from 'react';
import {Switch, Route, Redirect,useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'popper.js';
import './styles/App.css';
import  Home  from './containers/home/Home'
import  UsersList  from './containers/users/usersList'
import  SlotBooking  from './containers/users/slotBooking'
import  Header  from './components/header/header';

function App() {
  const { pathname } = useLocation();  
  document.body.classList.remove("bg-blue");
  return (
      <div className="container-fluid">
          <Header />       
          <div>
              <Switch>                 
                  <Route exact path="/" component={UsersList} />
                  <Route path="/home" component={Home} />
                  <Route path="/users" component={UsersList} />
                  <Route path="/slotBooking/:id" component={SlotBooking} />
                  <Redirect from="*" to="/" />
              </Switch>
          </div>
      </div>
  );
}

export default App;
