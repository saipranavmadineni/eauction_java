import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';

class Http4 extends React.Component {


    constructor(props) {
        super();

        this.state = {
            email: '', productid: '',
            bidamount: '',
        };
        //    console.log(this.props.attr1);

        this.getInfo = this.getInfo.bind(this);

        this.changehandler1 = this.changehandler1.bind(this);
        //this.changehandler2 = this.changehandler2.bind(this);
    }

    changehandler1(e) {

        if (e.target.name === "Email") {
            console.log(e.target.value);
            this.setState({ email: e.target.value });
        }

        if (e.target.name === "Productid") {
            console.log(e.target.value);
            this.setState({ productid: e.target.value });
        }

        if (e.target.name === "Bidamount") {
            console.log(e.target.value);
            this.setState({ bidamount: e.target.value });
        }

        //this.setState({name:e.target.value});
    }



    getInfo = (e) => {
        var usr = {

            email: this.state.email,
            productid: this.state.productid,
            bidamount: this.state.bidamount,

        }

        //creating usr object first above then strinfy it

        console.log('inside geinfo' + JSON.stringify(usr))
        console.log(typeof usr);

        const myInit1 = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/JSON'

            }, body: JSON.stringify(usr)

        };


        let finalurl = 'http://localhost:8080/e-auction/api/v1/buyer/update-bid/' + this.state.productid + '/' + this.state.email + '/' + this.state.bidamount + '/';
        fetch(finalurl, myInit1)
            .then((response) => {
                console.log(response);
                console.log(response.data);
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
                <p> Update Bid</p>
                Product Id : <input type="text" name="Productid" value={this.state.productid} onChange={this.changehandler1} /><br />
                Email :    <input type="text" name="Email" value={this.state.email} onChange={this.changehandler1} /><br />
                New Bid Amount : <input type="text" name="Bidamount" value={this.state.bidamount} onChange={this.changehandler1} /><br />
                <br /> <button type="button" onClick={this.getInfo}>Submit </button>

            </div>
        );
    }
}
export default Http4;