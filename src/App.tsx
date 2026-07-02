import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Vibe from './components/Vibe';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'terraza', 'reservas', 'ubicacion'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      // Height of our sticky header to avoid overlapping titles
      const headerOffset = 72;
      
      // Calculate absolute vertical offset on the page
      let targetY = 0;
      let curr: HTMLElement | null = el;
      while (curr) {
        targetY += curr.offsetTop;
        curr = curr.offsetParent as HTMLElement | null;
      }
      targetY -= headerOffset;

      // Determine if viewport is mobile
      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        // Direct scroll prevents mobile browser from canceling the scroll 
        // animation when the mobile drawer starts closing and changing height.
        window.scrollTo({
          top: targetY,
          behavior: 'auto'
        });
      } else {
        window.scrollTo({
          top: targetY,
          behavior: 'smooth'
        });
      }
      
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen font-sans selection:bg-[#1A1A1A] selection:text-[#FAF9F6] text-[#1A1A1A]">
      {/* Sticky Navigation */}
      <Header onNavClick={handleScrollToSection} activeSection={activeSection} />

      {/* Main Page Layout */}
      <main>
        {/* Hero Section */}
        <Hero onActionClick={handleScrollToSection} />

        {/* Vibe and Reviews Section */}
        <Vibe />

        {/* Booking Form Section */}
        <Booking />

        {/* Maps, Contact, FAQs Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onNavClick={handleScrollToSection} />
    </div>
  );
}
