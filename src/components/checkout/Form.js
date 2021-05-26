import React, { Component } from 'react'
import { connect } from 'react-redux';
import Product from './Product';
import { placeOrder } from '../../store/actions/placeOrder'
import FormFields from './FormFields';
import PaypalButton from './PaypalButton';

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qty: 1,
            total: this.props.product.price,
            name: '',
            phone: '',
            email: '',
            address: '',
            city: '',
            postalCode: '',
            region: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.addQty = this.addQty.bind(this)
        this.subQty = this.subQty.bind(this)
        this.updateTotal = this.updateTotal.bind(this)
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    addQty = () => {
        this.setState(state => ({
            qty: state.qty + 1
        }))
        this.updateTotal()
    }

    subQty = () => {
        this.setState(state => ({
            qty: state.qty > 1 ? state.qty - 1 : 1
        }))
        this.updateTotal()
    }

    updateTotal = () => {
        this.setState(state => ({
            total: (this.props.product.price * state.qty).toFixed(2) 
        }))
    }

    handleSubmit = e => {
        e.preventDefault();
        const order = {
            product: this.props.product.id,
            qty: this.state.qty,
            customer_address: this.state.address,
            customer_city: this.state.city,
            customer_postal_code: this.state.postalCode,
            customer_region: this.state.region,
            customer_name: this.state.name,
            customer_phone: this.state.phone,
            customer_email: this.state.email
        }
        this.props.onPlaceOrder(order)
    }

    render() {
        return (
            <div className="container">
                {
                    (this.props.product !== null && this.props.product !== undefined) ?

                    <Product 
                        qty={this.state.qty}
                        total={this.state.total}
                        addQty={this.addQty}
                        subQty={this.subQty}
                        product={this.props.product} 
                    />

                    :

                    <span 
                        style={{width: '100%'}}
                        className="btn waves"
                    >
                        fetching order details...
                    </span>
                }
                
                <p>
                    Choose a payment method below:
                </p>
                
                {
                /*
                    <form onSubmit={this.handleSubmit} >
                    <FormFields 
                        name={this.state.name}
                        phone={this.state.phone}
                        email={this.state.email}
                        address={this.state.address}
                        city={this.state.city}
                        postalCode={this.state.postalCode}
                        region={this.state.region}
                        handleChange={this.handleChange}
                        placingOrder={this.props.placingOrder}
                    />
                    </form>
                **/
                }
                {
                    (this.props.product !== null && this.props.product !== undefined) ?

                    <PaypalButton 
                        total={this.state.total}
                        qty={this.state.qty}
                        product={this.props.product}
                    />

                    :

                    'fetching payment options...'
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        product: state.fetchProduct.product,
        placingOrder: state.placeOrder.loading ? true:false
    }
}

const mapDispatchProps = dispatch => {
    return {
        onPlaceOrder: order => dispatch(placeOrder(order))
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Form)
