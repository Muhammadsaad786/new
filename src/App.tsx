
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 selection:bg-primary-200 selection:text-primary-900">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}

export default App;
