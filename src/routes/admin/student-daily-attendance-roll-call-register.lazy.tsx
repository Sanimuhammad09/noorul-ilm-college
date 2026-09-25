
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/admin/student-daily-attendance-roll-call-register')({
  component: StudentDailyAttendanceRollCallRegister,
});

function StudentDailyAttendanceRollCallRegister() {
  return (
    <main className="w-full pt-16 px-space-lg py-space-lg flex-1 bg-surface"><div className="flex flex-col w-full">
{/*  Sub-Header / Notification Alert Banner  */}
<div className="flex items-center justify-between px-space-md py-2.5 bg-surface-container-high rounded-xl mb-space-md text-on-surface shadow-sm">
<div className="flex items-center gap-space-sm min-w-0">
<span className="flex h-2.5 w-2.5 rounded-full bg-secondary animate-pulse shrink-0"></span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">Kaduna State EMIS Live Sync</span>
<span className="text-outline text-body-sm hidden md:inline">|</span>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">
        Morning session roll call open until 09:00 AM. 4 arms pending final lock. Statutory register auto-forwards to Kaduna MoE Portal.
      </p>
</div>
<div className="flex items-center gap-space-xs shrink-0">
<span className="font-label-sm text-label-sm bg-surface-container-lowest px-2 py-0.5 rounded text-on-surface font-semibold shadow-xs">Zone: Kaduna North</span>
</div>
</div>
{/*  Breadcrumbs & Document Head Context  */}
<div className="flex flex-col gap-1 mb-space-md">
<div className="flex items-center gap-2 text-outline font-label-sm text-label-sm">
<a className="hover:text-primary transition-colors" href="#">Academic Management</a>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<a className="hover:text-primary transition-colors" href="#">Daily Attendance</a>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-primary font-semibold">Morning Roll Call (Kaduna MoE Registry)</span>
</div>
<div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md mt-1">
<div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Student Daily Attendance &amp; Roll Call Register</h1>
<p className="font-body-md text-body-md text-on-surface-variant mt-0.5">
          Real-time class registers, automated parent SMS absence alerts, and Kaduna Ministry of Education daily statutory attendance sync.
        </p>
</div>
{/*  Quick Action Controls  */}
<div className="flex flex-wrap items-center gap-space-xs shrink-0">
<div className="flex items-center gap-2 bg-surface-container-lowest px-3 py-2 rounded-lg shadow-sm">
<span className="material-symbols-outlined text-primary text-[18px]">event</span>
<div className="flex flex-col">
<span className="font-label-sm text-[10px] text-outline uppercase font-semibold leading-none">Date</span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold leading-tight">Thu, 16 Oct 2026</span>
</div>
</div>
<div className="flex items-center gap-2 bg-surface-container-lowest px-3 py-2 rounded-lg shadow-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">school</span>
<div className="flex flex-col">
<span className="font-label-sm text-[10px] text-outline uppercase font-semibold leading-none">Session Term</span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold leading-tight">2026/2027 • 1st Term (W6)</span>
</div>
</div>
</div>
</div>
</div>
{/*  Operational Action Toolbar  */}
<div className="flex flex-wrap items-center justify-between gap-space-sm p-space-sm bg-surface-container-lowest rounded-xl shadow-sm mb-space-lg">
<div className="flex flex-wrap items-center gap-space-xs">
<button className="flex items-center gap-1.5 px-space-md py-2 bg-secondary text-on-secondary rounded-lg font-label-md text-label-md hover:bg-on-secondary-container transition-colors shadow-sm" id="mark-all-present-btn" type="button">
<span className="material-symbols-outlined text-[18px]">bolt</span>
<span>Mark All Present</span>
</button>
<button className="flex items-center gap-1.5 px-space-md py-2 bg-surface-container-low text-on-surface rounded-lg font-label-md text-label-md hover:bg-surface-container transition-colors shadow-xs" type="button">
<span className="material-symbols-outlined text-error text-[18px]">cell_tower</span>
<span>Dispatch Absent SMS to Parents (4)</span>
</button>
<button className="flex items-center gap-1.5 px-space-md py-2 bg-surface-container-low text-on-surface rounded-lg font-label-md text-label-md hover:bg-surface-container transition-colors shadow-xs" type="button">
<span className="material-symbols-outlined text-primary text-[18px]">download_for_offline</span>
<span>Export MoE Broad-sheet (.xlsx)</span>
</button>
</div>
<div className="flex items-center gap-space-xs">
<button className="flex items-center gap-1.5 px-space-md py-2 bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">lock_clock</span>
<span>Lock Day's Register</span>
</button>
</div>
</div>
{/*  Stat Metric Cards (4 Cards)  */}
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md mb-space-lg">
{/*  Turnout Metric  */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Campus Overall Turnout</span>
<div className="font-metric-lg text-metric-lg text-primary font-bold mt-1">96.4%</div>
</div>
<div className="h-10 w-10 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[22px]">how_to_reg</span>
</div>
</div>
<div className="mt-4 pt-3 bg-surface-container-low/50 -mx-space-md -mb-space-md px-space-md py-2.5 flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium">1,776 / 1,842 Present</span>
<span className="font-label-sm text-label-sm text-secondary font-bold flex items-center gap-0.5">
<span className="material-symbols-outlined text-[14px]">trending_up</span> +0.8%
        </span>
</div>
</div>
{/*  Unexcused Absences  */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Unexcused Absences</span>
<div className="font-metric-lg text-metric-lg text-error font-bold mt-1">28</div>
</div>
<div className="h-10 w-10 rounded-lg bg-error-container text-on-error-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[22px]">person_off</span>
</div>
</div>
<div className="mt-4 pt-3 bg-surface-container-low/50 -mx-space-md -mb-space-md px-space-md py-2.5 flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">Automated SMS queued</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-error/10 text-error font-semibold">Priority 1</span>
</div>
</div>
{/*  Excused / Medical Absences  */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Excused / Medical</span>
<div className="font-metric-lg text-metric-lg text-primary-container font-bold mt-1">38</div>
</div>
<div className="h-10 w-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[22px]">medical_services</span>
</div>
</div>
<div className="mt-4 pt-3 bg-surface-container-low/50 -mx-space-md -mb-space-md px-space-md py-2.5 flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">Verified by School Clinic</span>
<span className="font-label-sm text-label-sm text-primary font-semibold flex items-center gap-0.5">
<span className="material-symbols-outlined text-[14px]">task_alt</span> Certified
        </span>
</div>
</div>
{/*  Late Arrivals  */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Late Arrivals (Gate)</span>
<div className="font-metric-lg text-metric-lg text-tertiary-container font-bold mt-1">14</div>
</div>
<div className="h-10 w-10 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed-variant flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[22px]">schedule</span>
</div>
</div>
<div className="mt-4 pt-3 bg-surface-container-low/50 -mx-space-md -mb-space-md px-space-md py-2.5 flex items-center justify-between">
<span className="font-body-sm text-body-sm text-on-surface-variant">Biometric NFC scan</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-tertiary-container/10 text-tertiary-container font-semibold">Tardy slip issued</span>
</div>
</div>
</div>
{/*  Class Division Level Tabs & Active Arms Strip  */}
<div className="flex flex-col gap-space-sm mb-space-md">
{/*  Division Switcher  */}
<div className="flex items-center gap-1.5 overflow-x-auto p-1 bg-surface-container-low rounded-xl">
<button className="px-space-md py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface whitespace-nowrap transition-colors" type="button">
        All School (1,842)
      </button>
<button className="px-space-md py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface whitespace-nowrap transition-colors" type="button">
        Primary <span className="text-outline font-normal">Grades 1-6 (97.4%)</span>
</button>
<button className="px-space-md py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface whitespace-nowrap transition-colors" type="button">
        JSS <span className="text-outline font-normal">Grades 7-9 (96.1%)</span>
</button>
<button className="px-space-md py-2 rounded-lg font-label-md text-label-md bg-surface-container-lowest text-primary font-bold shadow-sm whitespace-nowrap transition-colors" type="button">
        SSS <span className="text-secondary font-semibold">Grades 10-12 (94.6%)</span>
</button>
</div>
{/*  Active Class Section Information Bar  */}
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md p-space-md bg-surface-container-lowest rounded-xl shadow-sm">
<div className="flex items-center gap-space-md">
<div className="h-12 w-12 rounded-xl bg-primary text-on-primary flex items-center justify-center font-headline-sm text-headline-sm shrink-0">
          S2A
        </div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">SSS 2 Science Arm A</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
              38 Registered Learners
            </span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-medium">
              Room S-12
            </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1.5 mt-0.5">
<span className="material-symbols-outlined text-[16px] text-outline">badge</span>
<span>Class Teacher: <strong className="text-on-surface font-medium">Mallam Garba Usman</strong> (B.Sc Ed. Physics, ABU Zaria)</span>
</p>
</div>
</div>
{/*  Quick Filter & Search inside Class  */}
<div className="flex items-center gap-space-xs">
<div className="relative w-64">
<span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
<input className="w-full pl-8 pr-3 py-1.5 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Search learner or ID..." type="text"/>
</div>
<button className="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]">filter_list</span>
</button>
</div>
</div>
</div>
{/*  Attendance Register Main Table Container  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden mb-space-lg">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-3 px-space-md w-12 text-center">
<input className="rounded text-primary focus:ring-0 cursor-pointer" type="checkbox"/>
</th>
<th className="py-3 px-space-sm w-14 text-center">Roll</th>
<th className="py-3 px-space-md">Student Learner Details</th>
<th className="py-3 px-space-md text-center">Status Toggle</th>
<th className="py-3 px-space-md">Arrival Time &amp; Method</th>
<th className="py-3 px-space-md">Absence Reason / Notes</th>
<th className="py-3 px-space-md">Guardian Contact &amp; SMS Dispatch</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-low font-body-md text-body-md text-on-surface">
{/*  Row 1: Aisha Mansur Danbaba (Present)  */}
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="py-3 px-space-md text-center">
<input defaultChecked className="rounded text-primary focus:ring-0 cursor-pointer" type="checkbox"/>
</td>
<td className="py-3 px-space-sm text-center font-label-md text-outline font-semibold">01</td>
<td className="py-3 px-space-md">
<div className="flex items-center gap-space-sm">
<img className="w-10 h-10 rounded-full object-cover shrink-0" data-alt="Portrait photo of a young Nigerian female high school student wearing a modest dark navy school hijab and blazer, gentle smile, modern studio lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs2czVzvdnGCwBO7pO_WXsLoSn_c_KikyIWmaD-xl8sIidCgK6rKMy-11zWv5iFGR6GZW-2DxW4pzY8C-HEB__EmcF1QAj-IMVR_N8BpIiyJc3OJp5h1IJO41kwV9AGN9dmDzU8D5Tp2DWvtHtcTrLLg2z73wP3R4huj_3tYDYYIoXdl04haJuJ0aItN5k8m-K349f98YWVVf5RshBLiyTTxwpGAUk6HcLjOvzqsyyG-CpFzcLufhkNA"/>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Aisha Mansur Danbaba</span>
<div className="flex items-center gap-1.5 font-body-sm text-[11px] text-outline">
<span>NIIS/2024/0118</span>
<span>•</span>
<span className="text-secondary font-medium">Female</span>
</div>
</div>
</div>
</td>
<td className="py-3 px-space-md">
<div className="inline-flex p-1 bg-surface-container-low rounded-lg gap-1">
<button className="px-2.5 py-1 rounded-md text-xs font-semibold bg-secondary text-on-secondary shadow-xs" type="button">P</button>
<button className="px-2.5 py-1 rounded-md text-xs font-semibold text-outline hover:text-on-surface" type="button">L</button>
<button className="px-2.5 py-1 rounded-md text-xs font-semibold text-outline hover:text-on-surface" type="button">E</button>
<button className="px-2.5 py-1 rounded-md text-xs font-semibold text-outline hover:text-on-surface" type="button">A</button>
</div>
</td>
<td className="py-3 px-space-md">
<div className="flex items-center gap-1.5 font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px] text-secondary">fingerprint</span>
<span className="font-medium text-on-surface">07:38 AM</span>
<span className="text-outline text-xs">(Main Gate Scanner 1)</span>
</div>
</td>
<td className="py-3 px-space-md">
<span className="font-body-sm text-body-sm text-outline italic">Regular on-time arrival</span>
</td>
<td className="py-3 px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">Alh. Mansur Danbaba</span>
<div className="flex items-center gap-2 mt-0.5">
<span className="font-body-sm text-[11px] text-outline">0803 459 2210</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[10px] font-bold">Present Notif. OK</span>
</div>
</div>
</td>
</tr>
{/*  Row 2: Farouk Umar Sadiq (Unexcused Absent)  */}
<tr className="hover:bg-surface-container-low/40 transition-colors bg-error/5">
<td className="py-3 px-space-md text-center">
<input className="rounded text-primary focus:ring-0 cursor-pointer" type="checkbox"/>
</td>
<td className="py-3 px-space-sm text-center font-label-md text-outline font-semibold">02</td>
<td className="py-3 px-space-md">
<div className="flex items-center gap-space-sm">
<img className="w-10 h-10 rounded-full object-cover shrink-0" data-alt="Portrait photo of a young Nigerian male teenager high school student in a crisp white school collared shirt and navy necktie, clean haircut, looking neutral." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5c_8f9yzTNTGqYsiaaCLoHJiwt0mV5aIIU5BmNvZrsbxPCbnchyG6b5JllwEiN0iYK3DtXuXcounEQ6DHG-5sN_59_-Iy9j9vaEOUOT08vWMZG8h-NsCcK8ofUCtz3kBpHL24htdFXVCCE9caSSA4BcIDZZvW-OPa3nOZPZ-jJGMt3B7gM9L9OojaEFsUE25PvbtVq7RTc0yGnkKgJi2-xBbS0eG0KGVae1eW8V0IwbkxDa_cqp9-tg"/>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Farouk Umar Sadiq</span>
<div className="flex items-center gap-1.5 font-body-sm text-[11px] text-outline">
<span>NIIS/2024/0204</span>
<span>•</span>
<span className="text-primary font-medium">Male</span>
</div>
</div>
</div>
</td>
<td className="py-3 px-space-md">
<div className="inline-flex p-1 bg-surface-container-low rounded-lg gap-1">
<button className="px-2.5 py-1 rounded-md text-xs font-semibold text-outline hover:text-on-surface" type="button">P</button>
<button className="px-2.5 py-1 rounded-md text-xs font-semibold text-outline hover:text-on-surface" type="button">L</button>
<button className="px-2.5 py-1 rounded-md text-xs font-semibold text-outline hover:text-on-surface" type="button">E</button>
<button className="px-2.5 py-1 rounded-md text-xs font-semibold bg-error text-on-error shadow-xs" type="button">A</button>
</div>
</td>
<td className="py-3 px-space-md">
<span className="font-body-sm text-body-sm text-error font-medium flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">cancel</span> No gate entry recorded
              </span>
</td>
<td className="py-3 px-space-md">
<div className="flex items-center gap-1.5">
<span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-[11px] font-bold">Unreported</span>
<button className="text-primary hover:underline font-body-sm text-xs" type="button">Add Note</button>
</div>
</td>
<td className="py-3 px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">Alh. Umar Sadiq</span>
<div className="flex items-center gap-2 mt-0.5">
<span className="font-body-sm text-[11px] text-outline">0802 119 4488</span>
<span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-[10px] font-bold animate-pulse">SMS Queued (08:45)</span>
</div>
</div>
</td>
</tr>
{/*  Row 3: Khadijah Ahmad Rufai (Late Arrival)  */}
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="py-3 px-space-md text-center">
<input defaultChecked className="rounded text-primary focus:ring-0 cursor-pointer" type="checkbox"/>
</td>
<td className="py-3 px-space-sm text-center font-label-md text-outline font-semibold">03</td>
<td className="py-3 px-space-md">
<div className="flex items-center gap-space-sm">
<img className="w-10 h-10 rounded-full object-cover shrink-0" data-alt="Portrait photo of a young female Nigerian student wearing an immaculate school hijab with a green blazer crest, intelligent smile, high school classroom backdrop." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf9jmm3J3d3b-PzKPo_h117mAglzN3H04LIdOftRuwrQXKxrbXvv4ZHyYOIxFKFD_odQUMIv9erQtOiWBRg6aI8zEZ8DmhNaCvY8riITK9lqyLXr7UT-5q4hsMvjlcohQdrGvKUdsdhTUP7wXdt_DFQ1RZ-b2iqDaXvviyGuv7cmDJYhvaRlbQcpRk0aPjB8Gn_LxxvXf1no_PL1qfk9AJM5KDxev4Xn5rTvm7Klf2I4wZq1s9JlhFTQ"/>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Khadijah Ahmad Rufai</span>
<div className="flex items-center gap-1.5 font-body-sm text-[11px] text-outline">
<span>NIIS/2024/0091</span>
<span>•</span>
<span className="text-secondary font-medium">Female</span>
</div>
</div>
</div>
</td>
<td className="py-3 px-space-md">
<div className="inline-flex p-1 bg-surface-container-low rounded-lg gap-1">
<button className="px-2.5 py-1 rounded-md text-xs font-semibold text-outline hover:text-on-surface" type="button">P</button>
<button className="px-2.5 py-1 rounded-md text-xs font-semibold bg-tertiary text-on-tertiary shadow-xs" type="button">L</button>
<button className="px-2.5 py-1 rounded-md text-xs font-semibold text-outline hover:text-on-surface" type="button">E</button>
<button className="px-2.5 py-1 rounded-md text-xs font-semibold text-outline hover:text-on-surface" type="button">A</button>
</div>
</td>
<td className="py-3 px-space-md">
<div className="flex items-center gap-1.5 font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px] text-tertiary-container">history_toggle_off</span>
<span className="font-medium text-tertiary">08:12 AM</span>
<span className="text-tertiary-container font-semibold text-xs">(+27m Late)</span>
</div>
</td>
<td className="py-3 px-space-md">
<span className="font-body-sm text-body-sm text-on-surface-variant bg-surface-container px-2 py-0.5 rounded">Heavy Kawo Bridge Traffic</span>
</td>
<td className="py-3 px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">Hajiya Maryam Rufai</span>
<div className="flex items-center gap-2 mt-0.5">
<span className="font-body-sm text-[11px] text-outline">0814 330 9012</span>
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[10px] font-bold">Late SMS Sent (08:15)</span>
</div>
</div>
</td>
</tr>
{/*  Row 4: Bilal Abdulrahman (Excused / Clinic Bed Rest)  */}
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="py-3 px-space-md text-center">
<input defaultChecked className="rounded text-primary focus:ring-0 cursor-pointer" type="checkbox"/>
</td>
<td className="py-3 px-space-sm text-center font-label-md text-outline font-semibold">04</td>
<td className="py-3 px-space-md">
<div className="flex items-center gap-space-sm">
<img className="w-10 h-10 rounded-full object-cover shrink-0" data-alt="Portrait shot of a Nigerian male student wearing navy school vest over white formal shirt, glasses, calm and studious expression." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUdLFFv3ADuhfuYfk7zbOffGULlf52_dNuheteq70hM2ZeKGRhb7k_yXo4MIvrJVMy6oNwd8fEIACp5hdxtX1V7AyKnrvR3yAzboJVozP09qZ9Ic42t782_K6ZkCiQIJ7hGKZznKHFBdkUp5tY6gDELAZZ1I57efFBtTJ6nQ2zSTVTNu6Ijs_2DfNyjK99DiEF8aibf0QWoy1NHVVULFHYlL0If9g-a2v0VjDmV3VbqHo0cF6u5navvw"/>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Bilal Abdulrahman</span>
<div className="flex items-center gap-1.5 font-body-sm text-[11px] text-outline">
<span>NIIS/2024/0142</span>
<span>•</span>
<span className="text-primary font-medium">Male</span>
</div>
</div>
</div>
</td>
<td className="py-3 px-space-md">
<div className="inline-flex p-1 bg-surface-container-low rounded-lg gap-1">
<button className="px-2.5 py-1 rounded-md text-xs font-semibold text-outline hover:text-on-surface" type="button">P</button>
<button className="px-2.5 py-1 rounded-md text-xs font-semibold text-outline hover:text-on-surface" type="button">L</button>
<button className="px-2.5 py-1 rounded-md text-xs font-semibold bg-primary text-on-primary shadow-xs" type="button">E</button>
<button className="px-2.5 py-1 rounded-md text-xs font-semibold text-outline hover:text-on-surface" type="button">A</button>
</div>
</td>
<td className="py-3 px-space-md">
<div className="flex items-center gap-1.5 font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px] text-primary">local_hospital</span>
<span className="font-medium text-on-surface">07:25 AM</span>
<span className="text-outline text-xs">(Clinic Intake)</span>
</div>
</td>
<td className="py-3 px-space-md">
<div className="flex items-center gap-1">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-[11px] font-semibold">Clinic Bed Rest (Malaria Rx)</span>
</div>
</td>
<td className="py-3 px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">Dr. A. Abdulrahman</span>
<div className="flex items-center gap-2 mt-0.5">
<span className="font-body-sm text-[11px] text-outline">0805 771 9002</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-[10px] font-bold">Clinic Called Parent</span>
</div>
</div>
</td>
</tr>
{/*  Row 5: Zainab Ibrahim Yakubu (Present)  */}
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="py-3 px-space-md text-center">
<input defaultChecked className="rounded text-primary focus:ring-0 cursor-pointer" type="checkbox"/>
</td>
<td className="py-3 px-space-sm text-center font-label-md text-outline font-semibold">05</td>
<td className="py-3 px-space-md">
<div className="flex items-center gap-space-sm">
<img className="w-10 h-10 rounded-full object-cover shrink-0" data-alt="Portrait photo of a female Nigerian teenager wearing dark blue school headscarf with gold pin, respectful posture, bright daylight in Kaduna school compound." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEjnu9NsKfvMyDDGJ6DyfOmn6Ok7trlIz5eGGfoN0jzmZAX6BVIFy_HGr2HCs6y4M3sIejEM_8n9e54Z0Di6C2b7xgdrOtSU4ookOEOGj2DdmK33i4ItO7UvPN43EMcpNprMofgk7fyPqIHYYJYVNFictKL376q2dYoFUWGt8gmG49jco1Su9sQDpHrYt7l0ljr3fywzaVxFYWY4kojSZ9gdx7pXB3RwF86XmhQXkXa_APFBin2wr_hQ"/>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Zainab Ibrahim Yakubu</span>
<div className="flex items-center gap-1.5 font-body-sm text-[11px] text-outline">
<span>NIIS/2024/0055</span>
<span>•</span>
<span className="text-secondary font-medium">Female</span>
</div>
</div>
</div>
</td>
<td className="py-3 px-space-md">
<div className="inline-flex p-1 bg-surface-container-low rounded-lg gap-1">
<button className="px-2.5 py-1 rounded-md text-xs font-semibold bg-secondary text-on-secondary shadow-xs" type="button">P</button>
<button className="px-2.5 py-1 rounded-md text-xs font-semibold text-outline hover:text-on-surface" type="button">L</button>
<button className="px-2.5 py-1 rounded-md text-xs font-semibold text-outline hover:text-on-surface" type="button">E</button>
<button className="px-2.5 py-1 rounded-md text-xs font-semibold text-outline hover:text-on-surface" type="button">A</button>
</div>
</td>
<td className="py-3 px-space-md">
<div className="flex items-center gap-1.5 font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px] text-secondary">fingerprint</span>
<span className="font-medium text-on-surface">07:15 AM</span>
<span className="text-outline text-xs">(Main Gate Scanner 2)</span>
</div>
</td>
<td className="py-3 px-space-md">
<span className="font-body-sm text-body-sm text-outline italic">Regular on-time arrival</span>
</td>
<td className="py-3 px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">Engr. Ibrahim Yakubu</span>
<div className="flex items-center gap-2 mt-0.5">
<span className="font-body-sm text-[11px] text-outline">0803 992 0184</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[10px] font-bold">Present Notif. OK</span>
</div>
</div>
</td>
</tr>
{/*  Row 6: Usman Kabir Mohammed (Present)  */}
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="py-3 px-space-md text-center">
<input defaultChecked className="rounded text-primary focus:ring-0 cursor-pointer" type="checkbox"/>
</td>
<td className="py-3 px-space-sm text-center font-label-md text-outline font-semibold">06</td>
<td className="py-3 px-space-md">
<div className="flex items-center gap-space-sm">
<img className="w-10 h-10 rounded-full object-cover shrink-0" data-alt="Headshot of a confident Nigerian male student in secondary school uniform with navy blazer, professional studio setting, soft neutral lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8oAdr_lfBQz4DAWENnX8xEGOBxdE0R2VngU_Z3lJ0PHJqKJLeV7QoRNlvRMTgHQ08DAGvXWaO3ZQIQL_eC1m3N8XdcUiNnh9KhToymXVtOQsaDZKX6TVDEdiFsDVez9bWEd1dns3h-5ebPH1w0Uu_P-4wWe7zxtsD_O91yZFVUbmzs9tAbTBVZbbTljBMExO2_S16f6VkCd_WlHPN0Vf2az_-YwREUDJx634FXnLhQSuIQlJR95KV4Q"/>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Usman Kabir Mohammed</span>
<div className="flex items-center gap-1.5 font-body-sm text-[11px] text-outline">
<span>NIIS/2024/0312</span>
<span>•</span>
<span className="text-primary font-medium">Male</span>
</div>
</div>
</div>
</td>
<td className="py-3 px-space-md">
<div className="inline-flex p-1 bg-surface-container-low rounded-lg gap-1">
<button className="px-2.5 py-1 rounded-md text-xs font-semibold bg-secondary text-on-secondary shadow-xs" type="button">P</button>
<button className="px-2.5 py-1 rounded-md text-xs font-semibold text-outline hover:text-on-surface" type="button">L</button>
<button className="px-2.5 py-1 rounded-md text-xs font-semibold text-outline hover:text-on-surface" type="button">E</button>
<button className="px-2.5 py-1 rounded-md text-xs font-semibold text-outline hover:text-on-surface" type="button">A</button>
</div>
</td>
<td className="py-3 px-space-md">
<div className="flex items-center gap-1.5 font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px] text-secondary">fingerprint</span>
<span className="font-medium text-on-surface">07:42 AM</span>
<span className="text-outline text-xs">(Hostel Gate Scanner)</span>
</div>
</td>
<td className="py-3 px-space-md">
<span className="font-body-sm text-body-sm text-outline italic">Boarding student roll call</span>
</td>
<td className="py-3 px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">Kabir Mohammed</span>
<div className="flex items-center gap-2 mt-0.5">
<span className="font-body-sm text-[11px] text-outline">0806 312 8700</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[10px] font-bold">Present Notif. OK</span>
</div>
</div>
</td>
</tr>
{/*  Row 7: Fatima Sani Zaria (Present)  */}
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="py-3 px-space-md text-center">
<input defaultChecked className="rounded text-primary focus:ring-0 cursor-pointer" type="checkbox"/>
</td>
<td className="py-3 px-space-sm text-center font-label-md text-outline font-semibold">07</td>
<td className="py-3 px-space-md">
<div className="flex items-center gap-space-sm">
<img className="w-10 h-10 rounded-full object-cover shrink-0" data-alt="Portrait photo of a young female Nigerian student wearing navy uniform and neatly styled hijab, smiling warmly in academic library." src="https://lh3.googleusercontent.com/aida-public/AB6AXuARnGBcc6Lrtw4yzQN7szCaLTHI7-g_7m1bsT5D-KxcCTrSDgAH4C0IS38TAL_5uiQXhndB-bsRbHadLqX4m7MsQOAMquHVehKKR2u0hFLSjbQZX0Z4-IQctc-jV_GZk_-QXM8h5FMj_Mmh7mHhtyefe794kimEU45MMm8KyisTbCLyo5t85hFplj8GuJO42kCKpNikjcUthBQiVsXSrgI2RmwPoUh7FYqVol-YGzDjR6GJwmsNmwxs-Q"/>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Fatima Sani Zaria</span>
<div className="flex items-center gap-1.5 font-body-sm text-[11px] text-outline">
<span>NIIS/2024/0177</span>
<span>•</span>
<span className="text-secondary font-medium">Female</span>
</div>
</div>
</div>
</td>
<td className="py-3 px-space-md">
<div className="inline-flex p-1 bg-surface-container-low rounded-lg gap-1">
<button className="px-2.5 py-1 rounded-md text-xs font-semibold bg-secondary text-on-secondary shadow-xs" type="button">P</button>
<button className="px-2.5 py-1 rounded-md text-xs font-semibold text-outline hover:text-on-surface" type="button">L</button>
<button className="px-2.5 py-1 rounded-md text-xs font-semibold text-outline hover:text-on-surface" type="button">E</button>
<button className="px-2.5 py-1 rounded-md text-xs font-semibold text-outline hover:text-on-surface" type="button">A</button>
</div>
</td>
<td className="py-3 px-space-md">
<div className="flex items-center gap-1.5 font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px] text-secondary">fingerprint</span>
<span className="font-medium text-on-surface">07:22 AM</span>
<span className="text-outline text-xs">(Main Gate Scanner 1)</span>
</div>
</td>
<td className="py-3 px-space-md">
<span className="font-body-sm text-body-sm text-outline italic">Regular on-time arrival</span>
</td>
<td className="py-3 px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">Mallam Sani Zaria</span>
<div className="flex items-center gap-2 mt-0.5">
<span className="font-body-sm text-[11px] text-outline">0802 884 1056</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[10px] font-bold">Present Notif. OK</span>
</div>
</div>
</td>
</tr>
{/*  Row 8: Emmanuel Chukwuma (Present)  */}
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="py-3 px-space-md text-center">
<input defaultChecked className="rounded text-primary focus:ring-0 cursor-pointer" type="checkbox"/>
</td>
<td className="py-3 px-space-sm text-center font-label-md text-outline font-semibold">08</td>
<td className="py-3 px-space-md">
<div className="flex items-center gap-space-sm">
<img className="w-10 h-10 rounded-full object-cover shrink-0" data-alt="Portrait photo of a young Nigerian Christian secondary school boy wearing smart navy blazer and striped tie, bright expressive eyes, classroom lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuANO1teoyB6hgRf-VF8llO2C4V8CeTBrTdAhS_d0Xzp_FvCgfo-frzASMv6xFT6wp9FoRl9Kfr28cmS0gsUyKLCT1QvgBHCYMFpLJll67cPcVTpIiCxqyOqQpOHNWmKQivIHmOWBJbWbYmiptMaAJNqEOhV5qJBvOwuovH_bAZiQXpofvcGtkrHIkbRaWmlqNjs3XwmtNlWFldLhG31vKnEobYlm0Fsper3Ys6u3yISREcCwxJdzYNMfQ"/>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Emmanuel Chukwuma</span>
<div className="flex items-center gap-1.5 font-body-sm text-[11px] text-outline">
<span>NIIS/2024/0088</span>
<span>•</span>
<span className="text-primary font-medium">Male</span>
</div>
</div>
</div>
</td>
<td className="py-3 px-space-md">
<div className="inline-flex p-1 bg-surface-container-low rounded-lg gap-1">
<button className="px-2.5 py-1 rounded-md text-xs font-semibold bg-secondary text-on-secondary shadow-xs" type="button">P</button>
<button className="px-2.5 py-1 rounded-md text-xs font-semibold text-outline hover:text-on-surface" type="button">L</button>
<button className="px-2.5 py-1 rounded-md text-xs font-semibold text-outline hover:text-on-surface" type="button">E</button>
<button className="px-2.5 py-1 rounded-md text-xs font-semibold text-outline hover:text-on-surface" type="button">A</button>
</div>
</td>
<td className="py-3 px-space-md">
<div className="flex items-center gap-1.5 font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px] text-secondary">fingerprint</span>
<span className="font-medium text-on-surface">07:31 AM</span>
<span className="text-outline text-xs">(Main Gate Scanner 2)</span>
</div>
</td>
<td className="py-3 px-space-md">
<span className="font-body-sm text-body-sm text-outline italic">Regular on-time arrival</span>
</td>
<td className="py-3 px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">Chief Paul Chukwuma</span>
<div className="flex items-center gap-2 mt-0.5">
<span className="font-body-sm text-[11px] text-outline">0803 762 9940</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[10px] font-bold">Present Notif. OK</span>
</div>
</div>
</td>
</tr>
{/*  Row 9: Ibrahim Kabir Danbatta (Present)  */}
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="py-3 px-space-md text-center">
<input defaultChecked className="rounded text-primary focus:ring-0 cursor-pointer" type="checkbox"/>
</td>
<td className="py-3 px-space-sm text-center font-label-md text-outline font-semibold">09</td>
<td className="py-3 px-space-md">
<div className="flex items-center gap-space-sm">
<img className="w-10 h-10 rounded-full object-cover shrink-0" data-alt="Portrait photo of a teenage Nigerian male secondary school student in school uniform, serious and focused expression, indoor school hallway." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjtf7NkPbRmbCPpp95x049Bb9kSZhitUp55SB5amyfc_SnRFDKFFSEG_j8J9ydyPZgort7WHPUHpp2aC91UkMWVbvvzb7wbVzuE7dnis665RQaTQ5j4zE2RXDujlgNw3w8RM1rUnMBGrFHOn-h1BARloI5n-Alhk0GyWr8Dn0oNwEcaFX7qGseO_6wnBwpHTjff18KsOQ3G81ZZrtVyQvcgduMPUjsGI3hyvKp8qwQmlw2E_0ejQjS-A"/>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Ibrahim Kabir Danbatta</span>
<div className="flex items-center gap-1.5 font-body-sm text-[11px] text-outline">
<span>NIIS/2024/0225</span>
<span>•</span>
<span className="text-primary font-medium">Male</span>
</div>
</div>
</div>
</td>
<td className="py-3 px-space-md">
<div className="inline-flex p-1 bg-surface-container-low rounded-lg gap-1">
<button className="px-2.5 py-1 rounded-md text-xs font-semibold bg-secondary text-on-secondary shadow-xs" type="button">P</button>
<button className="px-2.5 py-1 rounded-md text-xs font-semibold text-outline hover:text-on-surface" type="button">L</button>
<button className="px-2.5 py-1 rounded-md text-xs font-semibold text-outline hover:text-on-surface" type="button">E</button>
<button className="px-2.5 py-1 rounded-md text-xs font-semibold text-outline hover:text-on-surface" type="button">A</button>
</div>
</td>
<td className="py-3 px-space-md">
<div className="flex items-center gap-1.5 font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px] text-secondary">fingerprint</span>
<span className="font-medium text-on-surface">07:44 AM</span>
<span className="text-outline text-xs">(Main Gate Scanner 1)</span>
</div>
</td>
<td className="py-3 px-space-md">
<span className="font-body-sm text-body-sm text-outline italic">Regular on-time arrival</span>
</td>
<td className="py-3 px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">Alh. Kabir Danbatta</span>
<div className="flex items-center gap-2 mt-0.5">
<span className="font-body-sm text-[11px] text-outline">0809 542 3311</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[10px] font-bold">Present Notif. OK</span>
</div>
</div>
</td>
</tr>
{/*  Row 10: Maryam Bello Gusau (Present)  */}
<tr className="hover:bg-surface-container-low/40 transition-colors">
<td className="py-3 px-space-md text-center">
<input defaultChecked className="rounded text-primary focus:ring-0 cursor-pointer" type="checkbox"/>
</td>
<td className="py-3 px-space-sm text-center font-label-md text-outline font-semibold">10</td>
<td className="py-3 px-space-md">
<div className="flex items-center gap-space-sm">
<img className="w-10 h-10 rounded-full object-cover shrink-0" data-alt="Portrait photo of a young female Nigerian student with deep navy school hijab and golden pin, bright cheerful expression, sunlit classroom window." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZtcoqCWgweM9WJoA56buS8jeeNJfn1N4u6ZHQ53xo-5PPUzgcrKx0SRKEyXv-oawerT-5ak7lHrSgRsjabiToMDHGe1pcb-SIND9-0hgi47uF1F8Z77CTKthT-f6t17qvLnT0EeO5Sapa8Y8qa-mBtoLaBbFNre134A5Xnrwu4AhXgKKeJQI7sqU7cieXOfZw0GiltHTiA7keSgzAihPko078lstiRFplAyVpWCydkQhTwYim7tgPyg"/>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Maryam Bello Gusau</span>
<div className="flex items-center gap-1.5 font-body-sm text-[11px] text-outline">
<span>NIIS/2024/0074</span>
<span>•</span>
<span className="text-secondary font-medium">Female</span>
</div>
</div>
</div>
</td>
<td className="py-3 px-space-md">
<div className="inline-flex p-1 bg-surface-container-low rounded-lg gap-1">
<button className="px-2.5 py-1 rounded-md text-xs font-semibold bg-secondary text-on-secondary shadow-xs" type="button">P</button>
<button className="px-2.5 py-1 rounded-md text-xs font-semibold text-outline hover:text-on-surface" type="button">L</button>
<button className="px-2.5 py-1 rounded-md text-xs font-semibold text-outline hover:text-on-surface" type="button">E</button>
<button className="px-2.5 py-1 rounded-md text-xs font-semibold text-outline hover:text-on-surface" type="button">A</button>
</div>
</td>
<td className="py-3 px-space-md">
<div className="flex items-center gap-1.5 font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px] text-secondary">fingerprint</span>
<span className="font-medium text-on-surface">07:29 AM</span>
<span className="text-outline text-xs">(Main Gate Scanner 2)</span>
</div>
</td>
<td className="py-3 px-space-md">
<span className="font-body-sm text-body-sm text-outline italic">Regular on-time arrival</span>
</td>
<td className="py-3 px-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">Hajiya Amina Gusau</span>
<div className="flex items-center gap-2 mt-0.5">
<span className="font-body-sm text-[11px] text-outline">0803 219 7780</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[10px] font-bold">Present Notif. OK</span>
</div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Table Pagination / Status Summary Bar  */}
<div className="flex flex-col sm:flex-row items-center justify-between p-space-md bg-surface-container-low/40 gap-space-sm text-on-surface-variant font-body-sm text-body-sm">
<div className="flex items-center gap-2">
<span className="font-medium text-on-surface">Showing 10 of 38 enrolled learners</span>
<span className="text-outline">•</span>
<span>28 remaining records auto-verified as Present</span>
</div>
<div className="flex items-center gap-1">
<button className="px-3 py-1 rounded-lg bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-xs font-semibold hover:bg-surface-container transition-colors" type="button">
          Previous
        </button>
<span className="px-3 py-1 font-label-sm text-label-sm bg-primary text-on-primary rounded-lg font-bold">1</span>
<button className="px-3 py-1 font-label-sm text-label-sm rounded-lg hover:bg-surface-container transition-colors" type="button">2</button>
<button className="px-3 py-1 font-label-sm text-label-sm rounded-lg hover:bg-surface-container transition-colors" type="button">3</button>
<button className="px-3 py-1 font-label-sm text-label-sm rounded-lg hover:bg-surface-container transition-colors" type="button">4</button>
<button className="px-3 py-1 rounded-lg bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-xs font-semibold hover:bg-surface-container transition-colors" type="button">
          Next
        </button>
</div>
</div>
</div>
{/*  Bottom Summary / Quick Insights Widget (3-Column Footer Grid)  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md mb-space-md">
{/*  Column 1: Today's Class Rate  */}
<div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-2">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">SSS 2 Science Arm A Turnout</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-bold">92.1%</span>
</div>
<div className="flex items-baseline gap-2">
<span className="font-headline-md text-headline-md text-on-surface font-bold">35 / 38 Present</span>
<span className="font-body-sm text-body-sm text-outline">(3 absent or late)</span>
</div>
{/*  Inline Visual Breakdown Progress Ring & Stacked Bar  */}
<div className="w-full bg-surface-container-high rounded-full h-2.5 overflow-hidden flex mt-3">
<div className="bg-secondary h-full" style={{ width: "92.1%" }} title="Present (35)"></div>
<div className="bg-tertiary-container h-full" style={{ width: "2.6%" }} title="Late (1)"></div>
<div className="bg-primary h-full" style={{ width: "2.6%" }} title="Excused (1)"></div>
<div className="bg-error h-full" style={{ width: "2.6%" }} title="Absent (1)"></div>
</div>
<div className="grid grid-cols-4 gap-1 mt-3 text-center">
<div className="p-1 rounded bg-secondary/10">
<span className="font-label-sm text-[10px] text-secondary font-bold block">35</span>
<span className="text-[10px] text-outline">Present</span>
</div>
<div className="p-1 rounded bg-tertiary-container/10">
<span className="font-label-sm text-[10px] text-tertiary font-bold block">1</span>
<span className="text-[10px] text-outline">Late</span>
</div>
<div className="p-1 rounded bg-primary/10">
<span className="font-label-sm text-[10px] text-primary font-bold block">1</span>
<span className="text-[10px] text-outline">Excused</span>
</div>
<div className="p-1 rounded bg-error/10">
<span className="font-label-sm text-[10px] text-error font-bold block">1</span>
<span className="text-[10px] text-outline">Absent</span>
</div>
</div>
</div>
<div className="mt-4 pt-2 flex items-center justify-between text-outline font-body-sm text-xs">
<span>Verified by Mal. Garba Usman</span>
<span className="text-secondary font-semibold">Ready to Lock</span>
</div>
</div>
{/*  Column 2: Kaduna MoE Sync Status  */}
<div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-2">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Kaduna MoE Sync Status</span>
<span className="flex items-center gap-1 font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-bold">
<span className="material-symbols-outlined text-[14px]">cloud_done</span> Connected
          </span>
</div>
<div className="flex items-center gap-space-sm mt-1">
<div className="p-2.5 rounded-xl bg-surface-container-low text-primary shrink-0">
<span className="material-symbols-outlined text-[24px]">verified_user</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg font-bold text-on-surface">KD-EMIS Statutory Broad-sheet</span>
<span className="font-body-sm text-body-sm text-outline truncate">Registry Token: #KD-NIIS-2026-T1-W06</span>
</div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-3">
          Checksum authenticated by Kaduna State Ministry of Education Quality Assurance Board at <strong className="text-on-surface">08:30 AM GMT+1</strong>.
        </p>
</div>
<div className="mt-4 pt-2 flex items-center justify-between font-body-sm text-xs">
<span className="text-outline">Sync Latency: <strong className="text-on-surface font-medium">142ms</strong></span>
<button className="text-primary hover:underline font-semibold flex items-center gap-0.5" type="button">
<span>Audit Log</span>
<span className="material-symbols-outlined text-[14px]">open_in_new</span>
</button>
</div>
</div>
{/*  Column 3: Parent Notification Center  */}
<div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-2">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Parent Notification Center</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-bold">Active Gateway</span>
</div>
<div className="flex items-center gap-space-sm mt-1">
<div className="p-2.5 rounded-xl bg-surface-container-low text-secondary shrink-0">
<span className="material-symbols-outlined text-[24px]">sms</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg font-bold text-on-surface">1 SMS Dispatched for Arm</span>
<span className="font-body-sm text-body-sm text-outline truncate">Target: Alh. Umar Sadiq (Farouk's Guardian)</span>
</div>
</div>
<div className="p-2.5 rounded-lg bg-surface-container-low mt-3 font-body-sm text-xs text-on-surface-variant">
          "NIIS Notice: Farouk was not recorded in morning roll call today (16/10). Please contact Class Teacher or Clinic immediately."
        </div>
</div>
<div className="mt-4 pt-2 flex items-center justify-between font-body-sm text-xs">
<span className="text-secondary font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">chat</span> WhatsApp Fallback On
        </span>
<button className="text-primary font-semibold hover:underline" type="button">
          View Delivery Receipt
        </button>
</div>
</div>
</div>
</div>
</main>
  );
}
    