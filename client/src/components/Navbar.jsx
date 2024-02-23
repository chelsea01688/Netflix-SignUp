import React from 'react'
import logo from '../assets/netflix.png';
import './NavBar.css'

function Navbar() {
  return (
    <div>
        <nav className='navBar'>
            <div>
                <img src={logo} width="200" height="110" alt='logoImg' className="netflixLogo" />
            </div>
            <div className="navBarItem">
                <a href="/login">Sign In</a>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
