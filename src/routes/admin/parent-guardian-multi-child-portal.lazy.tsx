
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/admin/parent-guardian-multi-child-portal')({
  component: ParentGuardianMultiChildPortal,
});

function ParentGuardianMultiChildPortal() {
  return (
    <main className="w-full pt-16 px-space-lg py-space-lg flex-1 bg-surface">
<div className="flex flex-col w-full">
{/*  Breadcrumbs & Meta Top Strip  */}
<div className="flex flex-wrap items-center justify-between gap-y-space-sm mb-space-md">
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
<span className="hover:text-primary transition-colors cursor-pointer">Portals</span>
<span className="material-symbols-outlined text-[16px] text-outline">chevron_right</span>
<span className="hover:text-primary transition-colors cursor-pointer">Parent &amp; Guardian Gateway</span>
<span className="material-symbols-outlined text-[16px] text-outline">chevron_right</span>
<span className="text-primary font-semibold">Alhaji Mansur Danbaba Family Account</span>
</div>
<div className="flex items-center gap-space-sm">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm shadow-sm">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
        Term 1 Portal Live
      </span>
<span className="text-outline font-label-sm text-label-sm">Session: 2026/2027</span>
</div>
</div>
{/*  Header Banner & Action Bar  */}
<div className="relative bg-surface-container-lowest rounded-xl p-space-lg shadow-sm mb-space-lg overflow-hidden">
<div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-gradient-to-br from-primary-fixed/30 to-secondary-fixed/20 blur-3xl pointer-events-none"></div>
<div className="relative flex flex-col xl:flex-row xl:items-center justify-between gap-space-md">
<div className="max-w-3xl">
<div className="flex items-center gap-space-xs mb-1">
<span className="material-symbols-outlined text-primary text-[20px]">family_restroom</span>
<span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-bold">Guardian Gateway</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Parent &amp; Guardian Multi-Child Portal</h1>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">
          Centralized family portal managing academic performance, fee settlements, terminal report cards, bus tracking, and direct teacher communications for linked children.
        </p>
</div>
{/*  Quick Action Buttons  */}
<div className="flex flex-wrap items-center gap-space-xs shrink-0">
<button className="inline-flex items-center gap-1.5 px-space-md py-2.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-secondary/90 transition-all shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">credit_card</span>
<span>Pay Outstanding Fees (Paystack)</span>
</button>
<button className="inline-flex items-center gap-1.5 px-space-md py-2.5 rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-variant transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">download</span>
<span>Download Report Cards</span>
</button>
<button className="inline-flex items-center gap-1.5 px-space-md py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-all shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">chat</span>
<span>Send Message</span>
</button>
<button className="inline-flex items-center gap-1.5 px-space-md py-2.5 rounded-lg bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high font-label-md text-label-md transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">assignment_late</span>
<span>Submit Exeat</span>
</button>
</div>
</div>
</div>
{/*  Active Family Header & Child Switcher Bar  */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm mb-space-lg">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md pb-space-md border-b-0">
{/*  Parent Credential Snippet  */}
<div className="flex items-center gap-space-md">
<div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-headline-md text-headline-md font-bold shadow-inner">
          AD
        </div>
<div>
<div className="flex items-center gap-space-xs">
<h2 className="font-headline-sm text-headline-sm text-on-surface">Alhaji Mansur Danbaba</h2>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[14px]">verified</span>
              Verified Guardian
            </span>
</div>
<div className="flex flex-wrap items-center gap-x-space-md text-on-surface-variant font-body-sm text-body-sm mt-0.5">
<span>ID: <strong className="text-on-surface">#PRT-2024-0081</strong></span>
<span>•</span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-outline">location_on</span>
              Malali GRA, Kaduna North, Kaduna State
            </span>
<span>•</span>
<span className="text-secondary font-semibold">3 Enrolled Wards</span>
</div>
</div>
</div>
{/*  Live Notification Banner for Parents  */}
<div className="flex items-center gap-space-sm bg-surface-container-low px-space-md py-2 rounded-lg">
<span className="material-symbols-outlined text-secondary text-[20px]">notifications_active</span>
<div className="text-on-surface font-body-sm text-body-sm">
<span className="font-semibold text-primary">SMS Gateway:</span> Live biometric terminal sync active for Kaduna North shuttle buses.
        </div>
</div>
</div>
{/*  Child Switcher Tabs (3 Children)  */}
<div className="pt-space-md grid grid-cols-1 md:grid-cols-3 gap-space-md">
{/*  Child 1: Aisha (Active Selection)  */}
<div className="relative bg-primary text-on-primary rounded-xl p-space-md shadow-md cursor-pointer transition-transform hover:-translate-y-0.5" id="child-tab-aisha">
<div className="flex items-center justify-between mb-space-sm">
<span className="px-2 py-0.5 rounded-full bg-on-primary/20 text-on-primary font-label-sm text-label-sm tracking-wider uppercase font-semibold">Active Profile</span>
<span className="material-symbols-outlined text-[18px] text-secondary-fixed">check_circle</span>
</div>
<div className="flex items-center gap-space-sm">
<img alt="Aisha Mansur Danbaba" className="w-12 h-12 rounded-full object-cover ring-2 ring-secondary-fixed shadow" data-alt="Portrait photo of a 16-year-old Nigerian teenage girl student named Aisha Mansur wearing a dignified navy blue school uniform blazer and neat cream hijab, warm confident smile, daylight school campus setting, high editorial resolution." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZSO_wAu1F5UUsHznIZzl0VcFz9daFlLFTDNFvCmxZ0L-vE6o7SaIT4Vlu9RvInCRLwZqoXbmTCr_fHZA5DeRYTKRoMHdkE2mCNQK7vC5rk45__75ZoyVwBQECCQLvvPn8huA2XW7K-ciMS0_erzPFcmNdcq8UzYjjNBadRlcCyUL2w612nvyXesYKjSIbB4_f6CMOkFUafJVpUiFcGpNwhn-djuL_WUrKfLZeT1FFVO_fAyJIJAl24g"/>
<div className="min-w-0 flex-1">
<h3 className="font-headline-sm text-headline-sm text-on-primary truncate">Aisha Mansur Danbaba</h3>
<p className="font-label-sm text-label-sm text-primary-fixed-dim truncate">SSS 2 Science A • #NIIS/2024/0118</p>
</div>
</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between text-on-primary/90 font-label-sm text-label-sm">
<span>Overall: <strong className="text-secondary-fixed">91.0% (1st)</strong></span>
<span className="text-primary-fixed-dim">Senior Secondary Arm</span>
</div>
</div>
{/*  Child 2: Ibrahim  */}
<div className="relative bg-surface-container rounded-xl p-space-md hover:bg-surface-container-high transition-all cursor-pointer" id="child-tab-ibrahim">
<div className="flex items-center justify-between mb-space-sm">
<span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm tracking-wider uppercase font-medium">Primary Arm</span>
<span className="font-label-sm text-label-sm text-outline">Click to View</span>
</div>
<div className="flex items-center gap-space-sm">
<img alt="Ibrahim Mansur Danbaba" className="w-12 h-12 rounded-full object-cover ring-1 ring-outline-variant shadow-sm" data-alt="Portrait photo of a cheerful 9-year-old Nigerian boy named Ibrahim wearing a crisp navy-and-cream Noorul Ilm primary school uniform sweater and collared shirt, indoor bright library background, cheerful friendly expression." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA-xXgALoChA4SrPLovSPtyu4wBIYEJZYm8TPnak4rWFZcxidLeSfYRZAf6kH4r-iPsFlPY3cGO2_YxixeqmbwqYEQ-Xqu8GjjP0lDSXLWdnJbxcH6T81cNo5biJafVVZgA74QImJ0ZFiVDcedDdo79_nffCY_thUK9XE7v0mRxN8C45TR2d5hJl4zd75LfwP5A3euP7KQOkwKFsd6ANmEQgFZlaqcR-t6C14IoOjtRjdN8K1zxfhI_Q"/>
<div className="min-w-0 flex-1">
<h3 className="font-headline-sm text-headline-sm text-on-surface truncate">Ibrahim Mansur Danbaba</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant truncate">Primary 4 Emerald • #NIIS/2026/0204</p>
</div>
</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>Overall: <strong className="text-on-surface">87.4% (3rd)</strong></span>
<span className="text-secondary font-medium">Fees Cleared</span>
</div>
</div>
{/*  Child 3: Maryam  */}
<div className="relative bg-surface-container rounded-xl p-space-md hover:bg-surface-container-high transition-all cursor-pointer" id="child-tab-maryam">
<div className="flex items-center justify-between mb-space-sm">
<span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm tracking-wider uppercase font-medium">Early Years Pre-Prep</span>
<span className="font-label-sm text-label-sm text-outline">Click to View</span>
</div>
<div className="flex items-center gap-space-sm">
<img alt="Maryam Mansur Danbaba" className="w-12 h-12 rounded-full object-cover ring-1 ring-outline-variant shadow-sm" data-alt="Close up photograph of a playful 4-year-old Nigerian girl toddler named Maryam Mansur wearing a light blue nursery school pinafore with colorful hair ribbons, bright classroom play area background, delightful candid expression." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_xx0Lg_d6r6MNXUSFTiPPcm2oUX_AV_qjgzXC3pcYzjnhsYs3uGdqhtQCyeK0XM0Mi3crWP-rCiIS__9ySwqdzRciEcGjUgJh-ff4KzCjtI94Xp53sY3xO2gn94BXYaIYdk3np9MbK3fGMdCyvNrO8JB6ZBpk_OfreoV2pAoQa9ztGOhRqucU9xkt1gEda8qZWg5AGY1IppVJ1YE7pfQYgPm8d4Bs2HCLQAQGa69xGMBnk6gn7MQE2Q"/>
<div className="min-w-0 flex-1">
<h3 className="font-headline-sm text-headline-sm text-on-surface truncate">Maryam Mansur Danbaba</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant truncate">Nursery 2 Pre-Prep • #NIIS/2026/0512</p>
</div>
</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>Stage: <strong className="text-on-surface">Exceeding Milestones</strong></span>
<span className="text-secondary font-medium">All Clear</span>
</div>
</div>
</div>
</div>
{/*  KPI Metric Cards for Aisha (Selected Child)  */}
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md mb-space-lg">
{/*  Card 1: Academic Standing  */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">Academic Standing</span>
<div className="font-metric-lg text-metric-lg text-primary mt-1">1st in Class</div>
</div>
<div className="w-10 h-10 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary shadow-sm">
<span className="material-symbols-outlined text-[24px]">military_tech</span>
</div>
</div>
<div className="mt-space-sm pt-space-xs flex items-center gap-1.5 text-secondary font-label-md text-label-md font-semibold">
<span className="material-symbols-outlined text-[16px]">trending_up</span>
<span>91.0% Cumulative Average • A1 Grade</span>
</div>
</div>
{/*  Card 2: Term Attendance  */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">Term Attendance</span>
<div className="font-metric-lg text-metric-lg text-secondary mt-1">98.5% Present</div>
</div>
<div className="w-10 h-10 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary shadow-sm">
<span className="material-symbols-outlined text-[24px]">event_available</span>
</div>
</div>
<div className="mt-space-sm pt-space-xs text-on-surface-variant font-body-sm text-body-sm">
        41 of 42 Days • <span className="text-secondary font-semibold">Zero Unexcused Absences</span>
</div>
</div>
{/*  Card 3: Fee Clearance  */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">Fee Clearance Status</span>
<div className="font-metric-lg text-metric-lg text-on-surface mt-1">₦0 Outstanding</div>
</div>
<div className="w-10 h-10 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary shadow-sm">
<span className="material-symbols-outlined text-[24px]">check_circle</span>
</div>
</div>
<div className="mt-space-sm pt-space-xs text-secondary font-label-md text-label-md font-semibold flex items-center gap-1">
<span>Term 1 Paid in Full (Rec #NIIS-REC-8910)</span>
</div>
</div>
{/*  Card 4: Live Daily Location  */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">Live Daily Location</span>
<div className="font-headline-md text-headline-md text-primary mt-1">Senior Science Lab S-12</div>
</div>
<div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-primary shadow-sm">
<span className="material-symbols-outlined text-[24px]">pin_drop</span>
</div>
</div>
<div className="mt-space-sm pt-space-xs text-on-surface-variant font-body-sm text-body-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-secondary">directions_bus</span>
<span>Boarded Bus 01 at 07:12 AM (Main Gate NFC)</span>
</div>
</div>
</div>
{/*  Main Split Content Area  */}
<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
{/*  Left Column (7-col): Performance Table & Academic Pipeline  */}
<div className="xl:col-span-7 space-y-space-lg">
{/*  Continuous Assessment & Subject Performance  */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-md mb-space-md border-b-0">
<div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">analytics</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Aisha's Current Term Continuous Assessment</h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">SSS 2 Science A • First Term Comprehensive Grade Compiler (Kaduna MoE Standards)</p>
</div>
<span className="inline-flex items-center px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">
            GPA: 4.88 / 5.0
          </span>
</div>
{/*  Grade Summary Table  */}
<div className="overflow-x-auto">
<table className="w-full text-left font-body-md text-body-md">
<thead>
<tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-2.5 px-space-md rounded-l-lg">Subject Name</th>
<th className="py-2.5 px-space-md text-center">CA 1 &amp; 2 (40%)</th>
<th className="py-2.5 px-space-md text-center">Exam (60%)</th>
<th className="py-2.5 px-space-md text-center">Total</th>
<th className="py-2.5 px-space-md text-center">Grade</th>
<th className="py-2.5 px-space-md text-right rounded-r-lg">Class Rank</th>
</tr>
</thead>
<tbody className="text-on-surface">
{/*  Further Mathematics  */}
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-3 px-space-md font-semibold text-primary">Further Mathematics</td>
<td className="py-3 px-space-md text-center font-mono">37/40</td>
<td className="py-3 px-space-md text-center font-mono">54/60</td>
<td className="py-3 px-space-md text-center font-bold font-mono">91%</td>
<td className="py-3 px-space-md text-center">
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">A1</span>
</td>
<td className="py-3 px-space-md text-right text-secondary font-bold font-label-md text-label-md">1st of 34</td>
</tr>
{/*  General Mathematics  */}
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-3 px-space-md font-semibold text-primary">General Mathematics</td>
<td className="py-3 px-space-md text-center font-mono">38/40</td>
<td className="py-3 px-space-md text-center font-mono">56/60</td>
<td className="py-3 px-space-md text-center font-bold font-mono">94%</td>
<td className="py-3 px-space-md text-center">
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">A1</span>
</td>
<td className="py-3 px-space-md text-right text-secondary font-bold font-label-md text-label-md">1st of 34</td>
</tr>
{/*  English Language  */}
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-3 px-space-md font-semibold text-primary">English Language</td>
<td className="py-3 px-space-md text-center font-mono">35/40</td>
<td className="py-3 px-space-md text-center font-mono">53/60</td>
<td className="py-3 px-space-md text-center font-bold font-mono">88%</td>
<td className="py-3 px-space-md text-center">
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">A1</span>
</td>
<td className="py-3 px-space-md text-right text-on-surface font-semibold font-label-md text-label-md">2nd of 34</td>
</tr>
{/*  Physics  */}
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-3 px-space-md font-semibold text-primary">Physics</td>
<td className="py-3 px-space-md text-center font-mono">34/40</td>
<td className="py-3 px-space-md text-center font-mono">52/60</td>
<td className="py-3 px-space-md text-center font-bold font-mono">86%</td>
<td className="py-3 px-space-md text-center">
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-bold">B2</span>
</td>
<td className="py-3 px-space-md text-right text-on-surface font-semibold font-label-md text-label-md">2nd of 34</td>
</tr>
{/*  Chemistry  */}
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-3 px-space-md font-semibold text-primary">Chemistry</td>
<td className="py-3 px-space-md text-center font-mono">33/40</td>
<td className="py-3 px-space-md text-center font-mono">51/60</td>
<td className="py-3 px-space-md text-center font-bold font-mono">84%</td>
<td className="py-3 px-space-md text-center">
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-bold">B2</span>
</td>
<td className="py-3 px-space-md text-right text-on-surface-variant font-label-md text-label-md">3rd of 34</td>
</tr>
{/*  Biology  */}
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-3 px-space-md font-semibold text-primary">Biology</td>
<td className="py-3 px-space-md text-center font-mono">36/40</td>
<td className="py-3 px-space-md text-center font-mono">54/60</td>
<td className="py-3 px-space-md text-center font-bold font-mono">90%</td>
<td className="py-3 px-space-md text-center">
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">A1</span>
</td>
<td className="py-3 px-space-md text-right text-on-surface font-semibold font-label-md text-label-md">2nd of 34</td>
</tr>
{/*  Islamic Religious Studies  */}
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-3 px-space-md font-semibold text-primary">Islamic Religious Studies</td>
<td className="py-3 px-space-md text-center font-mono">39/40</td>
<td className="py-3 px-space-md text-center font-mono">57/60</td>
<td className="py-3 px-space-md text-center font-bold font-mono">96%</td>
<td className="py-3 px-space-md text-center">
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">A1</span>
</td>
<td className="py-3 px-space-md text-right text-secondary font-bold font-label-md text-label-md">1st of 34</td>
</tr>
</tbody>
</table>
</div>
{/*  Grade Visual Progress Sparkline / Distribution  */}
<div className="mt-space-md p-space-md bg-surface-container-low rounded-xl flex flex-col md:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
{/*  Inline SVG Performance Donut  */}
<div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-container-highest" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
<path className="text-secondary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="91, 100" strokeLinecap="round" strokeWidth="3.5"></path>
</svg>
<span className="absolute font-headline-sm text-headline-sm text-primary font-bold">91%</span>
</div>
<div>
<h4 className="font-headline-sm text-headline-sm text-on-surface">Distinction Track Record</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Qualified for Kaduna State Secondary STEM Honors Roll and National Olympiad Selection.</p>
</div>
</div>
<button className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-space-md py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-all shadow-sm shrink-0" type="button">
<span className="material-symbols-outlined text-[18px]">verified</span>
<span>View Full Term 1 Report Card Dossier with Principal's Signature</span>
</button>
</div>
</div>
{/*  Recent Homework Assignments & Upcoming Deadlines  */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex items-center justify-between pb-space-sm mb-space-md">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">assignment</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Recent Homework Assignments &amp; Project Deadlines</h3>
</div>
<span className="font-label-sm text-label-sm text-outline">Term 1 • Week 7</span>
</div>
<div className="space-y-space-sm">
{/*  Item 1: Physics (Completed)  */}
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-start gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]">science</span>
</div>
<div>
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-headline-sm text-headline-sm text-on-surface">Physics: Wave Optics Practical Experiment Report</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">Submitted Online ✓</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Laboratory verification of Snell's Law and diffraction patterns in laser media.</p>
</div>
</div>
<div className="text-right sm:shrink-0">
<span className="font-label-sm text-label-sm text-secondary font-semibold">Due Monday 20 Oct</span>
<p className="font-body-sm text-[11px] text-outline">Graded: 19/20 Marks</p>
</div>
</div>
{/*  Item 2: Further Maths (In Progress)  */}
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-start gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed-variant flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]">calculate</span>
</div>
<div>
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-headline-sm text-headline-sm text-on-surface">Further Maths: Trigonometric Identities Problem Set #4</span>
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-semibold">In Progress</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">De Moivre's theorem application problems (Questions 1 through 15).</p>
</div>
</div>
<div className="text-right sm:shrink-0">
<span className="font-label-sm text-label-sm text-tertiary-container font-semibold">Due Wednesday 22 Oct</span>
<p className="font-body-sm text-[11px] text-outline">3 of 15 Uploaded</p>
</div>
</div>
{/*  Item 3: English Prose Essay (Pending)  */}
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div className="flex items-start gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-primary-fixed text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]">menu_book</span>
</div>
<div>
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-headline-sm text-headline-sm text-on-surface">English: African Prose Essay on Chinua Achebe's 'Things Fall Apart'</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm font-semibold">Assigned</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Critical 1,200-word analysis of Okonkwo's tragic hamartia and cultural friction.</p>
</div>
</div>
<div className="text-right sm:shrink-0">
<span className="font-label-sm text-label-sm text-primary font-semibold">Due Friday 24 Oct</span>
<p className="font-body-sm text-[11px] text-outline">WAEC Prep Benchmark</p>
</div>
</div>
</div>
</div>
</div>
{/*  Right Column (5-col): Live Bus Tracking, Teacher Comms, PTA Announcements  */}
<div className="xl:col-span-5 space-y-space-lg">
{/*  Live School Bus Route & Departure Tracker  */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex items-center justify-between pb-space-sm mb-space-md">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">directions_bus</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Live School Bus Route Tracker</h3>
</div>
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
            GPS Active
          </span>
</div>
{/*  Bus Details Card  */}
<div className="p-space-md bg-surface-container-low rounded-xl mb-space-md">
<div className="flex items-center justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Assigned Shuttle</span>
<h4 className="font-headline-sm text-headline-sm text-primary">Route A1 • Toyota Coaster Bus 01</h4>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm text-outline">Driver</span>
<p className="font-label-md text-label-md font-semibold text-on-surface">Malam Shehu</p>
</div>
</div>
<div className="grid grid-cols-2 gap-space-sm mt-space-md pt-space-sm bg-surface-container-lowest/80 p-space-sm rounded-lg">
<div>
<span className="font-body-sm text-[11px] text-outline">Morning Pickup</span>
<p className="font-label-md text-label-md text-secondary font-bold">07:12 AM (Completed)</p>
<p className="font-body-sm text-[11px] text-on-surface-variant truncate">Malali Waterboard Junction</p>
</div>
<div>
<span className="font-body-sm text-[11px] text-outline">Afternoon Return ETA</span>
<p className="font-label-md text-label-md text-primary font-bold">04:15 PM</p>
<p className="font-body-sm text-[11px] text-on-surface-variant truncate">Malali Waterboard Junction</p>
</div>
</div>
</div>
{/*  Location Map Simulation for Bus  */}
<div className="w-full h-44 rounded-xl bg-cover bg-center relative overflow-hidden shadow-inner flex items-end p-space-sm" data-location="Malali GRA, Kaduna, Nigeria" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAo-bkXdxbLDEROmKOT5e07khI-X0_-BmCPWzBo_MoWpigwnrkTrYaUDY6dxXYZASWMG9vgwQolysvW0WcNqlqSDCx3aLDqy_6jsbbX5B3CGoltMB48p246JqPBdF6LSaM4TKglxkVy0M63BrVY4uSZQTTDnSQb1THiDcGY8wVV2Xh-0bKg56tI3q25voRsQyEDHIj1eTjQ_SOB2_Pg9Gf969Q9z9I7Id1FPNDFGnFRPlB3-inFRhK9bQ')" }}>
<div className="bg-surface-container-lowest/95 backdrop-blur-md rounded-lg p-2.5 w-full flex items-center justify-between shadow-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[20px]">local_shipping</span>
<div>
<span className="font-label-sm text-label-sm font-bold text-on-surface">On Campus Senior Carpark</span>
<p className="font-body-sm text-[11px] text-on-surface-variant">Scheduled departure at 03:45 PM</p>
</div>
</div>
<button className="px-2.5 py-1 rounded bg-primary text-on-primary font-label-sm text-label-sm hover:bg-primary-container transition-colors">
              Refresh GPS
            </button>
</div>
</div>
</div>
{/*  Direct Teacher-Parent Communication Thread  */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex items-center justify-between pb-space-sm mb-space-md">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">forum</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Teacher Communication Thread</h3>
</div>
<span className="inline-flex items-center gap-1 text-secondary font-label-sm text-label-sm font-semibold">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
            Online
          </span>
</div>
{/*  Teacher Header  */}
<div className="flex items-center gap-space-sm p-space-sm bg-surface-container-low rounded-lg mb-space-md">
<img alt="Malam Garba Usman" className="w-10 h-10 rounded-full object-cover ring-1 ring-primary/20 shadow-sm" data-alt="Portrait of an experienced Nigerian male physics teacher in his early 40s wearing smart eyeglasses and a traditional neat embroidered kaftan, standing in a modern science laboratory, approachable academic demeanor." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf0eT9_504J1yGC-JJi3NPtHa8EtjrVl8aZ-3q56lh348t7w95MK9r8v6EjYJhBimNFoxUO1IdSoqrtSGrEReZlbyRHb71e1cVwfbbKQQ-GWyQzJVl6-eQ_ucQKgW_pwaN9R6DJm9J5pNjMxWumoQQfgcdfYueC2KduPBoN04hgOc1iKcNoHKWaRZbjs5OWod8fnHtAMXp2ASHi3QNwPMVBhXw-fru4tbb2_uKnDzd-mFr3WCd6rYBZQ"/>
<div className="min-w-0 flex-1">
<h4 className="font-label-lg text-label-lg text-on-surface font-semibold truncate">Malam Garba Usman</h4>
<p className="font-body-sm text-[12px] text-on-surface-variant truncate">SSS 2 Class Teacher • Lead Physics Educator</p>
</div>
<button className="p-1.5 rounded-lg bg-surface-container-highest text-primary hover:bg-primary-fixed transition-colors" title="Voice Call via Gatekeeper">
<span className="material-symbols-outlined text-[18px]">call</span>
</button>
</div>
{/*  Chat Conversation Messages  */}
<div className="space-y-space-sm mb-space-md max-h-56 overflow-y-auto pr-1">
{/*  Malam Garba's Message  */}
<div className="flex items-start gap-space-xs max-w-[90%]">
<div className="bg-surface-container-low rounded-2xl rounded-tl-none p-space-sm shadow-xs">
<p className="font-body-sm text-body-sm text-on-surface">
                Assalamu Alaikum Alhaji Danbaba. Aisha performed exceptionally well in the practical physics lab titration and Snell's Law apparatus today. Her focus and peer leadership are exemplary.
              </p>
<div className="mt-1 flex items-center justify-between font-label-sm text-[10px] text-outline">
<span>Malam Garba Usman</span>
<span>11:42 AM</span>
</div>
</div>
</div>
{/*  Parent Reply (Simulated Previous)  */}
<div className="flex items-end justify-end gap-space-xs">
<div className="bg-primary text-on-primary rounded-2xl rounded-tr-none p-space-sm max-w-[90%] shadow-xs">
<p className="font-body-sm text-body-sm">
                Wa Alaikumus Salam Malam Garba. Masha'Allah, thank you for the feedback and guidance. We will keep encouraging her at home.
              </p>
<div className="mt-1 text-right font-label-sm text-[10px] text-primary-fixed-dim">
<span>Delivered • 12:05 PM</span>
</div>
</div>
</div>
</div>
{/*  Reply Input  */}
<div className="space-y-space-xs">
<div className="relative">
<textarea className="w-full p-space-sm bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all resize-none" id="teacherReplyInput" placeholder="Type reply to Malam Garba (Physics Teacher)..." rows={2}></textarea>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-[11px]">
<span className="material-symbols-outlined text-[14px]">sms</span>
<span>Dispatches instant SMS to educator</span>
</div>
<button className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-all shadow-sm" id="sendReplyBtn" type="button">
<span>Send Message</span>
<span className="material-symbols-outlined text-[16px]">send</span>
</button>
</div>
</div>
</div>
{/*  Institutional Announcements & Upcoming PTA Meeting  */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex items-center justify-between pb-space-sm mb-space-md">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">campaign</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Institutional Notices &amp; PTA</h3>
</div>
<span className="font-label-sm text-label-sm text-outline font-semibold">Kaduna HQ</span>
</div>
<div className="space-y-space-sm">
{/*  PTA General Notice  */}
<div className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
<div className="flex items-start gap-space-sm">
<div className="w-8 h-8 rounded bg-primary-fixed text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[18px]">groups</span>
</div>
<div className="flex-1 min-w-0">
<h4 className="font-label-md text-label-md font-semibold text-on-surface">PTA General Consultative Meeting</h4>
<p className="font-body-sm text-[12px] text-on-surface-variant mt-0.5">Saturday 24 October 2026 at 10:00 AM • Main Auditorium &amp; Virtual Stream.</p>
<span className="inline-block mt-1 text-secondary font-label-sm text-[11px] font-semibold">RSVP Confirmed for 2 Attendees</span>
</div>
</div>
</div>
{/*  Harmattan Sports Festival  */}
<div className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
<div className="flex items-start gap-space-sm">
<div className="w-8 h-8 rounded bg-tertiary-fixed text-on-tertiary-fixed-variant flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[18px]">sports_soccer</span>
</div>
<div className="flex-1 min-w-0">
<h4 className="font-label-md text-label-md font-semibold text-on-surface">Kaduna State Harmattan Sports Festival</h4>
<p className="font-body-sm text-[12px] text-on-surface-variant mt-0.5">Inter-house trials start next Tuesday. Aisha is nominated for Table Tennis Senior Singles.</p>
<span className="inline-block mt-1 text-primary font-label-sm text-[11px] font-semibold">Parental Consent Acknowledged</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</main>
  );
}
    