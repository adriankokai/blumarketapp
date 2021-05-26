import React, { Component } from 'react'
import ColorModal from './ColorModal'

export class Color extends Component {
    render() {
        return (
            <tr>
                <td>color</td>
                <td>
                    <ColorModal 
                        color={this.props.color} 
                        changeColor={this.props.changeColor}
                    /> 
                </td>
            </tr>
        )
    }
}

export default Color
