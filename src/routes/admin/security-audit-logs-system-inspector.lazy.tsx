import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(
  "/admin/security-audit-logs-system-inspector",
)({
  component: SecurityAuditLogsSystemInspector,
});

function SecurityAuditLogsSystemInspector() {
  return (
    <main className="w-full pt-16 px-space-lg py-space-lg flex-1 bg-background">
      <div className="flex flex-col w-full space-y-space-lg">
        {/*  Top Breadcrumbs & Page Action Bar  */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
          <div className="space-y-1">
            <nav className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
              <span>System Administration</span>
              <span className="material-symbols-outlined text-[14px] text-outline">
                chevron_right
              </span>
              <span>Security &amp; Governance</span>
              <span className="material-symbols-outlined text-[14px] text-outline">
                chevron_right
              </span>
              <span className="text-primary font-semibold">
                Forensic Audit Logs &amp; Telemetry
              </span>
            </nav>
            <div className="flex flex-wrap items-baseline gap-x-space-md gap-y-1">
              <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                Security, Audit Logs &amp; System Inspector
              </h1>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                Telemetry Engine Active
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-4xl">
              Enterprise cryptographic audit trail, continuous session
              inspector, role privilege escalation logs, ISO 27001 / NDPR
              compliance monitoring, and automated threat defense.
            </p>
          </div>
          {/*  Quick Action Toolbar  */}
          <div className="flex flex-wrap items-center gap-space-xs shrink-0">
            <button
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md shadow-sm transition-colors"
              title="Export CSV for NDPR / External Auditors"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                download
              </span>
              <span>Export Log (.csv)</span>
            </button>
            <button
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md shadow-sm transition-colors"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                leak_remove
              </span>
              <span>Flush Stale Sessions</span>
            </button>
            <button
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md shadow-sm transition-colors"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">
                verified_user
              </span>
              <span>Run Diagnostic</span>
            </button>
            <button
              className="p-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-colors"
              title="Configure Security Baseline"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">
                tune
              </span>
            </button>
          </div>
        </div>
        {/*  KPI Metric Overview Cards (4 Grid)  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
          {/*  KPI 1: System Posture  */}
          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                  Security Posture
                </span>
                <div className="font-metric-lg text-metric-lg text-on-surface">
                  99.8%
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-secondary-fixed text-on-secondary-fixed">
                <span className="material-symbols-outlined text-[24px]">
                  shield
                </span>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-1.5 font-label-sm text-label-sm text-secondary font-semibold">
              <span className="material-symbols-outlined text-[16px]">
                check_circle
              </span>
              <span>Zero Breach Alerts • NDPR Compliant</span>
            </div>
            <div className="w-full bg-surface-container-high rounded-full h-1 mt-3">
              <div className="bg-secondary h-1 rounded-full w-[99.8%]"></div>
            </div>
          </div>
          {/*  KPI 2: Active Sessions  */}
          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                  Real-Time Sessions
                </span>
                <div className="font-metric-lg text-metric-lg text-primary">
                  54{" "}
                  <span className="font-headline-sm text-headline-sm text-on-surface-variant">
                    Active
                  </span>
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-surface-container-high text-primary">
                <span className="material-symbols-outlined text-[24px]">
                  group
                </span>
              </div>
            </div>
            <div className="mt-3 font-body-sm text-body-sm text-on-surface-variant truncate">
              <span className="font-semibold text-on-surface">42</span> Staff •{" "}
              <span className="font-semibold text-on-surface">8</span> Admins •{" "}
              <span className="font-semibold text-on-surface">4</span> Parents
            </div>
            <div className="w-full bg-surface-container-high rounded-full h-1 mt-3">
              <div className="bg-primary h-1 rounded-full w-[72%]"></div>
            </div>
          </div>
          {/*  KPI 3: Privileged State Transitions  */}
          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                  State Transitions
                </span>
                <div className="font-metric-lg text-metric-lg text-tertiary-container">
                  18{" "}
                  <span className="font-headline-sm text-headline-sm text-on-surface-variant">
                    Today
                  </span>
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed-variant">
                <span className="material-symbols-outlined text-[24px]">
                  key
                </span>
              </div>
            </div>
            <div className="mt-3 font-body-sm text-body-sm text-on-surface-variant truncate">
              Exam locks, fee adjustments &amp; RBAC changes
            </div>
            <div className="w-full bg-surface-container-high rounded-full h-1 mt-3">
              <div className="bg-tertiary-container h-1 rounded-full w-[45%]"></div>
            </div>
          </div>
          {/*  KPI 4: Failed Login / Geo Challenges  */}
          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                  IP Challenges
                </span>
                <div className="font-metric-lg text-metric-lg text-error">
                  3{" "}
                  <span className="font-headline-sm text-headline-sm text-on-surface-variant">
                    Blocked
                  </span>
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-error-container text-on-error-container">
                <span className="material-symbols-outlined text-[24px]">
                  gpp_bad
                </span>
              </div>
            </div>
            <div className="mt-3 font-body-sm text-body-sm text-on-surface-variant truncate">
              Foreign IPs throttled via Kaduna Geo-Fence
            </div>
            <div className="w-full bg-surface-container-high rounded-full h-1 mt-3">
              <div className="bg-error h-1 rounded-full w-[15%]"></div>
            </div>
          </div>
        </div>
        {/*  Main Administrative Content Columns  */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
          {/*  Left Column (7-col): Ledger & Dual-Signoff  */}
          <div className="lg:col-span-7 space-y-space-lg">
            {/*  Immutable Cryptographic Audit Trail Ledger Card  */}
            <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
              {/*  Ledger Header & Filter Controls  */}
              <div className="p-space-lg space-y-space-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[22px]">
                        history_edu
                      </span>
                      <h2 className="font-headline-md text-headline-md text-on-surface">
                        Immutable Cryptographic Audit Trail
                      </h2>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      SHA-256 chained transaction blocks for institutional
                      accountability
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface font-mono">
                      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                      CHAIN HEIGHT #41,209
                    </span>
                  </div>
                </div>
                {/*  Filter Ribbon  */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-xs">
                  <div className="relative">
                    <select className="w-full h-10 px-3 pr-8 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface appearance-none focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20">
                      <option value="all">Module: All Domains</option>
                      <option value="bursary">Bursary &amp; Payments</option>
                      <option value="exam">Examinations &amp; CA</option>
                      <option value="rbac">RBAC &amp; Permissions</option>
                      <option value="admissions">
                        Admissions &amp; Enrolment
                      </option>
                    </select>
                    <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-outline text-[18px] pointer-events-none">
                      expand_more
                    </span>
                  </div>
                  <div className="relative">
                    <select className="w-full h-10 px-3 pr-8 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface appearance-none focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20">
                      <option value="all">Severity: All Levels</option>
                      <option value="critical">
                        Critical (Privilege/Finance)
                      </option>
                      <option value="warning">Warning (Overrides)</option>
                      <option value="info">Informational</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-outline text-[18px] pointer-events-none">
                      expand_more
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      className="w-full h-10 pl-9 pr-3 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20"
                      placeholder="Filter SHA / Actor..."
                      type="text"
                    />
                    <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-outline text-[18px]">
                      search
                    </span>
                  </div>
                </div>
              </div>
              {/*  Ledger Table  */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider h-11">
                      <th className="px-space-md py-2 font-semibold">
                        Timestamp / Hash
                      </th>
                      <th className="px-space-md py-2 font-semibold">
                        Authorized Identity
                      </th>
                      <th className="px-space-md py-2 font-semibold">
                        Operation &amp; Scope
                      </th>
                      <th className="px-space-md py-2 font-semibold">
                        Client Terminal
                      </th>
                      <th className="px-space-md py-2 font-semibold text-right">
                        Integrity
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container-high font-body-sm text-body-sm">
                    {/*  Ledger Row 1  */}
                    <tr className="hover:bg-surface-container-low/50 transition-colors">
                      <td className="px-space-md py-3.5 align-top">
                        <div className="font-label-md text-label-md font-semibold text-on-surface">
                          11:24:15 AM
                        </div>
                        <div
                          className="font-mono text-outline text-[11px] truncate max-w-[120px]"
                          title="SHA-256 #8f2a9e04bc12d8445778841c01"
                        >
                          #8f2a...c01
                        </div>
                      </td>
                      <td className="px-space-md py-3.5 align-top">
                        <div className="font-label-md text-label-md font-semibold text-on-surface">
                          Mr. John Danladi
                        </div>
                        <div className="font-label-sm text-label-sm text-on-surface-variant">
                          Bursar Accountant
                        </div>
                      </td>
                      <td className="px-space-md py-3.5 align-top space-y-1">
                        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[11px] font-semibold">
                          <span className="material-symbols-outlined text-[14px]">
                            payments
                          </span>
                          <span>FEE_PAYMENT_VERIFIED</span>
                        </div>
                        <div className="text-on-surface text-body-sm font-medium">
                          Confirmed ₦185,000 for Farouk Umar Sadiq (JS 2-B)
                        </div>
                        <div className="text-outline text-[11px]">
                          Bank Ref: POL-KD-88129034 • Bursary Terminal 01
                        </div>
                      </td>
                      <td className="px-space-md py-3.5 align-top font-mono text-[12px] text-on-surface-variant">
                        <div>192.168.1.45</div>
                        <div className="text-outline text-[11px]">
                          Bursary LAN • Chrome
                        </div>
                      </td>
                      <td className="px-space-md py-3.5 align-top text-right">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-fixed text-secondary font-label-sm text-[11px] font-bold">
                          <span className="material-symbols-outlined text-[13px]">
                            lock
                          </span>
                          Signed ✓
                        </span>
                      </td>
                    </tr>
                    {/*  Ledger Row 2  */}
                    <tr className="hover:bg-surface-container-low/50 transition-colors">
                      <td className="px-space-md py-3.5 align-top">
                        <div className="font-label-md text-label-md font-semibold text-on-surface">
                          10:48:02 AM
                        </div>
                        <div
                          className="font-mono text-outline text-[11px] truncate max-w-[120px]"
                          title="SHA-256 #e41d87f54c9a2e618844321b99"
                        >
                          #e41d...b99
                        </div>
                      </td>
                      <td className="px-space-md py-3.5 align-top">
                        <div className="font-label-md text-label-md font-semibold text-on-surface">
                          Ustaz Bashir Lawal
                        </div>
                        <div className="font-label-sm text-label-sm text-on-surface-variant">
                          Chief Examination Officer
                        </div>
                      </td>
                      <td className="px-space-md py-3.5 align-top space-y-1">
                        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-label-sm text-[11px] font-semibold">
                          <span className="material-symbols-outlined text-[14px]">
                            lock_clock
                          </span>
                          <span>EXAM_MARKS_LOCK</span>
                        </div>
                        <div className="text-on-surface text-body-sm font-medium">
                          Submitted Term 1 Further Maths for SSS 2 (Gold Arm)
                        </div>
                        <div className="text-outline text-[11px]">
                          Cryptographic Seal: CA_TERMI_2026_MATH
                        </div>
                      </td>
                      <td className="px-space-md py-3.5 align-top font-mono text-[12px] text-on-surface-variant">
                        <div>192.168.2.14</div>
                        <div className="text-outline text-[11px]">
                          Exam HQ • Safari / macOS
                        </div>
                      </td>
                      <td className="px-space-md py-3.5 align-top text-right">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-fixed text-secondary font-label-sm text-[11px] font-bold">
                          <span className="material-symbols-outlined text-[13px]">
                            lock
                          </span>
                          Signed ✓
                        </span>
                      </td>
                    </tr>
                    {/*  Ledger Row 3  */}
                    <tr className="hover:bg-surface-container-low/50 transition-colors">
                      <td className="px-space-md py-3.5 align-top">
                        <div className="font-label-md text-label-md font-semibold text-on-surface">
                          09:15:30 AM
                        </div>
                        <div
                          className="font-mono text-outline text-[11px] truncate max-w-[120px]"
                          title="SHA-256 #a08ce230ffbb3410298a5433f2"
                        >
                          #a08c...3f2
                        </div>
                      </td>
                      <td className="px-space-md py-3.5 align-top">
                        <div className="font-label-md text-label-md font-semibold text-on-surface">
                          Dr. Aminu Bello
                        </div>
                        <div className="font-label-sm text-label-sm text-on-surface-variant">
                          Super Admin / Principal
                        </div>
                      </td>
                      <td className="px-space-md py-3.5 align-top space-y-1">
                        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-[11px] font-semibold">
                          <span className="material-symbols-outlined text-[14px]">
                            shield_person
                          </span>
                          <span>ROLE_PERMISSION_ELEVATED</span>
                        </div>
                        <div className="text-on-surface text-body-sm font-medium">
                          Granted 24h CA Edit Override to Mal. Zainab Aliyu
                        </div>
                        <div className="text-outline text-[11px]">
                          Reason: Medical Leave Assessment Correction (SSS 1)
                        </div>
                      </td>
                      <td className="px-space-md py-3.5 align-top font-mono text-[12px] text-on-surface-variant">
                        <div>192.168.1.10</div>
                        <div className="text-outline text-[11px]">
                          Principal Office • Biometric
                        </div>
                      </td>
                      <td className="px-space-md py-3.5 align-top text-right">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-fixed text-secondary font-label-sm text-[11px] font-bold">
                          <span className="material-symbols-outlined text-[13px]">
                            lock
                          </span>
                          Signed ✓
                        </span>
                      </td>
                    </tr>
                    {/*  Ledger Row 4  */}
                    <tr className="hover:bg-surface-container-low/50 transition-colors">
                      <td className="px-space-md py-3.5 align-top">
                        <div className="font-label-md text-label-md font-semibold text-on-surface">
                          08:30:12 AM
                        </div>
                        <div
                          className="font-mono text-outline text-[11px] truncate max-w-[120px]"
                          title="SHA-256 #77cb4301eed192410a88711112"
                        >
                          #77cb...112
                        </div>
                      </td>
                      <td className="px-space-md py-3.5 align-top">
                        <div className="font-label-md text-label-md font-semibold text-on-surface">
                          Malam Garba Usman
                        </div>
                        <div className="font-label-sm text-label-sm text-on-surface-variant">
                          Senior Class Master
                        </div>
                      </td>
                      <td className="px-space-md py-3.5 align-top space-y-1">
                        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-[11px] font-semibold">
                          <span className="material-symbols-outlined text-[14px]">
                            cloud_sync
                          </span>
                          <span>ATTENDANCE_BATCH_SUBMIT</span>
                        </div>
                        <div className="text-on-surface text-body-sm font-medium">
                          Kaduna MoE Sync Token Dispatched (382 Pupils)
                        </div>
                        <div className="text-outline text-[11px]">
                          Gateway: KD-MOE-EDU-API-2026-LIVE
                        </div>
                      </td>
                      <td className="px-space-md py-3.5 align-top font-mono text-[12px] text-on-surface-variant">
                        <div>192.168.3.102</div>
                        <div className="text-outline text-[11px]">
                          Staff Room • Firefox
                        </div>
                      </td>
                      <td className="px-space-md py-3.5 align-top text-right">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-fixed text-secondary font-label-sm text-[11px] font-bold">
                          <span className="material-symbols-outlined text-[13px]">
                            lock
                          </span>
                          Signed ✓
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/*  Ledger Footer Pagination  */}
              <div className="p-space-md bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm font-label-sm text-label-sm text-on-surface-variant">
                <span>
                  Showing 4 of 2,841 cryptographically verified operations today
                </span>
                <div className="flex items-center gap-1">
                  <button
                    className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface shadow-sm disabled:opacity-50"
                    disabled
                  >
                    Previous
                  </button>
                  <span className="px-2">Page 1 of 71</span>
                  <button className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface shadow-sm hover:bg-surface-container-high transition-colors">
                    Next
                  </button>
                </div>
              </div>
            </div>
            {/*  Administrative State Change Approvals & Dual-Signoff History Card  */}
            <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm space-y-space-md">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[22px]">
                      policy
                    </span>
                    <h2 className="font-headline-md text-headline-md text-on-surface">
                      Administrative Dual-Signoff Governance
                    </h2>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Two-party authorization mandate for high-impact financial
                    waivers, grade tampering protections, and credential
                    revocation.
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-fixed text-secondary font-label-sm text-label-sm font-semibold">
                  2FA Enforced
                </span>
              </div>
              <div className="space-y-3 pt-space-xs">
                {/*  Dual Signoff Item 1: Pending  */}
                <div className="p-space-md rounded-lg bg-surface-container-low space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-tertiary-container text-[20px]">
                        currency_exchange
                      </span>
                      <span className="font-label-lg text-label-lg text-on-surface">
                        Fee Refund Authorization: ₦45,000
                      </span>
                    </div>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-[11px] font-semibold w-fit">
                      1 of 2 Signatures Acquired
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Student: Zainab Ahmad (Primary 3-A) • Excess boarding fee
                    rebate requested by Alhaji Ahmad Dikko.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-1">
                    <div className="p-2.5 rounded bg-surface-container-lowest flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[18px]">
                          verified
                        </span>
                        <div>
                          <div className="font-label-sm text-label-sm text-on-surface font-semibold">
                            Mr. John Danladi
                          </div>
                          <div className="text-[10px] text-outline">
                            Bursar • Signed 09:40 AM
                          </div>
                        </div>
                      </div>
                      <span className="font-label-sm text-[11px] text-secondary font-semibold">
                        Approved
                      </span>
                    </div>
                    <div className="p-2.5 rounded bg-surface-container-lowest flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-outline text-[18px]">
                          pending
                        </span>
                        <div>
                          <div className="font-label-sm text-label-sm text-on-surface font-semibold">
                            Dr. Aminu Bello
                          </div>
                          <div className="text-[10px] text-outline">
                            Principal Counter-Sign
                          </div>
                        </div>
                      </div>
                      <button className="px-2 py-1 rounded bg-primary text-on-primary font-label-sm text-[11px] hover:bg-primary-container transition-colors">
                        Authorize Sign
                      </button>
                    </div>
                  </div>
                </div>
                {/*  Dual Signoff Item 2: Completed  */}
                <div className="p-space-md rounded-lg bg-surface-container-low space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        grading
                      </span>
                      <span className="font-label-lg text-label-lg text-on-surface">
                        Term CA Score Amendment: Physics (SSS 3-C)
                      </span>
                    </div>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[11px] font-semibold w-fit">
                      Fully Counter-Signed ✓
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Score revised from 18/30 to 26/30 following remark of
                    mid-term lab experiment paper #PH-891.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-1">
                    <div className="p-2.5 rounded bg-surface-container-lowest flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[18px]">
                          verified
                        </span>
                        <div>
                          <div className="font-label-sm text-label-sm text-on-surface font-semibold">
                            Mrs. Aisha Sani
                          </div>
                          <div className="text-[10px] text-outline">
                            Physics Subject Teacher
                          </div>
                        </div>
                      </div>
                      <span className="font-label-sm text-[11px] text-secondary font-semibold">
                        Signed
                      </span>
                    </div>
                    <div className="p-2.5 rounded bg-surface-container-lowest flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary text-[18px]">
                          verified
                        </span>
                        <div>
                          <div className="font-label-sm text-label-sm text-on-surface font-semibold">
                            Ustaz Bashir Lawal
                          </div>
                          <div className="text-[10px] text-outline">
                            Exam Officer Counter-Seal
                          </div>
                        </div>
                      </div>
                      <span className="font-label-sm text-[11px] text-secondary font-semibold">
                        Ratified
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  Right Column (5-col): Live Monitor, NDPR Compliance & Threats  */}
          <div className="lg:col-span-5 space-y-space-lg">
            {/*  Live Session Monitor & Endpoint Security Card  */}
            <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm space-y-space-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[22px]">
                    devices
                  </span>
                  <h2 className="font-headline-md text-headline-md text-on-surface">
                    Live Session Inspector
                  </h2>
                </div>
                <span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">
                  54 Active
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Real-time terminal telemetry monitoring IP bindings, inactivity
                timeouts, and hardware tokens across Kaduna campus nodes.
              </p>
              {/*  Session List  */}
              <div className="space-y-2.5">
                {/*  Session 1: Admin  */}
                <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between gap-space-sm hover:bg-surface-container transition-colors">
                  <div className="flex items-center gap-space-sm min-w-0">
                    <div className="relative shrink-0">
                      <img
                        className="w-9 h-9 rounded-full object-cover"
                        data-alt="Professional portrait photograph of an African male educational executive wearing a navy institutional blazer against a soft library backdrop in Kaduna"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxyH65t_b0ec1ETmfMadreL2ZATvydG34lj_7XByA2qOnMjUNyqQJDEfIl2N-U4Hep6aJ5tDDDI7l44ERpQzulD34nvAvsD76Dult81MpJ9lOZwAl4hU_VbwhCGd0mEd0R8Xq123mQoIuZyrbOrHuKR-cdI369hMBREp1M95PbrLzfLz1DUzWe2O5TiO14hmvFkXMlMNW38b395pVLRLJaWGqNEHuov1cCngsKVvNpV-SyMxPLTace9w"
                      />
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-secondary ring-2 ring-surface-container-low"></span>
                    </div>
                    <div className="min-w-0">
                      <div className="font-label-md text-label-md font-semibold text-on-surface truncate">
                        Dr. Aminu Bello
                      </div>
                      <div className="font-body-sm text-[11px] text-on-surface-variant truncate">
                        Admin Office Block • 192.168.1.10
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="font-label-sm text-[11px] text-secondary font-semibold">
                      Active now
                    </span>
                    <button
                      className="p-1 rounded text-outline hover:text-error hover:bg-surface-container-high transition-colors"
                      title="Force End Session"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        logout
                      </span>
                    </button>
                  </div>
                </div>
                {/*  Session 2: Teacher  */}
                <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between gap-space-sm hover:bg-surface-container transition-colors">
                  <div className="flex items-center gap-space-sm min-w-0">
                    <div className="relative shrink-0">
                      <img
                        className="w-9 h-9 rounded-full object-cover"
                        data-alt="Close up photograph of a Nigerian male high school teacher wearing a white collared shirt in a bright classroom setting"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgNOlQ5QidBi780YIy8xM1LMX-knk-uWCTypYq7nr-FlzR3GxPXWz0yTiEgS74zXg5kL79DjnBBWLpH5uXm7HuDdJnB9FDVDKOPiSe0_ODAUZS3bwTAgE_eecp_AHnnVFNT7oPwk4Rhjwv-yLNRJOhr2ptCqoz3zkZo0DDossBlYA5fd6SzFvS93Pdgotb14nnBZoxoEl17Zops3Je9VTykLCgaPFgwMCsWh6yLtqJTWsSmM1SYVTLbQ"
                      />
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-secondary ring-2 ring-surface-container-low"></span>
                    </div>
                    <div className="min-w-0">
                      <div className="font-label-md text-label-md font-semibold text-on-surface truncate">
                        Malam Garba Usman
                      </div>
                      <div className="font-body-sm text-[11px] text-on-surface-variant truncate">
                        Staff Room Terminal 3 • 192.168.3.102
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="font-label-sm text-[11px] text-outline">
                      Idle 12m
                    </span>
                    <button
                      className="p-1 rounded text-outline hover:text-error hover:bg-surface-container-high transition-colors"
                      title="Force End Session"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        logout
                      </span>
                    </button>
                  </div>
                </div>
                {/*  Session 3: Clinic Nurse  */}
                <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between gap-space-sm hover:bg-surface-container transition-colors">
                  <div className="flex items-center gap-space-sm min-w-0">
                    <div className="relative shrink-0">
                      <img
                        className="w-9 h-9 rounded-full object-cover"
                        data-alt="Portrait photograph of an African female healthcare worker wearing clean medical scrubs and a warm professional smile in an institutional clinic"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGSCEI1td01sAjNNVFSLqi6qumvYgJZJBV65TkcTDUK9nXbwwYEm7I6eUMwCSHqBb9Fzw95ZyaMJKFcW1HpgwjOIMVL-FSloEyzygOOgIVNufKbjNiFKJajejbxq5R504PM4Z3CvWM1bHajRkaq-c1m322ChxAn5iDrtmGg_nGnr_SkdNNhxayV2373SR2NH6J_cWm3sse8fZZhLjt18Ja3lVIhNuoiaueO8h3z4WkwOxQ5etVaMhvGQ"
                      />
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-secondary ring-2 ring-surface-container-low"></span>
                    </div>
                    <div className="min-w-0">
                      <div className="font-label-md text-label-md font-semibold text-on-surface truncate">
                        Nurse Maryam Kabir
                      </div>
                      <div className="font-body-sm text-[11px] text-on-surface-variant truncate">
                        School Clinic Workstation • 192.168.4.18
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="font-label-sm text-[11px] text-secondary font-semibold">
                      Active now
                    </span>
                    <button
                      className="p-1 rounded text-outline hover:text-error hover:bg-surface-container-high transition-colors"
                      title="Force End Session"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        logout
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <button
                className="w-full py-2 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg font-label-sm text-label-sm font-semibold transition-colors text-center"
                type="button"
              >
                View All 54 Active Terminals
              </button>
            </div>
            {/*  Kaduna Data Protection & NDPR Compliance Card  */}
            <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm space-y-space-md">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[22px]">
                      verified
                    </span>
                    <h2 className="font-headline-md text-headline-md text-on-surface">
                      NDPR &amp; ISO 27001 Posture
                    </h2>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Nigeria Data Protection Regulation compliance &amp;
                    statutory audit readiness.
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">
                  100% PASS
                </span>
              </div>
              <div className="space-y-3 pt-space-xs font-body-sm text-body-sm">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                    location_on
                  </span>
                  <div className="space-y-0.5">
                    <div className="font-label-sm text-label-sm font-semibold text-on-surface">
                      Sovereign Data Residency
                    </div>
                    <p className="text-on-surface-variant text-[12px]">
                      Primary data cluster located in Lagos Tier-IV data center
                      with encrypted offline replica in Kaduna Admin bunker. No
                      cross-border student PII transfers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                    enhanced_encryption
                  </span>
                  <div className="space-y-0.5">
                    <div className="font-label-sm text-label-sm font-semibold text-on-surface">
                      AES-256 Bit Field-Level Encryption
                    </div>
                    <p className="text-on-surface-variant text-[12px]">
                      Student clinical records, psychiatric observations, and
                      parental BVN/account tokens encrypted with
                      hardware-managed KMS keys.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low">
                  <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                    history_toggle_off
                  </span>
                  <div className="space-y-0.5">
                    <div className="font-label-sm text-label-sm font-semibold text-on-surface">
                      7-Year Retention &amp; Auto-Purge Protocol
                    </div>
                    <p className="text-on-surface-variant text-[12px]">
                      Complies with Kaduna State Ministry of Education statutory
                      record tenure before automated cryptographic erasure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*  Automated Security Incident Alerts  */}
            <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm space-y-space-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-error text-[22px]">
                    crisis_alert
                  </span>
                  <h2 className="font-headline-md text-headline-md text-on-surface">
                    Automated Threat Defense
                  </h2>
                </div>
                <span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold">
                  Auto-Shield ON
                </span>
              </div>
              <div className="space-y-2.5">
                <div className="p-3 rounded-lg bg-error-container/40 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm font-semibold text-error flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">
                        public_off
                      </span>
                      IP Geo-Fence Perimeter Block
                    </span>
                    <span className="font-label-sm text-[10px] text-on-surface-variant">
                      03:14 AM
                    </span>
                  </div>
                  <p className="font-body-sm text-[12px] text-on-surface">
                    Unauthorized access attempt targeting Bursary portal routed
                    through IP{" "}
                    <span className="font-mono text-[11px] font-semibold">
                      185.220.101.5
                    </span>{" "}
                    (Tor Exit Node / Romania). Blocked automatically by
                    perimeter firewall.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-surface-container-low space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm font-semibold text-tertiary-container flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">
                        lock_reset
                      </span>
                      Brute Force Throttle
                    </span>
                    <span className="font-label-sm text-[10px] text-on-surface-variant">
                      Yesterday 22:40
                    </span>
                  </div>
                  <p className="font-body-sm text-[12px] text-on-surface-variant">
                    Account lockout triggered for portal username{" "}
                    <span className="font-mono text-[11px]">
                      parent_danladi
                    </span>{" "}
                    after 5 unsuccessful password attempts. Account secured; SMS
                    unlock token sent.
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
