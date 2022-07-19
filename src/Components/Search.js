import React, { Component } from 'react'

class Search extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault();
        const p_Name = event.target.elements.p_Name.value();
        this.props.onSearch(p_Name)
    }
    render() {
        return <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Enter Product" name="p_Name"></input>
                <button>Search</button>
            </form>
        </div>
    }
}
export default Search