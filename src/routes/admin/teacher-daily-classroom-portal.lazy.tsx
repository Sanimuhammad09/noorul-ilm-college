
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/admin/teacher-daily-classroom-portal')({
  component: TeacherDailyClassroomPortal,
});

function TeacherDailyClassroomPortal() {
  return (
    <main className="w-full pt-16 px-space-lg py-space-lg flex-1 bg-background"><div className="flex flex-col w-full gap-space-lg">
{/*  TOP IDENTITY & STATUS BAR (NO BORDERS, RICH TIERS)  */}
<div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
<div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-secondary/5 blur-3xl pointer-events-none"></div>
<div className="absolute right-1/3 -bottom-20 h-48 w-48 rounded-full bg-primary/5 blur-2xl pointer-events-none"></div>
<div className="relative flex flex-col xl:flex-row xl:items-center justify-between gap-space-lg">
{/*  Left: Master Identity & Active Slot  */}
<div className="flex items-start sm:items-center gap-space-md">
<div className="relative shrink-0">
<img className="w-16 h-16 rounded-xl object-cover shadow-sm" data-alt="Distinguished West African senior academic male teacher in crisp navy embroidered traditional kaftan smiling warmly in a bright modern physics laboratory room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5SvVNKDhD3cvZ6Y7xJX0aRYrPjUQQ2mhZUSqHn271nEQk-SDxybDpBTOYt3f-7YulkxNJTsWvgicQvKdAgnjVRnA1pCJGuE0CUtmkIy0Thp6V4qCa7P_rUZ93YZNuNIh7LjgUY_eWJUQ3Lg7lxlK9Pie03BIcjwN7duFfJHtitiy_lLxqn_ccNas59Mh2qEnrMWz-wPSF3XTIE6xcQd9T6iJEn7v_Y8quBgM_zlAR3vRP2Np6B7F85Q"/>
<span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-on-secondary ring-2 ring-surface-container-lowest shadow-xs">
<span className="material-symbols-outlined text-[12px]">verified</span>
</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex flex-wrap items-center gap-space-xs">
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Malam Garba Usman</h1>
<span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider">
              Lead Physics Educator
            </span>
<span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
              SSS 2 Science A Class Master
            </span>
</div>
<div className="flex flex-wrap items-center gap-y-1 gap-x-3 mt-1 text-on-surface-variant font-body-sm text-body-sm">
<span className="flex items-center gap-1 font-medium text-on-surface">
<span className="material-symbols-outlined text-[16px] text-secondary">school</span>
              Senior Physics Department
            </span>
<span>•</span>
<span className="text-outline">Staff ID: NIIS-FAC-2018-042</span>
<span>•</span>
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold animate-pulse">
<span className="h-2 w-2 rounded-full bg-secondary"></span>
              Live: Period 3 Lab Practical (Rm S-12)
            </span>
</div>
</div>
</div>
{/*  Center & Right: Class Selector & Operational Triggers  */}
<div className="flex flex-wrap items-center gap-space-sm">
{/*  Class Cohort Switcher  */}
<div className="flex items-center bg-surface-container-low rounded-lg p-1">
<button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-primary font-label-sm text-label-sm shadow-sm transition-all font-semibold flex items-center gap-1">
<span>SSS 2 Science A</span>
<span className="text-secondary text-[10px] font-bold px-1.5 py-0.2 bg-secondary-fixed rounded-full">Primary</span>
</button>
<button className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-colors">
            SSS 3 Platinum
          </button>
<button className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-colors">
            JSS 3 Integrated Sci
          </button>
</div>
{/*  Quick Action Trigger Group  */}
<div className="flex items-center gap-2">
<button className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md shadow-sm hover:opacity-95 transition-all">
<span className="material-symbols-outlined text-[18px]">how_to_reg</span>
<span>Take Attendance</span>
</button>
<button className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-sm hover:opacity-95 transition-all">
<span className="material-symbols-outlined text-[18px]">edit_note</span>
<span>Log CA Scores</span>
</button>
<button className="flex items-center justify-center p-2 rounded-lg bg-surface-container-high text-primary hover:bg-surface-container-highest transition-colors" title="Submit Weekly Lesson Plan">
<span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
</button>
<button className="flex items-center justify-center p-2 rounded-lg bg-surface-container-high text-primary hover:bg-surface-container-highest transition-colors" title="Create New Task">
<span className="material-symbols-outlined text-[20px]">post_add</span>
</button>
</div>
</div>
</div>
</div>
{/*  KPI SUMMARY ROW (4 BESPOKE METRICS TILES)  */}
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
{/*  Stat 1: Daily Teaching Load  */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Today's Load</span>
<span className="p-1.5 rounded-lg bg-primary-fixed text-on-primary-fixed">
<span className="material-symbols-outlined text-[18px]">schedule</span>
</span>
</div>
<div className="my-2">
<div className="flex items-baseline gap-2">
<span className="font-metric-lg text-metric-lg text-primary">4</span>
<span className="font-label-md text-label-md text-on-surface-variant">Periods Assigned</span>
</div>
<div className="w-full bg-surface-container-highest rounded-full h-1.5 mt-2 overflow-hidden flex">
<div className="bg-secondary h-full w-2/4" title="2 Completed"></div>
<div className="bg-secondary-container h-full w-1/4 animate-pulse" title="1 Active"></div>
<div className="bg-outline-variant h-full w-1/4" title="1 Remaining"></div>
</div>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span className="text-secondary font-medium">2 Done • 1 Active</span>
<span className="text-outline">1 Remaining (Period 7)</span>
</div>
</div>
{/*  Stat 2: Assigned Scholars & Attendance  */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Roll Attendance</span>
<span className="p-1.5 rounded-lg bg-secondary-fixed text-on-secondary-fixed">
<span className="material-symbols-outlined text-[18px]">groups</span>
</span>
</div>
<div className="my-2">
<div className="flex items-baseline gap-2">
<span className="font-metric-lg text-metric-lg text-secondary">98.6%</span>
<span className="font-label-md text-label-md text-on-surface-variant">Present Today</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">73 of 74 enrolled students across 2 arms verified at morning muster.</p>
</div>
<div className="flex items-center gap-1.5 text-secondary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
<span>1 excused absent (Medical)</span>
</div>
</div>
{/*  Stat 3: Homework Submissions  */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Pending Marking</span>
<span className="p-1.5 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed">
<span className="material-symbols-outlined text-[18px]">rate_review</span>
</span>
</div>
<div className="my-2">
<div className="flex items-baseline gap-2">
<span className="font-metric-lg text-metric-lg text-tertiary-container">28</span>
<span className="font-label-md text-label-md text-on-surface-variant">Scripts Awaiting</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Optics Ray Synthesis &amp; Coulomb Problem Set awaiting rubrics.</p>
</div>
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-error font-medium flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-error"></span>
          Due for Term File in 48h
        </span>
<a className="text-primary hover:underline font-semibold" href="#quick-grader">Mark Now →</a>
</div>
</div>
{/*  Stat 4: MoE / Academic VP Curriculum Vetting  */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Lesson Plan Status</span>
<span className="p-1.5 rounded-lg bg-primary-fixed text-primary">
<span className="material-symbols-outlined text-[18px]">fact_check</span>
</span>
</div>
<div className="my-2">
<div className="flex items-baseline gap-2">
<span className="font-metric-lg text-metric-lg text-primary">100%</span>
<span className="font-label-md text-label-md text-secondary font-semibold">Fully Vetted</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Week 6 Curriculum aligned with NERDC &amp; Kaduna MoE standards.</p>
</div>
<div className="flex items-center gap-1.5 text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px] text-secondary">verified_user</span>
<span>Approved by VP Academics (Hajiya Bilkisu)</span>
</div>
</div>
</div>
{/*  MAIN DUAL-COLUMN WORKSPACE (65% / 35%)  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
{/*  LEFT / CENTER COLUMN (65% -> 8 of 12 cols)  */}
<div className="lg:col-span-8 flex flex-col gap-space-lg">
{/*  SECTION 1: TODAY'S CLASS SCHEDULE & WHITEBOARD LAUNCHER  */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-md gap-2">
<div>
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Daily Academic Routine</span>
<h2 className="font-headline-md text-headline-md text-primary">Teaching Schedule &amp; Classroom Flow</h2>
</div>
<button className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-sm hover:bg-primary-container transition-all">
<span className="material-symbols-outlined text-[18px]">draw</span>
<span>Launch Digital SmartBoard Mode</span>
</button>
</div>
{/*  Timeline Periods  */}
<div className="space-y-3 mt-space-sm">
{/*  Period 1: Completed  */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-lg bg-surface-container-low gap-3">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex flex-col items-center justify-center shrink-0">
<span className="font-label-sm text-label-sm text-outline font-bold">P1</span>
<span className="font-label-sm text-[10px] text-on-surface-variant">08:15</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface">Further Mathematics (Cover Duty)</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-[10px]">Rm M-04</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">SSS 2 Science B • Topic: Binomial Expansion Proofs</span>
</div>
</div>
<div className="flex items-center gap-2 self-end sm:self-center">
<span className="px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm flex items-center gap-1 font-semibold">
<span className="material-symbols-outlined text-[14px]">done_all</span> Concluded
              </span>
<span className="text-outline font-body-sm text-body-sm">36/36 Checked</span>
</div>
</div>
{/*  Period 2: Completed  */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-lg bg-surface-container-low gap-3">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex flex-col items-center justify-center shrink-0">
<span className="font-label-sm text-label-sm text-outline font-bold">P2</span>
<span className="font-label-sm text-[10px] text-on-surface-variant">09:00</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface">Senior Physics: Wave Mechanics</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-[10px]">Rm S-12</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">SSS 3 Platinum • Electromagnetic Radiation Spectrum</span>
</div>
</div>
<div className="flex items-center gap-2 self-end sm:self-center">
<span className="px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm flex items-center gap-1 font-semibold">
<span className="material-symbols-outlined text-[14px]">done_all</span> Concluded
              </span>
<span className="text-outline font-body-sm text-body-sm">26/26 Checked</span>
</div>
</div>
{/*  Period 3: ACTIVE UNDERWAY  */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-surface-container-high shadow-xs gap-3">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-lg bg-secondary text-on-secondary flex flex-col items-center justify-center shrink-0 shadow-sm">
<span className="font-label-sm text-label-sm font-bold">P3</span>
<span className="font-label-sm text-[10px]">09:45</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-primary font-bold">Physics Practical: Refraction through Triangular Glass Prism</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[10px] font-bold">Lab S-12</span>
</div>
<div className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface">
<span>SSS 2 Science Arm A</span>
<span>•</span>
<span className="text-secondary font-semibold">Co-proctor: Mallam Kani (Senior Lab Tech)</span>
</div>
</div>
</div>
<div className="flex items-center gap-2 self-end sm:self-center">
<span className="px-3 py-1 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm flex items-center gap-1.5 shadow-xs font-semibold animate-pulse">
<span className="h-2 w-2 rounded-full bg-surface-container-lowest"></span> In Session
              </span>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-primary hover:bg-surface hover:shadow-xs transition-all font-label-sm text-label-sm font-semibold">
                Classroom Tools
              </button>
</div>
</div>
{/*  Midday Break Separator  */}
<div className="flex items-center justify-center py-1">
<div className="h-0.5 flex-1 bg-surface-container-high"></div>
<span className="px-3 font-label-sm text-label-sm text-outline uppercase tracking-wider">11:15 - 12:45 • Midday Break &amp; Zuhr Prayers</span>
<div className="h-0.5 flex-1 bg-surface-container-high"></div>
</div>
{/*  Period 7: Upcoming  */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-lg bg-surface-container-lowest shadow-xs gap-3">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-lg bg-surface-container flex flex-col items-center justify-center shrink-0">
<span className="font-label-sm text-label-sm text-outline font-bold">P7</span>
<span className="font-label-sm text-[10px] text-on-surface-variant">14:00</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface">Integrated Science: Energy Transformations</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-[10px]">Rm J-02</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">JSS 3 Crescent • Preparation for BECE Mock Examination</span>
</div>
</div>
<div className="flex items-center gap-2 self-end sm:self-center">
<span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                Scheduled (2h 15m left)
              </span>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-low text-primary hover:bg-surface-container font-label-sm text-label-sm font-semibold transition-colors">
                View Plan
              </button>
</div>
</div>
</div>
</div>
{/*  SECTION 2: ACTIVE CLASS ROSTER & CONTINUOUS ASSESSMENT LOGGER  */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm" id="quick-grader">
<div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-md gap-3">
<div>
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">Fast CA Data Entry</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[10px] font-semibold">Auto-Sync On</span>
</div>
<h2 className="font-headline-md text-headline-md text-primary">SSS 2 Science Arm A — CA Test 2: Geometrical Optics</h2>
</div>
<div className="flex items-center gap-2">
<div className="relative">
<span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-outline text-[16px]">filter_list</span>
<input className="pl-8 pr-3 py-1.5 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 w-36 sm:w-44" placeholder="Find student..." type="text"/>
</div>
<button className="px-3.5 py-2 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md shadow-sm hover:opacity-95 transition-all flex items-center gap-1.5" id="lockGradesBtn">
<span className="material-symbols-outlined text-[16px]">save</span>
<span>Save &amp; Lock Grades</span>
</button>
</div>
</div>
{/*  Micro-Context Pill  */}
<div className="flex flex-wrap items-center justify-between p-3 rounded-lg bg-surface-container-low mb-space-md text-on-surface-variant font-body-sm text-body-sm">
<div className="flex items-center gap-4">
<span>Assessment: <strong>CA Test 2 (Max 20 Marks)</strong></span>
<span>Passing Benchmark: <strong>12.0 / 20</strong></span>
<span>Recorded: <strong className="text-primary font-semibold">34 / 38 Enrolled</strong></span>
</div>
<div className="text-secondary font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">cloud_done</span>
<span>Kaduna MoE Registry Linked</span>
</div>
</div>
{/*  Grade Entry Table  */}
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider h-11">
<th className="px-3 py-2 rounded-l-lg">Student Profile</th>
<th className="px-3 py-2">Admission No</th>
<th className="px-3 py-2 text-center">CA 1 (/20)</th>
<th className="px-3 py-2 text-center">CA 2 Score (/20)</th>
<th className="px-3 py-2">Status / Remarks</th>
<th className="px-3 py-2 rounded-r-lg text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-high font-body-md text-body-md">
{/*  Student 1  */}
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="px-3 py-3">
<div className="flex items-center gap-3">
<img className="w-9 h-9 rounded-full object-cover shrink-0" data-alt="Portrait photo of a studious 16-year-old Nigerian female student in clean Noorul Ilm school uniform hijab smiling calmly" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCwdi8zneUu-X-Ax2eIJj_NUawE5x3vkFa328W9CmXDDY5N8a_xeoBMoM6NgvhYGoiF_8YQf_VW3Ra3W0kd7kpOe-r0LTVz4oknCBmfBTf_G6w2zwnacdthJCXXhcTuigKwaeUAg4eT9GCbBl3h3XxD5sMt-YE4qS3M-gSB-QvVhsKmRE6cWtVWZgg46HkGa5Fo9PhqxPiAoLfWtI_BqlnSB-daiua23Lo5MXpLl8l6Ew1suwKb9S8Zg"/>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface truncate">Aisha Mansur Danbaba</span>
<span className="font-label-sm text-[11px] text-secondary font-semibold">Class Captain • NNPC Scholar</span>
</div>
</div>
</td>
<td className="px-3 py-3 font-mono text-outline text-body-sm">NIIS/2023/0189</td>
<td className="px-3 py-3 text-center font-semibold text-on-surface">19.5</td>
<td className="px-3 py-3 text-center">
<input className="score-input w-16 text-center py-1 bg-surface-container-lowest rounded-lg font-headline-sm text-headline-sm text-primary font-bold shadow-xs focus:ring-2 focus:ring-primary/20 focus:outline-none" max="20" min="0" step="0.5" type="number" value="19.0"/>
</td>
<td className="px-3 py-3">
<span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                    Distinction (95%)
                  </span>
</td>
<td className="px-3 py-3 text-right">
<button className="p-1 rounded text-outline hover:text-primary transition-colors" title="Add Observation Note">
<span className="material-symbols-outlined text-[18px]">comment</span>
</button>
</td>
</tr>
{/*  Student 2  */}
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="px-3 py-3">
<div className="flex items-center gap-3">
<img className="w-9 h-9 rounded-full object-cover shrink-0" data-alt="Portrait photo of a focused teenage Northern Nigerian schoolboy in school blazer looking directly at camera" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhXrWx71sd1QExtmlpBxAHOFIxYZPI5BF-lsOCeUeWD3I5aqPo5-U6LqhevEkanmiPXYfsTmUdgiLcZRO63XlRHOaY8yvW7V9RHoIbYOgGP_qPROp7168h96FBRLY9H3KJPKEKzfTyYKvLa4QZrK39Bx4jl_3u9gRMgzAxQhfAm9rpHYdUG0VScK_RoKvlGjddQV3MSIDbUcSgZnulc4GmIEpJfABQPTWL0PpZRW21FX8dPGmXvS2Waw"/>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface truncate">Farouk Umar Sadiq</span>
<span className="font-label-sm text-[11px] text-outline">Physics Lab Prefect</span>
</div>
</div>
</td>
<td className="px-3 py-3 font-mono text-outline text-body-sm">NIIS/2023/0204</td>
<td className="px-3 py-3 text-center font-semibold text-on-surface">17.0</td>
<td className="px-3 py-3 text-center">
<input className="score-input w-16 text-center py-1 bg-surface-container-lowest rounded-lg font-headline-sm text-headline-sm text-primary font-bold shadow-xs focus:ring-2 focus:ring-primary/20 focus:outline-none" max="20" min="0" step="0.5" type="number" value="18.5"/>
</td>
<td className="px-3 py-3">
<span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                    Excellent (92%)
                  </span>
</td>
<td className="px-3 py-3 text-right">
<button className="p-1 rounded text-outline hover:text-primary transition-colors" title="Add Observation Note">
<span className="material-symbols-outlined text-[18px]">comment</span>
</button>
</td>
</tr>
{/*  Student 3  */}
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="px-3 py-3">
<div className="flex items-center gap-3">
<img className="w-9 h-9 rounded-full object-cover shrink-0" data-alt="Portrait photo of an adolescent Nigerian schoolgirl with smart glasses and neat uniform smiling gently" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPGKV-Es52P5DuYAb1xrrFSaGHwIJr4eAokiCDfOsyBPLLfoUmdn-UhzE9yrFyZpogwSuPkUHVRrSQJAUboi_YbgDW9zvWDIvOIfyfx0wvYU_8gSZQXrrJvwVhxpkXd6As5VxRFCom__jiG96lG8oMTZ0ghfOFsB13JoCFsgtwdtDoJlhqfX7OaEUureDTSdX5blQ1BQvWKTbHK-qyGVpJ_oRtVCp3wmhs8Kz31cXyv4rUgP4_SVAv_Q"/>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface truncate">Zainab Al-Hassan</span>
<span className="font-label-sm text-[11px] text-outline">Day Scholar (Barnawa)</span>
</div>
</div>
</td>
<td className="px-3 py-3 font-mono text-outline text-body-sm">NIIS/2023/0215</td>
<td className="px-3 py-3 text-center font-semibold text-on-surface">14.5</td>
<td className="px-3 py-3 text-center">
<input className="score-input w-16 text-center py-1 bg-surface-container-lowest rounded-lg font-headline-sm text-headline-sm text-primary font-bold shadow-xs focus:ring-2 focus:ring-primary/20 focus:outline-none" max="20" min="0" step="0.5" type="number" value="15.0"/>
</td>
<td className="px-3 py-3">
<span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                    Very Good (75%)
                  </span>
</td>
<td className="px-3 py-3 text-right">
<button className="p-1 rounded text-outline hover:text-primary transition-colors" title="Add Observation Note">
<span className="material-symbols-outlined text-[18px]">comment</span>
</button>
</td>
</tr>
{/*  Student 4: Needs Support  */}
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="px-3 py-3">
<div className="flex items-center gap-3">
<img className="w-9 h-9 rounded-full object-cover shrink-0" data-alt="Close-up portrait of a thoughtful Nigerian high school student boy wearing glasses in school uniform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1qTllF-BFpKIhhMekff_MBu4jQ9BmB0O32Aky3Lhl4HD71wziVr6h8yoxuCpc0x_7pl4AWHqrLmt4qdxj9cUbgJi08FJ6XUmbbftToXbYRbcLanKOyVwUyivkadLn-YYrzMNpyLlwbvtWWyybE8gd-_XvJvET98_V4zp6-IsD67LveKnZK-_PI_e_AsVc8vNgqjm9bnYDZ5nfsBnaQjbpdiQ9s4lxrIWtvSqm6uAqWw1G9cU1j81nMg"/>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface truncate">Ibrahim Mustapha</span>
<span className="font-label-sm text-[11px] text-error font-medium">Remedial Focus Required</span>
</div>
</div>
</td>
<td className="px-3 py-3 font-mono text-outline text-body-sm">NIIS/2023/0241</td>
<td className="px-3 py-3 text-center font-semibold text-on-surface">10.0</td>
<td className="px-3 py-3 text-center">
<input className="score-input w-16 text-center py-1 bg-error-container text-on-error-container rounded-lg font-headline-sm text-headline-sm font-bold shadow-xs focus:ring-2 focus:ring-error focus:outline-none" max="20" min="0" step="0.5" type="number" value="11.5"/>
</td>
<td className="px-3 py-3">
<span className="px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">
                    Marginal Pass (57.5%)
                  </span>
</td>
<td className="px-3 py-3 text-right">
<button className="p-1 rounded text-outline hover:text-error transition-colors" title="Flag for Parent Clinic">
<span className="material-symbols-outlined text-[18px]">flag</span>
</button>
</td>
</tr>
{/*  Student 5  */}
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="px-3 py-3">
<div className="flex items-center gap-3">
<img className="w-9 h-9 rounded-full object-cover shrink-0" data-alt="Portrait photo of a young bright smiling African schoolgirl with white scarf hijab and school emblem badge" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCfc2dynJHz__jDnVE7DG49ejjlWs6kFnNq7hEqiATXlshJVk9cM-0QDGM-VtWypvWmjgg4ebz0aJkBjsRd9IqjDTZ9sUxrzcFplNSg1iXEKtqAYEKztLEck_OOsPc0iBnDW7BucvNnxhbGCynZE8NLZvjrnrPN2Q6ntNvI3hlge9ZT6b0EYGTXvfmDEshlehLjcPKYMGVWLBsq0kEiThforrrYJfnIg0SArwdMe7xFCpC8lSNYL-c8g"/>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface truncate">Fatima Bello Garba</span>
<span className="font-label-sm text-[11px] text-outline">Boarder (Khadija House)</span>
</div>
</div>
</td>
<td className="px-3 py-3 font-mono text-outline text-body-sm">NIIS/2023/0255</td>
<td className="px-3 py-3 text-center font-semibold text-on-surface">16.5</td>
<td className="px-3 py-3 text-center">
<input className="score-input w-16 text-center py-1 bg-surface-container-lowest rounded-lg font-headline-sm text-headline-sm text-primary font-bold shadow-xs focus:ring-2 focus:ring-primary/20 focus:outline-none" max="20" min="0" step="0.5" type="number" value="17.0"/>
</td>
<td className="px-3 py-3">
<span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                    Excellent (85%)
                  </span>
</td>
<td className="px-3 py-3 text-right">
<button className="p-1 rounded text-outline hover:text-primary transition-colors" title="Add Observation Note">
<span className="material-symbols-outlined text-[18px]">comment</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="flex items-center justify-between pt-space-md text-body-sm text-outline">
<span>Showing 5 of 38 enrolled scholars in Arm A</span>
<div className="flex gap-1">
<button className="px-2.5 py-1 rounded bg-surface-container-low hover:bg-surface-container text-on-surface text-label-sm">Prev</button>
<button className="px-2.5 py-1 rounded bg-primary text-on-primary font-bold text-label-sm">1</button>
<button className="px-2.5 py-1 rounded bg-surface-container-low hover:bg-surface-container text-on-surface text-label-sm">2</button>
<button className="px-2.5 py-1 rounded bg-surface-container-low hover:bg-surface-container text-on-surface text-label-sm">3</button>
<button className="px-2.5 py-1 rounded bg-surface-container-low hover:bg-surface-container text-on-surface text-label-sm">Next</button>
</div>
</div>
</div>
{/*  SECTION 3: HOMEWORK & ASSIGNMENT PORTAL TRACKER  */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex items-center justify-between pb-space-md">
<div>
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Independent Studies</span>
<h2 className="font-headline-md text-headline-md text-primary">Active Class Assignments &amp; Homework Sets</h2>
</div>
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-high text-primary font-label-md text-label-md hover:bg-surface-container-highest transition-colors">
<span className="material-symbols-outlined text-[16px]">add_circle</span>
<span>Assign New Task</span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
{/*  Card 1  */}
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-2">
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[10px] font-semibold">SSS 2 Science A</span>
<span className="font-label-sm text-[11px] text-error font-medium">Due Mon, 20 Oct • 08:00</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Wave Optics &amp; Snell's Law Synthesis</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Requires full tabular calculations of critical angle indices with refractive index diagrams.</p>
</div>
<div className="mt-4 pt-3 border-t border-surface-container">
<div className="flex items-center justify-between text-label-sm font-label-sm mb-1.5">
<span className="text-on-surface-variant">Turned In: <strong className="text-on-surface font-semibold">32 / 38 (84%)</strong></span>
<span className="text-secondary font-semibold">14 Graded</span>
</div>
<div className="w-full bg-surface-container-highest rounded-full h-2 overflow-hidden flex">
<div className="bg-secondary h-full w-[44%]" title="14 Graded"></div>
<div className="bg-secondary-fixed-dim h-full w-[40%]" title="18 Submitted Ungraded"></div>
</div>
<div className="flex items-center justify-between mt-3">
<span className="font-body-sm text-[11px] text-outline">Weight: 10% Term Continuous Assessment</span>
<button className="px-3 py-1 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm hover:opacity-95 shadow-xs">Grade Submissions</button>
</div>
</div>
</div>
{/*  Card 2  */}
<div className="p-4 rounded-xl bg-surface-container-low flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-2">
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-[10px] font-semibold">SSS 3 Platinum</span>
<span className="font-label-sm text-[11px] text-secondary font-medium">Assigned Yesterday</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Coulomb's Law &amp; Electric Field Intensity</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">10 numerical WAEC/NECO past questions on point charge electrostatic potentials.</p>
</div>
<div className="mt-4 pt-3 border-t border-surface-container">
<div className="flex items-center justify-between text-label-sm font-label-sm mb-1.5">
<span className="text-on-surface-variant">Turned In: <strong className="text-on-surface font-semibold">6 / 26 (23%)</strong></span>
<span className="text-outline">Due in 4 Days</span>
</div>
<div className="w-full bg-surface-container-highest rounded-full h-2 overflow-hidden flex">
<div className="bg-secondary-fixed-dim h-full w-[23%]"></div>
</div>
<div className="flex items-center justify-between mt-3">
<span className="font-body-sm text-[11px] text-outline">Weight: Homework Check</span>
<button className="px-3 py-1 rounded-lg bg-surface-container-highest text-primary font-label-sm text-label-sm hover:bg-surface-variant">Review Early</button>
</div>
</div>
</div>
</div>
</div>
</div>
{/*  RIGHT COLUMN (35% -> 4 of 12 cols)  */}
<div className="lg:col-span-4 flex flex-col gap-space-lg">
{/*  WIDGET 1: PARENT COMMUNICATION QUICK DISPATCH  */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex items-center justify-between pb-3">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">chat</span>
<h2 className="font-headline-sm text-headline-sm text-primary">Parent Quick Dispatch</h2>
</div>
<span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-[10px] font-bold">SMS Bridge</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">Direct communication hub for SSS 2 Science A guardians.</p>
{/*  Message Thread Cards  */}
<div className="space-y-3">
{/*  Thread 1: Aisha's Father  */}
<div className="p-3 rounded-lg bg-surface-container-low">
<div className="flex items-center justify-between mb-1">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-secondary"></span>
<span className="font-label-md text-label-md text-on-surface font-bold truncate">Alhaji Mansur Danbaba</span>
</div>
<span className="font-body-sm text-[10px] text-outline">08:42 AM</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">"Good morning Malam Garba. Will Aisha require additional weekend coaching for the upcoming National Physics Olympiad?"</p>
<div className="mt-2.5 flex items-center justify-between pt-2 border-t border-surface-container">
<span className="font-label-sm text-[10px] text-secondary font-semibold">Guardian to Aisha (Arm A)</span>
<button className="text-primary font-label-sm text-label-sm font-semibold hover:underline flex items-center gap-0.5">
                Reply SMS <span className="material-symbols-outlined text-[14px]">send</span>
</button>
</div>
</div>
{/*  Thread 2: Farouk's Father  */}
<div className="p-3 rounded-lg bg-surface-container-low">
<div className="flex items-center justify-between mb-1">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-outline-variant"></span>
<span className="font-label-md text-label-md text-on-surface font-bold truncate">Dr. Umar Sadiq (Consultant)</span>
</div>
<span className="font-body-sm text-[10px] text-outline">Yesterday</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">"I have procured the optical prism and safety goggles for Farouk as requested in the science syllabus. Thank you sir."</p>
<div className="mt-2.5 flex items-center justify-between pt-2 border-t border-surface-container">
<span className="font-label-sm text-[10px] text-outline">Guardian to Farouk (Arm A)</span>
<span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-[10px] text-secondary font-medium">Acknowledged</span>
</div>
</div>
</div>
{/*  Direct Reply Box  */}
<div className="mt-4 pt-3 border-t border-surface-container">
<label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1">Quick Broadcast to All Parents (SSS 2A)</label>
<div className="relative">
<textarea className="w-full p-2.5 text-body-sm font-body-sm bg-surface-container-low rounded-lg text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none" placeholder="Type prompt update or lab reminder (Sends via SMS + Portal)..." rows={2}></textarea>
</div>
<div className="flex items-center justify-between mt-2">
<span className="font-body-sm text-[10px] text-outline">38 Guardians linked via Kaduna SMS Telco</span>
<button className="px-3 py-1.5 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm hover:opacity-95 shadow-xs">Dispatch Note</button>
</div>
</div>
</div>
{/*  WIDGET 2: PENDING FAST-GRADING WORKBENCH  */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex items-center justify-between pb-3">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[20px]">grading</span>
<h2 className="font-headline-sm text-headline-sm text-primary">Priority Mark Queue</h2>
</div>
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[10px] font-bold">14 Unmarked</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">Reviewing optics lab reports submitted this morning.</p>
{/*  Rapid Item to Grade  */}
<div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col gap-2.5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-on-surface font-semibold">Zainab Al-Hassan</span>
<span className="font-mono text-[10px] text-outline">#0215</span>
</div>
<span className="font-label-sm text-[10px] text-secondary font-bold">PDF Attached (1.4 MB)</span>
</div>
{/*  Document Snippet Mock  */}
<div className="p-2.5 rounded-lg bg-surface-container-lowest text-body-sm font-body-sm text-on-surface flex items-center justify-between">
<div className="flex items-center gap-2 truncate">
<span className="material-symbols-outlined text-error text-[18px]">picture_as_pdf</span>
<span className="truncate font-medium">Optics_Prism_Report_Zainab.pdf</span>
</div>
<button className="text-primary hover:underline font-label-sm text-label-sm font-bold shrink-0">Open View</button>
</div>
{/*  Score Rating Slider / Buttons (1-10 Rubric)  */}
<div>
<div className="flex justify-between items-center mb-1">
<span className="font-label-sm text-[11px] text-on-surface-variant font-medium">Refraction Plot &amp; Error Rubric</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold"><span id="rubricScoreDisplay">8.5</span> / 10</span>
</div>
<div className="flex gap-1">
<button className="score-pill flex-1 py-1 rounded bg-surface-container text-on-surface text-label-sm font-semibold hover:bg-secondary-fixed">7</button>
<button className="score-pill flex-1 py-1 rounded bg-surface-container text-on-surface text-label-sm font-semibold hover:bg-secondary-fixed">7.5</button>
<button className="score-pill flex-1 py-1 rounded bg-surface-container text-on-surface text-label-sm font-semibold hover:bg-secondary-fixed">8</button>
<button className="score-pill flex-1 py-1 rounded bg-secondary text-on-secondary text-label-sm font-bold">8.5</button>
<button className="score-pill flex-1 py-1 rounded bg-surface-container text-on-surface text-label-sm font-semibold hover:bg-secondary-fixed">9</button>
<button className="score-pill flex-1 py-1 rounded bg-surface-container text-on-surface text-label-sm font-semibold hover:bg-secondary-fixed">10</button>
</div>
</div>
{/*  Quick Feedback Dropdown  */}
<input className="w-full px-2.5 py-1.5 text-body-sm font-body-sm bg-surface-container-lowest rounded-lg text-on-surface focus:outline-none" type="text" value="Precise angle measurement. Keep incident beam narrow in setup."/>
<div className="flex gap-2 mt-1">
<button className="flex-1 py-2 rounded-lg bg-secondary text-on-secondary font-label-sm text-label-sm font-semibold hover:opacity-95 shadow-xs flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[16px]">check</span>
<span>Approve &amp; Return</span>
</button>
<button className="px-3 py-2 rounded-lg bg-surface-container text-on-surface-variant font-label-sm text-label-sm hover:text-on-surface">
              Next Script
            </button>
</div>
</div>
</div>
{/*  WIDGET 3: TEACHING NOTES MEMO & LAB APPARATUS CHECKLIST  */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex items-center justify-between pb-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">sticky_note_2</span>
<h2 className="font-headline-sm text-headline-sm text-primary">Master's Field Notes</h2>
</div>
<span className="font-body-sm text-[11px] text-outline">Private to Malam Garba</span>
</div>
<div className="space-y-2 mt-2">
<div className="p-2.5 rounded-lg bg-surface-container-low flex items-start gap-2.5">
<input defaultChecked className="mt-0.5 rounded text-primary focus:ring-0" type="checkbox"/>
<div className="flex flex-col min-w-0">
<span className="font-body-sm text-body-sm text-on-surface line-through text-outline">Verify WAEC 2026/2027 specimen list with Mallam Kani (Lab Tech)</span>
<span className="font-label-sm text-[10px] text-secondary">Completed 08:30 AM</span>
</div>
</div>
<div className="p-2.5 rounded-lg bg-surface-container-low flex items-start gap-2.5">
<input className="mt-0.5 rounded text-primary focus:ring-0" type="checkbox"/>
<div className="flex flex-col min-w-0">
<span className="font-body-sm text-body-sm text-on-surface font-medium">Requisition 12 new optical pins &amp; drawing boards from Central Stores</span>
<span className="font-label-sm text-[10px] text-error">Pending for tomorrow's practical</span>
</div>
</div>
<div className="p-2.5 rounded-lg bg-surface-container-low flex items-start gap-2.5">
<input className="mt-0.5 rounded text-primary focus:ring-0" type="checkbox"/>
<div className="flex flex-col min-w-0">
<span className="font-body-sm text-body-sm text-on-surface font-medium">Schedule remedial tutorial for Ibrahim Mustapha (Optics Ray Tracing)</span>
<span className="font-label-sm text-[10px] text-on-surface-variant">Target: Thursday 3:30 PM Prep</span>
</div>
</div>
</div>
<button className="w-full mt-3 py-2 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-primary font-label-sm text-label-sm font-semibold transition-colors flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[16px]">add</span>
<span>Add Fast Memo Note</span>
</button>
</div>
</div>
</div>
{/*  TOAST NOTIFICATION CONTAINER (FOR SCRIPT TRIGGERS)  */}
<div className="fixed bottom-6 right-6 hidden transform translate-y-4 transition-all duration-300 z-50" id="liveToast">
<div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-on-primary shadow-xl">
<span className="material-symbols-outlined text-secondary text-[22px]">cloud_done</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold">Continuous Assessment Locked</span>
<span className="font-body-sm text-[11px] text-surface-container-high">38 Scores written to Noorul Ilm MoE Server.</span>
</div>
</div>
</div>
{/*  INLINE VANILLA SCRIPT FOR MICRO-INTERACTIONS  */}

</div></main>
  );
}
    