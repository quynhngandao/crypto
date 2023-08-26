import React from "react";
import Nav from "../Nav/Nav";
import Intro from "../pages/Intro";
import Gallery from "../pages/Gallery";
import Roadmap from "../pages/Roadmap";
import Faq from "../pages/Faq";
import '../app/App.css'
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
       <Router>
        <Nav/>
        <Switch>
          <Route path='/intro' exact ><Intro/></Route>
          <Route path='/roadmap'><Roadmap/></Route>
          <Route path='/gallery' ><Gallery/></Route>
          <Route path='/faq' ><Faq/></Route>
        </Switch>
      </Router> 
    </div>
  );
}








