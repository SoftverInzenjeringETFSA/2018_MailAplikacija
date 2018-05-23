import React from "react";
import styles from './Help.css';


export const Help = (props) => {
  return (
    <div id = "help">
    <h1> Dokumentacija </h1>

    <h2> Kako pokrenuti aplikaciju </h2>
    <p> cd MailApp/client/ </p>
    <p> npm install </p>
    <p> npm start </p>

    <h2> Struktura projekta </h2>
    <p> client/src/api.js - You ll probably need to make calls to a backend API at some point. Put all that code here. If it gets too unwieldy in one file, make a client/src/api directory and put the area-specific API files under there - like userApi.js, productApi.js, etc. </p>

    <p> client/src/components - All your Presentational (aka Dumb) components go here. These are the simple stateless ones that just take props. </p>

    <p> client/src/containers - The Container components go here. These are the stateful ones, and the ones that make the API calls. If you re using Redux, these are the ones that are connected to the store. Notice that CSS and tests are in the same folder as their respective components. </p>

    <p> client/src/images - Put the images in one place to start with. </p>

    <p> client/src/index.js - This is where you initialize the app and call ReactDOM.render, so it makes sense to keep this at the top level. </p>

    <p> client/src/utils - You ll probably end up with miscellaneous utility functions - error handlers, formatters, and the like. I usually put them in a file inside utils so I can access them easily. </p>

    <h2> Tehnologije </h2>
    <ul>
    <li> React </li>
    <li> Node </li>
    <li> Tensorflow </li>
    </ul>

    <h2> Komponente </h2>

    <h3> Help </h3>
    <p> Komponenta koja sluzi za dokumentaciju projekta </p>
    </div> 
  );
};

export default Help;
