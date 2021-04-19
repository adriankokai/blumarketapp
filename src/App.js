import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Checkout as CheckoutPage} from './pages/Checkout';
import "materialize-css/dist/css/materialize.min.css";

export class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route exact path='/' component={CheckoutPage} />
                </Router>
            </div>
        )
    }
}

export default App
