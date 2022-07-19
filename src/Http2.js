import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';

class Http2 extends React.Component {


    constructor(props) {
        super();

        this.state = {
            firstname: '', lastname: '', address: '',
            city: '', state: '', pin: '', phone: '',
            email: '', productname: '', shortdescription: '',
            detaileddescription: '', category: '',
            startingprice: '', bidenddate: ''
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

        if (e.target.name === "Productname") {
            console.log(e.target.value);
            this.setState({ productname: e.target.value });
        }

        if (e.target.name === "Shortdescription") {
            console.log(e.target.value);
            this.setState({ shortdescription: e.target.value });
        }

        if (e.target.name === "Detaileddescription") {
            console.log(e.target.value);
            this.setState({ detaileddescription: e.target.value });
        }

        if (e.target.name === "Category") {
            console.log(e.target.value);
            this.setState({ category: e.target.value });
        }

        if (e.target.name === "Startingprice") {
            console.log(e.target.value);
            this.setState({ startingprice: e.target.value });
        }

        if (e.target.name === "Bidenddate") {
            console.log(e.target.value);
            this.setState({ bidenddate: e.target.value });
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
            productname: this.state.productname,
            shortdescription: this.state.shortdescription,
            detaileddescription: this.state.detaileddescription,
            category: this.state.category,
            startingprice: this.state.startingprice,
            bidenddate: this.state.bidenddate
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


        let finalurl = 'http://localhost:8080/e-auction/api/v1/seller/add-product/';
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
                <p> Add Product</p>
                First Name : <input type="text" name="Firstname" value={this.state.firstname} onChange={this.changehandler1} /><br />
                Last Name : <input type="text" name="Lastname" value={this.state.lastname} onChange={this.changehandler1} /><br />
                Address : <input type="text" name="Address" value={this.state.address} onChange={this.changehandler1} /><br />
                City : <input type="text" name="City" value={this.state.city} onChange={this.changehandler1} /><br />
                State : <input type="text" name="State" value={this.state.state} onChange={this.changehandler1} /><br />
                Pin : <input type="text" name="Pin" value={this.state.pin} onChange={this.changehandler1} /><br />
                Phone : <input type="text" name="Phone" value={this.state.phone} onChange={this.changehandler1} /><br />
                Email :    <input type="text" name="Email" value={this.state.email} onChange={this.changehandler1} /><br />
                Product Name : <input type="text" name="Productname" value={this.state.productname} onChange={this.changehandler1} /><br />
                Short description : <input type="text" name="Shortdescription" value={this.state.shortdescription} onChange={this.changehandler1} /><br />
                Detailed description : <input type="text" name="Detaileddescription" value={this.state.detaileddescription} onChange={this.changehandler1} /><br />
                Category : <input type="text" name="Category" value={this.state.category} onChange={this.changehandler1} /><br />
                Starting Price : <input type="text" name="Startingprice" value={this.state.startingprice} onChange={this.changehandler1} /><br />
                Bid End Date : <input type="text" name="Bidenddate" value={this.state.bidenddate} onChange={this.changehandler1} /><br />
                <br /> <button type="button" onClick={this.getInfo}>Submit </button>

            </div>
        );
    }
}
export default Http2;