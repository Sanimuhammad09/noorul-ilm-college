
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/admin/classes-arms-section-capacity-allocator')({
  component: ClassesArmsSectionCapacityAllocator,
});

function ClassesArmsSectionCapacityAllocator() {
  return (
    <main className="w-full pt-16 px-space-lg py-space-lg flex-1 bg-surface"><div className="flex flex-col w-full">
{/*  Subtle decorative ambient background pulse (contained)  */}
<div className="relative w-full overflow-hidden">
<div className="absolute -top-24 -right-16 w-96 h-96 rounded-full bg-primary-fixed-dim/20 blur-3xl pointer-events-none"></div>
<div className="absolute top-48 left-1/3 w-80 h-80 rounded-full bg-secondary-fixed/25 blur-3xl pointer-events-none"></div>
{/*  Header & Top Action Bar Container  */}
<div className="relative flex flex-col xl:flex-row xl:items-end justify-between gap-space-lg mb-space-lg">
<div className="space-y-space-xs max-w-3xl">
<div className="flex flex-wrap items-center gap-space-sm">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm tracking-wide">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            Kaduna State MoE Certified 2026/2027
          </span>
<span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
            42 Sections Across 3 Academic Divisions
          </span>
</div>
<h1 className="font-display-lg text-display-lg text-primary tracking-tight font-bold">
          Class Structure, Arms &amp; Section Capacity Allocator
        </h1>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Configure primary and secondary class hierarchies, manage arm allocation (Emerald, Gold, Diamond, Sapphire), monitor classroom physical capacities, assign class teachers, and track pupil-to-desk ratios.
        </p>
</div>
{/*  Action Buttons  */}
<div className="flex flex-wrap items-center gap-space-sm shrink-0">
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md transition-all shadow-sm">
<span className="material-symbols-outlined text-[18px] text-outline">tune</span>
<span>Re-balance Section Populations</span>
</button>
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md transition-all shadow-sm">
<span className="material-symbols-outlined text-[18px] text-outline">print</span>
<span>Print Class Rosters</span>
</button>
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md transition-all shadow-sm">
<span className="material-symbols-outlined text-[18px] text-secondary">download</span>
<span>Export Allocation (.xlsx)</span>
</button>
<button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary-container text-on-primary hover:bg-primary font-label-md text-label-md transition-all shadow-md">
<span className="material-symbols-outlined text-[18px]">add_circle</span>
<span>Create New Class Arm</span>
</button>
</div>
</div>
{/*  KPI Summary Grid (4 Cards)  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-xl">
{/*  KPI 1  */}
<div className="relative p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between overflow-hidden">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase text-outline tracking-wider block mb-1">Total Enrolled Pupils</span>
<span className="font-metric-lg text-metric-lg text-primary block tracking-tight font-bold">1,842</span>
</div>
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]">groups</span>
</div>
</div>
<div className="mt-4 pt-3 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm bg-surface-container-low px-2.5 py-1.5 rounded-lg">
<span>PRI: <strong>820</strong></span>
<span className="text-outline-variant">•</span>
<span>JSS: <strong>540</strong></span>
<span className="text-outline-variant">•</span>
<span>SSS: <strong>482</strong></span>
</div>
</div>
{/*  KPI 2  */}
<div className="relative p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between overflow-hidden">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase text-outline tracking-wider block mb-1">Active Class Arms</span>
<span className="font-metric-lg text-metric-lg text-primary block tracking-tight font-bold">42 Sections</span>
</div>
<div className="w-10 h-10 rounded-lg bg-secondary-fixed/50 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[22px]">domain</span>
</div>
</div>
<div className="mt-4 flex items-center gap-2">
<div className="flex-1 bg-surface-container rounded-full h-1.5 overflow-hidden">
<div className="bg-secondary h-full rounded-full w-[97%]"></div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant whitespace-nowrap font-medium">43.8 / 45 avg limit</span>
</div>
</div>
{/*  KPI 3  */}
<div className="relative p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between overflow-hidden">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase text-outline tracking-wider block mb-1">Classroom Seat Capacity</span>
<span className="font-metric-lg text-metric-lg text-primary block tracking-tight font-bold">1,890 Desks</span>
</div>
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]">chair_alt</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm font-semibold">97.4% Physical Cap</span>
<span className="font-label-sm text-label-sm text-outline">48 desks available</span>
</div>
</div>
{/*  KPI 4  */}
<div className="relative p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between overflow-hidden">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase text-outline tracking-wider block mb-1">Class Teachers Assigned</span>
<span className="font-metric-lg text-metric-lg text-secondary block tracking-tight font-bold">42 / 42 Fully Allocated</span>
</div>
<div className="w-10 h-10 rounded-lg bg-secondary-fixed/50 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[22px]">badge</span>
</div>
</div>
<div className="mt-4 flex items-center gap-1.5 text-secondary font-label-sm text-label-sm font-medium">
<span className="material-symbols-outlined text-[16px]">check_circle</span>
<span>100% Homeroom Coverage</span>
</div>
</div>
</div>
{/*  Division Filter Segmented Tabs & Search/Sort controls  */}
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md mb-space-lg">
<div className="inline-flex p-1 rounded-xl bg-surface-container-low max-w-max shadow-sm" id="divisionTabs">
<button className="tab-btn px-4 py-2 rounded-lg font-label-md text-label-md bg-surface-container-lowest text-primary shadow-sm font-semibold transition-all" type="button">All Divisions (42)</button>
<button className="tab-btn px-4 py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-all" type="button">Primary Wing (Grades 1–6)</button>
<button className="tab-btn px-4 py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-all" type="button">Junior Secondary (JSS 1–3)</button>
<button className="tab-btn px-4 py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-all" type="button">Senior Secondary (SSS 1–3)</button>
</div>
<div className="flex items-center gap-space-sm">
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">filter_alt</span>
<select className="pl-9 pr-8 py-2 bg-surface-container-lowest rounded-lg font-body-sm text-body-sm text-on-surface shadow-sm focus:outline-none cursor-pointer appearance-none">
<option>All Streams &amp; Houses</option>
<option>Science Track</option>
<option>Humanities Track</option>
<option>Commercial Track</option>
<option>Boarding Only</option>
<option>Day Pupils Only</option>
</select>
<span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[16px]">arrow_drop_down</span>
</div>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">swap_vert</span>
<select className="pl-9 pr-8 py-2 bg-surface-container-lowest rounded-lg font-body-sm text-body-sm text-on-surface shadow-sm focus:outline-none cursor-pointer appearance-none">
<option>Sort by Capacity (High - Low)</option>
<option>Sort by Grade Hierarchy</option>
<option>Sort by Class Master Name</option>
</select>
<span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[16px]">arrow_drop_down</span>
</div>
</div>
</div>
{/*  Main Workspace Bento Grid (Content + Auxiliary Side Panel)  */}
<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
{/*  Primary Data Workspace (Left / Center - 8 cols)  */}
<div className="xl:col-span-8 flex flex-col gap-space-md">
{/*  Section Overview Card 1: SSS 2 Science Arm A  */}
<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-space-sm pb-space-sm mb-space-sm">
<div className="flex items-start gap-space-md">
<div className="w-12 h-12 rounded-xl bg-primary flex flex-col items-center justify-center text-on-primary shrink-0">
<span className="font-headline-sm text-headline-sm font-bold leading-none">S2</span>
<span className="text-[10px] uppercase font-bold tracking-wider opacity-80">Sci-A</span>
</div>
<div>
<div className="flex items-center gap-space-xs">
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">SSS 2 Science Arm A</h3>
<span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm font-semibold">Emerald Arm</span>
<span className="px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Day &amp; Boarding</span>
</div>
<p className="font-body-sm text-body-sm text-outline mt-0.5">
                  Homeroom: <span className="font-medium text-on-surface">Rm S-12 (Science Complex, First Floor)</span> • Rep: <span className="font-medium text-on-surface">Aisha Mansur Danbaba</span>
</p>
</div>
</div>
<div className="flex flex-col sm:items-end">
<div className="flex items-center gap-1.5">
<span className="font-metric-lg text-headline-md font-bold text-primary">38</span>
<span className="font-body-sm text-body-sm text-outline">/ 40 desks</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-bold">95% Full</span>
</div>
<span className="font-body-sm text-body-sm text-outline text-right">2 seats remaining</span>
</div>
</div>
{/*  Progress Bar & Details Strip  */}
<div className="w-full bg-surface-container rounded-full h-2 overflow-hidden mb-space-md">
<div className="bg-primary-container h-full rounded-full w-[95%]"></div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-xs mb-space-md text-on-surface-variant font-body-sm text-body-sm">
<div className="flex items-center gap-2 p-2 rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-[18px] text-primary">person</span>
<div className="min-w-0 truncate">
<span className="text-outline text-[11px] block">Class Master</span>
<span className="font-medium text-on-surface truncate block">Malam Garba Usman</span>
</div>
</div>
<div className="flex items-center gap-2 p-2 rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-[18px] text-secondary">wc</span>
<div>
<span className="text-outline text-[11px] block">Gender Split</span>
<span className="font-medium text-on-surface">20 Boys / 18 Girls</span>
</div>
</div>
<div className="flex items-center gap-2 p-2 rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-[18px] text-outline">verified</span>
<div>
<span className="text-outline text-[11px] block">Curriculum Stream</span>
<span className="font-medium text-on-surface">WAEC &amp; NECO STEM</span>
</div>
</div>
</div>
{/*  Quick Action Buttons Tray  */}
<div className="flex flex-wrap items-center justify-between gap-space-xs pt-space-xs">
<div className="flex flex-wrap items-center gap-space-xs">
<button className="px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-primary font-label-sm text-label-sm flex items-center gap-1 transition-colors">
<span className="material-symbols-outlined text-[16px]">format_list_bulleted</span>
<span>View Student Roster</span>
</button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm flex items-center gap-1 transition-colors">
<span className="material-symbols-outlined text-[16px]">switch_account</span>
<span>Assign Substitute Teacher</span>
</button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm flex items-center gap-1 transition-colors">
<span className="material-symbols-outlined text-[16px]">tune</span>
<span>Adjust Max Capacity</span>
</button>
</div>
<button className="px-3 py-1.5 rounded-lg bg-primary-container text-on-primary hover:bg-primary font-label-sm text-label-sm flex items-center gap-1 transition-colors shadow-sm">
<span className="material-symbols-outlined text-[16px]">grid_view</span>
<span>Seat Map (Rm S-12)</span>
</button>
</div>
</div>
{/*  Section Overview Card 2: SSS 2 Science Arm B  */}
<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-space-sm pb-space-sm mb-space-sm">
<div className="flex items-start gap-space-md">
<div className="w-12 h-12 rounded-xl bg-primary flex flex-col items-center justify-center text-on-primary shrink-0">
<span className="font-headline-sm text-headline-sm font-bold leading-none">S2</span>
<span className="text-[10px] uppercase font-bold tracking-wider opacity-80">Sci-B</span>
</div>
<div>
<div className="flex items-center gap-space-xs">
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">SSS 2 Science Arm B</h3>
<span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm font-semibold">Sapphire Arm</span>
<span className="px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Day Pupils</span>
</div>
<p className="font-body-sm text-body-sm text-outline mt-0.5">
                  Homeroom: <span className="font-medium text-on-surface">Rm S-14 (Science Complex, Ground Floor)</span> • Rep: <span className="font-medium text-on-surface">Bilal Nasir Ahmad</span>
</p>
</div>
</div>
<div className="flex flex-col sm:items-end">
<div className="flex items-center gap-1.5">
<span className="font-metric-lg text-headline-md font-bold text-primary">37</span>
<span className="font-body-sm text-body-sm text-outline">/ 40 desks</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-bold">92.5% Full</span>
</div>
<span className="font-body-sm text-body-sm text-outline text-right">3 seats remaining</span>
</div>
</div>
<div className="w-full bg-surface-container rounded-full h-2 overflow-hidden mb-space-md">
<div className="bg-primary-container h-full rounded-full w-[92.5%]"></div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-xs mb-space-md text-on-surface-variant font-body-sm text-body-sm">
<div className="flex items-center gap-2 p-2 rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-[18px] text-primary">person</span>
<div className="min-w-0 truncate">
<span className="text-outline text-[11px] block">Class Mistress</span>
<span className="font-medium text-on-surface truncate block">Malama Zainab Kabir</span>
</div>
</div>
<div className="flex items-center gap-2 p-2 rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-[18px] text-secondary">wc</span>
<div>
<span className="text-outline text-[11px] block">Gender Split</span>
<span className="font-medium text-on-surface">19 Boys / 18 Girls</span>
</div>
</div>
<div className="flex items-center gap-2 p-2 rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-[18px] text-outline">domain</span>
<div>
<span className="text-outline text-[11px] block">House Affiliation</span>
<span className="font-medium text-on-surface">Al-Hikmah House</span>
</div>
</div>
</div>
<div className="flex flex-wrap items-center justify-between gap-space-xs pt-space-xs">
<div className="flex flex-wrap items-center gap-space-xs">
<button className="px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-primary font-label-sm text-label-sm flex items-center gap-1 transition-colors">
<span className="material-symbols-outlined text-[16px]">format_list_bulleted</span>
<span>View Student Roster</span>
</button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm flex items-center gap-1 transition-colors">
<span className="material-symbols-outlined text-[16px]">switch_account</span>
<span>Assign Substitute</span>
</button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm flex items-center gap-1 transition-colors">
<span className="material-symbols-outlined text-[16px]">tune</span>
<span>Adjust Capacity</span>
</button>
</div>
<button className="px-3 py-1.5 rounded-lg bg-primary-container text-on-primary hover:bg-primary font-label-sm text-label-sm flex items-center gap-1 transition-colors shadow-sm">
<span className="material-symbols-outlined text-[16px]">grid_view</span>
<span>Seat Map (Rm S-14)</span>
</button>
</div>
</div>
{/*  Section Overview Card 3: SSS 2 Arts & Commercial Combined Snapshot Rows  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
{/*  Card: Arts & Humanities  */}
<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-start justify-between mb-space-sm">
<div>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">Gold Arm</span>
<h4 className="font-headline-sm text-headline-sm text-primary font-bold mt-1">SSS 2 Arts &amp; Humanities</h4>
<p className="font-body-sm text-body-sm text-outline">Rm A-04 • Ustaz Bashir Lawal</p>
</div>
<div className="text-right">
<span className="font-headline-sm text-headline-sm font-bold text-primary">36 / 40</span>
<span className="block text-[11px] text-outline">90% Capacity</span>
</div>
</div>
<div className="w-full bg-surface-container rounded-full h-1.5 mb-3">
<div className="bg-primary-container h-full rounded-full w-[90%]"></div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Class Prefect: <strong>Ibrahim Mustapha</strong> (16 Boys, 20 Girls)</p>
</div>
<div className="pt-4 mt-3 flex items-center justify-between">
<button className="font-label-sm text-label-sm text-primary hover:underline font-semibold flex items-center gap-1">
<span>View Roster</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</button>
<button className="px-2.5 py-1 rounded bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm">
                Seat Layout
              </button>
</div>
</div>
{/*  Card: Commercial Stream  */}
<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-start justify-between mb-space-sm">
<div>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">Diamond Arm</span>
<h4 className="font-headline-sm text-headline-sm text-primary font-bold mt-1">SSS 2 Commercial Stream</h4>
<p className="font-body-sm text-body-sm text-outline">Rm C-02 • Mr. Emmanuel Okon</p>
</div>
<div className="text-right">
<span className="font-headline-sm text-headline-sm font-bold text-primary">35 / 40</span>
<span className="block text-[11px] text-outline">87.5% Capacity</span>
</div>
</div>
<div className="w-full bg-surface-container rounded-full h-1.5 mb-3">
<div className="bg-primary-container h-full rounded-full w-[87.5%]"></div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Class Prefect: <strong>Fatima Haruna</strong> (18 Boys, 17 Girls)</p>
</div>
<div className="pt-4 mt-3 flex items-center justify-between">
<button className="font-label-sm text-label-sm text-primary hover:underline font-semibold flex items-center gap-1">
<span>View Roster</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</button>
<button className="px-2.5 py-1 rounded bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm">
                Seat Layout
              </button>
</div>
</div>
</div>
{/*  Section Table Snapshot: Junior Secondary & Primary Wings  */}
<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm mt-space-xs">
<div className="flex items-center justify-between pb-space-sm mb-space-md">
<div>
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Lower Division Class Allocations</h3>
<p className="font-body-sm text-body-sm text-outline">JSS 1 &amp; Primary 5 Homeroom status and desk utilization</p>
</div>
<span className="px-2.5 py-1 rounded-full bg-surface-container-low text-primary font-label-sm text-label-sm font-semibold">
              Live Enrollment Count
            </span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left font-body-sm text-body-sm">
<thead>
<tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-3 px-4 rounded-l-lg">Class &amp; Arm</th>
<th className="py-3 px-4">Class Teacher / Master</th>
<th className="py-3 px-4">Room Alloc</th>
<th className="py-3 px-4">Roster Ratio</th>
<th className="py-3 px-4">Desk Load</th>
<th className="py-3 px-4 rounded-r-lg text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y-0">
{/*  Row 1: JSS 1 Emerald  */}
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-3.5 px-4">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-secondary"></div>
<span className="font-semibold text-primary">JSS 1 Emerald</span>
</div>
<span className="text-[11px] text-outline pl-4.5 block">Boys Boarding Section</span>
</td>
<td className="py-3.5 px-4 font-medium text-on-surface">Malam Idris Garba</td>
<td className="py-3.5 px-4 text-on-surface-variant">Rm J-01 (Block A)</td>
<td className="py-3.5 px-4">
<span className="font-semibold text-primary">42 / 45</span>
<span className="text-xs text-outline block">93.3%</span>
</td>
<td className="py-3.5 px-4">
<div className="w-24 bg-surface-container rounded-full h-1.5 overflow-hidden">
<div className="bg-primary h-full rounded-full w-[93.3%]"></div>
</div>
</td>
<td className="py-3.5 px-4 text-right">
<button className="p-1.5 rounded-lg text-outline hover:text-primary hover:bg-surface-container transition-colors" title="View Options">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</td>
</tr>
{/*  Row 2: JSS 1 Diamond  */}
<tr className="hover:bg-surface-container-low/50 transition-colors bg-surface-container-low/20">
<td className="py-3.5 px-4">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-primary-container"></div>
<span className="font-semibold text-primary">JSS 1 Diamond</span>
</div>
<span className="text-[11px] text-outline pl-4.5 block">Girls Boarding Section</span>
</td>
<td className="py-3.5 px-4 font-medium text-on-surface">Haj. Maryam Tanko</td>
<td className="py-3.5 px-4 text-on-surface-variant">Rm J-03 (Block B)</td>
<td className="py-3.5 px-4">
<span className="font-semibold text-primary">40 / 45</span>
<span className="text-xs text-outline block">88.8%</span>
</td>
<td className="py-3.5 px-4">
<div className="w-24 bg-surface-container rounded-full h-1.5 overflow-hidden">
<div className="bg-secondary h-full rounded-full w-[88.8%]"></div>
</div>
</td>
<td className="py-3.5 px-4 text-right">
<button className="p-1.5 rounded-lg text-outline hover:text-primary hover:bg-surface-container transition-colors" title="View Options">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</td>
</tr>
{/*  Row 3: Primary 5 Gold  */}
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-3.5 px-4">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-tertiary-container"></div>
<span className="font-semibold text-primary">Primary 5 Gold</span>
</div>
<span className="text-[11px] text-outline pl-4.5 block">Mixed Day Wing</span>
</td>
<td className="py-3.5 px-4 font-medium text-on-surface">Mrs. Fatima Sani</td>
<td className="py-3.5 px-4 text-on-surface-variant">Rm P-15 (Primary Court)</td>
<td className="py-3.5 px-4">
<span className="font-semibold text-primary">34 / 35</span>
<span className="text-xs text-outline block">97.1%</span>
</td>
<td className="py-3.5 px-4">
<div className="w-24 bg-surface-container rounded-full h-1.5 overflow-hidden">
<div className="bg-on-tertiary-container h-full rounded-full w-[97.1%]"></div>
</div>
</td>
<td className="py-3.5 px-4 text-right">
<button className="p-1.5 rounded-lg text-outline hover:text-primary hover:bg-surface-container transition-colors" title="View Options">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
{/*  Auxiliary / Side Intelligence Panel (Right - 4 cols)  */}
<div className="xl:col-span-4 flex flex-col gap-space-md">
{/*  Module 1: Classroom Facility Overcrowding & Safety Alert  */}
<div className="p-space-lg rounded-xl bg-error-container/40 shadow-sm relative overflow-hidden">
<div className="flex items-start gap-space-sm mb-space-sm">
<div className="w-9 h-9 rounded-lg bg-error text-on-error flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]">warning</span>
</div>
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-error font-bold">Capacity Safety Alert</span>
<h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">JSS 2 Emerald Overcrowding</h4>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
            Section <strong>JSS 2 Emerald</strong> has reached <span className="font-bold text-error">44 / 45 seats (97.8% cap)</span>. Fire egress and MoE spacing requirement advises a buffer of 1.2m² per student.
          </p>
<div className="p-3 rounded-lg bg-surface-container-lowest/80 mb-space-md">
<span className="font-label-sm text-label-sm font-semibold text-primary flex items-center gap-1 mb-1">
<span className="material-symbols-outlined text-[16px] text-secondary">lightbulb</span>
              Smart System Recommendation:
            </span>
<p className="font-body-sm text-[12px] text-on-surface-variant leading-normal">
              Reallocate 3 registered day-students residing around Unguwan Rimi to <strong>JSS 2 Gold Arm</strong> (currently 37/45) to equalize section loads before mid-term assessments.
            </p>
</div>
<div className="flex items-center gap-2">
<button className="w-full py-2 px-3 rounded-lg bg-error text-on-error font-label-sm text-label-sm font-semibold hover:bg-error/90 transition-colors shadow-sm">
              Initiate Load Re-balance
            </button>
<button className="py-2 px-3 rounded-lg bg-surface-container-lowest text-on-surface font-label-sm text-label-sm hover:bg-surface-container transition-colors">
              Dismiss
            </button>
</div>
</div>
{/*  Module 2: Class Arm Naming Taxonomy & House Integration  */}
<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm">
<div className="flex items-center justify-between pb-space-sm mb-space-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[20px] text-primary">auto_stories</span>
<h4 className="font-headline-sm text-headline-sm text-primary font-bold">Arms &amp; House Taxonomy</h4>
</div>
<span className="text-outline font-label-sm text-[11px]">Kaduna Campus</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
            Official class arms mapped to traditional Islamic virtues and precious gem houses for inter-house sporting &amp; tahfeez leagues:
          </p>
<div className="space-y-space-xs">
<div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
<div className="flex items-center gap-2.5">
<span className="w-3.5 h-3.5 rounded-full bg-secondary"></span>
<div>
<span className="font-label-md text-label-md text-on-surface font-bold block leading-none">Emerald Arm</span>
<span className="font-body-sm text-[11px] text-outline">Virtue: Al-Hikmah (Wisdom)</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-primary font-semibold">12 Arms</span>
</div>
<div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
<div className="flex items-center gap-2.5">
<span className="w-3.5 h-3.5 rounded-full bg-primary-container"></span>
<div>
<span className="font-label-md text-label-md text-on-surface font-bold block leading-none">Sapphire Arm</span>
<span className="font-body-sm text-[11px] text-outline">Virtue: Al-Faruq (Justice)</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-primary font-semibold">11 Arms</span>
</div>
<div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
<div className="flex items-center gap-2.5">
<span className="w-3.5 h-3.5 rounded-full bg-on-tertiary-container"></span>
<div>
<span className="font-label-md text-label-md text-on-surface font-bold block leading-none">Gold Arm</span>
<span className="font-body-sm text-[11px] text-outline">Virtue: An-Nur (Illumination)</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-primary font-semibold">10 Arms</span>
</div>
<div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
<div className="flex items-center gap-2.5">
<span className="w-3.5 h-3.5 rounded-full bg-primary-fixed-dim"></span>
<div>
<span className="font-label-md text-label-md text-on-surface font-bold block leading-none">Diamond Arm</span>
<span className="font-body-sm text-[11px] text-outline">Virtue: As-Sidq (Truthfulness)</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-primary font-semibold">9 Arms</span>
</div>
</div>
</div>
{/*  Module 3: Section Transfer Requisition Queue  */}
<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm">
<div className="flex items-center justify-between pb-space-xs mb-space-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[20px] text-primary">swap_horiz</span>
<h4 className="font-headline-sm text-headline-sm text-primary font-bold">Transfer Requisitions</h4>
</div>
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-bold">3 Pending</span>
</div>
<span className="text-outline font-body-sm text-body-sm block mb-space-md">Awaiting Academic Vice Principal Approval</span>
<div className="space-y-space-sm">
{/*  Item 1  */}
<div className="p-3 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
<div className="flex items-start justify-between">
<div>
<span className="font-label-md text-label-md text-on-surface font-bold">Umar Farouq Sanusi</span>
<span className="text-[11px] text-outline block">Reg: NIIS-2024-0412</span>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-sm text-[11px] font-semibold">SSS 1</span>
</div>
<div className="mt-2 text-on-surface-variant font-body-sm text-[12px] flex items-center gap-1.5">
<span className="text-outline">Emerald (Arts)</span>
<span className="material-symbols-outlined text-[14px] text-primary">trending_flat</span>
<span className="font-semibold text-primary">Gold (Science A)</span>
</div>
<div className="mt-2.5 flex items-center justify-end gap-2">
<button className="px-2 py-1 rounded text-on-surface hover:bg-surface-container font-label-sm text-[11px]">Reject</button>
<button className="px-2.5 py-1 rounded bg-primary text-on-primary font-label-sm text-[11px] font-semibold">Sign-off</button>
</div>
</div>
{/*  Item 2  */}
<div className="p-3 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
<div className="flex items-start justify-between">
<div>
<span className="font-label-md text-label-md text-on-surface font-bold">Khadijah Balarabe</span>
<span className="text-[11px] text-outline block">Reg: NIIS-2025-1108</span>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-sm text-[11px] font-semibold">JSS 2</span>
</div>
<div className="mt-2 text-on-surface-variant font-body-sm text-[12px] flex items-center gap-1.5">
<span className="text-outline">Diamond (Day)</span>
<span className="material-symbols-outlined text-[14px] text-primary">trending_flat</span>
<span className="font-semibold text-primary">Sapphire (Boarding)</span>
</div>
<div className="mt-2.5 flex items-center justify-end gap-2">
<button className="px-2 py-1 rounded text-on-surface hover:bg-surface-container font-label-sm text-[11px]">Reject</button>
<button className="px-2.5 py-1 rounded bg-primary text-on-primary font-label-sm text-[11px] font-semibold">Sign-off</button>
</div>
</div>
{/*  Item 3  */}
<div className="p-3 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
<div className="flex items-start justify-between">
<div>
<span className="font-label-md text-label-md text-on-surface font-bold">Zubairu Al-Hassan</span>
<span className="text-[11px] text-outline block">Reg: NIIS-2023-0899</span>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-sm text-[11px] font-semibold">Primary 4</span>
</div>
<div className="mt-2 text-on-surface-variant font-body-sm text-[12px] flex items-center gap-1.5">
<span className="text-outline">Gold Arm</span>
<span className="material-symbols-outlined text-[14px] text-primary">trending_flat</span>
<span className="font-semibold text-primary">Diamond Arm</span>
</div>
<div className="mt-2.5 flex items-center justify-end gap-2">
<button className="px-2 py-1 rounded text-on-surface hover:bg-surface-container font-label-sm text-[11px]">Reject</button>
<button className="px-2.5 py-1 rounded bg-primary text-on-primary font-label-sm text-[11px] font-semibold">Sign-off</button>
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
    