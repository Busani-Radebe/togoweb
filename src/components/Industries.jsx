import React from 'react';
import './Industries.css';

const Industries = () => {
  const industries = [
    {
      name: 'Mining and Mineral Processing',
      icon: '⛏️',
      description: 'Specialized electrical solutions for mining operations and processing facilities'
    },
    {
      name: 'Manufacturing and Industrial Plants',
      icon: '🏭',
      description: 'Industrial electrical systems for production and manufacturing facilities'
    },
    {
      name: 'Commercial Buildings and Retail Facilities',
      icon: '🏢',
      description: 'Commercial electrical installations and maintenance services'
    },
    {
      name: 'Data Centres and Telecommunications Infrastructure',
      icon: '💻',
      description: 'Critical power solutions for data centers and telecom infrastructure'
    },
    {
      name: 'Public Infrastructure, Healthcare, and Education',
      icon: '🏥',
      description: 'Electrical services for public sector and institutional facilities'
    },
    {
      name: 'Residential Estates and High-end Developments',
      icon: '🏘️',
      description: 'Premium electrical solutions for residential properties and developments'
    }
  ];

  return (
    <section className="industries-section" id="industries">
      <div className="industries-container">
        
        {/* Header Section */}
        <div className="industries-header">
          <h2 className="industries-title">Industries We Serve</h2>
          <p className="industries-subtitle">
            We proudly support a diverse range of sectors with specialized electrical engineering solutions.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div key={index} className="industry-card">
              <div className="industry-card-content">
                <div className="industry-icon">{industry.icon}</div>
                <h3 className="industry-name">{industry.name}</h3>
                <p className="industry-description">{industry.description}</p>
                <div className="industry-hover-indicator">
                  <span>View Details</span>
                  <span className="hover-arrow">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="industries-cta">
          <p className="cta-text">
            Need specialized electrical solutions for your industry?
          </p>
          <a href="#contact" className="cta-button">
            Contact Our Industry Experts
          </a>
        </div>

      </div>
    </section>
  );
};

export default Industries;