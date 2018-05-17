import React, { Component } from 'react';
import FolderItem from './folderItem';

class FolderPage extends Component {
    constructor(){
        super();
        this.state = {
            folders : [],
            apiLoaded:false
        }
    }
    getAllFolders(){
        fetch('http://localhost:8080/api/categories')
        .then(res => res.json())
            .then((categories) => {
                    this.setState((prevState) => {
                        return {
                            folders: categories,
                            apiLoaded: true
                    }
                }
            )}
        )
    }
    componentDidMount(){
        this.getAllFolders();
    }
    deleteFolder(index,e){
        fetch('http://localhost:8080/api/category/'+index,{
            method: 'DELETE',
            headers: {"Content-Type" : "application/json"}
        }).then((res) => {
            if(res.status===200)
                this.getAllFolders();
        })
    }
    addNewFolder(){
        fetch('http://localhost:8080/api/addCategory', {
            method: 'POST',
            body: JSON.stringify({
              categoryName: this.newText.value
            }),
            headers: {"Content-Type" : "application/json"}
          }).then((res) => {
            if(res.status===200)
                this.getAllFolders();
        })
    }
    render() {
        let data = "";
        if(this.state.apiLoaded){
            data = this.state.folders.map((folder) => {
                var _id = folder._id;
                return (<FolderItem folderName={folder.categoryName}
                                    key = {folder._id}
                                    folderId = {folder._id}
                                    deleteFolder={this.deleteFolder.bind(this, _id)}>  
                        </FolderItem>)
            })
        }
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
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.addNewFolder.bind(this)}>Save folder</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <ul>
                    {data}
              </ul>
            </div>
        );
    }
}

export default FolderPage;
