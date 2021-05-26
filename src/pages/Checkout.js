import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from '../components/checkout/Form'
import Footer from '../components/footer/Footer'
import {fetchProduct} from '../store/actions/fetchProduct'

export class Checkout extends Component {
     
    componentDidMount = () => {
        const productId = this.props.match.params.id
        this.props.onFetchProduct(productId)
    }

    render() {
        return (
            <div>
                {
                    (this.props.product !== null && this.props.product !== undefined) ?

                    <Form product={this.props.product} />

                    :

                    'loading product...'
                }
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        product: state.fetchProduct.product,
    }
}

const mapDispatchProps = dispatch => {
    return {
        onFetchProduct: id => dispatch(fetchProduct(id)),
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Checkout)
