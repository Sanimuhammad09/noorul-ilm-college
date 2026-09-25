import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/admin/")({
  component: ExecutiveAdministrativeDashboard,
});

function ExecutiveAdministrativeDashboard() {
  return (
    <main className="w-full pt-16 px-space-lg py-space-lg flex-1 bg-surface">
      <div className="flex flex-col w-full">
        {/*  Executive Context Bar  */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between pb-space-lg mb-space-md">
          <div className="flex flex-col">
            <div className="flex items-center gap-space-xs mb-1">
              <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                Live Operational Sync
              </span>
              <span className="text-outline font-label-sm text-label-sm">
                •
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Session Snapshot
              </span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              Institutional Overview &amp; Operations
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-space-xs mt-0.5">
              <span className="material-symbols-outlined text-[16px] text-secondary">
                location_on
              </span>
              Kaduna Campus • 2026/2027 Academic Session • 1st Term • Week 6 of
              14
            </p>
          </div>
          <div className="flex items-center gap-space-sm mt-space-md lg:mt-0 flex-wrap">
            <button
              className="flex items-center gap-space-xs px-space-md py-2 bg-surface-container-lowest text-on-surface rounded-lg font-label-md text-label-md shadow-sm hover:bg-surface-container-high transition-colors"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px] text-outline">
                description
              </span>
              <span>Download Daily Executive Brief</span>
            </button>
            {/*  Quick Actions Dropdown Parent  */}
            <div className="relative group">
              <button
                className="flex items-center gap-space-xs px-space-md py-2 bg-primary text-on-primary rounded-lg font-label-md text-label-md shadow-sm hover:bg-primary-container transition-colors"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">
                  bolt
                </span>
                <span>Quick Actions</span>
                <span className="material-symbols-outlined text-[18px]">
                  expand_more
                </span>
              </button>
              <div className="absolute right-0 mt-1 w-56 py-2 bg-surface-container-lowest rounded-xl shadow-xl hidden group-hover:block hover:block z-30">
                <a
                  className="flex items-center gap-space-sm px-space-md py-2 font-body-md text-body-md text-on-surface hover:bg-surface-container-low transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    person_add
                  </span>
                  <span>Register Student</span>
                </a>
                <a
                  className="flex items-center gap-space-sm px-space-md py-2 font-body-md text-body-md text-on-surface hover:bg-surface-container-low transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined text-on-tertiary-container text-[18px]">
                    payments
                  </span>
                  <span>Record Payment</span>
                </a>
                <a
                  className="flex items-center gap-space-sm px-space-md py-2 font-body-md text-body-md text-on-surface hover:bg-surface-container-low transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    how_to_reg
                  </span>
                  <span>Mark Attendance</span>
                </a>
                <a
                  className="flex items-center gap-space-sm px-space-md py-2 font-body-md text-body-md text-on-surface hover:bg-surface-container-low transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined text-error text-[18px]">
                    campaign
                  </span>
                  <span>Issue Official Notice</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*  8 High-Impact KPI Metric Cards  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-xl">
          {/*  Card 1: Total Students  */}
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                  Total Enrolled Students
                </span>
                <div className="font-metric-lg text-metric-lg text-on-surface mt-1">
                  1,842
                </div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[22px]">
                  groups
                </span>
              </div>
            </div>
            <div className="mt-space-md pt-space-xs">
              <div className="flex items-center gap-1 font-label-sm text-label-sm text-secondary font-semibold">
                <span className="material-symbols-outlined text-[14px]">
                  trending_up
                </span>
                <span>+4.2%</span>
                <span className="text-on-surface-variant font-normal">
                  vs Term 3
                </span>
              </div>
              <div className="flex items-center justify-between text-on-surface-variant font-body-sm text-[11px] mt-1 text-outline">
                <span>Pri: 920</span>
                <span>•</span>
                <span>JSS: 512</span>
                <span>•</span>
                <span>SSS: 410</span>
              </div>
            </div>
          </div>
          {/*  Card 2: Teaching Staff  */}
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                  Teaching Faculty
                </span>
                <div className="font-metric-lg text-metric-lg text-on-surface mt-1">
                  86
                </div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-[22px]">
                  school
                </span>
              </div>
            </div>
            <div className="mt-space-md pt-space-xs">
              <div className="flex items-center justify-between font-label-sm text-label-sm">
                <span className="text-secondary font-semibold">
                  98% Duty Presence
                </span>
                <span className="text-on-surface-variant font-normal">
                  84 In Class
                </span>
              </div>
              <div className="w-full bg-surface-container-highest rounded-full h-1.5 mt-1.5 overflow-hidden">
                <div className="bg-secondary h-1.5 rounded-full w-[98%]"></div>
              </div>
            </div>
          </div>
          {/*  Card 3: Non-Teaching Staff  */}
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                  Support &amp; Admin Staff
                </span>
                <div className="font-metric-lg text-metric-lg text-on-surface mt-1">
                  34
                </div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary-container">
                <span className="material-symbols-outlined text-[22px]">
                  badge
                </span>
              </div>
            </div>
            <div className="mt-space-md pt-space-xs">
              <div className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface font-semibold">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span>Operational: Normal</span>
              </div>
              <div className="font-body-sm text-[11px] text-outline mt-1 truncate">
                Security, Bursary, Lab &amp; Facilities on site
              </div>
            </div>
          </div>
          {/*  Card 4: Active Classes & Arms  */}
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                  Classes &amp; Arms
                </span>
                <div className="font-metric-lg text-metric-lg text-on-surface mt-1">
                  42{" "}
                  <span className="font-headline-sm text-headline-sm text-outline font-normal">
                    Sections
                  </span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-tertiary-container">
                <span className="material-symbols-outlined text-[22px]">
                  meeting_room
                </span>
              </div>
            </div>
            <div className="mt-space-md pt-space-xs">
              <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                <span className="font-semibold text-primary">
                  Avg 43.8 / arm
                </span>
                <span className="text-outline">Max: 45 Cap</span>
              </div>
              <div className="font-body-sm text-[11px] text-outline mt-1 truncate">
                Primary 1-6 • JSS 1-3 • SSS 1-3 (Arts/Sci/Comm)
              </div>
            </div>
          </div>
          {/*  Card 5: Parent Portal Engagement  */}
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                  Guardian Portal Adoption
                </span>
                <div className="font-metric-lg text-metric-lg text-on-surface mt-1">
                  1,420
                </div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[22px]">
                  family_restroom
                </span>
              </div>
            </div>
            <div className="mt-space-md pt-space-xs">
              <div className="flex items-center justify-between font-label-sm text-label-sm">
                <span className="text-secondary font-semibold">
                  88% Active Guardians
                </span>
                <span className="text-outline">SMS &amp; App Sync</span>
              </div>
              <div className="w-full bg-surface-container-highest rounded-full h-1.5 mt-1.5 overflow-hidden">
                <div className="bg-primary h-1.5 rounded-full w-[88%]"></div>
              </div>
            </div>
          </div>
          {/*  Card 6: Fees Collected  */}
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                  Fees Realized (Term 1)
                </span>
                <div className="font-headline-lg text-headline-lg text-secondary font-bold mt-1">
                  ₦142,650,000
                </div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center text-on-secondary-container">
                <span className="material-symbols-outlined text-[22px]">
                  account_balance_wallet
                </span>
              </div>
            </div>
            <div className="mt-space-md pt-space-xs">
              <div className="flex items-center justify-between font-label-sm text-label-sm">
                <span className="text-secondary font-semibold">
                  76% of Projected Target
                </span>
                <span className="text-outline">Goal: ₦187.4M</span>
              </div>
              <div className="w-full bg-surface-container-highest rounded-full h-1.5 mt-1.5 overflow-hidden">
                <div className="bg-secondary h-1.5 rounded-full w-[76%]"></div>
              </div>
            </div>
          </div>
          {/*  Card 7: Outstanding Fees Balance  */}
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                  Outstanding Arrears
                </span>
                <div className="font-headline-lg text-headline-lg text-error font-bold mt-1">
                  ₦44,820,000
                </div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-error-container flex items-center justify-center text-on-error-container">
                <span className="material-symbols-outlined text-[22px]">
                  pending_actions
                </span>
              </div>
            </div>
            <div className="mt-space-md pt-space-xs">
              <div className="flex items-center justify-between font-label-sm text-label-sm">
                <span className="text-error font-semibold">
                  312 Student Accounts
                </span>
                <span className="text-primary font-semibold cursor-pointer hover:underline">
                  Bursary Notice →
                </span>
              </div>
              <div className="font-body-sm text-[11px] text-outline mt-1 truncate">
                Term 1 Payment cut-off: 30 Oct 2026
              </div>
            </div>
          </div>
          {/*  Card 8: Today's Attendance  */}
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                  Today's Student Turnout
                </span>
                <div className="font-metric-lg text-metric-lg text-on-surface mt-1">
                  96.4%
                </div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[22px]">
                  fact_check
                </span>
              </div>
            </div>
            <div className="mt-space-md pt-space-xs">
              <div className="flex items-center justify-between font-label-sm text-label-sm">
                <span className="text-secondary font-semibold">
                  1,776 / 1,842 Present
                </span>
                <span className="text-error">66 Absent</span>
              </div>
              <div className="w-full bg-surface-container-highest rounded-full h-1.5 mt-1.5 overflow-hidden">
                <div className="bg-secondary h-1.5 rounded-full w-[96.4%]"></div>
              </div>
            </div>
          </div>
        </div>
        {/*  Visual Analytics & Charts Section (2 Columns: 60% / 40%)  */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg mb-space-xl">
          {/*  Left Column (60% -> 7 cols)  */}
          <div className="lg:col-span-7 flex flex-col gap-space-lg">
            {/*  Fee Collection Revenue Flow Card  */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-md mb-space-md">
                <div>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">
                    Fee Collection &amp; Revenue Trajectory
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Monthly Bursary targets vs verified receipts (Jul 2026 - Oct
                    2026)
                  </p>
                </div>
                <div className="flex items-center gap-space-md mt-space-sm sm:mt-0">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-primary"></span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Target (₦M)
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-secondary"></span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Realized (₦M)
                    </span>
                  </div>
                </div>
              </div>
              {/*  Inline High-Fidelity SVG Chart  */}
              <div className="w-full h-64 relative flex items-end">
                <svg
                  className="w-full h-full overflow-visible"
                  preserveAspectRatio="none"
                  viewBox="0 0 540 220"
                >
                  {/*  Grid Lines  */}
                  <line
                    stroke="#E2E7FF"
                    stroke-dasharray="3 3"
                    strokeWidth="1"
                    x1="0"
                    x2="540"
                    y1="30"
                    y2="30"
                  ></line>
                  <line
                    stroke="#E2E7FF"
                    stroke-dasharray="3 3"
                    strokeWidth="1"
                    x1="0"
                    x2="540"
                    y1="80"
                    y2="80"
                  ></line>
                  <line
                    stroke="#E2E7FF"
                    stroke-dasharray="3 3"
                    strokeWidth="1"
                    x1="0"
                    x2="540"
                    y1="130"
                    y2="130"
                  ></line>
                  <line
                    stroke="#E2E7FF"
                    strokeWidth="1"
                    x1="0"
                    x2="540"
                    y1="180"
                    y2="180"
                  ></line>
                  {/*  Y-Axis Labels  */}
                  <text
                    className="font-label-sm text-[10px] fill-[#757682]"
                    x="5"
                    y="26"
                  >
                    ₦60M
                  </text>
                  <text
                    className="font-label-sm text-[10px] fill-[#757682]"
                    x="5"
                    y="76"
                  >
                    ₦40M
                  </text>
                  <text
                    className="font-label-sm text-[10px] fill-[#757682]"
                    x="5"
                    y="126"
                  >
                    ₦20M
                  </text>
                  <text
                    className="font-label-sm text-[10px] fill-[#757682]"
                    x="5"
                    y="176"
                  >
                    ₦0M
                  </text>
                  {/*  Month 1: July (Admissions & Enrolment Deposit)  */}
                  {/*  Target Bar  */}
                  <rect
                    className="fill-[#DAE2FD]"
                    height="65"
                    rx="4"
                    width="28"
                    x="70"
                    y="115"
                  ></rect>
                  {/*  Actual Bar  */}
                  <rect
                    className="fill-secondary"
                    height="55"
                    rx="4"
                    width="28"
                    x="102"
                    y="125"
                  ></rect>
                  {/*  Month 2: August (Early Bird Term Registration)  */}
                  <rect
                    className="fill-[#DAE2FD]"
                    height="100"
                    rx="4"
                    width="28"
                    x="180"
                    y="80"
                  ></rect>
                  <rect
                    className="fill-secondary"
                    height="90"
                    rx="4"
                    width="28"
                    x="212"
                    y="90"
                  ></rect>
                  {/*  Month 3: September (Term Opening Full Inflows)  */}
                  <rect
                    className="fill-[#DAE2FD]"
                    height="135"
                    rx="4"
                    width="28"
                    x="290"
                    y="45"
                  ></rect>
                  <rect
                    className="fill-secondary"
                    height="128"
                    rx="4"
                    width="28"
                    x="322"
                    y="52"
                  ></rect>
                  {/*  Month 4: October (Mid-Term Balances - In Progress)  */}
                  <rect
                    className="fill-primary-container"
                    height="110"
                    rx="4"
                    width="28"
                    x="400"
                    y="70"
                  ></rect>
                  <rect
                    className="fill-secondary"
                    height="82"
                    rx="4"
                    width="28"
                    x="432"
                    y="98"
                  ></rect>
                  {/*  Trend Line connecting Actuals  */}
                  <path
                    d="M 116 125 L 226 90 L 336 52 L 446 98"
                    fill="none"
                    stroke="#00236F"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                  ></path>
                  {/*  Nodes  */}
                  <circle
                    className="fill-surface-container-lowest"
                    cx="116"
                    cy="125"
                    r="4"
                    stroke="#00236F"
                    strokeWidth="2"
                  ></circle>
                  <circle
                    className="fill-surface-container-lowest"
                    cx="226"
                    cy="90"
                    r="4"
                    stroke="#00236F"
                    strokeWidth="2"
                  ></circle>
                  <circle
                    className="fill-surface-container-lowest"
                    cx="336"
                    cy="52"
                    r="4"
                    stroke="#00236F"
                    strokeWidth="2"
                  ></circle>
                  <circle
                    className="fill-surface-container-lowest"
                    cx="446"
                    cy="98"
                    r="4"
                    stroke="#00236F"
                    strokeWidth="2"
                  ></circle>
                  {/*  X-Axis Labels  */}
                  <text
                    className="font-label-sm text-[11px] fill-[#444651] text-anchor-middle font-medium"
                    x="96"
                    y="202"
                  >
                    Jul (Reg)
                  </text>
                  <text
                    className="font-label-sm text-[11px] fill-[#444651] text-anchor-middle font-medium"
                    x="206"
                    y="202"
                  >
                    Aug (Early)
                  </text>
                  <text
                    className="font-label-sm text-[11px] fill-[#444651] text-anchor-middle font-medium"
                    x="316"
                    y="202"
                  >
                    Sep (Rush)
                  </text>
                  <text
                    className="font-label-sm text-[11px] fill-[#00236F] text-anchor-middle font-bold"
                    x="424"
                    y="202"
                  >
                    Oct (Active)
                  </text>
                </svg>
              </div>
              <div className="mt-space-md pt-space-sm bg-surface-container-low rounded-lg p-space-sm flex items-center justify-between flex-wrap gap-space-sm">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    verified
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface">
                    Kaduna Board of Internal Revenue (KADIRS) stamp &amp; audit
                    ready
                  </span>
                </div>
                <span className="font-label-sm text-label-sm font-semibold text-primary">
                  Last reconciled: Today, 08:30 AM
                </span>
              </div>
            </div>
            {/*  Weekly Attendance & Class Punctuality  */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
              <div className="flex items-center justify-between pb-space-sm mb-space-md">
                <div>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">
                    Attendance &amp; Punctuality Demographics
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Real-time breakdown across primary and secondary wings
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                  96.4% Campus Average
                </span>
              </div>
              <div className="space-y-space-md">
                {/*  Primary School  */}
                <div>
                  <div className="flex items-center justify-between font-label-md text-label-md mb-1.5">
                    <span className="text-on-surface font-semibold flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                      Primary Wing (Classes 1 - 6)
                    </span>
                    <span className="text-on-surface-variant font-medium">
                      896 / 920 (97.4%)
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-highest rounded-full h-2.5 overflow-hidden">
                    <div className="bg-primary h-2.5 rounded-full w-[97.4%] transition-all"></div>
                  </div>
                </div>
                {/*  Junior Secondary School (JSS)  */}
                <div>
                  <div className="flex items-center justify-between font-label-md text-label-md mb-1.5">
                    <span className="text-on-surface font-semibold flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                      Junior Secondary School (JSS 1 - 3)
                    </span>
                    <span className="text-on-surface-variant font-medium">
                      492 / 512 (96.1%)
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-highest rounded-full h-2.5 overflow-hidden">
                    <div className="bg-secondary h-2.5 rounded-full w-[96.1%] transition-all"></div>
                  </div>
                </div>
                {/*  Senior Secondary School (SSS)  */}
                <div>
                  <div className="flex items-center justify-between font-label-md text-label-md mb-1.5">
                    <span className="text-on-surface font-semibold flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-on-tertiary-container"></span>
                      Senior Secondary School (SSS 1 - 3: Sci/Arts/Comm)
                    </span>
                    <span className="text-on-surface-variant font-medium">
                      388 / 410 (94.6%)
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-highest rounded-full h-2.5 overflow-hidden">
                    <div className="bg-on-tertiary-container h-2.5 rounded-full w-[94.6%] transition-all"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  Right Column (40% -> 5 cols)  */}
          <div className="lg:col-span-5 flex flex-col gap-space-lg">
            {/*  Admissions Pipeline Card  */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
              <div className="flex items-center justify-between pb-space-sm mb-space-md">
                <div>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">
                    Admissions Pipeline (2026/27)
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Intake cycle status &amp; applicant stages
                  </p>
                </div>
                <span className="material-symbols-outlined text-outline">
                  tune
                </span>
              </div>
              <div className="flex items-center justify-center my-space-sm">
                {/*  Donut SVG Visualization  */}
                <div className="relative w-44 h-44 flex items-center justify-center">
                  <svg
                    className="w-full h-full -rotate-90"
                    viewBox="0 0 100 100"
                  >
                    {/*  Total = 310 + 45 + 28 + 64 = 447  */}
                    {/*  Circle circumference = 2 * PI * 38 ≈ 238.76  */}
                    {/*  Enrolled: 310/447 = 69.3% -> 165.5  */}
                    <circle
                      cx="50"
                      cy="50"
                      fill="transparent"
                      r="38"
                      stroke="#1E3A8A"
                      stroke-dasharray="165.5 238.76"
                      stroke-dashoffset="0"
                      strokeWidth="12"
                    ></circle>
                    {/*  Approved Pending Fee: 45/447 = 10.1% -> 24.1  */}
                    <circle
                      cx="50"
                      cy="50"
                      fill="transparent"
                      r="38"
                      stroke="#006C4E"
                      stroke-dasharray="24.1 238.76"
                      stroke-dashoffset="-165.5"
                      strokeWidth="12"
                    ></circle>
                    {/*  Under Review: 28/447 = 6.3% -> 15.0  */}
                    <circle
                      cx="50"
                      cy="50"
                      fill="transparent"
                      r="38"
                      stroke="#FC922B"
                      stroke-dasharray="15.0 238.76"
                      stroke-dashoffset="-189.6"
                      strokeWidth="12"
                    ></circle>
                    {/*  Entrance Exam: 64/447 = 14.3% -> 34.1  */}
                    <circle
                      cx="50"
                      cy="50"
                      fill="transparent"
                      r="38"
                      stroke="#DAE2FD"
                      stroke-dasharray="34.1 238.76"
                      stroke-dashoffset="-204.6"
                      strokeWidth="12"
                    ></circle>
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center text-center">
                    <span className="font-headline-lg text-headline-lg font-bold text-primary">
                      447
                    </span>
                    <span className="font-label-sm text-[10px] text-outline uppercase tracking-wider">
                      Total Inflow
                    </span>
                  </div>
                </div>
              </div>
              {/*  Legend breakdown  */}
              <div className="grid grid-cols-2 gap-space-sm pt-space-xs">
                <div className="p-2 bg-surface-container-low rounded-lg">
                  <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
                    <span>Enrolled</span>
                  </div>
                  <div className="font-headline-sm text-headline-sm font-bold text-on-surface mt-0.5">
                    310
                  </div>
                </div>
                <div className="p-2 bg-surface-container-low rounded-lg">
                  <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                    <span>Approved (Pay)</span>
                  </div>
                  <div className="font-headline-sm text-headline-sm font-bold text-on-surface mt-0.5">
                    45
                  </div>
                </div>
                <div className="p-2 bg-surface-container-low rounded-lg">
                  <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
                    <span className="w-2.5 h-2.5 rounded-full bg-on-tertiary-container"></span>
                    <span>Under Review</span>
                  </div>
                  <div className="font-headline-sm text-headline-sm font-bold text-on-surface mt-0.5">
                    28
                  </div>
                </div>
                <div className="p-2 bg-surface-container-low rounded-lg">
                  <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
                    <span className="w-2.5 h-2.5 rounded-full bg-surface-container-highest"></span>
                    <span>Exam Scheduled</span>
                  </div>
                  <div className="font-headline-sm text-headline-sm font-bold text-on-surface mt-0.5">
                    64
                  </div>
                </div>
              </div>
            </div>
            {/*  Academic Departmental Progress  */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-1">
                Academic Department Milestones
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                Syllabus completion toward Mid-Term Assessments
              </p>
              <div className="space-y-space-sm">
                <div className="flex items-center justify-between p-2.5 bg-surface-container-low rounded-lg">
                  <div className="flex items-center gap- space-sm">
                    <span className="material-symbols-outlined text-primary text-[20px] mr-2">
                      biotech
                    </span>
                    <div>
                      <div className="font-label-md text-label-md font-semibold text-on-surface">
                        Science &amp; Technology
                      </div>
                      <div className="font-body-sm text-[11px] text-outline">
                        Physics, Chem, Bio, Tech Drawing
                      </div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                    Week 6 Target Met
                  </span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-surface-container-low rounded-lg">
                  <div className="flex items-center gap- space-sm">
                    <span className="material-symbols-outlined text-secondary text-[20px] mr-2">
                      palette
                    </span>
                    <div>
                      <div className="font-label-md text-label-md font-semibold text-on-surface">
                        Humanities &amp; Arts
                      </div>
                      <div className="font-body-sm text-[11px] text-outline">
                        Literature, History, Arabic, Hausa
                      </div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                    92% On Schedule
                  </span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-surface-container-low rounded-lg">
                  <div className="flex items-center gap- space-sm">
                    <span className="material-symbols-outlined text-tertiary-container text-[20px] mr-2">
                      monitoring
                    </span>
                    <div>
                      <div className="font-label-md text-label-md font-semibold text-on-surface">
                        Commercial Studies
                      </div>
                      <div className="font-body-sm text-[11px] text-outline">
                        Financial Accounting, Commerce, Econ
                      </div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-primary font-label-sm text-label-sm font-semibold">
                    Revision Phase
                  </span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-surface-container-low rounded-lg">
                  <div className="flex items-center gap- space-sm">
                    <span className="material-symbols-outlined text-primary text-[20px] mr-2">
                      child_care
                    </span>
                    <div>
                      <div className="font-label-md text-label-md font-semibold text-on-surface">
                        Primary Foundational
                      </div>
                      <div className="font-body-sm text-[11px] text-outline">
                        Numeracy, Literacy &amp; Tahfeez
                      </div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                    Exceeding Pace
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  Operational & Activity Feeds (3 Columns)  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg mb-space-xl">
          {/*  Column 1: Live Bursary Feed  */}
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-space-sm mb-space-md">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    receipt_long
                  </span>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">
                    Live Bursary Receipts
                  </h2>
                </div>
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              </div>
              <div className="space-y-space-md">
                {/*  Payment 1  */}
                <div className="p-space-sm bg-surface-container-low rounded-lg flex flex-col gap-1">
                  <div className="flex items-start justify-between">
                    <span className="font-label-md text-label-md font-semibold text-on-surface">
                      Zainab Aliyu
                    </span>
                    <span className="font-label-md text-label-md font-bold text-secondary">
                      ₦185,000
                    </span>
                  </div>
                  <div className="flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant">
                    <span>SSS 2 Science A • Tuition &amp; Lab</span>
                    <span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-primary font-label-sm text-[10px] font-semibold">
                      POS
                    </span>
                  </div>
                  <div className="font-label-sm text-[11px] text-outline flex items-center justify-between mt-1">
                    <span>Rcpt: #NIIS-2026-891</span>
                    <span>12 mins ago</span>
                  </div>
                </div>
                {/*  Payment 2  */}
                <div className="p-space-sm bg-surface-container-low rounded-lg flex flex-col gap-1">
                  <div className="flex items-start justify-between">
                    <span className="font-label-md text-label-md font-semibold text-on-surface">
                      Ibrahim Farouk
                    </span>
                    <span className="font-label-md text-label-md font-bold text-secondary">
                      ₦95,000
                    </span>
                  </div>
                  <div className="flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant">
                    <span>JSS 1 Gold • Tuition Part</span>
                    <span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-primary font-label-sm text-[10px] font-semibold">
                      GTBank Transfer
                    </span>
                  </div>
                  <div className="font-label-sm text-[11px] text-outline flex items-center justify-between mt-1">
                    <span>Rcpt: #NIIS-2026-892</span>
                    <span>38 mins ago</span>
                  </div>
                </div>
                {/*  Payment 3  */}
                <div className="p-space-sm bg-surface-container-low rounded-lg flex flex-col gap-1">
                  <div className="flex items-start justify-between">
                    <span className="font-label-md text-label-md font-semibold text-on-surface">
                      Fatima Kabir Sani
                    </span>
                    <span className="font-label-md text-label-md font-bold text-secondary">
                      ₦120,000
                    </span>
                  </div>
                  <div className="flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant">
                    <span>Primary 4 Emerald • Full Term</span>
                    <span className="px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-[10px] font-semibold">
                      Paystack
                    </span>
                  </div>
                  <div className="font-label-sm text-[11px] text-outline flex items-center justify-between mt-1">
                    <span>Rcpt: #NIIS-2026-893</span>
                    <span>1h 14m ago</span>
                  </div>
                </div>
                {/*  Payment 4  */}
                <div className="p-space-sm bg-surface-container-low rounded-lg flex flex-col gap-1">
                  <div className="flex items-start justify-between">
                    <span className="font-label-md text-label-md font-semibold text-on-surface">
                      Muhammad Bello
                    </span>
                    <span className="font-label-md text-label-md font-bold text-secondary">
                      ₦75,000
                    </span>
                  </div>
                  <div className="flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant">
                    <span>SSS 3 Arts • WAEC/NECO Reg Deposit</span>
                    <span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-outline font-label-sm text-[10px] font-semibold">
                      Cash Deposit
                    </span>
                  </div>
                  <div className="font-label-sm text-[11px] text-outline flex items-center justify-between mt-1">
                    <span>Rcpt: #NIIS-2026-894</span>
                    <span>2h 05m ago</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-space-md pt-space-xs text-center">
              <a
                className="font-label-sm text-label-sm text-primary font-semibold hover:underline"
                href="#"
              >
                View All 142 Realized Bursary Transactions →
              </a>
            </div>
          </div>
          {/*  Column 2: Milestones & School Calendar  */}
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-space-sm mb-space-md">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    event_upcoming
                  </span>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">
                    Institutional Milestones
                  </h2>
                </div>
                <span className="font-label-sm text-label-sm text-outline">
                  Oct - Nov 2026
                </span>
              </div>
              <div className="space-y-space-md">
                {/*  Milestone 1  */}
                <div className="flex items-start gap-space-sm">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high flex flex-col items-center justify-center shrink-0">
                    <span className="font-label-sm text-[10px] text-primary uppercase font-bold">
                      OCT
                    </span>
                    <span className="font-headline-sm text-headline-sm font-bold text-on-surface leading-none">
                      20
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-label-md text-label-md font-semibold text-on-surface truncate">
                      Mid-Term Continuous Assessment (CA)
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 line-clamp-2">
                      Test battery begins across all Primary &amp; Secondary
                      classrooms under standardized supervision.
                    </p>
                    <span className="inline-block mt-1 font-label-sm text-[11px] text-outline">
                      Kaduna State Unified Framework
                    </span>
                  </div>
                </div>
                {/*  Milestone 2  */}
                <div className="flex items-start gap-space-sm">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high flex flex-col items-center justify-center shrink-0">
                    <span className="font-label-sm text-[10px] text-primary uppercase font-bold">
                      OCT
                    </span>
                    <span className="font-headline-sm text-headline-sm font-bold text-on-surface leading-none">
                      24
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-label-md text-label-md font-semibold text-on-surface truncate">
                      PTA General Consultative Meeting
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 line-clamp-2">
                      Kaduna Assembly Hall &amp; Hybrid Video Feed for diaspora
                      parents.
                    </p>
                    <span className="inline-block mt-1 font-label-sm text-[11px] text-secondary font-semibold">
                      10:00 AM • Main Auditorium
                    </span>
                  </div>
                </div>
                {/*  Milestone 3  */}
                <div className="flex items-start gap-space-sm">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high flex flex-col items-center justify-center shrink-0">
                    <span className="font-label-sm text-[10px] text-primary uppercase font-bold">
                      OCT
                    </span>
                    <span className="font-headline-sm text-headline-sm font-bold text-on-surface leading-none">
                      28
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-label-md text-label-md font-semibold text-on-surface truncate">
                      Inter-House Sports &amp; Cultural Day
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 line-clamp-2">
                      Selection trials for Red, Blue, Green, and Gold houses at
                      school sports arena.
                    </p>
                    <span className="inline-block mt-1 font-label-sm text-[11px] text-outline">
                      Sports Commission Kaduna
                    </span>
                  </div>
                </div>
                {/*  Milestone 4  */}
                <div className="flex items-start gap-space-sm">
                  <div className="w-12 h-12 rounded-lg bg-error-container/40 flex flex-col items-center justify-center shrink-0">
                    <span className="font-label-sm text-[10px] text-error uppercase font-bold">
                      NOV
                    </span>
                    <span className="font-headline-sm text-headline-sm font-bold text-error leading-none">
                      05
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-label-md text-label-md font-semibold text-error truncate">
                      Kaduna Ministry of Education Inspection
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 line-clamp-2">
                      Annual QA &amp; Curriculum compliance audit for Secondary
                      Boarding &amp; Day Facilities.
                    </p>
                    <span className="inline-block mt-1 font-label-sm text-[11px] text-error font-medium">
                      Statutory Inspectorate Visit
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-space-md pt-space-xs text-center">
              <a
                className="font-label-sm text-label-sm text-primary font-semibold hover:underline"
                href="#"
              >
                Open Full School Calendar →
              </a>
            </div>
          </div>
          {/*  Column 3: Pending Administrative Tasks  */}
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-space-sm mb-space-md">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-on-tertiary-container text-[20px]">
                    assignment_turned_in
                  </span>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">
                    Administrative Approvals
                  </h2>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold">
                  23 Pending
                </span>
              </div>
              <div className="space-y-space-md">
                {/*  Task 1: Fee Discounts  */}
                <div className="p-space-sm bg-surface-container-low rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        percent
                      </span>
                      <div>
                        <h3 className="font-label-md text-label-md font-semibold text-on-surface">
                          Fee Discounts &amp; Scholarships
                        </h3>
                        <p className="font-body-sm text-[12px] text-on-surface-variant">
                          6 sibling &amp; merit requests awaiting Principal
                          sign-off
                        </p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">
                      6 Needs Action
                    </span>
                  </div>
                  <div className="mt-space-sm flex items-center justify-end gap-space-xs">
                    <button className="px-2.5 py-1 bg-surface-container-highest text-on-surface rounded font-label-sm text-label-sm hover:bg-surface-dim transition-colors">
                      Review Dossiers
                    </button>
                  </div>
                </div>
                {/*  Task 2: Staff Leave  */}
                <div className="p-space-sm bg-surface-container-low rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[20px]">
                        event_busy
                      </span>
                      <div>
                        <h3 className="font-label-md text-label-md font-semibold text-on-surface">
                          Staff Leave Authorization
                        </h3>
                        <p className="font-body-sm text-[12px] text-on-surface-variant">
                          Malam Garba Usman (Mathematics Dept) - 3 days medical
                        </p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-primary font-label-sm text-label-sm font-semibold">
                      3 Requests
                    </span>
                  </div>
                  <div className="mt-space-sm flex items-center justify-end gap-space-xs">
                    <button className="px-2.5 py-1 bg-primary text-on-primary rounded font-label-sm text-label-sm hover:bg-primary-container transition-colors">
                      Authorize Leave
                    </button>
                  </div>
                </div>
                {/*  Task 3: Transfer Certificates  */}
                <div className="p-space-sm bg-surface-container-low rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-outline text-[20px]">
                        move_up
                      </span>
                      <div>
                        <h3 className="font-label-md text-label-md font-semibold text-on-surface">
                          Student Transfer Clearance
                        </h3>
                        <p className="font-body-sm text-[12px] text-on-surface-variant">
                          14 certificate &amp; testimonial dossiers awaiting
                          clearance
                        </p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold">
                      14 Backlogged
                    </span>
                  </div>
                  <div className="mt-space-sm flex items-center justify-end gap-space-xs">
                    <button className="px-2.5 py-1 bg-surface-container-highest text-on-surface rounded font-label-sm text-label-sm hover:bg-surface-dim transition-colors">
                      Verify Bursary Status
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-space-md pt-space-xs text-center">
              <a
                className="font-label-sm text-label-sm text-primary font-semibold hover:underline"
                href="#"
              >
                Go to Executive Governance Portal →
              </a>
            </div>
          </div>
        </div>
        {/*  Operational Shortcuts & Module Launchpads  */}
        <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm mb-space-lg">
          <div className="flex items-center justify-between pb-space-sm mb-space-md">
            <div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">
                Administrative Module Launchpads
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Frequently used workflows for executive officers &amp; registry
                personnel
              </p>
            </div>
            <span className="font-label-sm text-label-sm text-outline">
              Terminal: NIIS-ADM-01
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {/*  Shortcut 1  */}
            <a
              className="group p-space-md bg-surface-container-low rounded-xl hover:bg-surface-container-high transition-all flex items-start gap-space-sm"
              href="#"
            >
              <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary group-hover:scale-105 transition-transform shadow-sm">
                <span className="material-symbols-outlined text-[22px]">
                  request_quote
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-label-md text-label-md font-semibold text-on-surface group-hover:text-primary transition-colors flex items-center justify-between">
                  <span>Fee Invoicing</span>
                  <span className="material-symbols-outlined text-[16px] text-outline group-hover:translate-x-0.5 transition-transform">
                    arrow_forward
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 line-clamp-1">
                  Generate bulk term bills &amp; levies
                </p>
              </div>
            </a>
            {/*  Shortcut 2  */}
            <a
              className="group p-space-md bg-surface-container-low rounded-xl hover:bg-surface-container-high transition-all flex items-start gap-space-sm"
              href="#"
            >
              <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-secondary group-hover:scale-105 transition-transform shadow-sm">
                <span className="material-symbols-outlined text-[22px]">
                  schedule
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-label-md text-label-md font-semibold text-on-surface group-hover:text-secondary transition-colors flex items-center justify-between">
                  <span>Class Timetables</span>
                  <span className="material-symbols-outlined text-[16px] text-outline group-hover:translate-x-0.5 transition-transform">
                    arrow_forward
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 line-clamp-1">
                  Inspect lecture rooms &amp; allocations
                </p>
              </div>
            </a>
            {/*  Shortcut 3  */}
            <a
              className="group p-space-md bg-surface-container-low rounded-xl hover:bg-surface-container-high transition-all flex items-start gap-space-sm"
              href="#"
            >
              <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-on-tertiary-container group-hover:scale-105 transition-transform shadow-sm">
                <span className="material-symbols-outlined text-[22px]">
                  workspace_premium
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-label-md text-label-md font-semibold text-on-surface group-hover:text-on-tertiary-container transition-colors flex items-center justify-between">
                  <span>Report Card Compiler</span>
                  <span className="material-symbols-outlined text-[16px] text-outline group-hover:translate-x-0.5 transition-transform">
                    arrow_forward
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 line-clamp-1">
                  CA &amp; Exam score reconciliation
                </p>
              </div>
            </a>
            {/*  Shortcut 4  */}
            <a
              className="group p-space-md bg-surface-container-low rounded-xl hover:bg-surface-container-high transition-all flex items-start gap-space-sm"
              href="#"
            >
              <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary-container group-hover:scale-105 transition-transform shadow-sm">
                <span className="material-symbols-outlined text-[22px]">
                  payments
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-label-md text-label-md font-semibold text-on-surface group-hover:text-primary transition-colors flex items-center justify-between">
                  <span>Staff Payroll (₦)</span>
                  <span className="material-symbols-outlined text-[16px] text-outline group-hover:translate-x-0.5 transition-transform">
                    arrow_forward
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 line-clamp-1">
                  October 2026 salary schedule
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
