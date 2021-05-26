import React, { Component } from 'react'

export class Product extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <img style={photoStyles} src={this.props.product.thumbnail} />
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
                        <td>{this.props.product.price} </td>
                    </tr>
                    <tr>
                        <td>Qty</td>
                        <td>
                            <span className='btn' onClick={this.props.subQty} >
                                <i className='material-icons'>remove</i>
                            </span>
                            {' ' + this.props.qty + ' '}
                            <span className='btn' onClick={this.props.addQty} >
                                <i className='material-icons'>add</i>
                            </span>
                        </td>
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
