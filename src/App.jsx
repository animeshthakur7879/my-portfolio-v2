import Header from './components/Header';
import Hero from './components/Hero';
import PhotoSection from './components/PhotoSection';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden">
      <Header />
      <Hero />
      <PhotoSection />
      {/* <About /> */}
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;