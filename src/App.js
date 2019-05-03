import React, { Component } from 'react';
import { Switch, BrowserRouter, Route, browserHistory} from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './components/layouts/Home';
import Layout from './components/layouts/Layout';
import About from './components/layouts/About';
import store from './stores/store'
 
class App extends Component {
  render() {
    return (
        <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                </Layout>
            </Switch>
        </BrowserRouter>
        </Provider>
       );
  }
}

export default App;