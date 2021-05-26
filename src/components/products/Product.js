import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Product extends Component {
    render() {
        return (
            <div className='col s12 m6 l4'>
                <Link to={'/checkout/' + this.props.product.id} >
                    <div class="row">
                        <div class="col s12">
                            <div class="card">
                                <div class="card-image">
                                    <img src={this.props.product.thumbnail} />
                                    <span class="card-title ">{/*card title*/} </span>
                                </div>
                                <div class="card-content">
                                    <p className="black-text" >{this.props.product.name} </p>
                                </div>
                                <div class="card-action">
                                    <a href="#" className="btn waves" >Buy </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Product
