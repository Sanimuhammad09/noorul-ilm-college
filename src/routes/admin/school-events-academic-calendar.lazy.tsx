
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/admin/school-events-academic-calendar')({
  component: SchoolEventsAcademicCalendar,
});

function SchoolEventsAcademicCalendar() {
  return (
    <main className="w-full pt-16 px-space-lg py-space-lg flex-1 bg-surface"><div className="flex flex-col w-full">
{/*  Sub-Header / Page Intent Banner  */}
<div className="mb-space-lg flex flex-col xl:flex-row xl:items-center justify-between gap-space-md">
<div className="space-y-1">
<div className="flex flex-wrap items-center gap-space-sm">
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
          School Events, Academic Calendar &amp; Term Milestones
        </h1>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm shadow-sm">
<span className="material-symbols-outlined text-[14px]">verified</span>
          Kaduna MoE Harmonized Calendar 2026/2027
        </span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-4xl">
        Centralized scheduling of academic terms, examination cycles, public holidays, inter-house sports, PTA general meetings, and Mawlid/Islamic celebrations.
      </p>
</div>
{/*  Top Action Bar  */}
<div className="flex flex-wrap items-center gap-space-sm shrink-0">
<button className="inline-flex items-center gap-2 px-space-md py-2 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm hover:bg-surface-container transition-all">
<span className="material-symbols-outlined text-[18px] text-primary">sync</span>
<span>Sync MoE Calendar</span>
</button>
<div className="relative inline-block text-left" id="exportDropdown">
<button className="inline-flex items-center gap-2 px-space-md py-2 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm hover:bg-surface-container transition-all" onClick={() => {}}>
<span className="material-symbols-outlined text-[18px] text-tertiary-container">file_download</span>
<span>Export (.ics / .pdf)</span>
<span className="material-symbols-outlined text-[16px] text-outline">arrow_drop_down</span>
</button>
<div className="hidden absolute right-0 mt-2 w-48 rounded-xl bg-surface-container-lowest shadow-xl z-30 p-1.5 space-y-1" id="exportMenu">
<button className="w-full text-left px-3 py-2 text-on-surface hover:bg-surface-container rounded-lg font-label-sm text-label-sm flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary">event</span> iCalendar (.ics feed)
          </button>
<button className="w-full text-left px-3 py-2 text-on-surface hover:bg-surface-container rounded-lg font-label-sm text-label-sm flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-error">picture_as_pdf</span> Term Wallchart (PDF)
          </button>
<button className="w-full text-left px-3 py-2 text-on-surface hover:bg-surface-container rounded-lg font-label-sm text-label-sm flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-secondary">table_view</span> MoE Compliance Sheet
          </button>
</div>
</div>
<button className="inline-flex items-center gap-2 px-space-md py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-sm hover:bg-primary-container transition-all">
<span className="material-symbols-outlined text-[18px]">add_circle</span>
<span>Add New Event</span>
</button>
</div>
</div>
{/*  KPI / Metric Highlights (4 Cards)  */}
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md mb-space-lg">
{/*  Card 1  */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between relative overflow-hidden">
<div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-primary/5 pointer-events-none"></div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Current Academic Term</span>
<span className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[18px]">school</span>
</span>
</div>
<div>
<div className="flex items-baseline gap-2">
<span className="font-metric-lg text-metric-lg text-on-surface font-bold">Term 1</span>
<span className="font-label-sm text-label-sm text-outline">of 3 Terms</span>
</div>
<div className="mt-2 text-on-surface-variant font-body-sm text-body-sm flex items-center justify-between">
<span>Week 6 of 14 Elapsed</span>
<span className="font-semibold text-primary">78 Days Left</span>
</div>
<div className="w-full bg-surface-container-high rounded-full h-1.5 mt-2 overflow-hidden">
<div className="bg-primary h-1.5 rounded-full w-[43%]"></div>
</div>
</div>
</div>
{/*  Card 2  */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between relative overflow-hidden">
<div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-secondary/5 pointer-events-none"></div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Upcoming Major Milestones</span>
<span className="w-8 h-8 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[18px]">flag</span>
</span>
</div>
<div>
<div className="flex items-baseline gap-2">
<span className="font-metric-lg text-metric-lg text-on-surface font-bold">5 Events</span>
<span className="font-label-sm text-label-sm text-secondary font-semibold">Next 30 Days</span>
</div>
<p className="mt-2 font-body-sm text-body-sm text-on-surface-variant truncate">
          Mid-Term Assessment starts in <span className="text-tertiary-container font-semibold">14 days</span>
</p>
<div className="flex items-center gap-1 mt-2 text-on-surface-variant font-label-sm text-[11px]">
<span className="material-symbols-outlined text-[14px] text-secondary">check_circle</span>
<span>Syllabus pacing at 91% parity</span>
</div>
</div>
</div>
{/*  Card 3  */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between relative overflow-hidden">
<div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-error/5 pointer-events-none"></div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Public &amp; State Holidays</span>
<span className="w-8 h-8 rounded-lg bg-error-container flex items-center justify-center text-on-error-container">
<span className="material-symbols-outlined text-[18px]">celebration</span>
</span>
</div>
<div>
<div className="flex items-baseline gap-2">
<span className="font-metric-lg text-metric-lg text-on-surface font-bold">4 Holidays</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Scheduled</span>
</div>
<p className="mt-2 font-body-sm text-body-sm text-on-surface-variant truncate">
          Observed: <span className="font-medium text-on-surface">Independence Day (1st Oct)</span>
</p>
<div className="mt-2 flex items-center gap-1 font-label-sm text-[11px] text-outline">
<span>Next: Mawlid Nabiyy &amp; Kaduna Break</span>
</div>
</div>
</div>
{/*  Card 4  */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col justify-between relative overflow-hidden">
<div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-tertiary/5 pointer-events-none"></div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">PTA &amp; Stakeholder Engagements</span>
<span className="w-8 h-8 rounded-lg bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed-variant">
<span className="material-symbols-outlined text-[18px]">groups</span>
</span>
</div>
<div>
<div className="flex items-baseline gap-2">
<span className="font-metric-lg text-metric-lg text-on-surface font-bold">2 Sessions</span>
<span className="font-label-sm text-label-sm text-tertiary-container font-semibold">Term 1 Agenda</span>
</div>
<p className="mt-2 font-body-sm text-body-sm text-on-surface-variant truncate">
          General Assembly &amp; SSS 3 WAEC Consultation
        </p>
<div className="mt-2 flex items-center gap-1.5 text-on-secondary-container font-label-sm text-[11px]">
<span className="inline-block w-2 h-2 rounded-full bg-secondary"></span>
<span>482 Parent RSVPs Recorded</span>
</div>
</div>
</div>
</div>
{/*  Category Filter Pill Bar  */}
<div className="bg-surface-container-lowest rounded-xl p-2.5 mb-space-lg shadow-sm flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex flex-wrap items-center gap-1.5" id="categoryFilterContainer">
<span className="font-label-sm text-label-sm text-outline px-2 uppercase font-semibold">Filter:</span>
<button className="px-3 py-1.5 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm shadow-sm transition-colors">
        All Categories (14)
      </button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-variant text-on-surface font-label-sm text-label-sm transition-colors flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-primary-container"></span> Academic (5)
      </button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-variant text-on-surface font-label-sm text-label-sm transition-colors flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-tertiary-container"></span> Examinations (3)
      </button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-variant text-on-surface font-label-sm text-label-sm transition-colors flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-error"></span> National Holidays (2)
      </button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-variant text-on-surface font-label-sm text-label-sm transition-colors flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-secondary"></span> Sports &amp; Houses (2)
      </button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-variant text-on-surface font-label-sm text-label-sm transition-colors flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-surface-tint"></span> Islamic Events (2)
      </button>
</div>
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-on-surface-variant">View Density:</span>
<div className="inline-flex rounded-lg bg-surface-container p-0.5">
<button className="px-2.5 py-1 text-on-surface font-label-sm text-label-sm rounded-md bg-surface-container-lowest shadow-sm">Detailed</button>
<button className="px-2.5 py-1 text-outline hover:text-on-surface font-label-sm text-label-sm rounded-md transition-colors">Compact</button>
</div>
</div>
</div>
{/*  Main Grid Workspace: Calendar on Left (8 Cols) vs Side Panel on Right (4 Cols)  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
{/*  LEFT: Calendar System (lg:col-span-8)  */}
<div className="lg:col-span-8 flex flex-col gap-space-md">
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
{/*  Calendar Action Strip & Month Switcher  */}
<div className="p-space-md flex flex-wrap items-center justify-between gap-space-sm bg-surface-container-low">
<div className="flex items-center gap-space-sm">
<div className="flex items-center rounded-lg bg-surface-container-lowest shadow-sm p-0.5">
<button className="p-1.5 hover:bg-surface-container rounded-md text-on-surface transition-colors" title="Previous Month">
<span className="material-symbols-outlined text-[20px]">chevron_left</span>
</button>
<button className="px-3 py-1 font-label-sm text-label-sm text-on-surface font-semibold hover:bg-surface-container rounded-md">
                Today
              </button>
<button className="p-1.5 hover:bg-surface-container rounded-md text-on-surface transition-colors" title="Next Month">
<span className="material-symbols-outlined text-[20px]">chevron_right</span>
</button>
</div>
<div>
<div className="flex items-center gap-2">
<h2 className="font-headline-md text-headline-md text-primary font-bold">October 2026</h2>
<span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-[11px]">1st Term • Week 6</span>
</div>
<span className="font-body-sm text-[12px] text-outline">Kaduna Campus Master Timetable • Rabīʿ al-Thānī 1448 AH</span>
</div>
</div>
{/*  View Switcher  */}
<div className="inline-flex rounded-lg bg-surface-container p-1 shadow-inner">
<button className="px-3 py-1 rounded-md bg-surface-container-lowest text-primary font-label-sm text-label-sm font-semibold shadow-sm">
              Month
            </button>
<button className="px-3 py-1 rounded-md text-outline hover:text-on-surface font-label-sm text-label-sm transition-colors">
              Week
            </button>
<button className="px-3 py-1 rounded-md text-outline hover:text-on-surface font-label-sm text-label-sm transition-colors">
              Day
            </button>
<button className="px-3 py-1 rounded-md text-outline hover:text-on-surface font-label-sm text-label-sm transition-colors">
              Agenda List
            </button>
</div>
</div>
{/*  Days of Week Header Grid  */}
<div className="grid grid-cols-7 bg-surface-container-high text-center font-label-sm text-label-sm font-semibold text-on-surface-variant py-2">
<span>SUN</span>
<span>MON</span>
<span>TUE</span>
<span>WED</span>
<span>THU</span>
<span>FRI</span>
<span>SAT</span>
</div>
{/*  35-Cell Month Grid (October 2026: Starts on Thursday Oct 1st)  */}
<div className="grid grid-cols-7 gap-px bg-surface-container-high min-h-[640px]">
{/*  Prev Month Padding: Sun Sep 27 to Wed Sep 30  */}
<div className="bg-surface-container-lowest/60 p-2 min-h-[105px] flex flex-col justify-between opacity-40">
<span className="font-label-sm text-label-sm text-outline">27</span>
</div>
<div className="bg-surface-container-lowest/60 p-2 min-h-[105px] flex flex-col justify-between opacity-40">
<span className="font-label-sm text-label-sm text-outline">28</span>
</div>
<div className="bg-surface-container-lowest/60 p-2 min-h-[105px] flex flex-col justify-between opacity-40">
<span className="font-label-sm text-label-sm text-outline">29</span>
</div>
<div className="bg-surface-container-lowest/60 p-2 min-h-[105px] flex flex-col justify-between opacity-40">
<span className="font-label-sm text-label-sm text-outline">30</span>
</div>
{/*  1st Oct: Nigeria Independence Day  */}
<div className="bg-surface-container-lowest p-2 min-h-[105px] flex flex-col justify-between group hover:bg-surface transition-colors">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-on-surface">1</span>
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
</div>
<div className="mt-1 space-y-1">
<div className="p-1 rounded bg-error-container text-on-error-container text-[11px] font-label-sm leading-tight truncate font-semibold" title="Nigeria Independence Day (National Holiday)">
                🇳🇬 Independence Day
              </div>
<span className="text-[10px] text-outline block">School Closed</span>
</div>
</div>
{/*  2nd Oct  */}
<div className="bg-surface-container-lowest p-2 min-h-[105px] flex flex-col justify-between group hover:bg-surface transition-colors">
<span className="font-label-md text-label-md text-on-surface">2</span>
<div className="text-[10px] text-outline">Normal Classes</div>
</div>
{/*  3rd Oct  */}
<div className="bg-surface-container-low/50 p-2 min-h-[105px] flex flex-col justify-between group hover:bg-surface transition-colors">
<span className="font-label-md text-label-md text-outline">3</span>
<div className="text-[10px] text-outline">Weekend Prep</div>
</div>
{/*  4th Oct  */}
<div className="bg-surface-container-low/50 p-2 min-h-[105px] flex flex-col justify-between group hover:bg-surface transition-colors">
<span className="font-label-md text-label-md text-outline">4</span>
</div>
{/*  5th Oct: Teachers' Day Recognition  */}
<div className="bg-surface-container-lowest p-2 min-h-[105px] flex flex-col justify-between group hover:bg-surface transition-colors">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-on-surface">5</span>
<span className="material-symbols-outlined text-[14px] text-surface-tint">star</span>
</div>
<div className="mt-1 space-y-1">
<div className="p-1 rounded bg-surface-container-highest text-on-surface text-[11px] font-label-sm leading-tight truncate font-semibold">
                🎓 World Teachers' Day
              </div>
<span className="text-[10px] text-surface-tint font-medium">Staff Colloquium</span>
</div>
</div>
{/*  6th Oct  */}
<div className="bg-surface-container-lowest p-2 min-h-[105px] flex flex-col justify-between group hover:bg-surface transition-colors">
<span className="font-label-md text-label-md text-on-surface">6</span>
</div>
{/*  7th Oct  */}
<div className="bg-surface-container-lowest p-2 min-h-[105px] flex flex-col justify-between group hover:bg-surface transition-colors">
<span className="font-label-md text-label-md text-on-surface">7</span>
</div>
{/*  8th Oct  */}
<div className="bg-surface-container-lowest p-2 min-h-[105px] flex flex-col justify-between group hover:bg-surface transition-colors">
<span className="font-label-md text-label-md text-on-surface">8</span>
</div>
{/*  9th Oct  */}
<div className="bg-surface-container-lowest p-2 min-h-[105px] flex flex-col justify-between group hover:bg-surface transition-colors">
<span className="font-label-md text-label-md text-on-surface">9</span>
<div className="text-[10px] text-secondary font-medium">Jum'ah Assembly</div>
</div>
{/*  10th Oct  */}
<div className="bg-surface-container-low/50 p-2 min-h-[105px] flex flex-col justify-between group hover:bg-surface transition-colors">
<span className="font-label-md text-label-md text-outline">10</span>
</div>
{/*  11th Oct  */}
<div className="bg-surface-container-low/50 p-2 min-h-[105px] flex flex-col justify-between group hover:bg-surface transition-colors">
<span className="font-label-md text-label-md text-outline">11</span>
</div>
{/*  12th Oct: CA Test 1 & 2 Scores Submission  */}
<div className="bg-surface-container-lowest p-2 min-h-[105px] flex flex-col justify-between group hover:bg-surface transition-colors">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-on-surface">12</span>
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
</div>
<div className="mt-1 space-y-1">
<div className="p-1 rounded bg-primary-fixed text-on-primary-fixed text-[11px] font-label-sm leading-tight truncate font-semibold">
                📝 Deadline: CA 1 &amp; 2
              </div>
<span className="text-[10px] text-primary font-medium">Portal Lock at 17:00</span>
</div>
</div>
{/*  13th Oct  */}
<div className="bg-surface-container-lowest p-2 min-h-[105px] flex flex-col justify-between group hover:bg-surface transition-colors">
<span className="font-label-md text-label-md text-on-surface">13</span>
</div>
{/*  14th Oct  */}
<div className="bg-surface-container-lowest p-2 min-h-[105px] flex flex-col justify-between group hover:bg-surface transition-colors">
<span className="font-label-md text-label-md text-on-surface">14</span>
<div className="text-[10px] text-outline truncate">HOD Review Meet</div>
</div>
{/*  15th Oct  */}
<div className="bg-surface-container-lowest p-2 min-h-[105px] flex flex-col justify-between group hover:bg-surface transition-colors">
<span className="font-label-md text-label-md text-on-surface">15</span>
</div>
{/*  16th Oct: TODAY HIGHLIGHTED  */}
<div className="bg-primary/5 p-2 min-h-[105px] flex flex-col justify-between relative shadow-inner">
<div className="flex items-center justify-between">
<span className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm font-bold shadow-sm">
                16
              </span>
<span className="px-1.5 py-0.5 rounded bg-primary text-on-primary font-label-sm text-[9px] uppercase tracking-wide">
                Today
              </span>
</div>
<div className="mt-1 space-y-1">
<div className="p-1 rounded bg-secondary-fixed text-on-secondary-fixed text-[11px] font-label-sm leading-tight truncate font-semibold">
                🔍 CA Moderation
              </div>
<span className="text-[10px] text-on-surface font-medium block">MoE Inspection Team</span>
</div>
</div>
{/*  17th Oct  */}
<div className="bg-surface-container-low/50 p-2 min-h-[105px] flex flex-col justify-between group hover:bg-surface transition-colors">
<span className="font-label-md text-label-md text-outline">17</span>
<div className="text-[10px] text-outline">Club Activities</div>
</div>
{/*  18th Oct  */}
<div className="bg-surface-container-low/50 p-2 min-h-[105px] flex flex-col justify-between group hover:bg-surface transition-colors">
<span className="font-label-md text-label-md text-outline">18</span>
</div>
{/*  19th Oct  */}
<div className="bg-surface-container-lowest p-2 min-h-[105px] flex flex-col justify-between group hover:bg-surface transition-colors">
<span className="font-label-md text-label-md text-on-surface">19</span>
<div className="text-[10px] text-outline">Exam Halls Setup</div>
</div>
{/*  20th Oct: Mid-Term Examination Kick-off  */}
<div className="bg-surface-container-lowest p-2 min-h-[105px] flex flex-col justify-between group hover:bg-surface transition-colors">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-on-surface">20</span>
<span className="w-1.5 h-1.5 rounded-full bg-tertiary-container"></span>
</div>
<div className="mt-1 space-y-1">
<div className="p-1 rounded bg-tertiary-fixed text-on-tertiary-fixed-variant text-[11px] font-label-sm leading-tight truncate font-semibold">
                ✍️ Mid-Term Exams
              </div>
<span className="text-[10px] text-tertiary-container font-medium block">All Arms (JSS1-SSS3)</span>
</div>
</div>
{/*  21st Oct  */}
<div className="bg-surface-container-lowest p-2 min-h-[105px] flex flex-col justify-between group hover:bg-surface transition-colors">
<span className="font-label-md text-label-md text-on-surface">21</span>
<div className="text-[10px] text-on-surface-variant font-medium">Exams Day 2</div>
</div>
{/*  22nd Oct  */}
<div className="bg-surface-container-lowest p-2 min-h-[105px] flex flex-col justify-between group hover:bg-surface transition-colors">
<span className="font-label-md text-label-md text-on-surface">22</span>
<div className="text-[10px] text-on-surface-variant font-medium">Exams Day 3</div>
</div>
{/*  23rd Oct  */}
<div className="bg-surface-container-lowest p-2 min-h-[105px] flex flex-col justify-between group hover:bg-surface transition-colors">
<span className="font-label-md text-label-md text-on-surface">23</span>
<div className="text-[10px] text-on-surface-variant font-medium">Exams Conclude</div>
</div>
{/*  24th Oct: 1st Term PTA General Consultative Meeting  */}
<div className="bg-surface-container-lowest p-2 min-h-[105px] flex flex-col justify-between group hover:bg-surface transition-colors">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-on-surface">24</span>
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
</div>
<div className="mt-1 space-y-1">
<div className="p-1 rounded bg-secondary-fixed text-on-secondary-fixed text-[11px] font-label-sm leading-tight truncate font-semibold">
                👥 PTA General Assembly
              </div>
<span className="text-[10px] text-secondary font-medium block">10:00 AM • Auditorium</span>
</div>
</div>
{/*  25th Oct  */}
<div className="bg-surface-container-low/50 p-2 min-h-[105px] flex flex-col justify-between group hover:bg-surface transition-colors">
<span className="font-label-md text-label-md text-outline">25</span>
</div>
{/*  26th Oct  */}
<div className="bg-surface-container-lowest p-2 min-h-[105px] flex flex-col justify-between group hover:bg-surface transition-colors">
<span className="font-label-md text-label-md text-on-surface">26</span>
<div className="text-[10px] text-outline">Marking &amp; Entry</div>
</div>
{/*  27th Oct  */}
<div className="bg-surface-container-lowest p-2 min-h-[105px] flex flex-col justify-between group hover:bg-surface transition-colors">
<span className="font-label-md text-label-md text-on-surface">27</span>
<div className="text-[10px] text-outline">Sports Practice</div>
</div>
{/*  28th Oct: Inter-House Sports Heats  */}
<div className="bg-surface-container-lowest p-2 min-h-[105px] flex flex-col justify-between group hover:bg-surface transition-colors">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-on-surface">28</span>
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
</div>
<div className="mt-1 space-y-1">
<div className="p-1 rounded bg-secondary-container text-on-secondary-container text-[11px] font-label-sm leading-tight truncate font-semibold">
                🏃 Inter-House Heats
              </div>
<span className="text-[10px] text-on-secondary-container font-medium block truncate">Danfodiyo vs Bello</span>
</div>
</div>
{/*  29th Oct  */}
<div className="bg-surface-container-lowest p-2 min-h-[105px] flex flex-col justify-between group hover:bg-surface transition-colors">
<span className="font-label-md text-label-md text-on-surface">29</span>
<div className="text-[10px] text-outline">Break Departure</div>
</div>
{/*  30th Oct: Mid-Term Break  */}
<div className="bg-surface-container-lowest p-2 min-h-[105px] flex flex-col justify-between group hover:bg-surface transition-colors">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-on-surface">30</span>
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
</div>
<div className="mt-1 space-y-1">
<div className="p-1 rounded bg-error-container text-on-error-container text-[11px] font-label-sm leading-tight truncate font-semibold">
                🌴 Mid-Term Break
              </div>
<span className="text-[10px] text-error font-medium block">Resumes Nov 3rd</span>
</div>
</div>
{/*  31st Oct  */}
<div className="bg-surface-container-low/50 p-2 min-h-[105px] flex flex-col justify-between group hover:bg-surface transition-colors">
<span className="font-label-md text-label-md text-outline">31</span>
<div className="text-[10px] text-outline">Hostel Disinfection</div>
</div>
</div>
{/*  Legend / Footer  */}
<div className="p-space-md bg-surface-container-lowest flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex flex-wrap items-center gap-space-md text-label-sm font-label-sm text-on-surface-variant">
<span className="flex items-center gap-1.5">
<span className="w-3 h-3 rounded bg-error"></span> National &amp; State Holidays
            </span>
<span className="flex items-center gap-1.5">
<span className="w-3 h-3 rounded bg-primary"></span> Academic &amp; Grading Gates
            </span>
<span className="flex items-center gap-1.5">
<span className="w-3 h-3 rounded bg-tertiary-container"></span> Examinations
            </span>
<span className="flex items-center gap-1.5">
<span className="w-3 h-3 rounded bg-secondary"></span> PTA &amp; Extracurricular
            </span>
</div>
<div className="flex items-center gap-2 text-label-sm font-label-sm text-outline">
<span className="material-symbols-outlined text-[16px]">info</span>
<span>All times are West Africa Time (WAT)</span>
</div>
</div>
</div>
{/*  Photographic Activity Feature Banner  */}
<div className="relative rounded-xl overflow-hidden bg-primary shadow-sm text-on-primary p-space-lg flex flex-col md:flex-row items-center justify-between gap-space-lg">
<div className="relative z-10 max-w-xl space-y-2">
<div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm">
<span>Special Celebration Focus</span>
</div>
<h3 className="font-headline-lg text-headline-lg font-bold">1448 AH Mawlid Un-Nabi &amp; Quranic Recitation Gala</h3>
<p className="font-body-md text-body-md text-surface-variant">
            Scheduled for November 14, 2026. Inter-school Tilawah competition welcoming sister academies across Kaduna North and Zaria districts.
          </p>
<div className="pt-2 flex items-center gap-space-sm">
<button className="px-space-md py-2 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md font-semibold hover:bg-surface-container transition-all">
              Manage Guest List &amp; Judges
            </button>
<button className="px-space-md py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-surface-tint transition-all">
              Broadcast Invite
            </button>
</div>
</div>
<div className="relative shrink-0 w-full md:w-64 h-40 rounded-lg overflow-hidden shadow-md">
<img className="w-full h-full object-cover" data-alt="Modern Islamic school library and assembly hall in Kaduna Nigeria with disciplined students in neat institutional school blazers with green and gold crests, reading classical Arabic manuscripts under ambient warm directional lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPbZVkxJwE4TvG3wov-FXjPFhgdXmAP6UTC2jTY3qoCbvQ0U-OWsoqjK1Hz3k5IDguS3ZDULK1mcNo04hzW2838yh99bMKFNAX9eK65BdSXvpCL30UO4cs64A717g-bKQIPBPwzoBTSE-JM_UL844aBXkv3w6vwOIFDbkWrukGZnobvavKpd2B_fWx71FiQaavB8Y024Lde9TtB9MCmhYyCqyyFWGgD33Re8GFZDG_Hj9DNlbaYS9mhQ"/>
<div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
</div>
</div>
</div>
{/*  RIGHT: Side Docket, MoE Benchmark & Auto-Broadcast (lg:col-span-4)  */}
<div className="lg:col-span-4 flex flex-col gap-space-md">
{/*  Panel 1: Upcoming Event Docket  */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
<div className="flex items-center justify-between pb-space-sm mb-space-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">upcoming</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Upcoming Event Docket</h3>
</div>
<span className="font-label-sm text-label-sm text-primary font-semibold hover:underline cursor-pointer">View All (12)</span>
</div>
<div className="space-y-space-sm">
{/*  Docket Card 1  */}
<div className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-all space-y-2">
<div className="flex items-center justify-between">
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[11px] font-semibold">
                In 8 Days
              </span>
<span className="font-label-sm text-label-sm text-outline">Oct 24, 2026</span>
</div>
<div>
<h4 className="font-label-lg text-label-lg text-on-surface font-bold leading-tight">1st Term PTA General Consultative Meeting</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Focus: Tuition review, Cambridge checkpoint fees, and perimeter solar installation.</p>
</div>
<div className="flex flex-wrap items-center gap-y-1 gap-x-space-sm text-[12px] text-on-surface-variant font-body-sm pt-1">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[15px] text-outline">location_on</span>
                Main Auditorium
              </span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[15px] text-secondary">videocam</span>
<span className="text-secondary font-medium">Virtual Stream Enabled</span>
</span>
</div>
<div className="flex items-center justify-between pt-1">
<span className="font-label-sm text-[11px] text-on-secondary-container font-semibold">340 Parents Confirmed</span>
<button className="font-label-sm text-primary text-[12px] font-semibold hover:underline">Check Dossier</button>
</div>
</div>
{/*  Docket Card 2  */}
<div className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-all space-y-2">
<div className="flex items-center justify-between">
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-[11px] font-semibold">
                In 4 Days
              </span>
<span className="font-label-sm text-label-sm text-outline">Oct 20, 2026</span>
</div>
<div>
<h4 className="font-label-lg text-label-lg text-on-surface font-bold leading-tight">Mid-Term Examination Kick-off</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Coordinated assessments for JSS 1 through SSS 3 classes.</p>
</div>
<div className="flex items-center gap-space-sm text-[12px] text-on-surface-variant font-body-sm pt-1">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[15px] text-outline">schedule</span>
                08:30 AM – 01:30 PM
              </span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[15px] text-outline">pin_drop</span>
                Blocks A, B &amp; C Halls
              </span>
</div>
</div>
{/*  Docket Card 3  */}
<div className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-all space-y-2">
<div className="flex items-center justify-between">
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-[11px] font-semibold">
                In 12 Days
              </span>
<span className="font-label-sm text-label-sm text-outline">Oct 28, 2026</span>
</div>
<div>
<h4 className="font-label-lg text-label-lg text-on-surface font-bold leading-tight">Inter-House Sports Heats</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Green (Danfodiyo House) vs Blue (Sultan Bello House) Track &amp; Field trial heats.</p>
</div>
<div className="flex items-center gap-space-sm text-[12px] text-on-surface-variant font-body-sm pt-1">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[15px] text-outline">sports_score</span>
                Main Athletic Pavilion
              </span>
</div>
</div>
</div>
</div>
{/*  Panel 2: Kaduna MoE Term Schedule Benchmark  */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
<div className="flex items-center justify-between pb-space-sm mb-space-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[20px]">account_balance</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Kaduna MoE Benchmark</h3>
</div>
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[11px] font-semibold">Harmonized</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
          State Ministry of Education statutory benchmark comparison for 2026/2027 calendar compliance.
        </p>
<div className="overflow-x-auto">
<table className="w-full text-left font-body-sm text-body-sm">
<thead className="bg-surface-container-low text-on-surface-variant font-label-sm text-[11px] uppercase">
<tr>
<th className="py-2 px-2.5 rounded-l">Academic Term</th>
<th className="py-2 px-2">Date Window</th>
<th className="py-2 px-2 rounded-r text-right">Days</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-low">
<tr className="hover:bg-surface-container/50 transition-colors">
<td className="py-2.5 px-2.5 font-semibold text-primary">
                  1st Term <span className="text-[10px] text-secondary block font-normal">(Active Term)</span>
</td>
<td className="py-2.5 px-2 text-on-surface text-[12px]">
                  Sep 14, 2026 – Dec 18, 2026
                  <span className="text-[10px] text-outline block">Mid-Break: Oct 30 – Nov 2</span>
</td>
<td className="py-2.5 px-2 text-right font-semibold text-on-surface">66</td>
</tr>
<tr className="hover:bg-surface-container/50 transition-colors">
<td className="py-2.5 px-2.5 font-semibold text-on-surface">2nd Term</td>
<td className="py-2.5 px-2 text-on-surface text-[12px]">
                  Jan 11, 2027 – Apr 9, 2027
                  <span className="text-[10px] text-outline block">Mid-Break: Feb 25 – Feb 26</span>
</td>
<td className="py-2.5 px-2 text-right font-semibold text-on-surface">63</td>
</tr>
<tr className="hover:bg-surface-container/50 transition-colors">
<td className="py-2.5 px-2.5 font-semibold text-on-surface">3rd Term</td>
<td className="py-2.5 px-2 text-on-surface text-[12px]">
                  May 3, 2027 – Jul 23, 2027
                  <span className="text-[10px] text-outline block">Mid-Break: Jun 10 – Jun 11</span>
</td>
<td className="py-2.5 px-2 text-right font-semibold text-on-surface">55</td>
</tr>
</tbody>
</table>
</div>
<div className="mt-space-sm p-space-sm rounded-lg bg-surface-container-high/60 flex items-center justify-between text-on-surface font-label-sm text-[12px]">
<span>Statutory Instructional Days:</span>
<span className="font-bold text-secondary">184 Scheduled / 180 Min</span>
</div>
</div>
{/*  Panel 3: Automated Broadcast Scheduler  */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
<div className="flex items-center justify-between pb-space-sm mb-space-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary-container text-[20px]">notifications_active</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Broadcast Scheduler</h3>
</div>
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[11px] font-semibold">Active</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
          System automated reminder triggers via Bulk SMS Gateway and Parent Portal app push notifications.
        </p>
<div className="space-y-space-sm">
{/*  Trigger 1  */}
<div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-primary text-[18px]">sms</span>
<div>
<span className="font-label-md text-label-md text-on-surface block font-semibold">48-Hour Parent Notice</span>
<span className="font-body-sm text-[11px] text-outline">SMS &amp; Email dispatches 2 days ahead</span>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked className="sr-only peer" id="toggle48" type="checkbox"/>
<div className="w-9 h-5 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-secondary"></div>
</label>
</div>
{/*  Trigger 2  */}
<div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low">
<div className="flex items-center gap-2.5">
<span className="material-symbols-outlined text-tertiary-container text-[18px]">alarm</span>
<div>
<span className="font-label-md text-label-md text-on-surface block font-semibold">2-Hour Gatehouse Advisory</span>
<span className="font-body-sm text-[11px] text-outline">Alerts registered vehicle gate passes</span>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked className="sr-only peer" id="toggle2h" type="checkbox"/>
<div className="w-9 h-5 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-secondary"></div>
</label>
</div>
{/*  Gateway Balance Info  */}
<div className="pt-1 flex items-center justify-between font-label-sm text-[11px] text-on-surface-variant">
<span className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
              Kaduna BulkSMS API: Online
            </span>
<span className="font-semibold text-primary">₦48,520 Units Left</span>
</div>
</div>
</div>
</div>
</div>
{/*  Interactive script for client actions  */}

</div></main>
  );
}
    