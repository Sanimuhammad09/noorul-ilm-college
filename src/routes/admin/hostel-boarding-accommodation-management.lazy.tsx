
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/admin/hostel-boarding-accommodation-management')({
  component: HostelBoardingAccommodationManagement,
});

function HostelBoardingAccommodationManagement() {
  return (
    <main className="w-full pt-16 px-space-lg py-space-lg flex-1 bg-surface">
<div className="flex flex-col w-full space-y-space-lg">
{/*  Top Hero Header & Breadcrumb Strip  */}
<div className="relative overflow-hidden rounded-xl bg-surface-container-low p-space-lg shadow-sm">
<div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
<div className="absolute right-32 -bottom-20 h-64 w-64 rounded-full bg-secondary/10 blur-2xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-space-lg">
<div className="space-y-space-xs max-w-3xl">
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="hover:text-primary transition-colors cursor-pointer">Student Services</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="hover:text-primary transition-colors cursor-pointer">Boarding &amp; Hostel Operations</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-primary font-semibold">Dormitory Master Roster</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Hostel &amp; Boarding Accommodation Management</h1>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Complete residential hall supervision, bunk allocations, daily roll call registers, prep observation, exeat pass vetting, and Islamic pastoral welfare for Noorul Ilm boarding scholars.
        </p>
</div>
{/*  Action Group  */}
<div className="flex flex-wrap items-center gap-space-sm shrink-0">
<button className="flex items-center gap-1.5 px-space-md py-2 bg-surface-container-lowest text-on-surface rounded-lg font-label-md text-label-md shadow-sm hover:bg-surface-container-high transition-all" id="btn-export">
<span className="material-symbols-outlined text-[18px] text-outline">file_download</span>
<span>Export Register</span>
</button>
<button className="flex items-center gap-1.5 px-space-md py-2 bg-surface-container-lowest text-on-surface rounded-lg font-label-md text-label-md shadow-sm hover:bg-surface-container-high transition-all" id="btn-checklist">
<span className="material-symbols-outlined text-[18px] text-outline">fact_check</span>
<span>Inspection Checklist</span>
</button>
<button className="flex items-center gap-1.5 px-space-md py-2 bg-surface-container-lowest text-on-surface rounded-lg font-label-md text-label-md shadow-sm hover:bg-surface-container-high transition-all" id="btn-exeat">
<span className="material-symbols-outlined text-[18px] text-on-tertiary-container">local_activity</span>
<span>Issue Weekend Exeat</span>
</button>
<button className="flex items-center gap-1.5 px-space-md py-2 bg-primary text-on-primary rounded-lg font-label-md text-label-md shadow-sm hover:bg-primary-container transition-all" id="btn-allocate">
<span className="material-symbols-outlined text-[18px]">add_box</span>
<span>+ Allocate Bed Space</span>
</button>
</div>
</div>
</div>
{/*  KPI Metric Cards Grid (4 Cards)  */}
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
{/*  Card 1  */}
<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden">
<div className="flex items-start justify-between">
<div className="space-y-1">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Total Boarding Population</span>
<div className="font-metric-lg text-metric-lg text-primary">348 Scholars</div>
</div>
<div className="w-11 h-11 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[24px]">apartment</span>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
          184 Boys • 164 Girls
        </span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-semibold">100% Full</span>
</div>
</div>
{/*  Card 2  */}
<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden">
<div className="flex items-start justify-between">
<div className="space-y-1">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Night Curfew &amp; Roll Call</span>
<div className="font-metric-lg text-metric-lg text-secondary">100% Accounted</div>
</div>
<div className="w-11 h-11 rounded-lg bg-secondary-container/40 flex items-center justify-center text-on-secondary-container shrink-0">
<span className="material-symbols-outlined text-[24px]">verified_user</span>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface-variant">Zero Unexcused Dorm Absences</span>
<span className="flex items-center gap-1 text-secondary font-semibold">
<span className="material-symbols-outlined text-[14px]">done_all</span> Last: 21:45
        </span>
</div>
</div>
{/*  Card 3  */}
<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden">
<div className="flex items-start justify-between">
<div className="space-y-1">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Active Exeat Passes</span>
<div className="font-metric-lg text-metric-lg text-on-tertiary-fixed-variant">8 on Exeat</div>
</div>
<div className="w-11 h-11 rounded-lg bg-tertiary-fixed/60 flex items-center justify-center text-on-tertiary-container shrink-0">
<span className="material-symbols-outlined text-[24px]">pin_invoke</span>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span className="truncate">4 Medical • 4 Family Weekend</span>
<span className="font-semibold text-on-tertiary-container">Due 18:00 Sun</span>
</div>
</div>
{/*  Card 4  */}
<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden">
<div className="flex items-start justify-between">
<div className="space-y-1">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Maintenance &amp; Facilities</span>
<div className="font-metric-lg text-metric-lg text-on-surface">3 Workorders</div>
</div>
<div className="w-11 h-11 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[24px]">build</span>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span className="truncate">Plumbing &amp; Netting Upgrades</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-semibold text-[11px]">2 In-Flight</span>
</div>
</div>
</div>
{/*  Main Asymmetric Workspace (7-col / 5-col split)  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
{/*  LEFT 7 COLUMNS: Dorms & Master Table  */}
<div className="lg:col-span-7 space-y-space-lg">
{/*  Residential Wings Overview Card  */}
<div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm space-y-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-xs">
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Hostel Halls &amp; Dormitory Wings Overview</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Live utility health, bed capacity limits, and house leadership</p>
</div>
<span className="px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-label-sm font-semibold self-start sm:self-auto">
            Kaduna Campus
          </span>
</div>
{/*  Hall Filter Tabs  */}
<div className="flex items-center gap-1.5 overflow-x-auto pb-1">
<button className="hall-tab px-3 py-1.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md whitespace-nowrap shadow-sm">All Halls (4)</button>
<button className="hall-tab px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md whitespace-nowrap">Danfodiyo Boys</button>
<button className="hall-tab px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md whitespace-nowrap">Sultan Bello Boys</button>
<button className="hall-tab px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md whitespace-nowrap">Nana Asma'u Girls</button>
<button className="hall-tab px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md whitespace-nowrap">Queen Amina Girls</button>
</div>
{/*  Cards Sub-Grid of 4 Dorms  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs">
{/*  Dorm 1  */}
<div className="rounded-xl bg-surface-container-low p-space-md flex flex-col justify-between space-y-space-sm hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">Boys Residential Wing A</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-0.5">Danfodiyo Boys Hall</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-primary">person</span>
                  Ustaz Ahmad Al-Hassan (Master)
                </p>
</div>
<span className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary font-bold text-label-sm shadow-sm">
                92/92
              </span>
</div>
<div className="space-y-2 pt-space-xs">
<div className="flex items-center justify-between text-body-sm font-label-sm">
<span className="text-on-surface-variant">Capacity: 23 Bunk Quads</span>
<span className="text-secondary font-semibold">100% Booked</span>
</div>
<div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
<div className="bg-primary h-1.5 rounded-full w-full"></div>
</div>
<div className="grid grid-cols-3 gap-1 pt-1 text-center font-label-sm text-[10px]">
<div className="p-1.5 rounded bg-surface-container-lowest text-secondary font-semibold flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[12px]">water_drop</span> Solar Borehole
                </div>
<div className="p-1.5 rounded bg-surface-container-lowest text-secondary font-semibold flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[12px]">bolt</span> 24/7 Inverter
                </div>
<div className="p-1.5 rounded bg-surface-container-lowest text-primary font-semibold flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[12px]">sanitizer</span> 98% Rating
                </div>
</div>
</div>
</div>
{/*  Dorm 2  */}
<div className="rounded-xl bg-surface-container-low p-space-md flex flex-col justify-between space-y-space-sm hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">Boys Residential Wing B</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-0.5">Sultan Bello Boys Hall</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-primary">person</span>
                  Mallam Idris Garba (Master)
                </p>
</div>
<span className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary font-bold text-label-sm shadow-sm">
                92/92
              </span>
</div>
<div className="space-y-2 pt-space-xs">
<div className="flex items-center justify-between text-body-sm font-label-sm">
<span className="text-on-surface-variant">Capacity: 23 Bunk Quads</span>
<span className="text-secondary font-semibold">100% Booked</span>
</div>
<div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
<div className="bg-primary h-1.5 rounded-full w-full"></div>
</div>
<div className="grid grid-cols-3 gap-1 pt-1 text-center font-label-sm text-[10px]">
<div className="p-1.5 rounded bg-surface-container-lowest text-secondary font-semibold flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[12px]">water_drop</span> Solar Borehole
                </div>
<div className="p-1.5 rounded bg-surface-container-lowest text-secondary font-semibold flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[12px]">bolt</span> 24/7 Inverter
                </div>
<div className="p-1.5 rounded bg-surface-container-lowest text-primary font-semibold flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[12px]">sanitizer</span> 96% Rating
                </div>
</div>
</div>
</div>
{/*  Dorm 3  */}
<div className="rounded-xl bg-surface-container-low p-space-md flex flex-col justify-between space-y-space-sm hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">Girls Residential Wing A</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-0.5">Nana Asma'u Girls Hall</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-secondary">person</span>
                  Hajiya Maryam Tanko (Mistress)
                </p>
</div>
<span className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-secondary font-bold text-label-sm shadow-sm">
                82/82
              </span>
</div>
<div className="space-y-2 pt-space-xs">
<div className="flex items-center justify-between text-body-sm font-label-sm">
<span className="text-on-surface-variant">Capacity: 21 Bunk Quads</span>
<span className="text-secondary font-semibold">100% Booked</span>
</div>
<div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
<div className="bg-secondary h-1.5 rounded-full w-full"></div>
</div>
<div className="grid grid-cols-3 gap-1 pt-1 text-center font-label-sm text-[10px]">
<div className="p-1.5 rounded bg-surface-container-lowest text-secondary font-semibold flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[12px]">water_drop</span> Solar Borehole
                </div>
<div className="p-1.5 rounded bg-surface-container-lowest text-secondary font-semibold flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[12px]">bolt</span> 24/7 Inverter
                </div>
<div className="p-1.5 rounded bg-surface-container-lowest text-secondary font-semibold flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[12px]">sanitizer</span> 99% Rating
                </div>
</div>
</div>
</div>
{/*  Dorm 4  */}
<div className="rounded-xl bg-surface-container-low p-space-md flex flex-col justify-between space-y-space-sm hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">Girls Residential Wing B</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-0.5">Queen Amina Girls Hall</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-secondary">person</span>
                  Uztaza Bilkisu Dan-Ali (Mistress)
                </p>
</div>
<span className="w-8 h-8 rounded-lg bg-surface-container-lowest flex items-center justify-center text-secondary font-bold text-label-sm shadow-sm">
                82/82
              </span>
</div>
<div className="space-y-2 pt-space-xs">
<div className="flex items-center justify-between text-body-sm font-label-sm">
<span className="text-on-surface-variant">Capacity: 21 Bunk Quads</span>
<span className="text-secondary font-semibold">100% Booked</span>
</div>
<div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
<div className="bg-secondary h-1.5 rounded-full w-full"></div>
</div>
<div className="grid grid-cols-3 gap-1 pt-1 text-center font-label-sm text-[10px]">
<div className="p-1.5 rounded bg-surface-container-lowest text-secondary font-semibold flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[12px]">water_drop</span> Solar Borehole
                </div>
<div className="p-1.5 rounded bg-surface-container-lowest text-secondary font-semibold flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[12px]">bolt</span> 24/7 Inverter
                </div>
<div className="p-1.5 rounded bg-surface-container-lowest text-secondary font-semibold flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[12px]">sanitizer</span> 98% Rating
                </div>
</div>
</div>
</div>
</div>
</div>
{/*  Residential Learner Master Registry & Bed Space Table  */}
<div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm space-y-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-2">
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Residential Learner Master Registry</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Live bed inventory tagging, class allocation, and residential status</p>
</div>
<div className="flex items-center gap-space-xs">
<div className="relative">
<span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-outline text-[16px]">filter_list</span>
<input className="pl-8 pr-3 py-1.5 bg-surface-container-low rounded-lg text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary w-48 text-[12px]" placeholder="Filter bed or name..." type="text"/>
</div>
</div>
</div>
{/*  Table Container  */}
<div className="overflow-x-auto rounded-lg">
<table className="w-full text-left font-body-sm text-body-sm">
<thead className="bg-surface-container-low text-outline uppercase font-label-sm text-[11px] tracking-wider">
<tr>
<th className="py-3 px-space-md">Bed Space Tag</th>
<th className="py-3 px-space-md">Student Profile</th>
<th className="py-3 px-space-md">Room &amp; Hall</th>
<th className="py-3 px-space-md">Exeat / Roll Call</th>
<th className="py-3 px-space-md text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container">
{/*  Row 1  */}
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-3 px-space-md font-semibold text-primary font-mono text-[13px]">
                  DAN-B1-04
                </td>
<td className="py-3 px-space-md">
<div className="flex items-center gap-2.5">
<img className="w-8 h-8 rounded-full object-cover shrink-0" data-alt="Portrait photo of a young Nigerian male junior secondary boarding student wearing a crisp school uniform in Kaduna, studio lighting with navy school colors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg-bEM0PWmQwAer5ANrm89rCGPyyRn73xbRtAzpvateMiYG8IvzSQHgCY0Numantg51eY2XJ6dFUaJR_9bYaobjixCzZWWyXTW5AXUQ0lQziEQXu8otjQ1u5uNlJMXt9p81qEwcUqZmNnWW9TKtcj-O79PbQqaSsN9lckENGHAV7xlNBuQ-DN_dKyIlKqUCAeCcWG7pZyYdMN_mb5I4FP-TQnHP7Y3k0Fuy2moU8Nu81luxxbBWPK61A"/>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface leading-tight">Usman Kabir Mohammed</span>
<span className="text-[11px] text-on-surface-variant">NIIS/2024/0312 • JSS 1-Gold</span>
</div>
</div>
</td>
<td className="py-3 px-space-md">
<div className="flex flex-col">
<span className="font-medium text-on-surface">Room 102 • Lower Bunk</span>
<span className="text-[11px] text-on-surface-variant">Danfodiyo Boys Hall</span>
</div>
</td>
<td className="py-3 px-space-md">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-container/40 text-on-secondary-container font-label-sm text-[11px] font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> In Hall (Dorm)
                  </span>
</td>
<td className="py-3 px-space-md text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1 rounded hover:bg-surface-container text-primary hover:text-on-surface transition-colors" title="Manage Bed">
<span className="material-symbols-outlined text-[18px]">bed</span>
</button>
<button className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" title="Guardian Contact">
<span className="material-symbols-outlined text-[18px]">call</span>
</button>
</div>
</td>
</tr>
{/*  Row 2  */}
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-3 px-space-md font-semibold text-primary font-mono text-[13px]">
                  SUL-B3-11
                </td>
<td className="py-3 px-space-md">
<div className="flex items-center gap-2.5">
<img className="w-8 h-8 rounded-full object-cover shrink-0" data-alt="Portrait photo of a polite Nigerian teenage high school student in Kaduna, wearing school blazer and lanyard, dignified academic appearance" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5kNPCe3Ye1KDNxkxqQlpO9n4ksrRedCzP8WDRonPTpgnevLUBAsLGp4iui9312Awl3ZOOK_8rSX5sc01uMiMlejgxKfHDPYXXftXPS1rgATyBxIpN9YcREebDb7aQci_B7n9gGw0kqoWyaSrs1MArjQv7QA8TljWKSSS5BvPHEXNR6MbMGvNJ_QHtMmmyb5K6xJ4E_lVOJ0jV1kv4V9Ep8fPMz62b2XTRkDAgug5BO3Psz6rTdPM_gg"/>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface leading-tight">Farouk Umar Sadiq</span>
<span className="text-[11px] text-on-surface-variant">NIIS/2022/0118 • SSS 2-Science</span>
</div>
</div>
</td>
<td className="py-3 px-space-md">
<div className="flex flex-col">
<span className="font-medium text-on-surface">Room 204 • Upper Bunk</span>
<span className="text-[11px] text-on-surface-variant">Sultan Bello Boys Hall</span>
</div>
</td>
<td className="py-3 px-space-md">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-[11px] font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span> Pending Exeat
                  </span>
</td>
<td className="py-3 px-space-md text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1 rounded hover:bg-surface-container text-primary hover:text-on-surface transition-colors" title="Manage Bed">
<span className="material-symbols-outlined text-[18px]">bed</span>
</button>
<button className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" title="Guardian Contact">
<span className="material-symbols-outlined text-[18px]">call</span>
</button>
</div>
</td>
</tr>
{/*  Row 3  */}
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-3 px-space-md font-semibold text-primary font-mono text-[13px]">
                  NAN-G2-07
                </td>
<td className="py-3 px-space-md">
<div className="flex items-center gap-2.5">
<img className="w-8 h-8 rounded-full object-cover shrink-0" data-alt="Portrait photograph of a bright Northern Nigerian female high school student wearing an elegant white hijab uniform at Noorul Ilm Kaduna" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT6IttEMbXhGubmpvSffmbcAZi_bi2e3IN3f6H7Ff56BE-HBJ1opdUYwmESfgZ9QX2_RbGAsws9upAPwjOVkJhYGdAAxt0CErmm5no2JwapJRGsNTb3oSEA-s3ByZJWN-ZYBJNnYBdHMvkpnbZrPFCyplj5AbaJuMqPjq4Lc22W_oBN8_Q3T6Qu9ZCo2ATU8rKNOsZQUlNjGJli_WqoKiVwNWPKt-YcetQ6WBLJ7tA3XqplS_GR7ZjyA"/>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface leading-tight">Zainab Ibrahim Yakubu</span>
<span className="text-[11px] text-on-surface-variant">NIIS/2021/0089 • SSS 3-Arts</span>
</div>
</div>
</td>
<td className="py-3 px-space-md">
<div className="flex flex-col">
<span className="font-medium text-on-surface">Room 106 • Lower Bunk</span>
<span className="text-[11px] text-on-surface-variant">Nana Asma'u Girls Hall</span>
</div>
</td>
<td className="py-3 px-space-md">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-[11px] font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Exeat (Medical)
                  </span>
</td>
<td className="py-3 px-space-md text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1 rounded hover:bg-surface-container text-primary hover:text-on-surface transition-colors" title="Manage Bed">
<span className="material-symbols-outlined text-[18px]">bed</span>
</button>
<button className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" title="Guardian Contact">
<span className="material-symbols-outlined text-[18px]">call</span>
</button>
</div>
</td>
</tr>
{/*  Row 4  */}
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-3 px-space-md font-semibold text-primary font-mono text-[13px]">
                  QAM-G1-12
                </td>
<td className="py-3 px-space-md">
<div className="flex items-center gap-2.5">
<img className="w-8 h-8 rounded-full object-cover shrink-0" data-alt="Portrait photo of a young Nigerian student girl smiling modestly wearing school headscarf uniform, studio lighting, clear high school environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEqOcLAIvO1jbiClMLLttOlE3aCCzrkgU5pr7pWOEhjkn290X5BF4PTAucoHcGk4jCN4KaulXLTlkr5jpCwPkVznvm93nADbW6FXJM6fo_QE4EK4eX4L_ZmNOt_tbL7EBt3JY6UhscRtHEe7zPJknj4tyXFFgJxv9OcRKmCzpGkqnO-Gp35jutnxzMfge2yz_VUp59PDhRoz10QsUosL8uQ3yQo5Ox3O__hrY9W8wPVIS6aacBxj-lxQ"/>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface leading-tight">Amina Abdullahi Bello</span>
<span className="text-[11px] text-on-surface-variant">NIIS/2023/0445 • JSS 2-Diamond</span>
</div>
</div>
</td>
<td className="py-3 px-space-md">
<div className="flex flex-col">
<span className="font-medium text-on-surface">Room 101 • Lower Bunk</span>
<span className="text-[11px] text-on-surface-variant">Queen Amina Girls Hall</span>
</div>
</td>
<td className="py-3 px-space-md">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-error-container text-on-error-container font-label-sm text-[11px] font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span> Clinic Bed Rest
                  </span>
</td>
<td className="py-3 px-space-md text-right">
<div className="flex items-center justify-end gap-1">
<button className="p-1 rounded hover:bg-surface-container text-primary hover:text-on-surface transition-colors" title="Manage Bed">
<span className="material-symbols-outlined text-[18px]">bed</span>
</button>
<button className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" title="Guardian Contact">
<span className="material-symbols-outlined text-[18px]">call</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="flex items-center justify-between pt-space-xs text-body-sm font-label-sm text-on-surface-variant">
<span>Showing 4 of 348 Boarding Scholars</span>
<div className="flex items-center gap-2">
<button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors">Previous</button>
<span className="px-2 py-0.5 rounded bg-primary text-on-primary font-bold">1</span>
<button className="px-2 py-0.5 rounded hover:bg-surface-container">2</button>
<button className="px-2 py-0.5 rounded hover:bg-surface-container">3</button>
<button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors">Next</button>
</div>
</div>
</div>
</div>
{/*  RIGHT 5 COLUMNS: Exeat Desk, Routine, Pastoral Care  */}
<div className="lg:col-span-5 space-y-space-lg">
{/*  Exeat & Weekend Pass Approval Docket  */}
<div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm space-y-space-md border-t-4 border-primary">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-tertiary-fixed flex items-center justify-center text-on-tertiary-container">
<span className="material-symbols-outlined text-[18px]">receipt_long</span>
</div>
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Exeat &amp; Weekend Pass Docket</h2>
<span className="font-label-sm text-label-sm text-on-surface-variant">Strict biometric &amp; guardian PIN authorization</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-[11px] font-bold">2 Pending Action</span>
</div>
{/*  Exeat Request 1 (Interactive)  */}
<div className="rounded-xl bg-surface-container-low p-space-md space-y-space-sm transition-all" id="exeat-card-1">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-label-sm">
                FS
              </div>
<div>
<span className="font-label-lg text-label-lg text-on-surface block">Farouk Umar Sadiq</span>
<span className="font-body-sm text-[11px] text-on-surface-variant">Class: SSS 2 Science • Sultan Bello Hall</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-[10px] font-bold uppercase">
              Action Req.
            </span>
</div>
<div className="rounded-lg bg-surface-container-lowest p-space-sm text-body-sm text-on-surface space-y-1">
<div className="flex items-center justify-between text-[12px]">
<span className="text-on-surface-variant">Reason:</span>
<span className="font-medium">Elder Sister Wedding Fatiha (Zaria)</span>
</div>
<div className="flex items-center justify-between text-[12px]">
<span className="text-on-surface-variant">Guardian Contact:</span>
<span className="font-mono font-medium text-secondary">Alhaji Umar Sadiq (PIN ••• Verified)</span>
</div>
<div className="flex items-center justify-between text-[12px]">
<span className="text-on-surface-variant">Departure / Return:</span>
<span>Fri 15:30 → Sun 18:00</span>
</div>
</div>
<div className="flex items-center gap-2 pt-1" id="exeat-actions-1">
<button className="flex-1 py-1.5 px-3 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md flex items-center justify-center gap-1 hover:bg-secondary-fixed-variant transition-colors shadow-sm" onClick={() => {}}>
<span className="material-symbols-outlined text-[16px]">check</span>
<span>Approve Pass</span>
</button>
<button className="py-1.5 px-3 rounded-lg bg-surface-container-highest text-error font-label-md text-label-md hover:bg-error-container transition-colors" onClick={() => {}}>
<span>Decline</span>
</button>
</div>
</div>
{/*  Exeat Request 2 (Already Approved)  */}
<div className="rounded-xl bg-surface-container-low p-space-md space-y-space-sm opacity-90">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-label-sm">
                ZY
              </div>
<div>
<span className="font-label-lg text-label-lg text-on-surface block">Zainab Ibrahim Yakubu</span>
<span className="font-body-sm text-[11px] text-on-surface-variant">Class: SSS 3 Arts • Nana Asma'u Hall</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-[10px] font-bold uppercase">
              Approved
            </span>
</div>
<div className="rounded-lg bg-surface-container-lowest p-space-sm text-body-sm text-on-surface space-y-1">
<div className="flex items-center justify-between text-[12px]">
<span className="text-on-surface-variant">Medical Reason:</span>
<span className="font-medium truncate">Dental Care • 44 Army Ref. Hospital</span>
</div>
<div className="flex items-center justify-between text-[12px]">
<span className="text-on-surface-variant">Security Passcode:</span>
<span className="font-mono font-bold text-primary">#EX-884-KAD</span>
</div>
<div className="flex items-center justify-between text-[12px]">
<span className="text-on-surface-variant">Chaperone:</span>
<span>Hostel Matron (Mrs. Tanko)</span>
</div>
</div>
</div>
</div>
{/*  Daily Boarding Routine & Prep Bell Schedule  */}
<div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm space-y-space-md">
<div className="flex items-center justify-between pb-space-xs">
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Daily Boarding Routine &amp; Prep Bells</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Synchronized Islamic prayer, study hours &amp; roll calls</p>
</div>
<span className="material-symbols-outlined text-primary text-[22px]">schedule</span>
</div>
<div className="space-y-3 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-surface-container-highest">
{/*  Step 1  */}
<div className="flex items-start gap-3 relative">
<span className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-[11px] shrink-0 z-10">1</span>
<div className="flex-1 bg-surface-container-low rounded-lg p-2.5 flex items-center justify-between">
<div>
<span className="font-label-md text-label-md text-on-surface block font-semibold">Fajr Prayer &amp; Morning Prep</span>
<span className="text-[11px] text-on-surface-variant">School Mosque • Tajweed Recitation</span>
</div>
<span className="font-mono font-bold text-primary text-[12px]">05:30 AM</span>
</div>
</div>
{/*  Step 2  */}
<div className="flex items-start gap-3 relative">
<span className="w-7 h-7 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center font-bold text-[11px] shrink-0 z-10">2</span>
<div className="flex-1 bg-surface-container-low rounded-lg p-2.5 flex items-center justify-between">
<div>
<span className="font-label-md text-label-md text-on-surface block font-semibold">Dining Hall Breakfast</span>
<span className="text-[11px] text-on-surface-variant">Uniform Dress Code Inspection</span>
</div>
<span className="font-mono font-bold text-on-surface text-[12px]">07:00 AM</span>
</div>
</div>
{/*  Step 3  */}
<div className="flex items-start gap-3 relative">
<span className="w-7 h-7 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center font-bold text-[11px] shrink-0 z-10">3</span>
<div className="flex-1 bg-surface-container-low rounded-lg p-2.5 flex items-center justify-between">
<div>
<span className="font-label-md text-label-md text-on-surface block font-semibold">Sports &amp; Outdoor Recreation</span>
<span className="text-[11px] text-on-surface-variant">Football Pitch &amp; Badminton Courts</span>
</div>
<span className="font-mono font-bold text-on-surface text-[12px]">03:30 PM</span>
</div>
</div>
{/*  Step 4  */}
<div className="flex items-start gap-3 relative">
<span className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-[11px] shrink-0 z-10">4</span>
<div className="flex-1 bg-surface-container-low rounded-lg p-2.5 flex items-center justify-between">
<div>
<span className="font-label-md text-label-md text-on-surface block font-semibold">Mandatory Night Study Prep</span>
<span className="text-[11px] text-on-surface-variant">Academic Hall • Housemasters on Duty</span>
</div>
<span className="font-mono font-bold text-secondary text-[12px]">07:30 PM</span>
</div>
</div>
{/*  Step 5  */}
<div className="flex items-start gap-3 relative">
<span className="w-7 h-7 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-[11px] shrink-0 z-10">5</span>
<div className="flex-1 bg-surface-container-low rounded-lg p-2.5 flex items-center justify-between">
<div>
<span className="font-label-md text-label-md text-on-surface block font-semibold">Lights Out &amp; Curfew Roll Call</span>
<span className="text-[11px] text-on-surface-variant">Dorm Doors Locked • Security Patrol Active</span>
</div>
<span className="font-mono font-bold text-primary text-[12px]">09:30 PM</span>
</div>
</div>
</div>
</div>
{/*  Pastoral Care & Student Welfare Health Watch  */}
<div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm space-y-space-md">
<div className="flex items-center justify-between pb-space-xs">
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Pastoral Care &amp; Health Watch</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Dormitory sanitary compliance and clinic surveillance</p>
</div>
<span className="w-2.5 h-2.5 rounded-full bg-secondary animate-ping"></span>
</div>
<div className="space-y-space-sm">
{/*  Item 1: Nurse on Duty  */}
<div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-secondary text-[20px]">medical_services</span>
<div>
<span className="font-label-md text-label-md text-on-surface block font-semibold">Hostel Nurse On-Duty</span>
<span className="text-[11px] text-on-surface-variant">Staff Nurse Fatima Kabir (Clinic Ext. 14)</span>
</div>
</div>
<span className="px-2 py-0.5 rounded-full bg-secondary-container/50 text-on-secondary-container font-label-sm text-[10px] font-bold">
              ACTIVE
            </span>
</div>
{/*  Item 2: Mosquito Net Audit  */}
<div className="p-3 rounded-lg bg-surface-container-low space-y-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-primary text-[20px]">verified</span>
<div>
<span className="font-label-md text-label-md text-on-surface block font-semibold">Insecticide Net Compliance</span>
<span className="text-[11px] text-on-surface-variant">Kaduna State Malaria Prevention Standard</span>
</div>
</div>
<span className="font-bold text-primary text-label-md">100%</span>
</div>
<div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
<div className="bg-primary h-1.5 rounded-full w-full"></div>
</div>
</div>
{/*  Item 3: Nutrition & Dining Check  */}
<div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-on-tertiary-container text-[20px]">restaurant</span>
<div>
<span className="font-label-md text-label-md text-on-surface block font-semibold">Dinner Attendance Audit</span>
<span className="text-[11px] text-on-surface-variant">344 Served • 4 Special Dietary Diets</span>
</div>
</div>
<span className="text-[11px] text-on-surface-variant font-mono font-medium">98.9%</span>
</div>
</div>
</div>
</div>
</div>
{/*  Micro-interaction / Client Logic  */}

</div>
</main>
  );
}
    