import React, { Component } from 'react'

class DisplayProducts extends Component {
    render() {
        return
        <div>
            <div>Name : {this.props.products.productname}</div>
            <div>Short Description : {this.props.products.shortdescription}</div>
        </div>

    }
}

export default DisplayProducts