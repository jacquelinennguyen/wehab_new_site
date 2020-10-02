import React from "react"
import {Link} from 'gatsby'
import HeaderStyles from './header.module.scss'

const Header = () => {
    return (
        <header className={HeaderStyles.header}>
            <Link className={HeaderStyles.title} to='/'>
                <h1>
                    Wehab Lab
                </h1>
            </Link>
            <nav>
                <ul className={HeaderStyles.navList}>
                    <li>
                        <Link className={HeaderStyles.link} to='/vision'>Vision</Link>
                    </li>  
                    <li>
                        <Link className={HeaderStyles.link} to='/publications'>Publications</Link> 
                    </li>                    
                    <li>
                        <Link className={HeaderStyles.link} to='/research'>Research</Link>
                    </li>
                    <li>
                        <Link className={HeaderStyles.link} to='/team'>Team</Link>
                    </li>
                    <li>
                        <Link className={HeaderStyles.link} to='/'>Director</Link>
                    </li>
                    <li>
                        <Link className={HeaderStyles.link} to='/cv'>CV</Link> 
                    </li>
                    <li>
                        <Link className={HeaderStyles.link} to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header

/*
Publications = list of all publications
Research = Emma theme
Something about the CV being in its separate HTML format
*/