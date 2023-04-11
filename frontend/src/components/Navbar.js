import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

class Navbar extends Component {

    render() {
        return (
            <nav className='navbar'>
                <Logo />
                <span className='route'>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </span>
                <span className='route'>
                    <NavLink to="/about">
                        Chi sono?
                    </NavLink>
                </span>
                <span className='route'>
                    <NavLink to="/contacts">
                        Contattami
                    </NavLink>
                </span>
            </nav>
        )
    }
    
}

export default Navbar;