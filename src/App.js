import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navmenu from './component/nav';
import offre from './component/offre';
import Home from './component/home';
import entreprise from './component/entreprise';
import StickyFooter from './component/footer'
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";


export default class App extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navmenu></Navmenu>

          <Route path="/" exact component={Home} />
          <Route path="/offre" component={offre} />
          <Route path="/entreprise" component={entreprise} />
          <StickyFooter></StickyFooter>


        </BrowserRouter>

      </div>
    )
  }
}