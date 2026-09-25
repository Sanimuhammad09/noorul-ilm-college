import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/admin/promotion-graduation-engine")({
  component: PromotionGraduationEngine,
});

function PromotionGraduationEngine() {
  return (
    <main className="w-full pt-16 px-space-lg py-space-lg flex-1 bg-surface">
      <div className="flex flex-col w-full space-y-space-lg">
        {/*  Breadcrumbs & Sovereign Context Header  */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
          <div className="space-y-1">
            <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
              <span className="hover:text-primary cursor-pointer transition-colors">
                Academic Management
              </span>
              <span className="material-symbols-outlined text-[14px]">
                chevron_right
              </span>
              <span className="text-primary font-semibold">
                Promotion &amp; Graduation Engine
              </span>
              <span className="material-symbols-outlined text-[14px]">
                chevron_right
              </span>
              <span className="text-outline">Session 2026/2027</span>
            </div>
            <div className="flex flex-wrap items-center gap-space-sm pt-0.5">
              <h1 className="font-display-lg text-display-lg text-primary tracking-tight">
                Academic Promotion, Progression &amp; Graduation Engine
              </h1>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm shadow-sm">
                <span className="material-symbols-outlined text-[14px]">
                  verified
                </span>
                Kaduna State MoE Standard Promotion Benchmark: 50% Aggregate
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-4xl">
              Automated year-end and term-end promotion assessment, passing
              threshold verification, conditional probation management, JSS 3
              BECE progression, and SSS 3 WASSCE/NECO graduation clearance.
            </p>
          </div>
          {/*  Sovereign Top Action Suite  */}
          <div className="flex flex-wrap items-center gap-space-sm shrink-0">
            <button
              className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-colors shadow-sm"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px] text-primary">
                tune
              </span>
              <span>Configure Criteria</span>
            </button>
            <button
              className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-colors shadow-sm"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px] text-primary">
                receipt_long
              </span>
              <span>Broad-Sheet</span>
            </button>
            <button
              className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-colors shadow-sm"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px] text-secondary">
                file_download
              </span>
              <span>Clearance Slips</span>
            </button>
            <button
              className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md transition-all shadow-md active:scale-[0.98]"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">
                bolt
              </span>
              <span>Execute Batch Evaluation</span>
            </button>
          </div>
        </div>
        {/*  KPI Metric Mosaic (4 Cards)  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {/*  Card 1  */}
          <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                  Evaluated Scholars
                </span>
                <div className="font-metric-lg text-metric-lg text-primary tracking-tight">
                  1,842
                </div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[22px]">
                  groups
                </span>
              </div>
            </div>
            <div className="pt-space-md flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
              <span className="flex items-center gap-1 text-secondary font-semibold">
                <span className="material-symbols-outlined text-[16px]">
                  check_circle
                </span>{" "}
                100% Enrolled
              </span>
              <span className="text-outline">Session 2026/2027 Track</span>
            </div>
            <div className="w-full bg-surface-container-low h-1 rounded-full mt-2 overflow-hidden">
              <div className="bg-primary h-full w-full rounded-full"></div>
            </div>
          </div>
          {/*  Card 2  */}
          <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                  Qualified for Promotion
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-metric-lg text-metric-lg text-secondary tracking-tight">
                    1,728
                  </span>
                  <span className="font-label-md text-label-md text-secondary font-bold">
                    (93.8%)
                  </span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-secondary-container/60 flex items-center justify-center text-on-secondary-container group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                <span className="material-symbols-outlined text-[22px]">
                  school
                </span>
              </div>
            </div>
            <div className="pt-space-md text-on-surface-variant font-label-sm text-label-sm truncate">
              Met ≥50% aggregate + English &amp; Maths core pass
            </div>
            <div className="w-full bg-surface-container-low h-1 rounded-full mt-2 overflow-hidden">
              <div className="bg-secondary h-full w-[93.8%] rounded-full"></div>
            </div>
          </div>
          {/*  Card 3  */}
          <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                  Conditional / Trial
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-metric-lg text-metric-lg text-on-tertiary-container tracking-tight">
                    86
                  </span>
                  <span className="font-label-md text-label-md text-on-tertiary-container font-bold">
                    (4.7%)
                  </span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed-variant group-hover:bg-on-tertiary-container group-hover:text-on-tertiary transition-colors">
                <span className="material-symbols-outlined text-[22px]">
                  published_with_changes
                </span>
              </div>
            </div>
            <div className="pt-space-md flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
              <span className="truncate">
                Summer remedial clinic &amp; re-sit
              </span>
              <span className="px-1.5 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-semibold text-[10px]">
                Action
              </span>
            </div>
            <div className="w-full bg-surface-container-low h-1 rounded-full mt-2 overflow-hidden">
              <div className="bg-on-tertiary-container h-full w-[4.7%] rounded-full"></div>
            </div>
          </div>
          {/*  Card 4  */}
          <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                  Graduation Class (SSS 3)
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-metric-lg text-metric-lg text-primary tracking-tight">
                    148
                  </span>
                  <span className="font-label-md text-label-md text-primary font-bold">
                    Finalists
                  </span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-on-primary-fixed group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[22px]">
                  workspace_premium
                </span>
              </div>
            </div>
            <div className="pt-space-md flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
              <span className="text-secondary font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">
                  done_all
                </span>{" "}
                100% Bursary Cleared
              </span>
              <span className="text-outline">WASSCE/NECO</span>
            </div>
            <div className="w-full bg-surface-container-low h-1 rounded-full mt-2 overflow-hidden">
              <div className="bg-primary h-full w-full rounded-full"></div>
            </div>
          </div>
        </div>
        {/*  Promotion Rules Parameter Bar (Kaduna MoE Baseline Accordion Header)  */}
        <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[24px]">
                gavel
              </span>
            </div>
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  Active Promotion Policy Matrix
                </span>
                <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-[10px] uppercase font-bold">
                  Gazetted 2026/27
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-space-md gap-y-1 font-body-sm text-body-sm text-on-surface-variant">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  Min. Aggregate:{" "}
                  <strong className="text-on-surface font-semibold">
                    50.0%
                  </strong>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  Mandatory:{" "}
                  <strong className="text-on-surface font-semibold">
                    English &amp; Mathematics (≥50%)
                  </strong>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  Attendance Floor:{" "}
                  <strong className="text-on-surface font-semibold">
                    75.0% Term Presence
                  </strong>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  Conduct:{" "}
                  <strong className="text-on-surface font-semibold">
                    0 Unresolved Suspensions
                  </strong>
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button className="px-3 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-colors flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">
                edit_note
              </span>
              <span>Modify Bounds</span>
            </button>
          </div>
        </div>
        {/*  Primary Workspace: Split 8-Col Data Table & 4-Col Side Panels  */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
          {/*  LEFT 8 COLS: Class Selection & Progression Table  */}
          <div className="lg:col-span-8 space-y-space-md">
            {/*  Table Filter Toolbar  */}
            <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm space-y-space-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                <div className="flex items-center gap-space-xs overflow-x-auto pb-1 sm:pb-0">
                  <button className="px-space-md py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md whitespace-nowrap shadow-sm">
                    SSS 2 → SSS 3 (Senior Exit Prep)
                  </button>
                  <button className="px-space-md py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant font-label-md text-label-md whitespace-nowrap transition-colors">
                    JSS 3 → SSS 1 (BECE Stream)
                  </button>
                  <button className="px-space-md py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant font-label-md text-label-md whitespace-nowrap transition-colors">
                    Pri 6 → JSS 1 (Common Entrance)
                  </button>
                  <button className="px-space-md py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant font-label-md text-label-md whitespace-nowrap transition-colors">
                    All Batches
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-label-sm text-label-sm text-outline">
                    Viewing 128 of 128 Candidates
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm pt-space-xs">
                <div className="relative w-full sm:w-72">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">
                    filter_list
                  </span>
                  <input
                    className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:shadow-sm transition-all"
                    placeholder="Filter by name, ID, arm..."
                    type="text"
                  />
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  <select className="px-3 py-1.5 rounded-lg bg-surface-container-low font-label-md text-label-md text-on-surface focus:outline-none cursor-pointer">
                    <option>All Decision Statuses</option>
                    <option>Promote with Honors</option>
                    <option>Promoted</option>
                    <option>Conditional Promotion (Trial)</option>
                    <option>Repeat Class</option>
                    <option>Academic Review</option>
                  </select>
                  <button
                    className="p-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant transition-colors"
                    title="Export CSV"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      download
                    </span>
                  </button>
                </div>
              </div>
            </div>
            {/*  Main Progression Registry Table  */}
            <div className="rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low/70 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                      <th className="py-3 px-4">Student &amp; ID</th>
                      <th className="py-3 px-3">Class Path</th>
                      <th className="py-3 px-3 text-right">Cum. Avg</th>
                      <th className="py-3 px-3">Core Status</th>
                      <th className="py-3 px-3 text-center">Attendance</th>
                      <th className="py-3 px-3">Bursary</th>
                      <th className="py-3 px-3">Progression Decision</th>
                      <th className="py-3 px-4 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container-low font-body-sm text-body-sm">
                    {/*  Student Row 1: Aisha Mansur Danbaba (Honors)  */}
                    <tr className="hover:bg-surface-container-low/40 transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <img
                            className="w-8 h-8 rounded-full object-cover shrink-0"
                            data-alt="Close up academic student portrait of a teenage Nigerian Muslim female scholar wearing a neat modest hijab and Noorul Ilm school blazer in soft library lighting."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCioprfgYA9947wcD1S7cOs0bl2jFUMxxqdGR9eyqKTN_PC0fstiPvFGpLtFiSDjB8cd4Fqvf4dBsNv4Hs2fXV81VjRSNQcvrgBAyxrjyepCgb5kSuEQDyMOr2LtGLPphqhT96KjN4Ez8GP0eNNOE3Jm6TG4Q4M8o-cRZwsnqpXKKhKQKG6xCwcoIxnjM-KaEsn_t7IUv3gAiV9zPo6Da7ouJ7hSMHvgtz1rkJl32HDz3bndrwB0YLxhA"
                          />
                          <div className="flex flex-col min-w-0">
                            <span className="font-label-md text-label-md text-on-surface font-bold truncate">
                              Aisha Mansur Danbaba
                            </span>
                            <span className="font-label-sm text-[11px] text-outline font-mono">
                              NIIS/2021/0418
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-3">
                        <div className="flex items-center gap-1 font-label-sm text-label-sm">
                          <span className="text-on-surface font-semibold">
                            SSS 2 Sci A
                          </span>
                          <span className="material-symbols-outlined text-[14px] text-outline">
                            trending_flat
                          </span>
                          <span className="text-primary font-bold">
                            SSS 3 Sci A
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-3 text-right">
                        <span className="font-headline-sm text-headline-sm font-bold text-primary">
                          91.0%
                        </span>
                      </td>
                      <td className="py-3.5 px-3">
                        <div className="flex items-center gap-1">
                          <span
                            className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-secondary-container text-on-secondary-container"
                            title="Maths: 94%"
                          >
                            M: A1
                          </span>
                          <span
                            className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-secondary-container text-on-secondary-container"
                            title="English: 88%"
                          >
                            E: B2
                          </span>
                          <span
                            className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-secondary-container text-on-secondary-container"
                            title="Sciences: 92%"
                          >
                            S: A1
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-3 text-center">
                        <span className="font-label-sm text-label-sm text-secondary font-bold">
                          98.5%
                        </span>
                      </td>
                      <td className="py-3.5 px-3">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container text-[11px] font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>{" "}
                          100% Cleared
                        </span>
                      </td>
                      <td className="py-3.5 px-3">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-label-sm font-label-sm font-bold shadow-xs">
                          <span className="material-symbols-outlined text-[13px] text-on-tertiary-fixed-variant">
                            military_tech
                          </span>
                          Promote with Honors
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <button
                            className="p-1 rounded hover:bg-surface-container text-on-surface-variant transition-colors"
                            title="Print Academic Dossier"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              print
                            </span>
                          </button>
                          <button
                            className="p-1 rounded hover:bg-surface-container text-on-surface-variant transition-colors"
                            title="Administrative Override"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              verified_user
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/*  Student Row 2: Farouk Umar Sadiq (Standard Promoted)  */}
                    <tr className="hover:bg-surface-container-low/40 transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <img
                            className="w-8 h-8 rounded-full object-cover shrink-0"
                            data-alt="Portrait photo of a young male Nigerian secondary school student in a dark blue collared uniform against a bright Kaduna classroom background."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuATUiv0UZBR0_76m9VDe3gAvdy4yfd_6LLZIxocywBufn5Z360TVhv6CjwX7UR3cljQwodw-af75dM5kGfm2jdyEWHo0dzw_RutvUlZTQWHafoyXxycptbkpoD1S0HNjrzbQII9Yy64hfBGUPRBtP7id6YZtX99xo852Kd6jGzXfwuPGztejffFDcFddcQo2k_FTXwaCP-ezpEW_usp1CcRv4aAHIyx-apVzHWEFdz-Ctc3IyiDRWT75Q"
                          />
                          <div className="flex flex-col min-w-0">
                            <span className="font-label-md text-label-md text-on-surface font-bold truncate">
                              Farouk Umar Sadiq
                            </span>
                            <span className="font-label-sm text-[11px] text-outline font-mono">
                              NIIS/2021/0532
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-3">
                        <div className="flex items-center gap-1 font-label-sm text-label-sm">
                          <span className="text-on-surface font-semibold">
                            SSS 2 Sci A
                          </span>
                          <span className="material-symbols-outlined text-[14px] text-outline">
                            trending_flat
                          </span>
                          <span className="text-primary font-bold">
                            SSS 3 Sci A
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-3 text-right">
                        <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                          85.5%
                        </span>
                      </td>
                      <td className="py-3.5 px-3">
                        <div className="flex items-center gap-1">
                          <span
                            className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-secondary-container text-on-secondary-container"
                            title="Maths: 82%"
                          >
                            M: B2
                          </span>
                          <span
                            className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-secondary-container text-on-secondary-container"
                            title="English: 86%"
                          >
                            E: B2
                          </span>
                          <span
                            className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-secondary-container text-on-secondary-container"
                            title="Sciences: 89%"
                          >
                            S: A1
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-3 text-center">
                        <span className="font-label-sm text-label-sm text-secondary font-bold">
                          94.2%
                        </span>
                      </td>
                      <td className="py-3.5 px-3">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container text-[11px] font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>{" "}
                          100% Cleared
                        </span>
                      </td>
                      <td className="py-3.5 px-3">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-container/60 text-on-secondary-container text-label-sm font-label-sm font-bold">
                          <span className="material-symbols-outlined text-[13px]">
                            check_circle
                          </span>
                          Promoted
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <button
                            className="p-1 rounded hover:bg-surface-container text-on-surface-variant transition-colors"
                            title="Print Academic Dossier"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              print
                            </span>
                          </button>
                          <button
                            className="p-1 rounded hover:bg-surface-container text-on-surface-variant transition-colors"
                            title="Administrative Override"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              verified_user
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/*  Student Row 3: Khadijah Ahmad Rufai (Promoted - Minor Bursary Hold)  */}
                    <tr className="hover:bg-surface-container-low/40 transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <img
                            className="w-8 h-8 rounded-full object-cover shrink-0"
                            data-alt="Headshot of a focused Northern Nigerian female high school student wearing a pristine navy hijab with warm natural light from a window in an administrative school setting."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbTae5B41WjZfU3oMmd2VtwC8Rt44fFo2ChR14b7DkiQSTNSEsEoyrDmwzKdXoegm92BSSVqVJ9hQy5CKihuet35mUNWCquxU6XzNpddtBIuqsLOciND3YZKmuKQ3tQnVipWfOVpQusI-tEY5fgry4GBUMWaoy6NS7Ssd7QqWiQmLBvm_TGuzkSgunz8iwuE7YzJrV_Qs7uKmrVd9ZNT-HH4wH_adaqTlA6oBpaJi3pNY_ZRrGjiQGQg"
                          />
                          <div className="flex flex-col min-w-0">
                            <span className="font-label-md text-label-md text-on-surface font-bold truncate">
                              Khadijah Ahmad Rufai
                            </span>
                            <span className="font-label-sm text-[11px] text-outline font-mono">
                              NIIS/2021/0491
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-3">
                        <div className="flex items-center gap-1 font-label-sm text-label-sm">
                          <span className="text-on-surface font-semibold">
                            SSS 2 Sci B
                          </span>
                          <span className="material-symbols-outlined text-[14px] text-outline">
                            trending_flat
                          </span>
                          <span className="text-primary font-bold">
                            SSS 3 Sci B
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-3 text-right">
                        <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                          72.5%
                        </span>
                      </td>
                      <td className="py-3.5 px-3">
                        <div className="flex items-center gap-1">
                          <span
                            className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-secondary-container text-on-secondary-container"
                            title="Maths: 68%"
                          >
                            M: B3
                          </span>
                          <span
                            className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-secondary-container text-on-secondary-container"
                            title="English: 74%"
                          >
                            E: B3
                          </span>
                          <span
                            className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-secondary-container text-on-secondary-container"
                            title="Sciences: 75%"
                          >
                            S: B2
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-3 text-center">
                        <span className="font-label-sm text-label-sm text-secondary font-bold">
                          88.0%
                        </span>
                      </td>
                      <td className="py-3.5 px-3">
                        <span
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-error-container text-on-error-container text-[11px] font-semibold"
                          title="₦18,500 Term 3 balance"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-error"></span>{" "}
                          Arrears Pending
                        </span>
                      </td>
                      <td className="py-3.5 px-3">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-container/60 text-on-secondary-container text-label-sm font-label-sm font-bold">
                          <span className="material-symbols-outlined text-[13px]">
                            check_circle
                          </span>
                          Promoted
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <button
                            className="p-1 rounded hover:bg-surface-container text-on-surface-variant transition-colors"
                            title="Print Academic Dossier"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              print
                            </span>
                          </button>
                          <button
                            className="p-1 rounded hover:bg-surface-container text-on-surface-variant transition-colors"
                            title="Administrative Override"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              verified_user
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/*  Student Row 4: Bilal Abdulrahman (Conditional Trial - Attendance Risk)  */}
                    <tr className="hover:bg-surface-container-low/40 transition-colors bg-surface-container-low/20">
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <img
                            className="w-8 h-8 rounded-full object-cover shrink-0"
                            data-alt="African teenage male student in school uniform with thoughtful expression seated in an examination lecture hall."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGpulsTUxBhn4HOKhCaaykuSDoVHD1eQ-hga3WkiC_x6oYu84gx6Eb1dd9H4fnAH8eSIpXDmGZC_9RsmpLUvyExU6utU87l2iZMUyG3chaqtEnrru-0WVv6gXJ6ZquKy80n58tVed9h7VoujPII8yeMf206NuHagXQwxiOMhyx1CtxjZ817fuQWgnVx-voFeVa5_I2c0mSExsxyqfSIN0xsEw9e5GDa7ubk6m5TZLWr67mOHMXeKBTpQ"
                          />
                          <div className="flex flex-col min-w-0">
                            <span className="font-label-md text-label-md text-on-surface font-bold truncate">
                              Bilal Abdulrahman
                            </span>
                            <span className="font-label-sm text-[11px] text-outline font-mono">
                              NIIS/2021/0612
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-3">
                        <div className="flex items-center gap-1 font-label-sm text-label-sm">
                          <span className="text-on-surface font-semibold">
                            SSS 2 Sci B
                          </span>
                          <span className="material-symbols-outlined text-[14px] text-outline">
                            trending_flat
                          </span>
                          <span className="text-on-tertiary-container font-bold">
                            SSS 3 Sci (Trial)
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-3 text-right">
                        <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                          51.4%
                        </span>
                      </td>
                      <td className="py-3.5 px-3">
                        <div className="flex items-center gap-1">
                          <span
                            className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-error-container text-on-error-container"
                            title="Maths: 48% (Trial)"
                          >
                            M: D7
                          </span>
                          <span
                            className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-secondary-container text-on-secondary-container"
                            title="English: 54%"
                          >
                            E: C6
                          </span>
                          <span
                            className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-secondary-container text-on-secondary-container"
                            title="Sciences: 52%"
                          >
                            S: C6
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-3 text-center">
                        <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-error font-bold">
                          <span className="material-symbols-outlined text-[14px]">
                            warning
                          </span>{" "}
                          68.0%
                        </span>
                      </td>
                      <td className="py-3.5 px-3">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container text-[11px] font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>{" "}
                          100% Cleared
                        </span>
                      </td>
                      <td className="py-3.5 px-3">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant text-label-sm font-label-sm font-bold">
                          <span className="material-symbols-outlined text-[13px]">
                            alarm
                          </span>
                          Trial (Clinic Req.)
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <button
                            className="p-1 rounded hover:bg-surface-container text-on-surface-variant transition-colors"
                            title="Print Academic Dossier"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              print
                            </span>
                          </button>
                          <button
                            className="p-1 rounded hover:bg-surface-container text-primary transition-colors font-bold"
                            title="Principal Overwrite Panel"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              edit_calendar
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/*  Student Row 5: Ibrahim Mustapha (Repeat Class - Below Benchmark)  */}
                    <tr className="hover:bg-surface-container-low/40 transition-colors bg-error-container/10">
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <img
                            className="w-8 h-8 rounded-full object-cover shrink-0"
                            data-alt="Portrait of an African male high school student looking solemnly toward the camera indoors in an educational counselor office."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtY7IQOp3qai077KkhAkZLtmZwUzfaKgXSga4Yjd_fm83kDEce_pTf8Mrlne9EitMGnaWZROU0lh9TMtDANlcIzBJWCy5FhgmZ9SMjxPmg5XOZ1a41dMhZZ-STTVzYFgU8plfr0TvaXh3ybD_meIGzHD46LOBMBwPHLbDqWnkc1hCv_uk3Srf1dgRY5yK7Pfqn34wRmOOWY_EFXGDB7hkRxrPcRjfmt-lTtlltbYRDlYm6Pom9ILQdJQ"
                          />
                          <div className="flex flex-col min-w-0">
                            <span className="font-label-md text-label-md text-on-surface font-bold truncate">
                              Ibrahim Mustapha
                            </span>
                            <span className="font-label-sm text-[11px] text-outline font-mono">
                              NIIS/2021/0704
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-3">
                        <div className="flex items-center gap-1 font-label-sm text-label-sm">
                          <span className="text-on-surface font-semibold">
                            SSS 2 Sci A
                          </span>
                          <span className="material-symbols-outlined text-[14px] text-outline">
                            cached
                          </span>
                          <span className="text-error font-bold">
                            Repeat SSS 2
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-3 text-right">
                        <span className="font-headline-sm text-headline-sm font-bold text-error">
                          48.2%
                        </span>
                      </td>
                      <td className="py-3.5 px-3">
                        <div className="flex items-center gap-1">
                          <span
                            className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-error-container text-on-error-container"
                            title="Maths: 41%"
                          >
                            M: F9
                          </span>
                          <span
                            className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-error-container text-on-error-container"
                            title="English: 46%"
                          >
                            E: F9
                          </span>
                          <span
                            className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-secondary-container text-on-secondary-container"
                            title="Sciences: 57%"
                          >
                            S: C5
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-3 text-center">
                        <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                          81.5%
                        </span>
                      </td>
                      <td className="py-3.5 px-3">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container text-[11px] font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>{" "}
                          100% Cleared
                        </span>
                      </td>
                      <td className="py-3.5 px-3">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-error-container text-on-error-container text-label-sm font-label-sm font-bold">
                          <span className="material-symbols-outlined text-[13px]">
                            replay
                          </span>
                          Repeat Class
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <button
                            className="p-1 rounded hover:bg-surface-container text-on-surface-variant transition-colors"
                            title="Print Academic Dossier"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              print
                            </span>
                          </button>
                          <button
                            className="p-1 rounded hover:bg-error-container text-error transition-colors"
                            title="Principal Review Hearing Required"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              contact_support
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/*  Table Footer / Pagination  */}
              <div className="p-space-sm px-space-md bg-surface-container-low/40 flex flex-col sm:flex-row items-center justify-between gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                <div className="flex items-center gap-2">
                  <span>
                    Showing records 1 to 5 of 128 registered SSS 2 candidates
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    className="px-2 py-1 rounded bg-surface-container-lowest shadow-xs text-on-surface hover:bg-surface-container transition-colors disabled:opacity-50"
                    disabled
                  >
                    Previous
                  </button>
                  <button className="px-2.5 py-1 rounded bg-primary text-on-primary font-bold shadow-xs">
                    1
                  </button>
                  <button className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-colors">
                    2
                  </button>
                  <button className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-colors">
                    3
                  </button>
                  <button className="px-2 py-1 rounded bg-surface-container-lowest shadow-xs text-on-surface hover:bg-surface-container transition-colors">
                    Next
                  </button>
                </div>
              </div>
            </div>
            {/*  Bulk Selection Command Bar  */}
            <div className="p-space-md rounded-xl bg-surface-container-high/60 flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[20px] text-primary">
                  checklist
                </span>
                <span className="font-label-md text-label-md text-on-surface">
                  5 Selected Students • Override or Batch Gazette
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest hover:bg-surface-variant text-on-surface font-label-sm text-label-sm transition-colors shadow-xs">
                  Push to Remedial Clinic
                </button>
                <button className="px-3 py-1.5 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-label-sm text-label-sm transition-colors shadow-xs flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    done_all
                  </span>
                  <span>Batch Endorse</span>
                </button>
              </div>
            </div>
          </div>
          {/*  RIGHT 4 COLS: Academic Engines & Compliance Side Panels  */}
          <div className="lg:col-span-4 space-y-space-md">
            {/*  SIDE PANEL 1: BECE & JSS 3 Stream Sorting Algorithm  */}
            <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm space-y-space-sm">
              <div className="flex items-center justify-between pb-space-xs border-b border-surface-container-low">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded bg-secondary-container text-on-secondary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-[16px]">
                      device_hub
                    </span>
                  </div>
                  <div>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">
                      JSS 3 Stream Sorter
                    </h2>
                    <span className="font-label-sm text-[10px] text-outline uppercase tracking-wider">
                      BECE Continuous Assessment
                    </span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[11px] font-bold">
                  Active
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Automated algorithmic recommendation into SSS 1 departmental
                tracks based on Junior Secondary BECE mock aggregates and
                diagnostic STEM aptitude scores.
              </p>
              {/*  Stream Distribution Spark Bars  */}
              <div className="space-y-space-xs pt-1">
                <div className="space-y-1">
                  <div className="flex justify-between font-label-sm text-label-sm">
                    <span className="font-semibold text-primary">
                      Science &amp; Technical
                    </span>
                    <span className="font-bold text-on-surface">
                      54% (142 Scholars)
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-primary h-full rounded-full"
                      style={{ width: "54%" }}
                    ></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between font-label-sm text-label-sm">
                    <span className="font-semibold text-secondary">
                      Commercial &amp; Financial
                    </span>
                    <span className="font-bold text-on-surface">
                      28% (74 Scholars)
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-secondary h-full rounded-full"
                      style={{ width: "28%" }}
                    ></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between font-label-sm text-label-sm">
                    <span className="font-semibold text-on-tertiary-container">
                      Humanities &amp; Arts
                    </span>
                    <span className="font-bold text-on-surface">
                      18% (48 Scholars)
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-on-tertiary-container h-full rounded-full"
                      style={{ width: "18%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="pt-2">
                <button className="w-full py-2 rounded-lg bg-surface-container-high hover:bg-surface-variant text-primary font-label-md text-label-md transition-colors flex items-center justify-center gap-1.5 shadow-xs">
                  <span className="material-symbols-outlined text-[16px]">
                    tune
                  </span>
                  <span>Run Stream Optimization</span>
                </button>
              </div>
            </div>
            {/*  SIDE PANEL 2: SSS 3 Valedictory & Graduation Clearance Docket  */}
            <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm space-y-space-sm">
              <div className="flex items-center justify-between pb-space-xs border-b border-surface-container-low">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded bg-primary-fixed text-on-primary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-[16px]">
                      military_tech
                    </span>
                  </div>
                  <div>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">
                      SSS 3 Graduation Docket
                    </h2>
                    <span className="font-label-sm text-[10px] text-outline uppercase tracking-wider">
                      148 Valedictorians
                    </span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-[11px] font-bold">
                  WASSCE/NECO
                </span>
              </div>
              <div className="space-y-2.5 pt-1">
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-label-md text-label-md text-on-surface font-semibold">
                        Testimonial Dossier Generation
                      </span>
                      <span className="font-label-sm text-[11px] text-secondary font-bold">
                        148/148
                      </span>
                    </div>
                    <p className="font-body-sm text-[12px] text-on-surface-variant">
                      Authenticated and signed by Office of the Registrar.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-label-md text-label-md text-on-surface font-semibold">
                        Bursary &amp; Tuition Final Audit
                      </span>
                      <span className="font-label-sm text-[11px] text-secondary font-bold">
                        100% Cleared
                      </span>
                    </div>
                    <p className="font-body-sm text-[12px] text-on-surface-variant">
                      Zero fee arrears recorded across all graduating arms.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-label-md text-label-md text-on-surface font-semibold">
                        Library &amp; Science Lab Sign-Off
                      </span>
                      <span className="font-label-sm text-[11px] text-secondary font-bold">
                        Completed
                      </span>
                    </div>
                    <p className="font-body-sm text-[12px] text-on-surface-variant">
                      All reference volumes and lab apparatus accounted for.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-on-tertiary-container text-[20px] shrink-0 mt-0.5">
                    pending
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-label-md text-label-md text-on-surface font-semibold">
                        Kaduna MoE Certificate Seal
                      </span>
                      <span className="font-label-sm text-[11px] text-on-tertiary-container font-bold">
                        In Validation
                      </span>
                    </div>
                    <p className="font-body-sm text-[12px] text-on-surface-variant">
                      Awaiting final state inspectorate counter-signature
                      serials.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-2">
                <button className="w-full py-2 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md transition-colors flex items-center justify-center gap-1.5 shadow-sm">
                  <span className="material-symbols-outlined text-[16px]">
                    verified
                  </span>
                  <span>Mint Graduation Credentials</span>
                </button>
              </div>
            </div>
            {/*  SIDE PANEL 3: Promotion Lock & Gazette Protocol  */}
            <div className="p-space-md rounded-xl bg-surface-container-high shadow-sm space-y-space-sm relative overflow-hidden">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded bg-primary text-on-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[16px]">
                    lock
                  </span>
                </div>
                <div>
                  <h2 className="font-headline-sm text-headline-sm text-primary">
                    Gazette Lock Protocol
                  </h2>
                  <span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-wider">
                    Dual Digital Seal
                  </span>
                </div>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Promotion decisions are strictly provisional until certified
                with cryptographic keys by Dr. Aminu Bello and VP Academics
                before synchronizing to the Parent Portal.
              </p>
              {/*  Signature Verification Boxes  */}
              <div className="space-y-2 pt-1">
                <div className="p-2.5 rounded-lg bg-surface-container-lowest flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[20px]">
                      check_circle
                    </span>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                        Dr. Aminu Bello
                      </span>
                      <span className="text-[10px] text-outline">
                        Super Admin / Principal Seal
                      </span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase">
                    Affixed
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-surface-container-lowest flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-outline text-[20px]">
                      radio_button_unchecked
                    </span>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                        Hajiya Zainab S.
                      </span>
                      <span className="text-[10px] text-outline">
                        Vice Principal (Academics)
                      </span>
                    </div>
                  </div>
                  <button className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed text-[10px] font-bold uppercase hover:bg-primary-container hover:text-on-primary transition-colors">
                    Sign Now
                  </button>
                </div>
              </div>
              <div className="pt-2">
                <button
                  className="w-full py-2.5 rounded-lg bg-surface-container-lowest text-outline cursor-not-allowed font-label-md text-label-md flex items-center justify-center gap-2"
                  disabled
                >
                  <span className="material-symbols-outlined text-[18px]">
                    publish
                  </span>
                  <span>Publish to Parent Portal</span>
                </button>
                <p className="text-center font-label-sm text-[10px] text-outline pt-1">
                  Requires 2/2 institutional digital signatures
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
