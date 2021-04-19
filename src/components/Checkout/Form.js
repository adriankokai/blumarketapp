import React, { Component } from 'react'
import { connect } from 'react-redux';
import Product from './Product';
import { fetchProduct } from '../../store/actions/fetchProduct'
import FormFields from './FormFields';

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qty: 1,
            total: 18.99,
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
            total: 18.99 * state.qty 
        }))
    }

    componentDidMount = () => {
        this.props.onFetchProduct()
    }

    render() {
        return (
            <div className="container">
                <Product 
                    qty={this.state.qty}
                    total={this.state.total}
                    addQty={this.addQty}
                    subQty={this.subQty}
                    product={this.props.product} 
                />
                <p>
                    Fill in the form below. We need your details for shipping purposes.
                </p>
                
                <FormFields 
                    name={this.state.name}
                    phone={this.state.phone}
                    email={this.state.email}
                    address={this.state.address}
                    city={this.state.city}
                    postalCode={this.state.postalCode}
                    region={this.state.region}
                    handleChange={this.handleChange}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        product: state.fetchProduct.product
    }
}

const mapDispatchProps = dispatch => {
    return {
        onFetchProduct: () => dispatch(fetchProduct())
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Form)
