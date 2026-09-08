import { createLazyFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Link } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/contact-us')({
  component: ContactUs,
})

function ContactUs() {
  const [buttonState, setButtonState] = useState<'idle' | 'sending' | 'sent'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setButtonState('sending')
    setTimeout(() => {
      setButtonState('sent')
      setTimeout(() => setButtonState('idle'), 3000)
    }, 1500)
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[409px] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-ink-black/40 z-10"></div>
        <div className="absolute inset-0 bg-cover" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAnKbvGHwCBiVMwK8oNyc67uIgqI8euMNtmp6kVfiFBS_hN1NxtctcS651_lz1tnvRIqfMBzRNLSrMptWm2hvYrOFCs44RsGlVZ8pZSrvVYv7OBuVP5nA8FvFsy0mpZPK6oBnaAtAG-eCKID8XHnSyLDd-w4u_tVbS_Bghvn87zM1G4JWouVGespV0OWzhEHHcGFKMdWUS9vE2gXQX2rUfZmU1YT9JJllfXPZE4evLSDVdWFIs_WXVYzQ')" }}></div>
        <div className="relative z-20 text-center px-margin-mobile">
          <h1 className="font-display-lg text-display-lg text-paper-white mb-4">Get in Touch</h1>
          <p className="font-body-lg text-body-lg text-paper-white/90 max-w-2xl mx-auto">Connecting our global academic community. Whether you're an applicant, parent, or partner, our team is here to assist you.</p>
        </div>
      </section>

      {/* Contact Grid (Bento Style) */}
      <section className="max-w-container-max mx-auto px-margin-desktop py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Contact Info Cards (Left Column) */}
          <div className="lg:col-span-5 space-y-gutter">
            <div className="bg-surface-container-lowest p-8 border border-ink-black/10 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-heritage-burgundy p-3 bg-paper-white rounded-full">location_on</span>
                <h3 className="font-headline-sm text-headline-sm text-heritage-burgundy">Our Campus</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant opacity-60">Soweto Campus</p>
                  <p className="font-body-md text-body-md">12 Heritage Avenue, Soweto, Lagos, Nigeria</p>
                </div>
                <div className="pt-4 border-t border-on-surface-variant/10">
                  <p className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant opacity-60">Ikorodu Annex</p>
                  <p className="font-body-md text-body-md">No. 45 Academic Close, Off Ikorodu Road, Lagos</p>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-8 border border-ink-black/10 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-heritage-burgundy p-3 bg-paper-white rounded-full">call</span>
                <h3 className="font-headline-sm text-headline-sm text-heritage-burgundy">Direct Contact</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant opacity-60">Admissions &amp; Admin</p>
                  <p className="font-body-lg text-body-lg font-semibold text-heritage-burgundy underline decoration-academic-gold underline-offset-4">admin@noorulilm.edu</p>
                  <p className="font-body-md text-body-md mt-1">+234 (0) 803 123 4567</p>
                </div>
                <div className="pt-4 border-t border-on-surface-variant/10">
                  <p className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant opacity-60">Registrar's Office</p>
                  <p className="font-body-md text-body-md">+234 (0) 902 987 6543</p>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form (Right Column) */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-10 border border-ink-black/10 rounded-lg shadow-sm">
            <h2 className="font-headline-md text-headline-md text-heritage-burgundy mb-8">Send an Inquiry</h2>
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label className="font-label-md text-label-md text-on-surface-variant mb-2">FULL NAME</label>
                  <input className="bg-transparent form-input-border py-2 px-0 text-on-surface font-body-md" placeholder="John Doe" type="text"/>
                </div>
                <div className="flex flex-col">
                  <label className="font-label-md text-label-md text-on-surface-variant mb-2">EMAIL ADDRESS</label>
                  <input className="bg-transparent form-input-border py-2 px-0 text-on-surface font-body-md" placeholder="john@example.com" type="email"/>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label className="font-label-md text-label-md text-on-surface-variant mb-2">INQUIRY TYPE</label>
                  <select className="bg-transparent form-input-border py-2 px-0 text-on-surface font-body-md">
                    <option>General Inquiry</option>
                    <option>Admissions</option>
                    <option>Employment</option>
                    <option>Media &amp; PR</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="font-label-md text-label-md text-on-surface-variant mb-2">PHONE (OPTIONAL)</label>
                  <input className="bg-transparent form-input-border py-2 px-0 text-on-surface font-body-md" placeholder="+234 ..." type="tel"/>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="font-label-md text-label-md text-on-surface-variant mb-2">YOUR MESSAGE</label>
                <textarea className="bg-transparent form-input-border py-2 px-0 text-on-surface font-body-md resize-none" placeholder="How can we help you?" rows={4}></textarea>
              </div>
              <button disabled={buttonState !== 'idle'} className={`w-full md:w-auto px-12 py-4 rounded-lg font-label-lg transition-all duration-300 transform active:scale-95 shadow-lg shadow-academic-gold/20 ${buttonState === 'sent' ? 'bg-green-600 text-white' : 'bg-academic-gold text-ink-black hover:bg-heritage-burgundy hover:text-paper-white'}`} type="submit">
                {buttonState === 'idle' && 'SUBMIT ENQUIRY'}
                {buttonState === 'sending' && 'SENDING...'}
                {buttonState === 'sent' && 'SENT SUCCESSFULLY'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[600px] relative bg-surface-container-high overflow-hidden">
        <div className="w-full h-full grayscale-[0.5] hover:grayscale-0 transition-all duration-700 cursor-grab active:cursor-grabbing">
          <img alt="Map" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCflvok53KTs4tlTyKGPOnVXwtOcL0hSfpzyrL_VZveRL1CxsEG5rhQKhuX_jMjlGZ9gexJEhgXtG_zthvsa4nNK7cADdGYHS-hwfKjIvYAnYio7NBK4QhcsAc4YK-fIJoVjfxZVY2Ntjk6iQPxmxxbgnCpj_pxzmsjA5g54PXSIMuDHz_s_bTh2B-IlXABXpr-3rQ2RqK70PnOb8Ix2oS_clRIZ0bjA8sEeZ6yomBj6ouowPQUTTcmqg"/>
        </div>
        <div className="absolute bottom-12 left-12 p-6 bg-paper-white/90 backdrop-blur-md border border-ink-black/10 rounded-lg shadow-2xl max-w-sm hidden md:block">
          <h4 className="font-headline-sm text-headline-sm text-heritage-burgundy mb-2">Visit Our Campus</h4>
          <p className="font-body-sm text-body-sm text-on-surface mb-4">Monday – Friday: 8:00 AM – 5:00 PM<br/>Saturday: By Appointment only</p>
          <a className="flex items-center text-heritage-burgundy font-label-lg gap-2 hover:translate-x-2 transition-transform" href="#">
            GET DIRECTIONS
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
      </section>

      {/* FAQ CTA Section */}
      <section className="bg-heritage-burgundy text-paper-white py-20 px-margin-mobile">
        <div className="max-w-container-max mx-auto text-center">
          <h2 className="font-headline-lg text-headline-lg mb-6">Need Immediate Answers?</h2>
          <p className="font-body-lg text-body-lg text-paper-white/80 mb-10 max-w-xl mx-auto">Browse our frequently asked questions about admissions, fees, and campus life before reaching out.</p>
          <Link to="/admissions" className="inline-block border-2 border-academic-gold text-academic-gold px-10 py-3 rounded font-label-lg hover:bg-academic-gold hover:text-heritage-burgundy transition-all">
            VISIT HELP CENTER
          </Link>
        </div>
      </section>
    </main>
  )
}
