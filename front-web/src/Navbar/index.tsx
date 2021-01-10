import './styles.css'

import React from 'react';
import {ReactComponent as Logo} from './logo.svg'
import { Link } from 'react-router-dom';
import {ReactComponent as GitHub} from './github.svg'

function Navbar() {
  return(
    <nav className="main-navbar">
      <Logo />
      <Link to="/" className="logo-text">DS Delivery</Link>
      <a href="https://github.com/brunoamaia/deliver-dev-superior-2.0" target="_new" className="git-link" >
        <GitHub className="github-link" />
      </a>
    </nav>
  )
}

export default Navbar;