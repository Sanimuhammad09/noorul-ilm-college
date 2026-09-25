import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(
  "/admin/timetable-master-academic-scheduling",
)({
  component: TimetableMasterAcademicScheduling,
});

function TimetableMasterAcademicScheduling() {
  return (
    <main className="w-full pt-16 px-space-lg py-space-lg flex-1 bg-background">
      <div className="flex flex-col w-full space-y-space-lg">
        {/*  Breadcrumb Navigation & Top System Status Banner  */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md"
          >
            <span className="hover:text-primary transition-colors cursor-pointer">
              Academic Management
            </span>
            <span className="material-symbols-outlined text-[14px] text-outline">
              chevron_right
            </span>
            <span className="hover:text-primary transition-colors cursor-pointer">
              Timetable &amp; Scheduling
            </span>
            <span className="material-symbols-outlined text-[14px] text-outline">
              chevron_right
            </span>
            <span className="text-primary font-semibold">
              Master Class Schedule (2026/2027 1st Term)
            </span>
          </nav>
          <div className="flex items-center gap-space-xs px-space-sm py-1 bg-surface-container-high rounded-full w-fit">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="font-label-sm text-label-sm text-on-surface font-medium">
              Scheduler Engine: v4.8 Active • Kaduna State Harmonized Calendar
              Sync
            </span>
          </div>
        </div>
        {/*  Page Title & Primary Workflow Actions  */}
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md">
          <div className="space-y-1">
            <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Master Timetable &amp; Classroom Allocation
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
              Conflict-free period scheduling, lab allocations, and teacher
              workload balancing across Primary, JSS, and SSS branches.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-space-xs">
            <button
              className="inline-flex items-center gap-1.5 px-space-md py-2 bg-secondary-container text-on-secondary-container hover:bg-secondary-fixed rounded-lg font-label-md text-label-md font-semibold transition-all shadow-sm"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">
                verified
              </span>
              <span>Conflict Check (0 Found)</span>
            </button>
            <button
              className="inline-flex items-center gap-1.5 px-space-md py-2 bg-surface-container-lowest text-on-surface hover:bg-surface-container-high rounded-lg font-label-md text-label-md font-semibold transition-all shadow-sm"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">
                file_download
              </span>
              <span>Export (PDF/XLSX)</span>
            </button>
            <button
              className="inline-flex items-center gap-1.5 px-space-md py-2 bg-surface-container-high text-primary hover:bg-primary-fixed rounded-lg font-label-md text-label-md font-semibold transition-all shadow-sm"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">
                cloud_upload
              </span>
              <span>Publish to Portals</span>
            </button>
            <button
              className="inline-flex items-center gap-1.5 px-space-md py-2 bg-primary text-on-primary hover:bg-primary-container rounded-lg font-label-md text-label-md font-semibold transition-all shadow-sm"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">
                add_circle
              </span>
              <span>Schedule New Period</span>
            </button>
          </div>
        </div>
        {/*  Top Operational Stat Metric Bento Cards  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {/*  Stat 1: Scheduled Periods  */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                  Scheduled Periods / Wk
                </span>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-metric-lg text-metric-lg text-primary">
                    1,240
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    / 1,280
                  </span>
                </div>
              </div>
              <div className="p-2 bg-surface-container-high rounded-lg text-primary">
                <span className="material-symbols-outlined text-[20px]">
                  calendar_view_week
                </span>
              </div>
            </div>
            <div className="mt-4 space-y-1">
              <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                <span>96.8% Allocated</span>
                <span className="text-secondary font-semibold">
                  40 Slots Left
                </span>
              </div>
              <div className="w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-primary h-1.5 rounded-full"
                  style={{ width: "96.8%" }}
                ></div>
              </div>
            </div>
          </div>
          {/*  Stat 2: Utilization Rate  */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                  Class &amp; Lab Utilization
                </span>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-metric-lg text-metric-lg text-secondary">
                    92.4%
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary bg-secondary-container px-1.5 py-0.5 rounded-full">
                    Peak
                  </span>
                </div>
              </div>
              <div className="p-2 bg-secondary-container rounded-lg text-on-secondary-container">
                <span className="material-symbols-outlined text-[20px]">
                  science
                </span>
              </div>
            </div>
            <div className="mt-4">
              <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                Kaduna Science &amp; ICT Labs heavily engaged
              </p>
            </div>
          </div>
          {/*  Stat 3: Teacher Weekly Load  */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                  Teacher Weekly Load Avg
                </span>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-metric-lg text-metric-lg text-on-surface">
                    18.4
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Periods / Wk
                  </span>
                </div>
              </div>
              <div className="p-2 bg-surface-container-high rounded-lg text-primary">
                <span className="material-symbols-outlined text-[20px]">
                  groups
                </span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-[16px] text-secondary">
                check_circle
              </span>
              <span>
                Max safety threshold: <strong>22 periods</strong>
              </span>
            </div>
          </div>
          {/*  Stat 4: Active Conflicts  */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                  Active Conflicts
                </span>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-metric-lg text-metric-lg text-on-secondary-container">
                    0
                  </span>
                  <span className="font-label-sm text-label-sm text-on-secondary-container bg-secondary-container px-2 py-0.5 rounded-full font-semibold">
                    Zero Clashes
                  </span>
                </div>
              </div>
              <div className="p-2 bg-secondary-container rounded-lg text-secondary">
                <span className="material-symbols-outlined text-[20px]">
                  auto_fix_high
                </span>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
              <span>Continuous AI checking</span>
              <span className="text-primary font-medium hover:underline cursor-pointer">
                Run Audit
              </span>
            </div>
          </div>
        </div>
        {/*  Interactive Control Panel & Filters Matrix  */}
        <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-md">
          {/*  View Switcher Segmented Tabs  */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-sm pb-space-sm">
            <div className="inline-flex p-1 bg-surface-container-low rounded-xl">
              <button
                className="px-space-md py-1.5 rounded-lg bg-surface-container-lowest font-label-md text-label-md text-primary font-semibold shadow-sm transition-all flex items-center gap-1.5"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">
                  school
                </span>
                <span>Class Timetable (Active)</span>
              </button>
              <button
                className="px-space-md py-1.5 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-1.5"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">
                  person
                </span>
                <span>Teacher Timetable</span>
              </button>
              <button
                className="px-space-md py-1.5 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-1.5"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">
                  meeting_room
                </span>
                <span>Room &amp; Lab Allocation</span>
              </button>
              <button
                className="px-space-md py-1.5 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-1.5"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">
                  assignment
                </span>
                <span>Exam Hall Master</span>
              </button>
            </div>
            {/*  Quick Toggles  */}
            <div className="flex items-center gap-space-md">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  defaultChecked
                  className="w-4 h-4 rounded text-primary focus:ring-0 cursor-pointer accent-primary"
                  type="checkbox"
                />
                <span className="font-label-sm text-label-sm text-on-surface">
                  Show Teacher Names
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  defaultChecked
                  className="w-4 h-4 rounded text-secondary focus:ring-0 cursor-pointer accent-secondary"
                  type="checkbox"
                />
                <span className="font-label-sm text-label-sm text-on-surface">
                  Highlight Practical Labs
                </span>
              </label>
              <div className="h-4 w-px bg-surface-container-high hidden sm:block"></div>
              <button
                className="text-primary hover:text-primary-container font-label-sm text-label-sm flex items-center gap-1"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">
                  refresh
                </span>
                <span>Reset Filters</span>
              </button>
            </div>
          </div>
          {/*  Parameter Filter Selectors  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-sm pt-2">
            <div className="space-y-1">
              <label className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                Department / Division
              </label>
              <div className="relative">
                <select className="w-full h-10 px-3 pr-8 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface appearance-none focus:outline-none focus:bg-surface-container-lowest transition-all">
                  <option>Senior Secondary School (SSS)</option>
                  <option>Junior Secondary School (JSS)</option>
                  <option>Primary &amp; Tahfeez Section</option>
                  <option>Early Childhood &amp; Nursery</option>
                </select>
                <span className="material-symbols-outlined text-[18px] text-outline absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none">
                  unfold_more
                </span>
              </div>
            </div>
            <div className="space-y-1">
              <label className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                Target Class &amp; Arm
              </label>
              <div className="relative">
                <select className="w-full h-10 px-3 pr-8 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface appearance-none focus:outline-none focus:bg-surface-container-lowest transition-all font-semibold">
                  <option>SSS 2 Science Arm A (Selected)</option>
                  <option>SSS 2 Science Arm B</option>
                  <option>SSS 2 Arts &amp; Humanities</option>
                  <option>SSS 2 Commercial</option>
                  <option>SSS 3 Science Arm A</option>
                </select>
                <span className="material-symbols-outlined text-[18px] text-outline absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none">
                  unfold_more
                </span>
              </div>
            </div>
            <div className="space-y-1">
              <label className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                Academic Term
              </label>
              <div className="relative">
                <select className="w-full h-10 px-3 pr-8 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface appearance-none focus:outline-none focus:bg-surface-container-lowest transition-all">
                  <option>1st Term 2026/2027 (Harmattan)</option>
                  <option>2nd Term 2026/2027</option>
                  <option>3rd Term 2026/2027</option>
                </select>
                <span className="material-symbols-outlined text-[18px] text-outline absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none">
                  unfold_more
                </span>
              </div>
            </div>
            <div className="space-y-1">
              <label className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                Week Configuration
              </label>
              <div className="relative">
                <select className="w-full h-10 px-3 pr-8 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface appearance-none focus:outline-none focus:bg-surface-container-lowest transition-all">
                  <option>5-Day Week (Mon - Fri Full Day)</option>
                  <option>Split Friday (Early Dhuhr Dismissal)</option>
                  <option>Weekend Revision Track</option>
                </select>
                <span className="material-symbols-outlined text-[18px] text-outline absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none">
                  unfold_more
                </span>
              </div>
            </div>
          </div>
        </div>
        {/*  Main Academic Schedule & Real-time Resource Drawer Layout  */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-md items-start">
          {/*  Left Area: The Full Timetable Grid (9 Columns on XL)  */}
          <div className="xl:col-span-9 bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
            {/*  Grid Top Info Ribbon  */}
            <div className="px-space-md py-3 bg-surface-container-low flex flex-wrap items-center justify-between gap-space-sm">
              <div className="flex items-center gap-space-sm">
                <span className="font-headline-sm text-headline-sm text-primary">
                  Class SSS 2 Science Arm A
                </span>
                <span className="bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm px-2 py-0.5 rounded-full font-semibold">
                  Capacity: 34 / 35
                </span>
                <span className="text-on-surface-variant font-body-sm text-body-sm">
                  Homeroom: Room S-12 (Ground Floor North)
                </span>
              </div>
              <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-sm bg-secondary"></span>{" "}
                  Lab Practical
                </span>
                <span className="mx-1">•</span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-sm bg-primary"></span>{" "}
                  Core Theory
                </span>
                <span className="mx-1">•</span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-sm bg-tertiary-container"></span>{" "}
                  Religious &amp; Language
                </span>
              </div>
            </div>
            {/*  Schedule Table with Horizontal Scroll Guard  */}
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse min-w-[1000px]">
                <thead>
                  <tr className="bg-surface-container-high/60 text-on-surface font-label-sm text-label-sm uppercase tracking-wider">
                    <th className="py-3 px-3 w-28 font-semibold text-center sticky left-0 bg-surface-container-high z-10">
                      Period &amp; Time
                    </th>
                    <th className="py-3 px-2 font-semibold text-center w-[18%]">
                      Monday
                    </th>
                    <th className="py-3 px-2 font-semibold text-center w-[18%]">
                      Tuesday
                    </th>
                    <th className="py-3 px-2 font-semibold text-center w-[18%]">
                      Wednesday
                    </th>
                    <th className="py-3 px-2 font-semibold text-center w-[18%]">
                      Thursday
                    </th>
                    <th className="py-3 px-2 font-semibold text-center w-[18%]">
                      Friday
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container-low font-body-sm text-body-sm">
                  {/*  Assembly & Devotion  */}
                  <tr className="bg-surface-container-low/50">
                    <td className="py-2 px-3 text-center sticky left-0 bg-surface-container-low font-semibold text-on-surface-variant">
                      <span className="block font-label-sm text-label-sm text-primary">
                        07:45 - 08:15
                      </span>
                      <span className="text-[10px] text-outline uppercase font-medium">
                        30 Mins
                      </span>
                    </td>
                    <td className="py-2 px-4 text-center" colSpan={5}>
                      <div className="flex items-center justify-center gap-2 text-on-surface-variant font-label-md text-label-md font-medium">
                        <span className="material-symbols-outlined text-[18px] text-secondary">
                          wb_sunny
                        </span>
                        <span>
                          General Morning Assembly, Devotion &amp; National /
                          State Anthem (Assembly Grounds &amp; Mosque Pavilion)
                        </span>
                      </div>
                    </td>
                  </tr>
                  {/*  Period 1  */}
                  <tr>
                    <td className="py-3 px-3 text-center sticky left-0 bg-surface-container-lowest font-medium text-on-surface">
                      <span className="block font-label-sm text-label-sm text-primary font-bold">
                        P1
                      </span>
                      <span className="block text-[11px] text-outline">
                        08:15 - 09:00
                      </span>
                    </td>
                    {/*  Mon  */}
                    <td className="p-1.5">
                      <div className="bg-secondary-container/40 hover:bg-secondary-container/60 transition-all rounded-lg p-2 flex flex-col justify-between h-20 shadow-xs cursor-pointer group">
                        <div className="flex items-start justify-between">
                          <span className="font-label-md text-label-md font-bold text-on-secondary-container">
                            Mathematics
                          </span>
                          <span className="material-symbols-outlined text-[14px] text-on-secondary-container opacity-0 group-hover:opacity-100 transition-opacity">
                            edit
                          </span>
                        </div>
                        <div>
                          <span className="font-body-sm text-[11px] text-on-surface-variant block truncate">
                            Mr. Usman Bello
                          </span>
                          <div className="flex items-center justify-between mt-1">
                            <span className="bg-surface-container-lowest font-label-sm text-[10px] px-1.5 py-0.5 rounded text-on-surface font-semibold">
                              Rm S-12
                            </span>
                            <span className="text-[9px] uppercase font-bold text-secondary">
                              Core
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/*  Tue  */}
                    <td className="p-1.5">
                      <div className="bg-surface-container-high/50 hover:bg-surface-container-high transition-all rounded-lg p-2 flex flex-col justify-between h-20 shadow-xs cursor-pointer group">
                        <div className="flex items-start justify-between">
                          <span className="font-label-md text-label-md font-bold text-primary">
                            Chemistry
                          </span>
                          <span className="material-symbols-outlined text-[14px] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                            edit
                          </span>
                        </div>
                        <div>
                          <span className="font-body-sm text-[11px] text-on-surface-variant block truncate">
                            Dr. Fatima Aliyu
                          </span>
                          <div className="flex items-center justify-between mt-1">
                            <span className="bg-surface-container-lowest font-label-sm text-[10px] px-1.5 py-0.5 rounded text-on-surface font-semibold">
                              Rm S-12
                            </span>
                            <span className="text-[9px] uppercase font-bold text-primary">
                              Theory
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/*  Wed  */}
                    <td className="p-1.5">
                      <div className="bg-surface-container-high/50 hover:bg-surface-container-high transition-all rounded-lg p-2 flex flex-col justify-between h-20 shadow-xs cursor-pointer group">
                        <div className="flex items-start justify-between">
                          <span className="font-label-md text-label-md font-bold text-primary">
                            English Lang.
                          </span>
                          <span className="material-symbols-outlined text-[14px] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                            edit
                          </span>
                        </div>
                        <div>
                          <span className="font-body-sm text-[11px] text-on-surface-variant block truncate">
                            Malama Zainab Kabir
                          </span>
                          <div className="flex items-center justify-between mt-1">
                            <span className="bg-surface-container-lowest font-label-sm text-[10px] px-1.5 py-0.5 rounded text-on-surface font-semibold">
                              Rm S-12
                            </span>
                            <span className="text-[9px] uppercase font-bold text-primary">
                              Core
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/*  Thu  */}
                    <td className="p-1.5">
                      <div className="bg-secondary-container/50 hover:bg-secondary-container/70 transition-all rounded-lg p-2 flex flex-col justify-between h-20 shadow-xs cursor-pointer group">
                        <div className="flex items-start justify-between">
                          <span className="font-label-md text-label-md font-bold text-on-secondary-container">
                            Biology Practical
                          </span>
                          <span className="material-symbols-outlined text-[14px] text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                            edit
                          </span>
                        </div>
                        <div>
                          <span className="font-body-sm text-[11px] text-on-surface-variant block truncate">
                            Mrs. Grace Okafor
                          </span>
                          <div className="flex items-center justify-between mt-1">
                            <span className="bg-surface-container-lowest font-label-sm text-[10px] px-1.5 py-0.5 rounded text-secondary font-bold">
                              Bio Lab 1
                            </span>
                            <span className="text-[9px] uppercase font-bold text-secondary">
                              Double Block
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/*  Fri  */}
                    <td className="p-1.5">
                      <div className="bg-tertiary-fixed/40 hover:bg-tertiary-fixed/60 transition-all rounded-lg p-2 flex flex-col justify-between h-20 shadow-xs cursor-pointer group">
                        <div className="flex items-start justify-between">
                          <span className="font-label-md text-label-md font-bold text-tertiary">
                            Islamic Studies
                          </span>
                          <span className="material-symbols-outlined text-[14px] text-tertiary opacity-0 group-hover:opacity-100 transition-opacity">
                            edit
                          </span>
                        </div>
                        <div>
                          <span className="font-body-sm text-[11px] text-on-surface-variant block truncate">
                            Ustaz Bashir Lawal
                          </span>
                          <div className="flex items-center justify-between mt-1">
                            <span className="bg-surface-container-lowest font-label-sm text-[10px] px-1.5 py-0.5 rounded text-on-surface font-semibold">
                              Rm S-12
                            </span>
                            <span className="text-[9px] uppercase font-bold text-tertiary">
                              IRS
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  {/*  Period 2  */}
                  <tr>
                    <td className="py-3 px-3 text-center sticky left-0 bg-surface-container-lowest font-medium text-on-surface">
                      <span className="block font-label-sm text-label-sm text-primary font-bold">
                        P2
                      </span>
                      <span className="block text-[11px] text-outline">
                        09:00 - 09:45
                      </span>
                    </td>
                    {/*  Mon  */}
                    <td className="p-1.5">
                      <div className="bg-secondary-container/40 hover:bg-secondary-container/60 transition-all rounded-lg p-2 flex flex-col justify-between h-20 shadow-xs cursor-pointer group">
                        <div className="flex items-start justify-between">
                          <span className="font-label-md text-label-md font-bold text-on-secondary-container">
                            Further Maths
                          </span>
                          <span className="material-symbols-outlined text-[14px] text-on-secondary-container opacity-0 group-hover:opacity-100 transition-opacity">
                            edit
                          </span>
                        </div>
                        <div>
                          <span className="font-body-sm text-[11px] text-on-surface-variant block truncate">
                            Mr. Usman Bello
                          </span>
                          <div className="flex items-center justify-between mt-1">
                            <span className="bg-surface-container-lowest font-label-sm text-[10px] px-1.5 py-0.5 rounded text-on-surface font-semibold">
                              Rm S-12
                            </span>
                            <span className="text-[9px] uppercase font-bold text-secondary">
                              Elec
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/*  Tue  */}
                    <td className="p-1.5">
                      <div className="bg-surface-container-high/50 hover:bg-surface-container-high transition-all rounded-lg p-2 flex flex-col justify-between h-20 shadow-xs cursor-pointer group">
                        <div className="flex items-start justify-between">
                          <span className="font-label-md text-label-md font-bold text-primary">
                            Physics Theory
                          </span>
                          <span className="material-symbols-outlined text-[14px] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                            edit
                          </span>
                        </div>
                        <div>
                          <span className="font-body-sm text-[11px] text-on-surface-variant block truncate">
                            Mal. Garba Sanusi
                          </span>
                          <div className="flex items-center justify-between mt-1">
                            <span className="bg-surface-container-lowest font-label-sm text-[10px] px-1.5 py-0.5 rounded text-on-surface font-semibold">
                              Rm S-12
                            </span>
                            <span className="text-[9px] uppercase font-bold text-primary">
                              Core
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/*  Wed  */}
                    <td className="p-1.5">
                      <div className="bg-surface-container-high/50 hover:bg-surface-container-high transition-all rounded-lg p-2 flex flex-col justify-between h-20 shadow-xs cursor-pointer group">
                        <div className="flex items-start justify-between">
                          <span className="font-label-md text-label-md font-bold text-primary">
                            English Lit.
                          </span>
                          <span className="material-symbols-outlined text-[14px] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                            edit
                          </span>
                        </div>
                        <div>
                          <span className="font-body-sm text-[11px] text-on-surface-variant block truncate">
                            Malama Zainab Kabir
                          </span>
                          <div className="flex items-center justify-between mt-1">
                            <span className="bg-surface-container-lowest font-label-sm text-[10px] px-1.5 py-0.5 rounded text-on-surface font-semibold">
                              Rm S-12
                            </span>
                            <span className="text-[9px] uppercase font-bold text-primary">
                              Lit
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/*  Thu  */}
                    <td className="p-1.5">
                      <div className="bg-secondary-container/50 hover:bg-secondary-container/70 transition-all rounded-lg p-2 flex flex-col justify-between h-20 shadow-xs cursor-pointer group">
                        <div className="flex items-start justify-between">
                          <span className="font-label-md text-label-md font-bold text-on-secondary-container">
                            Biology Practical (II)
                          </span>
                          <span className="material-symbols-outlined text-[14px] text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                            edit
                          </span>
                        </div>
                        <div>
                          <span className="font-body-sm text-[11px] text-on-surface-variant block truncate">
                            Mrs. Grace Okafor
                          </span>
                          <div className="flex items-center justify-between mt-1">
                            <span className="bg-surface-container-lowest font-label-sm text-[10px] px-1.5 py-0.5 rounded text-secondary font-bold">
                              Bio Lab 1
                            </span>
                            <span className="text-[9px] uppercase font-bold text-secondary">
                              Lab Spec
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/*  Fri  */}
                    <td className="p-1.5">
                      <div className="bg-tertiary-fixed/40 hover:bg-tertiary-fixed/60 transition-all rounded-lg p-2 flex flex-col justify-between h-20 shadow-xs cursor-pointer group">
                        <div className="flex items-start justify-between">
                          <span className="font-label-md text-label-md font-bold text-tertiary">
                            Arabic &amp; Tahfeez
                          </span>
                          <span className="material-symbols-outlined text-[14px] text-tertiary opacity-0 group-hover:opacity-100 transition-opacity">
                            edit
                          </span>
                        </div>
                        <div>
                          <span className="font-body-sm text-[11px] text-on-surface-variant block truncate">
                            Ustaz Bashir Lawal
                          </span>
                          <div className="flex items-center justify-between mt-1">
                            <span className="bg-surface-container-lowest font-label-sm text-[10px] px-1.5 py-0.5 rounded text-on-surface font-semibold">
                              Islam Center
                            </span>
                            <span className="text-[9px] uppercase font-bold text-tertiary">
                              Halqa
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  {/*  Period 3  */}
                  <tr>
                    <td className="py-3 px-3 text-center sticky left-0 bg-surface-container-lowest font-medium text-on-surface">
                      <span className="block font-label-sm text-label-sm text-primary font-bold">
                        P3
                      </span>
                      <span className="block text-[11px] text-outline">
                        09:45 - 10:30
                      </span>
                    </td>
                    {/*  Mon  */}
                    <td className="p-1.5">
                      <div className="bg-surface-container-high/50 hover:bg-surface-container-high transition-all rounded-lg p-2 flex flex-col justify-between h-20 shadow-xs cursor-pointer group">
                        <div className="flex items-start justify-between">
                          <span className="font-label-md text-label-md font-bold text-primary">
                            Civic Education
                          </span>
                          <span className="material-symbols-outlined text-[14px] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                            edit
                          </span>
                        </div>
                        <div>
                          <span className="font-body-sm text-[11px] text-on-surface-variant block truncate">
                            Mr. John Danladi
                          </span>
                          <div className="flex items-center justify-between mt-1">
                            <span className="bg-surface-container-lowest font-label-sm text-[10px] px-1.5 py-0.5 rounded text-on-surface font-semibold">
                              Rm S-12
                            </span>
                            <span className="text-[9px] uppercase font-bold text-outline">
                              General
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/*  Tue  */}
                    <td className="p-1.5">
                      <div className="bg-secondary-container/50 hover:bg-secondary-container/70 transition-all rounded-lg p-2 flex flex-col justify-between h-20 shadow-xs cursor-pointer group">
                        <div className="flex items-start justify-between">
                          <span className="font-label-md text-label-md font-bold text-on-secondary-container">
                            Physics Lab
                          </span>
                          <span className="material-symbols-outlined text-[14px] text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                            edit
                          </span>
                        </div>
                        <div>
                          <span className="font-body-sm text-[11px] text-on-surface-variant block truncate">
                            Mal. Garba Sanusi
                          </span>
                          <div className="flex items-center justify-between mt-1">
                            <span className="bg-surface-container-lowest font-label-sm text-[10px] px-1.5 py-0.5 rounded text-secondary font-bold">
                              Physics Lab B
                            </span>
                            <span className="text-[9px] uppercase font-bold text-secondary">
                              Practical
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/*  Wed  */}
                    <td className="p-1.5">
                      <div className="bg-secondary-container/50 hover:bg-secondary-container/70 transition-all rounded-lg p-2 flex flex-col justify-between h-20 shadow-xs cursor-pointer group">
                        <div className="flex items-start justify-between">
                          <span className="font-label-md text-label-md font-bold text-on-secondary-container">
                            Data Processing
                          </span>
                          <span className="material-symbols-outlined text-[14px] text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                            edit
                          </span>
                        </div>
                        <div>
                          <span className="font-body-sm text-[11px] text-on-surface-variant block truncate">
                            Engr. Mustapha
                          </span>
                          <div className="flex items-center justify-between mt-1">
                            <span className="bg-surface-container-lowest font-label-sm text-[10px] px-1.5 py-0.5 rounded text-secondary font-bold">
                              ICT Lab 2
                            </span>
                            <span className="text-[9px] uppercase font-bold text-secondary">
                              Comp
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/*  Thu  */}
                    <td className="p-1.5">
                      <div className="bg-secondary-container/40 hover:bg-secondary-container/60 transition-all rounded-lg p-2 flex flex-col justify-between h-20 shadow-xs cursor-pointer group">
                        <div className="flex items-start justify-between">
                          <span className="font-label-md text-label-md font-bold text-on-secondary-container">
                            Mathematics
                          </span>
                          <span className="material-symbols-outlined text-[14px] text-on-secondary-container opacity-0 group-hover:opacity-100 transition-opacity">
                            edit
                          </span>
                        </div>
                        <div>
                          <span className="font-body-sm text-[11px] text-on-surface-variant block truncate">
                            Mr. Usman Bello
                          </span>
                          <div className="flex items-center justify-between mt-1">
                            <span className="bg-surface-container-lowest font-label-sm text-[10px] px-1.5 py-0.5 rounded text-on-surface font-semibold">
                              Rm S-12
                            </span>
                            <span className="text-[9px] uppercase font-bold text-secondary">
                              Tutorial
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/*  Fri  */}
                    <td className="p-1.5">
                      <div className="bg-surface-container-high/50 hover:bg-surface-container-high transition-all rounded-lg p-2 flex flex-col justify-between h-20 shadow-xs cursor-pointer group">
                        <div className="flex items-start justify-between">
                          <span className="font-label-md text-label-md font-bold text-primary">
                            English Essay
                          </span>
                          <span className="material-symbols-outlined text-[14px] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                            edit
                          </span>
                        </div>
                        <div>
                          <span className="font-body-sm text-[11px] text-on-surface-variant block truncate">
                            Malama Zainab Kabir
                          </span>
                          <div className="flex items-center justify-between mt-1">
                            <span className="bg-surface-container-lowest font-label-sm text-[10px] px-1.5 py-0.5 rounded text-on-surface font-semibold">
                              Rm S-12
                            </span>
                            <span className="text-[9px] uppercase font-bold text-primary">
                              Comp
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  {/*  Mid-Morning Break  */}
                  <tr className="bg-surface-container-low/70">
                    <td className="py-2 px-3 text-center sticky left-0 bg-surface-container-low font-semibold text-on-surface-variant">
                      <span className="block font-label-sm text-label-sm text-primary">
                        10:30 - 11:00
                      </span>
                      <span className="text-[10px] text-outline uppercase font-medium">
                        30 Mins
                      </span>
                    </td>
                    <td className="py-2 px-4 text-center" colSpan={5}>
                      <div className="flex items-center justify-center gap-2 text-on-surface-variant font-label-md text-label-md font-medium">
                        <span className="material-symbols-outlined text-[18px] text-tertiary">
                          free_breakfast
                        </span>
                        <span>
                          Mid-Morning Break • Dining Hall Refreshment • Staff
                          Room Briefing
                        </span>
                      </div>
                    </td>
                  </tr>
                  {/*  Period 4  */}
                  <tr>
                    <td className="py-3 px-3 text-center sticky left-0 bg-surface-container-lowest font-medium text-on-surface">
                      <span className="block font-label-sm text-label-sm text-primary font-bold">
                        P4
                      </span>
                      <span className="block text-[11px] text-outline">
                        11:00 - 11:45
                      </span>
                    </td>
                    {/*  Mon  */}
                    <td className="p-1.5">
                      <div className="bg-secondary-container/50 hover:bg-secondary-container/70 transition-all rounded-lg p-2 flex flex-col justify-between h-20 shadow-xs cursor-pointer group">
                        <div className="flex items-start justify-between">
                          <span className="font-label-md text-label-md font-bold text-on-secondary-container">
                            Chemistry Lab
                          </span>
                          <span className="material-symbols-outlined text-[14px] text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                            edit
                          </span>
                        </div>
                        <div>
                          <span className="font-body-sm text-[11px] text-on-surface-variant block truncate">
                            Dr. Fatima Aliyu
                          </span>
                          <div className="flex items-center justify-between mt-1">
                            <span className="bg-surface-container-lowest font-label-sm text-[10px] px-1.5 py-0.5 rounded text-secondary font-bold">
                              Chem Lab A
                            </span>
                            <span className="text-[9px] uppercase font-bold text-secondary">
                              Lab Slot
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/*  Tue  */}
                    <td className="p-1.5">
                      <div className="bg-surface-container-high/50 hover:bg-surface-container-high transition-all rounded-lg p-2 flex flex-col justify-between h-20 shadow-xs cursor-pointer group">
                        <div className="flex items-start justify-between">
                          <span className="font-label-md text-label-md font-bold text-primary">
                            Biology Theory
                          </span>
                          <span className="material-symbols-outlined text-[14px] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                            edit
                          </span>
                        </div>
                        <div>
                          <span className="font-body-sm text-[11px] text-on-surface-variant block truncate">
                            Mrs. Grace Okafor
                          </span>
                          <div className="flex items-center justify-between mt-1">
                            <span className="bg-surface-container-lowest font-label-sm text-[10px] px-1.5 py-0.5 rounded text-on-surface font-semibold">
                              Rm S-12
                            </span>
                            <span className="text-[9px] uppercase font-bold text-primary">
                              Theory
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/*  Wed  */}
                    <td className="p-1.5">
                      <div className="bg-secondary-container/50 hover:bg-secondary-container/70 transition-all rounded-lg p-2 flex flex-col justify-between h-20 shadow-xs cursor-pointer group">
                        <div className="flex items-start justify-between">
                          <span className="font-label-md text-label-md font-bold text-on-secondary-container">
                            Computer Coding
                          </span>
                          <span className="material-symbols-outlined text-[14px] text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                            edit
                          </span>
                        </div>
                        <div>
                          <span className="font-body-sm text-[11px] text-on-surface-variant block truncate">
                            Engr. Mustapha
                          </span>
                          <div className="flex items-center justify-between mt-1">
                            <span className="bg-surface-container-lowest font-label-sm text-[10px] px-1.5 py-0.5 rounded text-secondary font-bold">
                              ICT Lab 2
                            </span>
                            <span className="text-[9px] uppercase font-bold text-secondary">
                              Hands-on
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/*  Thu  */}
                    <td className="p-1.5">
                      <div className="bg-surface-container-high/50 hover:bg-surface-container-high transition-all rounded-lg p-2 flex flex-col justify-between h-20 shadow-xs cursor-pointer group">
                        <div className="flex items-start justify-between">
                          <span className="font-label-md text-label-md font-bold text-primary">
                            Physics Problem
                          </span>
                          <span className="material-symbols-outlined text-[14px] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                            edit
                          </span>
                        </div>
                        <div>
                          <span className="font-body-sm text-[11px] text-on-surface-variant block truncate">
                            Mal. Garba Sanusi
                          </span>
                          <div className="flex items-center justify-between mt-1">
                            <span className="bg-surface-container-lowest font-label-sm text-[10px] px-1.5 py-0.5 rounded text-on-surface font-semibold">
                              Rm S-12
                            </span>
                            <span className="text-[9px] uppercase font-bold text-primary">
                              Calculus
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/*  Fri  */}
                    <td className="p-1.5">
                      <div className="bg-tertiary-fixed/40 hover:bg-tertiary-fixed/60 transition-all rounded-lg p-2 flex flex-col justify-between h-20 shadow-xs cursor-pointer group">
                        <div className="flex items-start justify-between">
                          <span className="font-label-md text-label-md font-bold text-tertiary">
                            Islamic Jurisprudence
                          </span>
                          <span className="material-symbols-outlined text-[14px] text-tertiary opacity-0 group-hover:opacity-100 transition-opacity">
                            edit
                          </span>
                        </div>
                        <div>
                          <span className="font-body-sm text-[11px] text-on-surface-variant block truncate">
                            Ustaz Bashir Lawal
                          </span>
                          <div className="flex items-center justify-between mt-1">
                            <span className="bg-surface-container-lowest font-label-sm text-[10px] px-1.5 py-0.5 rounded text-on-surface font-semibold">
                              Rm S-12
                            </span>
                            <span className="text-[9px] uppercase font-bold text-tertiary">
                              Fiqh
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  {/*  Period 5  */}
                  <tr>
                    <td className="py-3 px-3 text-center sticky left-0 bg-surface-container-lowest font-medium text-on-surface">
                      <span className="block font-label-sm text-label-sm text-primary font-bold">
                        P5
                      </span>
                      <span className="block text-[11px] text-outline">
                        11:45 - 12:30
                      </span>
                    </td>
                    {/*  Mon  */}
                    <td className="p-1.5">
                      <div className="bg-secondary-container/50 hover:bg-secondary-container/70 transition-all rounded-lg p-2 flex flex-col justify-between h-20 shadow-xs cursor-pointer group">
                        <div className="flex items-start justify-between">
                          <span className="font-label-md text-label-md font-bold text-on-secondary-container">
                            Chem Titration (II)
                          </span>
                          <span className="material-symbols-outlined text-[14px] text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                            edit
                          </span>
                        </div>
                        <div>
                          <span className="font-body-sm text-[11px] text-on-surface-variant block truncate">
                            Dr. Fatima Aliyu
                          </span>
                          <div className="flex items-center justify-between mt-1">
                            <span className="bg-surface-container-lowest font-label-sm text-[10px] px-1.5 py-0.5 rounded text-secondary font-bold">
                              Chem Lab A
                            </span>
                            <span className="text-[9px] uppercase font-bold text-secondary">
                              Volumetric
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/*  Tue  */}
                    <td className="p-1.5">
                      <div className="bg-surface-container-high/50 hover:bg-surface-container-high transition-all rounded-lg p-2 flex flex-col justify-between h-20 shadow-xs cursor-pointer group">
                        <div className="flex items-start justify-between">
                          <span className="font-label-md text-label-md font-bold text-primary">
                            English Grammar
                          </span>
                          <span className="material-symbols-outlined text-[14px] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                            edit
                          </span>
                        </div>
                        <div>
                          <span className="font-body-sm text-[11px] text-on-surface-variant block truncate">
                            Malama Zainab Kabir
                          </span>
                          <div className="flex items-center justify-between mt-1">
                            <span className="bg-surface-container-lowest font-label-sm text-[10px] px-1.5 py-0.5 rounded text-on-surface font-semibold">
                              Rm S-12
                            </span>
                            <span className="text-[9px] uppercase font-bold text-primary">
                              Lexis
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/*  Wed  */}
                    <td className="p-1.5">
                      <div className="bg-secondary-container/40 hover:bg-secondary-container/60 transition-all rounded-lg p-2 flex flex-col justify-between h-20 shadow-xs cursor-pointer group">
                        <div className="flex items-start justify-between">
                          <span className="font-label-md text-label-md font-bold text-on-secondary-container">
                            General Maths
                          </span>
                          <span className="material-symbols-outlined text-[14px] text-on-secondary-container opacity-0 group-hover:opacity-100 transition-opacity">
                            edit
                          </span>
                        </div>
                        <div>
                          <span className="font-body-sm text-[11px] text-on-surface-variant block truncate">
                            Mr. Usman Bello
                          </span>
                          <div className="flex items-center justify-between mt-1">
                            <span className="bg-surface-container-lowest font-label-sm text-[10px] px-1.5 py-0.5 rounded text-on-surface font-semibold">
                              Rm S-12
                            </span>
                            <span className="text-[9px] uppercase font-bold text-secondary">
                              Trig
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/*  Thu  */}
                    <td className="p-1.5">
                      <div className="bg-surface-container-high/50 hover:bg-surface-container-high transition-all rounded-lg p-2 flex flex-col justify-between h-20 shadow-xs cursor-pointer group">
                        <div className="flex items-start justify-between">
                          <span className="font-label-md text-label-md font-bold text-primary">
                            Civic Duties
                          </span>
                          <span className="material-symbols-outlined text-[14px] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                            edit
                          </span>
                        </div>
                        <div>
                          <span className="font-body-sm text-[11px] text-on-surface-variant block truncate">
                            Mr. John Danladi
                          </span>
                          <div className="flex items-center justify-between mt-1">
                            <span className="bg-surface-container-lowest font-label-sm text-[10px] px-1.5 py-0.5 rounded text-on-surface font-semibold">
                              Rm S-12
                            </span>
                            <span className="text-[9px] uppercase font-bold text-outline">
                              Ethics
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/*  Fri  */}
                    <td className="p-1.5">
                      <div className="bg-surface-container-low rounded-lg p-2 flex flex-col justify-center items-center h-20 text-center">
                        <span className="font-label-sm text-label-sm font-semibold text-primary">
                          Jum'ah Prep &amp; Wudu
                        </span>
                        <span className="text-[10px] text-outline mt-0.5">
                          Early Dismissal to Mosque
                        </span>
                      </div>
                    </td>
                  </tr>
                  {/*  Period 6  */}
                  <tr>
                    <td className="py-3 px-3 text-center sticky left-0 bg-surface-container-lowest font-medium text-on-surface">
                      <span className="block font-label-sm text-label-sm text-primary font-bold">
                        P6
                      </span>
                      <span className="block text-[11px] text-outline">
                        12:30 - 01:15
                      </span>
                    </td>
                    {/*  Mon  */}
                    <td className="p-1.5">
                      <div className="bg-surface-container-high/50 hover:bg-surface-container-high transition-all rounded-lg p-2 flex flex-col justify-between h-20 shadow-xs cursor-pointer group">
                        <div className="flex items-start justify-between">
                          <span className="font-label-md text-label-md font-bold text-primary">
                            Biology Theory
                          </span>
                          <span className="material-symbols-outlined text-[14px] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                            edit
                          </span>
                        </div>
                        <div>
                          <span className="font-body-sm text-[11px] text-on-surface-variant block truncate">
                            Mrs. Grace Okafor
                          </span>
                          <div className="flex items-center justify-between mt-1">
                            <span className="bg-surface-container-lowest font-label-sm text-[10px] px-1.5 py-0.5 rounded text-on-surface font-semibold">
                              Rm S-12
                            </span>
                            <span className="text-[9px] uppercase font-bold text-primary">
                              Genetics
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/*  Tue  */}
                    <td className="p-1.5">
                      <div className="bg-secondary-container/40 hover:bg-secondary-container/60 transition-all rounded-lg p-2 flex flex-col justify-between h-20 shadow-xs cursor-pointer group">
                        <div className="flex items-start justify-between">
                          <span className="font-label-md text-label-md font-bold text-on-secondary-container">
                            Further Maths
                          </span>
                          <span className="material-symbols-outlined text-[14px] text-on-secondary-container opacity-0 group-hover:opacity-100 transition-opacity">
                            edit
                          </span>
                        </div>
                        <div>
                          <span className="font-body-sm text-[11px] text-on-surface-variant block truncate">
                            Mr. Usman Bello
                          </span>
                          <div className="flex items-center justify-between mt-1">
                            <span className="bg-surface-container-lowest font-label-sm text-[10px] px-1.5 py-0.5 rounded text-on-surface font-semibold">
                              Rm S-12
                            </span>
                            <span className="text-[9px] uppercase font-bold text-secondary">
                              Vectors
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/*  Wed  */}
                    <td className="p-1.5">
                      <div className="bg-surface-container-high/50 hover:bg-surface-container-high transition-all rounded-lg p-2 flex flex-col justify-between h-20 shadow-xs cursor-pointer group">
                        <div className="flex items-start justify-between">
                          <span className="font-label-md text-label-md font-bold text-primary">
                            Chemistry Theory
                          </span>
                          <span className="material-symbols-outlined text-[14px] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                            edit
                          </span>
                        </div>
                        <div>
                          <span className="font-body-sm text-[11px] text-on-surface-variant block truncate">
                            Dr. Fatima Aliyu
                          </span>
                          <div className="flex items-center justify-between mt-1">
                            <span className="bg-surface-container-lowest font-label-sm text-[10px] px-1.5 py-0.5 rounded text-on-surface font-semibold">
                              Rm S-12
                            </span>
                            <span className="text-[9px] uppercase font-bold text-primary">
                              Organic
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/*  Thu  */}
                    <td className="p-1.5">
                      <div className="bg-surface-container-high/50 hover:bg-surface-container-high transition-all rounded-lg p-2 flex flex-col justify-between h-20 shadow-xs cursor-pointer group">
                        <div className="flex items-start justify-between">
                          <span className="font-label-md text-label-md font-bold text-primary">
                            Oral English
                          </span>
                          <span className="material-symbols-outlined text-[14px] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                            edit
                          </span>
                        </div>
                        <div>
                          <span className="font-body-sm text-[11px] text-on-surface-variant block truncate">
                            Malama Zainab Kabir
                          </span>
                          <div className="flex items-center justify-between mt-1">
                            <span className="bg-surface-container-lowest font-label-sm text-[10px] px-1.5 py-0.5 rounded text-on-surface font-semibold">
                              Rm S-12
                            </span>
                            <span className="text-[9px] uppercase font-bold text-primary">
                              Phonetics
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/*  Fri  */}
                    <td className="p-1.5">
                      <div className="bg-secondary-container/30 rounded-lg p-2 flex flex-col justify-center items-center h-20 text-center">
                        <span className="font-label-sm text-label-sm font-semibold text-secondary">
                          Salatul Jum'ah
                        </span>
                        <span className="text-[10px] text-on-secondary-container mt-0.5">
                          School Central Mosque
                        </span>
                      </div>
                    </td>
                  </tr>
                  {/*  Dhuhr Prayer & Lunch Break  */}
                  <tr className="bg-secondary-container/20">
                    <td className="py-2.5 px-3 text-center sticky left-0 bg-surface-container-low font-semibold text-on-surface-variant">
                      <span className="block font-label-sm text-label-sm text-secondary">
                        01:15 - 02:00
                      </span>
                      <span className="text-[10px] text-outline uppercase font-medium">
                        45 Mins
                      </span>
                    </td>
                    <td className="py-2 px-4 text-center" colSpan={5}>
                      <div className="flex items-center justify-center gap-3 text-on-surface font-label-md text-label-md font-semibold">
                        <span className="material-symbols-outlined text-[20px] text-secondary">
                          mosque
                        </span>
                        <span>
                          Dhuhr Congregational Prayer • Hot Lunch Service •
                          Student Relaxation
                        </span>
                      </div>
                    </td>
                  </tr>
                  {/*  Period 7  */}
                  <tr>
                    <td className="py-3 px-3 text-center sticky left-0 bg-surface-container-lowest font-medium text-on-surface">
                      <span className="block font-label-sm text-label-sm text-primary font-bold">
                        P7
                      </span>
                      <span className="block text-[11px] text-outline">
                        02:00 - 02:45
                      </span>
                    </td>
                    {/*  Mon  */}
                    <td className="p-1.5">
                      <div className="bg-secondary-container/50 hover:bg-secondary-container/70 transition-all rounded-lg p-2 flex flex-col justify-between h-20 shadow-xs cursor-pointer group">
                        <div className="flex items-start justify-between">
                          <span className="font-label-md text-label-md font-bold text-on-secondary-container">
                            ICT Suite Practical
                          </span>
                          <span className="material-symbols-outlined text-[14px] text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                            edit
                          </span>
                        </div>
                        <div>
                          <span className="font-body-sm text-[11px] text-on-surface-variant block truncate">
                            Engr. Mustapha
                          </span>
                          <div className="flex items-center justify-between mt-1">
                            <span className="bg-surface-container-lowest font-label-sm text-[10px] px-1.5 py-0.5 rounded text-secondary font-bold">
                              ICT Lab 2
                            </span>
                            <span className="text-[9px] uppercase font-bold text-secondary">
                              Spreadsheets
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/*  Tue  */}
                    <td className="p-1.5">
                      <div className="bg-tertiary-fixed/40 hover:bg-tertiary-fixed/60 transition-all rounded-lg p-2 flex flex-col justify-between h-20 shadow-xs cursor-pointer group">
                        <div className="flex items-start justify-between">
                          <span className="font-label-md text-label-md font-bold text-tertiary">
                            Islamic History
                          </span>
                          <span className="material-symbols-outlined text-[14px] text-tertiary opacity-0 group-hover:opacity-100 transition-opacity">
                            edit
                          </span>
                        </div>
                        <div>
                          <span className="font-body-sm text-[11px] text-on-surface-variant block truncate">
                            Ustaz Bashir Lawal
                          </span>
                          <div className="flex items-center justify-between mt-1">
                            <span className="bg-surface-container-lowest font-label-sm text-[10px] px-1.5 py-0.5 rounded text-on-surface font-semibold">
                              Rm S-12
                            </span>
                            <span className="text-[9px] uppercase font-bold text-tertiary">
                              Sirah
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/*  Wed  */}
                    <td className="p-1.5">
                      <div className="bg-surface-container-high/50 hover:bg-surface-container-high transition-all rounded-lg p-2 flex flex-col justify-between h-20 shadow-xs cursor-pointer group">
                        <div className="flex items-start justify-between">
                          <span className="font-label-md text-label-md font-bold text-primary">
                            Physics Optics
                          </span>
                          <span className="material-symbols-outlined text-[14px] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                            edit
                          </span>
                        </div>
                        <div>
                          <span className="font-body-sm text-[11px] text-on-surface-variant block truncate">
                            Mal. Garba Sanusi
                          </span>
                          <div className="flex items-center justify-between mt-1">
                            <span className="bg-surface-container-lowest font-label-sm text-[10px] px-1.5 py-0.5 rounded text-on-surface font-semibold">
                              Rm S-12
                            </span>
                            <span className="text-[9px] uppercase font-bold text-primary">
                              Waves
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/*  Thu  */}
                    <td className="p-1.5">
                      <div className="bg-surface-container-low rounded-lg p-2 flex flex-col justify-center items-center h-20 text-center">
                        <span className="font-label-sm text-label-sm font-semibold text-outline">
                          Co-Curricular Clubs
                        </span>
                        <span className="text-[10px] text-on-surface-variant mt-0.5">
                          JETS / Literary &amp; Debating
                        </span>
                      </div>
                    </td>
                    {/*  Fri  */}
                    <td className="p-1.5">
                      <div className="bg-surface-container-low/40 rounded-lg p-2 flex flex-col justify-center items-center h-20 text-center">
                        <span className="font-label-sm text-label-sm text-outline italic">
                          Dismissed / Weekend
                        </span>
                      </div>
                    </td>
                  </tr>
                  {/*  Period 8  */}
                  <tr>
                    <td className="py-3 px-3 text-center sticky left-0 bg-surface-container-lowest font-medium text-on-surface">
                      <span className="block font-label-sm text-label-sm text-primary font-bold">
                        P8
                      </span>
                      <span className="block text-[11px] text-outline">
                        02:45 - 03:30
                      </span>
                    </td>
                    {/*  Mon  */}
                    <td className="p-1.5">
                      <div className="bg-surface-container-low rounded-lg p-2 flex flex-col justify-center items-center h-20 text-center">
                        <span className="font-label-sm text-label-sm font-semibold text-primary">
                          Supervised Prep
                        </span>
                        <span className="text-[10px] text-outline mt-0.5">
                          Mr. Usman Bello
                        </span>
                      </div>
                    </td>
                    {/*  Tue  */}
                    <td className="p-1.5">
                      <div className="bg-surface-container-low rounded-lg p-2 flex flex-col justify-center items-center h-20 text-center">
                        <span className="font-label-sm text-label-sm font-semibold text-primary">
                          Supervised Prep
                        </span>
                        <span className="text-[10px] text-outline mt-0.5">
                          Malama Zainab Kabir
                        </span>
                      </div>
                    </td>
                    {/*  Wed  */}
                    <td className="p-1.5">
                      <div className="bg-surface-container-low rounded-lg p-2 flex flex-col justify-center items-center h-20 text-center">
                        <span className="font-label-sm text-label-sm font-semibold text-primary">
                          Sports &amp; Athletics
                        </span>
                        <span className="text-[10px] text-outline mt-0.5">
                          School Sports Pavilion
                        </span>
                      </div>
                    </td>
                    {/*  Thu  */}
                    <td className="p-1.5">
                      <div className="bg-surface-container-low rounded-lg p-2 flex flex-col justify-center items-center h-20 text-center">
                        <span className="font-label-sm text-label-sm font-semibold text-primary">
                          Tahfeez Halqa
                        </span>
                        <span className="text-[10px] text-outline mt-0.5">
                          Ustaz Bashir Lawal
                        </span>
                      </div>
                    </td>
                    {/*  Fri  */}
                    <td className="p-1.5">
                      <div className="bg-surface-container-low/40 rounded-lg p-2 flex flex-col justify-center items-center h-20 text-center">
                        <span className="font-label-sm text-label-sm text-outline italic">
                          Dismissed / Weekend
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/*  Schedule Footer Status & Quick Actions  */}
            <div className="p-space-md bg-surface-container-low/40 flex flex-wrap items-center justify-between gap-space-sm">
              <div className="flex items-center gap-space-sm text-on-surface-variant font-body-sm text-body-sm">
                <span className="flex items-center gap-1 font-semibold text-secondary">
                  <span className="material-symbols-outlined text-[16px]">
                    check_circle
                  </span>
                  WAEC / NECO Minimum Syllabus Hours Met
                </span>
                <span className="hidden md:inline">•</span>
                <span className="hidden md:inline">
                  Last modified by Vice Principal (Academic) • Today, 09:14 AM
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="px-space-sm py-1.5 bg-surface-container-lowest text-on-surface hover:bg-surface-container-high rounded-lg font-label-sm text-label-sm font-medium transition-all shadow-xs"
                  type="button"
                >
                  Clone to Arm B
                </button>
                <button
                  className="px-space-sm py-1.5 bg-primary text-on-primary hover:bg-primary-container rounded-lg font-label-sm text-label-sm font-medium transition-all shadow-xs"
                  type="button"
                >
                  Save Term Template
                </button>
              </div>
            </div>
          </div>
          {/*  Right Area: Resource & Constraint Monitor Drawer (3 Columns on XL)  */}
          <div className="xl:col-span-3 space-y-space-md">
            {/*  Facility & Laboratory Usage Monitor Card  */}
            <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-md">
              <div className="flex items-center justify-between pb-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-primary">
                    domain
                  </span>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">
                    Lab Allocation Status
                  </h2>
                </div>
                <span className="material-symbols-outlined text-[16px] text-outline cursor-pointer hover:text-on-surface">
                  tune
                </span>
              </div>
              <div className="space-y-space-md">
                {/*  Physics Lab B  */}
                <div className="p-3 bg-surface-container-low rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-label-md text-label-md font-semibold text-on-surface">
                      Physics Lab B
                    </span>
                    <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-bold">
                      82% Cap
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-secondary h-2 rounded-full"
                      style={{ width: "82%" }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-on-surface-variant">
                    <span>Curr: SSS 2 Science A</span>
                    <span>Free Next: P5 (11:45)</span>
                  </div>
                </div>
                {/*  Chemistry Lab A  */}
                <div className="p-3 bg-surface-container-low rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-label-md text-label-md font-semibold text-on-surface">
                      Chemistry Lab A
                    </span>
                    <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-bold">
                      78% Cap
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: "78%" }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-on-surface-variant">
                    <span>Next: SSS 3 Double Slot</span>
                    <span>Available 02:00 PM</span>
                  </div>
                </div>
                {/*  ICT Suite 1  */}
                <div className="p-3 bg-surface-container-low rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-label-md text-label-md font-semibold text-on-surface">
                      ICT Suite 1 &amp; 2
                    </span>
                    <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-bold">
                      90% Peak
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-error h-2 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-on-surface-variant">
                    <span>42 Thin Clients In Use</span>
                    <span>Congestion Alert</span>
                  </div>
                </div>
              </div>
              <button
                className="w-full py-2 bg-surface-container-high text-primary hover:bg-primary-fixed rounded-lg font-label-md text-label-md font-semibold transition-all"
                type="button"
              >
                Manage All 18 Specialist Rooms
              </button>
            </div>
            {/*  Teacher Workload Alerts & Balancing Card  */}
            <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-md">
              <div className="flex items-center justify-between pb-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-secondary">
                    speed
                  </span>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">
                    Teacher Workload Balance
                  </h2>
                </div>
                <span className="font-label-sm text-label-sm text-secondary bg-secondary-container px-2 py-0.5 rounded-full font-bold">
                  Live
                </span>
              </div>
              {/*  Teacher Load List  */}
              <div className="space-y-3">
                {/*  Teacher 1: High Load Alert  */}
                <div className="p-3 rounded-lg bg-surface-container-low hover:bg-surface-container-high/50 transition-colors space-y-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center font-bold text-on-primary-fixed text-label-sm">
                        GS
                      </div>
                      <div>
                        <h3 className="font-label-md text-label-md font-semibold text-on-surface truncate">
                          Malam Garba Sanusi
                        </h3>
                        <span className="text-[11px] text-on-surface-variant">
                          Senior Physics Master
                        </span>
                      </div>
                    </div>
                    <span className="font-label-sm text-label-sm text-error font-bold">
                      20 / 22 hrs
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-error h-1.5 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[10px] text-error font-medium flex items-center gap-1">
                      <span className="material-symbols-outlined text-[12px]">
                        warning
                      </span>{" "}
                      Near Cap Warning
                    </span>
                    <button
                      className="text-primary hover:underline text-[11px] font-semibold"
                      type="button"
                    >
                      Offload 1 Slot
                    </button>
                  </div>
                </div>
                {/*  Teacher 2: Optimal Load  */}
                <div className="p-3 rounded-lg bg-surface-container-low hover:bg-surface-container-high/50 transition-colors space-y-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center font-bold text-on-secondary-container text-label-sm">
                        ZK
                      </div>
                      <div>
                        <h3 className="font-label-md text-label-md font-semibold text-on-surface truncate">
                          Malama Zainab Kabir
                        </h3>
                        <span className="text-[11px] text-on-surface-variant">
                          Dept. of English Studies
                        </span>
                      </div>
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary font-bold">
                      16 / 22 hrs
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-secondary h-1.5 rounded-full"
                      style={{ width: "72%" }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[10px] text-secondary font-medium flex items-center gap-1">
                      <span className="material-symbols-outlined text-[12px]">
                        check_circle
                      </span>{" "}
                      Optimal Balanced
                    </span>
                    <button
                      className="text-primary hover:underline text-[11px] font-semibold"
                      type="button"
                    >
                      View Schedule
                    </button>
                  </div>
                </div>
                {/*  Teacher 3: Moderate Load  */}
                <div className="p-3 rounded-lg bg-surface-container-low hover:bg-surface-container-high/50 transition-colors space-y-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center font-bold text-on-primary-fixed text-label-sm">
                        UB
                      </div>
                      <div>
                        <h3 className="font-label-md text-label-md font-semibold text-on-surface truncate">
                          Mr. Usman Bello
                        </h3>
                        <span className="text-[11px] text-on-surface-variant">
                          HOD Mathematics
                        </span>
                      </div>
                    </div>
                    <span className="font-label-sm text-label-sm text-primary font-bold">
                      18 / 22 hrs
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-primary h-1.5 rounded-full"
                      style={{ width: "81%" }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[10px] text-on-surface-variant font-medium">
                      4 Periods Available
                    </span>
                    <button
                      className="text-primary hover:underline text-[11px] font-semibold"
                      type="button"
                    >
                      Assign Spare
                    </button>
                  </div>
                </div>
              </div>
              {/*  Quick Teacher Swap Button  */}
              <button
                className="w-full py-2 bg-surface-container-low hover:bg-surface-container-high text-on-surface rounded-lg font-label-md text-label-md font-semibold transition-all flex items-center justify-center gap-1.5"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px] text-primary">
                  swap_horiz
                </span>
                <span>Initiate Rapid Period Swap</span>
              </button>
            </div>
            {/*  Quick AI Helper & Constraint Policy Indicator  */}
            <div className="bg-surface-container-low rounded-xl p-space-md shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-primary font-semibold font-label-md text-label-md">
                <span className="material-symbols-outlined text-[18px]">
                  policy
                </span>
                <span>Kaduna MoE Scheduling Rule</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                No secondary school educator may exceed 4 consecutive classroom
                contact periods without an intervening break or free period. All
                laboratory practical blocks must be double periods.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
