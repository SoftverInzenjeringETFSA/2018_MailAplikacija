import React from 'react';
import {Route, Redirect} from 'react-router';

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
        this.registerUser = this.registerUser.bind(this);
    }

    registerUser(e) {
        var User;
        if(this._username.value !== "" && this._password.value !== "" && this._firstName.value !== "" 
        && this._lastName.value !== "" && this._number.value !== "" && this._password.value === this._cpassword.value) {
            User = {
                username: this._username.value,
                password: this._password.value,
                firsName: this._firstName.value,
                lastName: this._lastName.value,
                number: this._number.value
            }
            this.setState((prevState) => {
                return {
                    users: prevState.users.concat(User)
                };
            });
        }

        this._username.value = "";
        this._password.value = "";
        this._firstName.value = "";
        this._lastName.value = "";
        this._number.value = "";

        var header = new Headers();
        header.append('Content-Type', 'application/json');

        const options = {
           method: 'POST',
           headers: header,
           body: JSON.stringify(User)
        };
        var  request = new Request("http://localhost:8080/register", options);
        
        if(User.username.value !== "" && User.password.value !== "" && User.firstName.value !== "" 
        && User.lastName.value !== "" && User.number.value !== "" && User.password.value === this._cpassword.value)
        fetch(request).then(res => {
            if(res)
                alert("Dobro dosli");
            else
                alert("Greska pri registraciji");
            });
        this._cpassword = "";
        e.preventDefault();
    }
    render() {
        return(
            <div class="w3-container" style="margin-top:75px">
            <h1 class="w3-xxxlarge w3-text-red">
                <b>Register</b>
            </h1>
            <hr style="width:50px;border:5px solid red" class="w3-round"></hr>
            <p>Welcome to SI Webmail</p>
            <form onSubmit = {this.registerUser}>
                <div class="w3-section">
                    <label>Username</label>
                    <input ref = {(a) => this._username = a} class="w3-input w3-border" type="text" name="username" required></input>
                </div>
                <div class="w3-section">
                    <label>First name</label>
                    <input ref = {(a) => this._firstName = a} class="w3-input w3-border" type="text" name="firstName" required></input>
                </div>
                <div class="w3-section">
                    <label>Last name</label>
                    <input ref = {(a) => this._lastName = a} class="w3-input w3-border" type="text" name="lastName" required></input>
                </div>
                <div class="w3-section">
                    <label>Password</label>
                    <input ref = {(a) => this._password = a} class="w3-input w3-border" type="password" name="password" required></input>
                </div>
                <div class="w3-section">
                    <label>Confirm password</label>
                    <input ref = {(a) => this._cpassword = a} class="w3-input w3-border" type="password" name="cpassword" required></input>
                </div>
                <div class="w3-section">
                    <label>Mobile number</label>
                    <input ref = {(a) => this._number = a} class="w3-input w3-border" type="text" name="number" required></input>
                </div>
                <button type="submit" class="w3-button w3-block w3-padding-large w3-red w3-margin-bottom">Register</button>
            </form>
            </div>
        );
    }
}

export default Register;