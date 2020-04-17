import React, { useState, useCallback } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navmenu from './component/nav';
import offre from './component/offre';
import Home from './component/home';
import entreprise from './component/entreprise';
import LoginEntreprise from './component/entreprise/loginregister';
import StickyFooter from './component/footer'
import { BrowserRouter, Link, Route, Switch,Redirect } from "react-router-dom";
import { Authcontext } from './component/context/auth-context';


export default function App() {

  const [isloggedin, setisloggedin] = useState(false);

  const login = useCallback(() => {
    setisloggedin(true);
  }, []);

  const logout = useCallback(() => {
    setisloggedin(false);
  }, []);

  let routes;
  if (isloggedin) {
    routes = (
    <React.Fragment>
      <Route path="/" exact component={Home} />
      <Route path="/offre" component={offre} />
      <Route path="/entreprise" component={entreprise} />
      <Redirect to="/"/> 

    </React.Fragment>)
  } else {
    routes = (
      <React.Fragment>
      <Route path="/" exact component={Home} />
      <Route path="/offre" component={offre} />
      <Route path="/entreprise" component={entreprise} />
      <Route path="/entrepriselogin" component={LoginEntreprise} />

    </React.Fragment>
    )
  }


  return (
    <div>
      <Authcontext.Provider value={{ isLoggedIn: isloggedin, login: login, logout: logout }}>
        <BrowserRouter>
          <Navmenu></Navmenu>
          

         {routes}
          <StickyFooter></StickyFooter>


        </BrowserRouter>
      </Authcontext.Provider>

    </div>
  )

}