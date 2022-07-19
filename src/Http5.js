import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';

class Http5 extends React.Component {


    constructor(props) {
        super();

        this.state = {
            id: '',

        };
        //    console.log(this.props.attr1);

        this.getInfo = this.getInfo.bind(this);

        this.changehandler1 = this.changehandler1.bind(this);
        //this.changehandler2 = this.changehandler2.bind(this);
    }

    changehandler1(e) {



        if (e.target.name === "Productid") {
            console.log(e.target.value);
            this.setState({ id: e.target.value });
        }



        //this.setState({name:e.target.value});
    }



    getInfo = (e) => {
        var usr = {


            productid: this.state.productid


        }

        //creating usr object first above then strinfy it

        console.log('inside geinfo' + JSON.stringify(usr))
        console.log(typeof usr);

        const myInit1 = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/JSON'

            }, body: JSON.stringify(usr)

        };


        let finalurl = 'http://localhost:8080/e-auction/api/v1/seller/delete/' + this.state.id;
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
                <p> Delete Product</p>
                Product Id : <input type="text" name="Productid" value={this.state.productid} onChange={this.changehandler1} /><br />

                <br /> <button type="button" onClick={this.getInfo}>Submit </button>

            </div>
        );
    }
}
export default Http5;