import { createLazyFileRoute } from '@tanstack/react-router'
import bgImg1 from '../assets/images/175b7c9d-3353-4781-be2f-c3c46d517ea2.jpg';
import img4 from '../assets/images/56faa8f9-fbc2-453e-b2b0-e3bc5c534a17.jpg';
import { useEffect } from 'react'

export const Route = createLazyFileRoute('/leadership-board')({
  component: LeadershipBoard,
})

function LeadershipBoard() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    document.querySelectorAll('section').forEach(section => {
      section.classList.add('scroll-reveal')
      observer.observe(section)
    })
    
    return () => observer.disconnect()
  }, [])

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-fixed bg-center" style={{ backgroundImage: `url(${bgImg1})` }}></div>
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 text-center px-margin-mobile">
          <h1 className="font-display-lg text-display-lg text-surface mb-4">Governance &amp; Leadership</h1>
          <p className="font-body-lg text-body-lg text-tertiary max-w-2xl mx-auto">Steered by tradition, driven by innovation. Meet the visionary leadership defining the future of Noorul Ilm International College.</p>
        </div>
      </section>

      {/* Main Leader Feature */}
      <section className="py-24 px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-tertiary/20 rounded-xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
            <img alt="Principal Portrait" className="relative rounded-lg shadow-xl w-full object-cover aspect-[4/5] lg:aspect-auto" src={img4}/>
          </div>
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 text-primary">
              <span className="w-12 h-[2px] bg-primary"></span>
              <span className="font-label-lg uppercase tracking-widest">Executive Principal</span>
            </div>
            <h2 className="font-display-lg text-display-lg text-primary">Sheikh Habeebullah Yusuf Adewuyi</h2>
            <div className="border-l-4 border-tertiary pl-6 py-2">
              <p className="font-headline-sm text-headline-sm italic text-tertiary">"Education is not merely the acquisition of knowledge, but the refinement of the soul and the building of character for global citizenship."</p>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Sheikh Habeebullah Yusuf Adewuyi stands as the cornerstone of Noorul Ilm International College. With over two decades of experience in global academic administration and Islamic jurisprudence, he integrates traditional values with modern pedagogical excellence.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Under his guidance, the college has achieved international accreditation and foster a culture of intellectual curiosity. His leadership emphasizes a holistic approach to student development, ensuring that every graduate is equipped with both technical proficiency and moral integrity.
            </p>
            <div className="pt-4 flex space-x-4">
              <button className="bg-primary text-surface px-8 py-3 rounded-lg font-label-lg flex items-center space-x-2">
                <span>Read Full Bio</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
              <button className="border border-primary text-primary px-8 py-3 rounded-lg font-label-lg hover:bg-primary/5 transition-colors">
                Contact Office
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="bg-surface-container-low py-24">
        <div className="px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <h3 className="font-headline-lg text-headline-lg text-primary mb-4">Board of Directors</h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">Our distinguished board members bring a wealth of experience from academic, corporate, and religious sectors.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Board Member 1 */}
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-on-surface-variant/5 shadow-sm hover:shadow-md transition-shadow group">
              <div className="mb-6 overflow-hidden rounded-lg aspect-square bg-surface-container-highest flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-primary/20 group-hover:scale-110 transition-transform">account_circle</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-primary">Dr. Amina Khalid</h4>
              <p className="font-label-md text-label-md text-tertiary mb-4">Director of Academic Affairs</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">Specialist in international curriculum development with a PhD from Oxford University. Focused on STEM integration.</p>
              <hr className="my-4 border-on-surface-variant/10"/>
              <a className="text-primary font-label-lg flex items-center space-x-2 hover:underline" href="#">
                <span>Profile</span>
                <span className="material-symbols-outlined text-xs">open_in_new</span>
              </a>
            </div>
            {/* Board Member 2 */}
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-on-surface-variant/5 shadow-sm hover:shadow-md transition-shadow group">
              <div className="mb-6 overflow-hidden rounded-lg aspect-square bg-surface-container-highest flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-primary/20 group-hover:scale-110 transition-transform">account_circle</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-primary">Prof. Ibrahim Sani</h4>
              <p className="font-label-md text-label-md text-tertiary mb-4">Head of Research &amp; Ethics</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">A world-renowned scholar in Ethics and Philosophy, overseeing the college's moral and research frameworks.</p>
              <hr className="my-4 border-on-surface-variant/10"/>
              <a className="text-primary font-label-lg flex items-center space-x-2 hover:underline" href="#">
                <span>Profile</span>
                <span className="material-symbols-outlined text-xs">open_in_new</span>
              </a>
            </div>
            {/* Board Member 3 */}
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-on-surface-variant/5 shadow-sm hover:shadow-md transition-shadow group">
              <div className="mb-6 overflow-hidden rounded-lg aspect-square bg-surface-container-highest flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-primary/20 group-hover:scale-110 transition-transform">account_circle</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-primary">Malama Zainab Bello</h4>
              <p className="font-label-md text-label-md text-tertiary mb-4">Operations Manager</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">Strategic expert in institutional management with a focus on student welfare and facility excellence.</p>
              <hr className="my-4 border-on-surface-variant/10"/>
              <a className="text-primary font-label-lg flex items-center space-x-2 hover:underline" href="#">
                <span>Profile</span>
                <span className="material-symbols-outlined text-xs">open_in_new</span>
              </a>
            </div>
            {/* Board Member 4 */}
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-on-surface-variant/5 shadow-sm hover:shadow-md transition-shadow group">
              <div className="mb-6 overflow-hidden rounded-lg aspect-square bg-surface-container-highest flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-primary/20 group-hover:scale-110 transition-transform">account_circle</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-primary">Engr. Yusuf Alabi</h4>
              <p className="font-label-md text-label-md text-tertiary mb-4">Trustee</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">Leading the infrastructure development wing, ensuring a world-class environment for all scholars.</p>
              <hr className="my-4 border-on-surface-variant/10"/>
              <a className="text-primary font-label-lg flex items-center space-x-2 hover:underline" href="#">
                <span>Profile</span>
                <span className="material-symbols-outlined text-xs">open_in_new</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-margin-desktop bg-tertiary">
        <div className="max-w-container-max mx-auto grid grid-cols-2 md:grid-cols-4 gap-gutter text-center">
          <div>
            <div className="font-display-lg text-display-lg text-tertiary">25+</div>
            <p className="font-label-lg text-label-lg text-surface uppercase tracking-widest">Expert Faculty</p>
          </div>
          <div>
            <div className="font-display-lg text-display-lg text-tertiary">15</div>
            <p className="font-label-lg text-label-lg text-surface uppercase tracking-widest">Global Partners</p>
          </div>
          <div>
            <div className="font-display-lg text-display-lg text-tertiary">100%</div>
            <p className="font-label-lg text-label-lg text-surface uppercase tracking-widest">Placement Rate</p>
          </div>
          <div>
            <div className="font-display-lg text-display-lg text-tertiary">2004</div>
            <p className="font-label-lg text-label-lg text-surface uppercase tracking-widest">Established</p>
          </div>
        </div>
      </section>

      {/* Administrative Offices */}
      <section className="py-24 px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h3 className="font-headline-lg text-headline-lg text-primary">Administrative Support</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Dedicated teams ensuring the smooth operation of daily campus life.</p>
          </div>
          <button className="text-primary font-label-lg flex items-center space-x-2 group">
            <span>View Campus Directory</span>
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">chevron_right</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-on-surface-variant/10 rounded-lg hover:bg-surface transition-colors">
            <span className="material-symbols-outlined text-tertiary text-4xl mb-4">school</span>
            <h5 className="font-headline-sm text-headline-sm text-primary mb-2">Office of Admissions</h5>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">Guiding prospective students through their journey of joining our prestigious institution.</p>
            <a className="font-label-md text-label-md text-primary uppercase tracking-wider" href="mailto:admissions@noorulilm.edu">Contact Office</a>
          </div>
          <div className="p-8 border border-on-surface-variant/10 rounded-lg hover:bg-surface transition-colors">
            <span className="material-symbols-outlined text-tertiary text-4xl mb-4">account_balance</span>
            <h5 className="font-headline-sm text-headline-sm text-primary mb-2">Registrar's Office</h5>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">Managing academic records, transcripts, and institutional accreditations.</p>
            <a className="font-label-md text-label-md text-primary uppercase tracking-wider" href="mailto:registrar@noorulilm.edu">Contact Office</a>
          </div>
          <div className="p-8 border border-on-surface-variant/10 rounded-lg hover:bg-surface transition-colors">
            <span className="material-symbols-outlined text-tertiary text-4xl mb-4">groups</span>
            <h5 className="font-headline-sm text-headline-sm text-primary mb-2">Student Affairs</h5>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">Ensuring a vibrant, safe, and nurturing environment for student life and activities.</p>
            <a className="font-label-md text-label-md text-primary uppercase tracking-wider" href="mailto:studentaffairs@noorulilm.edu">Contact Office</a>
          </div>
        </div>
      </section>
    </main>
  )
}
