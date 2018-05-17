import React, { Component } from 'react';

class EmailItem extends Component {
    constructor(props){
        super();
        this.state = {
            subject: props.subject,
            message: props.message,
            sender: props.sender
        }
    }
    render() {
        return (
            <li>
                <div className="row" >
                    <div className="col-xs-6 col-md-8">
                        <span> {this.state.subject} </span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <span> {this.state.sender} </span>
                    </div>
                    <div className="col-md-6">
                        <span> {this.state.message} </span>
                    </div>
                </div>
            </li>
        );
    }
}

export default EmailItem;
