import heroImage from '../assets/Hero.jpg'
import './HeroSection.css'

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div 
        className="hero-background" 
        style={{ backgroundImage: `url(${heroImage})` }}
        role="img"
        aria-label="Electrical engineering background"
      ></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Reliable Electrical Engineering Solutions You Can Trust
          </h1>
          <p className="hero-subtitle">
            Togo Electricals delivers comprehensive electrical engineering, installation, 
            and maintenance services across residential, commercial, and industrial sectors. 
            Based in Rustenburg and serving the North West region, we combine technical 
            excellence, strict safety standards, and responsive service to keep your 
            operations powered, compliant, and efficient.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              Get Free Consultation
            </a>
            <a href="#services" className="btn btn-secondary">
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}