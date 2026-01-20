import { useState } from 'react'
import './Services.css'

export default function Services() {
  const [expandedCard, setExpandedCard] = useState(null)

  const services = [
    {
      id: 1,
      icon: '⚡',
      title: 'Medium & High Voltage Services',
      description: 'Expert solutions for high-voltage electrical systems and infrastructure',
      details: [
        'Transformer installation, repair, service, and oil purification',
        'Medium voltage switchgear maintenance and commissioning',
        'Cable terminations and jointing (up to 33kV)',
        'Plant earthing installation and comprehensive surveys',
        'Ground scanning and subsurface electrical mapping'
      ]
    },
    {
      id: 2,
      icon: '🔋',
      title: 'Generation & Power Solutions',
      description: 'Reliable power generation and energy optimization services',
      details: [
        'Diesel generator installation, servicing, and repair',
        'Energy audit and efficiency optimization',
        'Power factor correction solutions'
      ]
    },
    {
      id: 3,
      icon: '🔧',
      title: 'Engineering Services',
      description: 'Comprehensive electrical engineering and project management',
      details: [
        'System design and engineering consultancy',
        'Low voltage switchgear maintenance and installation',
        'Project management for electrical infrastructure',
        'Plant commissioning and decommissioning supervision'
      ]
    },
    {
      id: 4,
      icon: '✓',
      title: 'Compliance & Certification',
      description: 'Ensuring regulatory compliance and safety standards',
      details: [
        'Electrical testing and commissioning',
        'Certificate of Compliance (COC) issuance',
        'Regulatory compliance auditing',
        'Safety system verification'
      ]
    },
    {
      id: 5,
      icon: '🛠️',
      title: 'Maintenance & Support',
      description: '24/7 maintenance and emergency repair services',
      details: [
        'Comprehensive maintenance programs',
        'Emergency repair services',
        'Spare parts supply and inventory management',
        'Preventative maintenance scheduling'
      ]
    },
    {
      id: 6,
      icon: '📊',
      title: 'Condition Monitoring',
      description: 'Advanced diagnostic and monitoring solutions',
      details: [
        'Panel Infrared Scanning',
        'Ultrasound Scanning',
        'Partial Discharge Scanning',
        'Comprehensive condition monitoring'
      ]
    },
    {
      id: 7,
      icon: '💡',
      title: 'Specialized Services',
      description: 'Cutting-edge electrical solutions for modern needs',
      details: [
        'Lighting design and optimization',
        'Electrical system upgrades and modernization',
        'Critical systems backup implementation',
        'Prepaid meter installation and management',
        'Remote monitoring system installation'
      ]
    }
  ]

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Comprehensive Service Portfolio</h2>
          <p className="services-subtitle">
            Delivering excellence across all aspects of electrical engineering and power solutions
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`service-card ${expandedCard === service.id ? 'expanded' : ''}`}
              onClick={() => toggleCard(service.id)}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <div className="service-details">
                <ul className="service-list">
                  {service.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
              
              <button className="service-expand-btn" aria-label={expandedCard === service.id ? 'Show less' : 'Show more'}>
                {expandedCard === service.id ? '−' : '+'}
              </button>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  )
}