import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Awards from './components/Awards/Awards';
import Contact from './components/Contact/Contact';
import TryProjectsPage from './pages/TryProjectsPage';
import './App.css';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Projects />
        <Experience />
        <Awards />
        <Contact />
        <About />
      </main>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/try-projects" element={<TryProjectsPage />} />
      </Routes>
    </div>
  )
}

export default App