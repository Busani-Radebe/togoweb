import './App.css'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import Services from './components/Service'
import Footer from './components/footer.jsx'
import Carousel from './components/carousel.jsx'
import Contact from './components/Contact..jsx'
import Industries from './components/Industries.jsx'
function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <br></br>
      <Carousel />
      <Services />
      <Industries/>
      <Contact />
      <Footer />


    </>
  )
}

export default App
