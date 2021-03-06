import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Link to="/">Home</Link>
    <Link to="/honey">Honey</Link>
  </React.Fragment>
)

const Header = (props) => (
  <header className="main-header">
    <section className='title'>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </section>
    <nav>
      { 
        // && means only ifthis is true, run the following thing. Shorter than ternary ! 
      }
      { props.user && <span>Welcome, {props.user.email}</span>}
      { props.user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
)

export default Header
