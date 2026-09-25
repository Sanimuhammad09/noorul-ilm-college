import { createLazyFileRoute } from '@tanstack/react-router'
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
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="w-full h-full bg-cover bg-center scale-105 animate-[pulse_10s_ease-in-out_infinite]" style={{ backgroundImage: `url(${slide})` }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent backdrop-brightness-75"></div>
          </div>
        ))}
        
        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-tertiary scale-125' : 'bg-surface/50 hover:bg-surface/80'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="relative z-10 px-margin-desktop max-w-container-max mx-auto w-full text-surface">
          <div className="max-w-3xl">
            <span className="font-label-lg text-label-lg text-tertiary uppercase tracking-widest mb-4 block">Established 2015</span>
            <h1 className="font-display-lg text-[64px] mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-tertiary drop-shadow-lg">Nurturing Minds, <br/>Global Excellence</h1>
            <p className="font-body-lg text-xl text-surface/95 max-w-xl font-light leading-relaxed drop-shadow-md">Noorul Ilm International College is dedicated to fostering an environment where academic rigor meets spiritual and moral integrity.</p>
          </div>
        </div>
      </section>
      {/* Our Story */}
      <section className="py-32 bg-surface relative overflow-hidden">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -top-6 -left-6 w-32 h-32 border-l-8 border-t-8 border-tertiary z-0 opacity-80"></div>
                <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                  <img alt="Classroom" className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105" src={img5}/>
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 -z-10 rounded-full blur-3xl"></div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-8">Our Story</h2>
              <div className="space-y-6 text-on-surface-variant font-body-lg leading-relaxed">
                <p>Founded in 2015, Noorul Ilm International College began with a singular vision: to bridge the gap between traditional moral values and modern global academic standards. Our journey started as a boutique institution focused on personalized excellence.</p>
                <p>Over the past decade, we have expanded our horizon, becoming a beacon of prestigious education in the region. We pride ourselves on creating an atmosphere where students are not just learners, but future leaders equipped with the resilience of character and the depth of knowledge required by the 21st century.</p>
                <blockquote className="border-l-4 border-primary pl-8 my-8 italic font-display-lg text-2xl text-primary">
                  "Our foundation is built on the belief that education is the most powerful tool for positive change when grounded in moral truth."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-surface-container-low">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="bg-white p-12 rounded-lg border border-on-surface-variant/5 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-16 h-16 bg-primary flex items-center justify-center rounded-full mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-surface text-3xl">visibility</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-6">Our Vision</h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                To be a world-class center of academic distinction, recognized globally for producing innovative thinkers who lead with unwavering integrity and Islamic morality.
              </p>
            </div>
            <div className="bg-white p-12 rounded-lg border border-on-surface-variant/5 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-16 h-16 bg-tertiary flex items-center justify-center rounded-full mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-on-surface text-3xl">assignment</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-6">Our Mission</h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                To empower students through a balanced curriculum of high-quality academics and spiritual growth, fostering a culture of excellence, discipline, and mutual respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values: Bento Grid */}
      <section className="py-24 bg-surface">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Core Values</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto font-body-lg">The pillars that define our institutional culture and guide our educational philosophy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-gutter">
            <div className="md:col-span-2 bg-gradient-to-br from-primary via-[#003399] to-[#001144] text-surface p-10 rounded-2xl shadow-2xl relative overflow-hidden flex flex-col justify-end min-h-[320px] group transition-all duration-500 hover:shadow-primary/30">
              <div className="absolute top-10 right-10 opacity-10 transition-transform duration-700 group-hover:scale-125 group-hover:-rotate-12">
                <span className="material-symbols-outlined text-[120px]">workspace_premium</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm mb-4">Excellence</h4>
              <p className="text-surface/80 max-w-lg">We pursue the highest standards in everything we do, from academic performance to institutional administration, ensuring a premium experience for every student.</p>
            </div>
            <div className="bg-white/60 backdrop-blur-xl p-10 rounded-2xl flex flex-col items-start justify-between border border-white shadow-xl hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">shield</span>
              <div>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Discipline</h4>
                <p className="text-on-surface-variant">Self-regulation and orderly behavior are central to academic success and character development.</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-tertiary/20 to-tertiary/5 backdrop-blur-xl p-10 rounded-2xl flex flex-col items-start justify-between border border-tertiary/30 shadow-xl hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">verified_user</span>
              <div>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Integrity</h4>
                <p className="text-on-surface-variant">Transparency, honesty, and ethical conduct form the bedrock of our college community.</p>
              </div>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-gutter">
              <div className="bg-white p-10 rounded-2xl shadow-lg border border-surface-variant hover:-translate-y-2 transition-all duration-500 hover:shadow-xl">
                <h4 className="font-label-lg text-label-lg text-tertiary mb-2 uppercase">Spiritual Foundation</h4>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Islamic Morality</h3>
                <p className="text-on-surface-variant font-body-sm">Integrating faith-based values into the modern educational journey to build well-rounded global citizens.</p>
              </div>
              <div className="bg-white p-10 rounded-2xl shadow-lg border border-surface-variant hover:-translate-y-2 transition-all duration-500 hover:shadow-xl">
                <h4 className="font-label-lg text-label-lg text-tertiary mb-2 uppercase">Mutual Bond</h4>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Respect</h3>
                <p className="text-on-surface-variant font-body-sm">Fostering an environment of inclusivity where every individual's dignity and perspective is honored.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 academic-gradient text-surface">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="font-display-lg text-display-lg text-tertiary mb-2">98%</div>
              <div className="font-label-lg uppercase tracking-widest opacity-80">University Placement</div>
            </div>
            <div>
              <div className="font-display-lg text-display-lg text-tertiary mb-2">1:12</div>
              <div className="font-label-lg uppercase tracking-widest opacity-80">Teacher Ratio</div>
            </div>
            <div>
              <div className="font-display-lg text-display-lg text-tertiary mb-2">15+</div>
              <div className="font-label-lg uppercase tracking-widest opacity-80">Nationalities</div>
            </div>
            <div>
              <div className="font-display-lg text-display-lg text-tertiary mb-2">2015</div>
              <div className="font-label-lg uppercase tracking-widest opacity-80">Founding Year</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="px-margin-desktop max-w-container-max mx-auto text-center relative z-10">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-8">Begin Your Academic Journey</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">Experience the standard of international education rooted in tradition. Join our global community of excellence.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a className="bg-gradient-to-r from-primary to-[#0044cc] text-surface px-10 py-4 rounded-full font-bold tracking-wide hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(0,35,111,0.3)]" href="/admissions">Apply for Admission</a>
            <a className="border-2 border-primary text-primary px-10 py-4 rounded-full font-bold tracking-wide hover:bg-primary hover:text-surface hover:scale-105 transition-all duration-300 shadow-lg" href="/contact-us">Schedule a Campus Tour</a>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <div className="grid grid-cols-12 h-full">
            <div className="border-r border-on-surface h-full"></div>
            <div className="border-r border-on-surface h-full"></div>
            <div className="border-r border-on-surface h-full"></div>
            <div className="border-r border-on-surface h-full"></div>
            <div className="border-r border-on-surface h-full"></div>
            <div className="border-r border-on-surface h-full"></div>
            <div className="border-r border-on-surface h-full"></div>
            <div className="border-r border-on-surface h-full"></div>
            <div className="border-r border-on-surface h-full"></div>
            <div className="border-r border-on-surface h-full"></div>
            <div className="border-r border-on-surface h-full"></div>
            <div className="border-r border-on-surface h-full"></div>
          </div>
        </div>
      </section>
    </main>
  )
}
