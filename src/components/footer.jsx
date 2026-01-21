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
    { icon: '📞', text: '+27 (0) 78 385 7960', href: 'tel:+27783857960' },
    { icon: '📧', text: 'togo@togoelectrical.co.za', href: 'mailto:info@togoelectricals.co.za' },
    { icon: '📍', text: 'Cashan, Rustenburg, North West, South Africa', href: null }
  ]

  const socialLinks = [
    { icon: '💼', label: 'LinkedIn', href: '#' },
    { icon: '👤', label: 'Facebook', href: '#' }
  ]

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Main Content Section */}
        <div className="footer-main-content">
          {/* Left Column - Brand Description */}
          <div className="footer-left">
            <div className="footer-brand">
              <div className="footer-logo">
                <img src={logo} alt="Togo Electricals logo" />
              </div>
              <p className="footer-tagline">
                Comprehensive Electrical Engineering & Maintenance Solutions
              </p>
              <p className="footer-description">
                Serving residential, commercial, and industrial clients across the North West
                region with a strong focus on safety, compliance, and technical excellence.
              </p>
            </div>
          </div>

          {/* Right Columns Container */}
          <div className="footer-right">
            {/* Quick Links Section */}
            <div className="footer-column">
              <h4 className="footer-column-title">Quick Links</h4>
              <ul className="footer-links-vertical">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.to}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div className="footer-column">
              <h4 className="footer-column-title">Contact</h4>
              <ul className="footer-contact-vertical">
                {contactInfo.map((contact, index) => (
                  <li key={index}>
                    {contact.href ? (
                      <a href={contact.href} className="contact-item">
                        <span className="contact-icon">{contact.icon}</span>
                        <span className="contact-text">{contact.text}</span>
                      </a>
                    ) : (
                      <div className="contact-item">
                        <span className="contact-icon">{contact.icon}</span>
                        <span className="contact-text">{contact.text}</span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media Section */}
            <div className="footer-column">
              
              
            </div>
          </div>
        </div>

        {/* Bottom Bar - Full width rectangle */}
        <div className="footer-bottom-rectangle">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Togo Electricals (Pty) Ltd. All rights reserved.
            </p>
            <div className="footer-legal-links">
              <a href="#privacy">Privacy Policy</a>
              <span className="separator">|</span>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}