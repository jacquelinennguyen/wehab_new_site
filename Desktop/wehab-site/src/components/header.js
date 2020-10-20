import React from "react"
import {Link} from 'gatsby'
import HeaderStyles from '../styles/header.scss'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'

const Header = () => {
    return (
        <header class="header">
            <div>
                <Link className="title" to='/'>
                <h1>
                    Wehab Lab
                </h1>
                </Link>
            </div>
            
            <button type="button" data-toggle="collapse" data-target="#navbar" aria-expanded="true" aria-controls="navbar">
                Menu
            </button>

            <nav id="navbar" aria-expanded="true" class="navbar-collapse">
                <ul className="nav-list nav-list-right">
                    <li>
                        <Link className="link" to='/publications'>Publications</Link> 
                    </li>                    
                    <li>
                        <Link className="link" to='/research'>Research</Link>
                    </li>
                    <li>
                        <Link className="link" to='/team'>Team</Link>
                    </li>
                    <li>
                        <Link className="link" to='/director'>Director</Link>
                    </li>
                    <li>
                        <Link className="link" to='/contact'>Contact</Link>
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