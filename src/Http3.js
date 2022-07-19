import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';

class Http3 extends React.Component {


    constructor(props) {
        super();

        this.state = {
            firstname: '', lastname: '', address: '',
            city: '', state: '', pin: '', phone: '',
            email: '', productid: '', bidamount: '',
        };
        //    console.log(this.props.attr1);

        this.getInfo = this.getInfo.bind(this);

        this.changehandler1 = this.changehandler1.bind(this);
        //this.changehandler2 = this.changehandler2.bind(this);
    }

    changehandler1(e) {
        if (e.target.name === "Firstname") {
            console.log(e.target.value);
            this.setState({ firstname: e.target.value });
        }

        if (e.target.name === "Lastname") {
            console.log(e.target.value);
            this.setState({ lastname: e.target.value });
        }

        if (e.target.name === "Address") {
            console.log(e.target.value);
            this.setState({ address: e.target.value });
        }

        if (e.target.name === "City") {
            console.log(e.target.value);
            this.setState({ city: e.target.value });
        }

        if (e.target.name === "State") {
            console.log(e.target.value);
            this.setState({ state: e.target.value });
        }

        if (e.target.name === "Pin") {
            console.log(e.target.value);
            this.setState({ pin: e.target.value });
        }

        if (e.target.name === "Phone") {
            console.log(e.target.value);
            this.setState({ phone: e.target.value });
        }

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
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            pin: this.state.pin,
            phone: this.state.phone,
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


        let finalurl = 'http://localhost:8080/e-auction/api/v1/buyer/place-bid/';
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
                <p> Place Bid</p>
                First Name : <input type="text" name="Firstname" value={this.state.firstname} onChange={this.changehandler1} /><br />
                Last Name : <input type="text" name="Lastname" value={this.state.lastname} onChange={this.changehandler1} /><br />
                Address : <input type="text" name="Address" value={this.state.address} onChange={this.changehandler1} /><br />
                City : <input type="text" name="City" value={this.state.city} onChange={this.changehandler1} /><br />
                State : <input type="text" name="State" value={this.state.state} onChange={this.changehandler1} /><br />
                Pin : <input type="text" name="Pin" value={this.state.pin} onChange={this.changehandler1} /><br />
                Phone : <input type="text" name="Phone" value={this.state.phone} onChange={this.changehandler1} /><br />
                Email :    <input type="text" name="Email" value={this.state.email} onChange={this.changehandler1} /><br />
                Product Id : <input type="text" name="Productid" value={this.state.productid} onChange={this.changehandler1} /><br />
                Bid Amount : <input type="text" name="Bidamount" value={this.state.bidamount} onChange={this.changehandler1} /><br />
                <br /> <button type="button" onClick={this.getInfo}>Submit </button>

            </div>
        );
    }
}
export default Http3;