import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MetricsStrip from './components/MetricsStrip';
import Monitoring from './components/Monitoring';
import ImpactSection from './components/ImpactSection';
import Footer from './components/Footer';

function App() {
  return (
    <main className="app-shell">
      <Navbar />
      <Hero />
      <MetricsStrip />
      <Monitoring />
      <ImpactSection />
      <Footer />
    </main>
  );
}

export default App;
