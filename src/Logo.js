import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './img/logo.png';

function Logo() {
    return (
        <div className="perpage">
            <img className="perpagelogo" src={logo} alt="Logó" />
        </div>
    )
}


export default Logo;