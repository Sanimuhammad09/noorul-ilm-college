import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(
  "/admin/staff-payroll-remittance-ledger",
)({
  component: StaffPayrollRemittanceLedger,
});

function StaffPayrollRemittanceLedger() {
  return (
    <main className="w-full pt-16 px-space-lg py-space-lg flex-1 bg-surface">
      <div className="flex flex-col w-full space-y-space-lg pb-space-xl">
        {/*  Header & Context Banner  */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
          <div className="space-y-space-xs max-w-3xl">
            <div className="flex flex-wrap items-center gap-space-sm">
              <span className="font-headline-lg text-headline-lg text-primary">
                Staff Payroll, Compensation &amp; Statutory Remittances
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container/60 text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wider">
                <span className="material-symbols-outlined text-[14px]">
                  verified
                </span>
                KADIRS PAYE &amp; PenCom Compliant
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant">
              End-to-end faculty payroll processing, gross salary computation,
              allowances, pension contributions, Kaduna State Internal Revenue
              Service PAYE tax deductions, and bank disbursement schedules.
            </p>
          </div>
          {/*  Quick Actions  */}
          <div className="flex flex-wrap items-center gap-space-sm shrink-0">
            <button
              className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-surface-container hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-colors shadow-sm"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">
                receipt_long
              </span>
              <span>Tax &amp; Pension Remittance</span>
            </button>
            <button
              className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-surface-container hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-colors shadow-sm"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">
                sim_card_download
              </span>
              <span>Export .CSV</span>
            </button>
            <button
              className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md transition-all shadow-md hover:shadow-lg"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">
                account_balance_wallet
              </span>
              <span>Process October 2026 Payroll</span>
            </button>
          </div>
        </div>
        {/*  Summary Metric Grid (4 Cards)  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
          {/*  Card 1  */}
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                  Total Gross Payroll (Oct 2026)
                </span>
                <div className="font-metric-lg text-metric-lg text-primary font-bold">
                  ₦18,450,000
                </div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[22px]">
                  payments
                </span>
              </div>
            </div>
            <div className="mt-space-md pt-space-xs flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
              <span>120 Active Staff Members</span>
              <span className="text-secondary font-semibold">
                86 Teaching • 34 Support
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary/20">
              <div className="bg-primary h-full w-[100%]"></div>
            </div>
          </div>
          {/*  Card 2  */}
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                  Net Disbursable Salaries
                </span>
                <div className="font-metric-lg text-metric-lg text-secondary font-bold">
                  ₦15,682,500
                </div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-secondary-container/40 flex items-center justify-center text-on-secondary-container shrink-0">
                <span className="material-symbols-outlined text-[22px]">
                  check_circle
                </span>
              </div>
            </div>
            <div className="mt-space-md pt-space-xs flex items-center justify-between font-label-sm text-label-sm">
              <span className="text-on-surface-variant">
                Scheduled for 25th Oct
              </span>
              <span className="text-error font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-error animate-pulse"></span>
                Principal Sign-off Pending
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary-fixed">
              <div className="bg-secondary h-full w-[85%]"></div>
            </div>
          </div>
          {/*  Card 3  */}
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                  Kaduna State PAYE Tax
                </span>
                <div className="font-metric-lg text-metric-lg text-on-surface font-bold">
                  ₦1,476,000
                </div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-tertiary-container shrink-0">
                <span className="material-symbols-outlined text-[22px]">
                  assured_workload
                </span>
              </div>
            </div>
            <div className="mt-space-md pt-space-xs flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
              <span className="flex items-center gap-1 text-secondary">
                <span className="material-symbols-outlined text-[14px]">
                  done_all
                </span>{" "}
                KADIRS Portal Synced
              </span>
              <span className="font-semibold text-outline">
                8% Effective Rate
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-surface-container-high">
              <div className="bg-tertiary-container h-full w-[8%]"></div>
            </div>
          </div>
          {/*  Card 4  */}
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                  PenCom Pension (8% + 10%)
                </span>
                <div className="font-metric-lg text-metric-lg text-on-surface font-bold">
                  ₦1,291,500
                </div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-[22px]">
                  savings
                </span>
              </div>
            </div>
            <div className="mt-space-md pt-space-xs flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
              <span>Stanbic IBTC &amp; ARM Pension</span>
              <span className="text-primary font-semibold">18% Combined</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-surface-container-high">
              <div className="bg-primary-container h-full w-[7%]"></div>
            </div>
          </div>
        </div>
        {/*  Operational Status Bar / Alert  */}
        <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-space-sm text-on-surface">
          <div className="flex items-center gap-space-sm">
            <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-[18px]">
                verified_user
              </span>
            </div>
            <div>
              <p className="font-label-md text-label-md font-semibold text-primary">
                Pre-Disbursement Statutory Audit Passed
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Tax ID Numbers (TIN) validated for all 120 staff under Kaduna
                State Internal Revenue Code.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-space-sm shrink-0">
            <button
              className="px-space-sm py-1 rounded bg-surface-container hover:bg-surface-variant text-on-surface font-label-sm text-label-sm transition-colors"
              type="button"
            >
              Audit Trail (V-2026.10)
            </button>
            <button
              className="px-space-sm py-1 rounded bg-surface-container hover:bg-surface-variant text-on-surface font-label-sm text-label-sm transition-colors flex items-center gap-1"
              type="button"
            >
              <span className="material-symbols-outlined text-[14px]">
                download
              </span>
              Bulk Payslips (PDF)
            </button>
          </div>
        </div>
        {/*  Main Payroll Ledger Workspace  */}
        <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
          {/*  Filter Bar & Search controls  */}
          <div className="p-space-md space-y-space-md bg-surface-container-lowest">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
              {/*  Segmented Department Tabs  */}
              <div className="flex flex-wrap p-1 bg-surface-container-low rounded-lg gap-1">
                <button className="px-space-md py-1.5 rounded-lg bg-surface-container-lowest font-label-md text-label-md text-primary shadow-sm font-semibold transition-all">
                  All Personnel (120)
                </button>
                <button className="px-space-md py-1.5 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all">
                  Academic Teaching (86)
                </button>
                <button className="px-space-md py-1.5 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all">
                  Administrative &amp; Bursary (14)
                </button>
                <button className="px-space-md py-1.5 rounded-lg font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all">
                  Operations, Fleet &amp; Security (20)
                </button>
              </div>
              {/*  Filter Dropdown & Search  */}
              <div className="flex items-center gap-space-sm">
                <div className="relative w-64 md:w-80">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">
                    search
                  </span>
                  <input
                    className="w-full pl-9 pr-3 py-1.5 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest transition-all"
                    placeholder="Search by name, ID, role, bank..."
                    type="text"
                  />
                </div>
                <button className="p-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface-variant flex items-center justify-center transition-colors">
                  <span className="material-symbols-outlined text-[18px]">
                    tune
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/*  Data Table  */}
          <div className="overflow-x-auto">
            <table className="w-full text-left font-body-sm text-body-sm">
              <thead className="bg-surface-container-low text-on-surface-variant uppercase font-label-sm text-label-sm tracking-wider">
                <tr>
                  <th className="py-3 px-space-md">Staff Member &amp; Role</th>
                  <th className="py-3 px-space-sm text-right">Base Salary</th>
                  <th className="py-3 px-space-sm text-right">Allowances</th>
                  <th className="py-3 px-space-sm text-right">Gross Pay</th>
                  <th className="py-3 px-space-sm text-right">
                    PAYE &amp; PenCom
                  </th>
                  <th className="py-3 px-space-sm text-right">
                    Loans / Thrift
                  </th>
                  <th className="py-3 px-space-sm text-right font-bold text-primary">
                    Net Pay
                  </th>
                  <th className="py-3 px-space-sm">Disbursement Details</th>
                  <th className="py-3 px-space-sm">Status</th>
                  <th className="py-3 px-space-md text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container-low">
                {/*  Row 1  */}
                <tr className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="py-3 px-space-md">
                    <div className="flex items-center gap-space-sm">
                      <img
                        className="w-9 h-9 rounded-full object-cover shrink-0"
                        data-alt="Close up professional portrait of a senior Nigerian male teacher with gentle smile wearing traditional smart attire in classroom Kaduna."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcjBBnmhcrNOtdvAxdfsfHkDq0VlAUx-m9F8mG13VuuBfQ4Hge6ArMJBR10st6ilnXyAqWCYnWMjwAY96YaSw7IEZUGK60T-2DytDR1Jd4wDHJoC26-mT1YDMtsl3S3TsFaQDGCK7SyTn3aDWSVwd-LmEFKyUu50whTVbH_lSVb0sVT3-O07Boh7Y86R-Lb4oCtoTKkeqSzdN09Fz2SFfCYCxDpFZxvBA6Quf3x_s-C4D-x-sM5BoYaA"
                      />
                      <div className="flex flex-col min-w-0">
                        <span className="font-label-md text-label-md text-on-surface font-semibold truncate">
                          Malam Garba Usman
                        </span>
                        <span className="font-body-sm text-body-sm text-outline truncate">
                          NIIS/T-042 • Lead Physics Master (Academic)
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-space-sm text-right font-medium">
                    ₦195,000
                  </td>
                  <td className="py-3 px-space-sm text-right">
                    <div className="flex flex-col">
                      <span className="font-medium text-on-surface">
                        ₦45,000
                      </span>
                      <span className="text-[10px] text-outline">
                        Lab Haz. + Dept Head
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-space-sm text-right font-semibold text-on-surface">
                    ₦240,000
                  </td>
                  <td className="py-3 px-space-sm text-right">
                    <div className="flex flex-col text-error font-medium">
                      <span>
                        -₦19,200{" "}
                        <span className="text-[10px] text-outline">(PAYE)</span>
                      </span>
                      <span>
                        -₦19,200{" "}
                        <span className="text-[10px] text-outline">
                          (8% Pen)
                        </span>
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-space-sm text-right">
                    <span className="inline-flex px-1.5 py-0.5 rounded bg-surface-container text-on-surface text-[11px] font-medium">
                      -₦15,000
                    </span>
                    <div className="text-[10px] text-outline">
                      Staff Thrift Fund
                    </div>
                  </td>
                  <td className="py-3 px-space-sm text-right font-label-md text-label-md text-secondary font-bold">
                    ₦186,600
                  </td>
                  <td className="py-3 px-space-sm">
                    <div className="flex flex-col">
                      <span className="font-medium text-on-surface">
                        GTBank Plc
                      </span>
                      <span className="font-mono text-[11px] text-outline tracking-wider">
                        0148892144
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-space-sm">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container/50 text-on-secondary-container font-label-sm text-[11px] font-semibold">
                      <span className="material-symbols-outlined text-[12px]">
                        done
                      </span>
                      Approved
                    </span>
                  </td>
                  <td className="py-3 px-space-md text-center">
                    <div className="flex items-center justify-center gap-1">
                      <button
                        className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary"
                        title="View Detailed Payslip"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          receipt
                        </span>
                      </button>
                      <button
                        className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary"
                        title="Adjustment Ledger"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          edit_note
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
                {/*  Row 2  */}
                <tr className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="py-3 px-space-md">
                    <div className="flex items-center gap-space-sm">
                      <img
                        className="w-9 h-9 rounded-full object-cover shrink-0"
                        data-alt="Portrait photo of a young female Nigerian educator wearing light hijab and spectacles in administrative office setting Kaduna."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPy9CdCCg_uiUfOVmJY1kmiyuHcRHnTxbpMfK4Rn4f1l3npkLLLP3NQwat1xBNpR4X-VlW5KL0l6CaQ4TMhGiETyMUj2buq24lQrHNwX4fORxJez9B64OcqbOU9CoHDSb_myeWWGB8HEY0bKhRA7KbUq0c_lo3JTIxJMJG60oTuJ8rrwGmr0YYjYo81nD7thw3Pom6hr8Q-69UqZqLstw2V8o9YM6Ha1PwqYiJQ-6OWs_BdQsP8C_xBA"
                      />
                      <div className="flex flex-col min-w-0">
                        <span className="font-label-md text-label-md text-on-surface font-semibold truncate">
                          Hajiya Fatima Aliyu
                        </span>
                        <span className="font-body-sm text-body-sm text-outline truncate">
                          NIIS/T-089 • Head of Arabic &amp; Islamic Studies
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-space-sm text-right font-medium">
                    ₦210,000
                  </td>
                  <td className="py-3 px-space-sm text-right">
                    <div className="flex flex-col">
                      <span className="font-medium text-on-surface">
                        ₦50,000
                      </span>
                      <span className="text-[10px] text-outline">
                        Tahfeez Allowance
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-space-sm text-right font-semibold text-on-surface">
                    ₦260,000
                  </td>
                  <td className="py-3 px-space-sm text-right">
                    <div className="flex flex-col text-error font-medium">
                      <span>
                        -₦20,800{" "}
                        <span className="text-[10px] text-outline">(PAYE)</span>
                      </span>
                      <span>
                        -₦20,800{" "}
                        <span className="text-[10px] text-outline">
                          (8% Pen)
                        </span>
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-space-sm text-right">
                    <span className="text-[11px] text-outline">-</span>
                  </td>
                  <td className="py-3 px-space-sm text-right font-label-md text-label-md text-secondary font-bold">
                    ₦218,400
                  </td>
                  <td className="py-3 px-space-sm">
                    <div className="flex flex-col">
                      <span className="font-medium text-on-surface">
                        Jaiz Bank Plc
                      </span>
                      <span className="font-mono text-[11px] text-outline tracking-wider">
                        0003921820
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-space-sm">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container/50 text-on-secondary-container font-label-sm text-[11px] font-semibold">
                      <span className="material-symbols-outlined text-[12px]">
                        done
                      </span>
                      Approved
                    </span>
                  </td>
                  <td className="py-3 px-space-md text-center">
                    <div className="flex items-center justify-center gap-1">
                      <button
                        className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary"
                        title="View Detailed Payslip"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          receipt
                        </span>
                      </button>
                      <button
                        className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary"
                        title="Adjustment Ledger"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          edit_note
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
                {/*  Row 3  */}
                <tr className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="py-3 px-space-md">
                    <div className="flex items-center gap-space-sm">
                      <img
                        className="w-9 h-9 rounded-full object-cover shrink-0"
                        data-alt="Portrait of middle-aged African accountant wearing blue corporate shirt in front of accounting monitors and files."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFQRQZVrmygtWHjmPRjKiql3b8cX6JHuBneoPWTcZrd8MgATp4kf1ktX8Xa4gze5hV85AL5d6UDo8mLXjUmz8cAEP0NN5YaO6Sti8xkJeiBwNgXNpHO3fXyTjKSb1oLxPPjzCsfNoOqP6ftwCTEEraErJOCeczHKYWJz6Q8_Kd16zK3RMJdFwMjEC5mYUFMRWEVa8clmgvw5EKYOnPN4I17G81zfCPlm3Hc_YCq5yW6xJIBQbCSgiYSQ"
                      />
                      <div className="flex flex-col min-w-0">
                        <span className="font-label-md text-label-md text-on-surface font-semibold truncate">
                          Mr. John Danladi
                        </span>
                        <span className="font-body-sm text-body-sm text-outline truncate">
                          NIIS/ADM-003 • Senior Bursar &amp; Accounts Lead
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-space-sm text-right font-medium">
                    ₦250,000
                  </td>
                  <td className="py-3 px-space-sm text-right">
                    <div className="flex flex-col">
                      <span className="font-medium text-on-surface">
                        ₦60,000
                      </span>
                      <span className="text-[10px] text-outline">
                        Housing + Executive
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-space-sm text-right font-semibold text-on-surface">
                    ₦310,000
                  </td>
                  <td className="py-3 px-space-sm text-right">
                    <div className="flex flex-col text-error font-medium">
                      <span>
                        -₦24,800{" "}
                        <span className="text-[10px] text-outline">(PAYE)</span>
                      </span>
                      <span>
                        -₦24,800{" "}
                        <span className="text-[10px] text-outline">
                          (8% Pen)
                        </span>
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-space-sm text-right">
                    <span className="inline-flex px-1.5 py-0.5 rounded bg-surface-container text-on-surface text-[11px] font-medium">
                      -₦25,000
                    </span>
                    <div className="text-[10px] text-outline">
                      Emergency Clinic Repay
                    </div>
                  </td>
                  <td className="py-3 px-space-sm text-right font-label-md text-label-md text-secondary font-bold">
                    ₦235,400
                  </td>
                  <td className="py-3 px-space-sm">
                    <div className="flex flex-col">
                      <span className="font-medium text-on-surface">
                        Zenith Bank Plc
                      </span>
                      <span className="font-mono text-[11px] text-outline tracking-wider">
                        2081190234
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-space-sm">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container/50 text-on-secondary-container font-label-sm text-[11px] font-semibold">
                      <span className="material-symbols-outlined text-[12px]">
                        done
                      </span>
                      Approved
                    </span>
                  </td>
                  <td className="py-3 px-space-md text-center">
                    <div className="flex items-center justify-center gap-1">
                      <button
                        className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary"
                        title="View Detailed Payslip"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          receipt
                        </span>
                      </button>
                      <button
                        className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary"
                        title="Adjustment Ledger"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          edit_note
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
                {/*  Row 4  */}
                <tr className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="py-3 px-space-md">
                    <div className="flex items-center gap-space-sm">
                      <img
                        className="w-9 h-9 rounded-full object-cover shrink-0"
                        data-alt="Portrait of young Nigerian female English literature teacher holding hardcover book in high school library."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuArE9A6UPMh3EojxL1sYc2ZhxPBVO4TiUXLdC45fGlP4BW4TZ6D-uOhDDTq1POII9da9KSvuoK6SU6GM3PsIliQ6TmN7gA_t7q5DQtFNHjlJ9P0cYJdZH8BCAdL_IdrIATIGfgOsiyTlnkM5scTf5r4dGDGvhlfcIuMD1lrOsp8RfAyhcPiOITQektYBzApvJYy-awlzEcGecapmp0x-8fdR7XtXXr99Q8-q0Z_HxvzWBhxTdA29GAHoA"
                      />
                      <div className="flex flex-col min-w-0">
                        <span className="font-label-md text-label-md text-on-surface font-semibold truncate">
                          Mrs. Maryam Sani
                        </span>
                        <span className="font-body-sm text-body-sm text-outline truncate">
                          NIIS/T-102 • Cambridge English Master
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-space-sm text-right font-medium">
                    ₦180,000
                  </td>
                  <td className="py-3 px-space-sm text-right">
                    <div className="flex flex-col">
                      <span className="font-medium text-on-surface">
                        ₦30,000
                      </span>
                      <span className="text-[10px] text-outline">
                        Transport + Curriculum
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-space-sm text-right font-semibold text-on-surface">
                    ₦210,000
                  </td>
                  <td className="py-3 px-space-sm text-right">
                    <div className="flex flex-col text-error font-medium">
                      <span>
                        -₦16,800{" "}
                        <span className="text-[10px] text-outline">(PAYE)</span>
                      </span>
                      <span>
                        -₦16,800{" "}
                        <span className="text-[10px] text-outline">
                          (8% Pen)
                        </span>
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-space-sm text-right">
                    <span className="inline-flex px-1.5 py-0.5 rounded bg-surface-container text-on-surface text-[11px] font-medium">
                      -₦10,000
                    </span>
                    <div className="text-[10px] text-outline">
                      Staff Laptop Loan
                    </div>
                  </td>
                  <td className="py-3 px-space-sm text-right font-label-md text-label-md text-secondary font-bold">
                    ₦166,400
                  </td>
                  <td className="py-3 px-space-sm">
                    <div className="flex flex-col">
                      <span className="font-medium text-on-surface">
                        Access Bank
                      </span>
                      <span className="font-mono text-[11px] text-outline tracking-wider">
                        0711902844
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-space-sm">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-fixed/60 text-on-tertiary-fixed-variant font-label-sm text-[11px] font-semibold">
                      <span className="material-symbols-outlined text-[12px]">
                        pending
                      </span>
                      Pending Sign-off
                    </span>
                  </td>
                  <td className="py-3 px-space-md text-center">
                    <div className="flex items-center justify-center gap-1">
                      <button
                        className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary"
                        title="View Detailed Payslip"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          receipt
                        </span>
                      </button>
                      <button
                        className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary"
                        title="Adjustment Ledger"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          edit_note
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
                {/*  Row 5  */}
                <tr className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="py-3 px-space-md">
                    <div className="flex items-center gap-space-sm">
                      <img
                        className="w-9 h-9 rounded-full object-cover shrink-0"
                        data-alt="Portrait of elderly Nigerian male security head in clean uniform with badge, Kaduna academic institution."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr8_fVFaLlIyN1qR-NKpE99z-_hfZhZbkFX_YdOKrVnNwJpn8-B543llLwaIco_Dnc3U3SV-bPkPvtNLkuuzgHW2eLjzaOG4AqfuvKn_2L6QTKMw2zxVcp20WScrUPnicgQyoQAoI9JVaR7n5tUGrnTyfBz6rlisw4tZP3O1Xjw7dUPzmn3tw_fpy0T41sOmCtvQ9j-2EbVsqQ2nNmVDaoR_0JBV7mQn_HrOi0gW6dGTVJacShQfYLIw"
                      />
                      <div className="flex flex-col min-w-0">
                        <span className="font-label-md text-label-md text-on-surface font-semibold truncate">
                          Alhaji Shehu Balarabe
                        </span>
                        <span className="font-body-sm text-body-sm text-outline truncate">
                          NIIS/OPS-011 • Chief Security Marshal
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-space-sm text-right font-medium">
                    ₦110,000
                  </td>
                  <td className="py-3 px-space-sm text-right">
                    <div className="flex flex-col">
                      <span className="font-medium text-on-surface">
                        ₦25,000
                      </span>
                      <span className="text-[10px] text-outline">
                        Night Shift Hazard
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-space-sm text-right font-semibold text-on-surface">
                    ₦135,000
                  </td>
                  <td className="py-3 px-space-sm text-right">
                    <div className="flex flex-col text-error font-medium">
                      <span>
                        -₦10,800{" "}
                        <span className="text-[10px] text-outline">(PAYE)</span>
                      </span>
                      <span>
                        -₦10,800{" "}
                        <span className="text-[10px] text-outline">
                          (8% Pen)
                        </span>
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-space-sm text-right">
                    <span className="text-[11px] text-outline">-</span>
                  </td>
                  <td className="py-3 px-space-sm text-right font-label-md text-label-md text-secondary font-bold">
                    ₦113,400
                  </td>
                  <td className="py-3 px-space-sm">
                    <div className="flex flex-col">
                      <span className="font-medium text-on-surface">
                        First Bank of Nigeria
                      </span>
                      <span className="font-mono text-[11px] text-outline tracking-wider">
                        3099182390
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-space-sm">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container/50 text-on-secondary-container font-label-sm text-[11px] font-semibold">
                      <span className="material-symbols-outlined text-[12px]">
                        done
                      </span>
                      Approved
                    </span>
                  </td>
                  <td className="py-3 px-space-md text-center">
                    <div className="flex items-center justify-center gap-1">
                      <button
                        className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary"
                        title="View Detailed Payslip"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          receipt
                        </span>
                      </button>
                      <button
                        className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary"
                        title="Adjustment Ledger"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          edit_note
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/*  Table Pagination & Aggregate Footer  */}
          <div className="p-space-md bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-sm font-label-sm text-label-sm text-on-surface-variant">
            <div>
              Showing{" "}
              <span className="font-semibold text-on-surface">1 - 5</span> of{" "}
              <span className="font-semibold text-on-surface">120</span>{" "}
              recorded staff compensations
            </div>
            <div className="flex items-center gap-2">
              <button
                className="px-3 py-1 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-colors disabled:opacity-50"
                disabled
              >
                Previous
              </button>
              <button className="px-2.5 py-1 rounded bg-primary text-on-primary font-bold">
                1
              </button>
              <button className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-colors">
                2
              </button>
              <button className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-colors">
                3
              </button>
              <span className="px-1 text-outline">...</span>
              <button className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-colors">
                24
              </button>
              <button className="px-3 py-1 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
        {/*  Bottom Insight & Compliance Panels (3-Column Layout)  */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
          {/*  Panel 1: Dual Authorization Mandate (5 Cols)  */}
          <div className="lg:col-span-4 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between space-y-space-md">
            <div className="space-y-space-xs">
              <div className="flex items-center justify-between">
                <span className="font-headline-sm text-headline-sm text-primary">
                  Dual-Sign Mandate
                </span>
                <span className="material-symbols-outlined text-primary text-[20px]">
                  shield
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Per NIIS Financial Charter §4.2, salary releases exceeding ₦5M
                mandate twin cryptographic authorization before CBN / NIBSS
                interbank batching.
              </p>
            </div>
            <div className="space-y-space-sm">
              {/*  Signer 1: Bursar  */}
              <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-xs">
                    JD
                  </div>
                  <div>
                    <div className="font-label-md text-label-md text-on-surface font-semibold">
                      Mr. John Danladi
                    </div>
                    <div className="font-body-sm text-[11px] text-on-surface-variant">
                      Chief Bursar • Cert. Stamp Signed
                    </div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[10px] font-bold">
                  <span className="material-symbols-outlined text-[12px]">
                    done_all
                  </span>
                  ENDORSED
                </span>
              </div>
              {/*  Signer 2: Principal  */}
              <div className="p-space-sm rounded-lg bg-surface-container-high/60 flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-xs">
                    AB
                  </div>
                  <div>
                    <div className="font-label-md text-label-md text-on-surface font-semibold">
                      Dr. Aminu Bello
                    </div>
                    <div className="font-body-sm text-[11px] text-on-surface-variant">
                      Super Admin / Principal
                    </div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-[10px] font-bold">
                  <span className="material-symbols-outlined text-[12px]">
                    fingerprint
                  </span>
                  TOKEN PENDING
                </span>
              </div>
            </div>
            <button
              className="w-full py-2.5 px-space-md rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm flex items-center justify-center gap-2"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">key</span>
              <span>Authorize with Hard Token (Admin #01)</span>
            </button>
          </div>
          {/*  Panel 2: Statutory Breakdown & Pension Allocations (4 Cols)  */}
          <div className="lg:col-span-4 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between space-y-space-md">
            <div className="space-y-space-xs">
              <div className="flex items-center justify-between">
                <span className="font-headline-sm text-headline-sm text-primary">
                  Statutory Allocations
                </span>
                <span className="material-symbols-outlined text-outline text-[20px]">
                  pie_chart
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Monthly mandatory payroll split for Kaduna State PAYE &amp;
                federal pension fund administrator remittances.
              </p>
            </div>
            {/*  Compact SVG Gauge Visualization  */}
            <div className="flex items-center justify-center py-2">
              <div className="relative w-36 h-36 flex items-center justify-center">
                <svg
                  className="w-full h-full transform -rotate-90"
                  viewBox="0 0 100 100"
                >
                  {/*  Background circle  */}
                  <circle
                    cx="50"
                    cy="50"
                    fill="transparent"
                    r="40"
                    stroke="#EAEDFF"
                    strokeWidth="12"
                  ></circle>
                  {/*  Net Salaries (85%)  */}
                  <circle
                    cx="50"
                    cy="50"
                    fill="transparent"
                    r="40"
                    stroke="#006C4E"
                    stroke-dasharray="251.2"
                    stroke-dashoffset="37.6"
                    strokeLinecap="round"
                    strokeWidth="12"
                  ></circle>
                  {/*  PAYE (8%)  */}
                  <circle
                    cx="50"
                    cy="50"
                    fill="transparent"
                    r="40"
                    stroke="#653400"
                    stroke-dasharray="251.2"
                    stroke-dashoffset="231"
                    strokeLinecap="round"
                    strokeWidth="12"
                  ></circle>
                  {/*  PenCom (7%)  */}
                  <circle
                    cx="50"
                    cy="50"
                    fill="transparent"
                    r="40"
                    stroke="#00236F"
                    stroke-dasharray="251.2"
                    stroke-dashoffset="233"
                    strokeLinecap="round"
                    strokeWidth="12"
                  ></circle>
                </svg>
                <div className="absolute flex flex-col items-center justify-center text-center">
                  <span className="font-headline-sm text-headline-sm font-bold text-primary">
                    ₦18.45M
                  </span>
                  <span className="text-[10px] text-outline font-semibold">
                    OCT GROSS
                  </span>
                </div>
              </div>
            </div>
            {/*  Breakdown Legend  */}
            <div className="space-y-1.5 font-label-sm text-label-sm">
              <div className="flex items-center justify-between text-on-surface">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                  Net Staff Salaries (85%)
                </span>
                <span className="font-semibold text-secondary">
                  ₦15,682,500
                </span>
              </div>
              <div className="flex items-center justify-between text-on-surface">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-tertiary-container"></span>
                  KADIRS PAYE Tax (8%)
                </span>
                <span className="font-semibold text-tertiary-container">
                  ₦1,476,000
                </span>
              </div>
              <div className="flex items-center justify-between text-on-surface">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                  PenCom Retirement Fund (7%)
                </span>
                <span className="font-semibold text-primary">₦1,291,500</span>
              </div>
            </div>
          </div>
          {/*  Panel 3: Staff Thrift & Advance Recovery (4 Cols)  */}
          <div className="lg:col-span-4 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between space-y-space-md">
            <div className="space-y-space-xs">
              <div className="flex items-center justify-between">
                <span className="font-headline-sm text-headline-sm text-primary">
                  Loan &amp; Thrift Ledger
                </span>
                <span className="font-label-sm text-label-sm text-secondary font-semibold">
                  4 Active Plans
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Automated deduction tracker for faculty computer advances,
                school cooperative thrift, and emergency clinical loans.
              </p>
            </div>
            <div className="space-y-2">
              {/*  Item 1  */}
              <div className="p-2 rounded bg-surface-container-low flex flex-col space-y-1">
                <div className="flex justify-between font-label-sm text-label-sm">
                  <span className="font-semibold text-on-surface truncate">
                    Malam Garba Usman (Co-op Thrift)
                  </span>
                  <span className="text-primary font-bold">₦15,000 / mo</span>
                </div>
                <div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
                  <div className="bg-secondary h-1.5 rounded-full w-[75%]"></div>
                </div>
                <div className="flex justify-between text-[10px] text-outline font-medium">
                  <span>₦180,000 accumulated</span>
                  <span>Annual Shareholder</span>
                </div>
              </div>
              {/*  Item 2  */}
              <div className="p-2 rounded bg-surface-container-low flex flex-col space-y-1">
                <div className="flex justify-between font-label-sm text-label-sm">
                  <span className="font-semibold text-on-surface truncate">
                    Mr. John Danladi (Emergency Clinic)
                  </span>
                  <span className="text-error font-bold">₦25,000 / mo</span>
                </div>
                <div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
                  <div className="bg-primary h-1.5 rounded-full w-[50%]"></div>
                </div>
                <div className="flex justify-between text-[10px] text-outline font-medium">
                  <span>₦50,000 of ₦100,000 repaid</span>
                  <span>2 months remaining</span>
                </div>
              </div>
              {/*  Item 3  */}
              <div className="p-2 rounded bg-surface-container-low flex flex-col space-y-1">
                <div className="flex justify-between font-label-sm text-label-sm">
                  <span className="font-semibold text-on-surface truncate">
                    Mrs. Maryam Sani (Faculty Laptop)
                  </span>
                  <span className="text-primary font-bold">₦10,000 / mo</span>
                </div>
                <div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
                  <div className="bg-secondary h-1.5 rounded-full w-[80%]"></div>
                </div>
                <div className="flex justify-between text-[10px] text-outline font-medium">
                  <span>₦80,000 of ₦100,000 repaid</span>
                  <span>1 month remaining</span>
                </div>
              </div>
            </div>
            <div className="pt-1 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
              <span>Total Oct Recovery:</span>
              <span className="font-bold text-on-surface font-label-md text-label-md">
                ₦65,000.00
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
