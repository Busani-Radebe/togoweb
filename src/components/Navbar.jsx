import { useState } from 'react'
import logo from '../assets/logo.png'
import './NavBar.css'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const links = [
    { to: '#', label: 'Home' },
    { to: '#about', label: 'About' },
    { to: '#services', label: 'Services' },
    { to: '#contact', label: 'Contact' },
  ]
  return (
    <header className="nav-header">
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <a href="/" className="brand">
          <img 
            src={logo} 
            alt="Togo logo" 
            className="brand-logo" 
            style={{ width: '180px', height: 'auto' }}
          />
        </a>
        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-list"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span className={`hamburger ${open ? 'open' : ''}`} aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        <ul id="nav-list" className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((link) => (
            <li key={link.label} className="nav-item">
              <a href={link.to} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li className="nav-item">
            <a className="cta" href="#contact" onClick={() => setOpen(false)}>
              Get Started
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}