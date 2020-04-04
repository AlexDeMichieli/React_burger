import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout'
import {Route, Switch} from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <div>
        <Switch>
            <Route path ='/' exact component={BurgerBuilder}/>
            <Route path ='/checkout' component={Checkout}/>
        </Switch>
      </div>
    );
  }
}

export default App;
