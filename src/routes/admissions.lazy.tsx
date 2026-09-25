import { createLazyFileRoute } from '@tanstack/react-router'
import bgImg4 from '../assets/images/56faa8f9-fbc2-453e-b2b0-e3bc5c534a17.jpg';
import bgImg5 from '../assets/images/61ff5787-a152-41e4-80c8-f47ef2bece5b.jpg';
import { Link } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createLazyFileRoute('/admissions')({
  component: Admissions,
})

function Admissions() {
  useEffect(() => {
    // Simple scroll reveal for cards
    const observerOptions = {
      threshold: 0.1
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-10')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.reveal-group').forEach(el => {
      el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10')
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[716px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(85,22,37,0.95)] to-[rgba(85,22,37,0.85)] z-10"></div>
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${bgImg4})` }}></div>
        </div>
        <div className="relative z-20 px-margin-desktop max-w-container-max mx-auto w-full text-surface">
          <span className="inline-block px-4 py-1 border border-tertiary text-tertiary font-label-md text-label-md mb-6 uppercase tracking-widest">Enrollment 2024/2025</span>
          <h1 className="font-display-lg text-display-lg mb-6 max-w-3xl leading-tight">Your Journey to Global Excellence Starts Here</h1>
          <p className="font-body-lg text-body-lg mb-10 max-w-2xl opacity-90">Join a community dedicated to intellectual rigor, moral integrity, and the pursuit of knowledge through the prestigious Cambridge International pathway.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-tertiary text-on-surface px-10 py-4 font-label-lg text-label-lg hover:scale-105 transition-transform duration-200">Apply Now</button>
            <button className="border border-surface text-surface px-10 py-4 font-label-lg text-label-lg hover:bg-surface hover:text-primary transition-all duration-200">Download Prospectus</button>
          </div>
        </div>
      </section>

      {/* Admission Steps (Asymmetric Grid) */}
      <section className="py-24 px-margin-desktop max-w-container-max mx-auto">
        <div className="mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">The Admission Process</h2>
          <div className="w-24 h-1 bg-tertiary"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Step 1 */}
          <div className="md:col-span-4 reveal-group">
            <div className="bg-surface-container-lowest p-8 border border-on-surface-variant/10 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <span className="font-display-lg text-display-lg text-tertiary/20 block mb-4">01</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Inquiry &amp; Tour</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">Schedule a visit to our campus to experience our world-class facilities and academic environment firsthand.</p>
              <a className="inline-flex items-center text-primary font-label-lg text-label-lg hover:text-tertiary" href="#">
                Book a Tour <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </a>
            </div>
          </div>
          {/* Step 2 */}
          <div className="md:col-span-8 reveal-group">
            <div className="bg-surface-container-lowest p-8 border border-on-surface-variant/10 h-full flex flex-col md:flex-row gap-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="md:w-1/2">
                <span className="font-display-lg text-display-lg text-tertiary/20 block mb-4">02</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Application Submission</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4">Complete our digital application form and submit the required academic records, identification, and reference letters.</p>
              </div>
              <div className="md:w-1/2 bg-surface-container h-48 md:h-full flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>description</span>
              </div>
            </div>
          </div>
          {/* Step 3 */}
          <div className="md:col-span-7 reveal-group">
            <div className="bg-primary p-8 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg text-surface">
              <span className="font-display-lg text-display-lg text-white/10 block mb-4">03</span>
              <h3 className="font-headline-sm text-headline-sm mb-4">Assessment &amp; Interview</h3>
              <p className="font-body-md text-body-md opacity-90 mb-6">Prospective students participate in age-appropriate entrance assessments focusing on core competencies, followed by a personal interview with our admissions panel.</p>
              <div className="flex gap-4">
                <span className="px-3 py-1 bg-white/10 rounded-full text-label-md font-label-md">Cognitive Ability</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-label-md font-label-md">Oral Interview</span>
              </div>
            </div>
          </div>
          {/* Step 4 */}
          <div className="md:col-span-5 reveal-group">
            <div className="bg-surface-container-lowest p-8 border border-on-surface-variant/10 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <span className="font-display-lg text-display-lg text-tertiary/20 block mb-4">04</span>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Enrollment Offer</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Successful candidates receive a formal letter of offer. Secure your place by completing the registration and fee payment process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cambridge Pathway Info */}
      <section className="bg-tertiary text-surface py-24">
        <div className="px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="font-headline-lg text-headline-lg">The Cambridge Pathway</h2>
            <p className="font-body-lg text-body-lg text-on-tertiary-fixed-variant leading-relaxed">
              Noorul Ilm International College proudly implements the Cambridge International Curriculum, a global standard for education. Our pathway is designed to help students discover new abilities and a wider world.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-tertiary mt-1">check_circle</span>
                <div>
                  <h4 className="font-label-lg text-label-lg text-tertiary">Cambridge Primary (Ages 5-11)</h4>
                  <p className="font-body-sm text-body-sm opacity-70">Focusing on developing foundation skills in core subjects.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-tertiary mt-1">check_circle</span>
                <div>
                  <h4 className="font-label-lg text-label-lg text-tertiary">Cambridge Lower Secondary (Ages 11-14)</h4>
                  <p className="font-body-sm text-body-sm opacity-70">Developing learner confidence and subject knowledge.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-tertiary mt-1">check_circle</span>
                <div>
                  <h4 className="font-label-lg text-label-lg text-tertiary">Cambridge Upper Secondary (Ages 14-16)</h4>
                  <p className="font-body-sm text-body-sm opacity-70">Cambridge IGCSE provides a broad and balanced curriculum.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-tertiary mt-1">check_circle</span>
                <div>
                  <h4 className="font-label-lg text-label-lg text-tertiary">Cambridge Advanced (Ages 16-19)</h4>
                  <p className="font-body-sm text-body-sm opacity-70">A-Levels preparing students for top-tier global universities.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 border border-tertiary/30 hidden lg:block"></div>
            <div className="relative z-10 w-full aspect-[4/5] bg-cover bg-center shadow-2xl" style={{ backgroundImage: `url(${bgImg5})` }}></div>
            <div className="absolute -bottom-6 -right-6 bg-tertiary p-8 text-on-surface hidden md:block">
              <div className="text-4xl font-bold font-display-lg">100%</div>
              <div className="text-sm font-label-md uppercase tracking-widest">University Acceptance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Entry Requirements */}
      <section className="py-24 px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary">Admission Requirements</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-4">Ensuring a seamless transition for every student.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-on-surface-variant/10 rounded-lg">
            <span className="material-symbols-outlined text-primary text-4xl mb-6">description</span>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Academic Documentation</h3>
            <ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
              <li className="flex gap-2"><span>•</span> Latest school reports (last 3 years)</li>
              <li className="flex gap-2"><span>•</span> Transcript of grades</li>
              <li className="flex gap-2"><span>•</span> Transfer certificate</li>
            </ul>
          </div>
          <div className="p-8 border border-on-surface-variant/10 rounded-lg">
            <span className="material-symbols-outlined text-primary text-4xl mb-6">person</span>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Identity Verification</h3>
            <ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
              <li className="flex gap-2"><span>•</span> Passport copy (Student &amp; Guardian)</li>
              <li className="flex gap-2"><span>•</span> Recent passport-sized photos</li>
              <li className="flex gap-2"><span>•</span> Immunization records</li>
            </ul>
          </div>
          <div className="p-8 border border-on-surface-variant/10 rounded-lg">
            <span className="material-symbols-outlined text-primary text-4xl mb-6">language</span>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Language Proficiency</h3>
            <ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant">
              <li className="flex gap-2"><span>•</span> Fluent command of English</li>
              <li className="flex gap-2"><span>•</span> Internal EAL assessment if required</li>
              <li className="flex gap-2"><span>•</span> Supporting language certifications</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-surface-container py-24">
        <div className="px-margin-desktop max-w-3xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group bg-surface rounded-lg p-6 cursor-pointer" open>
              <summary className="flex justify-between items-center font-headline-sm text-headline-sm text-primary list-none">
                <span>When is the best time to apply?</span>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="font-body-md text-body-md text-on-surface-variant mt-4 leading-relaxed">
                We operate on a rolling admissions basis, but we highly recommend applying between October and March for the following September intake to ensure space availability.
              </p>
            </details>
            <details className="group bg-surface rounded-lg p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-headline-sm text-headline-sm text-primary list-none">
                <span>Is there a scholarship program?</span>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="font-body-md text-body-md text-on-surface-variant mt-4 leading-relaxed">
                Yes, Noorul Ilm offers merit-based scholarships for students demonstrating exceptional academic achievement or artistic/athletic talent. Inquire with the admissions office for details.
              </p>
            </details>
            <details className="group bg-surface rounded-lg p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-headline-sm text-headline-sm text-primary list-none">
                <span>What are the class sizes?</span>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="font-body-md text-body-md text-on-surface-variant mt-4 leading-relaxed">
                We maintain an average student-to-teacher ratio of 15:1 to ensure personalized attention and optimal learning outcomes for every student.
              </p>
            </details>
            <details className="group bg-surface rounded-lg p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-headline-sm text-headline-sm text-primary list-none">
                <span>Do you provide transportation?</span>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="font-body-md text-body-md text-on-surface-variant mt-4 leading-relaxed">
                Yes, we offer a safe and reliable school bus service across major metropolitan routes. Detailed route maps are available upon request.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center px-margin-desktop">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="font-display-lg text-display-lg text-primary">Ready to Begin Your Excellence?</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Our admissions team is here to guide you through every step of the process. Start your application today or reach out for more information.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact-us" className="bg-primary text-surface px-12 py-5 font-label-lg text-label-lg hover:shadow-xl transition-all">Start Online Application</Link>
            <Link to="/contact-us" className="border-2 border-primary text-primary px-12 py-5 font-label-lg text-label-lg hover:bg-primary hover:text-surface transition-all">Speak to an Advisor</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
