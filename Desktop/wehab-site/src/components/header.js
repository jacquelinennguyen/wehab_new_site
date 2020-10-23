import React from "react"
import {Link} from 'gatsby'
import HeaderStyles from '../styles/header.scss'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
/*function myFunction() {
    var x = document.getElementById("collapse");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
*/
function test() {
    document.getElementById("test").innerHTML = "Hello World";
}

const Header = () => {
    return (
        <header class="header">
            <button className="navbar-toggle" onClick={ () => {
                var x = document.getElementById("collapse");
                if (x.style.display === "block") {
                  x.style.display = "none";
                } else {
                  x.style.display = "block";
                }
            }}>                
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            {/*<button
                onClick={() => { document.getElementById("test").innerHTML = "Hello World";}}>
                button  
            </button>
            <p id="test"></p>*/}
            <div>
                <Link className="title" to='/'>
                <h1>
                    Wehab Lab
                </h1>
                </Link>
            </div>
            <nav id="collapse" class="navbar-collapse">
                <ul className="nav-list nav-list-right">
                    <li>
                        <Link className="link active" to='/publications'>Publications</Link> 
                    </li>                    
                    <li>
                        <Link className="link active" to='/research'>Research</Link>
                    </li>
                    <li>
                        <Link className="link active" to='/team'>Team</Link>
                    </li>
                    <li>
                        <Link className="link active" to='/director'>Director</Link>
                    </li>
                    <li>
                        <Link className="link active" to='/contact'>Contact</Link>
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