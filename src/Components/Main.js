import React, { Component } from 'react'
import Title from '../Components/Title'
import Search from './Search'
import DisplayProducts from '../Components/DisplayProducts'


class Main extends Component {
    constructor() {
        super()
        this.state = {
            products: [],
            DataisLoaded: false
        }
        this.Search = this.Search.bind(this)
    }

    /*   ComponentDidMount()
       {
           fetch("http://localhost:8080/getAllProducts")
           .then((res)=>res.json())
           .then((json)=>{
               this.setState({
                   products:json,
                   DataisLoaded:true
               });
           })
       }*/

    Search(enteredName) {
        //products: this.setState((state)=>{ this.state.products.filter(p=>p[productname]===enteredName)})
        fetch("http://localhost:8080/{" + { enteredName } + "}")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    products: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        return
        <div>
            <div> <Title title={"Fetch Details"} /> </div>
            <div> <Search onSearch={(addedProduct) => { this.Search(addedProduct) }} /></div>
            <div> <DisplayProducts products={this.state.products} /></div>

        </div>

    }


}
export default Main