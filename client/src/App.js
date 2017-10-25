import React, { Component } from 'react';
import LoginRegisterPanel from "./components/landingPage/Login-RegisterPanel/login-registerPanel/login-registerPanel";
import Logo from "./components/landingPage/logo/logo";
import About from "./components/landingPage/about/about";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';


class App extends Component {
  render() {
    return (
      <Router>  
        <div>
        <Route exact={true} path="/" component={Logo}/>
        <div className="Buttons">
          <Route exact={true} path="/" component={LoginRegisterPanel}/> 
       
        </div>
      
         <div>
           <Route exact={true} path="/" component={About} />
           <Route exact={true} path="/dashboard" component={Dashboard} />
         </div>
         </div>
        </Router>
        );
    }
}


export default App;
