const fs = require('fs');
let content = fs.readFileSync('src/routes/index.lazy.tsx', 'utf8');

const imports = `import { createLazyFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import slide1 from '../assets/images/0c95167f-d698-4d13-b559-9e67b9cefad2.jpg';
import slide2 from '../assets/images/175b7c9d-3353-4781-be2f-c3c46d517ea2.jpg';
import slide3 from '../assets/images/2928cca9-fa34-46ba-9230-e5d76a08447d.jpg';
import slide4 from '../assets/images/43fcfc05-3f2f-4594-a3d2-741e9b70f588.jpg';
import img5 from '../assets/images/61ff5787-a152-41e4-80c8-f47ef2bece5b.jpg';

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [slide1, slide2, slide3, slide4];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[716px] flex items-center overflow-hidden">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={\`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out \${index === currentSlide ? 'opacity-100' : 'opacity-0'}\`}
          >
            <div className="w-full h-full bg-cover bg-center scale-105 animate-[pulse_10s_ease-in-out_infinite]" style={{ backgroundImage: \`url(\${slide})\` }}></div>
            <div className="absolute inset-0 bg-ink-black/40 backdrop-brightness-75"></div>
          </div>
        ))}
        
        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={\`w-3 h-3 rounded-full transition-all duration-300 \${index === currentSlide ? 'bg-academic-gold scale-125' : 'bg-paper-white/50 hover:bg-paper-white/80'}\`}
              aria-label={\`Go to slide \${index + 1}\`}
            />
          ))}
        </div>

        <div className="relative z-10 px-margin-desktop max-w-container-max mx-auto w-full text-paper-white">
          <div className="max-w-3xl">
            <span className="font-label-lg text-label-lg text-academic-gold uppercase tracking-widest mb-4 block">Established 2015</span>
            <h1 className="font-display-lg text-display-lg mb-6 leading-tight">Nurturing Minds, <br/>Global Excellence</h1>
            <p className="font-body-lg text-body-lg text-paper-white/90 max-w-xl">Noorul Ilm International College is dedicated to fostering an environment where academic rigor meets spiritual and moral integrity.</p>
          </div>
        </div>
      </section>
`;

const startIdx = content.indexOf('import { createLazyFileRoute');
const endIdx = content.indexOf('{/* Our Story */}');
content = content.substring(0, startIdx) + imports + '      ' + content.substring(endIdx);
fs.writeFileSync('src/routes/index.lazy.tsx', content);
