import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AIDemo from './components/AIDemo';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AIDemo />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
