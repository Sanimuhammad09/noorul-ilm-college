import { Link } from '@tanstack/react-router'

export function Footer() {
  return (
    <footer className="bg-tertiary text-paper-white w-full pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop max-w-container-max mx-auto">
        <div className="md:col-span-1">
          <div className="font-headline-md text-headline-md text-academic-gold mb-6">Noorul Ilm</div>
          <p className="font-body-sm text-body-sm text-on-tertiary-fixed-variant leading-relaxed">
            Elevating educational standards through a synthesis of global excellence and traditional morality since 2015.
          </p>
        </div>
        <div>
          <h4 className="font-label-lg text-label-lg text-paper-white mb-6">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link to="/" className="font-body-sm text-body-sm text-on-tertiary-fixed-variant hover:text-academic-gold transition-colors">Privacy Policy</Link></li>
            <li><Link to="/" className="font-body-sm text-body-sm text-on-tertiary-fixed-variant hover:text-academic-gold transition-colors">Terms of Service</Link></li>
            <li><Link to="/" className="font-body-sm text-body-sm text-on-tertiary-fixed-variant hover:text-academic-gold transition-colors">Accreditation</Link></li>
            <li><Link to="/campus-gallery" className="font-body-sm text-body-sm text-on-tertiary-fixed-variant hover:text-academic-gold transition-colors">Campus Map</Link></li>
            <li><Link to="/" className="font-body-sm text-body-sm text-on-tertiary-fixed-variant hover:text-academic-gold transition-colors">Careers</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-lg text-label-lg text-paper-white mb-6">Admissions</h4>
          <ul className="space-y-3">
            <li><Link to="/admissions" className="font-body-sm text-body-sm text-on-tertiary-fixed-variant hover:text-academic-gold transition-colors">Apply Now</Link></li>
            <li><Link to="/admissions" className="font-body-sm text-body-sm text-on-tertiary-fixed-variant hover:text-academic-gold transition-colors">Scholarships</Link></li>
            <li><Link to="/admissions" className="font-body-sm text-body-sm text-on-tertiary-fixed-variant hover:text-academic-gold transition-colors">Fee Structure</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-label-lg text-label-lg text-paper-white mb-6">Contact Us</h4>
          <div className="font-body-sm text-body-sm text-on-tertiary-fixed-variant space-y-4">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-academic-gold text-lg">location_on</span>
              <span>123 Academic Avenue,<br/>International Education District</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-academic-gold text-lg">phone</span>
              <span>+1 (555) 012-3456</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-white/10 px-margin-desktop max-w-container-max mx-auto text-center">
        <p className="font-body-sm text-body-sm text-on-tertiary-fixed-variant">© 2024 Noorul Ilm International College. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
