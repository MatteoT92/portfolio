import React from "react";
import { NavLink } from 'react-router-dom';

function Logo() {

    return (
        <span className="logo">
            <NavLink to="/">
                <img src={process.env.PUBLIC_URL + '/dev.png'} alt="Logo Matteo Tartaglione Dev" width="50px"/>
                <h1>Dev Matteo Tartaglione</h1>
            </NavLink>
        </span>
    )
    
}

export default Logo;