import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(
  "/admin/student-discipline-welfare-registry",
)({
  component: StudentDisciplineWelfareRegistry,
});

function StudentDisciplineWelfareRegistry() {
  return (
    <main className="w-full pt-16 px-space-lg py-space-lg flex-1 bg-surface">
      <div className="flex flex-col w-full space-y-space-lg">
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md pb-space-xs">
          <div className="space-y-1">
            <div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">
                verified_user
              </span>
              <span>
                Secure Registry • NDPR &amp; Kaduna Child Rights Compliant
              </span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              Student Discipline, Pastoral Care &amp; Welfare Registry
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
              Confidential behavioral tracking, Islamic pastoral counseling,
              positive reinforcement commendations, and restorative intervention
              logs.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-space-xs shrink-0">
            <button
              className="flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-colors shadow-sm"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px] text-primary">
                picture_as_pdf
              </span>
              <span>Confidential Export (.pdf)</span>
            </button>
            <button
              className="flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-colors shadow-sm"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px] text-tertiary-container">
                forum
              </span>
              <span>Pastoral Conference</span>
            </button>
            <button
              className="flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-tertiary-container hover:bg-tertiary text-on-tertiary font-label-md text-label-md transition-colors shadow-sm"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">
                military_tech
              </span>
              <span>+ Record Commendation</span>
            </button>
            <button
              className="flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-colors shadow-sm"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">
                report_problem
              </span>
              <span>+ Log Incident</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
          <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">
                  Merit Commendations
                </span>
                <span className="font-metric-lg text-metric-lg text-on-surface mt-1 block">
                  342
                </span>
              </div>
              <div className="w-10 h-10 rounded-lg bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed">
                <span className="material-symbols-outlined text-[22px]">
                  workspace_premium
                </span>
              </div>
            </div>
            <div className="mt-space-md pt-space-xs flex items-center justify-between">
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Academic excellence • Tarbiyyah leadership
              </span>
              <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-semibold">
                +18% term
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-tertiary-fixed-dim via-on-tertiary-container to-tertiary-container"></div>
          </div>
          <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">
                  Active Incidents
                </span>
                <span className="font-metric-lg text-metric-lg text-primary mt-1 block">
                  8{" "}
                  <span className="font-body-sm text-body-sm font-normal text-on-surface-variant">
                    Cases
                  </span>
                </span>
              </div>
              <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[22px]">
                  pending_actions
                </span>
              </div>
            </div>
            <div className="mt-space-md pt-space-xs flex items-center justify-between">
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                6 Minor • 2 Moderate • 0 Major
              </span>
              <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-semibold">
                Under Review
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary"></div>
          </div>
          <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">
                  Pastoral Sessions
                </span>
                <span className="font-metric-lg text-metric-lg text-secondary mt-1 block">
                  24
                </span>
              </div>
              <div className="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center text-on-secondary-container">
                <span className="material-symbols-outlined text-[22px]">
                  volunteer_activism
                </span>
              </div>
            </div>
            <div className="mt-space-md pt-space-xs flex items-center justify-between">
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Conducted with Counselor &amp; Ustaz
              </span>
              <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-semibold">
                100% Care Logged
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary"></div>
          </div>
          <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">
                  Behavioral Index
                </span>
                <span className="font-metric-lg text-metric-lg text-on-surface mt-1 block">
                  98.2%
                </span>
              </div>
              <div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
                <span className="material-symbols-outlined text-[22px]">
                  health_and_safety
                </span>
              </div>
            </div>
            <div className="mt-space-md pt-space-xs flex items-center justify-between">
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Kaduna MoE Benchmark: &gt;95.0%
              </span>
              <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-semibold">
                Exemplary
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary-container"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
          <div className="lg:col-span-8 flex flex-col space-y-space-lg">
            <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-sm border-b border-surface-container">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[20px] text-primary">
                    policy
                  </span>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">
                    Incident &amp; Restorative Case Ledger
                  </h2>
                  <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm">
                    Active Term
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-outline text-[16px]">
                      filter_alt
                    </span>
                    <select className="pl-8 pr-7 py-1.5 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest">
                      <option>All Severities</option>
                      <option>Level 1 (Minor)</option>
                      <option>Level 2 (Moderate)</option>
                      <option>Level 3 (Major)</option>
                    </select>
                  </div>
                  <select className="px-3 py-1.5 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest">
                    <option>All Arms (JSS 1 - SSS 3)</option>
                    <option>JSS Senior Arm</option>
                    <option>SSS Senior Arm</option>
                  </select>
                </div>
              </div>
              <div className="overflow-x-auto mt-space-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                      <th className="py-3 px-space-sm">Incident Details</th>
                      <th className="py-3 px-space-sm">Scholar Identity</th>
                      <th className="py-3 px-space-sm">
                        Infraction &amp; Severity
                      </th>
                      <th className="py-3 px-space-sm">Reporting Faculty</th>
                      <th className="py-3 px-space-sm">Restorative Action</th>
                      <th className="py-3 px-space-sm text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container text-body-sm font-body-sm">
                    <tr className="hover:bg-surface-container-low/60 transition-colors">
                      <td className="py-3.5 px-space-sm whitespace-nowrap">
                        <div className="font-label-sm text-label-sm text-on-surface font-semibold">
                          16 Oct 2026
                        </div>
                        <div className="text-[11px] text-on-surface-variant">
                          08:15 AM • Lab 2
                        </div>
                      </td>
                      <td className="py-3.5 px-space-sm">
                        <div className="flex items-center gap-space-xs">
                          <img
                            className="w-9 h-9 rounded-full object-cover shrink-0"
                            data-alt="Portrait of a young northern Nigerian male secondary school student in school uniform with a thoughtful expression, warm studio lighting"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0oSC6Is5XurHVgZwvfAhNr190t5XMX2veW85N5wSDE83XJyC1iCQrToxpg8T6mmf2wXNeKlPPQ8ZwUoWoCEbO8IvTRxoPWn0VA30Srw1V-Hyb7bMIPW72LQfGCHTYxNs3O7mrwLGgFAFeDxI0B2B6fs3erA-R6q4QxdP6_dRaFLQoV7zGqJHEa4xcwqQG8o_ATelQUiI1h3IGaDohNm1Z-vc0AbfghLA3R82roRJH3qEeDqh6HQjf1g"
                          />
                          <div className="min-w-0">
                            <div className="font-label-sm text-label-sm font-semibold text-on-surface truncate">
                              Farouk Umar Sadiq
                            </div>
                            <div className="text-[11px] text-outline truncate">
                              NIIS/2023/0488 • SSS 2 Science A
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-space-sm">
                        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-[10px] font-semibold mb-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>{" "}
                          Level 1 Minor
                        </div>
                        <div className="text-on-surface font-medium truncate max-w-[180px]">
                          Lab Tardiness (15 mins)
                        </div>
                      </td>
                      <td className="py-3.5 px-space-sm whitespace-nowrap">
                        <div className="font-label-sm text-label-sm text-on-surface">
                          Malam Garba Usman
                        </div>
                        <div className="text-[11px] text-outline">
                          Physics Master
                        </div>
                      </td>
                      <td className="py-3.5 px-space-sm">
                        <span className="text-on-surface-variant text-[12px] block">
                          Pledged punctuality • Parent SMS
                        </span>
                      </td>
                      <td className="py-3.5 px-space-sm text-right whitespace-nowrap">
                        <span className="px-2 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[11px] font-semibold">
                          Resolved
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-low/60 transition-colors">
                      <td className="py-3.5 px-space-sm whitespace-nowrap">
                        <div className="font-label-sm text-label-sm text-on-surface font-semibold">
                          15 Oct 2026
                        </div>
                        <div className="text-[11px] text-on-surface-variant">
                          01:40 PM • Dining Hall
                        </div>
                      </td>
                      <td className="py-3.5 px-space-sm">
                        <div className="flex items-center gap-space-xs">
                          <img
                            className="w-9 h-9 rounded-full object-cover shrink-0"
                            data-alt="Portrait of a teenage female Nigerian high school student wearing a pristine navy blue school hijab smiling gently against an institutional background"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmacdvaili2sQP0YPqM1xNuwwkVJqMLYRGMGFBfC05wGI_2SNSEd3iBn8xuCXZPPnDjLIBfrShgSd4PgR-mLzN2HYkAK9fB4fRSgZVQUOszMp30GM9BF_hF02Ka8zh3QRvFSosGMd03C25stFBTINmn37VPB-OR0e-MrVaI5DXoL-5X2Qk-bYnaDLLMLSGtoGJt_xy_9_q7nUWNbdJd62_T3ZdW8zsfztLrkGF_UNkY1hxAGmzbw2qGQ"
                          />
                          <div className="min-w-0">
                            <div className="font-label-sm text-label-sm font-semibold text-on-surface truncate">
                              Zainab Al-Hassan
                            </div>
                            <div className="text-[11px] text-outline truncate">
                              NIIS/2024/0912 • JSS 3 B
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-space-sm">
                        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-[10px] font-semibold mb-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span>{" "}
                          Level 2 Moderate
                        </div>
                        <div className="text-on-surface font-medium truncate max-w-[180px]">
                          Disruptive Dining Hall Queuing
                        </div>
                      </td>
                      <td className="py-3.5 px-space-sm whitespace-nowrap">
                        <div className="font-label-sm text-label-sm text-on-surface">
                          Mrs. Blessing Okafor
                        </div>
                        <div className="text-[11px] text-outline">
                          Matron / Food Supervisor
                        </div>
                      </td>
                      <td className="py-3.5 px-space-sm">
                        <span className="text-on-surface-variant text-[12px] block">
                          3-day Dining Peer Assist duties
                        </span>
                      </td>
                      <td className="py-3.5 px-space-sm text-right whitespace-nowrap">
                        <span className="px-2 py-1 rounded-full bg-surface-container-high text-primary font-label-sm text-[11px] font-semibold">
                          In Progress
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-low/60 transition-colors">
                      <td className="py-3.5 px-space-sm whitespace-nowrap">
                        <div className="font-label-sm text-label-sm text-on-surface font-semibold">
                          12 Oct 2026
                        </div>
                        <div className="text-[11px] text-on-surface-variant">
                          11:00 AM • Quadrangle
                        </div>
                      </td>
                      <td className="py-3.5 px-space-sm">
                        <div className="flex items-center gap-space-xs">
                          <img
                            className="w-9 h-9 rounded-full object-cover shrink-0"
                            data-alt="Portrait of an intelligent Nigerian boy student in school uniform with a focused expression inside a sunny school hall"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF1EzI_ZeRwtOeVMZhDe5p-w_hwE5n62HCt68_CN7ZIR9QNUA8JUXayDG4onbkQwGr6WyUQF-vJex35rKgq7GxnH587UyWaeiArR1Z0JoRHoCitCBHXfqcrZ2HaBxBUxKS-TtGBbejpegp7wU87HQzYcUbV5pvwQ0UWd7bltM-o3K3fFWmaE1G_uLYaOIzVJBgNv1_N9hdtUZ70pH50JHtvhFJPzSLmQV3ao2NB_jBDyxmp0USET4Pcw"
                          />
                          <div className="min-w-0">
                            <div className="font-label-sm text-label-sm font-semibold text-on-surface truncate">
                              Abdullahi Mustapha
                            </div>
                            <div className="text-[11px] text-outline truncate">
                              NIIS/2022/0115 • SSS 3 Arts
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-space-sm">
                        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-[10px] font-semibold mb-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>{" "}
                          Level 1 Minor
                        </div>
                        <div className="text-on-surface font-medium truncate max-w-[180px]">
                          Incorrect Footwear (Non-reg)
                        </div>
                      </td>
                      <td className="py-3.5 px-space-sm whitespace-nowrap">
                        <div className="font-label-sm text-label-sm text-on-surface">
                          Ustaz Nura Kabir
                        </div>
                        <div className="text-[11px] text-outline">
                          Dean of Discipline
                        </div>
                      </td>
                      <td className="py-3.5 px-space-sm">
                        <span className="text-on-surface-variant text-[12px] block">
                          Verbal counseling; Correct uniform restored
                        </span>
                      </td>
                      <td className="py-3.5 px-space-sm text-right whitespace-nowrap">
                        <span className="px-2 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[11px] font-semibold">
                          Completed
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-low/60 transition-colors">
                      <td className="py-3.5 px-space-sm whitespace-nowrap">
                        <div className="font-label-sm text-label-sm text-on-surface font-semibold">
                          09 Oct 2026
                        </div>
                        <div className="text-[11px] text-on-surface-variant">
                          02:30 PM • Sports Pavilion
                        </div>
                      </td>
                      <td className="py-3.5 px-space-sm">
                        <div className="flex items-center gap-space-xs">
                          <img
                            className="w-9 h-9 rounded-full object-cover shrink-0"
                            data-alt="Portrait of an energetic young Nigerian boy student wearing athletic uniform in an outdoor sports ground background"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuApXDqcGVlIOLwY9Koa8NdvcgPFNxvVG4qJrlmk7zNwgBk1yvxvySixIeIzOtW4khIzBufwM9PxsRMM2Veg_Xeiy363eeqaNBloA6_IoGcoozmUb-gwjyTH6i0zR66u7zWou8IE1FcJdaQpVDP_JWjQel8fgZdA08m_ZYoQ9fqlSeMImWhbE_8njFE2svG_WQPEr5saV6kDWogxJG_UGtMdH_3CFAlkYxlyZypQr4A1aAaEcmF4f_38bQ"
                          />
                          <div className="min-w-0">
                            <div className="font-label-sm text-label-sm font-semibold text-on-surface truncate">
                              Ibrahim Danjuma
                            </div>
                            <div className="text-[11px] text-outline truncate">
                              NIIS/2023/0744 • SSS 1 Commercial
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-space-sm">
                        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-[10px] font-semibold mb-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container"></span>{" "}
                          Level 2 Moderate
                        </div>
                        <div className="text-on-surface font-medium truncate max-w-[180px]">
                          Unsportsmanlike Conduct
                        </div>
                      </td>
                      <td className="py-3.5 px-space-sm whitespace-nowrap">
                        <div className="font-label-sm text-label-sm text-on-surface">
                          Coach Emmanuel Dan
                        </div>
                        <div className="text-[11px] text-outline">
                          PHE Master
                        </div>
                      </td>
                      <td className="py-3.5 px-space-sm">
                        <span className="text-on-surface-variant text-[12px] block">
                          Apology to team captain &amp; field equipment care
                        </span>
                      </td>
                      <td className="py-3.5 px-space-sm text-right whitespace-nowrap">
                        <span className="px-2 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[11px] font-semibold">
                          Restored
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex items-center justify-between pt-space-sm mt-space-sm border-t border-surface-container font-label-sm text-label-sm text-on-surface-variant">
                <span>Showing 4 of 8 Active Incidents</span>
                <div className="flex items-center gap-1">
                  <button
                    className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-variant text-on-surface"
                    type="button"
                  >
                    Previous
                  </button>
                  <button
                    className="px-2.5 py-1 rounded bg-primary text-on-primary"
                    type="button"
                  >
                    1
                  </button>
                  <button
                    className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-variant text-on-surface"
                    type="button"
                  >
                    2
                  </button>
                  <button
                    className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-variant text-on-surface"
                    type="button"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
              <div className="flex items-center justify-between pb-space-sm border-b border-surface-container">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[20px] text-tertiary-container">
                    stars
                  </span>
                  <div>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">
                      Positive Character &amp; Islamic Moral Commendation Board
                    </h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Rewarding exemplary Tarbiyyah, Amanah (integrity), peer
                      mentorship, and community service
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-semibold">
                  +50 House Points Pool
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md mt-space-md">
                <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between">
                  <div className="flex items-start gap-space-sm">
                    <img
                      className="w-12 h-12 rounded-xl object-cover shrink-0"
                      data-alt="Confident female Nigerian student in dark navy hijab smiling proudly inside an Islamic secondary school library"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsRAKa9gDcQKYEkcFhABKejjuIOjYbFu5idWwmkC-jZjor74ZczYx0rESE427odvkhwSyF4yTfV1R2O1wYglf8IWedLDGqJYG2PJHAWpDsT1_pPKYZHTI6SNddkWtXMm1OJWlVjYbIWpZuipmraUT1p62OO0Jqz8KwiRXkiOL1j9LzYR__EAXPCdlKALtV7CBArZ1Ma1dYjk1gVeYhlhBW7810O_ON2fjYkkpmLTMg8AavvZVCi5_Z_A"
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-1">
                        <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[10px] font-bold">
                          Amanah Award
                        </span>
                        <span className="text-[11px] text-on-surface-variant">
                          • 14 Oct
                        </span>
                      </div>
                      <h3 className="font-label-lg text-label-lg text-on-surface font-semibold mt-0.5 truncate">
                        Amina Bello Sanusi
                      </h3>
                      <p className="font-body-sm text-[11px] text-outline">
                        JSS 2 Gold • Danfodio House
                      </p>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-3">
                    Found an unlabelled cash envelope containing ₦15,000 near
                    the ICT Suite and promptly surrendered it to the Bursar's
                    security desk.
                  </p>
                  <div className="mt-space-md pt-space-xs border-t border-surface-container flex items-center justify-between text-label-sm font-label-sm">
                    <span className="text-tertiary-container font-semibold">
                      +15 House Points Credited
                    </span>
                    <span className="text-on-surface-variant">
                      Witnessed by Mallam Idris
                    </span>
                  </div>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between">
                  <div className="flex items-start gap-space-sm">
                    <img
                      className="w-12 h-12 rounded-xl object-cover shrink-0"
                      data-alt="Portrait of a young northern Nigerian male secondary scholar with spectacles holding a textbook inside a clean modern classroom"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6ZmPrAicOXC5UIL65U8h-oUWd-E3UEWwsmNubKVGbUmsdQJXVk8d1P0Lyy0PhbK3xuDwsB6zhJOO-fiPS3IgVa1BAv5ukvvBi4zX19cdXVEZGUDH9eWeiNMcmFWSzdjTtI560W8aeo3HWPaO_vM-0rYani3LXrjD1X8bMok6R8x-GXPOLcUdFIl9ltO4qxTFTAOlElA8CwrGC-0ymNIQVw_otICeEx83BSWQXcgF2z2qMtA51VBHPIw"
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-1">
                        <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-[10px] font-bold">
                          Peer Mentorship
                        </span>
                        <span className="text-[11px] text-on-surface-variant">
                          • 11 Oct
                        </span>
                      </div>
                      <h3 className="font-label-lg text-label-lg text-on-surface font-semibold mt-0.5 truncate">
                        Muhammad Kabir Zaria
                      </h3>
                      <p className="font-body-sm text-[11px] text-outline">
                        SSS 3 Science • Sultan Bello House
                      </p>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-3">
                    Organized daily voluntary remedial classes in Further
                    Mathematics and Physics for struggling JSS 3 scholars
                    preparing for BECE entrance.
                  </p>
                  <div className="mt-space-md pt-space-xs border-t border-surface-container flex items-center justify-between text-label-sm font-label-sm">
                    <span className="text-tertiary-container font-semibold">
                      +20 House Points Credited
                    </span>
                    <span className="text-on-surface-variant">
                      Recommended by VP Academics
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-space-md p-space-sm rounded-lg bg-surface-container flex flex-wrap items-center justify-between gap-space-sm">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[18px] text-secondary">
                    emoji_events
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                    Current Term House Tarbiyyah Standings:
                  </span>
                </div>
                <div className="flex items-center gap-space-md text-label-sm font-label-sm">
                  <span className="text-primary font-bold">
                    1. Danfodio (184 pts)
                  </span>
                  <span className="text-on-surface font-medium">
                    2. Sultan Bello (162 pts)
                  </span>
                  <span className="text-on-surface font-medium">
                    3. Queen Amina (149 pts)
                  </span>
                  <span className="text-on-surface font-medium">
                    4. El-Kanemi (131 pts)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col space-y-space-lg">
            <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
              <div className="flex items-center justify-between pb-space-sm border-b border-surface-container">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[20px] text-primary">
                    folder_shared
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Confidential Case File
                  </h3>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[11px] font-semibold">
                  Case #DIS-2026-089
                </span>
              </div>
              <div className="pt-space-md space-y-space-md">
                <div className="flex items-center gap-space-sm p-space-sm rounded-lg bg-surface-container-low">
                  <img
                    className="w-12 h-12 rounded-full object-cover shrink-0"
                    data-alt="Portrait of northern Nigerian male student Farouk Umar Sadiq in neat white and navy school attire"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAY4qAsZu7jc3Sgm3a7YNXmONnJha5CSpFzQARrfMeJ3kJoe9-uTfD2vuX-LMP-RRjMIbW3Kh62ULLyHebmXelZrbGVP_Fbu9Wj76jezkYioOqOaBnmAye_dNOz4IVTLOq2JnEVB0ZBAvxTe-8HKdPu99uopVkcKZBXXCjyAHn4oLIuH_ZPhykFXaR2C6jqUMzZOV_d3LHiFivXSsXoNZLEuWHKTvrXC5Tq9L35Ji85WaD75KxxCNTbCg"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-label-lg text-label-lg text-on-surface font-semibold truncate">
                      Farouk Umar Sadiq
                    </h4>
                    <p className="font-body-sm text-[12px] text-on-surface-variant truncate">
                      SSS 2 Science A • Matric: NIIS/2023/0488
                    </p>
                    <div className="flex items-center gap-1.5 mt-1 text-[11px] text-outline">
                      <span className="material-symbols-outlined text-[14px]">
                        home_pin
                      </span>
                      <span className="truncate">
                        Barnawa Residential Area, Kaduna
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block">
                    Incident Brief
                  </span>
                  <div className="p-space-sm rounded-lg bg-surface-container-low text-body-sm font-body-sm text-on-surface space-y-1">
                    <div className="font-semibold text-primary">
                      Repeated Unexcused Laboratory Tardiness (15 mins late)
                    </div>
                    <p className="text-on-surface-variant text-[12px] leading-relaxed">
                      Student arrived 15 minutes past 08:00 AM for the Practical
                      Chemistry class on 3 consecutive Mondays, interrupting
                      experiment setup instructions.
                    </p>
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block">
                    Investigation &amp; Scholar's Explanation
                  </span>
                  <p className="text-body-sm font-body-sm text-on-surface-variant bg-surface-container-low p-space-sm rounded-lg leading-relaxed">
                    Student cited morning family support duties and severe
                    recurring traffic bottlenecks along the Barnawa-Stadium
                    bridge route during early peak hours.
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block">
                    Pastoral Care Plan &amp; Resolution
                  </span>
                  <div className="p-space-sm rounded-lg bg-secondary-container/30 border border-secondary-container text-body-sm font-body-sm space-y-2">
                    <div className="flex items-center gap-1.5 text-secondary font-label-sm text-label-sm font-semibold">
                      <span className="material-symbols-outlined text-[16px]">
                        verified
                      </span>
                      <span>
                        Intervention: Ustaz Bashir Lawal &amp; Counselor
                      </span>
                    </div>
                    <ul className="text-[12px] text-on-surface-variant space-y-1 list-disc pl-4">
                      <li>
                        Adjusted departure timetable arranged with family via
                        phone conference.
                      </li>
                      <li>
                        Student signed a formal restorative punctuality pledge.
                      </li>
                      <li>
                        Automated parent arrival SMS triggered upon biometric
                        gate check-in.
                      </li>
                    </ul>
                    <div className="pt-1 flex items-center justify-between text-[11px]">
                      <span className="font-semibold text-on-secondary-container">
                        Outcome: Resolved with Written Pledge
                      </span>
                      <span className="text-outline">Signed 16 Oct</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 pt-space-xs">
                  <button
                    className="flex-1 py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-colors text-center"
                    type="button"
                  >
                    Full Case History
                  </button>
                  <button
                    className="px-3 py-2 rounded-lg bg-surface-container hover:bg-surface-variant text-on-surface transition-colors"
                    title="Print File"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      print
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
              <div className="flex items-start gap-space-sm">
                <div className="w-9 h-9 rounded-lg bg-primary-fixed flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[20px]">
                    gavel
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Restorative Justice &amp; Child Protection
                  </h3>
                  <p className="font-body-sm text-[12px] text-on-surface-variant mt-0.5">
                    Kaduna State Child Rights Law Compliance
                  </p>
                </div>
              </div>
              <div className="mt-space-md space-y-2.5 font-body-sm text-[12px] text-on-surface-variant">
                <div className="flex items-start gap-2 p-2 rounded bg-surface-container-low">
                  <span className="material-symbols-outlined text-[18px] text-error shrink-0">
                    block
                  </span>
                  <div>
                    <span className="font-semibold text-on-surface block">
                      Zero Tolerance for Corporal Punishment
                    </span>
                    Physical chastisement is strictly banned across all academic
                    and boarding arms by state mandate.
                  </div>
                </div>
                <div className="flex items-start gap-2 p-2 rounded bg-surface-container-low">
                  <span className="material-symbols-outlined text-[18px] text-secondary shrink-0">
                    handshake
                  </span>
                  <div>
                    <span className="font-semibold text-on-surface block">
                      Constructive Tarbiyyah Interventions
                    </span>
                    Sanctions focus on reflective dialogue, school service,
                    community accountability, and moral elevation.
                  </div>
                </div>
                <div className="flex items-start gap-2 p-2 rounded bg-surface-container-low">
                  <span className="material-symbols-outlined text-[18px] text-primary shrink-0">
                    lock
                  </span>
                  <div>
                    <span className="font-semibold text-on-surface block">
                      Confidentiality Protocol
                    </span>
                    Registry logs are encrypted under NDPR regulations;
                    accessible solely to the Principal, Counselor, and
                    Disciplinary Committee.
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
              <div className="flex items-center justify-between pb-space-sm border-b border-surface-container">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[20px] text-tertiary-container">
                    event
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Disciplinary Committee Schedule
                  </h3>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Monthly
                </span>
              </div>
              <div className="mt-space-md space-y-3">
                <div className="p-space-sm rounded-lg bg-surface-container-low">
                  <div className="flex items-center justify-between text-label-sm font-label-sm">
                    <span className="text-primary font-semibold">
                      Term 1 Pastoral Review Board
                    </span>
                    <span className="text-tertiary-container font-bold">
                      Wed, 22 Oct 2026
                    </span>
                  </div>
                  <div className="text-[12px] text-on-surface-variant mt-1">
                    Time: 03:00 PM • Senate Conference Room &amp; Virtual
                  </div>
                  <div className="text-[12px] text-outline mt-0.5">
                    Chair: Dr. Aminu Bello (Principal) • Attendees: House
                    Masters, Head Counselor, Ustaz Kabir
                  </div>
                </div>
                <div className="p-space-sm rounded-lg bg-surface-container-low">
                  <div className="flex items-center justify-between text-label-sm font-label-sm">
                    <span className="text-primary font-semibold">
                      Prefect Character &amp; Ethics Workshop
                    </span>
                    <span className="text-on-surface-variant">
                      Sat, 25 Oct 2026
                    </span>
                  </div>
                  <div className="text-[12px] text-on-surface-variant mt-1">
                    Time: 10:00 AM • School Auditorium
                  </div>
                </div>
              </div>
              <button
                className="w-full mt-space-md py-2 rounded-lg bg-surface-container hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-colors flex items-center justify-center gap-1.5"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">
                  add_circle
                </span>
                <span>Submit Agenda Item</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
