import React, { Component } from 'react';
import FolderItem from './folderItem';

class FolderPage extends Component {
    constructor(){
        super();
        this.state = {
            folderNames : [] 
        }
    }
    deleteFolder(index,e){
        const folders = Object.assign([], this.state.folderNames);
        folders.splice(index, 1);
        this.setState({
            folderNames: folders
        });
    }
    saveChanges(){
        var newArray = [...this.state.folderNames];
        newArray.push(this.newText.value); 
        this.newText.value ="";
        this.setState({
            folderNames: newArray
        });
    }
    render() {
        return (
            <div>
                <h1>Folders</h1>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
                    Add new folder
                </button>
                <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title" id="myModalLabel">Add new folder</h4>
                                <button type="button" className="close" data-dismiss="modal">
                                    <span aria-hidden="true">&times;</span>
                                    <span className="sr-only">Close</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <input type="text" name="folderName" ref={(ip) => {this.newText = ip}}/>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.saveChanges.bind(this)}>Save folder</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <ul>
                {this.state.folderNames.map((folder,i) => {
                    return (<FolderItem folderName={folder}
                                        key = {i}
                                        deleteFolder={this.deleteFolder.bind(this, i)}>  
                            </FolderItem>)

                })}
                
              </ul>
            </div>
        );
    }
}

export default FolderPage;
