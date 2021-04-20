import React, { Component } from 'react'

export class FormFields extends Component {
    render() {
        return (
            <React.Fragment>
                <input
                    type="text"
                    name="name"
                    value={this.props.name}
                    onChange={this.props.handleChange}
                    placeholder="full name"
                />
                <label htmlFor="name">full name</label>
            
                <input
                    type="text"
                    name="phone"
                    value={this.props.phone}
                    onChange={this.props.handleChange}
                    placeholder="phone"
                />
                <label htmlFor="phone">phone</label>

                <input
                    type="text"
                    name="email"
                    value={this.props.email}
                    onChange={this.props.handleChange}
                    placeholder="email"
                />
                <label for="email">email</label>
                
                <input
                    type="text"
                    name="address"
                    value={this.props.address}
                    onChange={this.props.handleChange}
                    placeholder="address"
                />
                <label htmlFor="address">address</label>


                <input
                    type="text"
                    name="city"
                    value={this.props.city}
                    onChange={this.props.handleChange}
                    placeholder="city"
                />
                <label htmlFor="city">city</label>

                <input
                    type="text"
                    name="postalCode"
                    value={this.props.postalCode}
                    onChange={this.props.handleChange}
                    placeholder="postal code"
                />
                <label htmlFor="postalCode">postal code</label>

                <input
                    type="text"
                    name="region"
                    value={this.props.region}
                    onChange={this.props.handleChange}
                    placeholder="region"
                />
                <label htmlFor="region">region</label><br /><br />

                {
                    this.props.placingOrder ?

                    <span 
                        style={{width: '100%'}} 
                        className="btn waves"
                    >
                        placing order...
                    </span>

                    :

                    <input 
                        style={{width: '100%'}}
                        type="submit"
                        className='btn waves' 
                    />
                    
                }
                <br /><br /><br />
            </React.Fragment>
        )
    }
}

export default FormFields
