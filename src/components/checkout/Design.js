import React, { Component } from 'react'
import DesignModal from './DesignModal'

export class Design extends Component {
    render() {
        return (
            <tr>
                <td>design</td>
                <td>
                    <DesignModal 
                        design={this.props.design} 
                        changeDesign={this.props.changeDesign}
                    /> 
                </td>
            </tr>
        )
    }
}

export default Design
