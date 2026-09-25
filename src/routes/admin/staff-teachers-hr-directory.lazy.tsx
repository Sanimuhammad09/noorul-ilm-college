
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/admin/staff-teachers-hr-directory')({
  component: StaffTeachersHrDirectory,
});

function StaffTeachersHrDirectory() {
  return (
    <main className="w-full pt-16 px-space-lg py-space-lg flex-1 bg-surface"><div className="flex flex-col w-full">
{/*  Top Breadcrumb & Metadata Strip  */}
<div className="flex flex-wrap items-center justify-between gap-y-space-sm mb-space-md">
<div className="flex items-center gap-space-xs font-label-sm text-label-sm text-outline">
<span className="hover:text-primary cursor-pointer transition-colors">Human Resources</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-on-surface-variant font-medium">Staff &amp; Teachers Directory</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-primary font-semibold">Active Employee Registry</span>
</div>
<div className="flex items-center gap-space-sm">
<span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Kaduna State Ministry of Education &amp; KTSC Synchronized (Q1 2026)</span>
</div>
</div>
{/*  Page Header With Action Group  */}
<div className="flex flex-col xl:flex-row xl:items-end justify-between gap-space-lg mb-space-xl">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider mb-space-xs">
<span className="material-symbols-outlined text-[14px]">badge</span>
        Faculty Governance &amp; Registry
      </div>
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Staff &amp; Faculty Human Resources Directory</h1>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">
        Centralized faculty credentials, Kaduna Teachers Service Commission (KTSC) accreditation, departmental allocations, and personnel records.
      </p>
</div>
<div className="flex flex-wrap items-center gap-space-sm shrink-0">
<button className="flex items-center gap-1.5 px-space-md py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">download</span>
<span>Export Registry</span>
</button>
<button className="flex items-center gap-1.5 px-space-md py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">badge</span>
<span>Print ID Cards</span>
</button>
<button className="flex items-center gap-1.5 px-space-md py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">group_work</span>
<span>Dept Rosters</span>
</button>
<button className="flex items-center gap-1.5 px-space-lg py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-md" type="button">
<span className="material-symbols-outlined text-[18px]">person_add</span>
<span>+ Onboard New Staff</span>
</button>
</div>
</div>
{/*  Top Stat KPI Cards (4 Cards)  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-xl">
{/*  Stat 1: Total Active Staff  */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between relative overflow-hidden">
<div className="absolute right-0 top-0 translate-x-3 -translate-y-3 opacity-5 text-primary pointer-events-none">
<span className="material-symbols-outlined text-[110px]">diversity_3</span>
</div>
<div className="flex items-center justify-between mb-space-md">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Total Active Staff</span>
<span className="p-2 rounded-lg bg-surface-container-low text-primary">
<span className="material-symbols-outlined text-[20px]">groups</span>
</span>
</div>
<div>
<div className="flex items-baseline gap-2">
<span className="font-metric-lg text-metric-lg text-on-surface">120</span>
<span className="font-label-sm text-label-sm text-secondary font-medium">100% Filled</span>
</div>
<div className="mt-2 text-on-surface-variant font-body-sm text-body-sm flex items-center justify-between">
<span>86 Teaching Faculty</span>
<span className="text-outline">•</span>
<span>34 Support &amp; Ops</span>
</div>
<div className="w-full bg-surface-container rounded-full h-1.5 mt-3 overflow-hidden">
<div className="bg-primary h-1.5 rounded-full w-[72%]"></div>
</div>
</div>
</div>
{/*  Stat 2: TRCN & KTSC Certified  */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between relative overflow-hidden">
<div className="absolute right-0 top-0 translate-x-3 -translate-y-3 opacity-5 text-secondary pointer-events-none">
<span className="material-symbols-outlined text-[110px]">verified</span>
</div>
<div className="flex items-center justify-between mb-space-md">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">TRCN &amp; KTSC Certified</span>
<span className="p-2 rounded-lg bg-surface-container-low text-secondary">
<span className="material-symbols-outlined text-[20px]">workspace_premium</span>
</span>
</div>
<div>
<div className="flex items-baseline gap-2">
<span className="font-metric-lg text-metric-lg text-secondary">94.2%</span>
<span className="font-label-sm text-label-sm text-secondary bg-secondary-container/40 px-1.5 py-0.5 rounded-md font-semibold">+3.1% YoY</span>
</div>
<p className="mt-2 text-on-surface-variant font-body-sm text-body-sm">
          Kaduna State Quality Assurance Standard
        </p>
<div className="w-full bg-surface-container rounded-full h-1.5 mt-3 overflow-hidden">
<div className="bg-secondary h-1.5 rounded-full w-[94.2%]"></div>
</div>
</div>
</div>
{/*  Stat 3: Staff On Duty Today  */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between relative overflow-hidden">
<div className="absolute right-0 top-0 translate-x-3 -translate-y-3 opacity-5 text-primary pointer-events-none">
<span className="material-symbols-outlined text-[110px]">how_to_reg</span>
</div>
<div className="flex items-center justify-between mb-space-md">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Staff On Duty Today</span>
<span className="p-2 rounded-lg bg-surface-container-low text-primary">
<span className="material-symbols-outlined text-[20px]">schedule</span>
</span>
</div>
<div>
<div className="flex items-baseline gap-2">
<span className="font-metric-lg text-metric-lg text-on-surface">116 <span className="font-headline-sm text-headline-sm text-outline">/ 120</span></span>
<span className="font-label-sm text-label-sm text-secondary font-medium">96.7% Rate</span>
</div>
<div className="mt-2 text-on-surface-variant font-body-sm text-body-sm flex items-center justify-between">
<span className="text-error font-medium">3 On Leave</span>
<span className="text-outline">•</span>
<span className="text-on-tertiary-container font-medium">1 Clinical Relief</span>
</div>
<div className="w-full bg-surface-container rounded-full h-1.5 mt-3 overflow-hidden">
<div className="bg-secondary h-1.5 rounded-full w-[96.7%]"></div>
</div>
</div>
</div>
{/*  Stat 4: Monthly Payroll Commitment  */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between relative overflow-hidden">
<div className="absolute right-0 top-0 translate-x-3 -translate-y-3 opacity-5 text-tertiary-container pointer-events-none">
<span className="material-symbols-outlined text-[110px]">payments</span>
</div>
<div className="flex items-center justify-between mb-space-md">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Monthly Payroll</span>
<span className="p-2 rounded-lg bg-surface-container-low text-on-tertiary-container">
<span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
</span>
</div>
<div>
<div className="flex items-baseline gap-1">
<span className="font-metric-lg text-metric-lg text-on-surface">₦18,450,000</span>
</div>
<p className="mt-2 text-on-surface-variant font-body-sm text-body-sm truncate">
          Kaduna Board of Internal Revenue Compliant
        </p>
<div className="w-full bg-surface-container rounded-full h-1.5 mt-3 overflow-hidden">
<div className="bg-on-tertiary-container h-1.5 rounded-full w-[88%]"></div>
</div>
</div>
</div>
</div>
{/*  Search & Complex Filters Toolbar  */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm mb-space-lg">
<div className="flex flex-col lg:flex-row gap-space-md items-stretch lg:items-center justify-between">
{/*  Search Input  */}
<div className="relative flex-1 min-w-[280px]">
<span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
<input className="w-full pl-10 pr-4 py-2.5 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:shadow-sm transition-all" id="staff-search-input" placeholder="Search by staff name, ID (e.g. NIIS-EMP-014), subject, or department..." type="text"/>
</div>
{/*  Filters & View Switcher  */}
<div className="flex flex-wrap items-center gap-space-sm">
{/*  Dept Filter  */}
<select className="px-space-md py-2.5 bg-surface-container-low text-on-surface font-label-md text-label-md rounded-lg focus:outline-none cursor-pointer">
<option value="all">All Departments (7)</option>
<option value="sci">Science &amp; Mathematics</option>
<option value="lang">Languages &amp; Arts</option>
<option value="islamic">Islamic Studies &amp; Tahfeez</option>
<option value="hum">Humanities &amp; Social Sc.</option>
<option value="admin">Administration &amp; Bursary</option>
<option value="fac">Facilities &amp; Transport</option>
</select>
{/*  Employment Type  */}
<select className="px-space-md py-2.5 bg-surface-container-low text-on-surface font-label-md text-label-md rounded-lg focus:outline-none cursor-pointer">
<option value="all">All Contracts</option>
<option value="full">Full-Time Permanent</option>
<option value="contract">Fixed Contract</option>
<option value="adjunct">Adjunct Specialist</option>
</select>
{/*  KTSC Status  */}
<select className="px-space-md py-2.5 bg-surface-container-low text-on-surface font-label-md text-label-md rounded-lg focus:outline-none cursor-pointer">
<option value="all">KTSC Certification: Any</option>
<option value="certified">KTSC Certified Only</option>
<option value="pending">Verification Pending</option>
</select>
{/*  Gender  */}
<select className="px-space-md py-2.5 bg-surface-container-low text-on-surface font-label-md text-label-md rounded-lg focus:outline-none cursor-pointer">
<option value="all">Gender: All</option>
<option value="m">Male</option>
<option value="f">Female</option>
</select>
{/*  View Segmented Switch  */}
<div className="flex items-center bg-surface-container-low p-1 rounded-lg">
<button className="p-1.5 rounded-md bg-surface-container-lowest text-primary shadow-sm" title="Table View" type="button">
<span className="material-symbols-outlined text-[18px]">table_rows</span>
</button>
<button className="p-1.5 rounded-md text-outline hover:text-on-surface transition-colors" title="Grid Card View" type="button">
<span className="material-symbols-outlined text-[18px]">grid_view</span>
</button>
</div>
</div>
</div>
</div>
{/*  Main Work Surface: Split Grid with Data Table + Quick Dossier Preview Drawer  */}
<div className="grid grid-cols-1 2xl:grid-cols-12 gap-space-lg items-start">
{/*  Left/Center Primary Table Container (8 Cols on 2xl)  */}
<div className="2xl:col-span-8 bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
{/*  Table Header Status Bar  */}
<div className="px-space-lg py-space-md bg-surface-container-low/50 flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="font-label-lg text-label-lg text-primary">Active Faculty &amp; Personnel Records</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold">120 Records</span>
</div>
<div className="flex items-center gap-space-md font-label-sm text-label-sm text-on-surface-variant">
<span className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-secondary"></span> On Duty
          </span>
<span className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></span> Approved Leave
          </span>
<span className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-error"></span> Suspended/Off
          </span>
</div>
</div>
{/*  High-Density Responsive Table  */}
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-3 px-space-md" scope="col">Staff Identity &amp; Role</th>
<th className="py-3 px-space-md" scope="col">Department &amp; Allocation</th>
<th className="py-3 px-space-md" scope="col">Qualifications &amp; KTSC</th>
<th className="py-3 px-space-md" scope="col">Contact &amp; Kaduna Ward</th>
<th className="py-3 px-space-md" scope="col">Duty Status</th>
<th className="py-3 px-space-md text-right" scope="col">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-low font-body-md text-body-md text-on-surface">
{/*  Row 1: Malam Garba Usman (Active Selected)  */}
<tr className="bg-surface-container-high/40 hover:bg-surface-container-high/60 transition-colors cursor-pointer group" onClick={() => {}}>
<td className="py-space-sm px-space-md">
<div className="flex items-center gap-space-sm">
<div className="relative shrink-0">
<img className="w-10 h-10 rounded-full object-cover shadow-sm" data-alt="Distinguished senior Nigerian male educator in traditional Northern Nigerian attire with glasses, smiling professionally, soft warm studio lighting with deep institutional blue tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfAbApxAbCc4ETPfQxT-nlSufT47e3cBgklVWqmA1katXu_7re6sVwR3AyW68kLGU9LKqrkl_KnchEJIoMTh5i5gu3zi-lZ8N_dMHd3KLZqDionoFVLXhh1XvcHJ25is8OUKWcecdADpJPGdk6HfooxIddPC_b_1qnbjUAWD75gkJknfRjyuGAsAh28gL8nXwnpKb69knmqZhjgoq74ICDqmu9QJwfPqX4Gg3iNAwvsjfxPJQbR2mYew"/>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-secondary ring-2 ring-surface-container-lowest"></span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md font-semibold text-primary truncate flex items-center gap-1">
                      Malam Garba Usman, M.Sc.
                      <span className="material-symbols-outlined text-[14px] text-secondary" title="TRCN Verified">verified</span>
</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">ID: NIIS-EMP-014 • Male</span>
</div>
</div>
</td>
<td className="py-space-sm px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface truncate">Science Dept • Lead Educator</span>
<span className="font-body-sm text-body-sm text-outline truncate">SSS 1-3 Further Math • 18 Periods/Wk</span>
</div>
</td>
<td className="py-space-sm px-space-md">
<div className="flex flex-col">
<span className="font-body-sm text-body-sm text-on-surface font-medium truncate">M.Sc. Physics (ABU Zaria)</span>
<span className="font-label-sm text-label-sm text-secondary truncate">KTSC-KD-2021-9801 (Verified)</span>
</div>
</td>
<td className="py-space-sm px-space-md">
<div className="flex flex-col">
<span className="font-body-sm text-body-sm text-on-surface truncate">+234 803 441 9821</span>
<span className="font-body-sm text-body-sm text-outline truncate">Malali GRA, Kaduna North</span>
</div>
</td>
<td className="py-space-sm px-space-md whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container/50 text-on-secondary-container font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> On Duty
                </span>
</td>
<td className="py-space-sm px-space-md text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1 rounded text-primary hover:bg-surface-container" title="Dossier Details" type="button">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
<button className="p-1 rounded text-on-surface-variant hover:bg-surface-container" title="More Options" type="button">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>
{/*  Row 2: Mrs. Grace Okafor  */}
<tr className="hover:bg-surface-container-low transition-colors cursor-pointer group">
<td className="py-space-sm px-space-md">
<div className="flex items-center gap-space-sm">
<div className="relative shrink-0">
<img className="w-10 h-10 rounded-full object-cover shadow-sm" data-alt="Professional Nigerian female educator wearing contemporary attire with a gentle reassuring smile, bright classroom library background, Kaduna institutional setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtkuwKNSznHP8HF5h7QbuM2n1aBn7B9PrzGE8gJtgN_kAZ5DMboO9UHbzAGHyrAjIIjF8ZD5k6Szw0wAQTUUvZLBF7rcY9Oia1qRGlYXRrmzfMbuKUIhWKygmti2cBfT2rrLagxiqGoeQQkVgQ2xqwp6zRkgzNMRMg0WpTcVbDRdWc-S0y0TeygS5gNWXPV9pUaQ9ZOVNPgLi72YKznREwmubpd_2GNj3WifJQgE2OB77GdwGEJsVIqg"/>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-secondary ring-2 ring-surface-container-lowest"></span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md font-semibold text-on-surface truncate flex items-center gap-1">
                      Mrs. Grace Okafor
                      <span className="material-symbols-outlined text-[14px] text-secondary" title="TRCN Verified">verified</span>
</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">ID: NIIS-EMP-031 • Female</span>
</div>
</div>
</td>
<td className="py-space-sm px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface truncate">Languages Dept • Head of English</span>
<span className="font-body-sm text-body-sm text-outline truncate">SSS 2 &amp; 3 English Lit • 16 Periods/Wk</span>
</div>
</td>
<td className="py-space-sm px-space-md">
<div className="flex flex-col">
<span className="font-body-sm text-body-sm text-on-surface font-medium truncate">B.Ed. English (Bayero Univ)</span>
<span className="font-label-sm text-label-sm text-secondary truncate">KTSC-KD-2020-4105 (Verified)</span>
</div>
</td>
<td className="py-space-sm px-space-md">
<div className="flex flex-col">
<span className="font-body-sm text-body-sm text-on-surface truncate">+234 812 770 1920</span>
<span className="font-body-sm text-body-sm text-outline truncate">Barnawa, Kaduna South</span>
</div>
</td>
<td className="py-space-sm px-space-md whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container/50 text-on-secondary-container font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> On Duty
                </span>
</td>
<td className="py-space-sm px-space-md text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1 rounded text-outline hover:text-primary hover:bg-surface-container" type="button">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
<button className="p-1 rounded text-on-surface-variant hover:bg-surface-container" type="button">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>
{/*  Row 3: Ustaz Bashir Lawal  */}
<tr className="hover:bg-surface-container-low transition-colors cursor-pointer group">
<td className="py-space-sm px-space-md">
<div className="flex items-center gap-space-sm">
<div className="relative shrink-0">
<img className="w-10 h-10 rounded-full object-cover shadow-sm" data-alt="Respectable middle-aged Islamic scholar and teacher in immaculate white caftan and embroidered cap, seated in an organized Islamic school study room in Kaduna, soft ambient daylight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeVW1sToP59ODFisxtYXteNbGKEyF7Ph87xvB7G_jg31Me2tOqUqVRIuuVWAJXF9u2XOdecHyJ0AYj8bUXAKRCMJAnCspQHgRq0p_Kjs-UXvOcZaWGr2m3q94yg0oTldbgL696WweY6hpzKoZF51pBMGpMDSS_CXoqhRqPteoZPJ2bDThzwJrs1rplHaZAMKPPglCyebXqSFJFVODVe8BnFVJjk1obLYeXqgXfER-H_tlvVZ4zY-XK0w"/>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-secondary ring-2 ring-surface-container-lowest"></span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md font-semibold text-on-surface truncate flex items-center gap-1">
                      Ustaz Bashir Lawal
                      <span className="material-symbols-outlined text-[14px] text-secondary">verified</span>
</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">ID: NIIS-EMP-007 • Male</span>
</div>
</div>
</td>
<td className="py-space-sm px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface truncate">Tahfeez &amp; Islamic Studies</span>
<span className="font-body-sm text-body-sm text-outline truncate">All Arms JSS/SSS • 22 Periods/Wk</span>
</div>
</td>
<td className="py-space-sm px-space-md">
<div className="flex flex-col">
<span className="font-body-sm text-body-sm text-on-surface font-medium truncate">B.A. Islamic Law (Univ of Medina)</span>
<span className="font-label-sm text-label-sm text-secondary truncate">KTSC-KD-2019-1122 (Verified)</span>
</div>
</td>
<td className="py-space-sm px-space-md">
<div className="flex flex-col">
<span className="font-body-sm text-body-sm text-on-surface truncate">+234 802 334 1109</span>
<span className="font-body-sm text-body-sm text-outline truncate">Rigachikun, Igabi LGA</span>
</div>
</td>
<td className="py-space-sm px-space-md whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container/50 text-on-secondary-container font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> On Duty
                </span>
</td>
<td className="py-space-sm px-space-md text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1 rounded text-outline hover:text-primary hover:bg-surface-container" type="button">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
<button className="p-1 rounded text-on-surface-variant hover:bg-surface-container" type="button">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>
{/*  Row 4: Hajiya Aisha Mohammed (On Leave)  */}
<tr className="hover:bg-surface-container-low transition-colors cursor-pointer group">
<td className="py-space-sm px-space-md">
<div className="flex items-center gap-space-sm">
<div className="relative shrink-0">
<img className="w-10 h-10 rounded-full object-cover shadow-sm" data-alt="Accomplished Nigerian female school administrator in elegant hijab, sitting behind a clean modern executive desk in Kaduna, professional demeanor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRSWz_YJtAWK-3kIJK-2qkdHoincxHpXe4rexNUeoJKofeYB8mSa0Zc21bb672bINdAnGkJeMYL9qtvyIGxHOye-3SYEtQzShVp0RTRFEhwHfJtpknUC5jDSg5fXrj_W28JH06u1_K4Pr_wp6k6xegn_Hkf2gd7Gn4Q9iZySVsl6DjVmzciBfdlw7u3mjUAmLsWxf9Y2mV9k3_aRHpewDRf8ChVA6TEUiIv-dvBOP51soL1A1EWrnnkQ"/>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-tertiary-fixed-dim ring-2 ring-surface-container-lowest"></span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md font-semibold text-on-surface truncate flex items-center gap-1">
                      Hajiya Aisha Mohammed
                      <span className="material-symbols-outlined text-[14px] text-secondary">verified</span>
</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">ID: NIIS-EMP-022 • Female</span>
</div>
</div>
</td>
<td className="py-space-sm px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface truncate">Primary Section • Lead Class Tutor</span>
<span className="font-body-sm text-body-sm text-outline truncate">Primary 5 Emerald • Full Class Load</span>
</div>
</td>
<td className="py-space-sm px-space-md">
<div className="flex flex-col">
<span className="font-body-sm text-body-sm text-on-surface font-medium truncate">B.Sc. Ed. Biology (ABU Zaria)</span>
<span className="font-label-sm text-label-sm text-secondary truncate">KTSC-KD-2022-7719 (Verified)</span>
</div>
</td>
<td className="py-space-sm px-space-md">
<div className="flex flex-col">
<span className="font-body-sm text-body-sm text-on-surface truncate">+234 809 881 2234</span>
<span className="font-body-sm text-body-sm text-outline truncate">Ungwan Rimi GRA</span>
</div>
</td>
<td className="py-space-sm px-space-md whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-fixed/60 text-tertiary font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Approved Leave
                </span>
</td>
<td className="py-space-sm px-space-md text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1 rounded text-outline hover:text-primary hover:bg-surface-container" type="button">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
<button className="p-1 rounded text-on-surface-variant hover:bg-surface-container" type="button">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>
{/*  Row 5: Engr. Mustapha Aliyu  */}
<tr className="hover:bg-surface-container-low transition-colors cursor-pointer group">
<td className="py-space-sm px-space-md">
<div className="flex items-center gap-space-sm">
<div className="relative shrink-0">
<img className="w-10 h-10 rounded-full object-cover shadow-sm" data-alt="Young sharp Nigerian male computer science instructor in smart corporate casual shirt in a state-of-the-art computer lab, Kaduna Nigeria, bright tech backdrop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRt6rp_mhbYuZFUc3Kn3aHhiQmEtUE0IsZm8LQwhyuioSSExwT1aYBqCbCgslAejhF-Ek9U9APQ1o9ZdPSyfaq4spy1q_ID-PpdWCZHhFXacMief79rSUhFp50iC33QhktmXhRE6y1mpVzQilKmD5e-69CkIIn5QPYAK6fe7eqJ1-IhCs3b1wO2yfZLFnbND7D5H8w95OWizkTod6z8p55H03tSdzXr4Gaxgnx2LrfXyWgSbcOYsf5kQ"/>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-secondary ring-2 ring-surface-container-lowest"></span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md font-semibold text-on-surface truncate flex items-center gap-1">
                      Engr. Mustapha Aliyu
                      <span className="material-symbols-outlined text-[14px] text-secondary">verified</span>
</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">ID: NIIS-EMP-055 • Male</span>
</div>
</div>
</td>
<td className="py-space-sm px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface truncate">ICT &amp; Technical Studies</span>
<span className="font-body-sm text-body-sm text-outline truncate">JSS 1-3 &amp; Robotics • 20 Periods/Wk</span>
</div>
</td>
<td className="py-space-sm px-space-md">
<div className="flex flex-col">
<span className="font-body-sm text-body-sm text-on-surface font-medium truncate">B.Eng. Computer Engr (KASU)</span>
<span className="font-label-sm text-label-sm text-secondary truncate">KTSC-KD-2023-0198 (Verified)</span>
</div>
</td>
<td className="py-space-sm px-space-md">
<div className="flex flex-col">
<span className="font-body-sm text-body-sm text-on-surface truncate">+234 814 200 4591</span>
<span className="font-body-sm text-body-sm text-outline truncate">Hayin Banki, Kawo</span>
</div>
</td>
<td className="py-space-sm px-space-md whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container/50 text-on-secondary-container font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> On Duty
                </span>
</td>
<td className="py-space-sm px-space-md text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1 rounded text-outline hover:text-primary hover:bg-surface-container" type="button">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
<button className="p-1 rounded text-on-surface-variant hover:bg-surface-container" type="button">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>
{/*  Row 6: Nurse Maryam Tanko  */}
<tr className="hover:bg-surface-container-low transition-colors cursor-pointer group">
<td className="py-space-sm px-space-md">
<div className="flex items-center gap-space-sm">
<div className="relative shrink-0">
<img className="w-10 h-10 rounded-full object-cover shadow-sm" data-alt="Dedicated professional Nigerian female pediatric nurse in clean medical attire, wearing a stethoscope, in a clean, modern school clinic setting in Northern Nigeria" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzR4MDKH0LSpy9rx-kiTRVNElYEWaY9ijhLH3B6Ygwv5Jd6h_UysxseCvK_lKasHEHmR9P4RcxmNR-MaSQmX6WXfQ-oO039saNDSNShhQpTKLSPuNhK8d95fQmzCh6nbm_iGUBVhqL_4Vz9D4zKgWBbFL62wk0_dD-BQIHE8FTurdnMTmwhD3PfxSdStyBKR9eSjR9iv4KlunoIMOXkp8MJ6lqrFyr2MNVxkTftKVAFFDTjfxlkZNlKQ"/>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-secondary ring-2 ring-surface-container-lowest"></span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md font-semibold text-on-surface truncate">
                      Nurse Maryam Tanko
                    </span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">ID: NIIS-EMP-088 • Female</span>
</div>
</div>
</td>
<td className="py-space-sm px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface truncate">School Clinic &amp; Wellness</span>
<span className="font-body-sm text-body-sm text-outline truncate">Lead Pediatric Matron • Full Time</span>
</div>
</td>
<td className="py-space-sm px-space-md">
<div className="flex flex-col">
<span className="font-body-sm text-body-sm text-on-surface font-medium truncate">RN / RM (Kaduna College of Nursing)</span>
<span className="font-label-sm text-label-sm text-outline truncate">NMCN Reg #41890</span>
</div>
</td>
<td className="py-space-sm px-space-md">
<div className="flex flex-col">
<span className="font-body-sm text-body-sm text-on-surface truncate">+234 803 119 5502</span>
<span className="font-body-sm text-body-sm text-outline truncate">Badarawa, Kaduna North</span>
</div>
</td>
<td className="py-space-sm px-space-md whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container/50 text-on-secondary-container font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> On Duty
                </span>
</td>
<td className="py-space-sm px-space-md text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1 rounded text-outline hover:text-primary hover:bg-surface-container" type="button">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
<button className="p-1 rounded text-on-surface-variant hover:bg-surface-container" type="button">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>
{/*  Row 7: Mr. John Danladi  */}
<tr className="hover:bg-surface-container-low transition-colors cursor-pointer group">
<td className="py-space-sm px-space-md">
<div className="flex items-center gap-space-sm">
<div className="relative shrink-0">
<img className="w-10 h-10 rounded-full object-cover shadow-sm" data-alt="Sharp professional Nigerian male corporate accountant in a crisp blue shirt reviewing financial ledgers on a dual monitor, Kaduna office setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSe_J-dJ5jf_FK-Ce0o81rcMzUwV23vivsJvpDsrQxTSKNUVegxuFPTdJGuwEf-52oh0MNU4e5FvjrsVf6eiIqrZgt0uuLkUhPaHV3JSOBrkXjiHcr9pvA4WkTKzdBB01RIlJqW3q9Y_yQqRvkw56mnRcdpgKtkDmM6PBS6Ioe4MF1hnSLgzGfdyZ4pI9Ly1uUtVtXB-KLpjCvhk1_dthZalRALV72FRJFjKjk1Z8ZtwRWXSUcOn0llw"/>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-secondary ring-2 ring-surface-container-lowest"></span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md font-semibold text-on-surface truncate">
                      Mr. John Danladi, CNA
                    </span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">ID: NIIS-EMP-034 • Male</span>
</div>
</div>
</td>
<td className="py-space-sm px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface truncate">Bursary &amp; Accounts</span>
<span className="font-body-sm text-body-sm text-outline truncate">Senior Bursary Accountant • Full Time</span>
</div>
</td>
<td className="py-space-sm px-space-md">
<div className="flex flex-col">
<span className="font-body-sm text-body-sm text-on-surface font-medium truncate">B.Sc. Accounting (KASU), ANAN</span>
<span className="font-label-sm text-label-sm text-outline truncate">KDIR Tax Verified</span>
</div>
</td>
<td className="py-space-sm px-space-md">
<div className="flex flex-col">
<span className="font-body-sm text-body-sm text-on-surface truncate">+234 816 774 9012</span>
<span className="font-body-sm text-body-sm text-outline truncate">Television Garage, Sabon Tasha</span>
</div>
</td>
<td className="py-space-sm px-space-md whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container/50 text-on-secondary-container font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> On Duty
                </span>
</td>
<td className="py-space-sm px-space-md text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1 rounded text-outline hover:text-primary hover:bg-surface-container" type="button">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
<button className="p-1 rounded text-on-surface-variant hover:bg-surface-container" type="button">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Pagination & Summary Footer  */}
<div className="p-space-md bg-surface-container-low/40 flex flex-wrap items-center justify-between gap-space-sm">
<div className="font-body-sm text-body-sm text-on-surface-variant">
          Showing <span className="font-semibold text-on-surface">1 - 7</span> of <span className="font-semibold text-on-surface">120</span> faculty members across 7 departments
        </div>
<div className="flex items-center gap-1">
<button className="p-1.5 rounded-lg bg-surface-container text-outline hover:text-on-surface disabled:opacity-40" disabled type="button">
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<button className="px-3 py-1 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm font-semibold" type="button">1</button>
<button className="px-3 py-1 rounded-lg hover:bg-surface-container text-on-surface font-label-sm text-label-sm" type="button">2</button>
<button className="px-3 py-1 rounded-lg hover:bg-surface-container text-on-surface font-label-sm text-label-sm" type="button">3</button>
<span className="px-1 text-outline">...</span>
<button className="px-3 py-1 rounded-lg hover:bg-surface-container text-on-surface font-label-sm text-label-sm" type="button">18</button>
<button className="p-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high" type="button">
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
</div>
</div>
{/*  Right Side Contextual Dossier Card (4 Cols on 2xl)  */}
<div className="2xl:col-span-4 flex flex-col gap-space-md">
{/*  Highlighted Active Dossier Card  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
{/*  Card Top Bar & Action  */}
<div className="px-space-lg pt-space-lg pb-space-md flex items-center justify-between">
<div className="flex items-center gap-space-xs font-label-sm text-label-sm text-outline uppercase tracking-wider">
<span className="material-symbols-outlined text-[16px] text-primary">person_pin</span>
<span>Quick Staff Dossier</span>
</div>
<div className="flex items-center gap-1">
<button className="p-1 rounded text-outline hover:text-primary hover:bg-surface-container" title="Print Dossier" type="button">
<span className="material-symbols-outlined text-[18px]">print</span>
</button>
<button className="p-1 rounded text-outline hover:text-primary hover:bg-surface-container" title="Edit Staff Record" type="button">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
</div>
</div>
{/*  Staff Identity Header Banner  */}
<div className="px-space-lg pb-space-lg flex items-start gap-space-md">
<div className="relative shrink-0">
<img className="w-16 h-16 rounded-xl object-cover shadow-md" data-alt="Portrait of Malam Garba Usman, smiling senior Nigerian academic educator in sharp attire, Kaduna state educational institution, high quality dignified portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA79PmROlKDy9M9MwuqcenivMhk7qXOuU6bVhsNEPfBWzAKy-qZVmrPFuvERTR2EyQwFo6b4i1CufcMPM8t-pVd1OxGc1N77SeeBU6CYZm_SdSrwLfVul2xjEueffLkogY_r8uXtO_on2qCOwEgSeUKCY-x41aX3fy5MO5pzSsgxVX9SRoE6l3cYSL4dFAHVvGo0YKhnRzsrWhl1Ey5zpynea-6esOqbdIgWtIa1On94MZV4BejNkFzQ"/>
<span className="absolute -top-1 -right-1 p-0.5 rounded-full bg-secondary text-on-secondary">
<span className="material-symbols-outlined text-[12px] block">verified</span>
</span>
</div>
<div className="flex flex-col min-w-0">
<h3 className="font-headline-sm text-headline-sm text-on-surface truncate">Malam Garba Usman</h3>
<span className="font-body-sm text-body-sm text-primary font-medium truncate">Lead Physics &amp; Further Math Educator</span>
<div className="flex items-center gap-2 mt-1">
<span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded text-on-surface-variant font-mono">NIIS-EMP-014</span>
<span className="font-label-sm text-label-sm text-secondary bg-secondary-container/40 px-2 py-0.5 rounded font-semibold">Full-Time</span>
</div>
</div>
</div>
{/*  Performance & Distinction Metric Strip  */}
<div className="grid grid-cols-2 gap-px bg-surface-container-low mx-space-lg rounded-xl overflow-hidden mb-space-md">
<div className="bg-surface-container-lowest p-space-sm flex flex-col">
<span className="font-label-sm text-label-sm text-outline">Student WAEC/NECO Distinction</span>
<span className="font-headline-sm text-headline-sm text-secondary font-bold mt-0.5">91.4% A1-B3</span>
</div>
<div className="bg-surface-container-lowest p-space-sm flex flex-col">
<span className="font-label-sm text-label-sm text-outline">Annual Leave Balance</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold mt-0.5">14 Days Left</span>
</div>
</div>
{/*  Contact & Administrative Details  */}
<div className="px-space-lg space-y-space-sm mb-space-md">
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-outline">mail</span>
              Official Email
            </span>
<span className="text-primary font-medium truncate max-w-[190px]">g.usman@noorulilm.sch.ng</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-outline">call</span>
              Phone Number
            </span>
<span className="text-on-surface font-medium">+234 803 441 9821</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-outline">pin_drop</span>
              Residential Ward
            </span>
<span className="text-on-surface font-medium truncate max-w-[190px]">Malali GRA (Kaduna North)</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-outline">contact_emergency</span>
              Emergency Contact
            </span>
<span className="text-on-surface font-medium truncate max-w-[190px]">Hajiya Maryam (Wife)</span>
</div>
</div>
{/*  Timetable Schedule for Today (Thursday)  */}
<div className="px-space-lg pb-space-lg">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Today's Schedule (Thursday)</span>
<span className="font-label-sm text-label-sm text-primary font-medium">3 Periods Assigned</span>
</div>
<div className="space-y-space-xs">
{/*  Period 1  */}
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="p-1.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm font-bold">08:20</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Physics Theory (SSS 2 Diamond)</span>
<span className="font-body-sm text-[11px] text-outline">Science Hall C • Wave Optics</span>
</div>
</div>
<span className="font-label-sm text-[10px] bg-secondary-container/60 text-on-secondary-container px-2 py-0.5 rounded font-bold">Completed</span>
</div>
{/*  Period 2  */}
<div className="p-space-sm rounded-lg bg-primary-container text-on-primary flex items-center justify-between shadow-sm">
<div className="flex items-center gap-space-sm">
<span className="p-1.5 rounded bg-on-primary/10 text-on-primary font-label-sm text-label-sm font-bold">11:00</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-primary font-semibold">Further Mathematics (SSS 3 Gold)</span>
<span className="font-body-sm text-[11px] text-on-primary-container">Room 14B • Integral Calculus</span>
</div>
</div>
<span className="font-label-sm text-[10px] bg-on-primary text-primary px-2 py-0.5 rounded font-bold uppercase animate-pulse">Now In Session</span>
</div>
{/*  Period 3  */}
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="p-1.5 rounded bg-surface-container-high text-outline font-label-sm text-label-sm font-bold">13:30</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Physics Lab Practicals (SSS 1 Alpha)</span>
<span className="font-body-sm text-[11px] text-outline">Sir Ahmadu Bello Science Complex</span>
</div>
</div>
<span className="font-label-sm text-[10px] bg-surface-container-high text-outline px-2 py-0.5 rounded font-semibold">Upcoming</span>
</div>
</div>
</div>
{/*  Dossier Footer Action Links  */}
<div className="p-space-md bg-surface-container-low/60 flex items-center gap-space-sm">
<button className="flex-1 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm text-center" type="button">
            View Complete Personnel Dossier
          </button>
<button className="p-2 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:text-primary transition-colors shadow-sm" title="Generate Recent Payslip" type="button">
<span className="material-symbols-outlined text-[18px]">receipt_long</span>
</button>
</div>
</div>
{/*  Secondary Quick Card: Kaduna State Compliance Notice  */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-start gap-space-md">
<div className="p-2.5 rounded-xl bg-secondary-container/40 text-secondary shrink-0">
<span className="material-symbols-outlined text-[24px]">verified_user</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md font-bold text-on-surface">KTSC Audit Window Open</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            5 newly onboarded faculty members must submit biometric records to the Kaduna Teachers Service Commission headquarters on Muhammadu Buhari Way by Friday, 24 Oct 2026.
          </p>
<a className="font-label-sm text-label-sm text-secondary font-semibold mt-2 inline-flex items-center gap-1 hover:underline" href="#">
            View Pending Documents (5) <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</a>
</div>
</div>
</div>
</div>
</div>
</main>
  );
}
    