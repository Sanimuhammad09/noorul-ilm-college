import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/admin/inventory-assets-procurement")(
  {
    component: InventoryAssetsProcurement,
  },
);

function InventoryAssetsProcurement() {
  return (
    <main className="w-full pt-16 px-space-lg py-space-lg flex-1 bg-surface">
      <div className="flex flex-col w-full space-y-space-lg">
        {/*  Breadcrumb & Header Bar  */}
        <div className="flex flex-col gap-space-sm">
          <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
            <span>Operations</span>
            <span className="material-symbols-outlined text-[14px] text-outline">
              chevron_right
            </span>
            <span>Inventory &amp; Asset Management</span>
            <span className="material-symbols-outlined text-[14px] text-outline">
              chevron_right
            </span>
            <span className="text-primary font-semibold">
              Fixed Assets &amp; Consumables Ledger
            </span>
          </div>
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md pt-space-xs">
            <div className="space-y-1 max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  Inventory, Assets &amp; Procurement
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                  Kaduna Campus • FY 2026/27
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Centralized tracking of educational equipment, science
                laboratory apparatus, ICT computer terminals, classroom
                furniture, stationery stores, and institutional procurement
                cycles.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-space-xs shrink-0">
              <button
                className="flex items-center gap-1.5 px-3 py-2 bg-surface-container-lowest text-on-surface hover:bg-surface-container-high rounded-lg font-label-md text-label-md shadow-sm transition-all"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px] text-secondary">
                  history_edu
                </span>
                <span>Stock Voucher</span>
              </button>
              <button
                className="flex items-center gap-1.5 px-3 py-2 bg-surface-container-lowest text-on-surface hover:bg-surface-container-high rounded-lg font-label-md text-label-md shadow-sm transition-all"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px] text-primary">
                  post_add
                </span>
                <span>Requisition</span>
              </button>
              <button
                className="flex items-center gap-1.5 px-3 py-2 bg-surface-container-lowest text-on-surface hover:bg-surface-container-high rounded-lg font-label-md text-label-md shadow-sm transition-all"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px] text-tertiary-container">
                  calculate
                </span>
                <span>Depreciation Audit</span>
              </button>
              <button
                className="flex items-center gap-1.5 px-4 py-2 bg-primary text-on-primary hover:bg-primary-container rounded-lg font-label-md text-label-md shadow-sm transition-all"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">
                  add_box
                </span>
                <span>Register New Asset</span>
              </button>
            </div>
          </div>
        </div>
        {/*  KPI Metrics Grid (4-Cards)  */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">
          {/*  Card 1  */}
          <div className="relative overflow-hidden bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                  Total Valuation of Tracked Assets
                </span>
                <div className="font-metric-lg text-metric-lg text-primary tracking-tight">
                  ₦148,250,000
                </div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[22px]">
                  inventory_2
                </span>
              </div>
            </div>
            <div className="pt-space-md flex items-center justify-between font-label-sm text-label-sm">
              <span className="text-on-surface-variant">
                Over 4,820 Cataloged Inventory Units
              </span>
              <span className="text-secondary font-semibold flex items-center gap-0.5">
                <span className="material-symbols-outlined text-[14px]">
                  trending_up
                </span>{" "}
                +3.8%
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary"></div>
          </div>
          {/*  Card 2  */}
          <div className="relative overflow-hidden bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                  Low Stock Consumables
                </span>
                <div className="font-metric-lg text-metric-lg text-tertiary-container tracking-tight">
                  6 Items Critical
                </div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed-variant shrink-0">
                <span className="material-symbols-outlined text-[22px]">
                  warning
                </span>
              </div>
            </div>
            <div className="pt-space-md flex items-center justify-between font-label-sm text-label-sm">
              <span className="text-on-surface-variant truncate">
                Exam Answer Booklets &amp; Lab Reagents
              </span>
              <span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-bold text-[10px]">
                Action Req.
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-tertiary-container"></div>
          </div>
          {/*  Card 3  */}
          <div className="relative overflow-hidden bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                  Active Equipment Loans
                </span>
                <div className="font-metric-lg text-metric-lg text-secondary tracking-tight">
                  42 Projectors &amp; PCs
                </div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center text-on-secondary-container shrink-0">
                <span className="material-symbols-outlined text-[22px]">
                  devices
                </span>
              </div>
            </div>
            <div className="pt-space-md flex items-center justify-between font-label-sm text-label-sm">
              <span className="text-on-surface-variant">
                Checked out to Faculty Departments
              </span>
              <span className="text-on-surface-variant font-medium">
                100% Signed
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary"></div>
          </div>
          {/*  Card 4  */}
          <div className="relative overflow-hidden bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                  Pending Requisitions
                </span>
                <div className="font-metric-lg text-metric-lg text-primary tracking-tight">
                  ₦2,450,000
                </div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[22px]">
                  pending_actions
                </span>
              </div>
            </div>
            <div className="pt-space-md flex items-center justify-between font-label-sm text-label-sm">
              <span className="text-on-surface-variant">
                3 Dockets Awaiting Bursary &amp; Principal
              </span>
              <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-semibold text-[10px]">
                Review
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary-container"></div>
          </div>
        </div>
        {/*  Visual Asset Showcase & Facilities Banner  */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-md">
          <div className="relative h-44 rounded-xl overflow-hidden shadow-sm flex flex-col justify-end p-space-md group">
            <img
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              data-alt="Modern high school computer science laboratory with neat rows of desktop monitors, clean blue desks, ambient ceiling strip lighting, in Kaduna Nigeria Noorul Ilm school."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ-X9Ixpu3LXQ1537X77-SboHzgXhHSnDBnZY-NyyQ09pWAYSjtdxB4bWmhloYAYMhzS_SD9KWYT-eTYmCkDrg0jBLaSEsDAxiY48NUISHZYkdL_0XEu-hhpaQYJXrF3MRMyE_brtCcd9HkT8LLCIG15yf2Nj-RvXkP8ujUCMuhdyovAXyBGlQKO6yC5unn-clalbfq1ytZiLhmdrjargKFzl-kXrJFMn56bWX8mzOksINB8mHk4mqPg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent"></div>
            <div className="relative z-10 flex items-center justify-between text-on-primary">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary-fixed">
                  ICT &amp; Multimedia Hub
                </span>
                <div className="font-headline-sm text-headline-sm font-bold">
                  Lab 1 &amp; Lab 2 Computing Terminal Fleet
                </div>
              </div>
              <span className="material-symbols-outlined text-[28px] opacity-80">
                computer
              </span>
            </div>
          </div>
          <div className="relative h-44 rounded-xl overflow-hidden shadow-sm flex flex-col justify-end p-space-md group">
            <img
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              data-alt="Advanced secondary school science laboratory with glass apparatus, compound microscopes, specimen shelves, and clean chemical workstations in Kaduna Nigeria."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEcvLDd2vMwV0Jp5Ucm7nFGonCmaiHJ3JkyKKkeTdGgJcfpBxLcg42RpaZzTTtm0KUXU8PUhisaH85YE-2elacXr-48SR5W_lUo_FZyaHF3ysNImD7r5LBc7iU5p06bmYaBAv2yRzpXkq7poY6k1dZLfTZzHJo5duvlII37BWn2yxshmOBnCtUNh5T07BdcNyLHytcIq1mGwybXBL3RHYVLc5MysSxTNvKWN89Ez7h_RN0FuxdL_ZAxw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/60 to-transparent"></div>
            <div className="relative z-10 flex items-center justify-between text-on-primary">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed">
                  Science Complex
                </span>
                <div className="font-headline-sm text-headline-sm font-bold">
                  Senior Biology &amp; Chemistry Apparatus Vault
                </div>
              </div>
              <span className="material-symbols-outlined text-[28px] opacity-80">
                science
              </span>
            </div>
          </div>
          <div className="relative h-44 rounded-xl overflow-hidden shadow-sm flex flex-col justify-end p-space-md group">
            <img
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              data-alt="Organized school logistics warehouse storage with neat cardboard boxes, stationery racks, and sports gear in Noorul Ilm International School Kaduna."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuANhMVboh8awBKmGtxqnhqDFTMOhR0IE66a4pvlnX7txXFv9algOHLFJZV3sl80VRwFpS7AIF-AO-OJjZ5aRXnneQ5oIm5ZbnZ5Nld6Dqmil_VOYC61i7hLlmkIzpwEo6d_PTOA1oXel1ReMZoWp8QuI_1GCED-E26MzS7XRnMeGyIXapa5-9kWqICrc5DUyJR2p0v3YkpbClOHIdmCXQ04N69zou2wemULhoWtWCNqCGijfGPBhOMF8g"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-tertiary-container/95 via-tertiary-container/60 to-transparent"></div>
            <div className="relative z-10 flex items-center justify-between text-on-primary">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-tertiary-fixed">
                  Central Logistics
                </span>
                <div className="font-headline-sm text-headline-sm font-bold">
                  General Stationery &amp; Solar Battery Reserve
                </div>
              </div>
              <span className="material-symbols-outlined text-[28px] opacity-80">
                warehouse
              </span>
            </div>
          </div>
        </div>
        {/*  Main Content 12-Column Split: 7-Col Left & 5-Col Right  */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
          {/*  Left Column (7 Columns)  */}
          <div className="xl:col-span-7 flex flex-col space-y-space-lg">
            {/*  Institutional Asset Directory Table Card  */}
            <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col space-y-space-md">
              {/*  Header Controls  */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                <div>
                  <h2 className="font-headline-md text-headline-md text-primary tracking-tight">
                    Institutional Asset Directory
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Live register with barcode scanning, depreciation
                    amortization, and real-time physical condition logs
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="p-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors"
                    title="Export CSV/Excel"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      download
                    </span>
                  </button>
                  <button
                    className="p-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors"
                    title="Scan Barcode / QR"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      qr_code_scanner
                    </span>
                  </button>
                </div>
              </div>
              {/*  Filter Segmented Tabs & Search Tray  */}
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-space-sm bg-surface-container-low p-1.5 rounded-lg">
                <div className="flex items-center gap-1 overflow-x-auto text-body-sm">
                  <button className="px-3 py-1.5 rounded bg-surface-container-lowest text-primary font-label-sm text-label-sm font-semibold shadow-sm shrink-0">
                    All Categories (4,820)
                  </button>
                  <button className="px-3 py-1.5 rounded text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm font-medium shrink-0">
                    ICT &amp; Computing
                  </button>
                  <button className="px-3 py-1.5 rounded text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm font-medium shrink-0">
                    Science Labs
                  </button>
                  <button className="px-3 py-1.5 rounded text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm font-medium shrink-0">
                    Furniture
                  </button>
                  <button className="px-3 py-1.5 rounded text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm font-medium shrink-0">
                    Stationery
                  </button>
                </div>
                <div className="relative w-full md:w-48">
                  <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-outline text-[16px]">
                    filter_list
                  </span>
                  <input
                    className="w-full pl-8 pr-3 py-1 rounded bg-surface-container-lowest font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none"
                    placeholder="Filter tags..."
                    type="text"
                  />
                </div>
              </div>
              {/*  Table Container  */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-[11px] uppercase tracking-wider">
                      <th className="py-2.5 px-3 rounded-l-lg">
                        Asset Tag &amp; Barcode
                      </th>
                      <th className="py-2.5 px-3">Location / Allocation</th>
                      <th className="py-2.5 px-3">Qty &amp; Condition</th>
                      <th className="py-2.5 px-3">Cost &amp; Net Value</th>
                      <th className="py-2.5 px-3 text-right rounded-r-lg">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-body-sm text-body-sm divide-y-0">
                    {/*  Row 1  */}
                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                            <span className="material-symbols-outlined text-[18px]">
                              desktop_windows
                            </span>
                          </div>
                          <div>
                            <div className="font-label-md text-label-md text-on-surface font-semibold">
                              HP ProDesk Core i5 Mini PC
                            </div>
                            <div className="font-label-sm text-[11px] text-outline font-mono">
                              NIIS-ICT-2024-042 • Barcode: #892104
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <div className="font-body-md text-on-surface font-medium">
                          ICT Lab 1 (First Floor)
                        </div>
                        <div className="font-label-sm text-[11px] text-on-surface-variant">
                          Allocated to Malam I. Danjuma
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-1.5">
                          <span className="font-semibold text-on-surface">
                            12 Units
                          </span>
                        </div>
                        <span className="inline-block mt-0.5 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[10px] font-bold">
                          Excellent
                        </span>
                      </td>
                      <td className="py-3 px-3">
                        <div className="font-semibold text-on-surface">
                          ₦350,000 / unit
                        </div>
                        <div className="font-label-sm text-[11px] text-on-surface-variant">
                          NBV: ₦280,000 (10% SL)
                        </div>
                      </td>
                      <td className="py-3 px-3 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            className="p-1 rounded text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors"
                            title="Transfer Location"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              swap_horiz
                            </span>
                          </button>
                          <button
                            className="p-1 rounded text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors"
                            title="Maintenance Log"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              build
                            </span>
                          </button>
                          <button
                            className="p-1 rounded text-on-surface-variant hover:text-error hover:bg-surface-container transition-colors"
                            title="Decommission"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              delete_sweep
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/*  Row 2  */}
                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-secondary shrink-0">
                            <span className="material-symbols-outlined text-[18px]">
                              biotech
                            </span>
                          </div>
                          <div>
                            <div className="font-label-md text-label-md text-on-surface font-semibold">
                              Compound Microscope (Olympus)
                            </div>
                            <div className="font-label-sm text-[11px] text-outline font-mono">
                              NIIS-SCI-2025-018 • Barcode: #441902
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <div className="font-body-md text-on-surface font-medium">
                          Senior Biology Lab
                        </div>
                        <div className="font-label-sm text-[11px] text-on-surface-variant">
                          Dr. Fatima Al-Hassan (HOD)
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-1.5">
                          <span className="font-semibold text-on-surface">
                            24 Units
                          </span>
                        </div>
                        <span className="inline-block mt-0.5 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[10px] font-bold">
                          Calibrated
                        </span>
                      </td>
                      <td className="py-3 px-3">
                        <div className="font-semibold text-on-surface">
                          ₦185,000 / unit
                        </div>
                        <div className="font-label-sm text-[11px] text-on-surface-variant">
                          NBV: ₦166,500 (10% SL)
                        </div>
                      </td>
                      <td className="py-3 px-3 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            className="p-1 rounded text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors"
                            title="Transfer Location"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              swap_horiz
                            </span>
                          </button>
                          <button
                            className="p-1 rounded text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors"
                            title="Maintenance Log"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              build
                            </span>
                          </button>
                          <button
                            className="p-1 rounded text-on-surface-variant hover:text-error hover:bg-surface-container transition-colors"
                            title="Decommission"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              delete_sweep
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/*  Row 3  */}
                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary-container shrink-0">
                            <span className="material-symbols-outlined text-[18px]">
                              chair_alt
                            </span>
                          </div>
                          <div>
                            <div className="font-label-md text-label-md text-on-surface font-semibold">
                              Student Wooden Desk-Chair Set
                            </div>
                            <div className="font-label-sm text-[11px] text-outline font-mono">
                              NIIS-FURN-2023-110 • Barcode: #302198
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <div className="font-body-md text-on-surface font-medium">
                          Primary Block S-12
                        </div>
                        <div className="font-label-sm text-[11px] text-on-surface-variant">
                          Class Mistress Aisha Garba
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-1.5">
                          <span className="font-semibold text-on-surface">
                            85 Units
                          </span>
                        </div>
                        <span className="inline-block mt-0.5 px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-[10px] font-semibold">
                          Good Condition
                        </span>
                      </td>
                      <td className="py-3 px-3">
                        <div className="font-semibold text-on-surface">
                          ₦45,000 / unit
                        </div>
                        <div className="font-label-sm text-[11px] text-on-surface-variant">
                          NBV: ₦31,500 (15% SL)
                        </div>
                      </td>
                      <td className="py-3 px-3 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            className="p-1 rounded text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors"
                            title="Transfer Location"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              swap_horiz
                            </span>
                          </button>
                          <button
                            className="p-1 rounded text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors"
                            title="Maintenance Log"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              build
                            </span>
                          </button>
                          <button
                            className="p-1 rounded text-on-surface-variant hover:text-error hover:bg-surface-container transition-colors"
                            title="Decommission"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              delete_sweep
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    {/*  Row 4  */}
                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed-variant shrink-0">
                            <span className="material-symbols-outlined text-[18px]">
                              solar_power
                            </span>
                          </div>
                          <div>
                            <div className="font-label-md text-label-md text-on-surface font-semibold">
                              Inverter 10kVA Pure Sine Solar
                            </div>
                            <div className="font-label-sm text-[11px] text-outline font-mono">
                              NIIS-SP-2026-005 • Barcode: #990142
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <div className="font-body-md text-on-surface font-medium">
                          Administration Power Hub
                        </div>
                        <div className="font-label-sm text-[11px] text-on-surface-variant">
                          Works Dept • Engr. Yusuf
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-1.5">
                          <span className="font-semibold text-on-surface">
                            2 Units
                          </span>
                        </div>
                        <span className="inline-block mt-0.5 px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-[10px] font-bold">
                          Under Maintenance
                        </span>
                      </td>
                      <td className="py-3 px-3">
                        <div className="font-semibold text-on-surface">
                          ₦1,650,000 / unit
                        </div>
                        <div className="font-label-sm text-[11px] text-on-surface-variant">
                          NBV: ₦1,550,000 (Warranty)
                        </div>
                      </td>
                      <td className="py-3 px-3 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            className="p-1 rounded text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors"
                            title="Transfer Location"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              swap_horiz
                            </span>
                          </button>
                          <button
                            className="p-1 rounded text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors"
                            title="Maintenance Log"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              build
                            </span>
                          </button>
                          <button
                            className="p-1 rounded text-on-surface-variant hover:text-error hover:bg-surface-container transition-colors"
                            title="Decommission"
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              delete_sweep
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/*  Table Pagination and Summary  */}
              <div className="flex items-center justify-between pt-space-xs font-label-sm text-label-sm text-on-surface-variant">
                <span>Showing 4 of 4,820 recorded assets across 24 wings</span>
                <div className="flex items-center gap-1">
                  <button
                    className="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high transition-colors"
                    disabled
                  >
                    Prev
                  </button>
                  <span className="px-2 font-semibold text-primary">1</span>
                  <button className="px-2 py-1 rounded hover:bg-surface-container transition-colors">
                    2
                  </button>
                  <button className="px-2 py-1 rounded hover:bg-surface-container transition-colors">
                    3
                  </button>
                  <button className="px-2 py-1 rounded hover:bg-surface-container transition-colors">
                    ...
                  </button>
                  <button className="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high transition-colors">
                    Next
                  </button>
                </div>
              </div>
            </div>
            {/*  Recent Stock Movement & Issuance Vouchers Card  */}
            <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col space-y-space-md">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <h3 className="font-headline-sm text-headline-sm text-primary tracking-tight">
                    Recent Stock Movement &amp; Issuance Vouchers
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Audit trails countersigned by Malam Kabir Sani (Central
                    Inventory Custodian)
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[11px] font-bold">
                  All Signed &amp; Dispatched
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                {/*  Movement Card 1  */}
                <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[18px]">
                          receipt_long
                        </span>
                      </div>
                      <div>
                        <span className="font-label-sm text-[11px] text-outline uppercase font-mono">
                          VOUCHER #SIV-2026-104
                        </span>
                        <div className="font-label-md text-label-md font-semibold text-on-surface">
                          50 Reams A4 Bond Paper (75gsm)
                        </div>
                      </div>
                    </div>
                    <span className="font-label-sm text-[11px] text-on-surface-variant">
                      Today, 09:15 AM
                    </span>
                  </div>
                  <div className="space-y-1 font-body-sm text-body-sm text-on-surface-variant">
                    <div className="flex justify-between">
                      <span>Recipient:</span>
                      <span className="font-medium text-on-surface">
                        Examination &amp; Records Unit
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Received By:</span>
                      <span className="font-medium text-on-surface">
                        Mrs. Grace Danladi
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Authorized Signatory:</span>
                      <span className="font-medium text-secondary">
                        Malam Kabir Sani (Inventory Officer)
                      </span>
                    </div>
                  </div>
                  <div className="pt-2 flex items-center justify-between text-label-sm">
                    <span className="text-outline">
                      Purpose: Mock Examination Printing
                    </span>
                    <span className="text-primary font-semibold hover:underline cursor-pointer">
                      View PDF Voucher
                    </span>
                  </div>
                </div>
                {/*  Movement Card 2  */}
                <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col justify-between space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[18px]">
                          receipt_long
                        </span>
                      </div>
                      <div>
                        <span className="font-label-sm text-[11px] text-outline font-mono">
                          VOUCHER #SIV-2026-101
                        </span>
                        <div className="font-label-md text-label-md font-semibold text-on-surface">
                          12 Borosilicate Glass Beakers (250ml)
                        </div>
                      </div>
                    </div>
                    <span className="font-label-sm text-[11px] text-on-surface-variant">
                      Yesterday, 02:40 PM
                    </span>
                  </div>
                  <div className="space-y-1 font-body-sm text-body-sm text-on-surface-variant">
                    <div className="flex justify-between">
                      <span>Recipient:</span>
                      <span className="font-medium text-on-surface">
                        Chemistry Laboratory
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Received By:</span>
                      <span className="font-medium text-on-surface">
                        Mr. O. Babatunde
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Authorized Signatory:</span>
                      <span className="font-medium text-secondary">
                        Malam Kabir Sani (Inventory Officer)
                      </span>
                    </div>
                  </div>
                  <div className="pt-2 flex items-center justify-between text-label-sm">
                    <span className="text-outline">
                      Purpose: SS3 Practical Titration Prep
                    </span>
                    <span className="text-primary font-semibold hover:underline cursor-pointer">
                      View PDF Voucher
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  Right Column (5 Columns)  */}
          <div className="xl:col-span-5 flex flex-col space-y-space-lg">
            {/*  Procurement Requisition & Vendor Approval Pipeline  */}
            <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col space-y-space-md">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-headline-md text-headline-md text-primary tracking-tight">
                    Procurement Pipeline
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Requisitions awaiting multi-tier bursary &amp;
                    administrative approval
                  </p>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-semibold">
                  3 Active Dockets
                </span>
              </div>
              {/*  Requisition Item 1  */}
              <div className="p-space-md rounded-xl bg-surface-container-low space-y-space-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-label-sm text-[11px] text-outline font-mono">
                      DOCKET #PR-2026-088
                    </span>
                    <h4 className="font-label-lg text-label-lg font-bold text-on-surface">
                      500 Copies WAEC Science Practice Manuals
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Vendor: Ahmadu Bello University Press • Zaria Road, Kaduna
                    </p>
                  </div>
                  <span className="font-headline-sm text-headline-sm font-bold text-primary">
                    ₦1,250,000
                  </span>
                </div>
                <div className="flex items-center gap-2 py-1">
                  <span className="w-2 h-2 rounded-full bg-tertiary-container"></span>
                  <span className="font-label-sm text-label-sm font-medium text-tertiary-container">
                    Bursar Reviewed • Awaiting Dr. Aminu Bello Sign-off
                  </span>
                </div>
                {/*  Approval Workflow Actions  */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="font-label-sm text-[11px] text-outline">
                    Dept: Academic Affairs
                  </span>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 rounded-lg bg-surface-container text-error hover:bg-error-container hover:text-on-error-container font-label-sm text-label-sm font-semibold transition-colors">
                      Reject
                    </button>
                    <button className="px-4 py-1.5 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-label-sm text-label-sm font-semibold shadow-sm transition-colors">
                      Authorize PO
                    </button>
                  </div>
                </div>
              </div>
              {/*  Requisition Item 2  */}
              <div className="p-space-md rounded-xl bg-surface-container-low space-y-space-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-label-sm text-[11px] text-outline font-mono">
                      DOCKET #PR-2026-089
                    </span>
                    <h4 className="font-label-lg text-label-lg font-bold text-on-surface">
                      Chemistry Reagents (HCl, Litmus, NaOH)
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Vendor: Kaduna Scientific Supplies Ltd • Ahmadu Bello Way
                    </p>
                  </div>
                  <span className="font-headline-sm text-headline-sm font-bold text-primary">
                    ₦380,000
                  </span>
                </div>
                <div className="flex items-center gap-2 py-1">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  <span className="font-label-sm text-label-sm font-medium text-secondary">
                    Approved • PO Dispatched to Vendor
                  </span>
                </div>
                <div className="pt-2 flex items-center justify-between text-label-sm">
                  <span className="text-outline">
                    Expected Delivery: 19 Oct 2026
                  </span>
                  <span className="text-primary font-semibold hover:underline cursor-pointer">
                    Track Delivery
                  </span>
                </div>
              </div>
            </div>
            {/*  Low Stock Restock Threshold Warning  */}
            <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col space-y-space-md">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <h3 className="font-headline-sm text-headline-sm text-primary tracking-tight">
                    Consumables Restock Warning
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Critical safety reserves monitored against active term
                    consumption
                  </p>
                </div>
                <span className="material-symbols-outlined text-tertiary-container">
                  crisis_alert
                </span>
              </div>
              <div className="space-y-space-md">
                {/*  Threshold Item 1  */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between font-label-sm text-label-sm">
                    <span className="font-semibold text-on-surface">
                      Official Exam Answer Booklets
                    </span>
                    <span className="text-tertiary-container font-bold">
                      120 / 1,000 (Critical 12%)
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden">
                    <div className="bg-tertiary-container h-full rounded-full w-[12%]"></div>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-on-surface-variant">
                    <span>Threshold: Min 500 copies</span>
                    <span className="text-error font-semibold">
                      Immediate Order Required
                    </span>
                  </div>
                </div>
                {/*  Threshold Item 2  */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between font-label-sm text-label-sm">
                    <span className="font-semibold text-on-surface">
                      Board Markers &amp; Whiteboard Cleaners
                    </span>
                    <span className="text-primary font-bold">
                      35 / 100 (Warning 35%)
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full w-[35%]"></div>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-on-surface-variant">
                    <span>Threshold: Min 40 sets</span>
                    <span className="text-on-surface-variant">
                      Restock Scheduled
                    </span>
                  </div>
                </div>
                {/*  Threshold Item 3  */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between font-label-sm text-label-sm">
                    <span className="font-semibold text-on-surface">
                      First Aid Antiseptic Savlon (500ml)
                    </span>
                    <span className="text-secondary font-bold">
                      15 / 50 (30%)
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden">
                    <div className="bg-secondary h-full rounded-full w-[30%]"></div>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-on-surface-variant">
                    <span>Threshold: Min 20 bottles</span>
                    <span className="text-on-surface-variant">
                      Reorder Queued in Docket #PR-091
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*  Supplier & Vendor Quality Directory  */}
            <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col space-y-space-md">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary tracking-tight">
                    Verified Educational Vendors
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Kaduna State Tax (KADIRS) &amp; CAC Compliant Partners
                  </p>
                </div>
                <button className="text-primary font-label-sm text-label-sm font-semibold hover:underline">
                  View All (18)
                </button>
              </div>
              <div className="space-y-space-sm">
                {/*  Vendor 1  */}
                <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center font-bold text-primary text-[14px]">
                      ABU
                    </div>
                    <div>
                      <div className="font-label-md text-label-md font-semibold text-on-surface">
                        Ahmadu Bello Univ. Press
                      </div>
                      <div className="font-body-sm text-[11px] text-on-surface-variant">
                        Educational Publishing • TIN: 10482910-001
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-label-sm text-label-sm font-bold text-secondary flex items-center justify-end gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        verified
                      </span>{" "}
                      98.4%
                    </div>
                    <span className="font-label-sm text-[10px] text-on-surface-variant">
                      On-time SLA
                    </span>
                  </div>
                </div>
                {/*  Vendor 2  */}
                <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center font-bold text-primary text-[14px]">
                      KSS
                    </div>
                    <div>
                      <div className="font-label-md text-label-md font-semibold text-on-surface">
                        Kaduna Scientific Supplies Ltd
                      </div>
                      <div className="font-body-sm text-[11px] text-on-surface-variant">
                        Lab Reagents &amp; Glassware • KADIRS Valid
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-label-sm text-label-sm font-bold text-secondary flex items-center justify-end gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        verified
                      </span>{" "}
                      94.0%
                    </div>
                    <span className="font-label-sm text-[10px] text-on-surface-variant">
                      On-time SLA
                    </span>
                  </div>
                </div>
                {/*  Vendor 3  */}
                <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center font-bold text-primary text-[14px]">
                      ASE
                    </div>
                    <div>
                      <div className="font-label-md text-label-md font-semibold text-on-surface">
                        Arewa Solar Energy &amp; Power
                      </div>
                      <div className="font-body-sm text-[11px] text-on-surface-variant">
                        Power Inverters &amp; Batteries • Active Warranty
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-label-sm text-label-sm font-bold text-secondary flex items-center justify-end gap-1">
                      <span className="material-symbols-outlined text-[14px]">
                        verified
                      </span>{" "}
                      96.5%
                    </div>
                    <span className="font-label-sm text-[10px] text-on-surface-variant">
                      On-time SLA
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
