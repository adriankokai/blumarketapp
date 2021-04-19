import React, { Component } from 'react'

export class Product extends Component {
    

    render() {
        return (
            <div>
                <img src={''} />
                <table className="responsive">
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

export default Product
