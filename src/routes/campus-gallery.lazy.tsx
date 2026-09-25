import { createLazyFileRoute } from '@tanstack/react-router'
import img7 from '../assets/images/775a66ad-33fe-4605-8927-be22af0e4c5f.jpg';
import img8 from '../assets/images/7ff7f9c3-a04c-4a43-ab47-e49da9c97a5c.jpg';
import img9 from '../assets/images/87bea5ad-3932-4a66-b68b-6b27bf765d41.jpg';
import img10 from '../assets/images/ad3967cd-5029-4c44-88f8-a2652c874f31.jpg';
import img11 from '../assets/images/ad6873e6-5b2c-495a-bd82-dd266efda86f.jpg';
import img12 from '../assets/images/c7d4bbd8-0b1e-4b52-87e7-48ebc851c0f6.jpg';
import img13 from '../assets/images/0c95167f-d698-4d13-b559-9e67b9cefad2.jpg';
import { useState } from 'react'

export const Route = createLazyFileRoute('/campus-gallery')({
  component: CampusGallery,
})

function CampusGallery() {
  const [filter, setFilter] = useState('All Gallery')

  return (
    <main className="pt-12 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      {/* Header Section */}
      <section className="mb-16 text-center max-w-3xl mx-auto">
        <span className="text-tertiary font-label-md uppercase tracking-widest mb-4 block">Capturing Excellence</span>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 italic">Our Vibrant Campus Life</h1>
        <p className="text-on-surface-variant text-body-lg">Explore the modern infrastructure, spiritual sanctuary, and dynamic learning environments that define the Noorul Ilm experience.</p>
      </section>

      {/* Gallery Filters */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12 border-b border-outline-variant/30 pb-4">
        {['All Gallery', 'Facilities', 'Academics', 'Islamic Life', 'Student Activities'].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`font-label-lg text-label-lg transition-all pb-4 border-b-2 ${filter === f ? 'text-primary border-tertiary' : 'text-on-surface-variant hover:text-primary border-transparent'}`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Masonry / Bento Grid Layout */}
      <div className="masonry-grid">
        {/* Item 1: Primary Feature (Academics) */}
        <div className="gallery-card masonry-item-large relative overflow-hidden rounded-xl border border-on-surface/10 shadow-sm bg-surface-container-lowest">
          <img alt="Student Life Collaboration" className="w-full h-full object-cover" src={img7}/>
          <div className="overlay absolute inset-0 flex flex-col justify-end p-8 text-surface">
            <span className="font-label-md bg-tertiary/90 text-on-surface px-3 py-1 w-fit rounded-full mb-3">Academics</span>
            <h3 className="font-headline-sm text-headline-sm">Collaborative Learning Spaces</h3>
            <p className="font-body-sm opacity-90 mt-2">Fostering innovation through peer interaction and modern pedagogical techniques.</p>
          </div>
        </div>
        {/* Item 2: Vertical Highlight (Islamic Life) */}
        <div className="gallery-card masonry-item-tall relative overflow-hidden rounded-xl border border-on-surface/10 shadow-sm bg-surface-container-lowest">
          <img alt="Spiritual Life" className="w-full h-full object-cover" src={img8}/>
          <div className="overlay absolute inset-0 flex flex-col justify-end p-6 text-surface">
            <span className="font-label-md bg-primary text-surface px-3 py-1 w-fit rounded-full mb-3">Islamic Life</span>
            <h3 className="font-headline-sm text-headline-sm">Spiritual Reflection</h3>
            <p className="font-body-sm opacity-90 mt-2">Integrating faith and character development in daily life.</p>
          </div>
        </div>
        {/* Item 3: Standard (Facilities) */}
        <div className="gallery-card relative overflow-hidden rounded-xl border border-on-surface/10 shadow-sm bg-surface-container-lowest">
          <img alt="Campus Infrastructure" className="w-full h-full object-cover" src={img9}/>
          <div className="overlay absolute inset-0 flex flex-col justify-end p-6 text-surface">
            <span className="font-label-md bg-tertiary/90 text-on-surface px-3 py-1 w-fit rounded-full mb-2">Facilities</span>
            <h4 className="font-label-lg">Modern Architecture</h4>
          </div>
        </div>
        {/* Item 4: Wide Highlight (Activities) */}
        <div className="gallery-card masonry-item-wide relative overflow-hidden rounded-xl border border-on-surface/10 shadow-sm bg-surface-container-lowest">
          <img alt="Activities and Events" className="w-full h-full object-cover" src={img10}/>
          <div className="overlay absolute inset-0 flex flex-col justify-end p-8 text-surface">
            <span className="font-label-md bg-primary text-surface px-3 py-1 w-fit rounded-full mb-3">Activities</span>
            <h3 className="font-headline-sm text-headline-sm">Annual Sports Meet</h3>
            <p className="font-body-sm opacity-90 mt-2">Celebrating physical excellence and teamwork across all houses.</p>
          </div>
        </div>
        {/* Additional Placeholders for Visual Rhythm */}
        <div className="gallery-card relative overflow-hidden rounded-xl border border-on-surface/10 shadow-sm bg-surface-container-lowest">
          <div className="w-full h-full bg-surface-container-highest flex items-center justify-center relative">
            <img alt="STEM Laboratories" className="w-full h-full object-cover" src={img11}/>
            <div className="overlay absolute inset-0 flex flex-col justify-end p-6 text-surface">
              <span className="font-label-md bg-tertiary/90 text-on-surface px-3 py-1 w-fit rounded-full mb-2">Facilities</span>
              <h4 className="font-label-lg">STEM Laboratories</h4>
            </div>
          </div>
        </div>
        <div className="gallery-card masonry-item-tall relative overflow-hidden rounded-xl border border-on-surface/10 shadow-sm bg-surface-container-lowest">
          <div className="w-full h-full bg-surface-container-highest relative">
            <img alt="Central Library" className="w-full h-full object-cover" src={img12}/>
            <div className="overlay absolute inset-0 flex flex-col justify-end p-6 text-surface">
              <span className="font-label-md bg-tertiary/90 text-on-surface px-3 py-1 w-fit rounded-full mb-2">Academics</span>
              <h4 className="font-label-lg">The Central Library</h4>
            </div>
          </div>
        </div>
        <div className="gallery-card relative overflow-hidden rounded-xl border border-on-surface/10 shadow-sm bg-surface-container-lowest">
          <div className="w-full h-full bg-surface-container-highest relative">
            <img alt="Main Quadrangle" className="w-full h-full object-cover" src={img13}/>
            <div className="overlay absolute inset-0 flex flex-col justify-end p-6 text-surface">
              <span className="font-label-md bg-primary text-surface px-3 py-1 w-fit rounded-full mb-2">Campus Life</span>
              <h4 className="font-label-lg">Main Quadrangle</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <section className="mt-24 bg-tertiary-container text-on-tertiary-container rounded-full p-12 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="font-headline-lg text-surface mb-4 italic">Witness Excellence in Person</h2>
          <p className="text-surface opacity-80 mb-8 max-w-xl mx-auto">Schedule a campus tour to see our world-class facilities and experience the vibrant Noorul Ilm atmosphere for yourself.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-tertiary text-on-surface px-8 py-4 rounded-lg font-label-lg hover:opacity-90 transition-all">Book a Campus Tour</button>
            <button className="border border-surface/30 text-surface px-8 py-4 rounded-lg font-label-lg hover:bg-surface/10 transition-all">Download Brochure</button>
          </div>
        </div>
      </section>
    </main>
  )
}
