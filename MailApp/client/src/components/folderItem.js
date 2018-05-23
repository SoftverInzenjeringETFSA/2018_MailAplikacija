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
                        <button type="button" className="btn btn-danger btn-sm" data-toggle="modal" data-target="#Modal">
                            Delete
                        </button>
                        <div className="modal fade" id="Modal" tabIndex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title" id="myModalLabel">Delete folder</h4>
                                        <button type="button" className="close" data-dismiss="modal">
                                            <span aria-hidden="true">&times;</span>
                                            <span className="sr-only">Close</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <p>Are you sure you want to delete folder along with its content?</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.props.deleteFolder}>Delete folder</button>
                                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    {emailComponent}
                <br/>
            </li>
        );
    }
}

export default FolderItem;
