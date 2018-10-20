import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import UpdateContact from './components/contacts/UpdateContact';
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import { Provider } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
    render() {
        return (
          <Provider>
            <Router>
              <div className="App">
                  <Header branding="Contact Manager" />
                  <div className="container">
                    <Switch>
                    <Route path="/" exact component={Contacts} />
                    <Route path="/contact/add" exact component={AddContact} />
                    <Route path="/contact/edit/:id" component={UpdateContact} />
                    <Route path="/about" component={About} />
                    <Route component={NotFound} />
                    </Switch>
                  </div>
              </div>
            </Router>
          </Provider>
        );
    }
}

export default App;
