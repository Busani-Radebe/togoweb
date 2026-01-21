import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitMessage('Thank you! Your message has been sent successfully.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: '📞',
      title: 'Phone',
      details: ['+27 78 385 7960'],
      link: 'tel:+2714533'
    },
    {
      icon: '📧',
      title: 'Email',
      details: ['amos@togoelectrical.co.za', 'togo@togoelectricals.co.za'],
      link: 'mailto:info@togoelectrical.co.za'
    },
    {
      icon: '📍',
      title: 'Address',
      details: ['Cashan, Rustenburg', 'North West, South Africa'],
      link: 'https://maps.google.com/?q=Cashan+Rustenburg+South+Africa'
    },
    {
      icon: '⏰',
      title: 'Business Hours',
      details: ['Mon-Fri: 8:00 AM - 5:00 PM', 'Sat: 9:00 AM - 1:00 PM', 'Sun: Closed']
    }
  ];

  const services = [
    'Residential Electrical',
    'Commercial Installations',
    'Industrial Maintenance',
    'Solar Power Solutions',
    'Emergency Repairs',
    'Safety Inspections'
  ];

  return (
    <section className="contact-section" id="contact" >
      <div className="contact-container">
        
        {/* Header */}
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Have a project in mind or need electrical services? Contact us today for a free consultation.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Contact Form */}
          <div className="contact-form-card">
            <div className="contact-card-header">
              <h3 className="contact-card-title">Send Message</h3>
            </div>
            <div className="contact-card-body">
              <form onSubmit={handleSubmit} className="contact-form">
                
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      required
                      className="form-input"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+27 (0) 12 345 6789"
                      className="form-input"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="form-select"
                    >
                      <option value="">Select a subject</option>
                      <option value="residential">Residential Services</option>
                      <option value="commercial">Commercial Services</option>
                      <option value="industrial">Industrial Services</option>
                      <option value="emergency">Emergency Repair</option>
                      <option value="quote">Request Quote</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your project or inquiry..."
                    rows="5"
                    required
                    className="form-textarea"
                  />
                </div>

                <div className="form-actions">
                  <button 
                    type="submit" 
                    className="submit-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="button-spinner"></span>
                        Sending...
                      </>
                    ) : 'Send Message'}
                  </button>
                  
                  {submitMessage && (
                    <div className="form-success">
                      <span className="success-icon">✓</span>
                      {submitMessage}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="contact-info-card">
            <div className="contact-card-header">
              <h3 className="contact-card-title">Contact Information</h3>
            </div>
            <div className="contact-card-body">
              <div className="info-list">
                {contactInfo.map((info, index) => (
                  <div key={index} className="info-item">
                    <div className="info-icon">{info.icon}</div>
                    <div className="info-content">
                      <h4 className="info-title">{info.title}</h4>
                      <div className="info-details">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="info-detail">{detail}</p>
                        ))}
                      </div>
                      {info.link && (
                        <a href={info.link} className="info-link">
                          {info.title === 'Email' ? 'Send Email' : 'Get Directions'}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Services Offered */}
          <div className="services-card">
            <div className="contact-card-header">
              <h3 className="contact-card-title">Our Services</h3>
            </div>
            <div className="contact-card-body">
              <ul className="services-list">
                {services.map((service, index) => (
                  <li key={index} className="service-item">
                    <span className="service-bullet">⚡</span>
                    <span className="service-text">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Emergency Notice */}
          <div className="emergency-card">
            <div className="contact-card-header">
              <h3 className="contact-card-title">Emergency Service</h3>
            </div>
            <div className="contact-card-body">
              <div className="emergency-content">
                <div className="emergency-icon">🚨</div>
                <div className="emergency-text">
                  <h4>24/7 Emergency Service Available</h4>
                  <p>For urgent electrical emergencies, call us anytime</p>
                  <a href="tel:+27783857960" className="emergency-button">
                    Call Now: +27 (0) 78 385 7960
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Map Section */}
        <div className="map-section">
          <div className="contact-card-header">
            <h3 className="contact-card-title">Our Location</h3>
          </div>
          <div className="contact-card-body">
            <div className="map-container">
              <div className="map-content">
                <div className="map-info">
                  <h4 className="map-address-title">Togo Electricals</h4>
                  <p className="map-address">Cashan, Rustenburg</p>
                  <p className="map-address">North West, South Africa</p>
                  <a 
                    href="https://maps.google.com/?q=Cashan+Rustenburg+South+Africa" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="map-button"
                  >
                    📍 Open in Google Maps
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;