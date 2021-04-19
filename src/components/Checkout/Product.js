import React, { Component } from 'react'

export class Product extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                {
                    (this.props.product !== null && this.props.product !== undefined) ?

                    <img style={photoStyles} src={this.props.product.product_images[0].photo} />

                    :

                    <h1>no image</h1>
                }
                <table className="responsive">
                    <tr>
                        <td>Item</td>
                        <td>{this.props.product.name} </td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td>USD18.99</td>
                    </tr>
                    <tr>
                        <td>Qty</td>
                        <td>
                            <i className="material-icons" onClick={this.props.subQty} >remove</i>
                            <span className="btn" >{this.props.qty} </span>
                            <i className="material-icons" onClick={this.props.addQty} >add</i>
                        </td>
                    </tr>
                    <tr>
                        <td>Shipping</td>
                        <td>0</td>
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

export default Product
