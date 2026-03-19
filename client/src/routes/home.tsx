import { useEffect } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import TextBlock from '../components/TextBlock';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';

export default function Home() {
  // Scroll to top every time the home page mounts (handles coming back from /tag)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <div className="scanlines font-body" style={{ background: '#000', color: '#fff' }}>
      <Hero />
      <TextBlock />
      <Banner />
      <HowItWorks />
      <Footer />
    </div>
  );
}