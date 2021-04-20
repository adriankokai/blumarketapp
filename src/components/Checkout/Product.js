import React, { Component } from 'react'

export class Product extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <img style={photoStyles} src={this.props.product.product_images[0].photo} />
                <table className="responsive">
                    <tr>
                        <td>Item</td>
                        <td>
                            {
                                this.props.product.name    
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td>USD13.00</td>
                    </tr>
                    <tr>
                        <td>Shipping</td>
                        <td>5.00</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>USD{this.props.total} </td>
                    </tr>
                </table>
            </div>
        )
    }
}

const photoStyles = {
    width: '100%'
}

const qtyStyles = {
    cursor: 'default'
}

export default Product
