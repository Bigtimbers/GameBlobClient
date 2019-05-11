import React, { Component } from 'react';
import Home from './Home/Home'

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
