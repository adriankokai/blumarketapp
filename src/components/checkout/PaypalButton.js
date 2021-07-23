import React, { Component } from 'react'

export class PaypalButton extends Component {
    constructor(props){
        super(props);
        this.paypal = React.createRef();
    }

    componentDidMount = () => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: 'CAPTURE',
                    purchase_units: [{
                        reference_id: this.props.product.id,
                        description: this.props.product.name,

                        custom_id: this.props.product.id,
                        soft_descriptor: "Great description 1",
                        amount: {
                            currency_code: "USD",
                            value: this.props.total,
                            breakdown: {
                                item_total: {
                                    currency_code: "USD",
                                    value: this.props.total
                                }
                            }
                        },
                        items: [{
                            name: this.props.product.name,
                            description: this.props.color + ' ' + this.props.size + ' ' +
                                            this.props.design,
                            sku: "sku-0001",
                            unit_amount: {
                                currency_code: "USD",
                                value: this.props.product.price
                            },
                            quantity: this.props.qty
                        }]
                    }]
                })
            },
            onApprove: async(data, actions) => {
                const order = await actions.order.capture();
                console.log(order);
                this.props.toggleTxnCompleted()
            },
            onError: err => {
                console.log(err)
            }
        })
        .render(this.paypal.current);
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.props.txnCompleted ?

                    <p className="center">
                        <h3>Payment Completed!</h3>
                        <p>
                            thank you<br/>
                            <span>
                                your product will arrive in the next
                                3-5 working days.
                            </span>
                        </p>
                    </p>

                    :

                    <React.Fragment>
                        <p>
                            Choose a payment method and enter shipping address below:
                        </p>
                        <div ref={this.paypal}></div>
                    </React.Fragment>
                }
            </React.Fragment>
        )
    }
}

export default PaypalButton
