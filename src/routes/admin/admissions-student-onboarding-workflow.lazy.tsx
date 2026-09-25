import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(
  "/admin/admissions-student-onboarding-workflow",
)({
  component: AdmissionsStudentOnboardingWorkflow,
});

function AdmissionsStudentOnboardingWorkflow() {
  return (
    <main className="w-full pt-16 px-space-lg py-space-lg flex-1 bg-surface">
      <div className="flex flex-col w-full space-y-space-lg">
        {/*  Breadcrumb & Top Bar  */}
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-outline">
            <span>Academic Management</span>
            <span className="material-symbols-outlined text-[14px]">
              chevron_right
            </span>
            <span>Admissions &amp; Enrollment</span>
            <span className="material-symbols-outlined text-[14px]">
              chevron_right
            </span>
            <span className="text-on-surface font-semibold">
              2026/2027 Admissions Funnel
            </span>
          </div>
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md pt-space-xs">
            <div className="space-y-space-xs">
              <div className="flex flex-wrap items-center gap-space-sm">
                <h1 className="font-display-lg text-display-lg text-primary tracking-tight">
                  Admissions &amp; New Student Onboarding
                </h1>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  2026/2027 Intake Cycle • Active
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[15px] text-secondary">
                    verified_user
                  </span>
                  Kaduna State QA Approved
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-tertiary-fixed text-tertiary font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[15px] text-on-tertiary-container">
                    event
                  </span>
                  Entrance Exam Batch 3 Scheduled
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
                Central intake pipeline, screening verification workbench, and
                student registry minting for Noorul Ilm International School
                (Kaduna Campus).
              </p>
            </div>
            {/*  Action Buttons  */}
            <div className="flex flex-wrap items-center gap-space-xs shrink-0">
              <button
                className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm hover:bg-surface-container transition-colors"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px] text-outline">
                  download
                </span>
                <span>Admissions Register</span>
              </button>
              <button
                className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm hover:bg-surface-container transition-colors"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px] text-primary">
                  schedule
                </span>
                <span>Batch Exam Scheduler</span>
              </button>
              <button
                className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md shadow-sm hover:bg-primary transition-colors"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">
                  tune
                </span>
                <span>Intake Quotas</span>
              </button>
              <button
                className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md shadow-sm hover:bg-on-secondary-container transition-colors"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">
                  person_add
                </span>
                <span>+ New Applicant</span>
              </button>
            </div>
          </div>
        </div>
        {/*  Admissions Pipeline Overview (Funnel KPI Banner)  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-sm">
          {/*  Stage 1  */}
          <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
            <div className="flex items-center justify-between pb-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">
                Stage 01
              </span>
              <span className="p-1 rounded-md bg-surface-container-low text-outline">
                <span className="material-symbols-outlined text-[16px]">
                  edit_note
                </span>
              </span>
            </div>
            <div>
              <div className="flex items-baseline gap-space-xs">
                <span className="font-metric-lg text-metric-lg text-on-surface">
                  64
                </span>
                <span className="font-label-sm text-label-sm text-outline">
                  applicants
                </span>
              </div>
              <p className="font-headline-sm text-headline-sm text-primary mt-1">
                Inquiries &amp; Drafts
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 truncate">
                Portal signups &amp; desk drafts
              </p>
            </div>
            <div className="mt-space-sm pt-space-xs flex items-center justify-between font-label-sm text-label-sm text-outline">
              <span>Completion: 41%</span>
              <span className="text-secondary font-medium">8 added today</span>
            </div>
          </div>
          {/*  Stage 2  */}
          <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
            <div className="flex items-center justify-between pb-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">
                Stage 02
              </span>
              <span className="p-1 rounded-md bg-surface-container-low text-primary">
                <span className="material-symbols-outlined text-[16px]">
                  fact_check
                </span>
              </span>
            </div>
            <div>
              <div className="flex items-baseline gap-space-xs">
                <span className="font-metric-lg text-metric-lg text-on-surface">
                  142
                </span>
                <span className="font-label-sm text-label-sm text-outline">
                  in review
                </span>
              </div>
              <p className="font-headline-sm text-headline-sm text-primary mt-1">
                Submitted &amp; Vetting
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 truncate">
                Birth certs, testimonials, health
              </p>
            </div>
            <div className="mt-space-sm pt-space-xs flex items-center justify-between font-label-sm text-label-sm text-outline">
              <span>Pending QA: 19</span>
              <span className="text-on-tertiary-container font-medium">
                12 flagged
              </span>
            </div>
          </div>
          {/*  Stage 3  */}
          <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
            <div className="flex items-center justify-between pb-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">
                Stage 03
              </span>
              <span className="p-1 rounded-md bg-surface-container-low text-secondary">
                <span className="material-symbols-outlined text-[16px]">
                  psychology
                </span>
              </span>
            </div>
            <div>
              <div className="flex items-baseline gap-space-xs">
                <span className="font-metric-lg text-metric-lg text-on-surface">
                  88
                </span>
                <span className="font-label-sm text-label-sm text-outline">
                  evaluated
                </span>
              </div>
              <p className="font-headline-sm text-headline-sm text-primary mt-1">
                Entrance &amp; Interview
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 truncate">
                Batch A done, Batch B Oct 24
              </p>
            </div>
            <div className="mt-space-sm pt-space-xs flex items-center justify-between font-label-sm text-label-sm text-outline">
              <span>Avg: 74.2%</span>
              <span className="text-secondary font-medium">
                92% cutoff pass
              </span>
            </div>
          </div>
          {/*  Stage 4  */}
          <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
            <div className="flex items-center justify-between pb-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">
                Stage 04
              </span>
              <span className="p-1 rounded-md bg-surface-container-low text-on-tertiary-container">
                <span className="material-symbols-outlined text-[16px]">
                  payments
                </span>
              </span>
            </div>
            <div>
              <div className="flex items-baseline gap-space-xs">
                <span className="font-metric-lg text-metric-lg text-on-surface">
                  95
                </span>
                <span className="font-label-sm text-label-sm text-outline">
                  provisional
                </span>
              </div>
              <p className="font-headline-sm text-headline-sm text-primary mt-1">
                Offer &amp; Acceptance Fee
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 truncate">
                ₦50,000 reservation fee
              </p>
            </div>
            <div className="mt-space-sm pt-space-xs flex items-center justify-between font-label-sm text-label-sm text-outline">
              <span>Paid: 64</span>
              <span className="text-on-tertiary-container font-medium">
                31 pending payment
              </span>
            </div>
          </div>
          {/*  Stage 5  */}
          <div className="p-space-md rounded-xl bg-surface-container-high shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
            <div className="flex items-center justify-between pb-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                Stage 05 • Complete
              </span>
              <span className="p-1 rounded-md bg-secondary-fixed text-on-secondary-fixed">
                <span className="material-symbols-outlined text-[16px]">
                  how_to_reg
                </span>
              </span>
            </div>
            <div>
              <div className="flex items-baseline gap-space-xs">
                <span className="font-metric-lg text-metric-lg text-secondary">
                  310
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  / 450 Cap
                </span>
              </div>
              <p className="font-headline-sm text-headline-sm text-on-surface mt-1">
                Fully Onboarded
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 truncate">
                ID minted &amp; arm assigned
              </p>
            </div>
            <div className="mt-space-sm pt-space-xs">
              <div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-secondary h-1.5 rounded-full"
                  style={{ width: "68.8%" }}
                ></div>
              </div>
              <div className="flex justify-between items-center text-label-sm font-label-sm mt-1 text-on-surface-variant">
                <span>Overall Intake Fill</span>
                <span className="text-secondary font-semibold">68.8%</span>
              </div>
            </div>
          </div>
        </div>
        {/*  Filter & Controls Workbench  */}
        <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col xl:flex-row gap-space-md items-stretch xl:items-center justify-between">
          <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">
              search
            </span>
            <input
              className="w-full pl-9 pr-4 py-2 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest transition-all"
              placeholder="Search applicant name, reference ID (e.g. NIIS-APP-2026-089), or guardian phone..."
              type="text"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-xs shrink-0">
            {/*  Intake Department  */}
            <div className="relative">
              <select className="w-full appearance-none px-3 py-2 bg-surface-container-low rounded-lg font-label-sm text-label-sm text-on-surface pr-8 focus:outline-none cursor-pointer">
                <option>All Sections</option>
                <option>Senior Secondary (SSS 1)</option>
                <option>Junior Secondary (JSS 1)</option>
                <option>Primary (P1-P6)</option>
                <option>Nursery &amp; Early Years</option>
              </select>
              <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-[16px] text-outline pointer-events-none">
                expand_more
              </span>
            </div>
            {/*  Funnel Status  */}
            <div className="relative">
              <select className="w-full appearance-none px-3 py-2 bg-surface-container-low rounded-lg font-label-sm text-label-sm text-on-surface pr-8 focus:outline-none cursor-pointer">
                <option>All Funnel Stages</option>
                <option>Inquiry / Unsubmitted</option>
                <option>Document Verification</option>
                <option>Entrance Exam Ready</option>
                <option>Offer Extended</option>
                <option>Enrolled &amp; Minted</option>
              </select>
              <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-[16px] text-outline pointer-events-none">
                expand_more
              </span>
            </div>
            {/*  Exam Score Band  */}
            <div className="relative">
              <select className="w-full appearance-none px-3 py-2 bg-surface-container-low rounded-lg font-label-sm text-label-sm text-on-surface pr-8 focus:outline-none cursor-pointer">
                <option>Exam Cutoff: All</option>
                <option>High Merit (&gt;80%)</option>
                <option>Standard (50% - 79%)</option>
                <option>Below Cutoff (&lt;50%)</option>
                <option>Exempt / Oral Early Years</option>
              </select>
              <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-[16px] text-outline pointer-events-none">
                expand_more
              </span>
            </div>
            {/*  Boarding / Day  */}
            <div className="relative">
              <select className="w-full appearance-none px-3 py-2 bg-surface-container-low rounded-lg font-label-sm text-label-sm text-on-surface pr-8 focus:outline-none cursor-pointer">
                <option>Residency: All</option>
                <option>Day Scholar</option>
                <option>Full Boarder (Hostel)</option>
              </select>
              <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-[16px] text-outline pointer-events-none">
                expand_more
              </span>
            </div>
          </div>
        </div>
        {/*  Interactive Multi-Stage Applicant Pipeline Table  */}
        <div className="rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden">
          <div className="px-space-lg py-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm bg-surface-container-low">
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-primary text-[20px]">
                table_rows
              </span>
              <div>
                <h2 className="font-headline-sm text-headline-sm text-on-surface">
                  Candidate Screening &amp; Verification Registry
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Showing active candidates currently progressing through
                  admissions clearance
                </p>
              </div>
            </div>
            <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
              <span>
                Displaying: <strong>6</strong> of <strong>699</strong> Total
                Applications
              </span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                  <th className="py-3 px-space-md">Applicant &amp; File ID</th>
                  <th className="py-3 px-space-md">
                    Target Class &amp; Stream
                  </th>
                  <th className="py-3 px-space-md">Exam &amp; Assessment</th>
                  <th className="py-3 px-space-md">Documentation</th>
                  <th className="py-3 px-space-md">Pipeline Status</th>
                  <th className="py-3 px-space-md text-right">
                    Workflow Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container">
                {/*  Row 1  */}
                <tr className="hover:bg-surface-container-low transition-colors bg-surface-container-lowest">
                  <td className="py-3 px-space-md">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-9 h-9 rounded-full bg-primary-fixed flex items-center justify-center font-headline-sm text-headline-sm text-on-primary-fixed">
                        MB
                      </div>
                      <div className="min-w-0">
                        <span className="font-label-lg text-label-lg text-on-surface block leading-tight">
                          Maryam Bello Gusau
                        </span>
                        <span className="font-body-sm text-[11px] text-outline font-mono">
                          NIIS-APP-2026-0041 • Kaduna North
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-space-md">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                        SSS 1 Science
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Day Scholar
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-space-md">
                    <div className="flex items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[11px] font-semibold">
                        88% (Merit)
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[16px]">
                        stars
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-space-md">
                    <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary">
                      <span className="material-symbols-outlined text-[16px]">
                        check_circle
                      </span>
                      All 4 Verified
                    </span>
                  </td>
                  <td className="py-3 px-space-md">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                      Offer Accepted (Paid)
                    </span>
                  </td>
                  <td className="py-3 px-space-md text-right">
                    <button
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm hover:bg-primary-container shadow-sm transition-all"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[15px]">
                        badge
                      </span>
                      <span>Finalize &amp; Mint ID</span>
                    </button>
                  </td>
                </tr>
                {/*  Row 2  */}
                <tr className="hover:bg-surface-container-low transition-colors bg-surface-container-lowest">
                  <td className="py-3 px-space-md">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-9 h-9 rounded-full bg-surface-container-highest flex items-center justify-center font-headline-sm text-headline-sm text-primary">
                        IK
                      </div>
                      <div className="min-w-0">
                        <span className="font-label-lg text-label-lg text-on-surface block leading-tight">
                          Ibrahim Kabir Danbatta
                        </span>
                        <span className="font-body-sm text-[11px] text-outline font-mono">
                          NIIS-APP-2026-0089 • Kano / Zaria
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-space-md">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                        JSS 1 Gold
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Boarder (Hostel A)
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-space-md">
                    <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-[11px] font-semibold">
                      76% Standard
                    </span>
                  </td>
                  <td className="py-3 px-space-md">
                    <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-tertiary">
                      <span className="material-symbols-outlined text-[16px] text-on-tertiary-container">
                        pending
                      </span>
                      Medical Report Req.
                    </span>
                  </td>
                  <td className="py-3 px-space-md">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">
                      Interview Cleared
                    </span>
                  </td>
                  <td className="py-3 px-space-md text-right">
                    <button
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[15px]">
                        send
                      </span>
                      <span>Send Offer Letter</span>
                    </button>
                  </td>
                </tr>
                {/*  Row 3  */}
                <tr className="hover:bg-surface-container-low transition-colors bg-surface-container-lowest">
                  <td className="py-3 px-space-md">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-9 h-9 rounded-full bg-surface-container-highest flex items-center justify-center font-headline-sm text-headline-sm text-primary">
                        FS
                      </div>
                      <div className="min-w-0">
                        <span className="font-label-lg text-label-lg text-on-surface block leading-tight">
                          Fatima Sani Zaria
                        </span>
                        <span className="font-body-sm text-[11px] text-outline font-mono">
                          NIIS-APP-2026-0112 • Kaduna South
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-space-md">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                        Primary 4 Emerald
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Day Scholar
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-space-md">
                    <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[11px] font-semibold">
                      84% Merit
                    </span>
                  </td>
                  <td className="py-3 px-space-md">
                    <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary">
                      <span className="material-symbols-outlined text-[16px]">
                        check_circle
                      </span>
                      All 4 Verified
                    </span>
                  </td>
                  <td className="py-3 px-space-md">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">
                      Entrance Exam Passed
                    </span>
                  </td>
                  <td className="py-3 px-space-md text-right">
                    <button
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[15px]">
                        calendar_add_on
                      </span>
                      <span>Schedule Oral</span>
                    </button>
                  </td>
                </tr>
                {/*  Row 4  */}
                <tr className="hover:bg-surface-container-low transition-colors bg-surface-container-lowest">
                  <td className="py-3 px-space-md">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-9 h-9 rounded-full bg-error-container flex items-center justify-center font-headline-sm text-headline-sm text-error">
                        AM
                      </div>
                      <div className="min-w-0">
                        <span className="font-label-lg text-label-lg text-on-surface block leading-tight">
                          Abubakar Mustapha
                        </span>
                        <span className="font-body-sm text-[11px] text-outline font-mono">
                          NIIS-APP-2026-0150 • Igabi LGA
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-space-md">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                        SSS 1 Arts &amp; Humanities
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Day Scholar
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-space-md">
                    <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-[11px]">
                      62% Standard
                    </span>
                  </td>
                  <td className="py-3 px-space-md">
                    <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-error">
                      <span className="material-symbols-outlined text-[16px]">
                        cancel
                      </span>
                      Transfer Cert Missing
                    </span>
                  </td>
                  <td className="py-3 px-space-md">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">
                      Docs Incomplete
                    </span>
                  </td>
                  <td className="py-3 px-space-md text-right">
                    <button
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[15px]">
                        sms
                      </span>
                      <span>Request Docs (SMS)</span>
                    </button>
                  </td>
                </tr>
                {/*  Row 5  */}
                <tr className="hover:bg-surface-container-low transition-colors bg-surface-container-lowest">
                  <td className="py-3 px-space-md">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-9 h-9 rounded-full bg-secondary-fixed flex items-center justify-center font-headline-sm text-headline-sm text-on-secondary-fixed">
                        RA
                      </div>
                      <div className="min-w-0">
                        <span className="font-label-lg text-label-lg text-on-surface block leading-tight">
                          Ruqayyah Al-Amin
                        </span>
                        <span className="font-body-sm text-[11px] text-outline font-mono">
                          NIIS/2026/0448 • Barnawa
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-space-md">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                        Nursery 2 Pre-Prep
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Day Scholar
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-space-md">
                    <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[11px]">
                      Oral: Exceeding
                    </span>
                  </td>
                  <td className="py-3 px-space-md">
                    <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary">
                      <span className="material-symbols-outlined text-[16px]">
                        check_circle
                      </span>
                      All Cleared
                    </span>
                  </td>
                  <td className="py-3 px-space-md">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm font-semibold">
                      Enrolled
                    </span>
                  </td>
                  <td className="py-3 px-space-md text-right">
                    <button
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-sm hover:bg-surface-container transition-colors"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[15px]">
                        print
                      </span>
                      <span>Print Dossier &amp; ID</span>
                    </button>
                  </td>
                </tr>
                {/*  Row 6  */}
                <tr className="hover:bg-surface-container-low transition-colors bg-surface-container-lowest">
                  <td className="py-3 px-space-md">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-9 h-9 rounded-full bg-surface-container-highest flex items-center justify-center font-headline-sm text-headline-sm text-primary">
                        HU
                      </div>
                      <div className="min-w-0">
                        <span className="font-label-lg text-label-lg text-on-surface block leading-tight">
                          Hassan Usman Shehu
                        </span>
                        <span className="font-body-sm text-[11px] text-outline font-mono">
                          NIIS-APP-2026-0205 • Kaduna North
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-space-md">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                        SSS 1 Commercial
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Boarder (Hostel B)
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-space-md">
                    <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-[11px]">
                      79% Standard
                    </span>
                  </td>
                  <td className="py-3 px-space-md">
                    <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary">
                      <span className="material-symbols-outlined text-[16px]">
                        check_circle
                      </span>
                      All 4 Verified
                    </span>
                  </td>
                  <td className="py-3 px-space-md">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-tertiary font-label-sm text-label-sm font-semibold">
                      Provisional Offer Sent
                    </span>
                  </td>
                  <td className="py-3 px-space-md text-right">
                    <button
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[15px] text-on-tertiary-container">
                        receipt_long
                      </span>
                      <span>Verify ₦50k Fee</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/*  Table Footer / Pagination  */}
          <div className="px-space-md py-space-sm bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-sm font-label-sm text-label-sm text-on-surface-variant">
            <div className="flex items-center gap-space-xs">
              <span>Rows per page:</span>
              <select className="bg-surface-container-lowest rounded px-2 py-1 focus:outline-none">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
              <span>1 - 6 of 699 candidates</span>
            </div>
            <div className="flex items-center gap-1">
              <button
                className="p-1 rounded bg-surface-container-lowest hover:bg-surface-container disabled:opacity-50"
                disabled
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">
                  chevron_left
                </span>
              </button>
              <span className="px-2 font-medium text-on-surface">
                Page 1 of 70
              </span>
              <button
                className="p-1 rounded bg-surface-container-lowest hover:bg-surface-container"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">
                  chevron_right
                </span>
              </button>
            </div>
          </div>
        </div>
        {/*  Bottom Split Section: Onboarding Stepper Workbench (60%) vs Analytics (40%)  */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
          {/*  Left Panel: Active Onboarding & ID Minting Stepper (7 cols)  */}
          <div className="lg:col-span-7 rounded-xl bg-surface-container-lowest shadow-sm p-space-lg space-y-space-md">
            <div className="flex items-center justify-between pb-space-sm">
              <div className="flex items-center gap-space-sm">
                <span className="p-2 rounded-lg bg-primary-container text-on-primary">
                  <span className="material-symbols-outlined text-[20px]">
                    assignment_turned_in
                  </span>
                </span>
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                    Active Screening Dossier
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                    Maryam Bello Gusau (NIIS-APP-2026-0041)
                  </h3>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                Ready for Student ID Mint
              </span>
            </div>
            {/*  5-Step Visual Stepper  */}
            <div className="py-space-xs">
              <div className="grid grid-cols-5 gap-2 text-center">
                {/*  Step 1 Done  */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-[13px] shadow-sm">
                    <span className="material-symbols-outlined text-[16px]">
                      check
                    </span>
                  </div>
                  <span className="font-label-sm text-[11px] text-on-surface mt-1.5 font-medium">
                    1. Bio-Data
                  </span>
                  <span className="text-[10px] text-secondary">Verified</span>
                </div>
                {/*  Step 2 Done  */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-[13px] shadow-sm">
                    <span className="material-symbols-outlined text-[16px]">
                      check
                    </span>
                  </div>
                  <span className="font-label-sm text-[11px] text-on-surface mt-1.5 font-medium">
                    2. Docs QA
                  </span>
                  <span className="text-[10px] text-secondary">4 Docs OK</span>
                </div>
                {/*  Step 3 Done  */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-[13px] shadow-sm">
                    <span className="material-symbols-outlined text-[16px]">
                      check
                    </span>
                  </div>
                  <span className="font-label-sm text-[11px] text-on-surface mt-1.5 font-medium">
                    3. Exam &amp; Oral
                  </span>
                  <span className="text-[10px] text-secondary">Score: 88%</span>
                </div>
                {/*  Step 4 Done  */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-[13px] shadow-sm">
                    <span className="material-symbols-outlined text-[16px]">
                      check
                    </span>
                  </div>
                  <span className="font-label-sm text-[11px] text-on-surface mt-1.5 font-medium">
                    4. Acceptance
                  </span>
                  <span className="text-[10px] text-secondary">₦50k Paid</span>
                </div>
                {/*  Step 5 Active  */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-[13px] shadow-md ring-4 ring-primary-fixed">
                    5
                  </div>
                  <span className="font-label-sm text-[11px] text-primary mt-1.5 font-bold">
                    5. Class &amp; ID
                  </span>
                  <span className="text-[10px] text-primary font-medium">
                    In Progress
                  </span>
                </div>
              </div>
            </div>
            {/*  Stepper Workbench Form Fields  */}
            <div className="p-space-md rounded-xl bg-surface-container-low space-y-space-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                {/*  Class Arm Allocation  */}
                <div className="space-y-1">
                  <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                    Assigned Class &amp; Stream Arm
                  </label>
                  <div className="relative">
                    <select className="w-full bg-surface-container-lowest px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface appearance-none focus:outline-none">
                      <option selected>
                        SSS 1 Science Arm A (38/45 Capacity)
                      </option>
                      <option>SSS 1 Science Arm B (41/45 Capacity)</option>
                      <option>SSS 1 Commercial Arm A (29/45 Capacity)</option>
                      <option>SSS 1 Arts Arm A (32/45 Capacity)</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[18px]">
                      expand_more
                    </span>
                  </div>
                  <p className="font-body-sm text-[11px] text-secondary">
                    Current Cap: 38/45 learners • 7 seats available
                  </p>
                </div>
                {/*  House Allocation  */}
                <div className="space-y-1">
                  <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                    Assigned School House
                  </label>
                  <div className="relative">
                    <select className="w-full bg-surface-container-lowest px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface appearance-none focus:outline-none">
                      <option selected>
                        Danfodiyo House (Green • 108 Members)
                      </option>
                      <option>Amina House (Yellow • 112 Members)</option>
                      <option>Sardauna House (Blue • 109 Members)</option>
                      <option>El-Kanemi House (Red • 105 Members)</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[18px]">
                      expand_more
                    </span>
                  </div>
                  <p className="font-body-sm text-[11px] text-outline">
                    Auto-balanced by gender &amp; boarding allocation ratio
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                {/*  Class Teacher  */}
                <div className="space-y-1">
                  <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                    Form / Class Teacher
                  </label>
                  <div className="flex items-center gap-space-xs p-2 rounded-lg bg-surface-container-lowest">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      person
                    </span>
                    <div className="min-w-0">
                      <span className="font-label-sm text-label-sm text-on-surface block font-medium truncate">
                        Malam Garba Usman, M.Sc.
                      </span>
                      <span className="text-[10px] text-outline">
                        Lead Physics Educator • SSS 1 Coordinator
                      </span>
                    </div>
                  </div>
                </div>
                {/*  Guardian Account Link  */}
                <div className="space-y-1">
                  <label className="font-label-sm text-label-sm text-on-surface font-semibold">
                    Linked Guardian Profile
                  </label>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-lowest">
                    <div className="min-w-0">
                      <span className="font-label-sm text-label-sm text-on-surface block font-medium truncate">
                        Alhaji Bello Gusau
                      </span>
                      <span className="text-[10px] text-outline font-mono">
                        +234 802 334 9912 • Father
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-secondary text-[18px]">
                      link
                    </span>
                  </div>
                </div>
              </div>
              {/*  Admission Number Mint Preview Banner  */}
              <div className="p-space-md rounded-xl bg-surface-container-highest flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <span className="p-2 rounded-lg bg-primary text-on-primary">
                    <span className="material-symbols-outlined text-[20px]">
                      pin
                    </span>
                  </span>
                  <div>
                    <span className="font-label-sm text-[11px] uppercase tracking-wider text-outline font-bold">
                      Official Registration Number
                    </span>
                    <div className="font-display-lg text-[22px] font-bold text-primary font-mono tracking-wider">
                      NIIS/2026/0451
                    </div>
                  </div>
                </div>
                <span className="px-2 py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[11px] font-semibold">
                  Unallocated &amp; Reserved
                </span>
              </div>
            </div>
            {/*  Action Footer  */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm pt-space-xs">
              <button
                className="w-full sm:w-auto px-space-md py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors"
                type="button"
              >
                Save Progress as Draft
              </button>
              <button
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-space-lg py-2.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-on-secondary-container shadow-md transition-all"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">
                  verified
                </span>
                <span>Mint Student Record &amp; Dispatch SMS Welcome</span>
              </button>
            </div>
          </div>
          {/*  Right Panel: Admissions Demographics & Intake Quotas (5 cols)  */}
          <div className="lg:col-span-5 space-y-space-lg">
            {/*  Card: Wing Quota Capacity Progress  */}
            <div className="rounded-xl bg-surface-container-lowest shadow-sm p-space-lg space-y-space-md">
              <div className="flex items-center justify-between pb-space-xs">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    2026/2027 Section Quotas
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Class capacity breakdown vs admissions target
                  </p>
                </div>
                <span className="material-symbols-outlined text-outline text-[20px]">
                  donut_small
                </span>
              </div>
              <div className="space-y-space-md">
                {/*  Primary Wing  */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center font-label-sm text-label-sm">
                    <span className="text-on-surface font-semibold">
                      Primary Wing (Grades 1 - 6)
                    </span>
                    <span className="text-secondary font-bold">
                      110 / 120 (92%)
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-secondary h-2 rounded-full"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-[11px] text-outline font-body-sm">
                    <span>Only 10 slots remaining</span>
                    <span>Waitlist: 14</span>
                  </div>
                </div>
                {/*  JSS Wing  */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center font-label-sm text-label-sm">
                    <span className="text-on-surface font-semibold">
                      Junior Secondary (JSS 1 Intake)
                    </span>
                    <span className="text-primary font-bold">
                      132 / 150 (88%)
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: "88%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-[11px] text-outline font-body-sm">
                    <span>18 open slots</span>
                    <span>Waitlist: 27</span>
                  </div>
                </div>
                {/*  SSS Wing  */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center font-label-sm text-label-sm">
                    <span className="text-on-surface font-semibold">
                      Senior Secondary (SSS 1 Intake)
                    </span>
                    <span className="text-on-tertiary-container font-bold">
                      134 / 180 (74%)
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-on-tertiary-container h-2 rounded-full"
                      style={{ width: "74%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-[11px] text-outline font-body-sm">
                    <span>46 open slots</span>
                    <span>Science: 84% • Comm: 68% • Arts: 71%</span>
                  </div>
                </div>
              </div>
            </div>
            {/*  Card: Geographic Origin & Score Distribution  */}
            <div className="rounded-xl bg-surface-container-lowest shadow-sm p-space-lg space-y-space-md">
              <div className="flex items-center justify-between pb-space-xs">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Catchment &amp; Geographic Reach
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Applicant residency distribution across Kaduna &amp;
                    Northern Region
                  </p>
                </div>
                <span className="material-symbols-outlined text-outline text-[20px]">
                  travel_explore
                </span>
              </div>
              <div className="grid grid-cols-2 gap-space-sm">
                <div className="p-3 rounded-lg bg-surface-container-low flex flex-col justify-between">
                  <span className="font-body-sm text-[11px] text-outline uppercase font-semibold">
                    Kaduna North / Central
                  </span>
                  <span className="font-metric-lg text-[22px] text-primary font-bold mt-1">
                    48.2%
                  </span>
                  <span className="font-body-sm text-[11px] text-secondary">
                    337 candidates
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-surface-container-low flex flex-col justify-between">
                  <span className="font-body-sm text-[11px] text-outline uppercase font-semibold">
                    Kaduna South / Barnawa
                  </span>
                  <span className="font-metric-lg text-[22px] text-primary font-bold mt-1">
                    26.4%
                  </span>
                  <span className="font-body-sm text-[11px] text-secondary">
                    185 candidates
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-surface-container-low flex flex-col justify-between">
                  <span className="font-body-sm text-[11px] text-outline uppercase font-semibold">
                    Zaria &amp; Northern LGA
                  </span>
                  <span className="font-metric-lg text-[22px] text-primary font-bold mt-1">
                    14.1%
                  </span>
                  <span className="font-body-sm text-[11px] text-secondary">
                    98 candidates
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-surface-container-low flex flex-col justify-between">
                  <span className="font-body-sm text-[11px] text-outline uppercase font-semibold">
                    Interstate / Boarding
                  </span>
                  <span className="font-metric-lg text-[22px] text-on-tertiary-container font-bold mt-1">
                    11.3%
                  </span>
                  <span className="font-body-sm text-[11px] text-secondary">
                    79 candidates (Kano/Abuja)
                  </span>
                </div>
              </div>
              {/*  Quick Notice Callout  */}
              <div className="p-space-md rounded-xl bg-surface-container-high flex items-start gap-space-sm">
                <span className="material-symbols-outlined text-primary text-[22px] shrink-0 mt-0.5">
                  campaign
                </span>
                <div className="space-y-0.5">
                  <span className="font-label-sm text-label-sm text-primary font-bold block">
                    Next Entrance Exam Sitting
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface">
                    Batch 3 assessment scheduled for{" "}
                    <strong>Saturday, 24 October 2026 at 8:30 AM</strong> in the
                    Main Multipurpose Hall. 42 candidate invitation slips
                    dispatched via SMS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
