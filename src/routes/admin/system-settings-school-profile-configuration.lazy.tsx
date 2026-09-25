
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/admin/system-settings-school-profile-configuration')({
  component: SystemSettingsSchoolProfileConfiguration,
});

function SystemSettingsSchoolProfileConfiguration() {
  return (
    <main className="w-full pt-16 px-space-lg py-space-lg flex-1 bg-surface"><div className="flex flex-col w-full space-y-space-lg">
{/*  PAGE HEADER & TOP ACTION BAR  */}
<div className="flex flex-col xl:flex-row xl:items-start justify-between gap-space-lg bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
<div className="space-y-space-xs max-w-4xl">
<div className="flex flex-wrap items-center gap-space-sm">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/40 text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wider">
<span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
          Kaduna MoE Accredited • Reg #KD/MOE/AC/2018/0942
        </span>
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
          Core Engine v4.8.2
        </span>
</div>
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
        System Settings, Institutional Profile &amp; Accreditation Configuration
      </h1>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
        Master institutional settings, school branding, official Ministry of Education accreditation credentials, academic term definitions, financial currencies, security policies, and third-party API integrations.
      </p>
</div>
{/*  Top Action Bar  */}
<div className="flex flex-wrap items-center gap-space-sm shrink-0">
<button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container-low text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px] text-primary">cloud_download</span>
<span>Backup Snapshot</span>
</button>
<button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container-low text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px] text-on-surface-variant">terminal</span>
<span>Export Audit (.json)</span>
</button>
<button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container-low text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px] text-tertiary-container">history</span>
<span>Restore Point</span>
</button>
<button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary-container transition-all shadow-sm" id="save-cfg-btn" type="button">
<span className="material-symbols-outlined text-[18px]">check_circle</span>
<span>Save Configuration Changes</span>
</button>
</div>
</div>
{/*  SETTINGS HORIZONTAL PILL TABS  */}
<div className="flex items-center gap-space-xs p-1.5 bg-surface-container-low rounded-xl overflow-x-auto">
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-lowest text-primary font-label-lg text-label-lg shadow-sm whitespace-nowrap" type="button">
<span className="material-symbols-outlined text-[18px]">domain</span>
<span>1. School Profile &amp; Identity</span>
</button>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md whitespace-nowrap" type="button">
<span className="material-symbols-outlined text-[18px]">date_range</span>
<span>2. Academic &amp; Term Setup</span>
</button>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md whitespace-nowrap" type="button">
<span className="material-symbols-outlined text-[18px]">account_balance</span>
<span>3. Financial &amp; Tax Policies</span>
</button>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md whitespace-nowrap" type="button">
<span className="material-symbols-outlined text-[18px]">security</span>
<span>4. Security &amp; 2FA Governance</span>
</button>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md whitespace-nowrap" type="button">
<span className="material-symbols-outlined text-[18px]">hub</span>
<span>5. API &amp; Communication Integrations</span>
</button>
</div>
{/*  MAIN TWO-COLUMN WORKSPACE  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
{/*  LEFT / CENTRAL COLUMN (Span 7)  */}
<div className="lg:col-span-7 space-y-space-lg">
{/*  INSTITUTIONAL IDENTITY & CONTACT CARD  */}
<section className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
{/*  Card Header Hairline  */}
<div className="p-space-lg pb-space-md flex items-center justify-between bg-surface-container-lowest">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]">account_balance</span>
</div>
<div>
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block">Institutional Identity</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Official Credentials &amp; Contact Info</h2>
</div>
</div>
<span className="px-2.5 py-1 rounded-full bg-secondary-container/40 text-on-secondary-container font-label-sm text-label-sm uppercase">Active Charter</span>
</div>
<div className="p-space-lg pt-space-sm space-y-space-lg">
{/*  Crest & Branding Showcase  */}
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col sm:flex-row items-center gap-space-lg">
<div className="relative shrink-0 p-2 bg-surface-container-lowest rounded-xl shadow-sm">
<img alt="Official Crest of Noorul Ilm International School" className="w-24 h-24 object-contain rounded-md" src="https://lh3.googleusercontent.com/aida/AEtjO1WsD1jrUmkFZhC10959guFciAVC9rIObv9_XlSWOcgmwMjkOrazXc57A9dCLl1dZj6Wl4mIcNz6k0e_Cr5TqDsBY08qJO18u44-l7iBnwaplUT6AiakZKot3WaHdFfP8RqtwttLrCYzaHQFQu_smY7PHmtQ1qUVuusX-ZW_fgSDT2CND9DfjTuR4yCepYYM1niQKCjTykAUA9OqSaTZGuF1yjAAo_7mQryXQIp_obONQg_pkFSVNmgZuMNp"/>
<span className="absolute -top-1.5 -right-1.5 p-1 rounded-full bg-secondary text-on-secondary shadow-sm">
<span className="material-symbols-outlined text-[14px] block">verified</span>
</span>
</div>
<div className="flex-1 space-y-space-xs text-center sm:text-left">
<div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Noorul Ilm Crest &amp; Seal</h3>
<span className="text-label-sm font-label-sm px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-semibold">Primary Vector (.SVG)</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Rendered across official diplomas, Kaduna MoE quarterly returns, transcripts, and verified financial receipts.
              </p>
<div className="flex flex-wrap items-center justify-center sm:justify-start gap-space-xs pt-1">
<button className="px-3 py-1.5 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm hover:bg-primary-container transition-colors inline-flex items-center gap-1 shadow-sm" type="button">
<span className="material-symbols-outlined text-[15px]">upload</span>
<span>Change Logo</span>
</button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-sm text-label-sm hover:bg-surface-container transition-colors inline-flex items-center gap-1 shadow-sm" type="button">
<span className="material-symbols-outlined text-[15px] text-tertiary-container">workspace_premium</span>
<span>High-Res Stamp</span>
</button>
</div>
</div>
</div>
{/*  Form Fields Grid  */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
<div className="space-y-1.5 sm:col-span-2">
<label className="font-label-md text-label-md text-on-surface flex items-center justify-between">
<span>School Legal Name</span>
<span className="font-label-sm text-label-sm text-outline">Per Corporate Affairs Commission</span>
</label>
<div className="relative">
<input className="w-full px-3.5 py-2.5 bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface shadow-sm focus:outline-none focus:bg-surface-container-low transition-all" type="text" value="Noorul Ilm International School (Kaduna)"/>
</div>
</div>
<div className="space-y-1.5 sm:col-span-2">
<label className="font-label-md text-label-md text-on-surface">Institutional Motto</label>
<input className="w-full px-3.5 py-2.5 bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface shadow-sm focus:outline-none focus:bg-surface-container-low transition-all" type="text" value="Excellence in Ilm, Virtue &amp; Character"/>
</div>
<div className="space-y-1.5">
<label className="font-label-md text-label-md text-on-surface">MoE Registration Number</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-secondary">approval</span>
<input className="w-full pl-9 pr-3.5 py-2.5 bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface font-semibold shadow-sm focus:outline-none focus:bg-surface-container-low transition-all" type="text" value="KD/MOE/AC/2018/0942"/>
</div>
</div>
<div className="space-y-1.5">
<label className="font-label-md text-label-md text-on-surface">State Tax ID (KADIRS TIN)</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-outline">receipt_long</span>
<input className="w-full pl-9 pr-3.5 py-2.5 bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface font-mono shadow-sm focus:outline-none focus:bg-surface-container-low transition-all" type="text" value="KADIRS-TIN-8891204-01"/>
</div>
</div>
<div className="space-y-1.5 sm:col-span-2">
<label className="font-label-md text-label-md text-on-surface">Physical Campus Address</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-3 text-[18px] text-outline">location_on</span>
<textarea className="w-full pl-9 pr-3.5 py-2 bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface shadow-sm focus:outline-none focus:bg-surface-container-low transition-all" rows={2}>Plot 12–16, Muhammadu Buhari Way, Malali GRA, Kaduna North LGA, Kaduna State, Nigeria</textarea>
</div>
</div>
<div className="space-y-1.5">
<label className="font-label-md text-label-md text-on-surface">Official Administrative Email</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-outline">mail</span>
<input className="w-full pl-9 pr-3.5 py-2.5 bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface shadow-sm focus:outline-none focus:bg-surface-container-low transition-all" type="email" value="admin@noorulilm.sch.ng"/>
</div>
</div>
<div className="space-y-1.5">
<label className="font-label-md text-label-md text-on-surface">Direct Phone (Switchboard)</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-outline">phone_in_talk</span>
<input className="w-full pl-9 pr-3.5 py-2.5 bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface shadow-sm focus:outline-none focus:bg-surface-container-low transition-all" type="tel" value="+234 803 000 8820"/>
</div>
</div>
<div className="space-y-1.5 sm:col-span-2">
<label className="font-label-md text-label-md text-on-surface">Institutional Web Portal</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-outline">language</span>
<input className="w-full pl-9 pr-3.5 py-2.5 bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface shadow-sm focus:outline-none focus:bg-surface-container-low transition-all" type="url" value="www.noorulilm.sch.ng"/>
</div>
</div>
</div>
</div>
</section>
{/*  ACADEMIC FRAMEWORK & LOCALIZATION  */}
<section className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
<div className="p-space-lg pb-space-md flex items-center justify-between bg-surface-container-lowest">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]">calendar_month</span>
</div>
<div>
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block">Academic Framework</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Curricular Setup &amp; Localization</h2>
</div>
</div>
<span className="px-2.5 py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm">WAEC / NECO / BECE</span>
</div>
<div className="p-space-lg pt-space-sm space-y-space-md">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
<div className="space-y-1.5 sm:col-span-2">
<label className="font-label-md text-label-md text-on-surface">Academic Calendar System</label>
<div className="p-space-sm bg-surface-container-low rounded-lg flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[20px]">event_repeat</span>
<span className="font-body-md text-body-md text-on-surface font-medium">Three-Term Nigerian System (Harmattan, Lent, Easter)</span>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-semibold">Standardized</span>
</div>
</div>
<div className="space-y-1.5">
<label className="font-label-md text-label-md text-on-surface">Active Session Definition</label>
<div className="relative">
<select className="w-full px-3.5 py-2.5 bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface shadow-sm focus:outline-none focus:bg-surface-container-low transition-all appearance-none cursor-pointer">
<option selected>2026/2027 Academic Year</option>
<option>2025/2026 Academic Year (Archived)</option>
<option>2027/2028 Academic Year (Planning)</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">arrow_drop_down</span>
</div>
</div>
<div className="space-y-1.5">
<label className="font-label-md text-label-md text-on-surface">Active Operating Term</label>
<div className="relative">
<select className="w-full px-3.5 py-2.5 bg-surface-container-lowest rounded-lg font-body-md text-body-md text-on-surface shadow-sm focus:outline-none focus:bg-surface-container-low transition-all appearance-none cursor-pointer">
<option selected>1st Term (Harmattan) • Active</option>
<option>2nd Term (Lent)</option>
<option>3rd Term (Easter)</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">arrow_drop_down</span>
</div>
</div>
<div className="space-y-1.5">
<label className="font-label-md text-label-md text-on-surface">Time Zone Configuration</label>
<div className="flex items-center gap-2 px-3.5 py-2.5 bg-surface-container-lowest rounded-lg shadow-sm">
<span className="material-symbols-outlined text-outline text-[18px]">schedule</span>
<span className="font-body-md text-body-md text-on-surface">Africa/Lagos (GMT+1 / WAT)</span>
</div>
</div>
<div className="space-y-1.5">
<label className="font-label-md text-label-md text-on-surface">Default Operating Currency</label>
<div className="flex items-center gap-2 px-3.5 py-2.5 bg-surface-container-lowest rounded-lg shadow-sm">
<span className="w-5 h-5 rounded-full bg-surface-container-high flex items-center justify-center font-label-sm text-label-sm font-bold text-primary">₦</span>
<span className="font-body-md text-body-md text-on-surface font-medium">Nigerian Naira (NGN • ₦)</span>
</div>
</div>
<div className="space-y-1.5 sm:col-span-2">
<label className="font-label-md text-label-md text-on-surface">Grading Benchmark Standard</label>
<div className="p-space-md bg-surface-container-low rounded-lg space-y-2">
<div className="flex items-center justify-between">
<span className="font-headline-sm text-headline-sm text-primary">Kaduna MoE Standard Secondary Scale (A1–F9 WASSCE format)</span>
<span className="px-2 py-0.5 rounded bg-secondary-container/50 text-on-secondary-container font-label-sm text-label-sm font-semibold">Active Matrix</span>
</div>
<div className="grid grid-cols-4 sm:grid-cols-9 gap-1 text-center font-label-sm text-label-sm">
<div className="p-1 rounded bg-surface-container-lowest"><span className="font-bold text-primary">A1</span><br/><span className="text-outline">75-100</span></div>
<div className="p-1 rounded bg-surface-container-lowest"><span className="font-bold text-primary">B2</span><br/><span className="text-outline">70-74</span></div>
<div className="p-1 rounded bg-surface-container-lowest"><span className="font-bold text-primary">B3</span><br/><span className="text-outline">65-69</span></div>
<div className="p-1 rounded bg-surface-container-lowest"><span className="font-bold text-primary">C4</span><br/><span className="text-outline">60-64</span></div>
<div className="p-1 rounded bg-surface-container-lowest"><span className="font-bold text-primary">C5</span><br/><span className="text-outline">55-59</span></div>
<div className="p-1 rounded bg-surface-container-lowest"><span className="font-bold text-primary">C6</span><br/><span className="text-outline">50-54</span></div>
<div className="p-1 rounded bg-surface-container-lowest"><span className="font-bold text-tertiary-container">D7</span><br/><span className="text-outline">45-49</span></div>
<div className="p-1 rounded bg-surface-container-lowest"><span className="font-bold text-tertiary-container">E8</span><br/><span className="text-outline">40-44</span></div>
<div className="p-1 rounded bg-error-container/30"><span className="font-bold text-error">F9</span><br/><span className="text-error">0-39</span></div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
{/*  RIGHT COLUMN (Span 5)  */}
<div className="lg:col-span-5 space-y-space-lg">
{/*  ACCREDITATION CENTER CARD  */}
<section className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
<div className="p-space-lg pb-space-md flex items-center justify-between bg-surface-container-lowest">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]">policy</span>
</div>
<div>
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block">Statutory Compliance</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Accreditation Registry</h2>
</div>
</div>
<span className="px-2.5 py-1 rounded-full bg-secondary-container/40 text-on-secondary-container font-label-sm text-label-sm uppercase font-semibold">Fully Certified</span>
</div>
<div className="p-space-lg pt-space-sm space-y-space-md">
{/*  Big Expiry Banner with Data Graphic  */}
<div className="p-space-md rounded-xl bg-gradient-to-br from-surface-container-low via-surface-container-high to-surface-container-low flex items-center justify-between">
<div className="space-y-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">MoE QA Triennial Renewal</span>
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-primary">Dec 2029</span>
<span className="font-label-sm text-label-sm text-secondary font-semibold">3 Years Remaining</span>
</div>
<p className="font-body-sm text-body-sm text-outline">Next statutory audit: Term 3, 2028/2029 session</p>
</div>
{/*  Circular Progress SVG  */}
<div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
<svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
<circle className="stroke-surface-container-highest" cx="18" cy="18" fill="none" r="14" strokeWidth="3"></circle>
<circle className="stroke-secondary" cx="18" cy="18" fill="none" r="14" stroke-dasharray="87.96" stroke-dashoffset="19.35" strokeLinecap="round" strokeWidth="3"></circle>
</svg>
<span className="absolute font-label-sm text-label-sm font-bold text-primary">78%</span>
</div>
</div>
{/*  Document List  */}
<div className="space-y-space-xs">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Verified State Documents</span>
{/*  Cert 1  */}
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between hover:bg-surface-container transition-colors">
<div className="flex items-center gap-space-sm min-w-0">
<span className="material-symbols-outlined text-[24px] text-primary shrink-0">task</span>
<div className="min-w-0">
<div className="font-label-md text-label-md text-on-surface font-semibold truncate">Kaduna State QA Approval Certificate</div>
<div className="font-body-sm text-body-sm text-outline truncate">PDF • 4.2 MB • Ref: KD/QA/2024/771</div>
</div>
</div>
<button className="p-1.5 rounded-lg text-primary hover:bg-surface-container-lowest transition-colors" title="Download Document" type="button">
<span className="material-symbols-outlined text-[18px]">download</span>
</button>
</div>
{/*  Cert 2  */}
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between hover:bg-surface-container transition-colors">
<div className="flex items-center gap-space-sm min-w-0">
<span className="material-symbols-outlined text-[24px] text-secondary shrink-0">verified_user</span>
<div className="min-w-0">
<div className="font-label-md text-label-md text-on-surface font-semibold truncate">WAEC Official Recognition Charter</div>
<div className="font-body-sm text-body-sm text-outline truncate">PDF • 2.8 MB • Centre No: 4180291</div>
</div>
</div>
<button className="p-1.5 rounded-lg text-primary hover:bg-surface-container-lowest transition-colors" title="Download Document" type="button">
<span className="material-symbols-outlined text-[18px]">download</span>
</button>
</div>
{/*  Cert 3  */}
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between hover:bg-surface-container transition-colors">
<div className="flex items-center gap-space-sm min-w-0">
<span className="material-symbols-outlined text-[24px] text-tertiary-container shrink-0">local_fire_department</span>
<div className="min-w-0">
<div className="font-label-md text-label-md text-on-surface font-semibold truncate">Fire Safety &amp; Health Permit 2026</div>
<div className="font-body-sm text-body-sm text-outline truncate">PDF • 1.6 MB • Issued by Kaduna Fire Svc</div>
</div>
</div>
<button className="p-1.5 rounded-lg text-primary hover:bg-surface-container-lowest transition-colors" title="Download Document" type="button">
<span className="material-symbols-outlined text-[18px]">download</span>
</button>
</div>
</div>
<button className="w-full py-2 px-3 rounded-lg bg-surface-container-low text-primary font-label-md text-label-md hover:bg-surface-container transition-colors flex items-center justify-center gap-1.5" type="button">
<span className="material-symbols-outlined text-[18px]">file_upload</span>
<span>Upload New Statutory Credential</span>
</button>
</div>
</section>
{/*  CLOUD GATEWAYS & API CONNECTIONS  */}
<section className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
<div className="p-space-lg pb-space-md flex items-center justify-between bg-surface-container-lowest">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]">cloud_sync</span>
</div>
<div>
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block">Integrations</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Gateways &amp; Cloud Sync</h2>
</div>
</div>
<span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" title="All gateways operational"></span>
</div>
<div className="p-space-lg pt-space-sm space-y-space-sm">
{/*  Kaduna EMIS Cloud Synchronizer  */}
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[20px]">sync_alt</span>
</div>
<div className="min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface font-semibold truncate">Kaduna EMIS Cloud Synchronizer</span>
</div>
<div className="font-body-sm text-body-sm text-secondary font-medium">Connected • Real-time stream</div>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-secondary-container/40 text-on-secondary-container font-label-sm text-label-sm font-semibold">Active</span>
</div>
{/*  Paystack Gateway  */}
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center text-secondary shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[20px]">payments</span>
</div>
<div className="min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface font-semibold truncate">Paystack Payment Gateway</span>
</div>
<div className="font-body-sm text-body-sm text-on-surface-variant truncate">Live Mode (Webhook active: ₦ NGN)</div>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">Live</span>
</div>
{/*  GSM SMS Gateway  */}
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center text-tertiary-container shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[20px]">sms</span>
</div>
<div className="min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface font-semibold truncate">Kaduna GSM SMS Gateway</span>
</div>
<div className="font-body-sm text-body-sm text-on-surface-variant truncate">Connected (MTN, Airtel, Glo routes)</div>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">Routes Up</span>
</div>
{/*  NDPR Encrypted Backup  */}
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[20px]">enhanced_encryption</span>
</div>
<div className="min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface font-semibold truncate">NDPR Encrypted Backup</span>
</div>
<div className="font-body-sm text-body-sm text-on-surface-variant truncate">Daily 02:00 AM • Lagos Tier-IV</div>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-secondary-container/40 text-on-secondary-container font-label-sm text-label-sm font-semibold">Secure</span>
</div>
</div>
</section>
{/*  MAINTENANCE & EMERGENCY LOCKDOWN PROTOCOL  */}
<section className="bg-error-container/20 rounded-xl p-space-lg space-y-space-md shadow-sm">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-error-container text-on-error-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[22px]">lock_clock</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Maintenance &amp; Lockdown Protocol</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Immediate freeze for system upgrades or state exams</p>
</div>
</div>
<div className="p-space-md bg-surface-container-lowest rounded-lg space-y-space-sm shadow-sm">
<div className="flex items-center justify-between">
<div className="space-y-0.5">
<div className="font-label-md text-label-md text-on-surface font-semibold">System Maintenance Mode</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Redirects teachers and parents to maintenance page</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" id="maintenance-toggle" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-error"></div>
</label>
</div>
<div className="flex items-center justify-between pt-space-xs">
<div className="space-y-0.5">
<div className="font-label-md text-label-md text-on-surface font-semibold">Active Session Terminate</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Invalidate all portal bearer tokens (1,482 sessions)</div>
</div>
<button className="px-3 py-1.5 rounded-lg bg-error text-on-error font-label-sm text-label-sm hover:opacity-90 transition-opacity" id="purge-sessions-btn" type="button">
              Force Logout All
            </button>
</div>
</div>
</section>
</div>
</div>
{/*  SAVED TOAST FEEDBACK NOTIFICATION (MICRO-INTERACTION)  */}
<div className="fixed bottom-6 right-6 hidden transform transition-all duration-300 z-50" id="save-toast">
<div className="flex items-center gap-space-sm px-space-md py-3 rounded-xl bg-primary text-on-primary shadow-xl">
<span className="material-symbols-outlined text-secondary text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold">Configuration Persisted</span>
<span className="font-body-sm text-[12px] opacity-90">Institutional parameters updated successfully across cluster.</span>
</div>
</div>
</div>

</div></main>
  );
}
    