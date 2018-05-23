import React, { Component } from 'react';
import Help from '../components/help';
import FolderPage from '../components/folderPage'

class App extends Component {
  constructor(){
    super();
    this.state = {
      foldersMounted: false,
      helpMounted: false
    };
  }
  onChangeFoldersMounted(){
    this.setState({
      foldersMounted: !this.state.foldersMounted,
      helpMounted: false
    })
  }
  onChangeHelpMounted(){
    this.setState({
      helpMounted: !this.state.helpMounted,
      foldersMounted: false
    })
  }
  render() {
    let helpComponent = "";
    if(this.state.helpMounted){
      helpComponent = <Help></Help>
    }
    let foldersComponent = "";
    if(this.state.foldersMounted){
      foldersComponent = <FolderPage> </FolderPage>;
    }
    return (
        <dir className="row">
          <dir className="col-xs-12 col-md-4">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" onClick={this.onChangeFoldersMounted.bind(this)}>Folders</a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" onClick={this.onChangeHelpMounted.bind(this)}>Help</a>
                  </li>
                </ul>
              </div>
            </nav>
          </dir>
          <dir className="col-xs-12 col-md-8">
            {foldersComponent}
            {helpComponent}
          </dir>
        </dir>
      /*<Help></Help>*/ 
    );
  }
}

export default App;
