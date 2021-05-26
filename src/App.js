import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Checkout from './pages/Checkout';
import Products from './pages/Products';
import "materialize-css/dist/css/materialize.min.css";

export class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route exact path='/' component={Products} />
                    <Route exact path='/checkout/:id' component={Checkout} />
                </Router>
            </div>
        )
    }
}

export default App
