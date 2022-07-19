import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';

class Http6 extends React.Component {


    constructor(props) {
        super();

        this.state = {
            productid: '',

        };
        //    console.log(this.props.attr1);

        this.getInfo = this.getInfo.bind(this);
        this.test1 = this.test1.bind(this);
        this.getremote1 = this.getremote1.bind(this);

        this.changehandler1 = this.changehandler1.bind(this);
        //this.changehandler2 = this.changehandler2.bind(this);
    }

    changehandler1(e) {



        if (e.target.name === "Productid") {
            console.log(e.target.value);
            this.setState({ productid: e.target.value });
        }



        //this.setState({name:e.target.value});
    }
    test1(e) {

        this.getInfo();
        this.getremote1();
    }
    getremote1 = (event) => {



        axios.get('http://localhost:8080/e-auction/api/v1/seller/show-bids/' + this.state.productid)
            .then(response => {
                console.log(response);

            })
            .catch(error => {
                console.log(error);
            })
    }



    getInfo = (e) => {

        console.log('inside getinfo')

        const myInit1 = {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*',
                'Vary': 'Origin'

            },

        };


        let finalurl = 'http://localhost:8080/e-auction/api/v1/seller/show-bids/' + this.state.productid;
        fetch(finalurl, myInit1)
            .then((response) => {
                console.log(response.text());
                console.log(response.data);

            })
            .then(function (myJson) {
                console.log(myJson);
            })
            .catch((error) => console.error(error));

    }
    render() {

        return (
            <div className="App">
                <p> List Bids</p>
                Product Id : <input type="text" name="Productid" value={this.state.productid} onChange={this.changehandler1} /><br />

                <br /> <button type="button" onClick={this.test1}>Submit </button>

            </div>
        );
    }
}
export default Http6;