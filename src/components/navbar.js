import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
     return(
          <nav className="nav-wrapper red darken-1">
               <div className="container">
                    <Link to="/" tag="a"  className="brand-logo">Poke' Times</Link>
                    <ul className="right">
                         <li><NavLink to="/">Home</NavLink></li>
                         <li><NavLink to="/about">About</NavLink></li>
                         <li><NavLink to="/contact">Contact</NavLink></li>
                         <li><NavLink to="/create">Create Post</NavLink></li>

                    </ul>
               </div>
          </nav>
     )
}

export default Navbar
