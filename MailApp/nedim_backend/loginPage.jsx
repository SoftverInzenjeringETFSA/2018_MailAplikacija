import React from 'react';
import ReactDOM from 'react-dom';
import Login from './frontend_login';
import Register from './frontend_registracija';

ReactDOM.render(<Login />, document.getElementById('log'));
ReactDOM.render(<Register />, document.getElementById('reg'));