import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import Layout from './components/Layout/Layout'
import NotFound from './components/ErrorPages/NotFound/NotFound'
import InternalServer from './components/ErrorPages/InternalServer/InternalServer'


import './App.css';

class App extends Component {

  render() {
    return (

      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/500" component={InternalServer} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>

    );
  }
}

export default App;
