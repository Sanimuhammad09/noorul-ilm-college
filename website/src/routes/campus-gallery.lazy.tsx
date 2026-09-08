import { createLazyFileRoute } from '@tanstack/react-router'
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
        <span className="text-academic-gold font-label-md uppercase tracking-widest mb-4 block">Capturing Excellence</span>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-heritage-burgundy mb-6 italic">Our Vibrant Campus Life</h1>
        <p className="text-on-surface-variant text-body-lg">Explore the modern infrastructure, spiritual sanctuary, and dynamic learning environments that define the Noorul Ilm experience.</p>
      </section>

      {/* Gallery Filters */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12 border-b border-outline-variant/30 pb-4">
        {['All Gallery', 'Facilities', 'Academics', 'Islamic Life', 'Student Activities'].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`font-label-lg text-label-lg transition-all pb-4 border-b-2 ${filter === f ? 'text-heritage-burgundy border-academic-gold' : 'text-on-surface-variant hover:text-heritage-burgundy border-transparent'}`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Masonry / Bento Grid Layout */}
      <div className="masonry-grid">
        {/* Item 1: Primary Feature (Academics) */}
        <div className="gallery-card masonry-item-large relative overflow-hidden rounded-xl border border-ink-black/10 shadow-sm bg-surface-container-lowest">
          <img alt="Student Life Collaboration" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AP1WRLt8tOQmunRzaMeettbBdk6CKR3bnFF8thyK56BO9PD2plcNGPDO7tqiE41IFUv5I03byZhmgLU1ThJrV6q1OFuFc6ZO_Gn5fS6eerjjzktJtxNjzyuQy1EnCx1ez7RIk0HLBe5wR3j_OjbdlcocqIANgI84oPyirmDVvZYvRc0tC5-yC6TnJ-jbULHq-HvK1f8n8NpfW_KV2gNqn_1KtpWQhUJ-mOXDtBA3kzhdSg4q6CtBfMgttczYu_Y"/>
          <div className="overlay absolute inset-0 flex flex-col justify-end p-8 text-paper-white">
            <span className="font-label-md bg-academic-gold/90 text-ink-black px-3 py-1 w-fit rounded-full mb-3">Academics</span>
            <h3 className="font-headline-sm text-headline-sm">Collaborative Learning Spaces</h3>
            <p className="font-body-sm opacity-90 mt-2">Fostering innovation through peer interaction and modern pedagogical techniques.</p>
          </div>
        </div>
        {/* Item 2: Vertical Highlight (Islamic Life) */}
        <div className="gallery-card masonry-item-tall relative overflow-hidden rounded-xl border border-ink-black/10 shadow-sm bg-surface-container-lowest">
          <img alt="Spiritual Life" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AP1WRLtpH35D05Q_-rJXlk8dF33R3G7w0cUV5Cxa0DzjSkPwnbN602rCqrAtKU86zjnijY6SPRi3mcmxklXenBnxQVhNv8sbKWs2_X-jbXfdNL7kaHUEGnAkQiAsVkcNY74zzQhJhx63HQs2rYqh6pm2F0i2mXrdqAAbwd4sIH5O1cByKXgFHVsaHxxRUMzyvnwmZ2BlJ_SmRmuGvOg45sHD97lFPR-_zCI6S0TORlpYg0DT1V2MLtj0D5dKc-RZ"/>
          <div className="overlay absolute inset-0 flex flex-col justify-end p-6 text-paper-white">
            <span className="font-label-md bg-heritage-burgundy text-paper-white px-3 py-1 w-fit rounded-full mb-3">Islamic Life</span>
            <h3 className="font-headline-sm text-headline-sm">Spiritual Reflection</h3>
            <p className="font-body-sm opacity-90 mt-2">Integrating faith and character development in daily life.</p>
          </div>
        </div>
        {/* Item 3: Standard (Facilities) */}
        <div className="gallery-card relative overflow-hidden rounded-xl border border-ink-black/10 shadow-sm bg-surface-container-lowest">
          <img alt="Campus Infrastructure" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AP1WRLtpH35D05Q_-rJXlk8dF33R3G7w0cUV5Cxa0DzjSkPwnbN602rCqrAtKU86zjnijY6SPRi3mcmxklXenBnxQVhNv8sbKWs2_X-jbXfdNL7kaHUEGnAkQiAsVkcNY74zzQhJhx63HQs2rYqh6pm2F0i2mXrdqAAbwd4sIH5O1cByKXgFHVsaHxxRUMzyvnwmZ2BlJ_SmRmuGvOg45sHD97lFPR-_zCI6S0TORlpYg0DT1V2MLtj0D5dKc-RZ"/>
          <div className="overlay absolute inset-0 flex flex-col justify-end p-6 text-paper-white">
            <span className="font-label-md bg-academic-gold/90 text-ink-black px-3 py-1 w-fit rounded-full mb-2">Facilities</span>
            <h4 className="font-label-lg">Modern Architecture</h4>
          </div>
        </div>
        {/* Item 4: Wide Highlight (Activities) */}
        <div className="gallery-card masonry-item-wide relative overflow-hidden rounded-xl border border-ink-black/10 shadow-sm bg-surface-container-lowest">
          <img alt="Activities and Events" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AP1WRLsUFeOMr9OyCUAC-ggSOuCpLghidgNjFkbBd8rdYr0MlUi9vuAQ4XeVGtCd5Vp2viS0AefbjSbDBhENrEDgsoiRNyCP037Q_Kf_x8JImg-6H9ZM5gGiBWqhlIa07ZeBjkPLpHkT1mbNqjy6AAzt_7FfOThWoj_I1X-hy0cvcAiJnzInHdvwWDt_lAQSybSky6wX9V5qTU8YfOE1WW2IE1hUx6JOdwfJvjmPGrV9bXDjZtHgPeB4mHNYJZy_"/>
          <div className="overlay absolute inset-0 flex flex-col justify-end p-8 text-paper-white">
            <span className="font-label-md bg-heritage-burgundy text-paper-white px-3 py-1 w-fit rounded-full mb-3">Activities</span>
            <h3 className="font-headline-sm text-headline-sm">Annual Sports Meet</h3>
            <p className="font-body-sm opacity-90 mt-2">Celebrating physical excellence and teamwork across all houses.</p>
          </div>
        </div>
        {/* Additional Placeholders for Visual Rhythm */}
        <div className="gallery-card relative overflow-hidden rounded-xl border border-ink-black/10 shadow-sm bg-surface-container-lowest">
          <div className="w-full h-full bg-surface-container-highest flex items-center justify-center relative">
            <img alt="STEM Laboratories" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByM9lZSmTDyuXfLcgPNBLjAilcjsrWKqm4hAO8HP433KcEGL1UvFQ0BMbL2RK_XjZODTzTHHRZhBz6Ad2OB_6EL84P6SSEGwKj0Ht9kZ4s6YbWCDrCAnY0ZtZDI-p6DTsF4bpVsOyFszKQSIhh99PBinpjLTwgkp_AKSkEzg4yMEhPytfsMtxi9KUBx-MviGitbLrnBPxZDUQ0soF_hBaNIfsAq_J45y_hsMyK5e6aFGUvliw6oQz5pg"/>
            <div className="overlay absolute inset-0 flex flex-col justify-end p-6 text-paper-white">
              <span className="font-label-md bg-academic-gold/90 text-ink-black px-3 py-1 w-fit rounded-full mb-2">Facilities</span>
              <h4 className="font-label-lg">STEM Laboratories</h4>
            </div>
          </div>
        </div>
        <div className="gallery-card masonry-item-tall relative overflow-hidden rounded-xl border border-ink-black/10 shadow-sm bg-surface-container-lowest">
          <div className="w-full h-full bg-surface-container-highest relative">
            <img alt="Central Library" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9osUaYMrEly12o9h9E1i6gsZbJkl9oE-YBflfbdGUBm8JpeMffofdwjHhdJQooi2LRUj8Ks4DO_hECFpahTBAY8xMJLlza4RPuztY5BpOogFHkI0v7UEXtYRNB6bpfZX3BqQIUO-lJNs87-IyhnsoJS_rd1z93EokK9p6ltPYaFGh-A-urQvEQ7ysQUTzICg3mRyi_uKSzJtc_P5HBEOszxgzTeiy2WStNVtSCKFwxSgR9u4qZYjCKQ"/>
            <div className="overlay absolute inset-0 flex flex-col justify-end p-6 text-paper-white">
              <span className="font-label-md bg-academic-gold/90 text-ink-black px-3 py-1 w-fit rounded-full mb-2">Academics</span>
              <h4 className="font-label-lg">The Central Library</h4>
            </div>
          </div>
        </div>
        <div className="gallery-card relative overflow-hidden rounded-xl border border-ink-black/10 shadow-sm bg-surface-container-lowest">
          <div className="w-full h-full bg-surface-container-highest relative">
            <img alt="Main Quadrangle" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvD6NdWFglais_mkhHL_AtNOH3eUuMz1fQl9kb4e2KSq7sTRugiZU2q9xHdfi30D3A_m9Ii8gfvy8dh2ID1OzSpGqPtZ8_Y4GHruBwf1nv6TuFI7S7JZ2xNsE_g0cWt7eEP_lOZppl77JpM8LwwXgE030hAML1YzOZLYYKwyFjhKnxgbxFnMSaKoY38FR2eAOIW_mOfznOKXGiPYI6SORJXIsXwHEdsRjYPaU0KmPuOnK7PnqA_6y_nA"/>
            <div className="overlay absolute inset-0 flex flex-col justify-end p-6 text-paper-white">
              <span className="font-label-md bg-heritage-burgundy text-paper-white px-3 py-1 w-fit rounded-full mb-2">Campus Life</span>
              <h4 className="font-label-lg">Main Quadrangle</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <section className="mt-24 bg-tertiary-container text-on-tertiary-container rounded-full p-12 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="font-headline-lg text-paper-white mb-4 italic">Witness Excellence in Person</h2>
          <p className="text-paper-white opacity-80 mb-8 max-w-xl mx-auto">Schedule a campus tour to see our world-class facilities and experience the vibrant Noorul Ilm atmosphere for yourself.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-academic-gold text-ink-black px-8 py-4 rounded-lg font-label-lg hover:opacity-90 transition-all">Book a Campus Tour</button>
            <button className="border border-paper-white/30 text-paper-white px-8 py-4 rounded-lg font-label-lg hover:bg-paper-white/10 transition-all">Download Brochure</button>
          </div>
        </div>
      </section>
    </main>
  )
}
