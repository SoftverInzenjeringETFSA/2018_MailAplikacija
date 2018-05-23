import React from 'react';
import {Route, Redirect} from 'react-router';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };
        this.userLogin = this.userLogin.bind(this);
    }

    userLogin(e) {
        var User;
        if(this._username.value !== "" && this._password.value !== "") {
           User = {
               username: this._username.value,
               password: this._password.value
           };
           this.setState((prevState) => {
               return {
                   users: prevState.users.concat(User)
               };
           });
       }
       this._username.value = "";
       this._password.value = "";

        var header = new Headers();
        header.append('Content-Type', 'application/json');

        const options = {
           method: 'POST',
           headers: header,
           body: JSON.stringify(User)
        };
        var  request = new Request("http://localhost:8080/login", options);
        if(User.username.value !== "" && User.password.value !== "")
        fetch(request).then(res => {
            if(res)
                alert("Dobro dosli");
            else
                alert("Username ili password su neispravni");
            });
        
        e.preventDefault();
    }
    render() {
        return(
        <div class="w3-container" style="margin-top:75px">
            <h1 class="w3-xxxlarge w3-text-red">
                <b>Login</b>
            </h1>
            <hr style="width:50px;border:5px solid red" class="w3-round"></hr>
            <p>Welcome to SI Webmail</p>
            <form onSubmit={this.userLogin}>
                <div class="w3-section">
                    <label>Username</label>
                    <input ref = {(un) => this._username = un} class="w3-input w3-border" type="text" name="username" required></input>
                </div>
                <div class="w3-section">
                    <label>Password</label>
                    <input ref = {(pw) => this._password = pw} class="w3-input w3-border" type="text" name="password" required></input>
                </div>
                <button type="submit" class="w3-button w3-block w3-padding-large w3-red w3-margin-bottom">Login</button>
            </form>
        </div>
        );
    }
}

export default Login;