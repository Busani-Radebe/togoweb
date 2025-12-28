import logo from '../assets/logo.png'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { to: '#home', label: 'Home' },
    { to: '#about', label: 'About Us' },
    { to: '#services', label: 'Services' },
    { to: '#contact', label: 'Contact' }
  ]

  const contactInfo = [
    { icon: '📞', text: '+27 (0) 12 345 6789', href: 'tel:+27123456789' },
    { icon: '📧', text: 'info@togo.co.za', href: 'mailto:info@togo.co.za' },
    { icon: '📍', text: 'Vereeniging, Gauteng, SA', href: null }
  ]

  const socialLinks = [
    { icon: '𝕏', label: 'Twitter', href: '#' },
    { icon: 'in', label: 'LinkedIn', href: '#' },
    { icon: 'f', label: 'Facebook', href: '#' }
  ]

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Logo Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logo} alt="Togo logo" />
            </div>
            <p className="footer-tagline">Excellence in Electrical Engineering</p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links-horizontal">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.to}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4>Contact</h4>
            <ul className="footer-contact-horizontal">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  {contact.href ? (
                    <a href={contact.href}>
                      <span className="contact-icon">{contact.icon}</span>
                      {contact.text}
                    </a>
                  ) : (
                    <>
                      <span className="contact-icon">{contact.icon}</span>
                      {contact.text}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="social-link"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} Togo Electrical Services. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <span className="separator">|</span>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}