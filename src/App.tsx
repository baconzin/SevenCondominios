import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { CondoTypes } from './components/CondoTypes';
import { Construction } from './components/Construction';
import { Differentials } from './components/Differentials';
import { Timeline } from './components/Timeline';
import { CallToAction } from './components/CallToAction';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <CondoTypes />
        <Construction />
        <Differentials />
        <Timeline />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
