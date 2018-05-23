import React, { Component } from 'react';

class FolderItem extends Component {
    constructor(props){
        super();
        this.state = {
            folder: props.folderName
        }
    }
    render() {
        return (
            <li>
                <div className="row">
                    <div className="col-xs-6 col-md-8">
                        <span> {this.props.folderName} </span>
                    </div>
                    <div className="col-xs-6 col-md-4">
                        <button className="btn btn-danger btn-sm" onClick={this.props.deleteFolder}>Delete</button>
                    </div>
                </div>
                <br/>
            </li>
        );
    }
}

export default FolderItem;
