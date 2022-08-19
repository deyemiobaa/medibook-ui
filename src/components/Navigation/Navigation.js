import React from 'react'

export default function Navigation() {
  return (
    <div>
        <div className='logo'>
            <img src='https://previews.123rf.com/images/lumut/lumut1708/lumut170800467/83730852-medical-logo-template.jpg' className='logo w-16' alt='logo' />
        </div>
        <div className="navLinks">
            <NavLink exact to="/" activeClassName="nav-active" className="link-el">Home</NavLink>
            <NavLink exact to="/Calculator" activeClassName="nav-active" className="link-el">Calculator</NavLink>
            <NavLink exact to="/Quotes" activeClassName="nav-active" className="link-el">Quotes</NavLink>
        </div>
    </div> 
  )
}
