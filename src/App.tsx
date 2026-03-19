import Header from './components/Header';
import Hero from './components/Hero';
import UnderstandSection from './components/UnderstandSection';
import ParticipateSection from './components/ParticipateSection';
import ResourcesSection from './components/ResourcesSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <UnderstandSection />
        <ParticipateSection />
        <ResourcesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
