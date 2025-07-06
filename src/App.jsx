import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import About from './pages/About'
import Hero from './pages/Hero'
import Skills from './pages/Skills'
import MyProject from './pages/MyProject'
import Education from './pages/Education'
import Contact from './pages/Contact'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,  
      once: true,      
    });
  }, []);

  return (
    <div className='bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364] text-white px-4'>
     <Navbar />
     <Hero />
     <About />
     <Skills />
     <MyProject />
     <Education />
     <Contact />
     <Footer />
    </div>
  )
}

export default App
