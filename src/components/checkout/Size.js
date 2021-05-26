import React, { Component } from 'react'
import SizeModal from './SizeModal'

export class Size extends Component {
    render() {
        return (
            <tr>
                <td>size</td>
                <td>
                    <SizeModal 
                        size={this.props.size} 
                        changeSize={this.props.changeSize}
                    /> 
                </td>
            </tr>
        )
    }
}

export default Size
