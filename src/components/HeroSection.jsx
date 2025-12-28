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
        aria-label="Hero background"
      ></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Welcome to <span className="brand-name">Togo</span>
          </h1>
          <p className="hero-subtitle">
            Transforming ideas into exceptional digital experiences. 
            We deliver innovative solutions tailored to your business needs.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              Get Started
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