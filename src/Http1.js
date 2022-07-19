import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';

class Http1 extends React.Component {


    constructor(props) {
        super();
        //    console.log(this.props.attr1);
        this.test1 = this.test1.bind(this);
        this.getremote1 = this.getremote1.bind(this);
        this.getInfo = this.getInfo.bind(this);
    }

    test1(e) {

        this.getInfo();
        this.getremote1();
    }
    getremote1 = (event) => {



        axios.get('http://localhost:8080/hello')
            .then(response => {
                console.log(response);
                document.write(response);

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


        let finalurl = 'http://localhost:8080/hello';
        fetch(finalurl, myInit1)
            .then((response) => {
                console.log(response.text());
                return response.data;
            })
            .then(function (myJson) {
                console.log(myJson);
            })
            .catch((error) => console.error(error));

    }


    render() {

        return (
            <div className="App">
                <p> Click to test http call</p>
                <br /> <button type="button" onClick={this.test1}>Click Me! </button>

            </div>
        );
    }
}
export default Http1;