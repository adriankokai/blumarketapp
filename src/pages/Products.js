import React, { Component } from 'react'
import { connect } from 'react-redux'
import Product from '../components/products/Product'
import { fetchProducts } from '../store/actions/fetchProducts'
import Footer from '../components/footer/Footer'

export class Products extends Component {
    componentDidMount() {
        this.props.onFetchProducts()
    }

    render() {
        return (
            <React.Fragment>
                <div className='row' >
                    {
                        Array.isArray(this.props.products) ?

                        this.props.products.map(product => (
                            <Product product={product} />
                        ))

                        :

                        'loading products...'
                    }
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.fetchProducts.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
