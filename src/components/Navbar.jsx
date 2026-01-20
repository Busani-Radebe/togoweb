import { useState } from 'react'
import logo from '../assets/logo.png'
import './NavBar.css'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  
  const links = [
    { to: '#home', label: 'Home' },
    { to: '#services', label: 'Services' },
    { to: '#industries', label: 'Industries' },
    { to: '#contact', label: 'Contact' }
  ]

  const handleLinkClick = (targetId) => {
    setOpen(false); // Close mobile menu
    
    if (targetId === '#home') {
      // Scroll to top of page
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    
    // Find the element by ID
    const element = document.querySelector(targetId);
    if (element) {
      // Calculate the position to scroll to (accounting for fixed navbar)
      const navbarHeight = document.querySelector('.nav-header')?.offsetHeight || 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  return (
    <header className="nav-header">
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <a 
          href="#home" 
          className="brand"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#home');
          }}
        >
          <img 
            src={logo} 
            alt="Togo Electricals logo" 
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
              <a 
                href={link.to} 
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.to);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="nav-item">
            <a 
              className="cta" 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
            >
              Get Quote
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}