import React, {Suspense, lazy} from 'react';
import './assets/styles/app.scss'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/home'
import State from "react-bootstrap/es/Alert";

//-----------------------------------------------

const Hats = () =>(<h1>page hats</h1>)
export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/hats' component={Hats}/>

    </Switch>
  </BrowserRouter>
);
