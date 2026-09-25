import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(
  "/admin/transportation-bus-fleet-management",
)({
  component: TransportationBusFleetManagement,
});

function TransportationBusFleetManagement() {
  return (
    <main className="w-full pt-16 px-space-lg py-space-lg flex-1 bg-surface">
      <div className="flex flex-col w-full">
        {/*  Breadcrumb & Top Bar  */}
        <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-sm text-on-surface-variant font-label-sm text-label-sm">
          <div className="flex items-center gap-space-xs">
            <span className="hover:text-primary transition-colors cursor-pointer">
              Operations
            </span>
            <span className="material-symbols-outlined text-[14px]">
              chevron_right
            </span>
            <span className="hover:text-primary transition-colors cursor-pointer">
              Transportation Management
            </span>
            <span className="material-symbols-outlined text-[14px]">
              chevron_right
            </span>
            <span className="text-primary font-semibold">
              Fleet &amp; Daily Route Logistics
            </span>
          </div>
          <div className="flex items-center gap-space-sm bg-surface-container-high px-space-sm py-1 rounded-full text-[11px] font-medium text-on-surface-variant">
            <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span>
              Kaduna Traffic Authority (KASTLEA) API: Connected • Low Delay
              Metrowide
            </span>
          </div>
        </div>
        {/*  Header Banner & Action Bar  */}
        <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm mb-space-lg">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
            <div className="max-w-3xl space-y-1">
              <div className="flex items-center gap-space-sm">
                <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  Transportation &amp; Bus Fleet Management
                </h1>
                <span className="bg-secondary-fixed text-on-secondary-fixed-variant px-2.5 py-0.5 rounded-full text-label-sm font-label-sm uppercase tracking-wide">
                  Kaduna Metro
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Manage 14 school buses, student pickup &amp; drop-off routes,
                driver assignments, GPS telemetry, and safety compliance across
                Kaduna metropolis (Malali, Barnawa, Hayin Banki, Rigachikun,
                Ungwan Rimi, Kakuri).
              </p>
            </div>
            {/*  Action Cluster  */}
            <div className="flex flex-wrap items-center gap-space-xs shrink-0">
              <button
                className="inline-flex items-center gap-1.5 px-space-md py-2 bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-primary-container transition-all shadow-sm"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">
                  person_add
                </span>
                <span>Assign Student</span>
              </button>
              <button
                className="inline-flex items-center gap-1.5 px-space-md py-2 bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors rounded-lg font-label-md text-label-md"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px] text-secondary">
                  sms
                </span>
                <span>Dispatch SMS</span>
              </button>
              <button
                className="inline-flex items-center gap-1.5 px-space-md py-2 bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors rounded-lg font-label-md text-label-md"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px] text-primary">
                  local_gas_station
                </span>
                <span>Fuel &amp; Maint. Log</span>
              </button>
              <button
                className="inline-flex items-center gap-1 px-3 py-2 bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors rounded-lg font-label-md text-label-md"
                title="Export Fleet Report (.xlsx)"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">
                  download
                </span>
                <span>Export</span>
              </button>
            </div>
          </div>
        </div>
        {/*  KPI Metrics Bar  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md mb-space-lg">
          {/*  KPI 1  */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between mb-space-sm">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                Active Bus Fleet
              </span>
              <div className="w-10 h-10 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[22px]">
                  directions_bus
                </span>
              </div>
            </div>
            <div>
              <div className="font-metric-lg text-metric-lg text-primary leading-none mb-1">
                14 / 14
              </div>
              <div className="flex items-center gap-1.5">
                <span className="inline-flex items-center text-secondary font-semibold text-label-sm font-label-sm">
                  <span className="material-symbols-outlined text-[16px]">
                    check_circle
                  </span>
                  100% Operational
                </span>
                <span className="text-on-surface-variant font-body-sm text-body-sm">
                  • On Road
                </span>
              </div>
            </div>
            <div className="w-full bg-surface-container-highest rounded-full h-1 mt-3 overflow-hidden">
              <div className="bg-secondary h-1 rounded-full w-full"></div>
            </div>
          </div>
          {/*  KPI 2  */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between mb-space-sm">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                Students Transported Daily
              </span>
              <div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[22px]">
                  group
                </span>
              </div>
            </div>
            <div>
              <div className="font-metric-lg text-metric-lg text-primary leading-none mb-1">
                624 Pupils
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-on-surface font-semibold text-label-sm font-label-sm">
                  38 Runs
                </span>
                <span className="text-on-surface-variant font-body-sm text-body-sm">
                  • Morning &amp; Afternoon
                </span>
              </div>
            </div>
            <div className="w-full bg-surface-container-highest rounded-full h-1 mt-3 overflow-hidden">
              <div className="bg-primary h-1 rounded-full w-[84%]"></div>
            </div>
          </div>
          {/*  KPI 3  */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between mb-space-sm">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                Average Punctuality
              </span>
              <div className="w-10 h-10 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[22px]">
                  schedule
                </span>
              </div>
            </div>
            <div>
              <div className="font-metric-lg text-metric-lg text-secondary leading-none mb-1">
                98.2%
              </div>
              <div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
                <span>Arrival by 07:35 AM at Main Gate</span>
              </div>
            </div>
            <div className="w-full bg-surface-container-highest rounded-full h-1 mt-3 overflow-hidden">
              <div className="bg-secondary h-1 rounded-full w-[98.2%]"></div>
            </div>
          </div>
          {/*  KPI 4  */}
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between mb-space-sm">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                Pending Maintenance
              </span>
              <div className="w-10 h-10 rounded-lg bg-tertiary-fixed flex items-center justify-center text-tertiary-container">
                <span className="material-symbols-outlined text-[22px]">
                  build
                </span>
              </div>
            </div>
            <div>
              <div className="font-metric-lg text-metric-lg text-tertiary-container leading-none mb-1">
                2 Vehicles Due
              </div>
              <div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm truncate">
                <span>Bus 04 (Brakes) • Bus 09 (Oil)</span>
              </div>
            </div>
            <div className="w-full bg-surface-container-highest rounded-full h-1 mt-3 overflow-hidden">
              <div className="bg-tertiary-container h-1 rounded-full w-[25%]"></div>
            </div>
          </div>
        </div>
        {/*  Split Core Workspaces: 7-Col Left & 5-Col Right  */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
          {/*  LEFT COLUMN: Dispatch Table + RFID Tap Stream (7-Cols)  */}
          <div className="lg:col-span-7 flex flex-col gap-space-lg">
            {/*  Table Container  */}
            <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-sm mb-space-sm">
                <div>
                  <h2 className="font-headline-md text-headline-md text-primary">
                    Active Routes &amp; Zone Dispatch
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Live telemetry and passenger seating for Kaduna metropolitan
                    circuits
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-secondary bg-secondary-fixed/50 px-2 py-1 rounded-md">
                  <span className="material-symbols-outlined text-[14px]">
                    cell_tower
                  </span>
                  Transmitting 1-sec ping
                </span>
              </div>
              {/*  Filter Segmented Tabs  */}
              <div className="flex items-center gap-1 p-1 bg-surface-container-low rounded-lg mb-space-md overflow-x-auto">
                <button
                  className="px-3 py-1.5 rounded-md font-label-sm text-label-sm font-semibold bg-surface-container-lowest text-primary shadow-xs whitespace-nowrap"
                  type="button"
                >
                  All Routes (8)
                </button>
                <button
                  className="px-3 py-1.5 rounded-md font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap"
                  type="button"
                >
                  Northern Zone (Malali / Rimi)
                </button>
                <button
                  className="px-3 py-1.5 rounded-md font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap"
                  type="button"
                >
                  Southern Zone (Barnawa / Kakuri)
                </button>
                <button
                  className="px-3 py-1.5 rounded-md font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap"
                  type="button"
                >
                  Western Zone (Rigachikun)
                </button>
              </div>
              {/*  Table Responsive Container  */}
              <div className="overflow-x-auto -mx-space-md px-space-md">
                <table className="w-full text-left font-body-sm text-body-sm">
                  <thead>
                    <tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider rounded-lg">
                      <th className="py-2.5 px-3 rounded-l-lg">
                        Route Details
                      </th>
                      <th className="py-2.5 px-3">Vehicle / Plate</th>
                      <th className="py-2.5 px-3">Crew (Driver • Conductor)</th>
                      <th className="py-2.5 px-3">Load</th>
                      <th className="py-2.5 px-3">Current Status</th>
                      <th className="py-2.5 px-3 text-right rounded-r-lg">
                        Quick Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y-0">
                    {/*  Route Row 1  */}
                    <tr className="hover:bg-surface-container-low/60 transition-colors">
                      <td className="py-3 px-3">
                        <div className="font-headline-sm text-[13px] text-primary font-bold">
                          Route A1: Malali GRA Express
                        </div>
                        <div className="text-[11px] text-on-surface-variant">
                          Via Ungwan Rimi • 6 Checkpoints
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <div className="font-medium text-on-surface">
                          Toyota Coaster Bus 01
                        </div>
                        <div className="text-[11px] text-outline font-mono">
                          KD-882-KDA
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <div className="font-medium text-on-surface">
                          Malam Shehu Garba
                        </div>
                        <div className="text-[11px] text-secondary font-medium">
                          Mrs. Rebecca Yohanna
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <div className="inline-flex items-center gap-1 font-semibold text-error text-[12px]">
                          <span className="material-symbols-outlined text-[14px]">
                            airline_seat_recline_normal
                          </span>
                          32 / 32 Full
                        </div>
                        <div className="w-16 bg-surface-container-highest rounded-full h-1 mt-1">
                          <div className="bg-error h-1 rounded-full w-full"></div>
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-secondary-fixed text-on-secondary-fixed-variant">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary"></span>
                          On Transit • Stop 4/6
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right whitespace-nowrap">
                        <div className="inline-flex items-center gap-1">
                          <button
                            className="p-1 rounded hover:bg-surface-container-high text-primary"
                            title="Live GPS Telemetry"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              location_on
                            </span>
                          </button>
                          <button
                            className="p-1 rounded hover:bg-surface-container-high text-on-surface-variant"
                            title="Passenger Manifest"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              badge
                            </span>
                          </button>
                          <button
                            className="p-1 rounded hover:bg-surface-container-high text-tertiary-container"
                            title="Send Delay Alert"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              notifications_active
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/*  Route Row 2  */}
                    <tr className="hover:bg-surface-container-low/60 transition-colors bg-surface-container-lowest">
                      <td className="py-3 px-3">
                        <div className="font-headline-sm text-[13px] text-primary font-bold">
                          Route B2: Barnawa Narayi Line
                        </div>
                        <div className="text-[11px] text-on-surface-variant">
                          Via Narayi High Cost • 5 Stops
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <div className="font-medium text-on-surface">
                          Toyota HiAce Bus 06
                        </div>
                        <div className="text-[11px] text-outline font-mono">
                          KD-114-TRK
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <div className="font-medium text-on-surface">
                          Mr. Patrick Okon
                        </div>
                        <div className="text-[11px] text-secondary font-medium">
                          Hajiya Maryam Sani
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <div className="inline-flex items-center gap-1 font-semibold text-secondary text-[12px]">
                          <span className="material-symbols-outlined text-[14px]">
                            airline_seat_recline_normal
                          </span>
                          18 / 20 Seats
                        </div>
                        <div className="w-16 bg-surface-container-highest rounded-full h-1 mt-1">
                          <div className="bg-secondary h-1 rounded-full w-[90%]"></div>
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-tertiary-fixed text-on-tertiary-fixed">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-tertiary-container"></span>
                          Traffic Slow • +6m
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right whitespace-nowrap">
                        <div className="inline-flex items-center gap-1">
                          <button
                            className="p-1 rounded hover:bg-surface-container-high text-primary"
                            title="Live GPS Telemetry"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              location_on
                            </span>
                          </button>
                          <button
                            className="p-1 rounded hover:bg-surface-container-high text-on-surface-variant"
                            title="Passenger Manifest"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              badge
                            </span>
                          </button>
                          <button
                            className="p-1 rounded hover:bg-surface-container-high text-tertiary-container"
                            title="Send Delay Alert"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              notifications_active
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/*  Route Row 3  */}
                    <tr className="hover:bg-surface-container-low/60 transition-colors">
                      <td className="py-3 px-3">
                        <div className="font-headline-sm text-[13px] text-primary font-bold">
                          Route C1: Rigachikun Express
                        </div>
                        <div className="text-[11px] text-on-surface-variant">
                          Via Kawo &amp; Millennium City • 8 Stops
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <div className="font-medium text-on-surface">
                          Mercedes Sprinter Bus 04
                        </div>
                        <div className="text-[11px] text-outline font-mono">
                          KD-552-ZAR
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <div className="font-medium text-on-surface">
                          Usman Al-Hassan
                        </div>
                        <div className="text-[11px] text-secondary font-medium">
                          Grace Dangana
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <div className="inline-flex items-center gap-1 font-semibold text-primary text-[12px]">
                          <span className="material-symbols-outlined text-[14px]">
                            airline_seat_recline_normal
                          </span>
                          28 / 30 Seats
                        </div>
                        <div className="w-16 bg-surface-container-highest rounded-full h-1 mt-1">
                          <div className="bg-primary h-1 rounded-full w-[93%]"></div>
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-surface-container-highest text-primary">
                          <span className="material-symbols-outlined text-[14px]">
                            check
                          </span>
                          Campus Arrived
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right whitespace-nowrap">
                        <div className="inline-flex items-center gap-1">
                          <button
                            className="p-1 rounded hover:bg-surface-container-high text-primary"
                            title="Live GPS Telemetry"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              location_on
                            </span>
                          </button>
                          <button
                            className="p-1 rounded hover:bg-surface-container-high text-on-surface-variant"
                            title="Passenger Manifest"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              badge
                            </span>
                          </button>
                          <button
                            className="p-1 rounded hover:bg-surface-container-high text-tertiary-container"
                            title="Send Delay Alert"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              notifications_active
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/*  Route Row 4  */}
                    <tr className="hover:bg-surface-container-low/60 transition-colors bg-surface-container-lowest">
                      <td className="py-3 px-3">
                        <div className="font-headline-sm text-[13px] text-primary font-bold">
                          Route D3: Kakuri • TV Station
                        </div>
                        <div className="text-[11px] text-on-surface-variant">
                          Via Stadium Roundabout • 4 Stops
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <div className="font-medium text-on-surface">
                          Toyota Coaster Bus 09
                        </div>
                        <div className="text-[11px] text-outline font-mono">
                          KD-901-KAF
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <div className="font-medium text-on-surface">
                          Haruna Ibrahim
                        </div>
                        <div className="text-[11px] text-secondary font-medium">
                          Bilkisu Nuhu
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <div className="inline-flex items-center gap-1 font-semibold text-secondary text-[12px]">
                          <span className="material-symbols-outlined text-[14px]">
                            airline_seat_recline_normal
                          </span>
                          25 / 32 Seats
                        </div>
                        <div className="w-16 bg-surface-container-highest rounded-full h-1 mt-1">
                          <div className="bg-secondary h-1 rounded-full w-[78%]"></div>
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-secondary-fixed text-on-secondary-fixed-variant">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary"></span>
                          On Schedule • Transit
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right whitespace-nowrap">
                        <div className="inline-flex items-center gap-1">
                          <button
                            className="p-1 rounded hover:bg-surface-container-high text-primary"
                            title="Live GPS Telemetry"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              location_on
                            </span>
                          </button>
                          <button
                            className="p-1 rounded hover:bg-surface-container-high text-on-surface-variant"
                            title="Passenger Manifest"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              badge
                            </span>
                          </button>
                          <button
                            className="p-1 rounded hover:bg-surface-container-high text-tertiary-container"
                            title="Send Delay Alert"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              notifications_active
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/*  Live RFID Tap-In Monitor Card  */}
            <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
              <div className="flex items-center justify-between pb-space-sm mb-space-sm">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-secondary text-[22px]">
                    contactless
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    Daily RFID Tap-In &amp; SMS Broadcast Stream
                  </h3>
                </div>
                <div className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  <span>Live Sync active (Kaduna GSM Gateways)</span>
                </div>
              </div>
              <div className="space-y-space-xs">
                {/*  Log Entry 1  */}
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-9 h-9 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-[12px]">
                      AD
                    </div>
                    <div>
                      <div className="font-headline-sm text-[13px] text-primary">
                        Aisha Mansur Danbaba
                      </div>
                      <div className="text-[11px] text-on-surface-variant">
                        SSS 2 Science • Stop: Malali Waterboard Gate
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end text-right">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-secondary bg-secondary-fixed/50 px-2 py-0.5 rounded">
                      <span className="material-symbols-outlined text-[12px]">
                        done_all
                      </span>
                      RFID Boarded • 07:12 AM
                    </span>
                    <span className="text-[10px] text-outline font-mono mt-0.5">
                      Parent SMS Sent (MTN 07:12:08)
                    </span>
                  </div>
                </div>
                {/*  Log Entry 2  */}
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-9 h-9 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant flex items-center justify-center font-bold text-[12px]">
                      BA
                    </div>
                    <div>
                      <div className="font-headline-sm text-[13px] text-primary">
                        Bilal Abdulrahman
                      </div>
                      <div className="text-[11px] text-on-surface-variant">
                        Primary 3 Emerald • Stop: Barnawa Shopping Complex
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end text-right">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-secondary bg-secondary-fixed/50 px-2 py-0.5 rounded">
                      <span className="material-symbols-outlined text-[12px]">
                        done_all
                      </span>
                      RFID Boarded • 07:14 AM
                    </span>
                    <span className="text-[10px] text-outline font-mono mt-0.5">
                      Parent SMS Sent (Airtel 07:14:02)
                    </span>
                  </div>
                </div>
                {/*  Log Entry 3  */}
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-9 h-9 rounded-full bg-surface-container-highest text-primary flex items-center justify-center font-bold text-[12px]">
                      FY
                    </div>
                    <div>
                      <div className="font-headline-sm text-[13px] text-primary">
                        Fatima Yakubu Bello
                      </div>
                      <div className="text-[11px] text-on-surface-variant">
                        JSS 1 Falcon • Stop: Ungwan Rimi Market Junction
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end text-right">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-secondary bg-secondary-fixed/50 px-2 py-0.5 rounded">
                      <span className="material-symbols-outlined text-[12px]">
                        done_all
                      </span>
                      RFID Boarded • 07:18 AM
                    </span>
                    <span className="text-[10px] text-outline font-mono mt-0.5">
                      Parent SMS Sent (Glo 07:18:14)
                    </span>
                  </div>
                </div>
                {/*  Log Entry 4  */}
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-9 h-9 rounded-full bg-primary-fixed text-primary flex items-center justify-center font-bold text-[12px]">
                      IU
                    </div>
                    <div>
                      <div className="font-headline-sm text-[13px] text-primary">
                        Ibrahim Umar Sani
                      </div>
                      <div className="text-[11px] text-on-surface-variant">
                        SSS 1 Pearl • Stop: Hayin Banki Railway Crossing
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end text-right">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-secondary bg-secondary-fixed/50 px-2 py-0.5 rounded">
                      <span className="material-symbols-outlined text-[12px]">
                        done_all
                      </span>
                      RFID Boarded • 07:22 AM
                    </span>
                    <span className="text-[10px] text-outline font-mono mt-0.5">
                      Parent SMS Sent (MTN 07:22:04)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  RIGHT COLUMN: Telemetry Map + Driver Compliance + Fuel Log (5-Cols)  */}
          <div className="lg:col-span-5 flex flex-col gap-space-lg">
            {/*  Map & Real-Time Telemetry Container  */}
            <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col">
              <div className="flex items-center justify-between pb-space-sm mb-space-sm">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    Kaduna Metropolis Telemetry
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Live positioning • GPS speed monitors
                  </p>
                </div>
                <span className="px-2.5 py-1 bg-surface-container-high rounded text-[11px] font-mono text-primary font-semibold">
                  Speed Cap: 50 km/h
                </span>
              </div>
              {/*  Static / Interactive Map Representation  */}
              <div
                className="relative w-full h-64 rounded-xl overflow-hidden shadow-inner mb-space-sm"
                data-location="Kaduna, Nigeria"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBuxFS9ExIxwOeDxLUgoDaoXHH6m-cEcGv-JlxpgM3KEADm3EHS3AysH3a5p_-wFDnFVzc2naVbm842TV9zAaEt8ued_2J3fpi5K2bSeEowDhi8lFAgCaP4mXRasClwT336Ahg2NXOFBB3f_1eiuKfQM4BRDHvhuBY7wviFr11_GcQvqZlevUmthd7aTe8uHTrbs3Ir-yADo_eQgr4tiyqxq23yf__MUMeeKo41xO2_uMSDyh_v-_j90Q')",
                }}
              >
                {/*  Visual telemetry overlay  */}
                <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px] flex flex-col justify-between p-space-sm">
                  <div className="flex items-center justify-between">
                    <div className="bg-surface-container-lowest/90 backdrop-blur px-2.5 py-1 rounded text-[11px] font-medium text-primary shadow-xs">
                      Ahmadu Bello Way Corridor • Kawo Flyover
                    </div>
                    <div className="bg-surface-container-lowest/90 backdrop-blur px-2 py-0.5 rounded text-[11px] text-secondary font-bold flex items-center gap-1 shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>{" "}
                      Live Fleet: 14 Active
                    </div>
                  </div>
                  {/*  Route Nodes mockup on map  */}
                  <div className="space-y-1">
                    <div className="bg-surface-container-lowest/95 backdrop-blur p-2 rounded-lg shadow-sm">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-semibold text-primary">
                          Bus 01 (Malali Line)
                        </span>
                        <span className="font-mono text-secondary font-bold">
                          42 km/h • Stop 4 (Rimi)
                        </span>
                      </div>
                      <div className="w-full bg-surface-container-highest rounded-full h-1 mt-1.5">
                        <div className="bg-secondary h-1 rounded-full w-3/4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  Live Traffic Delay Warning Component  */}
              <div className="bg-tertiary-fixed/40 p-space-sm rounded-lg flex items-start gap-space-xs">
                <span className="material-symbols-outlined text-tertiary-container text-[20px] shrink-0">
                  crisis_alert
                </span>
                <div className="min-w-0">
                  <div className="font-headline-sm text-[12px] text-tertiary-container font-semibold">
                    Minor Congestion: Stadium Roundabout
                  </div>
                  <p className="font-body-sm text-[11px] text-on-surface-variant leading-snug">
                    Estimated +6 min delay on Route B2. Auto SMS broadcast
                    dispatched to 18 registered guardians in Zone B.
                  </p>
                </div>
              </div>
            </div>
            {/*  Driver & Safety Compliance Dossier  */}
            <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
              <div className="flex items-center justify-between pb-space-sm mb-space-sm">
                <h3 className="font-headline-sm text-headline-sm text-primary">
                  Lead Driver &amp; Safety Compliance
                </h3>
                <span className="text-secondary font-label-sm text-label-sm font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">
                    verified
                  </span>
                  FRSC Certified
                </span>
              </div>
              <div className="flex items-center gap-space-md mb-space-md">
                <img
                  className="w-14 h-14 rounded-full object-cover shadow-sm"
                  data-alt="Close up studio portrait of an experienced Nigerian middle aged bus driver Malam Shehu Garba wearing a neat dark blue collared uniform and a gentle professional expression against an academic campus background, natural morning lighting."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuClgYT_jtDXRiRJMaGgZi8ZwznFvlaNReHcE-EhGD_cUmI6jTPB5w4ULsIy6a8q8eOQV0P2AaELtGUNKyJKiUwG52dGtSxfeWrrEc48PLz6s8N2rIuBAqN6ON2nFHqSIPuBK_AeO7SGtCypvvg683QasiuCjzTYPJcq6ttuz_tYtBRyRGGLVOXqK8CL2fRODcB8ooWRXjPLE5j0B-wsO8PUZRrB4WdcqvbSEuf-rZGDEA5z9yKiVMcRog"
                />
                <div className="min-w-0">
                  <div className="font-headline-sm text-[15px] text-primary font-bold">
                    Malam Shehu Garba
                  </div>
                  <div className="text-[12px] text-on-surface-variant">
                    Senior Fleet Captain • 8 Years at NIIS
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="bg-surface-container-high px-2 py-0.5 rounded text-[10px] font-mono text-on-surface-variant font-medium">
                      FRSC Lic: #KD-99120-E
                    </span>
                    <span className="text-secondary text-[11px] font-semibold">
                      Zero Incidents (2018–2026)
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-space-xs text-[12px]">
                <div className="bg-surface-container-low p-2.5 rounded-lg">
                  <span className="text-on-surface-variant text-[11px] block">
                    FRSC License Validity
                  </span>
                  <span className="font-semibold text-primary">
                    Valid until March 2028
                  </span>
                </div>
                <div className="bg-surface-container-low p-2.5 rounded-lg">
                  <span className="text-on-surface-variant text-[11px] block">
                    Speed Limiter Calibrated
                  </span>
                  <span className="font-semibold text-secondary">
                    50 km/h Governed
                  </span>
                </div>
                <div className="bg-surface-container-low p-2.5 rounded-lg">
                  <span className="text-on-surface-variant text-[11px] block">
                    First Aid Officer Cert
                  </span>
                  <span className="font-semibold text-primary">
                    St. John Ambulance Kad.
                  </span>
                </div>
                <div className="bg-surface-container-low p-2.5 rounded-lg">
                  <span className="text-on-surface-variant text-[11px] block">
                    Alcohol &amp; Drug Screening
                  </span>
                  <span className="font-semibold text-secondary">
                    Passed (12 Oct 2026)
                  </span>
                </div>
              </div>
            </div>
            {/*  Fuel Allocation Voucher & Maintenance Schedule  */}
            <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
              <div className="flex items-center justify-between pb-space-sm mb-space-sm">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    Bursary Fuel Vouchers &amp; KASTLEA Logs
                  </h3>
                  <span className="font-body-sm text-[11px] text-on-surface-variant">
                    Kaduna State Transport Authority Inspection Cycle
                  </span>
                </div>
                <span className="material-symbols-outlined text-outline text-[20px]">
                  local_gas_station
                </span>
              </div>
              <div className="space-y-space-xs">
                {/*  Voucher Item 1  */}
                <div className="p-2.5 rounded-lg bg-surface-container-low flex items-center justify-between">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-8 h-8 rounded bg-surface-container-high flex items-center justify-center text-primary font-bold text-[12px]">
                      B02
                    </div>
                    <div>
                      <div className="font-headline-sm text-[12px] text-primary">
                        Diesel Quota • Bus 02 (Toyota Coaster)
                      </div>
                      <div className="text-[11px] text-on-surface-variant">
                        TotalEnergies Station, Independence Way
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-primary text-[13px]">
                      ₦45,000
                    </div>
                    <span className="text-[10px] text-secondary font-medium">
                      Bursary Cleared
                    </span>
                  </div>
                </div>
                {/*  Voucher Item 2  */}
                <div className="p-2.5 rounded-lg bg-surface-container-low flex items-center justify-between">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-8 h-8 rounded bg-surface-container-high flex items-center justify-center text-primary font-bold text-[12px]">
                      B06
                    </div>
                    <div>
                      <div className="font-headline-sm text-[12px] text-primary">
                        Diesel Quota • Bus 06 (Toyota HiAce)
                      </div>
                      <div className="text-[11px] text-on-surface-variant">
                        NNPC Mega Station, Kawo
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-primary text-[13px]">
                      ₦32,000
                    </div>
                    <span className="text-[10px] text-secondary font-medium">
                      Bursary Cleared
                    </span>
                  </div>
                </div>
                {/*  Safety Inspection Certificate Banner  */}
                <div className="p-2.5 rounded-lg bg-secondary-fixed/40 flex items-center justify-between mt-space-sm">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-secondary text-[18px]">
                      verified_user
                    </span>
                    <div className="text-[11px]">
                      <span className="font-semibold text-primary block">
                        KASTLEA Roadworthiness Certificate
                      </span>
                      <span className="text-on-surface-variant">
                        All 14 Buses Cleared • Next Inspection Dec 2026
                      </span>
                    </div>
                  </div>
                  <button
                    className="text-secondary font-label-sm text-label-sm font-semibold hover:underline"
                    type="button"
                  >
                    View Certs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
