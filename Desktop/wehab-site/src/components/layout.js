import React from 'react'
import {Link} from 'gatsby'
import Header from './header'
import '../styles/index.scss'
import LayoutStyles from './layout.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const Layout = (props) => {
    return (
        <div>
            <Header />
            <div className={LayoutStyles.container}>
                {props.children}
            </div>
        </div>
    )
}

export default Layout