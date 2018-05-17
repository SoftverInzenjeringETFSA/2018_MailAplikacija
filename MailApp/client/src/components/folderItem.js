import React, { Component } from 'react';
import EmailItem from './emailItem';

class FolderItem extends Component {
    constructor(props){
        super();
        this.state = {
            folder: props.folderName,
            folderId: props.folderId,
            emailMounted: false,
            emails: []
        }
    }
    onShowEmails(){
        fetch('http://localhost:8080/api/getMailsByCategory/'+this.state.folderId)
            .then(res => res.json(),()=>console.log(this.state.folderId))
            .then((list) => {
                this.setState({
                        emails: list,
                        emailMounted: !this.state.emailMounted
                }, ()=> console.log(list)
            )
        })
    }
    render() {
        let emailComponent = "";
        if(this.state.emailMounted){
            emailComponent = <ul>
                                {this.state.emails.map((email,i) => {
                                    return (<EmailItem subject={email.emailSubject}
                                                       key = {i}
                                                       message = {email.message}
                                                       sender = {email.sender}>
                                            </EmailItem>)
                                })}
                            </ul>
        }
        return (
            <li onClick={this.onShowEmails.bind(this)}>
                <div className="row" >
                    <div className="col-xs-6 col-md-8">
                        <span> {this.props.folderName} </span>
                    </div>
                    <div className="col-xs-6 col-md-4">
                        <button className="btn btn-danger btn-sm" onClick={this.props.deleteFolder}>Delete</button>
                    </div>
                </div>
                    {emailComponent}
                <br/>
            </li>
        );
    }
}

export default FolderItem;
