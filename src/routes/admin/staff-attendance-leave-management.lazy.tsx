import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(
  "/admin/staff-attendance-leave-management",
)({
  component: StaffAttendanceLeaveManagement,
});

function StaffAttendanceLeaveManagement() {
  return (
    <main className="w-full pt-16 px-space-lg py-space-lg flex-1 bg-background">
      <div className="flex flex-col w-full space-y-space-lg">
        {/*  Breadcrumbs & Live Pulse Ribbon  */}
        <div className="flex flex-wrap items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
            <span className="hover:text-primary transition-colors cursor-pointer">
              Human Resources
            </span>
            <span className="material-symbols-outlined text-[14px] text-outline">
              chevron_right
            </span>
            <span className="hover:text-primary transition-colors cursor-pointer">
              Staff Attendance &amp; Leave
            </span>
            <span className="material-symbols-outlined text-[14px] text-outline">
              chevron_right
            </span>
            <span className="text-primary font-semibold">
              Monthly Attendance &amp; Leave Approval Board
            </span>
          </div>
          <div className="flex items-center gap-2 bg-secondary-container/40 px-3 py-1 rounded-full text-on-secondary-container font-label-sm text-label-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            <span>Kaduna Gate Biometric Sync: Live (3.2s latency)</span>
          </div>
        </div>
        {/*  Header & Primary Global Actions  */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
          <div className="space-y-1 max-w-3xl">
            <div className="flex items-center gap-space-xs font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">
              <span>Northern Academic Term 1</span>
              <span>•</span>
              <span>Biometric Terminal Hub Alpha &amp; Beta</span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              Staff Attendance &amp; Leave Management
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Daily biometric check-in tracking, substitution coverage
              management, and administrative leave approval workflows.
            </p>
          </div>
          {/*  Action Group  */}
          <div className="flex flex-wrap items-center gap-space-xs sm:gap-space-sm shrink-0">
            <button
              className="flex items-center gap-1.5 px-3.5 py-2 bg-surface-container-low text-on-surface rounded-lg font-label-md text-label-md hover:bg-surface-container-high transition-colors shadow-sm"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                tune
              </span>
              <span>Attendance Rules Config</span>
            </button>
            <button
              className="flex items-center gap-1.5 px-3.5 py-2 bg-surface-container-low text-on-surface rounded-lg font-label-md text-label-md hover:bg-surface-container-high transition-colors shadow-sm"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px] text-secondary">
                sync_alt
              </span>
              <span>Auto-Assign Subs</span>
            </button>
            <button
              className="flex items-center gap-1.5 px-3.5 py-2 bg-surface-container-low text-on-surface rounded-lg font-label-md text-label-md hover:bg-surface-container-high transition-colors shadow-sm"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px] text-primary">
                description
              </span>
              <span>Generate Timesheet</span>
            </button>
            <button
              className="flex items-center gap-1.5 px-4 py-2 bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">
                add_circle
              </span>
              <span>Submit Leave Application</span>
            </button>
          </div>
        </div>
        {/*  4 Top Metric Cards (Institutional Stat Grid)  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
          {/*  Stat 1  */}
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute right-0 top-0 w-24 h-24 bg-secondary/5 rounded-bl-full pointer-events-none"></div>
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">
                Faculty Duty Presence
              </span>
              <span className="material-symbols-outlined text-secondary bg-secondary-container/50 p-1.5 rounded-lg text-[20px]">
                badge
              </span>
            </div>
            <div className="my-space-sm flex items-baseline gap-space-xs">
              <span className="font-metric-lg text-metric-lg text-primary">
                116
                <span className="font-headline-sm text-headline-sm text-outline font-normal">
                  {" "}
                  / 120
                </span>
              </span>
              <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                96.7%
              </span>
            </div>
            <div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm pt-2 bg-surface-container-low/50 px-2.5 py-1 rounded">
              <span>2 Excused Leave</span>
              <span>•</span>
              <span className="text-error font-medium">2 Medical Rest</span>
            </div>
          </div>
          {/*  Stat 2  */}
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute right-0 top-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none"></div>
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">
                Average Punctuality Rate
              </span>
              <span className="material-symbols-outlined text-primary bg-surface-container-high p-1.5 rounded-lg text-[20px]">
                schedule
              </span>
            </div>
            <div className="my-space-sm flex items-baseline gap-space-xs">
              <span className="font-metric-lg text-metric-lg text-primary">
                94.8%
              </span>
              <span className="font-label-sm text-label-sm text-secondary font-semibold flex items-center">
                <span className="material-symbols-outlined text-[14px]">
                  arrow_upward
                </span>{" "}
                +1.4%
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
              Morning check-in logged before 07:30 AM gate bell
            </p>
          </div>
          {/*  Stat 3  */}
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute right-0 top-0 w-24 h-24 bg-tertiary-fixed/30 rounded-bl-full pointer-events-none"></div>
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">
                Pending Leave Dockets
              </span>
              <span className="material-symbols-outlined text-tertiary bg-tertiary-fixed p-1.5 rounded-lg text-[20px]">
                pending_actions
              </span>
            </div>
            <div className="my-space-sm flex items-baseline gap-space-xs">
              <span className="font-metric-lg text-metric-lg text-primary">
                4
              </span>
              <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-semibold">
                Action Required
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1 truncate">
              <span className="material-symbols-outlined text-[14px] text-outline">
                draw
              </span>
              Awaiting Dr. Aminu Bello's formal sign-off
            </p>
          </div>
          {/*  Stat 4  */}
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute right-0 top-0 w-24 h-24 bg-secondary-fixed/30 rounded-bl-full pointer-events-none"></div>
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">
                Substitution Cover Filled
              </span>
              <span className="material-symbols-outlined text-secondary bg-secondary-fixed p-1.5 rounded-lg text-[20px]">
                how_to_reg
              </span>
            </div>
            <div className="my-space-sm flex items-baseline gap-space-xs">
              <span className="font-metric-lg text-metric-lg text-secondary font-bold">
                100%
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                6 of 6 periods
              </span>
            </div>
            <div className="w-full bg-surface-container-highest rounded-full h-2 overflow-hidden">
              <div className="bg-secondary h-2 rounded-full w-full"></div>
            </div>
          </div>
        </div>
        {/*  Primary Working Workspace (Split Layout 65% / 35%)  */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
          {/*  LEFT MAIN SECTION (65% -> col-span-12 xl:col-span-8)  */}
          <div className="lg:col-span-12 xl:col-span-8 space-y-space-lg">
            {/*  Biometric Punch Register Container  */}
            <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
              {/*  Tabbed Header & Toolbars  */}
              <div className="px-space-lg pt-space-md pb-space-sm bg-surface-container-lowest">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm mb-space-md">
                  <div>
                    <h2 className="font-headline-sm text-headline-sm text-primary">
                      Biometric Attendance Terminal Matrix
                    </h2>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Gate Scanners Alpha (Main Boulevard) &amp; Beta (Staff
                      Annex Gate)
                    </span>
                  </div>
                  {/*  Date & Terminal Selector  */}
                  <div className="flex items-center gap-space-xs">
                    <div className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-[16px] text-primary">
                        event
                      </span>
                      <span>Thursday, 16 Oct 2026</span>
                    </div>
                    <button
                      className="p-1.5 rounded-lg hover:bg-surface-container text-on-surface-variant"
                      title="Refresh Live Sync"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        cached
                      </span>
                    </button>
                  </div>
                </div>
                {/*  Segmented Navigation Tabs  */}
                <div className="flex items-center justify-between border-b-0">
                  <div className="inline-flex p-1 bg-surface-container-low rounded-lg gap-1">
                    <button className="px-4 py-1.5 rounded-md bg-surface-container-lowest font-label-md text-label-md text-primary font-semibold shadow-sm flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-secondary">
                        fingerprint
                      </span>
                      <span>Today's Biometric Register</span>
                      <span className="ml-1 px-1.5 py-0.2 bg-primary/10 text-primary rounded-full text-[10px]">
                        120
                      </span>
                    </button>
                    <button className="px-4 py-1.5 rounded-md hover:bg-surface-container font-label-md text-label-md text-on-surface-variant transition-colors flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px]">
                        calendar_view_month
                      </span>
                      <span>Monthly Timesheet Summary</span>
                    </button>
                    <button className="px-4 py-1.5 rounded-md hover:bg-surface-container font-label-md text-label-md text-on-surface-variant transition-colors flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px]">
                        swap_horiz
                      </span>
                      <span>Substitution Roster</span>
                      <span className="ml-1 px-1.5 py-0.2 bg-secondary-container text-on-secondary-container rounded-full text-[10px]">
                        6
                      </span>
                    </button>
                  </div>
                  <div className="hidden md:flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-secondary"></span>{" "}
                    116 Present
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-tertiary-fixed ml-2"></span>{" "}
                    1 Late
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-error-container ml-2"></span>{" "}
                    3 Off-Duty
                  </div>
                </div>
              </div>
              {/*  Table Filters Strip  */}
              <div className="px-space-lg py-2.5 bg-surface-container-low flex flex-wrap items-center justify-between gap-space-sm">
                <div className="flex items-center gap-2 flex-1 max-w-sm">
                  <div className="relative w-full">
                    <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-outline text-[16px]">
                      search
                    </span>
                    <input
                      className="w-full pl-8 pr-3 py-1.5 text-body-sm font-body-sm bg-surface-container-lowest rounded-lg focus:outline-none focus:ring-1 focus:ring-primary shadow-xs"
                      placeholder="Filter by staff name, ID or department..."
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <select className="px-3 py-1.5 text-label-sm font-label-sm bg-surface-container-lowest rounded-lg text-on-surface focus:outline-none">
                    <option>All Academic &amp; Admin Depts</option>
                    <option>Sciences &amp; Mathematics</option>
                    <option>Languages &amp; Hausa Studies</option>
                    <option>Islamic &amp; Tahfeez Studies</option>
                    <option>Healthcare &amp; Clinic</option>
                  </select>
                  <select className="px-3 py-1.5 text-label-sm font-label-sm bg-surface-container-lowest rounded-lg text-on-surface focus:outline-none">
                    <option>Filter by: Any Status</option>
                    <option>On Time (&lt; 07:30 AM)</option>
                    <option>Late Check-In</option>
                    <option>On Authorized Leave</option>
                  </select>
                </div>
              </div>
              {/*  Real-Time Biometric Punch Table  */}
              <div className="overflow-x-auto">
                <table className="w-full text-left font-body-sm text-body-sm">
                  <thead className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                    <tr>
                      <th className="py-3 px-space-md">
                        Staff Member &amp; ID
                      </th>
                      <th className="py-3 px-space-md">Department</th>
                      <th className="py-3 px-space-md">Biometric Gate Punch</th>
                      <th className="py-3 px-space-md">Check-out</th>
                      <th className="py-3 px-space-md">Status</th>
                      <th className="py-3 px-space-md">Substitution</th>
                      <th className="py-3 px-space-md text-right">
                        Log Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y-0 text-on-surface">
                    {/*  Row 1: Mal. Garba Usman  */}
                    <tr className="hover:bg-surface-container-low/60 transition-colors">
                      <td className="py-3 px-space-md">
                        <div className="flex items-center gap-2.5">
                          <img
                            className="w-9 h-9 rounded-full object-cover shadow-xs"
                            data-alt="Portrait photo of Malam Garba Usman, an experienced Nigerian teacher with neat traditional attire and glasses smiling kindly in a school staffroom"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw1SVj2ypPO6sXWSr0UCpz6RVRQ7AxIxwvjcsG0OobnDwJqFX2QQHYa0F-6-_tTgCl1aqCtRNoGmxbgYGjtg9kugoFJevVmyn5GFQPSKTU5noxoQMfjgO7YL91rlBzt6rmIyfhhPqmdj0Fz_o4K8-KuLIu2By6MeiK2NV-jfv2AlQo32hPkSAYUdgiglFkQQC6kszoA-YYUjwtVUE7oZLHLA-7uXPA7vKqivd5LWVay8L7IISCnrTefQ"
                          />
                          <div>
                            <div className="font-label-md text-label-md font-semibold text-primary">
                              Malam Garba Usman
                            </div>
                            <div className="font-body-sm text-[11px] text-outline">
                              EMP-KD-1042 • Senior Lecturer
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-space-md text-on-surface-variant">
                        Islamic Studies &amp; Tahfeez
                      </td>
                      <td className="py-3 px-space-md">
                        <div className="flex items-center gap-1 font-semibold text-on-surface">
                          <span className="material-symbols-outlined text-[16px] text-secondary">
                            fingerprint
                          </span>
                          <span>07:18 AM</span>
                        </div>
                        <div className="text-[10px] text-outline">
                          Terminal A (Gate 1)
                        </div>
                      </td>
                      <td className="py-3 px-space-md text-outline italic">
                        Pending
                      </td>
                      <td className="py-3 px-space-md">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                          On-Time
                        </span>
                      </td>
                      <td className="py-3 px-space-md text-on-surface-variant font-label-sm text-label-sm">
                        <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">
                          No
                        </span>
                      </td>
                      <td className="py-3 px-space-md text-right">
                        <button
                          className="p-1 rounded-lg text-outline hover:text-primary hover:bg-surface-container transition-colors"
                          title="Remark / View Audit"
                        >
                          <span className="material-symbols-outlined text-[18px]">
                            edit_note
                          </span>
                        </button>
                      </td>
                    </tr>
                    {/*  Row 2: Mrs. Grace Okafor  */}
                    <tr className="hover:bg-surface-container-low/60 transition-colors">
                      <td className="py-3 px-space-md">
                        <div className="flex items-center gap-2.5">
                          <img
                            className="w-9 h-9 rounded-full object-cover shadow-xs"
                            data-alt="Professional headshot of Mrs Grace Okafor, a Nigerian female science teacher wearing an elegant blazer in a modern classroom setting with Kaduna sunlight"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8bYsxJYpsfABG3f3YMn63_K3Ijir3HeKQ_d_Bz1PBK7_X7zjw-MEJLlbO06Gq8xNqoXxyWZhpI34b6DsrGZF8d1qQ-iOoYeumMxOPMFAXaBlOYeCFDBRKVb8En-yU6ahmExpukEV6mRKRlOh7LNJEA3srWnlp0CLuU4B6uj1Vgc5k3K7OG8MuM1MChB3R0DIrhlGgmchT-CQQqdjtJ8lveuB9geaPOMbUWincHab-FH3mgSNc3kH5Dw"
                          />
                          <div>
                            <div className="font-label-md text-label-md font-semibold text-primary">
                              Mrs. Grace Okafor
                            </div>
                            <div className="font-body-sm text-[11px] text-outline">
                              EMP-KD-0891 • HOD Sciences
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-space-md text-on-surface-variant">
                        Chemistry &amp; Basic Sc.
                      </td>
                      <td className="py-3 px-space-md">
                        <div className="flex items-center gap-1 font-semibold text-on-surface">
                          <span className="material-symbols-outlined text-[16px] text-secondary">
                            fingerprint
                          </span>
                          <span>07:22 AM</span>
                        </div>
                        <div className="text-[10px] text-outline">
                          Terminal B (Staff Gate)
                        </div>
                      </td>
                      <td className="py-3 px-space-md text-outline italic">
                        Pending
                      </td>
                      <td className="py-3 px-space-md">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                          On-Time
                        </span>
                      </td>
                      <td className="py-3 px-space-md text-on-surface-variant font-label-sm text-label-sm">
                        <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">
                          No
                        </span>
                      </td>
                      <td className="py-3 px-space-md text-right">
                        <button
                          className="p-1 rounded-lg text-outline hover:text-primary hover:bg-surface-container transition-colors"
                          title="Remark / View Audit"
                        >
                          <span className="material-symbols-outlined text-[18px]">
                            edit_note
                          </span>
                        </button>
                      </td>
                    </tr>
                    {/*  Row 3: Mr. John Danladi (Late)  */}
                    <tr className="hover:bg-surface-container-low/60 transition-colors bg-tertiary-fixed/10">
                      <td className="py-3 px-space-md">
                        <div className="flex items-center gap-2.5">
                          <img
                            className="w-9 h-9 rounded-full object-cover shadow-xs"
                            data-alt="Portrait photo of Mr John Danladi, a focused Nigerian mathematics educator in a crisp formal blue shirt, standing near an instructional chalkboard"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBa_fQYrRM1FsJ4pQQJ50DTwAJj9XNf0WmwWeWwQ5BA-xcI0N21SHDQPLQmVv0erndSfFVHd-6EPsLd8VV-C3dx5AOXGJhvWC9V010qqhN-fZB2YfsdEVVW4GJyvkT2IfBBsGhjkMr7FiNdQvPOUfvl8qFWZgLqiTcC4ss3vk25NUPYFyqDCnIQxPRfi20ZuGL4KpkZeKmuzuvA1Q9fDqS93mgwF_-7PrT7agZauByursyITFy45mWfLA"
                          />
                          <div>
                            <div className="font-label-md text-label-md font-semibold text-primary">
                              Mr. John Danladi
                            </div>
                            <div className="font-body-sm text-[11px] text-outline">
                              EMP-KD-1123 • Snr Math Tutor
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-space-md text-on-surface-variant">
                        Mathematics Dept
                      </td>
                      <td className="py-3 px-space-md">
                        <div className="flex items-center gap-1 font-semibold text-tertiary">
                          <span className="material-symbols-outlined text-[16px] text-on-tertiary-container">
                            schedule
                          </span>
                          <span>07:44 AM</span>
                        </div>
                        <div className="text-[10px] text-on-tertiary-container font-medium">
                          Terminal A (+14 mins late)
                        </div>
                      </td>
                      <td className="py-3 px-space-md text-outline italic">
                        Pending
                      </td>
                      <td className="py-3 px-space-md">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span>
                          Late (+14m)
                        </span>
                      </td>
                      <td className="py-3 px-space-md">
                        <span className="px-2 py-0.5 rounded bg-surface-container text-outline font-label-sm text-label-sm">
                          Dismissed
                        </span>
                      </td>
                      <td className="py-3 px-space-md text-right">
                        <button className="px-2 py-1 rounded bg-tertiary-fixed/60 hover:bg-tertiary-fixed text-on-tertiary-fixed text-label-sm font-label-sm font-semibold transition-colors">
                          Explain Log
                        </button>
                      </td>
                    </tr>
                    {/*  Row 4: Ustaz Bashir Lawal  */}
                    <tr className="hover:bg-surface-container-low/60 transition-colors">
                      <td className="py-3 px-space-md">
                        <div className="flex items-center gap-2.5">
                          <img
                            className="w-9 h-9 rounded-full object-cover shadow-xs"
                            data-alt="Portrait photo of Ustaz Bashir Lawal wearing traditional Islamic embroidery cap and white jalabiya in an educational institute library"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBltDGQoBpsOcp35YxXQ0fSARmpclGDKbgKnMGTaP9KdERywQFtLWuQstK2M7xto7SI5lKrF7a3jowSIiFD1oEihzsCW2zE98ffK3NA2YXA0UFL7OgvKNqMIhjG9jSaMV17H3A3-USDhzoRdvbkaJ2rJNf0g0Wus_rMlzhKGQlOgUGGpxyxEB7Zj1oC7QKAAsk_cyHQql4fpafVv3xGnsGh0SKSp7O95-Mjd1uDHpLmdXA8MeFWBuDQ4Q"
                          />
                          <div>
                            <div className="font-label-md text-label-md font-semibold text-primary">
                              Ustaz Bashir Lawal
                            </div>
                            <div className="font-body-sm text-[11px] text-outline">
                              EMP-KD-0744 • Arabic Master
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-space-md text-on-surface-variant">
                        Arabic Language
                      </td>
                      <td className="py-3 px-space-md">
                        <div className="flex items-center gap-1 font-semibold text-on-surface">
                          <span className="material-symbols-outlined text-[16px] text-secondary">
                            fingerprint
                          </span>
                          <span>07:10 AM</span>
                        </div>
                        <div className="text-[10px] text-outline">
                          Terminal A (Gate 1)
                        </div>
                      </td>
                      <td className="py-3 px-space-md text-outline italic">
                        Pending
                      </td>
                      <td className="py-3 px-space-md">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                          On-Time
                        </span>
                      </td>
                      <td className="py-3 px-space-md text-on-surface-variant font-label-sm text-label-sm">
                        <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">
                          No
                        </span>
                      </td>
                      <td className="py-3 px-space-md text-right">
                        <button
                          className="p-1 rounded-lg text-outline hover:text-primary hover:bg-surface-container transition-colors"
                          title="Remark"
                        >
                          <span className="material-symbols-outlined text-[18px]">
                            edit_note
                          </span>
                        </button>
                      </td>
                    </tr>
                    {/*  Row 5: Nurse Maryam Tanko  */}
                    <tr className="hover:bg-surface-container-low/60 transition-colors">
                      <td className="py-3 px-space-md">
                        <div className="flex items-center gap-2.5">
                          <img
                            className="w-9 h-9 rounded-full object-cover shadow-xs"
                            data-alt="Portrait photo of Nurse Maryam Tanko in a clean professional school healthcare nurse uniform with stethoscope at Noorul Ilm school infirmary"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmZ0_Asta5QfdveTUXsoqP2iE57p03SRQjmpHdCvjhlpoQVOQkpNgZj5xcQm3r7fGkpsT8N1z2HQmOUwm1z1HmZxqi-XDLIX3tFhhutWljeyjO1im_lKcZl47L0mmgPcn83S9FE2ADN1Grifpi2-HgMmKvcML20l2dy8WLFBEVtagtwZFcH8eXFaklAbI4kkit-wyxJpA2IEUt9VvcFi9PYa2lyaY2GbPukjehAKwQ8ASgAhtkryx1dA"
                          />
                          <div>
                            <div className="font-label-md text-label-md font-semibold text-primary">
                              Nurse Maryam Tanko
                            </div>
                            <div className="font-body-sm text-[11px] text-outline">
                              EMP-KD-0518 • Health Officer
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-space-md text-on-surface-variant">
                        Clinic &amp; Student Health
                      </td>
                      <td className="py-3 px-space-md">
                        <div className="flex items-center gap-1 font-semibold text-on-surface">
                          <span className="material-symbols-outlined text-[16px] text-secondary">
                            fingerprint
                          </span>
                          <span>07:15 AM</span>
                        </div>
                        <div className="text-[10px] text-outline">
                          Clinic Station Dedicated
                        </div>
                      </td>
                      <td className="py-3 px-space-md text-outline italic">
                        Pending
                      </td>
                      <td className="py-3 px-space-md">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                          Clinic On-Duty
                        </span>
                      </td>
                      <td className="py-3 px-space-md text-on-surface-variant font-label-sm text-label-sm">
                        <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">
                          N/A
                        </span>
                      </td>
                      <td className="py-3 px-space-md text-right">
                        <button
                          className="p-1 rounded-lg text-outline hover:text-primary hover:bg-surface-container transition-colors"
                          title="Clinic Shift Record"
                        >
                          <span className="material-symbols-outlined text-[18px]">
                            medical_services
                          </span>
                        </button>
                      </td>
                    </tr>
                    {/*  Row 6: Malama Zainab Kabir (Maternity Leave)  */}
                    <tr className="hover:bg-surface-container-low/60 transition-colors bg-surface-container-low/40">
                      <td className="py-3 px-space-md">
                        <div className="flex items-center gap-2.5 opacity-80">
                          <img
                            className="w-9 h-9 rounded-full object-cover grayscale"
                            data-alt="Professional avatar photo of Malama Zainab Kabir wearing an elegant traditional hijab in a neutral professional studio portrait"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdoxQxFAPJiD30zaSSgXNyzOZH0ztagfgwF8T_yjSI2z1Lwjm37hTfNgFQsRPXSYtbeP3-fvddvtxy1FSt3bUib_QiMxn0SSNQDCzk3Ow5Vh6w7wfQPIHHfEgZjyZTBo24Wka004HikBSaqdwPRCuwM0HfdZ3C_hWqI2-siNin1fjzNJL2o-6LKpvYZGqaI3av0TeefjuPiZvC90rflzBLLKtMHH9T3Nen7yAEP9dhmqYZVwoPZMSCsA"
                          />
                          <div>
                            <div className="font-label-md text-label-md font-semibold text-on-surface">
                              Malama Zainab Kabir
                            </div>
                            <div className="font-body-sm text-[11px] text-outline">
                              EMP-KD-0612 • Physics Teacher
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-space-md text-on-surface-variant">
                        Sciences Dept
                      </td>
                      <td className="py-3 px-space-md text-outline">
                        <span className="italic text-body-sm">
                          Exempted Punch
                        </span>
                      </td>
                      <td className="py-3 px-space-md text-outline">--</td>
                      <td className="py-3 px-space-md">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold">
                          <span className="material-symbols-outlined text-[13px]">
                            child_friendly
                          </span>
                          Maternity Leave
                        </span>
                      </td>
                      <td className="py-3 px-space-md">
                        <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-secondary bg-secondary-container/40 px-2 py-0.5 rounded">
                          <span className="material-symbols-outlined text-[14px]">
                            check_circle
                          </span>
                          Mal. Ibrahim Covering
                        </div>
                      </td>
                      <td className="py-3 px-space-md text-right">
                        <span className="text-body-sm text-outline">
                          Term Return: Jan '27
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-space-sm bg-surface-container-low flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                <span>
                  Showing 6 of 120 registered faculty &amp; personnel logs
                </span>
                <div className="flex items-center gap-1">
                  <button
                    className="px-2 py-1 rounded bg-surface-container-lowest text-outline hover:text-on-surface disabled:opacity-40"
                    disabled
                  >
                    Previous
                  </button>
                  <span className="px-2 font-semibold text-primary">1</span>
                  <button className="px-2 py-1 rounded hover:bg-surface-container-lowest text-on-surface">
                    2
                  </button>
                  <button className="px-2 py-1 rounded hover:bg-surface-container-lowest text-on-surface">
                    3
                  </button>
                  <button className="px-2 py-1 rounded bg-surface-container-lowest text-on-surface hover:text-primary">
                    Next
                  </button>
                </div>
              </div>
            </div>
            {/*  Class Substitution Coverage Manager  */}
            <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden p-space-lg space-y-space-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[22px]">
                      swap_horizontal_circle
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-primary">
                      Class Substitution &amp; Relief Coverage Manager
                    </h3>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Active automatic load distribution for absent educators
                    during today's periods.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                    6 / 6 Roster Covered
                  </span>
                </div>
              </div>
              {/*  Coverage Data Grid  */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs">
                {/*  Coverage Item 1  */}
                <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col justify-between space-y-space-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                        SSS 2 Science Block • Room 14
                      </span>
                      <h4 className="font-label-lg text-label-lg text-primary font-bold">
                        Physics: Electromagnetic Waves
                      </h4>
                      <div className="text-[12px] text-on-surface-variant mt-0.5">
                        Scheduled Time:{" "}
                        <span className="font-semibold text-on-surface">
                          11:00 AM – 11:45 AM
                        </span>
                      </div>
                    </div>
                    <span className="p-2 rounded-lg bg-surface-container-high text-primary">
                      <span className="material-symbols-outlined text-[20px]">
                        science
                      </span>
                    </span>
                  </div>
                  <div className="pt-2 bg-surface-container-lowest p-space-sm rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-xs">
                        KS
                      </div>
                      <div>
                        <div className="font-label-sm text-label-sm font-semibold text-on-surface">
                          Mal. Kabir Sani (Relief)
                        </div>
                        <div className="text-[10px] text-secondary font-medium">
                          Coverage Confirmed &amp; Lesson Plan Shared
                        </div>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-secondary text-[20px]">
                      verified
                    </span>
                  </div>
                </div>
                {/*  Coverage Item 2  */}
                <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col justify-between space-y-space-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                        JSS 3 Gold Arm • Hall B
                      </span>
                      <h4 className="font-label-lg text-label-lg text-primary font-bold">
                        Islamic Studies: Hadith Memorization
                      </h4>
                      <div className="text-[12px] text-on-surface-variant mt-0.5">
                        Scheduled Time:{" "}
                        <span className="font-semibold text-on-surface">
                          09:15 AM – 10:00 AM
                        </span>
                      </div>
                    </div>
                    <span className="p-2 rounded-lg bg-surface-container-high text-primary">
                      <span className="material-symbols-outlined text-[20px]">
                        menu_book
                      </span>
                    </span>
                  </div>
                  <div className="pt-2 bg-surface-container-lowest p-space-sm rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-xs">
                        AA
                      </div>
                      <div>
                        <div className="font-label-sm text-label-sm font-semibold text-on-surface">
                          Ustaz Ahmad Al-Hassan
                        </div>
                        <div className="text-[10px] text-secondary font-medium">
                          Duty Accepted via Mobile App
                        </div>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-secondary text-[20px]">
                      verified
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  RIGHT SECTION: Leave Request Approval Workbench & Balances (35% -> col-span-12 xl:col-span-4)  */}
          <div className="lg:col-span-12 xl:col-span-4 space-y-space-lg">
            {/*  Workbench Header Card  */}
            <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg space-y-space-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[24px]">
                    assignment_turned_in
                  </span>
                  <div>
                    <h2 className="font-headline-sm text-headline-sm text-primary leading-tight">
                      Leave Approval Board
                    </h2>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Administrative Decision Desk
                    </span>
                  </div>
                </div>
                <span className="h-6 px-2 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm flex items-center justify-center font-bold">
                  4 Action
                </span>
              </div>
              {/*  Filter Segment  */}
              <div className="flex items-center p-1 bg-surface-container-low rounded-lg text-center font-label-sm text-label-sm">
                <button className="flex-1 py-1 rounded-md bg-surface-container-lowest font-semibold text-primary shadow-xs">
                  Pending (4)
                </button>
                <button className="flex-1 py-1 rounded-md text-on-surface-variant hover:text-on-surface transition-colors">
                  Approved (18)
                </button>
                <button className="flex-1 py-1 rounded-md text-on-surface-variant hover:text-on-surface transition-colors">
                  Rejected (2)
                </button>
              </div>
              {/*  Interactive Review Cards (Pending 3 instances shown)  */}
              <div className="space-y-space-md">
                {/*  Leave Card 1: Mal. Garba Usman  */}
                <div className="p-space-md bg-surface-container-low rounded-xl space-y-space-sm hover:shadow-xs transition-shadow">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <img
                        className="w-10 h-10 rounded-full object-cover shadow-xs"
                        data-alt="Portrait photo of Malam Garba Usman in an administrative review context, Noorul Ilm Kaduna school employee"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKdJMWWPQ3llKQ-rEKWIIqCWOBKn3CnkMF7qLI-iMaYdftm4MOqSV-jwaDit46h7XXBSm69Q_xZkE3UgtKve9jVWuQDk22kvgZ6M-93FCW-YUXCCY16lcLHyOOGwGGSibMYzPRjWgxih4PhjrIDDc62psxW9iZabHWqW4uJ21nNBgUtr_tAsUVs0M8rHHBPCfIKFXneF988vV4_70J3jMUreV7q9G4zQ09epBangagWWBLUBQOVNgHHg"
                      />
                      <div>
                        <div className="font-label-md text-label-md font-semibold text-primary">
                          Malam Garba Usman
                        </div>
                        <div className="text-[11px] text-outline">
                          EMP-KD-1042 • Islamic Studies
                        </div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-[10px] font-bold uppercase">
                      Casual
                    </span>
                  </div>
                  <div className="bg-surface-container-lowest p-2.5 rounded-lg space-y-1">
                    <div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface">
                      <span className="font-semibold text-primary">
                        3 Days (22 – 24 Oct 2026)
                      </span>
                      <span className="text-outline text-[11px]">
                        Kano Nuptials
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      "Family wedding ceremony in Fagge, Kano State. Class
                      substitution arrangement finalized with Ustaz Bashir."
                    </p>
                    <div className="flex items-center gap-1.5 pt-1 text-[11px] text-primary">
                      <span className="material-symbols-outlined text-[14px]">
                        attachment
                      </span>
                      <span className="underline cursor-pointer">
                        Signed_Formal_Request_Letter.pdf
                      </span>
                    </div>
                  </div>
                  {/*  Approval Controls  */}
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      className="flex-1 py-1.5 bg-secondary text-on-secondary rounded-lg font-label-sm text-label-sm hover:opacity-95 transition-all flex items-center justify-center gap-1 shadow-xs"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        check_circle
                      </span>
                      <span>Approve (Dr. Bello)</span>
                    </button>
                    <button
                      className="px-3 py-1.5 bg-surface-container-lowest text-error rounded-lg font-label-sm text-label-sm hover:bg-error-container/40 transition-colors"
                      type="button"
                    >
                      Decline
                    </button>
                  </div>
                </div>
                {/*  Leave Card 2: Malama Ruqayyah Al-Amin  */}
                <div className="p-space-md bg-surface-container-low rounded-xl space-y-space-sm hover:shadow-xs transition-shadow">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <img
                        className="w-10 h-10 rounded-full object-cover shadow-xs"
                        data-alt="Portrait photo of Malama Ruqayyah Al-Amin, a secondary school teacher in Kaduna Nigeria wearing a smart hijab and soft expression"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBODhL4IMctKwxz3dqAEWg-CTWVvA1bo5jEy5W3pkw0R8fTgOqQG9cTolny8EvtTxbgU0YMR8wSnCn-eeaeiK6E7mfpAICYGeK8gV2iHIbsFAkJ04UbnGGwAuFI31bUsri0QBkuv1ktFRbsozRMfFGHt3eg7tjUSBqlZXi_hIRLMwgYRUrUcH4qbhOvC7ptrFmZ1YzuHusjho3mZQ1Yod2PyfDmo3EhWtz39NupJNSP2JGpkgN2cyWV6A"
                      />
                      <div>
                        <div className="font-label-md text-label-md font-semibold text-primary">
                          Malama Ruqayyah Al-Amin
                        </div>
                        <div className="text-[11px] text-outline">
                          EMP-KD-0931 • English Dept
                        </div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-[10px] font-bold uppercase">
                      Medical
                    </span>
                  </div>
                  <div className="bg-surface-container-lowest p-2.5 rounded-lg space-y-1">
                    <div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface">
                      <span className="font-semibold text-primary">
                        2 Days (19 – 20 Oct 2026)
                      </span>
                      <span className="text-secondary font-medium text-[11px]">
                        Clinic Certified
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Supported by Noorul Ilm Clinic referral memo &amp; Barau
                      Dikko Teaching Hospital appointment notice.
                    </p>
                  </div>
                  {/*  Approval Controls  */}
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      className="flex-1 py-1.5 bg-secondary text-on-secondary rounded-lg font-label-sm text-label-sm hover:opacity-95 transition-all flex items-center justify-center gap-1 shadow-xs"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        check_circle
                      </span>
                      <span>Approve</span>
                    </button>
                    <button
                      className="px-3 py-1.5 bg-surface-container-lowest text-error rounded-lg font-label-sm text-label-sm hover:bg-error-container/40 transition-colors"
                      type="button"
                    >
                      Decline
                    </button>
                  </div>
                </div>
                {/*  Leave Card 3: Mr. Emmanuel Okon  */}
                <div className="p-space-md bg-surface-container-low rounded-xl space-y-space-sm hover:shadow-xs transition-shadow">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <img
                        className="w-10 h-10 rounded-full object-cover shadow-xs"
                        data-alt="Portrait photo of Mr Emmanuel Okon, a diligent Nigerian educator in an academic school environment"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeNFB-JaVfS59M6MxPLu4ib1X97KijdNrMnZLpuOHQgrdt0_qsRDT25I14qP9ynsuf_Js7r7uhdtdCT5UqiijTdo_KESNr6Jr61fobhQDoLwKnF_l6eIMFQWU-b3nsYe_f0bKeWnK7T9tDA2fKLqWY21IGaYQCK1_hf70UKvcp5UESNjenWNkr4Y8jYgmpd9vs00ozTBFIxoo1uvFfYNAbJBFj2ygOQTubTfw_usxpR264O0zyjT_FEQ"
                      />
                      <div>
                        <div className="font-label-md text-label-md font-semibold text-primary">
                          Mr. Emmanuel Okon
                        </div>
                        <div className="text-[11px] text-outline">
                          EMP-KD-0419 • Fine Arts Master
                        </div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-[10px] font-bold uppercase">
                      Study / TRCN
                    </span>
                  </div>
                  <div className="bg-surface-container-lowest p-2.5 rounded-lg space-y-1">
                    <div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface">
                      <span className="font-semibold text-primary">
                        4 Days (27 – 30 Oct 2026)
                      </span>
                      <span className="text-outline text-[11px]">
                        Accreditation
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      TRCN Professional Qualifying Examination sitting at Kaduna
                      State College of Education center.
                    </p>
                  </div>
                  {/*  Approval Controls  */}
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      className="flex-1 py-1.5 bg-secondary text-on-secondary rounded-lg font-label-sm text-label-sm hover:opacity-95 transition-all flex items-center justify-center gap-1 shadow-xs"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        check_circle
                      </span>
                      <span>Approve</span>
                    </button>
                    <button
                      className="px-3 py-1.5 bg-surface-container-lowest text-error rounded-lg font-label-sm text-label-sm hover:bg-error-container/40 transition-colors"
                      type="button"
                    >
                      Decline
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/*  Institutional Leave Quota & Consumption Widget  */}
            <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg space-y-space-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[22px]">
                    pie_chart
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    2026/2027 Leave Balance Quota
                  </h3>
                </div>
                <span className="font-label-sm text-label-sm text-outline">
                  Kaduna Staff Code
                </span>
              </div>
              <div className="space-y-space-sm pt-1">
                {/*  Quota 1: Annual Leave  */}
                <div className="space-y-1">
                  <div className="flex justify-between text-label-sm font-label-sm">
                    <span className="text-on-surface font-medium">
                      Annual Statutory Leave (30 Days)
                    </span>
                    <span className="text-primary font-semibold">
                      1,840 / 3,600 Days Consumed
                    </span>
                  </div>
                  <div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
                    <div className="bg-primary h-2 rounded-full w-[51%]"></div>
                  </div>
                </div>
                {/*  Quota 2: Casual Leave  */}
                <div className="space-y-1">
                  <div className="flex justify-between text-label-sm font-label-sm">
                    <span className="text-on-surface font-medium">
                      Casual Emergency (7 Days / Staff)
                    </span>
                    <span className="text-on-surface-variant font-semibold">
                      324 / 840 Days (38.5%)
                    </span>
                  </div>
                  <div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
                    <div className="bg-secondary h-2 rounded-full w-[38.5%]"></div>
                  </div>
                </div>
                {/*  Quota 3: Sick Leave  */}
                <div className="space-y-1">
                  <div className="flex justify-between text-label-sm font-label-sm">
                    <span className="text-on-surface font-medium">
                      Certified Sick Leave (14 Days)
                    </span>
                    <span className="text-tertiary font-semibold">
                      142 / 1,680 Days (8.4%)
                    </span>
                  </div>
                  <div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
                    <div className="bg-tertiary-fixed-dim h-2 rounded-full w-[8.4%]"></div>
                  </div>
                </div>
                {/*  Quota 4: Maternity & Paternity  */}
                <div className="space-y-1">
                  <div className="flex justify-between text-label-sm font-label-sm">
                    <span className="text-on-surface font-medium">
                      Maternity Extended Leave (84 Days)
                    </span>
                    <span className="text-primary font-semibold">
                      2 Active Staff on Leave
                    </span>
                  </div>
                  <div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
                    <div className="bg-primary-container h-2 rounded-full w-[24%]"></div>
                  </div>
                </div>
              </div>
              <div className="pt-2 bg-surface-container-low p-space-sm rounded-lg flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-secondary">
                    verified_user
                  </span>
                  <span>Kaduna State Ministry of Education Compliant</span>
                </div>
                <button className="font-label-sm text-label-sm text-primary font-semibold hover:underline">
                  View Policy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
