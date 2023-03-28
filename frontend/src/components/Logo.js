import React from "react";

class Logo extends React.Component {

    render() {
        return (
            <span className="logo">
                <img src={process.env.PUBLIC_URL + '/dev.png'} alt="Logo Matteo Tartaglione Dev" width="50px"/>
                <h1>Dev Matteo Tartaglione</h1>
            </span>
        );
    }
    
}

export default Logo;