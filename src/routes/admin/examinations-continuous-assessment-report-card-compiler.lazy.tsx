import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(
  "/admin/examinations-continuous-assessment-report-card-compiler",
)({
  component: ExaminationsContinuousAssessmentReportCardCompiler,
});

function ExaminationsContinuousAssessmentReportCardCompiler() {
  return (
    <main className="w-full pt-16 px-space-lg py-space-lg flex-1 bg-background">
      <div className="flex flex-col w-full space-y-space-lg">
        {/*  Breadcrumbs & Administrative Meta Banner  */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
          <div className="space-y-1">
            <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
              <span className="hover:text-primary transition-colors cursor-pointer">
                Academic Management
              </span>
              <span className="material-symbols-outlined text-[14px]">
                chevron_right
              </span>
              <span className="hover:text-primary transition-colors cursor-pointer">
                Examinations &amp; Continuous Assessment
              </span>
              <span className="material-symbols-outlined text-[14px]">
                chevron_right
              </span>
              <span className="text-primary font-semibold">
                Result Engine &amp; Compiler
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                Examinations, Continuous Assessment (CA) &amp; Terminal Report
                Compiler
              </h1>
            </div>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm flex items-center gap-1.5 font-semibold">
                <span className="material-symbols-outlined text-[15px] text-primary">
                  event_available
                </span>
                2026/2027 • 1st Term Evaluation
              </span>
              <span className="px-2.5 py-1 rounded-full bg-secondary-container/40 text-on-secondary-container font-label-sm text-label-sm flex items-center gap-1.5 font-semibold">
                <span className="material-symbols-outlined text-[15px] text-secondary">
                  verified
                </span>
                Kaduna MoE Scale Compliant (WASSCE Standard)
              </span>
              <span className="px-2.5 py-1 rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1">
                <span className="font-semibold text-on-surface">Formula:</span>{" "}
                CA1 (10%) + CA2 (10%) + Mid-Term (20%) + Exam (60%) = 100%
              </span>
            </div>
          </div>
          {/*  Top Action Bar  */}
          <div className="flex flex-wrap items-center gap-space-xs sm:gap-space-sm shrink-0">
            <button className="px-3.5 py-2 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-colors shadow-sm font-label-md text-label-md flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                table_view
              </span>
              <span>Broad-Sheet (.xlsx)</span>
            </button>
            <button className="px-3.5 py-2 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-colors shadow-sm font-label-md text-label-md flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                picture_as_pdf
              </span>
              <span>Bulk PDF Dossiers</span>
            </button>
            <button className="px-3.5 py-2 rounded-lg bg-secondary text-on-secondary hover:bg-secondary/90 transition-colors shadow-sm font-label-md text-label-md flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px]">
                add_task
              </span>
              <span>Batch Score Entry</span>
            </button>
            <button className="px-4 py-2 rounded-lg bg-primary-container text-on-primary hover:bg-primary transition-colors shadow-sm font-label-md text-label-md flex items-center gap-1.5 font-semibold">
              <span className="material-symbols-outlined text-[18px] text-secondary-fixed">
                lock_clock
              </span>
              <span>Publish Approved Results</span>
            </button>
          </div>
        </div>
        {/*  KPI Metrics Row  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
          {/*  Card 1  */}
          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="font-label-md text-label-md text-on-surface-variant font-medium">
                CA Entry Progress
              </span>
              <span className="p-2 rounded-lg bg-secondary-container/30 text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">
                  grading
                </span>
              </span>
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-metric-lg text-metric-lg text-on-surface font-bold">
                  94.6%
                </span>
                <span className="font-label-sm text-label-sm text-secondary font-semibold">
                  ↑ On Track
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                38 of 42 classes locked &amp; verified; 4 pending teacher
                submission.
              </p>
            </div>
            <div className="w-full bg-surface-container rounded-full h-1.5 mt-3 overflow-hidden">
              <div className="bg-secondary h-1.5 rounded-full w-[94.6%]"></div>
            </div>
          </div>
          {/*  Card 2  */}
          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="font-label-md text-label-md text-on-surface-variant font-medium">
                Distinction Rate (A1-B3)
              </span>
              <span className="p-2 rounded-lg bg-tertiary-fixed/30 text-tertiary flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">
                  workspace_premium
                </span>
              </span>
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-metric-lg text-metric-lg text-on-surface font-bold">
                  38.2%
                </span>
                <span className="font-label-sm text-label-sm text-secondary font-semibold">
                  +3.4% YoY
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Weighted performance index across SSS Science &amp; Arts
                branches.
              </p>
            </div>
            <div className="w-full bg-surface-container rounded-full h-1.5 mt-3 overflow-hidden">
              <div className="bg-primary-container h-1.5 rounded-full w-[38.2%]"></div>
            </div>
          </div>
          {/*  Card 3  */}
          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="font-label-md text-label-md text-on-surface-variant font-medium">
                Principal Endorsement Queue
              </span>
              <span className="p-2 rounded-lg bg-surface-container-high text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">
                  assignment_turned_in
                </span>
              </span>
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-metric-lg text-metric-lg text-on-surface font-bold">
                  148
                </span>
                <span className="font-label-sm text-label-sm text-tertiary font-semibold">
                  Priority Review
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                SSS 2 Science &amp; Commercial dossiers flagged for graduation
                tract.
              </p>
            </div>
            <div className="flex items-center gap-1.5 mt-3">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
              <span className="font-label-sm text-[11px] text-tertiary font-medium">
                Bursary Cleared 100%
              </span>
            </div>
          </div>
          {/*  Card 4  */}
          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="font-label-md text-label-md text-on-surface-variant font-medium">
                MoE Moderation Audit
              </span>
              <span className="p-2 rounded-lg bg-secondary-container/40 text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">
                  verified_user
                </span>
              </span>
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-metric-lg text-metric-lg text-secondary font-bold">
                  0 Flagged
                </span>
                <span className="font-label-sm text-label-sm text-secondary font-semibold">
                  100% Validated
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Zero grade discrepancies detected by Kaduna State digital
                inspector.
              </p>
            </div>
            <div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-[11px] mt-3">
              <span className="material-symbols-outlined text-[14px] text-secondary">
                check_circle
              </span>
              <span>Checksum passed 18 mins ago</span>
            </div>
          </div>
        </div>
        {/*  Filtration & Class Selector Filter Shelf  */}
        <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 flex-1">
            {/*  Class Selector  */}
            <div className="flex flex-col space-y-1">
              <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                Target Class &amp; Arm
              </label>
              <div className="relative">
                <select className="w-full h-10 px-3 pr-8 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer">
                  <option selected>SSS 2 - Science A (42 Students)</option>
                  <option>SSS 2 - Science B (40 Students)</option>
                  <option>SSS 2 - Commercial A (38 Students)</option>
                  <option>SSS 2 - Humanities (35 Students)</option>
                  <option>SSS 3 - WAEC Candidates (52 Students)</option>
                </select>
                <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[18px]">
                  unfold_more
                </span>
              </div>
            </div>
            {/*  Subject Selector  */}
            <div className="flex flex-col space-y-1">
              <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                Subject / Course
              </label>
              <div className="relative">
                <select className="w-full h-10 px-3 pr-8 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer">
                  <option selected>Further Mathematics (FMA-201)</option>
                  <option>General Mathematics (MTH-201)</option>
                  <option>English Language (ENG-201)</option>
                  <option>Physics (PHY-201)</option>
                  <option>Chemistry (CHM-201)</option>
                  <option>Islamic Religious Studies (IRS-201)</option>
                </select>
                <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[18px]">
                  unfold_more
                </span>
              </div>
            </div>
            {/*  Component Selector  */}
            <div className="flex flex-col space-y-1">
              <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                Assessment Phase
              </label>
              <div className="relative">
                <select className="w-full h-10 px-3 pr-8 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer">
                  <option selected>All Components (Consolidated)</option>
                  <option>Continuous Assessment 1 (10%)</option>
                  <option>Continuous Assessment 2 (10%)</option>
                  <option>Mid-Term Examination (20%)</option>
                  <option>Terminal Examination (60%)</option>
                </select>
                <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[18px]">
                  unfold_more
                </span>
              </div>
            </div>
            {/*  Exam Officer / Sign-off  */}
            <div className="flex flex-col space-y-1">
              <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
                Moderating Officer
              </label>
              <div className="h-10 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md flex items-center justify-between">
                <div className="flex items-center gap-2 truncate">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  <span className="truncate font-medium text-body-sm">
                    Mal. Ibrahim Aliyu (Exam Officer)
                  </span>
                </div>
                <span className="material-symbols-outlined text-[16px] text-secondary">
                  verified
                </span>
              </div>
            </div>
          </div>
          {/*  Quick Filter Toggles  */}
          <div className="flex flex-wrap items-center gap-2 lg:self-end pt-1">
            <button className="px-3 py-2 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container font-label-sm text-label-sm flex items-center gap-1.5 transition-colors">
              <span className="material-symbols-outlined text-[16px] text-tertiary">
                warning
              </span>
              <span>Borderline (&lt;40%)</span>
            </button>
            <button className="px-3 py-2 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container font-label-sm text-label-sm flex items-center gap-1.5 transition-colors">
              <span className="material-symbols-outlined text-[16px] text-error">
                pending_actions
              </span>
              <span>Incomplete CA</span>
            </button>
            <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-primary-container text-on-primary font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-[16px] text-secondary-fixed">
                shield
              </span>
              <span>Audit Mode Locked</span>
            </div>
          </div>
        </div>
        {/*  Dual-Pane Layout: Interactive CA Matrix (70%) + Live Terminal Dossier Preview (30%)  */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
          {/*  Left Main Pane: Interactive Batch Entry & Grade Broad-sheet  */}
          <div className="lg:col-span-8 flex flex-col space-y-space-md">
            <div className="rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden flex flex-col">
              {/*  Pane Header  */}
              <div className="px-space-lg py-space-md bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      Continuous Assessment &amp; Terminal Examination Register
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-secondary-container/50 text-secondary font-label-sm text-[11px] font-bold">
                      42 / 42 Verified
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Class: SSS 2 Science A • Subject: Further Mathematics
                    (Compulsory Stem Arm)
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Auto-Save:
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>{" "}
                    Synced 12s ago
                  </span>
                </div>
              </div>
              {/*  Tabulated Sheet  */}
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm tracking-wider uppercase">
                      <th className="py-3 px-space-md">Student / ID</th>
                      <th className="py-3 px-2 text-center">
                        CA 1<br />
                        <span className="text-[10px] lowercase font-normal">
                          (10)
                        </span>
                      </th>
                      <th className="py-3 px-2 text-center">
                        CA 2<br />
                        <span className="text-[10px] lowercase font-normal">
                          (10)
                        </span>
                      </th>
                      <th className="py-3 px-2 text-center">
                        Mid-Term
                        <br />
                        <span className="text-[10px] lowercase font-normal">
                          (20)
                        </span>
                      </th>
                      <th className="py-3 px-2 text-center">
                        Exam
                        <br />
                        <span className="text-[10px] lowercase font-normal">
                          (60)
                        </span>
                      </th>
                      <th className="py-3 px-2 text-center font-bold text-primary">
                        Total
                        <br />
                        <span className="text-[10px] font-normal">(100)</span>
                      </th>
                      <th className="py-3 px-2 text-center">Grade</th>
                      <th className="py-3 px-2 text-center">Rank</th>
                      <th className="py-3 px-space-md">
                        Teacher Assessment Remarks
                      </th>
                      <th className="py-3 px-2 text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody className="font-body-sm text-body-sm text-on-surface">
                    {/*  Student 1: Aisha Mansur Danbaba (Active Selected Row)  */}
                    <tr className="bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer">
                      <td className="py-3 px-space-md">
                        <div className="flex items-center gap-2.5">
                          <img
                            alt="Aisha Mansur Danbaba"
                            className="w-9 h-9 rounded-full object-cover shadow-sm ring-2 ring-primary"
                            data-alt="Portrait photo of a brilliant Nigerian female secondary school student in Kaduna wearing a crisp navy blue hijab uniform with gold trim, looking confident and smiling softly in an academic setting."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSTGEaiNrlnW8Rknhag5k6kfOhp_A25rMsGZ_iPH3EfLlDdNxOnZFdX8rv_KsUmdwXedw0h_lnonXQA457zAlapRD_ksv9AXzGUwuxh1lz6keObwOmMy9lb-3TfbE-8kOsgo-o1JEee7Wb7zygJWSztMHZh7ptHD2THPYOvNkiPeeQh-wdQoLCa8v5RcX2X3exJMoV4K0swSsja_4Q0f4feZp9D4bE-HQ8Cx9eyFgQ2IfPyyFhM1De3A"
                          />
                          <div>
                            <div className="font-label-md text-label-md font-semibold text-primary">
                              Aisha Mansur Danbaba
                            </div>
                            <div className="font-body-sm text-[11px] text-on-surface-variant">
                              NIIS/2024/0118 • Female
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-2 text-center font-mono font-medium">
                        9.5
                      </td>
                      <td className="py-3 px-2 text-center font-mono font-medium">
                        9.0
                      </td>
                      <td className="py-3 px-2 text-center font-mono font-medium">
                        18.5
                      </td>
                      <td className="py-3 px-2 text-center font-mono font-medium font-semibold text-primary">
                        54.0
                      </td>
                      <td className="py-3 px-2 text-center font-mono font-bold text-primary text-[15px]">
                        91.0
                      </td>
                      <td className="py-3 px-2 text-center">
                        <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[11px] font-bold">
                          A1
                        </span>
                      </td>
                      <td className="py-3 px-2 text-center font-semibold text-on-surface">
                        1st
                      </td>
                      <td
                        className="py-3 px-space-md text-on-surface truncate max-w-[190px]"
                        title="Exemplary mastery in calculus and coordinate geometry."
                      >
                        Exemplary mastery in calculus &amp; geometry.
                      </td>
                      <td className="py-3 px-2 text-center">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container/40 text-secondary font-label-sm text-[10px] font-bold">
                          <span className="material-symbols-outlined text-[12px]">
                            lock
                          </span>{" "}
                          Locked
                        </span>
                      </td>
                    </tr>
                    {/*  Student 2: Farouk Umar Sadiq  */}
                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="py-3 px-space-md">
                        <div className="flex items-center gap-2.5">
                          <img
                            alt="Farouk Umar Sadiq"
                            className="w-9 h-9 rounded-full object-cover shadow-sm"
                            data-alt="Portrait photo of a young Nigerian male high school student from northern Nigeria in school uniform, focused expression, standing in modern school hallway."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ0LVvlBtviquMzzKn2KmKco2FR7BomqoshB6fqGImNwpcC-5IO4cwOEcTxhEVblJGGmPQT2Da4Q421om0s4r7wa2hHCgk4Cfe6gJJr9tzt_et1DLlAK3HTCDMZpvfhiCqbpB86JWQQF-_mhFvWRZqXaw5_RyxdE4dvvg_uU5dRDmhgYdG-9xvzQvkf9Ma1xYuuRhOBaypeUDxuKNrfFvDh1OCMrdCRgRjV9zIZTSC4QVw_6QZSF4Hyw"
                          />
                          <div>
                            <div className="font-label-md text-label-md font-semibold text-on-surface">
                              Farouk Umar Sadiq
                            </div>
                            <div className="font-body-sm text-[11px] text-on-surface-variant">
                              NIIS/2024/0122 • Male
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-2 text-center font-mono">8.5</td>
                      <td className="py-3 px-2 text-center font-mono">9.0</td>
                      <td className="py-3 px-2 text-center font-mono">17.0</td>
                      <td className="py-3 px-2 text-center font-mono font-semibold">
                        51.0
                      </td>
                      <td className="py-3 px-2 text-center font-mono font-bold text-on-surface text-[15px]">
                        85.5
                      </td>
                      <td className="py-3 px-2 text-center">
                        <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[11px] font-bold">
                          B2
                        </span>
                      </td>
                      <td className="py-3 px-2 text-center text-on-surface">
                        2nd
                      </td>
                      <td
                        className="py-3 px-space-md text-on-surface truncate max-w-[190px]"
                        title="Consistent analytical reasoning and test performance."
                      >
                        Consistent analytical reasoning.
                      </td>
                      <td className="py-3 px-2 text-center">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container/40 text-secondary font-label-sm text-[10px] font-bold">
                          <span className="material-symbols-outlined text-[12px]">
                            lock
                          </span>{" "}
                          Locked
                        </span>
                      </td>
                    </tr>
                    {/*  Student 3: Khadijah Ahmad Rufai  */}
                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="py-3 px-space-md">
                        <div className="flex items-center gap-2.5">
                          <img
                            alt="Khadijah Ahmad Rufai"
                            className="w-9 h-9 rounded-full object-cover shadow-sm"
                            data-alt="Portrait photo of a cheerful Nigerian female student in a neat white and blue hijab, sitting by school laboratory equipment with books."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWaOzi9PCCKsLF-_p9YZCqOAm5W_UPOC5k0XxiyWcE_GruN2qRHbel4lcF719Wok2DWVhrIK0nB-2YBiaYVkW-4UgQTW2DpuxPPyYr5OzLYahWWbzJyti07Pl9PU_ymNtyap14Z1SYeSs6h9v0YQyqy7hoOh3HzcSCzbsgS7z0-1vo8K11eok7oU5qD13zb9x3IOLPsPqKwo9P0yx-IA9S85xbrPvLfxzetKmzN8l2tLf7OVN40Y2YCQ"
                          />
                          <div>
                            <div className="font-label-md text-label-md font-semibold text-on-surface">
                              Khadijah Ahmad Rufai
                            </div>
                            <div className="font-body-sm text-[11px] text-on-surface-variant">
                              NIIS/2024/0130 • Female
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-2 text-center font-mono">8.0</td>
                      <td className="py-3 px-2 text-center font-mono">8.5</td>
                      <td className="py-3 px-2 text-center font-mono">16.0</td>
                      <td className="py-3 px-2 text-center font-mono font-semibold">
                        49.0
                      </td>
                      <td className="py-3 px-2 text-center font-mono font-bold text-on-surface text-[15px]">
                        81.5
                      </td>
                      <td className="py-3 px-2 text-center">
                        <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[11px] font-bold">
                          B2
                        </span>
                      </td>
                      <td className="py-3 px-2 text-center text-on-surface">
                        3rd
                      </td>
                      <td
                        className="py-3 px-space-md text-on-surface truncate max-w-[190px]"
                        title="Impressive algebraic computation and clear proofs."
                      >
                        Strong algebraic computation.
                      </td>
                      <td className="py-3 px-2 text-center">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container/40 text-secondary font-label-sm text-[10px] font-bold">
                          <span className="material-symbols-outlined text-[12px]">
                            lock
                          </span>{" "}
                          Locked
                        </span>
                      </td>
                    </tr>
                    {/*  Student 4: Bilal Abdulrahman  */}
                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="py-3 px-space-md">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-full bg-primary-container text-on-primary font-bold flex items-center justify-center text-label-md">
                            BA
                          </div>
                          <div>
                            <div className="font-label-md text-label-md font-semibold text-on-surface">
                              Bilal Abdulrahman
                            </div>
                            <div className="font-body-sm text-[11px] text-on-surface-variant">
                              NIIS/2024/0145 • Male
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-2 text-center font-mono">7.5</td>
                      <td className="py-3 px-2 text-center font-mono">7.0</td>
                      <td className="py-3 px-2 text-center font-mono">14.0</td>
                      <td className="py-3 px-2 text-center font-mono font-semibold">
                        44.0
                      </td>
                      <td className="py-3 px-2 text-center font-mono font-bold text-on-surface text-[15px]">
                        72.5
                      </td>
                      <td className="py-3 px-2 text-center">
                        <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-[11px] font-bold">
                          B3
                        </span>
                      </td>
                      <td className="py-3 px-2 text-center text-on-surface">
                        7th
                      </td>
                      <td
                        className="py-3 px-space-md text-on-surface truncate max-w-[190px]"
                        title="Steady progress; encouraged to review trigonometry formulas."
                      >
                        Encouraged to review trigonometry.
                      </td>
                      <td className="py-3 px-2 text-center">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container/40 text-secondary font-label-sm text-[10px] font-bold">
                          <span className="material-symbols-outlined text-[12px]">
                            lock
                          </span>{" "}
                          Locked
                        </span>
                      </td>
                    </tr>
                    {/*  Student 5: Zainab Ibrahim Yakubu  */}
                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="py-3 px-space-md">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-full bg-tertiary-container text-tertiary-fixed font-bold flex items-center justify-center text-label-md">
                            ZY
                          </div>
                          <div>
                            <div className="font-label-md text-label-md font-semibold text-on-surface">
                              Zainab Ibrahim Yakubu
                            </div>
                            <div className="font-body-sm text-[11px] text-on-surface-variant">
                              NIIS/2024/0154 • Female
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-2 text-center font-mono">6.5</td>
                      <td className="py-3 px-2 text-center font-mono">6.0</td>
                      <td className="py-3 px-2 text-center font-mono">12.5</td>
                      <td className="py-3 px-2 text-center font-mono font-semibold">
                        39.0
                      </td>
                      <td className="py-3 px-2 text-center font-mono font-bold text-on-surface text-[15px]">
                        64.0
                      </td>
                      <td className="py-3 px-2 text-center">
                        <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-[11px] font-bold">
                          C4
                        </span>
                      </td>
                      <td className="py-3 px-2 text-center text-on-surface">
                        14th
                      </td>
                      <td
                        className="py-3 px-space-md text-on-surface truncate max-w-[190px]"
                        title="Satisfactory. Greater application needed in quadratic series."
                      >
                        Greater practice in series needed.
                      </td>
                      <td className="py-3 px-2 text-center">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container text-outline font-label-sm text-[10px] font-bold">
                          <span className="material-symbols-outlined text-[12px]">
                            edit_note
                          </span>{" "}
                          Review
                        </span>
                      </td>
                    </tr>
                    {/*  Student 6: Usman Kabir Mohammed  */}
                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="py-3 px-space-md">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-full bg-error-container text-on-error-container font-bold flex items-center justify-center text-label-md">
                            UM
                          </div>
                          <div>
                            <div className="font-label-md text-label-md font-semibold text-on-surface">
                              Usman Kabir Mohammed
                            </div>
                            <div className="font-body-sm text-[11px] text-on-surface-variant">
                              NIIS/2024/0166 • Male
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-2 text-center font-mono">5.0</td>
                      <td className="py-3 px-2 text-center font-mono">5.5</td>
                      <td className="py-3 px-2 text-center font-mono">9.5</td>
                      <td className="py-3 px-2 text-center font-mono font-semibold">
                        27.0
                      </td>
                      <td className="py-3 px-2 text-center font-mono font-bold text-tertiary text-[15px]">
                        47.0
                      </td>
                      <td className="py-3 px-2 text-center">
                        <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed/40 text-tertiary font-label-sm text-[11px] font-bold">
                          D7
                        </span>
                      </td>
                      <td className="py-3 px-2 text-center text-on-surface">
                        36th
                      </td>
                      <td
                        className="py-3 px-space-md text-on-surface truncate max-w-[190px]"
                        title="Borderline performance; targeted clinic scheduled for Term 2."
                      >
                        Targeted math clinic assigned.
                      </td>
                      <td className="py-3 px-2 text-center">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container/40 text-secondary font-label-sm text-[10px] font-bold">
                          <span className="material-symbols-outlined text-[12px]">
                            lock
                          </span>{" "}
                          Locked
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/*  Matrix Summary Footer  */}
              <div className="p-space-md bg-surface-container-low flex flex-wrap items-center justify-between gap-space-md">
                <div className="flex flex-wrap items-center gap-space-lg">
                  <div className="flex items-center gap-2">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                      Class Mean:
                    </span>
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      74.8%
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                      Highest Mark:
                    </span>
                    <span className="font-headline-sm text-headline-sm text-secondary font-bold">
                      96.0% (Biology)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                      Lowest Mark:
                    </span>
                    <span className="font-headline-sm text-headline-sm text-tertiary font-bold">
                      44.0%
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-colors text-label-sm font-label-sm font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">
                      file_upload
                    </span>{" "}
                    Import CSV Broad-sheet
                  </button>
                  <button className="px-3 py-1.5 rounded-lg bg-primary text-on-primary hover:bg-primary/90 transition-colors text-label-sm font-label-sm font-semibold flex items-center gap-1 shadow-sm">
                    <span className="material-symbols-outlined text-[16px]">
                      save
                    </span>{" "}
                    Lock Arm Grades
                  </button>
                </div>
              </div>
            </div>
            {/*  Kaduna MoE Grade Weighting Benchmark & Policy Matrix  */}
            <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col space-y-space-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-secondary">
                    verified
                  </span>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    Kaduna State Unified Secondary Grading Scale (WASSCE
                    Benchmarked)
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Gazette Ref: KD/MOE/SEC/2026
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 text-center">
                <div className="p-2.5 rounded-lg bg-secondary-container/30">
                  <div className="font-headline-sm text-headline-sm font-bold text-on-secondary-container">
                    A1
                  </div>
                  <div className="font-label-sm text-[11px] text-on-surface-variant">
                    75 - 100%
                  </div>
                  <div className="font-label-sm text-[10px] text-secondary font-semibold uppercase mt-0.5">
                    Excellent
                  </div>
                </div>
                <div className="p-2.5 rounded-lg bg-secondary-container/20">
                  <div className="font-headline-sm text-headline-sm font-bold text-on-secondary-container">
                    B2
                  </div>
                  <div className="font-label-sm text-[11px] text-on-surface-variant">
                    70 - 74%
                  </div>
                  <div className="font-label-sm text-[10px] text-secondary font-semibold uppercase mt-0.5">
                    Very Good
                  </div>
                </div>
                <div className="p-2.5 rounded-lg bg-surface-container-high">
                  <div className="font-headline-sm text-headline-sm font-bold text-primary">
                    B3
                  </div>
                  <div className="font-label-sm text-[11px] text-on-surface-variant">
                    65 - 69%
                  </div>
                  <div className="font-label-sm text-[10px] text-primary font-semibold uppercase mt-0.5">
                    Good
                  </div>
                </div>
                <div className="p-2.5 rounded-lg bg-surface-container">
                  <div className="font-headline-sm text-headline-sm font-bold text-on-surface">
                    C4
                  </div>
                  <div className="font-label-sm text-[11px] text-on-surface-variant">
                    60 - 64%
                  </div>
                  <div className="font-label-sm text-[10px] text-outline font-semibold uppercase mt-0.5">
                    Credit
                  </div>
                </div>
                <div className="p-2.5 rounded-lg bg-surface-container">
                  <div className="font-headline-sm text-headline-sm font-bold text-on-surface">
                    C5
                  </div>
                  <div className="font-label-sm text-[11px] text-on-surface-variant">
                    55 - 59%
                  </div>
                  <div className="font-label-sm text-[10px] text-outline font-semibold uppercase mt-0.5">
                    Credit
                  </div>
                </div>
                <div className="p-2.5 rounded-lg bg-surface-container">
                  <div className="font-headline-sm text-headline-sm font-bold text-on-surface">
                    C6
                  </div>
                  <div className="font-label-sm text-[11px] text-on-surface-variant">
                    50 - 54%
                  </div>
                  <div className="font-label-sm text-[10px] text-outline font-semibold uppercase mt-0.5">
                    Credit
                  </div>
                </div>
                <div className="p-2.5 rounded-lg bg-tertiary-fixed/30">
                  <div className="font-headline-sm text-headline-sm font-bold text-tertiary">
                    D7-E8
                  </div>
                  <div className="font-label-sm text-[11px] text-on-surface-variant">
                    40 - 49%
                  </div>
                  <div className="font-label-sm text-[10px] text-tertiary font-semibold uppercase mt-0.5">
                    Pass
                  </div>
                </div>
                <div className="p-2.5 rounded-lg bg-error-container/30">
                  <div className="font-headline-sm text-headline-sm font-bold text-error">
                    F9
                  </div>
                  <div className="font-label-sm text-[11px] text-on-surface-variant">
                    0 - 39%
                  </div>
                  <div className="font-label-sm text-[10px] text-error font-semibold uppercase mt-0.5">
                    Fail
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  Right Side Pane: Interactive Terminal Dossier Preview (Official Report Card)  */}
          <div className="lg:col-span-4 flex flex-col space-y-space-md">
            {/*  Dossier Container  */}
            <div className="rounded-xl bg-surface-container-lowest shadow-md overflow-hidden flex flex-col">
              {/*  Live Preview Indicator Header  */}
              <div className="px-space-md py-2.5 bg-primary text-on-primary flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-ping"></span>
                  <span className="font-label-md text-label-md font-semibold text-on-primary">
                    Official Terminal Dossier Preview
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-primary-container text-on-primary-container font-label-sm text-[10px] uppercase font-bold tracking-wider">
                  Verified Seal
                </span>
              </div>
              {/*  The Report Card Sheet Itself  */}
              <div className="p-space-lg flex flex-col space-y-space-md bg-surface-container-lowest">
                {/*  School Header & Crest Section  */}
                <div className="flex items-start justify-between pb-space-sm">
                  <div className="flex items-center gap-space-sm">
                    <img
                      alt="NIIS Crest"
                      className="w-12 h-12 object-contain"
                      data-alt="Official crest shield of Noorul Ilm International School Kaduna featuring open Quran book, radiant gold star, crescent and emerald ribbon on deep navy background."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgqLoIqcqz6uCbj208wBCcdBuRcgs7P6nOZA3BHSa8Gb9MbCe0iBLxY9YvRBJ4fCnHAGa5C-7fxY4CffXE70b8LeRLvX5ZsHZ0kzuIaxzCcs6rrfQTlPTCWhlPr-2OSWc5vksCwbGPRScWM4xuZ0gnTOUYICkkTpGqkyCOuZ9_fc6v3blJsd0ggb_fP0D27q6ejr99WAkfpHSUYoS4IA1G0-AiZtwxOBUvD_HeqPUb3OIhglBM1xNW_g"
                    />
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-headline-sm text-primary font-bold leading-tight">
                        NOORUL ILM INT'L
                      </span>
                      <span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold">
                        Kaduna • Excellence &amp; Virtue
                      </span>
                      <span className="font-body-sm text-[10px] text-secondary font-medium">
                        MoE Reg: KD/MOE/AC/2018/0942
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-[10px] font-bold">
                      1st Term Report
                    </span>
                    <div className="font-body-sm text-[11px] text-on-surface-variant mt-0.5">
                      2026/2027 Session
                    </div>
                  </div>
                </div>
                {/*  Student Profile Summary Tile  */}
                <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      alt="Student Photo"
                      className="w-11 h-11 rounded-lg object-cover shadow-sm"
                      data-alt="Portrait photo of high-achieving female Muslim student in immaculate navy school uniform hijab."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIcgFqsAH-FkiBcz_lkq-JZAm3LoqAZAMMyOrSmjph8MtGL_ZT6x00k_z8ZPEdiy7yQybD_-VpZtF1R-kjYlIUgbS7IQUnn014SpNgJmWeQR8egg39Am_zNL7ppD_HblG5ZHGzGUNsglaqUOj1zeMfVL7abnv4DdR58eFHwo6RP1FyrcFVsh5SKNRqvhTksjJbf252lNBH6IhZTTqwHmy9mJVEmPXSoCscDVxUU0PMZuv-DiKXux7jwA"
                    />
                    <div>
                      <div className="font-label-md text-label-md font-bold text-on-surface">
                        Aisha Mansur Danbaba
                      </div>
                      <div className="font-body-sm text-[11px] text-on-surface-variant">
                        NIIS/2024/0118 • SSS 2 Science A
                      </div>
                      <div className="font-body-sm text-[11px] text-secondary font-semibold">
                        Danfodiyo House (Green)
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-label-sm text-[10px] text-on-surface-variant uppercase font-semibold">
                      Position in Arm
                    </span>
                    <div className="font-headline-md text-headline-md font-bold text-primary">
                      1st / 42
                    </div>
                  </div>
                </div>
                {/*  Subject Performance Micro-table  */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant font-semibold uppercase px-1">
                    <span>Subject Curriculum</span>
                    <span>Total / Grade</span>
                  </div>
                  <div className="rounded-lg bg-surface-container-low overflow-hidden">
                    <div className="flex items-center justify-between px-3 py-1.5 hover:bg-surface-container transition-colors">
                      <span className="font-body-sm text-body-sm font-medium text-on-surface">
                        Further Mathematics
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-on-surface text-body-sm">
                          91%
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-[10px] font-bold">
                          A1
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between px-3 py-1.5 hover:bg-surface-container transition-colors">
                      <span className="font-body-sm text-body-sm font-medium text-on-surface">
                        General Mathematics
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-on-surface text-body-sm">
                          94%
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-[10px] font-bold">
                          A1
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between px-3 py-1.5 hover:bg-surface-container transition-colors">
                      <span className="font-body-sm text-body-sm font-medium text-on-surface">
                        English Language
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-on-surface text-body-sm">
                          88%
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-[10px] font-bold">
                          A1
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between px-3 py-1.5 hover:bg-surface-container transition-colors">
                      <span className="font-body-sm text-body-sm font-medium text-on-surface">
                        Physics
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-on-surface text-body-sm">
                          86%
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-[10px] font-bold">
                          B2
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between px-3 py-1.5 hover:bg-surface-container transition-colors">
                      <span className="font-body-sm text-body-sm font-medium text-on-surface">
                        Chemistry
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-on-surface text-body-sm">
                          84%
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-[10px] font-bold">
                          B2
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between px-3 py-1.5 hover:bg-surface-container transition-colors">
                      <span className="font-body-sm text-body-sm font-medium text-on-surface">
                        Biology
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-on-surface text-body-sm">
                          90%
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-[10px] font-bold">
                          A1
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between px-3 py-1.5 hover:bg-surface-container transition-colors">
                      <span className="font-body-sm text-body-sm font-medium text-on-surface">
                        Islamic Religious Studies
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-on-surface text-body-sm">
                          96%
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-[10px] font-bold">
                          A1
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  Psychomotor & Behavioral Assessment  */}
                <div className="p-space-sm rounded-lg bg-surface-container-low space-y-2">
                  <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface font-semibold">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[15px] text-secondary">
                        psychology
                      </span>
                      Affective &amp; Psychomotor Rating
                    </span>
                    <span className="text-secondary text-[11px] font-bold">
                      Attendance: 82 / 82 (100%)
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 font-body-sm text-[11px] text-on-surface-variant">
                    <div className="flex justify-between items-center">
                      <span>Punctuality:</span>
                      <span className="font-semibold text-primary">
                        5 / 5 ★★★★★
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Leadership:</span>
                      <span className="font-semibold text-primary">
                        5 / 5 ★★★★★
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Politeness &amp; Adab:</span>
                      <span className="font-semibold text-primary">
                        5 / 5 ★★★★★
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Neatness:</span>
                      <span className="font-semibold text-primary">
                        5 / 5 ★★★★★
                      </span>
                    </div>
                  </div>
                </div>
                {/*  Official Remarks Block  */}
                <div className="space-y-space-xs">
                  <div className="p-2.5 rounded-lg bg-surface-container-high/60 space-y-1">
                    <div className="font-label-sm text-[11px] text-primary font-bold flex items-center justify-between">
                      <span>Class Teacher's Remark</span>
                      <span className="text-on-surface-variant font-normal text-[10px]">
                        Uztaz Bashir S.
                      </span>
                    </div>
                    <p className="font-body-sm text-[11px] text-on-surface italic">
                      “An exceptionally diligent, brilliant and upright student
                      who demonstrates mastery in science and exemplary
                      conduct.”
                    </p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-surface-container-high/60 space-y-1">
                    <div className="font-label-sm text-[11px] text-primary font-bold flex items-center justify-between">
                      <span>Principal's Commendation</span>
                      <span className="px-1.5 py-0.5 rounded bg-tertiary-fixed text-tertiary font-bold text-[9px] uppercase">
                        Gold Endorsed
                      </span>
                    </div>
                    <p className="font-body-sm text-[11px] text-on-surface italic">
                      “Outstanding academic standard. Aisha sets the pace for
                      the Senior Secondary arm. Well commended.”
                    </p>
                    <div className="flex items-center justify-between pt-1">
                      <span className="font-label-sm text-[10px] text-on-surface-variant">
                        Dr. Aminu Bello (Super Admin / Principal)
                      </span>
                      <span className="material-symbols-outlined text-[18px] text-secondary">
                        approval
                      </span>
                    </div>
                  </div>
                </div>
                {/*  Direct Actions on Preview  */}
                <div className="pt-2 flex flex-col gap-2">
                  <button className="w-full py-2.5 px-space-md rounded-lg bg-primary text-on-primary hover:bg-primary/90 transition-colors font-label-md text-label-md font-semibold flex items-center justify-center gap-2 shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">
                      print
                    </span>
                    <span>Print Official Stamped Report Card (PDF)</span>
                  </button>
                  <button className="w-full py-2 px-space-md rounded-lg bg-surface-container text-on-surface hover:bg-surface-variant transition-colors font-label-sm text-label-sm flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-secondary">
                      send_to_mobile
                    </span>
                    <span>
                      Send Direct to Guardian Portal &amp; WhatsApp SMS
                    </span>
                  </button>
                </div>
              </div>
            </div>
            {/*  Quick Fast-Switcher Dossier Navigator  */}
            <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between">
              <button className="p-2 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">
                  chevron_left
                </span>
              </button>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Student <strong className="text-on-surface">1</strong> of{" "}
                <strong>42</strong> in Arm
              </span>
              <button className="p-2 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">
                  chevron_right
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
