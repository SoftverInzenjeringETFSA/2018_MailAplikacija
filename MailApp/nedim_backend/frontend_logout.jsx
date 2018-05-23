import React from 'react';
import {Route, Redirect} from 'react-router';

class Logout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.logoutUser = this.logoutUser.bind(this);
    }

    logoutUser(e) {
        const options = {method: 'POST'};
        var  request = new Request("http://localhost:8080/logout", options);
        fetch(request).then(res => {
            if(res)
                alert("Uspjesno odjavljivanje");
            else
                alert("Greska pri odjavljivanju");
        });
        e.preventDefault();
    }

    render() {
        return(
            <button onClick={this.logoutUser}>Logout</button>
        );
    }
}

export default Logout;