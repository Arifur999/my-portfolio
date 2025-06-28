import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import About from './pages/About'
import Hero from './pages/Hero'
import Skills from './pages/skills'
import MyProject from './pages/MyProject'
import Education from './pages/Education'
import Contact from './pages/Contact'

function App() {

  return (
    <div className='bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364] text-white px-4'>
     <Navbar></Navbar>
    <Hero></Hero>
    <About></About>
    <Skills></Skills>
    <MyProject></MyProject>
    <Education></Education>
    <Contact></Contact>
     <Footer></Footer>
    </div>
  )
}

export default App
