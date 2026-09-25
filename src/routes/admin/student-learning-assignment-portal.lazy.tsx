import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(
  "/admin/student-learning-assignment-portal",
)({
  component: StudentLearningAssignmentPortal,
});

function StudentLearningAssignmentPortal() {
  return (
    <main className="w-full pt-16 px-space-lg py-space-lg flex-1 bg-background">
      <div className="flex flex-col w-full gap-space-lg">
        {/*  Student Profile Banner & Command Hub  */}
        <section className="relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm p-space-lg sm:p-space-xl">
          <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-primary-fixed/30 blur-3xl pointer-events-none"></div>
          <div className="absolute right-64 -bottom-20 w-64 h-64 rounded-full bg-secondary-fixed/20 blur-2xl pointer-events-none"></div>
          <div className="relative z-10 flex flex-col xl:flex-row xl:items-center justify-between gap-space-lg">
            {/*  Student Identity Block  */}
            <div className="flex items-start sm:items-center gap-space-md min-w-0">
              <div className="relative shrink-0">
                <img
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover shadow-md"
                  data-alt="Portrait photo of Aisha Mansur Danbaba, an intelligent young Nigerian female secondary school student in pristine Noorul Ilm deep navy academic uniform with neatly styled emerald scarf, bright focused expression, softly lit high-end modern school studio portrait"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8NJ82FEIMqnvnmih8JouEKFcRyoprPuEmUMfOC1hBptjFK3er8fbUjCbvFFy10hEaptEXgUtVE3HUS4sGJYnujhBU_9Ts0fgNPMFm1ldkERLeDtcNOkVJ5iwW3Fdj9nPFis2myXWo3AY1Hb9i5ajILf1S8zz_XNHpLKmVWWxhDsyDeZ7ZvtkEH0bX-9nNgfBSZfafTK8oYVZVwCat1X3gUgk2lhTCLX8SUi-b7qbwiXFULcSJq1ybsA"
                />
                <span className="absolute -bottom-2 -right-2 bg-secondary text-on-secondary px-2 py-0.5 rounded-full font-label-sm text-label-sm uppercase tracking-wider flex items-center gap-1 shadow-sm">
                  <span
                    className="material-symbols-outlined text-[13px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    stars
                  </span>
                  #1 SSS 2
                </span>
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex flex-wrap items-center gap-space-xs">
                  <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight truncate">
                    Aisha Mansur Danbaba
                  </h1>
                  <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    Danfodiyo House (Green)
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-on-surface-variant font-body-sm text-body-sm">
                  <span className="font-medium text-on-surface">
                    Adm #NIIS/2024/0118
                  </span>
                  <span>•</span>
                  <span className="font-semibold text-primary">
                    SSS 2 Science Arm A
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-secondary">
                    <span className="material-symbols-outlined text-[16px]">
                      verified
                    </span>
                    Term 1 Academic Honor Roll
                  </span>
                </div>
                {/*  Academic micro-stats in banner  */}
                <div className="flex flex-wrap items-center gap-4 mt-3 pt-3">
                  <div className="flex items-center gap-1.5">
                    <span className="font-label-sm text-label-sm text-outline">
                      GPA
                    </span>
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      4.88
                    </span>
                    <span className="font-body-sm text-[11px] text-on-surface-variant">
                      / 5.00
                    </span>
                  </div>
                  <span className="text-outline-variant">|</span>
                  <div className="flex items-center gap-1.5">
                    <span className="font-label-sm text-label-sm text-outline">
                      Attendance
                    </span>
                    <span className="font-headline-sm text-headline-sm text-secondary font-bold">
                      98.5%
                    </span>
                    <span className="font-body-sm text-[11px] text-on-surface-variant">
                      (41/42 days)
                    </span>
                  </div>
                  <span className="text-outline-variant">|</span>
                  <div className="flex items-center gap-1.5">
                    <span className="font-label-sm text-label-sm text-outline">
                      Class Rank
                    </span>
                    <span className="font-headline-sm text-headline-sm text-primary-container font-bold">
                      1st
                    </span>
                    <span className="font-body-sm text-[11px] text-on-surface-variant">
                      of 38 Pupils
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*  Quick Action Toolbar  */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-space-sm shrink-0 self-start xl:self-center">
              <button
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors shadow-sm"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px] text-primary">
                  download
                </span>
                <span>Download Timetable</span>
              </button>
              <button
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors shadow-sm"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px] text-primary">
                  menu_book
                </span>
                <span>Library E-Resources</span>
              </button>
              <button
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors shadow-sm"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px] text-secondary">
                  forum
                </span>
                <span>Ask Subject Teacher</span>
              </button>
              <button
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-md"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">
                  cloud_upload
                </span>
                <span>Submit Project</span>
              </button>
            </div>
          </div>
        </section>
        {/*  KPI Metric Summary Grid  */}
        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
          {/*  KPI 1  */}
          <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-md shadow-sm transition-all hover:shadow-md flex flex-col justify-between">
            <div className="flex items-start justify-between gap-space-xs">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                  Academic Standing
                </span>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-metric-lg text-metric-lg text-primary">
                    91.0%
                  </span>
                  <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-semibold">
                    Grade A1
                  </span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[22px]">
                  workspace_premium
                </span>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant pt-2">
              <span className="flex items-center gap-1 text-secondary font-medium">
                <span className="material-symbols-outlined text-[16px]">
                  trending_up
                </span>{" "}
                +3.2% vs term goal
              </span>
              <span className="text-[11px] text-outline">Cumulative Avg</span>
            </div>
          </div>
          {/*  KPI 2  */}
          <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-md shadow-sm transition-all hover:shadow-md flex flex-col justify-between">
            <div className="flex items-start justify-between gap-space-xs">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                  Assignments Due
                </span>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-metric-lg text-metric-lg text-tertiary-container">
                    2 Pending
                  </span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-tertiary-fixed flex items-center justify-center text-tertiary shrink-0">
                <span className="material-symbols-outlined text-[22px]">
                  pending_actions
                </span>
              </div>
            </div>
            <div className="mt-3 text-body-sm font-body-sm text-on-surface-variant pt-2 flex flex-col gap-0.5">
              <span className="text-tertiary font-medium text-[11px] truncate">
                • Wave Optics Lab (Mon 20 Oct)
              </span>
              <span className="text-on-surface-variant text-[11px] truncate">
                • Further Maths Set #4 (Wed 22 Oct)
              </span>
            </div>
          </div>
          {/*  KPI 3  */}
          <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-md shadow-sm transition-all hover:shadow-md flex flex-col justify-between">
            <div className="flex items-start justify-between gap-space-xs">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                  Term Attendance
                </span>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-metric-lg text-metric-lg text-secondary">
                    41 / 42
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Days
                  </span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary shrink-0">
                <span className="material-symbols-outlined text-[22px]">
                  event_available
                </span>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant pt-2">
              <span className="text-secondary font-medium text-[11px] flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">
                  check_circle
                </span>{" "}
                0 Unexcused
              </span>
              <span className="text-[11px] text-outline">
                1 Verified Sick Excusal
              </span>
            </div>
          </div>
          {/*  KPI 4  */}
          <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-md shadow-sm transition-all hover:shadow-md flex flex-col justify-between">
            <div className="flex items-start justify-between gap-space-xs">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                  Term Fee Clearance
                </span>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-metric-lg text-metric-lg text-primary">
                    100%
                  </span>
                  <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-semibold">
                    Cleared
                  </span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[22px]">
                  verified_user
                </span>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant pt-2">
              <span className="text-on-surface text-[11px] font-mono truncate">
                #NIIS-REC-8910
              </span>
              <span className="text-[11px] text-secondary font-medium">
                Bursary Verified
              </span>
            </div>
          </div>
        </section>
        {/*  Main Dual Column Workspace (68% / 32%)  */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
          {/*  LEFT / MAIN CENTER COLUMN (8 cols ~ 67%)  */}
          <div className="lg:col-span-8 flex flex-col gap-space-lg">
            {/*  Today's Schedule & Classroom Stream  */}
            <section className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-md">
                <div className="flex items-center gap-space-sm">
                  <div className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[20px]">
                      calendar_month
                    </span>
                  </div>
                  <div>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">
                      Today's Class Timetable &amp; Handouts
                    </h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Thursday, 16 October 2026 • SSS 2 Science Arm A Timetable
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold flex items-center gap-1.5 animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    Live Period Active
                  </span>
                </div>
              </div>
              {/*  Class Timeline  */}
              <div className="space-y-3 mt-space-sm">
                {/*  Period 1: Completed  */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-space-sm rounded-lg bg-surface-container-low transition-colors hover:bg-surface-container">
                  <div className="flex items-center gap-space-sm min-w-0">
                    <div className="flex flex-col items-center justify-center w-14 py-1 rounded bg-surface-container-lowest text-on-surface-variant shrink-0 font-label-sm text-label-sm text-center">
                      <span className="font-bold text-on-surface">08:15</span>
                      <span className="text-[10px] text-outline">09:00 AM</span>
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-label-lg text-label-lg text-on-surface truncate">
                          Further Mathematics
                        </span>
                        <span className="px-2 py-0.2 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-[10px]">
                          Rm S-12
                        </span>
                      </div>
                      <div className="text-body-sm text-body-sm text-on-surface-variant flex items-center gap-2">
                        <span>Mr. Usman Bello</span>
                        <span>•</span>
                        <span className="text-secondary font-medium">
                          Completed
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-primary hover:bg-primary hover:text-on-primary font-label-sm text-label-sm flex items-center gap-1 transition-colors shadow-sm"
                      href="#"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        file_download
                      </span>
                      <span>Handout (PDF)</span>
                    </a>
                  </div>
                </div>
                {/*  Period 2: In-Session Active  */}
                <div className="relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-space-sm rounded-lg bg-primary-fixed/20 shadow-sm">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary"></div>
                  <div className="flex items-center gap-space-sm min-w-0 pl-1">
                    <div className="flex flex-col items-center justify-center w-14 py-1 rounded bg-primary text-on-primary shrink-0 font-label-sm text-label-sm text-center shadow-xs">
                      <span className="font-bold">09:00</span>
                      <span className="text-[10px] text-primary-fixed">
                        10:30 AM
                      </span>
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-label-lg text-label-lg text-primary font-bold truncate">
                          Physics: Electromagnetic Waves Theory
                        </span>
                        <span className="px-2 py-0.2 rounded bg-primary-fixed text-primary font-label-sm text-[10px] font-bold">
                          Rm S-12
                        </span>
                      </div>
                      <div className="text-body-sm text-body-sm text-on-surface-variant flex items-center gap-2">
                        <span>Malam Garba Usman</span>
                        <span>•</span>
                        <span className="text-primary font-semibold">
                          Active Session
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      className="px-3 py-1.5 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm flex items-center gap-1 shadow-sm hover:bg-primary-container"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        videocam
                      </span>
                      <span>Virtual Board</span>
                    </button>
                    <a
                      className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-primary hover:bg-primary hover:text-on-primary font-label-sm text-label-sm flex items-center gap-1 transition-colors shadow-sm"
                      href="#"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        picture_as_pdf
                      </span>
                      <span>Lesson Notes</span>
                    </a>
                  </div>
                </div>
                {/*  Mid-day Break Interlude  */}
                <div className="flex items-center justify-between px-space-md py-2 rounded-lg bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-outline">
                      coffee
                    </span>
                    <span className="font-medium text-on-surface">
                      Mid-Morning Break &amp; Tuck Shop
                    </span>
                  </div>
                  <span>10:30 AM – 11:00 AM</span>
                </div>
                {/*  Period 3: Upcoming Practical Lab  */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-space-sm rounded-lg bg-surface-container-low transition-colors hover:bg-surface-container">
                  <div className="flex items-center gap-space-sm min-w-0">
                    <div className="flex flex-col items-center justify-center w-14 py-1 rounded bg-surface-container-lowest text-on-surface-variant shrink-0 font-label-sm text-label-sm text-center">
                      <span className="font-bold text-on-surface">11:00</span>
                      <span className="text-[10px] text-outline">01:00 PM</span>
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-label-lg text-label-lg text-on-surface truncate">
                          Chemistry Practical Lab: Titration Analysis
                        </span>
                        <span className="px-2 py-0.2 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-[10px]">
                          Lab A
                        </span>
                      </div>
                      <div className="text-body-sm text-body-sm text-on-surface-variant flex items-center gap-2">
                        <span>Dr. Fatima Aliyu</span>
                        <span>•</span>
                        <span>Safety Goggles &amp; Lab Coat Required</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-primary hover:bg-primary hover:text-on-primary font-label-sm text-label-sm flex items-center gap-1 transition-colors shadow-sm"
                      href="#"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        science
                      </span>
                      <span>Lab Manual (.pdf)</span>
                    </a>
                  </div>
                </div>
                {/*  Dhuhr Prayer Interlude  */}
                <div className="flex items-center justify-between px-space-md py-2 rounded-lg bg-secondary-fixed/40 text-on-secondary-fixed-variant font-label-sm text-label-sm">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-secondary">
                      mosque
                    </span>
                    <span className="font-semibold">
                      Dhuhr Congregational Prayer &amp; Tajweed Reflection
                    </span>
                  </div>
                  <span>01:15 PM – 02:00 PM • School Mosque</span>
                </div>
              </div>
            </section>
            {/*  Active Homework & Assignments Deck  */}
            <section className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-md">
                <div className="flex items-center gap-space-sm">
                  <div className="w-8 h-8 rounded-lg bg-tertiary-fixed flex items-center justify-center text-tertiary">
                    <span className="material-symbols-outlined text-[20px]">
                      assignment
                    </span>
                  </div>
                  <div>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">
                      Active Homework &amp; Project Deliverables
                    </h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Continuous Assessment Term 1 weight: 30% of total grade
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-label-sm text-label-sm text-outline">
                    Filter:
                  </span>
                  <span className="px-2.5 py-1 rounded bg-primary-fixed text-primary font-label-sm text-label-sm font-semibold">
                    All Pending (3)
                  </span>
                </div>
              </div>
              <div className="space-y-4 mt-space-sm">
                {/*  Assignment Card 1: Physics Wave Optics (Rich Card with File Upload)  */}
                <div className="rounded-xl bg-surface-container-low p-space-md transition-all hover:bg-surface-container">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px]">
                          alarm
                        </span>
                        Due Monday, 20 Oct 2026 (11:59 PM)
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                        Physics Lab 3
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold">
                      Status: Draft Saved (v1.2)
                    </span>
                  </div>
                  <div className="mt-2">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">
                      Wave Optics Practical Experiment Report
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Formal laboratory write-up on Young's Double Slit
                      experiment. Must detail fringe width derivation, fringe
                      spacing calibration charts, error analysis, and optical
                      laser frequency calculation.
                    </p>
                  </div>
                  {/*  Rubric Breakdown snippet  */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-3 p-space-sm rounded-lg bg-surface-container-lowest font-body-sm text-body-sm">
                    <div>
                      <span className="text-[11px] text-outline uppercase block font-label-sm">
                        Total Weight
                      </span>
                      <span className="font-semibold text-primary">
                        15 Marks (CA)
                      </span>
                    </div>
                    <div>
                      <span className="text-[11px] text-outline uppercase block font-label-sm">
                        Word Count
                      </span>
                      <span className="font-semibold text-on-surface">
                        1,240 / 1,500
                      </span>
                    </div>
                    <div>
                      <span className="text-[11px] text-outline uppercase block font-label-sm">
                        Lab Partner
                      </span>
                      <span className="font-semibold text-on-surface">
                        Zainab Al-Hassan
                      </span>
                    </div>
                    <div>
                      <span className="text-[11px] text-outline uppercase block font-label-sm">
                        Instructor
                      </span>
                      <span className="font-semibold text-on-surface">
                        Malam Garba Usman
                      </span>
                    </div>
                  </div>
                  {/*  Drag & Drop / File Upload Component  */}
                  <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-inner flex flex-col sm:flex-row items-center justify-between gap-space-md">
                    <div className="flex items-center gap-space-sm min-w-0">
                      <div className="w-10 h-10 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary shrink-0">
                        <span className="material-symbols-outlined text-[24px]">
                          description
                        </span>
                      </div>
                      <div className="min-w-0">
                        <p className="font-label-md text-label-md text-on-surface font-medium truncate">
                          Aisha_Danbaba_WaveOptics_LabReport_v1.2.docx
                        </p>
                        <p className="font-body-sm text-[11px] text-outline">
                          Uploaded yesterday at 08:45 PM • 2.4 MB •
                          Auto-plagiarism score: 4% (Clear)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <label className="px-3.5 py-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md cursor-pointer transition-colors flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px]">
                          sync
                        </span>
                        <span>Replace File</span>
                        <input
                          accept=".pdf,.docx"
                          className="hidden"
                          type="file"
                        />
                      </label>
                      <button
                        className="px-4 py-1.5 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md transition-colors shadow-sm flex items-center gap-1.5"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          send
                        </span>
                        <span>Final Submit</span>
                      </button>
                    </div>
                  </div>
                </div>
                {/*  Assignment Card 2: Further Maths  */}
                <div className="rounded-xl bg-surface-container-low p-space-md transition-all hover:bg-surface-container">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-bold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[13px]">
                          schedule
                        </span>
                        Due Wednesday, 22 Oct 2026
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                        Further Maths Arm A
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold">
                      In Progress (3 of 15 solved)
                    </span>
                  </div>
                  <div className="mt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">
                        Trigonometric Identities Problem Set #4
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        Solving compound angles, double-angle proofs, and
                        sinusoidal coordinate transformations using WAEC/NECO
                        10-year exemplar standards.
                      </p>
                    </div>
                    <div className="shrink-0 flex items-center gap-2">
                      <a
                        className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-primary hover:bg-primary hover:text-on-primary font-label-sm text-label-sm flex items-center gap-1 transition-colors shadow-sm"
                        href="#"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          edit_note
                        </span>
                        <span>Open Scratchpad</span>
                      </a>
                      <button
                        className="px-3 py-1.5 rounded-lg bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-semibold hover:bg-primary hover:text-on-primary transition-colors"
                        type="button"
                      >
                        Upload Scanned Working
                      </button>
                    </div>
                  </div>
                  {/*  Progress mini bar  */}
                  <div className="mt-3 flex items-center gap-3">
                    <div className="flex-1 bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
                      <div className="bg-primary h-1.5 rounded-full w-[20%]"></div>
                    </div>
                    <span className="font-body-sm text-[11px] text-on-surface-variant font-mono">
                      20% Solved
                    </span>
                  </div>
                </div>
                {/*  Assignment Card 3: English Literature  */}
                <div className="rounded-xl bg-surface-container-low p-space-md transition-all hover:bg-surface-container">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm font-medium">
                        Due Friday, 24 Oct 2026
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                        English Literature
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                      Status: Assigned
                    </span>
                  </div>
                  <div className="mt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">
                        African Prose Essay: Post-Colonial Themes in Achebe
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        1,000 words analyzing thematic tensions between
                        tradition and modern governance in Chinua Achebe's
                        'Arrow of God'. WAEC criterion marking scheme.
                      </p>
                    </div>
                    <div className="shrink-0 flex items-center gap-2">
                      <button
                        className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-primary hover:bg-surface-container-high font-label-sm text-label-sm transition-colors shadow-sm flex items-center gap-1"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          visibility
                        </span>
                        <span>View Prompt</span>
                      </button>
                      <button
                        className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high font-label-sm text-label-sm transition-colors"
                        type="button"
                      >
                        Start Online Draft
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/*  Continuous Assessment Scores & Teacher Remarks  */}
            <section className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-md">
                <div className="flex items-center gap-space-sm">
                  <div className="w-8 h-8 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[20px]">
                      grading
                    </span>
                  </div>
                  <div>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">
                      Recent CA Scores &amp; Teacher Feedback
                    </h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Continuous Assessment feedback loop from subject educators
                    </p>
                  </div>
                </div>
                <a
                  className="font-label-sm text-label-sm text-primary font-semibold flex items-center gap-1 hover:underline"
                  href="#"
                >
                  <span>View Full Term Markbook</span>
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md mt-space-sm">
                {/*  Score Card 1  */}
                <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between gap-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                        Biology Test 1
                      </span>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface">
                        Cellular Osmosis &amp; Plasmolysis
                      </h4>
                    </div>
                    <div className="text-right">
                      <span className="font-headline-lg text-headline-lg text-secondary font-bold">
                        19
                        <span className="text-sm font-normal text-on-surface-variant">
                          /20
                        </span>
                      </span>
                      <span className="block font-label-sm text-[10px] text-secondary font-bold uppercase">
                        95.0% (A1)
                      </span>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-surface-container-lowest font-body-sm text-body-sm text-on-surface-variant">
                    <span className="font-semibold text-on-surface">
                      Mrs. Hauwa Yakubu:
                    </span>
                    "Exceptional breakdown of hypertonic cellular shrinkage and
                    osmotic gradients. Diagram notations were of national
                    Olympiad caliber. Well done Aisha."
                  </div>
                  <div className="flex items-center justify-between text-body-sm text-[11px] text-outline">
                    <span>Returned: 14 Oct 2026</span>
                    <span className="text-primary font-medium">
                      Class Rank: 1st
                    </span>
                  </div>
                </div>
                {/*  Score Card 2  */}
                <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between gap-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                        Chemistry Quiz 2
                      </span>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface">
                        Periodic Table Periodicity &amp; Halogens
                      </h4>
                    </div>
                    <div className="text-right">
                      <span className="font-headline-lg text-headline-lg text-primary font-bold">
                        18
                        <span className="text-sm font-normal text-on-surface-variant">
                          /20
                        </span>
                      </span>
                      <span className="block font-label-sm text-[10px] text-primary font-bold uppercase">
                        90.0% (A1)
                      </span>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-surface-container-lowest font-body-sm text-body-sm text-on-surface-variant">
                    <span className="font-semibold text-on-surface">
                      Dr. Fatima Aliyu:
                    </span>
                    "Very sound conceptual grasp of electronegativity trends
                    down Group 7. Review question #14 regarding fluorine's
                    anomalous electron affinity."
                  </div>
                  <div className="flex items-center justify-between text-body-sm text-[11px] text-outline">
                    <span>Returned: 12 Oct 2026</span>
                    <span className="text-primary font-medium">
                      Class Rank: 2nd
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/*  RIGHT CONTEXTUAL RAIL (4 cols ~ 33%)  */}
          <div className="lg:col-span-4 flex flex-col gap-space-lg">
            {/*  Exam Countdown & Assessment Hub  */}
            <section className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
              <div className="flex items-center justify-between pb-space-sm">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    notifications_active
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Mid-Term Assessments
                  </h3>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold">
                  14 Days Left
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Kaduna Ministry of Education unified midterm schedule commences
                Monday, 03 Nov 2026.
              </p>
              {/*  Countdown timer visual  */}
              <div className="grid grid-cols-4 gap-2 my-space-md text-center">
                <div className="p-2 rounded-lg bg-surface-container-low">
                  <span className="block font-headline-lg text-headline-lg text-primary font-bold">
                    14
                  </span>
                  <span className="font-label-sm text-[10px] text-outline uppercase">
                    Days
                  </span>
                </div>
                <div className="p-2 rounded-lg bg-surface-container-low">
                  <span className="block font-headline-lg text-headline-lg text-primary font-bold">
                    06
                  </span>
                  <span className="font-label-sm text-[10px] text-outline uppercase">
                    Hours
                  </span>
                </div>
                <div className="p-2 rounded-lg bg-surface-container-low">
                  <span className="block font-headline-lg text-headline-lg text-primary font-bold">
                    42
                  </span>
                  <span className="font-label-sm text-[10px] text-outline uppercase">
                    Mins
                  </span>
                </div>
                <div className="p-2 rounded-lg bg-surface-container-low">
                  <span className="block font-headline-lg text-headline-lg text-secondary font-bold">
                    08
                  </span>
                  <span className="font-label-sm text-[10px] text-outline uppercase">
                    Papers
                  </span>
                </div>
              </div>
              {/*  Syllabus Checklist  */}
              <div className="space-y-2 mt-2">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block">
                  Syllabus Revision Checklist
                </span>
                <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low font-body-sm text-body-sm">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[18px]">
                      check_box
                    </span>
                    <span className="text-on-surface line-through text-outline">
                      Physics (Optics &amp; Mechanics)
                    </span>
                  </div>
                  <span className="font-label-sm text-[11px] text-secondary font-semibold">
                    Ready
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low font-body-sm text-body-sm">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      check_box_outline_blank
                    </span>
                    <span className="text-on-surface">
                      Further Maths (Trigonometry)
                    </span>
                  </div>
                  <span className="font-label-sm text-[11px] text-primary font-semibold">
                    68%
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low font-body-sm text-body-sm">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-outline text-[18px]">
                      check_box_outline_blank
                    </span>
                    <span className="text-on-surface">
                      Chemistry (Stoichiometry)
                    </span>
                  </div>
                  <span className="font-label-sm text-[11px] text-outline font-semibold">
                    45%
                  </span>
                </div>
              </div>
              <a
                className="mt-space-md w-full py-2.5 rounded-lg bg-surface-container text-primary hover:bg-surface-container-high font-label-md text-label-md flex items-center justify-center gap-1.5 transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-[18px]">
                  event
                </span>
                <span>Download Examination Timetable</span>
              </a>
            </section>
            {/*  Digital Learning Resource Locker  */}
            <section className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
              <div className="flex items-center justify-between pb-space-sm">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    local_library
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Digital Resource Locker
                  </h3>
                </div>
                <span className="font-label-sm text-label-sm text-primary font-semibold">
                  e-Library
                </span>
              </div>
              {/*  Borrowed physical book alert  */}
              <div className="p-space-sm rounded-lg bg-secondary-fixed/30 flex items-center gap-space-sm my-2">
                <span className="material-symbols-outlined text-secondary text-[24px]">
                  book
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-label-sm text-label-sm text-on-secondary-fixed-variant font-bold truncate">
                    New General Mathematics for SSS 2
                  </p>
                  <p className="font-body-sm text-[11px] text-on-secondary-fixed-variant">
                    Library Barcode #BK-9021 • Return due in 8 days
                  </p>
                </div>
                <button
                  className="px-2 py-1 rounded bg-secondary text-on-secondary font-label-sm text-[11px] shrink-0"
                  type="button"
                >
                  Renew
                </button>
              </div>
              {/*  Curated Resources Links  */}
              <div className="space-y-2.5 mt-space-sm">
                <a
                  className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors group"
                  href="#"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="material-symbols-outlined text-[20px] text-primary">
                      school
                    </span>
                    <div className="min-w-0">
                      <span className="font-label-md text-label-md text-on-surface block truncate">
                        Kaduna MoE E-Curriculum Repository
                      </span>
                      <span className="font-body-sm text-[11px] text-outline block">
                        Approved senior secondary syllabus texts
                      </span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-[18px] text-outline group-hover:text-primary transition-colors">
                    launch
                  </span>
                </a>
                <a
                  className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors group"
                  href="#"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="material-symbols-outlined text-[20px] text-primary">
                      history_edu
                    </span>
                    <div className="min-w-0">
                      <span className="font-label-md text-label-md text-on-surface block truncate">
                        WAEC &amp; NECO 10-Year Question Bank
                      </span>
                      <span className="font-body-sm text-[11px] text-outline block">
                        Physics, Chem, F/Maths with step-by-step marking
                      </span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-[18px] text-outline group-hover:text-primary transition-colors">
                    launch
                  </span>
                </a>
                <a
                  className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors group"
                  href="#"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="material-symbols-outlined text-[20px] text-secondary">
                      play_circle
                    </span>
                    <div className="min-w-0">
                      <span className="font-label-md text-label-md text-on-surface block truncate">
                        Virtual Science Lab Demonstrations
                      </span>
                      <span className="font-body-sm text-[11px] text-outline block">
                        3D Optics &amp; Chemical Reaction simulations
                      </span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-[18px] text-outline group-hover:text-primary transition-colors">
                    launch
                  </span>
                </a>
              </div>
            </section>
            {/*  House Points & Virtues Leaderboard  */}
            <section className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
              <div className="flex items-center justify-between pb-space-sm">
                <div className="flex items-center gap-space-xs">
                  <span
                    className="material-symbols-outlined text-secondary text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    shield
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Inter-House Championship
                  </h3>
                </div>
                <span className="font-label-sm text-label-sm text-secondary font-bold">
                  Week 6
                </span>
              </div>
              {/*  House Ranking Progress  */}
              <div className="p-space-md rounded-xl bg-secondary-fixed/20 mt-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-secondary text-on-secondary font-bold text-xs flex items-center justify-center">
                      1st
                    </span>
                    <div>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Danfodiyo House
                      </span>
                      <span className="block font-body-sm text-[11px] text-on-secondary-fixed-variant">
                        House Color: Forest Emerald
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-headline-lg text-headline-lg text-secondary font-extrabold">
                      1,420
                    </span>
                    <span className="block font-label-sm text-[10px] text-outline uppercase">
                      Points
                    </span>
                  </div>
                </div>
                {/*  Aisha personal tally  */}
                <div className="mt-3 pt-3 flex items-center justify-between font-body-sm text-body-sm">
                  <span className="text-on-surface-variant">
                    Aisha's Personal Contribution:
                  </span>
                  <span className="font-bold text-secondary font-label-md text-label-md">
                    +85 pts
                  </span>
                </div>
                <div className="mt-1 flex flex-wrap gap-1">
                  <span className="px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface text-[10px] font-medium">
                    +50 Academic Quiz
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface text-[10px] font-medium">
                    +35 Tajweed Recitation
                  </span>
                </div>
              </div>
              {/*  Other Houses Mini Comparison  */}
              <div className="space-y-2 mt-space-sm pt-2">
                <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low font-body-sm text-body-sm">
                  <div className="flex items-center gap-2">
                    <span className="font-label-sm text-xs font-bold text-outline w-4">
                      2
                    </span>
                    <span className="text-on-surface font-medium">
                      Bello House (Blue)
                    </span>
                  </div>
                  <span className="font-mono font-semibold text-on-surface">
                    1,385 pts
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low font-body-sm text-body-sm">
                  <div className="flex items-center gap-2">
                    <span className="font-label-sm text-xs font-bold text-outline w-4">
                      3
                    </span>
                    <span className="text-on-surface font-medium">
                      Aminu Kano House (Gold)
                    </span>
                  </div>
                  <span className="font-mono font-semibold text-on-surface">
                    1,290 pts
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low font-body-sm text-body-sm">
                  <div className="flex items-center gap-2">
                    <span className="font-label-sm text-xs font-bold text-outline w-4">
                      4
                    </span>
                    <span className="text-on-surface font-medium">
                      Queen Amina House (Purple)
                    </span>
                  </div>
                  <span className="font-mono font-semibold text-on-surface">
                    1,215 pts
                  </span>
                </div>
              </div>
            </section>
            {/*  Campus Life & Study Group Notice  */}
            <div className="rounded-xl bg-gradient-to-br from-primary-container to-primary p-space-md text-on-primary shadow-sm">
              <div className="flex items-center gap-2 text-secondary-fixed">
                <span className="material-symbols-outlined text-[20px]">
                  groups
                </span>
                <span className="font-label-md text-label-md font-bold uppercase tracking-wider">
                  Peer Study Circle
                </span>
              </div>
              <h4 className="font-headline-sm text-headline-sm mt-1 text-on-primary">
                SSS 2 Science Olympiad Squad
              </h4>
              <p className="font-body-sm text-body-sm text-primary-fixed mt-1">
                Weekly session convenes Saturday, 10:00 AM at the Main Physics
                Lab. Lead topic: Optics &amp; Wave Mechanics problem sets.
              </p>
              <div className="mt-3 flex items-center justify-between pt-2">
                <span className="font-body-sm text-[11px] text-primary-fixed">
                  6 Classmates Attending
                </span>
                <button
                  className="px-3 py-1 rounded bg-surface-container-lowest text-primary hover:bg-surface-container-high font-label-sm text-label-sm font-semibold transition-colors"
                  type="button"
                >
                  Confirm RSVP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
