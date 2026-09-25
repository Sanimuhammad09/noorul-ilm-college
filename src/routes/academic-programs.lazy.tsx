import { createLazyFileRoute } from '@tanstack/react-router'
import bgImg0 from '../assets/images/0c95167f-d698-4d13-b559-9e67b9cefad2.jpg';
import img0 from '../assets/images/0c95167f-d698-4d13-b559-9e67b9cefad2.jpg';
import img1 from '../assets/images/175b7c9d-3353-4781-be2f-c3c46d517ea2.jpg';
import img2 from '../assets/images/2928cca9-fa34-46ba-9230-e5d76a08447d.jpg';
import img3 from '../assets/images/43fcfc05-3f2f-4594-a3d2-741e9b70f588.jpg';
import { Link } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/academic-programs')({
  component: AcademicPrograms,
})

function AcademicPrograms() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[614px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="w-full h-full bg-cover bg-center transition-transform duration-1000 hover:scale-105" style={{ backgroundImage: `url(${bgImg0})` }}>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-heritage-burgundy/90 to-transparent"></div>
        </div>
        <div className="relative z-10 px-margin-desktop max-w-container-max mx-auto w-full">
          <div className="max-w-2xl text-paper-white space-y-6">
            <span className="inline-block px-4 py-1 rounded-full border border-academic-gold text-academic-gold font-label-md text-label-md tracking-widest uppercase">Global Excellence</span>
            <h1 className="font-display-lg text-display-lg font-bold leading-tight">Academic Pathways to Global Success</h1>
            <p className="font-body-lg text-body-lg text-paper-white/80">Providing a world-class education through a meticulously blended Nigerian, Saudi Arabian, and British curriculum designed for future leaders.</p>
          </div>
        </div>
      </section>
      
      {/* Programs Overview (Bento Grid) */}
      <section className="py-24 px-margin-desktop max-w-container-max mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-heritage-burgundy mb-4">Our Educational Framework</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">We bridge the best of three worlds, ensuring our students are culturally grounded, spiritually enriched, and globally competitive.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Pre-Primary */}
          <div className="md:col-span-4 group relative bg-white border border-outline-variant/30 rounded-lg p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg academic-gradient">
            <div className="mb-6 flex justify-between items-start">
              <span className="material-symbols-outlined text-4xl text-heritage-burgundy">child_care</span>
              <span className="text-label-md font-bold text-academic-gold">AGES 3-5</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-heritage-burgundy mb-4">Pre-Primary</h3>
            <p className="text-on-surface-variant font-body-sm mb-6">Our Early Childhood program focuses on sensory development, language acquisition, and foundational literacy in a nurturing, play-based environment.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-body-sm"><span className="material-symbols-outlined text-academic-gold scale-75">check_circle</span> Montessori Methodology</li>
              <li className="flex items-center gap-2 text-body-sm"><span className="material-symbols-outlined text-academic-gold scale-75">check_circle</span> Early Arabic Immersion</li>
              <li className="flex items-center gap-2 text-body-sm"><span className="material-symbols-outlined text-academic-gold scale-75">check_circle</span> Creative Arts &amp; Play</li>
            </ul>
            <a className="inline-flex items-center text-heritage-burgundy font-label-lg hover:gap-2 transition-all" href="#">Explore Level <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span></a>
          </div>
          {/* Primary */}
          <div className="md:col-span-8 group relative bg-white border border-outline-variant/30 rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl">
            <div className="grid md:grid-cols-2 h-full">
              <div className="p-8 flex flex-col justify-center">
                <div className="mb-6 flex justify-between items-start">
                  <span className="material-symbols-outlined text-4xl text-heritage-burgundy">school</span>
                  <span className="text-label-md font-bold text-academic-gold">GRADES 1-6</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-heritage-burgundy mb-4">Primary School</h3>
                <p className="text-on-surface-variant font-body-sm mb-6">The foundational stage where we blend the Nigerian National Curriculum with Saudi Arabian and British standards to build robust academic pillars.</p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-paper-white p-3 rounded">
                    <h4 className="font-label-md text-heritage-burgundy">Foundational</h4>
                    <p className="text-[10px] uppercase tracking-wider text-on-surface-variant">Numeracy &amp; Literacy</p>
                  </div>
                  <div className="bg-paper-white p-3 rounded">
                    <h4 className="font-label-md text-heritage-burgundy">Cultural</h4>
                    <p className="text-[10px] uppercase tracking-wider text-on-surface-variant">Islamic &amp; Saudi Values</p>
                  </div>
                </div>
                <a className="inline-flex items-center text-heritage-burgundy font-label-lg hover:gap-2 transition-all" href="#">Curriculum Details <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span></a>
              </div>
              <div className="relative min-h-[300px]">
                <img alt="Primary school students" className="absolute inset-0 w-full h-full object-cover" src={img0}/>
              </div>
            </div>
          </div>
          {/* College & MIQHMEP */}
          <div className="md:col-span-12 group relative bg-ink-black text-paper-white rounded-lg overflow-hidden transition-all duration-500 hover:shadow-2xl">
            <div className="absolute inset-0 opacity-20"></div>
            <div className="relative z-10 p-12 grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-academic-gold font-label-md">
                  <span className="w-8 h-[1px] bg-academic-gold"></span> ADVANCED LEVEL
                </div>
                <h3 className="font-display-lg text-headline-lg font-bold text-academic-gold">College &amp; MIQHMEP</h3>
                <p className="text-paper-white/70 font-body-lg">A rigorous secondary program leading to international recognition. We prepare students for the Cambridge IGCSE and high-level medical and engineering pathways through our specialized MIQHMEP track.</p>
                <div className="grid grid-cols-3 gap-6 pt-6">
                  <div className="text-center p-4 border border-paper-white/10 rounded-lg hover:bg-white/5 transition-colors">
                    <span className="material-symbols-outlined text-academic-gold mb-2">auto_stories</span>
                    <p className="text-[10px] uppercase font-bold tracking-tighter">IGCSE</p>
                  </div>
                  <div className="text-center p-4 border border-paper-white/10 rounded-lg hover:bg-white/5 transition-colors">
                    <span className="material-symbols-outlined text-academic-gold mb-2">science</span>
                    <p className="text-[10px] uppercase font-bold tracking-tighter">STEM FOCUS</p>
                  </div>
                  <div className="text-center p-4 border border-paper-white/10 rounded-lg hover:bg-white/5 transition-colors">
                    <span className="material-symbols-outlined text-academic-gold mb-2">public</span>
                    <p className="text-[10px] uppercase font-bold tracking-tighter">CAMBRIDGE</p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-academic-gold/30">
                <img alt="High school student" className="w-full h-full object-cover" src={img1}/>
                <div className="absolute bottom-4 left-4 glass-panel p-4 rounded text-ink-black max-w-[200px]" style={{ background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(8px)', border: '1px solid rgba(85, 22, 37, 0.1)' }}>
                  <p className="text-[10px] font-bold text-heritage-burgundy mb-1">PROGRAM HIGHLIGHT</p>
                  <p className="text-xs font-bold">Cambridge Lower Secondary Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="bg-surface-container py-24">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-heritage-burgundy w-16 h-1"></div>
              <h2 className="font-headline-lg text-headline-lg text-heritage-burgundy">Curriculum Excellence: A Triple-Blended Approach</h2>
              <p className="text-body-lg text-on-surface-variant italic border-l-4 border-academic-gold pl-6 py-2">"Our unique blend ensures that while students excel in global examinations like IGCSE, they remain deeply rooted in the values of Nigeria and the academic traditions of Saudi Arabia."</p>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-heritage-burgundy">military_tech</span>
                  </div>
                  <div>
                    <h4 className="font-label-lg text-heritage-burgundy uppercase mb-1">Nigerian National Excellence</h4>
                    <p className="text-body-sm text-on-surface-variant">Core alignment with local WAEC/NECO requirements for seamless regional transition.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-heritage-burgundy">language</span>
                  </div>
                  <div>
                    <h4 className="font-label-lg text-heritage-burgundy uppercase mb-1">British International Standards</h4>
                    <p className="text-body-sm text-on-surface-variant">Rigorous preparation for Cambridge Lower Secondary and IGCSE qualifications.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-heritage-burgundy">mosque</span>
                  </div>
                  <div>
                    <h4 className="font-label-lg text-heritage-burgundy uppercase mb-1">Saudi Arabian Curriculum</h4>
                    <p className="text-body-sm text-on-surface-variant">Intensive Arabic language and Islamic studies for cultural and spiritual depth.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img alt="Happy students" className="rounded-lg shadow-md aspect-[4/5] object-cover" src={img2}/>
                  <div className="bg-academic-gold p-8 rounded-lg text-heritage-burgundy text-center">
                    <p className="text-display-lg font-bold">100%</p>
                    <p className="text-label-md font-bold uppercase tracking-widest">IGCSE Success Rate</p>
                  </div>
                </div>
                <div className="pt-12 space-y-4">
                  <div className="bg-heritage-burgundy p-8 rounded-lg text-paper-white text-center">
                    <p className="text-headline-lg font-bold">50+</p>
                    <p className="text-label-md font-bold uppercase tracking-widest">Global Partners</p>
                  </div>
                  <img alt="Aerial view of campus" className="rounded-lg shadow-md aspect-[4/5] object-cover" src={img3}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-24 bg-white border-y border-outline-variant/10">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter text-center">
            <div>
              <p className="font-display-lg text-headline-lg text-academic-gold mb-2">15:1</p>
              <p className="font-label-md text-on-surface-variant uppercase">Student to Teacher Ratio</p>
            </div>
            <div>
              <p className="font-display-lg text-headline-lg text-academic-gold mb-2">24</p>
              <p className="font-label-md text-on-surface-variant uppercase">Extracurricular Clubs</p>
            </div>
            <div>
              <p className="font-display-lg text-headline-lg text-academic-gold mb-2">10</p>
              <p className="font-label-md text-on-surface-variant uppercase">Nationalities Represented</p>
            </div>
            <div>
              <p className="font-display-lg text-headline-lg text-academic-gold mb-2">3</p>
              <p className="font-label-md text-on-surface-variant uppercase">International Curricula</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-margin-desktop">
        <div className="max-w-container-max mx-auto bg-heritage-burgundy rounded-2xl p-12 md:p-24 relative overflow-hidden text-center text-paper-white">
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="font-display-lg text-headline-lg-mobile md:text-display-lg font-bold">Begin Your Journey to Excellence</h2>
            <p className="font-body-lg text-body-lg opacity-80">Join a community of scholars and innovators. Admissions are now open for the upcoming academic session.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link to="/admissions" className="px-12 py-4 bg-academic-gold text-ink-black font-bold text-label-lg rounded hover:bg-white transition-colors duration-300">Apply Now</Link>
              <button className="px-12 py-4 border border-paper-white/30 text-paper-white font-bold text-label-lg rounded hover:bg-white/10 transition-colors duration-300">Download Prospectus</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
