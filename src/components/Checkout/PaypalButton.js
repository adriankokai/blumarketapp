import React, { Component } from 'react'

export class PaypalButton extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="smart-button-container">
                    <div style={{textAlign: 'center'}}>
                        <div id="paypal-button-container"></div>
                    </div>
                </div>              
            </React.Fragment>
        )
    }
}

export default PaypalButton
