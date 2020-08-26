import React from "react"
import {Link} from 'gatsby'

const Header = () => {
    return (
        <header>
            <h1>Wehab Lab</h1>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/vision'>Vision</Link>
                    </li>
                    
                    <li>
                        <Link to='/publications'>Publications</Link> 
                    </li>
                    <li>
                        <Link to='/research'>Research</Link>
                    </li>
                    <li>
                        <Link to='/team'>Team</Link>
                    </li>
                    <li>
                        <Link to='/'>Director</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
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