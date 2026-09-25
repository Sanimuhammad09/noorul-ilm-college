import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(
  "/admin/facilities-visitor-gatehouse-management",
)({
  component: FacilitiesVisitorGatehouseManagement,
});

function FacilitiesVisitorGatehouseManagement() {
  return (
    <main className="w-full pt-16 px-space-lg py-space-lg flex-1 bg-surface">
      <div className="flex flex-col w-full space-y-space-lg">
        {/*  TOP CONTEXTUAL BANNER / HEADER  */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
          <div className="flex flex-col space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm font-semibold uppercase tracking-wider">
                Perimeter &amp; Plant Ops
              </span>
              <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                Gate Alpha (Main) &amp; Beta Online
              </span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              Facilities, Maintenance &amp; Gatehouse Security
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
              Physical plant management, classroom infrastructure maintenance,
              digital visitor gate passes, and campus perimeter security for
              Noorul Ilm International School Kaduna.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-space-sm shrink-0">
            <button
              className="inline-flex items-center gap-1.5 px-space-md py-2.5 bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-primary-container transition-all shadow-sm"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">
                badge
              </span>
              <span>+ Check-In Visitor</span>
            </button>
            <button
              className="inline-flex items-center gap-1.5 px-space-md py-2.5 bg-surface-container-high text-on-surface rounded-lg font-label-md text-label-md hover:bg-surface-variant transition-all"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px] text-primary">
                build_circle
              </span>
              <span>+ Maintenance Ticket</span>
            </button>
            <button
              className="inline-flex items-center gap-1.5 px-space-sm py-2.5 bg-surface-container-low text-on-surface-variant rounded-lg font-label-md text-label-md hover:text-on-surface hover:bg-surface-container-high transition-all"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">
                download
              </span>
              <span>Gate Log (.csv)</span>
            </button>
            <button
              className="p-2.5 bg-surface-container-low text-on-surface-variant rounded-lg hover:text-on-surface hover:bg-surface-container-high transition-all"
              title="Campus Asset Audit"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">
                inventory_2
              </span>
            </button>
          </div>
        </div>
        {/*  TOP KPI SUMMARY CARDS (4 CARDS)  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
          {/*  KPI 1  */}
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group">
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                  Active Campus Visitors
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-metric-lg text-metric-lg text-primary tracking-tight">
                    14
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary font-semibold">
                    On-Premises
                  </span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-primary-fixed/40 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[22px]">
                  person_pin_circle
                </span>
              </div>
            </div>
            <div className="mt-4 pt-3 flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm bg-surface-container-low/60 -mx-space-lg -mb-space-lg px-space-lg py-2">
              <span className="truncate">
                8 Parents • 4 MoE • 2 Contractors
              </span>
              <span className="text-secondary font-semibold font-label-sm text-label-sm">
                Live Badges
              </span>
            </div>
          </div>
          {/*  KPI 2  */}
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group">
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                  Open Workorders
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-metric-lg text-metric-lg text-tertiary-container tracking-tight">
                    6
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Active Tickets
                  </span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-tertiary-fixed/60 flex items-center justify-center text-tertiary-container">
                <span className="material-symbols-outlined text-[22px]">
                  handyman
                </span>
              </div>
            </div>
            <div className="mt-4 pt-3 flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm bg-surface-container-low/60 -mx-space-lg -mb-space-lg px-space-lg py-2">
              <span>2 Electrical • 1 Plumbing • 3 Wood</span>
              <span className="text-error font-medium font-label-sm text-label-sm">
                1 Urgent
              </span>
            </div>
          </div>
          {/*  KPI 3  */}
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group">
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                  Solar &amp; Power Grid
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-metric-lg text-metric-lg text-secondary tracking-tight">
                    99.4%
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary font-semibold">
                    Uptime
                  </span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-secondary-container/50 flex items-center justify-center text-on-secondary-container">
                <span className="material-symbols-outlined text-[22px]">
                  solar_power
                </span>
              </div>
            </div>
            <div className="mt-4 pt-3 flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm bg-surface-container-low/60 -mx-space-lg -mb-space-lg px-space-lg py-2">
              <span className="truncate">Solar 10kVA Bank • KEDCO Active</span>
              <span className="text-on-surface font-semibold font-label-sm text-label-sm">
                238V Stable
              </span>
            </div>
          </div>
          {/*  KPI 4  */}
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group">
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                  Perimeter Security
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-metric-lg text-metric-lg text-primary tracking-tight">
                    Level 1
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary font-semibold">
                    SECURE
                  </span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[22px]">
                  shield
                </span>
              </div>
            </div>
            <div className="mt-4 pt-3 flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm bg-surface-container-low/60 -mx-space-lg -mb-space-lg px-space-lg py-2">
              <span className="truncate">
                Biometrics Sync • KASTLEA Liaison
              </span>
              <span className="text-secondary font-semibold font-label-sm text-label-sm">
                8 Guards Active
              </span>
            </div>
          </div>
        </div>
        {/*  MAIN 2-COLUMN SECTION (65% / 35%)  */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
          {/*  LEFT / CENTER COLUMN (8 cols = ~66%)  */}
          <div className="lg:col-span-8 space-y-space-lg">
            {/*  CARD 1: LIVE GATEHOUSE VISITOR ACCESS REGISTRY  */}
            <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col space-y-space-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md pb-space-sm bg-surface-container-lowest">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-headline-md text-headline-md text-on-surface">
                      Daily Visitor Access Registry
                    </h2>
                    <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-primary font-label-sm text-label-sm font-semibold">
                      Gate Alpha &amp; Beta
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Real-time surveillance &amp; badge reconciliation across
                    campus portals
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-outline text-[16px]">
                      filter_alt
                    </span>
                    <input
                      className="pl-8 pr-3 py-1.5 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest text-xs w-48"
                      placeholder="Filter by visitor or badge..."
                      type="text"
                    />
                  </div>
                  <button
                    className="p-1.5 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-variant transition-colors"
                    title="Reload Registry"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      refresh
                    </span>
                  </button>
                </div>
              </div>
              {/*  VISITOR TABLE  */}
              <div className="overflow-x-auto -mx-space-lg">
                <table className="w-full text-left font-body-md text-body-md border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider h-11">
                      <th className="px-space-md font-semibold">Badge #</th>
                      <th className="px-space-md font-semibold">
                        Visitor &amp; Phone
                      </th>
                      <th className="px-space-md font-semibold">
                        Entity / Org
                      </th>
                      <th className="px-space-md font-semibold">Host Staff</th>
                      <th className="px-space-md font-semibold">Purpose</th>
                      <th className="px-space-md font-semibold">In / Out</th>
                      <th className="px-space-md font-semibold">Status</th>
                      <th className="px-space-md font-semibold text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container">
                    {/*  ROW 1  */}
                    <tr className="h-14 hover:bg-surface-container-low/50 transition-colors">
                      <td className="px-space-md font-label-md text-label-md font-bold text-primary">
                        #V-1092
                      </td>
                      <td className="px-space-md">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-bold text-xs">
                            HB
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="font-semibold text-on-surface leading-tight truncate">
                              Hajiya Bilkisu Sani
                            </span>
                            <span className="font-body-sm text-[11px] text-outline">
                              0803 241 8901
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-space-md text-on-surface font-body-sm text-body-sm">
                        PTA / Parent
                      </td>
                      <td className="px-space-md text-on-surface font-body-sm text-body-sm">
                        <div className="truncate font-medium">
                          Malam Danladi
                        </div>
                        <span className="font-label-sm text-[10px] text-outline">
                          Bursary Office
                        </span>
                      </td>
                      <td className="px-space-md">
                        <span className="inline-block px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-[11px]">
                          Fee Reconciliation
                        </span>
                      </td>
                      <td className="px-space-md font-body-sm text-body-sm">
                        <span className="text-on-surface font-medium">
                          08:42 AM
                        </span>
                        <span className="text-outline text-xs block">
                          Active
                        </span>
                      </td>
                      <td className="px-space-md">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary/10 text-secondary font-label-sm text-[11px] font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                          On-Premises
                        </span>
                      </td>
                      <td className="px-space-md text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            className="px-2 py-1 bg-surface-container-high hover:bg-error hover:text-on-error rounded font-label-sm text-xs text-on-surface transition-colors"
                            title="Check-out Visitor"
                          >
                            Scan Out
                          </button>
                          <button
                            className="p-1 text-on-surface-variant hover:text-primary rounded hover:bg-surface-container"
                            title="Print Pass"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              print
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/*  ROW 2  */}
                    <tr className="h-14 hover:bg-surface-container-low/50 transition-colors">
                      <td className="px-space-md font-label-md text-label-md font-bold text-primary">
                        #V-1093
                      </td>
                      <td className="px-space-md">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-xs">
                            YM
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="font-semibold text-on-surface leading-tight truncate">
                              Dr. Yakubu Mohammed
                            </span>
                            <span className="font-body-sm text-[11px] text-outline">
                              0802 884 1022
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-space-md text-on-surface font-body-sm text-body-sm">
                        Kaduna State MoE
                      </td>
                      <td className="px-space-md text-on-surface font-body-sm text-body-sm">
                        <div className="truncate font-medium">
                          Dr. Aminu Bello
                        </div>
                        <span className="font-label-sm text-[10px] text-outline">
                          Principal
                        </span>
                      </td>
                      <td className="px-space-md">
                        <span className="inline-block px-2 py-0.5 rounded bg-primary-fixed/40 text-primary font-label-sm text-[11px]">
                          WAEC Audit Q3
                        </span>
                      </td>
                      <td className="px-space-md font-body-sm text-body-sm">
                        <span className="text-on-surface font-medium">
                          09:15 AM
                        </span>
                        <span className="text-outline text-xs block">
                          Active
                        </span>
                      </td>
                      <td className="px-space-md">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary/10 text-secondary font-label-sm text-[11px] font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                          On-Premises
                        </span>
                      </td>
                      <td className="px-space-md text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button className="px-2 py-1 bg-surface-container-high hover:bg-error hover:text-on-error rounded font-label-sm text-xs text-on-surface transition-colors">
                            Scan Out
                          </button>
                          <button className="p-1 text-on-surface-variant hover:text-primary rounded hover:bg-surface-container">
                            <span className="material-symbols-outlined text-[18px]">
                              print
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/*  ROW 3  */}
                    <tr className="h-14 hover:bg-surface-container-low/50 transition-colors">
                      <td className="px-space-md font-label-md text-label-md font-bold text-primary">
                        #V-1094
                      </td>
                      <td className="px-space-md">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary font-bold text-xs">
                            SO
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="font-semibold text-on-surface leading-tight truncate">
                              Sunday Okafor
                            </span>
                            <span className="font-body-sm text-[11px] text-outline">
                              0705 119 4430
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-space-md text-on-surface font-body-sm text-body-sm">
                        SciTech Logistics
                      </td>
                      <td className="px-space-md text-on-surface font-body-sm text-body-sm">
                        <div className="truncate font-medium">
                          Mrs. Aisha Garba
                        </div>
                        <span className="font-label-sm text-[10px] text-outline">
                          HOD Chemistry
                        </span>
                      </td>
                      <td className="px-space-md">
                        <span className="inline-block px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-[11px]">
                          Lab Reagents Drop
                        </span>
                      </td>
                      <td className="px-space-md font-body-sm text-body-sm">
                        <span className="text-on-surface font-medium">
                          09:30 AM
                        </span>
                        <span className="text-outline text-xs block">
                          Active
                        </span>
                      </td>
                      <td className="px-space-md">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-variant text-primary font-label-sm text-[11px] font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                          Badge Issued
                        </span>
                      </td>
                      <td className="px-space-md text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button className="px-2 py-1 bg-surface-container-high hover:bg-error hover:text-on-error rounded font-label-sm text-xs text-on-surface transition-colors">
                            Scan Out
                          </button>
                          <button className="p-1 text-on-surface-variant hover:text-primary rounded hover:bg-surface-container">
                            <span className="material-symbols-outlined text-[18px]">
                              print
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/*  ROW 4  */}
                    <tr className="h-14 hover:bg-surface-container-low/50 transition-colors">
                      <td className="px-space-md font-label-md text-label-md font-bold text-primary">
                        #V-1090
                      </td>
                      <td className="px-space-md">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-surface-container-highest flex items-center justify-center text-outline font-bold text-xs">
                            AG
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="font-semibold text-on-surface leading-tight truncate">
                              Aliyu Galadima
                            </span>
                            <span className="font-body-sm text-[11px] text-outline">
                              0814 990 7712
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-space-md text-on-surface font-body-sm text-body-sm">
                        Arewa Solar Ltd
                      </td>
                      <td className="px-space-md text-on-surface font-body-sm text-body-sm">
                        <div className="truncate font-medium">
                          Engr. Mustapha
                        </div>
                        <span className="font-label-sm text-[10px] text-outline">
                          Works &amp; Maintenance
                        </span>
                      </td>
                      <td className="px-space-md">
                        <span className="inline-block px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-[11px]">
                          Inverter Inspection
                        </span>
                      </td>
                      <td className="px-space-md font-body-sm text-body-sm">
                        <span className="text-on-surface font-medium">
                          07:50 AM
                        </span>
                        <span className="text-on-surface-variant text-xs block">
                          09:10 AM Out
                        </span>
                      </td>
                      <td className="px-space-md">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-[11px]">
                          Checked-Out
                        </span>
                      </td>
                      <td className="px-space-md text-right">
                        <button
                          className="p-1 text-outline hover:text-on-surface rounded hover:bg-surface-container"
                          title="Archive Record"
                        >
                          <span className="material-symbols-outlined text-[18px]">
                            inventory
                          </span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex items-center justify-between pt-space-xs text-on-surface-variant font-label-sm text-label-sm">
                <span>Showing 4 of 14 current registered visitors today</span>
                <div className="flex items-center gap-1">
                  <button className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface hover:bg-surface-variant text-xs">
                    Previous
                  </button>
                  <button className="px-2.5 py-1 rounded bg-primary text-on-primary text-xs">
                    1
                  </button>
                  <button className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface hover:bg-surface-variant text-xs">
                    2
                  </button>
                  <button className="px-2.5 py-1 rounded bg-surface-container-high text-on-surface hover:bg-surface-variant text-xs">
                    Next
                  </button>
                </div>
              </div>
            </div>
            {/*  CARD 2: CAMPUS MAINTENANCE & FACILITIES WORKORDERS  */}
            <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col space-y-space-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-xs">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-headline-md text-headline-md text-on-surface">
                      Campus Maintenance &amp; Plant Workorders
                    </h2>
                    <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-tertiary-container font-label-sm text-label-sm font-semibold">
                      6 Pending
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Classroom furniture, electrical fixtures, laboratory gas,
                    and estate infrastructure
                  </p>
                </div>
                <button className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary hover:underline">
                  <span>View Full Facility Registry</span>
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </button>
              </div>
              {/*  WORKORDERS TABLE  */}
              <div className="overflow-x-auto -mx-space-lg">
                <table className="w-full text-left font-body-md text-body-md border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider h-11">
                      <th className="px-space-md font-semibold">Ticket ID</th>
                      <th className="px-space-md font-semibold">
                        Location / Block
                      </th>
                      <th className="px-space-md font-semibold">
                        Reported Issue
                      </th>
                      <th className="px-space-md font-semibold">Priority</th>
                      <th className="px-space-md font-semibold">
                        Assigned Technician
                      </th>
                      <th className="px-space-md font-semibold">Progress</th>
                      <th className="px-space-md font-semibold text-right">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container">
                    {/*  TICKET 1  */}
                    <tr className="h-14 hover:bg-surface-container-low/50 transition-colors">
                      <td className="px-space-md font-label-md text-label-md font-semibold text-primary">
                        #WO-842
                      </td>
                      <td className="px-space-md">
                        <div className="font-semibold text-on-surface text-sm">
                          Science Complex
                        </div>
                        <span className="font-body-sm text-[11px] text-outline">
                          Physics Lab 1
                        </span>
                      </td>
                      <td className="px-space-md text-on-surface font-body-sm text-body-sm">
                        <span>
                          Air conditioner unit servicing &amp; gas recharge
                        </span>
                      </td>
                      <td className="px-space-md">
                        <span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-[11px] font-bold uppercase">
                          High
                        </span>
                      </td>
                      <td className="px-space-md text-on-surface font-body-sm text-body-sm">
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[16px] text-outline">
                            engineering
                          </span>
                          <span className="font-medium text-xs">
                            Engr. Mustapha Aliyu
                          </span>
                        </div>
                      </td>
                      <td className="px-space-md">
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
                            <div className="bg-primary h-1.5 rounded-full w-[65%]"></div>
                          </div>
                          <span className="font-label-sm text-[11px] text-outline">
                            65%
                          </span>
                        </div>
                      </td>
                      <td className="px-space-md text-right">
                        <button className="px-2.5 py-1 bg-surface-container-high hover:bg-primary hover:text-on-primary rounded font-label-sm text-xs transition-colors">
                          Update
                        </button>
                      </td>
                    </tr>
                    {/*  TICKET 2  */}
                    <tr className="h-14 hover:bg-surface-container-low/50 transition-colors">
                      <td className="px-space-md font-label-md text-label-md font-semibold text-primary">
                        #WO-843
                      </td>
                      <td className="px-space-md">
                        <div className="font-semibold text-on-surface text-sm">
                          Senior Secondary
                        </div>
                        <span className="font-body-sm text-[11px] text-outline">
                          Classroom SS-2B
                        </span>
                      </td>
                      <td className="px-space-md text-on-surface font-body-sm text-body-sm">
                        <span>
                          Broken window louvers &amp; replacement of 4 dual
                          desks
                        </span>
                      </td>
                      <td className="px-space-md">
                        <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-tertiary-container font-label-sm text-[11px] font-bold uppercase">
                          Medium
                        </span>
                      </td>
                      <td className="px-space-md text-on-surface font-body-sm text-body-sm">
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[16px] text-outline">
                            carpenter
                          </span>
                          <span className="font-medium text-xs">
                            Mallam Kabiru Carpenter
                          </span>
                        </div>
                      </td>
                      <td className="px-space-md">
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
                            <div className="bg-tertiary-container h-1.5 rounded-full w-[30%]"></div>
                          </div>
                          <span className="font-label-sm text-[11px] text-outline">
                            30%
                          </span>
                        </div>
                      </td>
                      <td className="px-space-md text-right">
                        <button className="px-2.5 py-1 bg-surface-container-high hover:bg-primary hover:text-on-primary rounded font-label-sm text-xs transition-colors">
                          Update
                        </button>
                      </td>
                    </tr>
                    {/*  TICKET 3  */}
                    <tr className="h-14 hover:bg-surface-container-low/50 transition-colors">
                      <td className="px-space-md font-label-md text-label-md font-semibold text-primary">
                        #WO-845
                      </td>
                      <td className="px-space-md">
                        <div className="font-semibold text-on-surface text-sm">
                          Mosque &amp; Ablution
                        </div>
                        <span className="font-body-sm text-[11px] text-outline">
                          Boys Ablution Bay
                        </span>
                      </td>
                      <td className="px-space-md text-on-surface font-body-sm text-body-sm">
                        <span>
                          Water tap valve leakage &amp; pressure regulator
                          recalibration
                        </span>
                      </td>
                      <td className="px-space-md">
                        <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-[11px] font-bold uppercase">
                          Normal
                        </span>
                      </td>
                      <td className="px-space-md text-on-surface font-body-sm text-body-sm">
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[16px] text-outline">
                            plumbing
                          </span>
                          <span className="font-medium text-xs">
                            Ibrahim S. (Plumber)
                          </span>
                        </div>
                      </td>
                      <td className="px-space-md">
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
                            <div className="bg-secondary h-1.5 rounded-full w-[85%]"></div>
                          </div>
                          <span className="font-label-sm text-[11px] text-outline">
                            85%
                          </span>
                        </div>
                      </td>
                      <td className="px-space-md text-right">
                        <button className="px-2.5 py-1 bg-surface-container-high hover:bg-primary hover:text-on-primary rounded font-label-sm text-xs transition-colors">
                          Update
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/*  VISUAL PLANT MAP & ASSET OVERVIEW  */}
            <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col space-y-space-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[22px]">
                    map
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Campus Perimeter &amp; Plant Spatial Map
                  </h3>
                </div>
                <span className="font-label-sm text-label-sm text-outline">
                  Kaduna Campus Master Plan (12 Hectares)
                </span>
              </div>
              <div className="w-full h-48 rounded-lg overflow-hidden relative bg-surface-container-high flex items-center justify-center">
                <div
                  className="w-full h-full bg-cover bg-center"
                  data-location="Kaduna, Nigeria"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAXhuRAM-Ci7XRisiJkG6MaNtyk2e24P2JWize91s_0X-iY3sktuzLJlucFzHVkWfPvFXfPrejeG_tpFPHCDOW-TWUp0DGPlTw-7VpDisLZyWAq0aBYFU24unRqIpm2_A2VZFy1d9r9GuDu1ZuT3mnM6jB25tzbZXrvjvLzwhRhm8f9v4Mf-2QZWIWOGu-SuPcdfKbhXCm3fa2w2okaVO4KiqW4DTcTOiHZ3cj02MBeXcNmowDVdhr66g')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px] flex items-center justify-center p-4">
                  <div className="bg-surface-container-lowest/95 p-3 rounded-lg shadow-lg flex items-center gap-4 max-w-md">
                    <span className="material-symbols-outlined text-primary text-[28px]">
                      verified_user
                    </span>
                    <div className="flex flex-col min-w-0">
                      <span className="font-label-md text-label-md font-semibold text-primary">
                        All 4 Perimeter Zones Secured
                      </span>
                      <span className="font-body-sm text-[11px] text-on-surface-variant">
                        Gate Alpha (North), Gate Beta (South), Solar Farm,
                        Science Annex active under CCTV monitoring.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  RIGHT COLUMN (4 cols = ~34%)  */}
          <div className="lg:col-span-4 space-y-space-lg">
            {/*  FAST DIGITAL VISITOR CHECK-IN TERMINAL  */}
            <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col space-y-space-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-fixed/20 rounded-full blur-xl pointer-events-none"></div>
              <div className="flex items-center justify-between pb-1 border-b border-surface-container-low">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    badge
                  </span>
                  <h2 className="font-headline-sm text-headline-sm text-primary">
                    Fast Check-In Terminal
                  </h2>
                </div>
                <span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-[10px] font-bold">
                  ALPHA GATE
                </span>
              </div>
              {/*  FORM CONTROLS  */}
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1">
                    Visitor Full Name *
                  </label>
                  <input
                    className="w-full h-10 px-3 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="e.g. Alhaji Mansur Ibrahim"
                    type="text"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1">
                      Phone / NIN *
                    </label>
                    <input
                      className="w-full h-10 px-3 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="0803 000 0000"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1">
                      Vehicle Plate No.
                    </label>
                    <input
                      className="w-full h-10 px-3 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all uppercase"
                      placeholder="e.g. KAD-482-AA"
                      type="text"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1">
                    Purpose of Entry
                  </label>
                  <select className="w-full h-10 px-3 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all">
                    <option value="parent">Parent Consultation / Fees</option>
                    <option value="moe">Ministry of Education Official</option>
                    <option value="vendor">Vendor / Equipment Delivery</option>
                    <option value="contractor">Maintenance Contractor</option>
                    <option value="applicant">
                      Prospective Student Admission
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1">
                    Host Staff / Office
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">
                      account_box
                    </span>
                    <input
                      className="w-full h-10 pl-9 pr-3 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="Search staff name..."
                      type="text"
                    />
                  </div>
                </div>
                {/*  SNAPSHOT CAPTURE AREA  */}
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1">
                    Security Snapshot
                  </label>
                  <div className="h-20 bg-surface-container-low rounded-lg border border-dashed border-outline-variant flex items-center justify-center cursor-pointer hover:bg-surface-container-high transition-colors">
                    <div className="flex items-center gap-2 text-outline">
                      <span className="material-symbols-outlined text-[24px]">
                        photo_camera
                      </span>
                      <span className="font-body-sm text-xs">
                        Tap to capture webcam face photo
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  className="w-full h-11 bg-primary text-on-primary rounded-lg font-label-md text-label-md font-semibold hover:bg-primary-container transition-all flex items-center justify-center gap-2 shadow-sm mt-2"
                  type="submit"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    print_connect
                  </span>
                  <span>Issue Thermal Badge &amp; Grant Entry</span>
                </button>
              </form>
            </div>
            {/*  CAMPUS PHYSICAL UTILITIES & SAFETY TELEMETRY  */}
            <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col space-y-space-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[22px]">
                    sensors
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Campus Utilities Telemetry
                  </h3>
                </div>
                <span className="font-label-sm text-label-sm text-secondary font-semibold">
                  Live Feed
                </span>
              </div>
              <div className="space-y-space-md">
                {/*  UTILITY 1: WATER SUPPLY  */}
                <div className="p-space-sm bg-surface-container-low rounded-lg flex flex-col space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">
                        water_drop
                      </span>
                      <span className="font-label-sm text-label-sm font-semibold text-on-surface">
                        Borehole &amp; Overhead Tanks
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary font-semibold">
                      22,000 / 25,000 L
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-highest rounded-full h-2 overflow-hidden">
                    <div className="bg-secondary h-2 rounded-full w-[88%]"></div>
                  </div>
                  <div className="flex justify-between text-outline font-body-sm text-[11px]">
                    <span>Industrial UV filtration active</span>
                    <span>Pressure: 3.4 Bar</span>
                  </div>
                </div>
                {/*  UTILITY 2: FIRE & LIFE SAFETY  */}
                <div className="p-space-sm bg-surface-container-low rounded-lg flex flex-col space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-error text-[18px]">
                        fire_extinguisher
                      </span>
                      <span className="font-label-sm text-label-sm font-semibold text-on-surface">
                        Fire Safety Readiness
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-secondary-fixed/40 text-on-secondary-container font-label-sm text-[10px] font-bold">
                      100% PASS
                    </span>
                  </div>
                  <p className="font-body-sm text-xs text-on-surface-variant">
                    24 Dry Chemical Extinguishers serviced on 12 Oct 2026. Smoke
                    sensors active in Science Labs &amp; Hostels.
                  </p>
                </div>
                {/*  UTILITY 3: DIESEL GENERATOR RESERVES  */}
                <div className="p-space-sm bg-surface-container-low rounded-lg flex flex-col space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-tertiary-container text-[18px]">
                        oil_barrel
                      </span>
                      <span className="font-label-sm text-label-sm font-semibold text-on-surface">
                        Generator Diesel Fuel
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm text-tertiary-container font-semibold">
                      1,800 L (72%)
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-highest rounded-full h-2 overflow-hidden">
                    <div className="bg-tertiary-container h-2 rounded-full w-[72%]"></div>
                  </div>
                  <div className="flex justify-between text-outline font-body-sm text-[11px]">
                    <span>150kVA Perkins Standby Engine</span>
                    <span>Next Service: in 42 hrs</span>
                  </div>
                </div>
              </div>
            </div>
            {/*  SECURITY LIAISON & EMERGENCY PROTOCOLS  */}
            <div className="bg-surface-container-high/60 rounded-xl p-space-lg flex flex-col space-y-space-md">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-error text-[22px]">
                  emergency
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary">
                  Emergency Hotlines &amp; Protocols
                </h3>
              </div>
              <div className="space-y-2">
                <a
                  className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-lowest hover:bg-surface-variant transition-colors group"
                  href="tel:08031234567"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      local_police
                    </span>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm font-semibold text-on-surface">
                        Kaduna Police Area Command
                      </span>
                      <span className="font-body-sm text-[11px] text-outline">
                        Direct Desk: Sector 4
                      </span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary text-[18px]">
                    call
                  </span>
                </a>
                <a
                  className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-lowest hover:bg-surface-variant transition-colors group"
                  href="tel:08027654321"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-error text-[20px]">
                      local_fire_department
                    </span>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm font-semibold text-on-surface">
                        Kaduna State Fire Service
                      </span>
                      <span className="font-body-sm text-[11px] text-outline">
                        Central Sub-Station
                      </span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-outline group-hover:text-error text-[18px]">
                    call
                  </span>
                </a>
                <a
                  className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-lowest hover:bg-surface-variant transition-colors group"
                  href="tel:08099887766"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-secondary text-[20px]">
                      local_hospital
                    </span>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm font-semibold text-on-surface">
                        Barau Dikko Teaching Hospital
                      </span>
                      <span className="font-body-sm text-[11px] text-outline">
                        Trauma &amp; Ambulance Unit
                      </span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-outline group-hover:text-secondary text-[18px]">
                    call
                  </span>
                </a>
              </div>
              <div className="pt-2 text-center">
                <span className="font-label-sm text-[11px] text-on-surface-variant block">
                  Kaduna MoE Rapid Response Protocol Code:{" "}
                  <span className="font-bold text-primary">KD-SMS-774</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
