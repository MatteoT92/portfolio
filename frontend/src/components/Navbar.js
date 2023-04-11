import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import ButtonsLang from './ButtonsLang';

function Navbar(props) {

    const { language, funcLangIta, funcLangEng } = props;
    const [lang, setLang] = useState(language);

    useEffect(() => {
        setLang(props.language);
    }, [props.language]);

    if (lang === 'ENG') {
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
                        Who I am?
                    </NavLink>
                </span>
                <span className='route'>
                    <NavLink to="/contacts">
                        Contact me
                    </NavLink>
                </span>
                <ButtonsLang language={language} funcLangIta={funcLangIta} funcLangEng={funcLangEng} />
            </nav>
        )
    } else {
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
                <ButtonsLang language={language} funcLangIta={funcLangIta} funcLangEng={funcLangEng} />
            </nav>
        )
    }
    
}

export default Navbar;