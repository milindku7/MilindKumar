import { Navbar } from './components/Navbar/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Awards from './components/Awards/Awards';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Projects />
        <Experience />
        <Awards />
        <Contact />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App