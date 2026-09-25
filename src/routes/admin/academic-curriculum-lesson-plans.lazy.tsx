import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(
  "/admin/academic-curriculum-lesson-plans",
)({
  component: AcademicCurriculumLessonPlans,
});

function AcademicCurriculumLessonPlans() {
  return (
    <main className="w-full pt-16 px-space-lg py-space-lg flex-1 bg-background">
      <div className="flex flex-col w-full gap-space-lg">
        {/*  Top Academic Command Header  */}
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
          <div className="flex flex-col gap-1 min-w-0">
            <div className="flex items-center gap-space-xs">
              <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                MoE Kaduna &amp; NERDC Accredited
              </span>
              <span className="text-outline text-label-sm font-label-sm">
                •
              </span>
              <span className="text-on-surface-variant font-label-sm text-label-sm">
                WAEC / NECO / Cambridge Frameworks
              </span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              Curriculum, Syllabi &amp; Lesson Plan Registry
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-4xl">
              Aligning primary and secondary syllabi with National Educational
              Research &amp; Development Council (NERDC), WAEC/NECO
              specifications, and Kaduna State Ministry of Education Quality
              Assurance standards.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-space-sm shrink-0">
            <button
              className="flex items-center gap-1.5 px-space-md py-2 bg-surface-container text-on-surface rounded-lg font-label-md text-label-md hover:bg-surface-container-high transition-colors shadow-sm"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px] text-primary">
                sync
              </span>
              <span>MoE Scheme Sync</span>
            </button>
            <button
              className="flex items-center gap-1.5 px-space-md py-2 bg-surface-container text-on-surface rounded-lg font-label-md text-label-md hover:bg-surface-container-high transition-colors shadow-sm"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px] text-secondary">
                verified_user
              </span>
              <span>Curriculum Audit</span>
            </button>
            <button
              className="flex items-center gap-1.5 px-space-md py-2 bg-surface-container text-on-surface rounded-lg font-label-md text-label-md hover:bg-surface-container-high transition-colors shadow-sm"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                picture_as_pdf
              </span>
              <span>Bulk Export (.pdf)</span>
            </button>
            <button
              className="flex items-center gap-1.5 px-space-md py-2 bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">
                add_task
              </span>
              <span>+ Create Lesson Plan</span>
            </button>
          </div>
        </div>
        {/*  Academic Filters & Registry Scopes  */}
        <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-md">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm flex-1">
            {/*  Academic Level Selector  */}
            <div className="flex flex-col gap-1">
              <label className="font-label-sm text-label-sm text-outline font-semibold uppercase">
                Academic Level
              </label>
              <div className="relative">
                <select className="w-full h-10 pl-3 pr-8 bg-surface-container-low rounded-lg font-body-md text-body-md text-on-surface appearance-none focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 cursor-pointer">
                  <option selected>Senior Secondary (SSS 1 - 3)</option>
                  <option>Junior Secondary (JSS 1 - 3)</option>
                  <option>Upper Primary (Primary 4 - 6)</option>
                  <option>Lower Primary (Primary 1 - 3)</option>
                  <option>Early Childhood / Tahfeez Nursery</option>
                </select>
                <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[18px]">
                  expand_more
                </span>
              </div>
            </div>
            {/*  Department Selector  */}
            <div className="flex flex-col gap-1">
              <label className="font-label-sm text-label-sm text-outline font-semibold uppercase">
                Department / Faculty
              </label>
              <div className="relative">
                <select className="w-full h-10 pl-3 pr-8 bg-surface-container-low rounded-lg font-body-md text-body-md text-on-surface appearance-none focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 cursor-pointer">
                  <option selected>Sciences &amp; STEM</option>
                  <option>Humanities &amp; Social Sciences</option>
                  <option>Languages (English, Arabic, Hausa)</option>
                  <option>Commercial &amp; Business Studies</option>
                  <option>Islamic Studies &amp; Qur'anic Sciences</option>
                  <option>Vocational &amp; Technical Studies</option>
                </select>
                <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[18px]">
                  expand_more
                </span>
              </div>
            </div>
            {/*  Term Selector  */}
            <div className="flex flex-col gap-1">
              <label className="font-label-sm text-label-sm text-outline font-semibold uppercase">
                Academic Term
              </label>
              <div className="relative">
                <select className="w-full h-10 pl-3 pr-8 bg-surface-container-low rounded-lg font-body-md text-body-md text-on-surface appearance-none focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 cursor-pointer">
                  <option selected>Term 1 (Harmattan 2026/27)</option>
                  <option>Term 2 (Rain 2026/27)</option>
                  <option>Term 3 (Trinity 2026/27)</option>
                </select>
                <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[18px]">
                  calendar_month
                </span>
              </div>
            </div>
            {/*  Approval Status Selector  */}
            <div className="flex flex-col gap-1">
              <label className="font-label-sm text-label-sm text-outline font-semibold uppercase">
                Vetting Status
              </label>
              <div className="relative">
                <select className="w-full h-10 pl-3 pr-8 bg-surface-container-low rounded-lg font-body-md text-body-md text-on-surface appearance-none focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 cursor-pointer">
                  <option selected>All Statuses (120 Total)</option>
                  <option>Approved by Academic VP (98)</option>
                  <option>Awaiting VP Signoff (12)</option>
                  <option>Revision Requested (4)</option>
                  <option>Unsubmitted Drafts (6)</option>
                </select>
                <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[18px]">
                  filter_list
                </span>
              </div>
            </div>
          </div>
          {/*  Active Week Segment Button  */}
          <div className="flex lg:flex-col justify-between items-end gap-1 shrink-0 pt-2 lg:pt-0">
            <div className="font-label-sm text-label-sm text-on-surface-variant font-medium">
              Instructional Pacing:{" "}
              <span className="text-secondary font-bold">Week 6 of 12</span>
            </div>
            <div className="flex items-center gap-1 bg-surface-container p-1 rounded-lg">
              <button
                className="px-2.5 py-1 text-on-surface-variant hover:text-on-surface rounded font-label-sm text-label-sm transition-colors"
                type="button"
              >
                Wk 5
              </button>
              <button
                className="px-3 py-1 bg-surface-container-lowest text-primary font-bold shadow-sm rounded font-label-sm text-label-sm"
                type="button"
              >
                Week 6 (Current)
              </button>
              <button
                className="px-2.5 py-1 text-on-surface-variant hover:text-on-surface rounded font-label-sm text-label-sm transition-colors"
                type="button"
              >
                Wk 7
              </button>
              <button
                className="px-2.5 py-1 text-on-surface-variant hover:text-on-surface rounded font-label-sm text-label-sm transition-colors"
                type="button"
              >
                Wk 8
              </button>
            </div>
          </div>
        </div>
        {/*  Summary KPI Cards  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
          {/*  Card 1  */}
          <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">
                  Curriculum Alignment
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-metric-lg text-metric-lg text-primary font-bold">
                    28 / 28
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary font-semibold">
                    100% Core
                  </span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[22px]">
                  auto_stories
                </span>
              </div>
            </div>
            <div className="mt-4 pt-3 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-secondary text-[16px]">
                  check_circle
                </span>{" "}
                NERDC Benchmarked
              </span>
              <span className="text-outline font-body-sm text-body-sm">
                Kaduna QA Passed
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary"></div>
          </div>
          {/*  Card 2  */}
          <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">
                  Week 6 Submissions
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-metric-lg text-metric-lg text-on-surface font-bold">
                    114 / 120
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary font-semibold">
                    95.0% Rate
                  </span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center text-on-secondary-container">
                <span className="material-symbols-outlined text-[22px]">
                  assignment_turned_in
                </span>
              </div>
            </div>
            <div className="mt-4 pt-3 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
              <span className="text-on-surface-variant font-body-sm text-body-sm">
                6 Outstanding (Reminder sent)
              </span>
              <span className="text-secondary font-semibold">
                +4.2% vs Wk 5
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary"></div>
          </div>
          {/*  Card 3  */}
          <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">
                  Academic VP Vetting
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-metric-lg text-metric-lg text-primary font-bold">
                    98 Plans
                  </span>
                  <span className="font-label-sm text-label-sm text-tertiary-container font-semibold">
                    12 Pending
                  </span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[22px]">
                  rate_review
                </span>
              </div>
            </div>
            <div className="mt-4 pt-3 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
              <span className="text-error font-medium">
                4 Plans with Revisions
              </span>
              <span className="text-outline font-body-sm text-body-sm">
                Lead VP: Ust. M. Danjuma
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-surface-tint"></div>
          </div>
          {/*  Card 4  */}
          <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">
                  Term Syllabus Velocity
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-metric-lg text-metric-lg text-secondary font-bold">
                    46.2%
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                    Target: 48.0%
                  </span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed-variant">
                <span className="material-symbols-outlined text-[22px]">
                  speed
                </span>
              </div>
            </div>
            <div className="mt-4 pt-3 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
              <div className="w-full bg-surface-container-high rounded-full h-1.5 overflow-hidden mr-2">
                <div className="bg-secondary h-1.5 rounded-full w-[46.2%]"></div>
              </div>
              <span className="text-secondary font-semibold shrink-0">
                On Track
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary-container"></div>
          </div>
        </div>
        {/*  Main Content Layout (65% Ledger / 35% Inspector & Benchmarks)  */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
          {/*  LEFT COLUMN: Ledger & Tracker (8 Cols = ~66%)  */}
          <div className="lg:col-span-8 flex flex-col gap-space-lg">
            {/*  Submission & Review Ledger  */}
            <div className="bg-surface-container-lowest rounded-xl shadow-sm flex flex-col overflow-hidden">
              <div className="p-space-lg flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm bg-surface-container-lowest">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-headline-md text-headline-md text-on-surface">
                      Weekly Lesson Plan Review Ledger
                    </h2>
                    <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">
                      Week 6
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Continuous quality assurance, pedagogy audit, and
                    instructional verification by subject coordinators.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-outline text-[16px]">
                      search
                    </span>
                    <input
                      className="pl-8 pr-3 py-1.5 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary w-48 xl:w-60"
                      placeholder="Filter educator or topic..."
                      type="text"
                    />
                  </div>
                  <button
                    className="p-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant"
                    title="Filter columns"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      tune
                    </span>
                  </button>
                </div>
              </div>
              {/*  Ledger Table  */}
              <div className="overflow-x-auto">
                <table className="w-full text-left font-body-md text-body-md">
                  <thead>
                    <tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                      <th className="py-3 px-4 font-semibold">
                        Subject &amp; Class Arm
                      </th>
                      <th className="py-3 px-4 font-semibold">Educator</th>
                      <th className="py-3 px-4 font-semibold">
                        Week &amp; Syllabus Topic
                      </th>
                      <th className="py-3 px-4 font-semibold">
                        Instructional Resources
                      </th>
                      <th className="py-3 px-4 font-semibold">
                        Vetting Status
                      </th>
                      <th className="py-3 px-4 font-semibold text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y-0">
                    {/*  Row 1: Selected / Active (Physics)  */}
                    <tr className="bg-surface-container-high/60 transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="flex flex-col">
                          <span className="font-headline-sm text-headline-sm text-primary font-semibold">
                            SSS 2 Physics
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">
                            Arm: Al-Khwarizmi &amp; Ibn Rushd
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-2.5">
                          <img
                            alt="Malam Garba Usman portrait"
                            className="w-8 h-8 rounded-full object-cover shrink-0"
                            data-alt="Close up portrait of a senior Nigerian male physics educator Malam Garba Usman wearing clean traditional academic attire with spectacles inside a high school science lab"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1BbhnMPomi3Gp3N-wuszGctdGCLC5spLa0cBYZJK_qrevgsEAKQRubXmm27LQliQSuaWKmefTGFgVn-Qr2W6kNBmSoDbxAoze70tjw1E1gc3gl8WI_ItEhg7YLbYnVKq5P_6jS-XrbxSTW6Y1K5uedIO_DQLXSogxVR6ljs_IQlT7WXdDW8ZgJ46fzKsy8obkjfuHZ63oEcrEgP8KatJavK5HwosN3-RvwnxBk8l4VVtu_gx8mpvjAg"
                          />
                          <div className="flex flex-col min-w-0">
                            <span className="font-label-md text-label-md text-on-surface font-semibold truncate">
                              Mal. Garba Usman
                            </span>
                            <span className="font-body-sm text-[11px] text-on-surface-variant truncate">
                              Senior Physics Master
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex flex-col max-w-xs">
                          <span className="font-label-md text-label-md text-on-surface font-semibold truncate">
                            Wk 6: Diffraction &amp; Wave Optics
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                            Huygens' Principle, Slit fringes, Young's modulus
                            link
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                          Laser, Optical Bench, PhET
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                          <span className="material-symbols-outlined text-[14px]">
                            check_circle
                          </span>{" "}
                          Approved
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            className="p-1.5 rounded-lg bg-primary text-on-primary hover:bg-primary-container transition-colors"
                            title="Inspecting Selected Plan"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              visibility
                            </span>
                          </button>
                          <button
                            className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors"
                            title="Endorsement Log"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              history_edu
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/*  Row 2: Chemistry SSS 3  */}
                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="flex flex-col">
                          <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                            SSS 3 Chemistry
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">
                            Arm: Al-Razi &amp; Jabir
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-2.5">
                          <img
                            alt="Hajiya Zainab Balarabe portrait"
                            className="w-8 h-8 rounded-full object-cover shrink-0"
                            data-alt="Portrait of Hajiya Zainab Balarabe, an experienced female Nigerian chemistry teacher with modest hijab and lab coat in an educational laboratory"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKjhdzzc57b1L0I7VKTw7JEB_B6k0-GgYQXbxdWsttcgRE7nnXxQVc9F8kygXDtR8z11ma_zbcsbgpQl73SUMI7UncbYmBgrw_9UfPqhPm6djOFLCGM7cDgSWMxvT1OEvyrEmU-VVo4whgShfUaTbRPbYoVnGUKEAd-y3H0MvIjoxCYZE3oEu9yDDufXMUELQzzCQY5S1isw5Fb4KfnRNTOGEBj5Zm1wesI0I435TRGEgXsxtEL3CtFA"
                          />
                          <div className="flex flex-col min-w-0">
                            <span className="font-label-md text-label-md text-on-surface font-semibold truncate">
                              Haj. Zainab Balarabe
                            </span>
                            <span className="font-body-sm text-[11px] text-on-surface-variant truncate">
                              HOD Sciences
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex flex-col max-w-xs">
                          <span className="font-label-md text-label-md text-on-surface font-semibold truncate">
                            Wk 6: Esters &amp; Saponification
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                            Hydrolysis mechanism, WAEC practical soap synthesis
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                          Reflux set, NaOH, Palm Oil
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                          <span className="material-symbols-outlined text-[14px]">
                            check_circle
                          </span>{" "}
                          Approved
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors"
                            title="View Lesson Plan"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              visibility
                            </span>
                          </button>
                          <button
                            className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors"
                            title="Add Note"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              chat_bubble_outline
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/*  Row 3: Basic Tech JSS 2  */}
                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="flex flex-col">
                          <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                            JSS 2 Basic Tech
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">
                            Arm: Al-Kindi &amp; Tariq
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-2.5">
                          <img
                            alt="Engr. Ibrahim Yakubu portrait"
                            className="w-8 h-8 rounded-full object-cover shrink-0"
                            data-alt="Portrait photo of Engr. Ibrahim Yakubu, a young Nigerian technical instructor in workshop attire holding a technical drawing drafting set"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuQ49LeSvIOo0KLGULsfLDiiMHeOFQH3BbMbU7Sx8UigpwEgK0WiIuRzUSj2E7SzGd2hd9r38jy6LALgTsOXGxKJzRHjbZcrWUNc62vHyN9rCm0ORu740b_bde_0eqb6aE5JOgG37LyM_lV90QoyxhJvWc_VwcR5OHf5wu6LhTC3lAgOrER5uvkFwQHGSON8rtsiYI3sELv5VBzarkSkdzMo42e0PhS0jh3yHuuxTUD4_C-uMiwm8V7Q"
                          />
                          <div className="flex flex-col min-w-0">
                            <span className="font-label-md text-label-md text-on-surface font-semibold truncate">
                              Engr. Ibrahim Yakubu
                            </span>
                            <span className="font-body-sm text-[11px] text-on-surface-variant truncate">
                              Technical Instructor
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex flex-col max-w-xs">
                          <span className="font-label-md text-label-md text-on-surface font-semibold truncate">
                            Wk 6: Isometric Projection Basics
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                            30-degree axis layout, dimensions, hidden lines
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                          T-squares, Set-squares, Wood blocks
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">
                          <span className="material-symbols-outlined text-[14px]">
                            hourglass_top
                          </span>{" "}
                          Awaiting VP
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors"
                            title="View Lesson Plan"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              visibility
                            </span>
                          </button>
                          <button
                            className="p-1.5 rounded-lg text-primary hover:bg-primary-fixed transition-colors"
                            title="Quick Endorse"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              verified
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/*  Row 4: Primary 5 English  */}
                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="flex flex-col">
                          <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                            Primary 5 English
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">
                            Arm: Al-Bukhari &amp; Muslim
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-2.5">
                          <img
                            alt="Mrs. Fatima Sani portrait"
                            className="w-8 h-8 rounded-full object-cover shrink-0"
                            data-alt="Professional headshot of Mrs Fatima Sani, a smiling Northern Nigerian female primary school teacher wearing an elegant turquoise hijab in a well lit classroom"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB7ZemHbvnc0OBhoBcW0NIK-ddXMiyz8HKfGHLteb_gbnR82TXGqa_fBNV-KvMiuBXqBl1qSXMPdml14qPF31HMW_G7lCWhCItCAN_L0xz8KhfqBVE6h_Q_mS_FPDSRUydHVALRB0l81zC4umQy7cXPnlN0qnW98NuBNQtOh6FWjjLE1QxAV6AifKTUAk0SMvyHLi0vC3CSWoophSwTJzDaK5DCumjJpDz1J29JWQ5o8JdWgCzj8k21w"
                          />
                          <div className="flex flex-col min-w-0">
                            <span className="font-label-md text-label-md text-on-surface font-semibold truncate">
                              Mrs. Fatima Sani
                            </span>
                            <span className="font-body-sm text-[11px] text-on-surface-variant truncate">
                              Primary 5 Lead
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex flex-col max-w-xs">
                          <span className="font-label-md text-label-md text-on-surface font-semibold truncate">
                            Wk 6: Complex Sentence Synthesis
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                            Subordinating conjunctions (although, since, while)
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                          Sentence flashcards, Smartboard quiz
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold">
                          <span className="material-symbols-outlined text-[14px]">
                            feedback
                          </span>{" "}
                          Revision Req.
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors"
                            title="View Lesson Plan"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              visibility
                            </span>
                          </button>
                          <button
                            className="p-1.5 rounded-lg text-error hover:bg-error-container transition-colors"
                            title="Review Comments"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              edit_note
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/*  Row 5: Further Mathematics SSS 2  */}
                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="flex flex-col">
                          <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                            SSS 2 Further Maths
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">
                            Arm: Al-Khwarizmi Honours
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-2.5">
                          <img
                            alt="Ustaz Haruna Adamu portrait"
                            className="w-8 h-8 rounded-full object-cover shrink-0"
                            data-alt="Portrait of Ustaz Haruna Adamu, a Nigerian mathematics educator holding mathematical chalkboards and graphing tools in a Kaduna school context"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpoQHPIrdah5BStbM4_VDVOGWYWcQHSJekQRoPeznPuf0BoKnmzlGDh18FAxIArNqyjlwkYhoDVPzxzNC5OpkIEubEw7K4DWwN4B0WW_KZ0aUZCClCryGsQX2hS66lLfcaYmz3fbQzx7b2L65PkBTku4GbLr_VtvHntL0EowU8zb7PDHK2cB3gWWwMQ974vk2kEhTCWRy3DJ-FgvqKGKIJfSQS1IC78fUeGuqLvzFfFg1YdyYFzxhheg"
                          />
                          <div className="flex flex-col min-w-0">
                            <span className="font-label-md text-label-md text-on-surface font-semibold truncate">
                              Ust. Haruna Adamu
                            </span>
                            <span className="font-body-sm text-[11px] text-on-surface-variant truncate">
                              Mathematics Lead
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex flex-col max-w-xs">
                          <span className="font-label-md text-label-md text-on-surface font-semibold truncate">
                            Wk 6: Differentiation from First Principles
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                            Delta increments, limits, polynomials dx/dy
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                          Desmos Graphing, Graph Pads
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                          <span className="material-symbols-outlined text-[14px]">
                            check_circle
                          </span>{" "}
                          Approved
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors"
                            title="View Lesson Plan"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              visibility
                            </span>
                          </button>
                          <button
                            className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors"
                            title="Endorsement Log"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              history_edu
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-space-md bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-surface-variant font-label-sm text-label-sm">
                <span>Showing 5 of 114 Submitted Lesson Plans for Term 1</span>
                <div className="flex items-center gap-1">
                  <button
                    className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant disabled:opacity-50"
                    disabled
                    type="button"
                  >
                    Previous
                  </button>
                  <span className="px-2 py-1 bg-primary text-on-primary rounded font-semibold">
                    1
                  </span>
                  <button
                    className="px-2.5 py-1 rounded hover:bg-surface-container text-on-surface"
                    type="button"
                  >
                    2
                  </button>
                  <button
                    className="px-2.5 py-1 rounded hover:bg-surface-container text-on-surface"
                    type="button"
                  >
                    3
                  </button>
                  <button
                    className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface"
                    type="button"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
            {/*  Curriculum Progression & Syllabus Tracker (Visual Analytics)  */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                <div>
                  <h2 className="font-headline-md text-headline-md text-on-surface">
                    Curriculum Progression &amp; Syllabus Coverage
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Live tracking against Kaduna State Unified Scheme of Work
                    &amp; WAEC Syllabus 2026/2027.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 font-label-sm text-label-sm text-secondary font-semibold">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>{" "}
                    Actual Completed
                  </span>
                  <span className="flex items-center gap-1 font-label-sm text-label-sm text-outline font-medium">
                    <span className="w-2.5 h-2.5 rounded-full bg-surface-container-highest"></span>{" "}
                    Expected Pace (Week 6: 50%)
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-2">
                {/*  Subject 1: SSS 2 Physics  */}
                <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-label-lg text-label-lg text-primary font-bold">
                        SSS 2 Physics
                      </span>
                      <span className="block font-body-sm text-body-sm text-on-surface-variant">
                        Theme: Waves, Sound &amp; Geometrical Optics
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">
                      52% Done
                    </span>
                  </div>
                  {/*  Progress Bar Stack  */}
                  <div className="w-full bg-surface-container-highest rounded-full h-2.5 overflow-hidden relative">
                    <div className="bg-secondary h-2.5 rounded-full w-[52%]"></div>
                    {/*  50% Benchmark Marker  */}
                    <div className="absolute top-0 bottom-0 left-[50%] w-0.5 bg-outline/40"></div>
                  </div>
                  <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-1">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-primary">
                        biotech
                      </span>
                      <span>
                        Labs: <strong>4 of 6 Completed</strong>
                      </span>
                    </span>
                    <span>13 of 25 Modules Mastered</span>
                  </div>
                </div>
                {/*  Subject 2: SSS 3 Chemistry  */}
                <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-label-lg text-label-lg text-primary font-bold">
                        SSS 3 Chemistry
                      </span>
                      <span className="block font-body-sm text-body-sm text-on-surface-variant">
                        Theme: Organic Compounds &amp; Quantitative Analysis
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">
                      48% Done
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-highest rounded-full h-2.5 overflow-hidden relative">
                    <div className="bg-secondary h-2.5 rounded-full w-[48%]"></div>
                    <div className="absolute top-0 bottom-0 left-[50%] w-0.5 bg-outline/40"></div>
                  </div>
                  <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-1">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-primary">
                        science
                      </span>
                      <span>
                        Labs: <strong>5 of 8 Completed</strong>
                      </span>
                    </span>
                    <span>12 of 24 Modules Mastered</span>
                  </div>
                </div>
                {/*  Subject 3: SSS 2 Further Mathematics  */}
                <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-label-lg text-label-lg text-primary font-bold">
                        SSS 2 Further Mathematics
                      </span>
                      <span className="block font-body-sm text-body-sm text-on-surface-variant">
                        Theme: Pure Calculus &amp; Coordinate Geometry
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">
                      50% Done
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-highest rounded-full h-2.5 overflow-hidden relative">
                    <div className="bg-secondary h-2.5 rounded-full w-[50%]"></div>
                    <div className="absolute top-0 bottom-0 left-[50%] w-0.5 bg-outline/40"></div>
                  </div>
                  <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-1">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-primary">
                        calculate
                      </span>
                      <span>
                        Problem Sets: <strong>18 Assessed</strong>
                      </span>
                    </span>
                    <span>10 of 20 Modules Mastered</span>
                  </div>
                </div>
                {/*  Subject 4: JSS 2 Basic Technology  */}
                <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-label-lg text-label-lg text-primary font-bold">
                        JSS 2 Basic Technology
                      </span>
                      <span className="block font-body-sm text-body-sm text-on-surface-variant">
                        Theme: Technical Drawing &amp; Processing of Materials
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold">
                      42% Done
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-highest rounded-full h-2.5 overflow-hidden relative">
                    <div className="bg-on-tertiary-container h-2.5 rounded-full w-[42%]"></div>
                    <div className="absolute top-0 bottom-0 left-[50%] w-0.5 bg-outline/40"></div>
                  </div>
                  <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-1">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-tertiary">
                        construction
                      </span>
                      <span>
                        Workshop: <strong>2 of 5 Completed</strong>
                      </span>
                    </span>
                    <span className="text-tertiary-container font-semibold">
                      Slight Lag (-8%)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  RIGHT COLUMN: Detailed Inspector & MoE Compliance Benchmarks (4 Cols = ~34%)  */}
          <div className="lg:col-span-4 flex flex-col gap-space-lg">
            {/*  Lesson Plan Inspector Drawer Card  */}
            <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
              <div className="p-space-md bg-primary text-on-primary flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">
                    fact_check
                  </span>
                  <span className="font-headline-sm text-headline-sm">
                    Active Lesson Dossier
                  </span>
                </div>
                <span className="px-2 py-0.5 bg-white/10 rounded font-label-sm text-label-sm">
                  Ref: LP-26-W06-PHY
                </span>
              </div>
              <div className="p-space-lg flex flex-col gap-space-md">
                {/*  Teacher & Class Header  */}
                <div className="flex items-start gap-space-sm pb-space-sm bg-surface-container-lowest">
                  <img
                    alt="Malam Garba Usman profile"
                    className="w-12 h-12 rounded-xl object-cover shrink-0"
                    data-alt="Portrait of an experienced Nigerian educator Malam Garba Usman holding a physics textbook in front of a smart classroom board"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuACyG8KmhQuleHT8qkk0AIg6LvKxm9j4ykQlhQ-cZogtBGmBomNuAPtX2ApTld89dbHYb5mdhsDk6qXcH0qscr0e7P-o1XVPqzRtih6XcCj_SQ2l-aT5vNUZcdjg1PhZkA-WSTl3GUMPFoK4XM-0RJ49iN6gvQ2TUftkAmrQQieAmtTvH8PBKjGZQjnMvdMHTd-1yJhcYWd0zeTohXjmXicC6Z7gyI8swRUV-rDeCT89A6RCYRQbPbbrA"
                  />
                  <div className="flex flex-col min-w-0">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold truncate">
                      SSS 2 Physics (Arm A &amp; B)
                    </span>
                    <span className="font-label-md text-label-md text-primary font-semibold">
                      Educator: Mal. Garba Usman
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Scheduled: Mon 10:00 - 11:20 AM • Lab 2
                    </span>
                  </div>
                </div>
                {/*  Section: Behavioral Objectives  */}
                <div className="flex flex-col gap-1.5">
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">
                    Specific Behavioral Objectives (Bloom's Revised)
                  </span>
                  <ul className="font-body-sm text-body-sm text-on-surface space-y-1.5 bg-surface-container-low p-space-sm rounded-lg">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-[16px] shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>
                        <strong>Remember/Understand:</strong> Formulate Huygens'
                        Wave Principle of secondary wavelets in 3 clear
                        sentences.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-[16px] shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>
                        <strong>Apply/Calculate:</strong> Compute fringe width
                        using $\lambda = (yd)/D$ for double slit data sets.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-[16px] shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>
                        <strong>Analyze:</strong> Compare diffraction effects
                        through narrow razor apertures vs standard pinholes.
                      </span>
                    </li>
                  </ul>
                </div>
                {/*  Section: Pedagogical Delivery Phases  */}
                <div className="flex flex-col gap-1.5">
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">
                    Pedagogical Delivery Breakdown (80 Min Period)
                  </span>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low font-body-sm text-body-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-primary-fixed text-primary font-bold flex items-center justify-center text-[11px]">
                          1
                        </span>
                        <span className="font-medium text-on-surface">
                          Entry Hook &amp; Prior Knowledge
                        </span>
                      </div>
                      <span className="text-outline font-semibold">
                        10 Mins
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low font-body-sm text-body-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-primary-fixed text-primary font-bold flex items-center justify-center text-[11px]">
                          2
                        </span>
                        <span className="font-medium text-on-surface">
                          Interactive Demonstration (Laser &amp; Slit)
                        </span>
                      </div>
                      <span className="text-outline font-semibold">
                        25 Mins
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low font-body-sm text-body-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-primary-fixed text-primary font-bold flex items-center justify-center text-[11px]">
                          3
                        </span>
                        <span className="font-medium text-on-surface">
                          Hands-on Guided Group Work / Math Solver
                        </span>
                      </div>
                      <span className="text-outline font-semibold">
                        30 Mins
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low font-body-sm text-body-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-secondary-container text-on-secondary-container font-bold flex items-center justify-center text-[11px]">
                          4
                        </span>
                        <span className="font-medium text-on-surface">
                          Summative Exit Slip &amp; Assign Homework
                        </span>
                      </div>
                      <span className="text-secondary font-semibold">
                        15 Mins
                      </span>
                    </div>
                  </div>
                </div>
                {/*  Section: Inclusive Differentiation Strategy  */}
                <div className="flex flex-col gap-1.5">
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">
                    Differentiated Instruction Framework
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 rounded bg-surface-container-low text-[12px] text-on-surface">
                      <span className="font-semibold block text-primary mb-0.5">
                        Remedial Tier:
                      </span>
                      Visual PhET wave simulation and paired peer assistance for
                      mathematical calculations.
                    </div>
                    <div className="p-2 rounded bg-surface-container-low text-[12px] text-on-surface">
                      <span className="font-semibold block text-secondary mb-0.5">
                        Olympiad / Honors:
                      </span>
                      Extended calculation exploring grating spectrometers and
                      wavelength derivation of sodium D-lines.
                    </div>
                  </div>
                </div>
                {/*  Section: Academic VP Endorsement Stamp  */}
                <div className="p-space-sm rounded-xl bg-secondary-fixed/30 flex flex-col gap-2 relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">
                        verified
                      </span>{" "}
                      VP Academic Vetting Stamp
                    </span>
                    <span className="text-[10px] text-outline font-medium">
                      Recorded: 15 Oct 2026, 16:42
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface italic">
                    "Lesson plan conforms rigorously with NERDC SSS 2 physics
                    curriculum guidelines. Laser safety protocols confirmed with
                    Physics Lab Technician."
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        draw
                      </span>
                      <span className="font-label-sm text-label-sm font-bold text-on-surface">
                        Ust. Mahmud Danjuma
                      </span>
                      <span className="text-[10px] text-outline">
                        • VP Academics (Senior)
                      </span>
                    </div>
                    <span className="px-2 py-0.5 bg-secondary text-on-secondary rounded text-[10px] font-bold">
                      DIGITALLY SIGNED
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*  Kaduna MoE & WAEC Curriculum Benchmark Standards Card  */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    gavel
                  </span>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">
                    Regulatory Compliance Audit
                  </h2>
                </div>
                <span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">
                  Q1 Baseline
                </span>
              </div>
              <div className="space-y-3">
                {/*  Item 1  */}
                <div className="flex items-start gap-2.5 p-2 rounded-lg bg-surface-container-low">
                  <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">
                    verified
                  </span>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">
                      Practical Lab Hours (Science Directorate)
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Min. 3 double-periods per fortnight required. Noorul Ilm
                      current allocation: 4 double periods.
                    </span>
                  </div>
                </div>
                {/*  Item 2  */}
                <div className="flex items-start gap-2.5 p-2 rounded-lg bg-surface-container-low">
                  <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">
                    verified
                  </span>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">
                      Continuous Assessment (CA) Weightings
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Configured to Kaduna MoE 40% CA (Tests, Quizzes,
                      Assignments, Practical) &amp; 60% Terminal Exam.
                    </span>
                  </div>
                </div>
                {/*  Item 3  */}
                <div className="flex items-start gap-2.5 p-2 rounded-lg bg-surface-container-low">
                  <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">
                    verified
                  </span>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface font-semibold">
                      Prescribed Nigerian Textbooks Alignment
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      PN Okeke Senior Secondary Physics, Ababio Chemistry, and
                      New General Mathematics verified in inventory.
                    </span>
                  </div>
                </div>
              </div>
              {/*  Download & Verify Action  */}
              <div className="pt-2">
                <button
                  className="w-full py-2.5 px-space-md rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md flex items-center justify-center gap-2 transition-colors"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    download_for_offline
                  </span>
                  <span>Download Official Accreditation Dossier (.pdf)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
