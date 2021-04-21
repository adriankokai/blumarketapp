import React, { Component } from 'react'
import Form from '../components/checkout/Form'
import Footer from '../components/footer/Footer'

export class Checkout extends Component {
    render() {
        return (
            <div>
                <Form />
                <Footer />
            </div>
        )
    }
}

export default Checkout
