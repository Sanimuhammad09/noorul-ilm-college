import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(
  "/admin/library-services-learning-resource-center",
)({
  component: LibraryServicesLearningResourceCenter,
});

function LibraryServicesLearningResourceCenter() {
  return (
    <main className="w-full pt-16 px-space-lg py-space-lg flex-1 bg-background">
      <div className="flex flex-col w-full">
        <div className="flex flex-col gap-space-md mb-space-lg">
          <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
            <span className="hover:text-primary transition-colors cursor-pointer">
              Student Services
            </span>
            <span className="material-symbols-outlined text-[14px]">
              chevron_right
            </span>
            <span className="hover:text-primary transition-colors cursor-pointer">
              Library Management
            </span>
            <span className="material-symbols-outlined text-[14px]">
              chevron_right
            </span>
            <span className="text-primary font-semibold">
              Learning Resource Center &amp; Catalog
            </span>
          </div>
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md">
            <div>
              <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                Library Services &amp; Learning Resource Center
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">
                Digital book repository, WAEC/NECO textbook bank, catalog
                circulation, and student lending tracking.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-space-sm">
              <button
                className="flex items-center gap-1.5 px-space-md py-2 bg-surface-container-lowest text-on-surface font-label-md text-label-md rounded-lg shadow-sm hover:bg-surface-container transition-colors"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                  upload_file
                </span>
                <span>Bulk ISBN Import</span>
              </button>
              <button
                className="flex items-center gap-1.5 px-space-md py-2 bg-surface-container-lowest text-on-surface font-label-md text-label-md rounded-lg shadow-sm hover:bg-surface-container transition-colors"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px] text-tertiary-container">
                  receipt_long
                </span>
                <span>Overdue Fines Ledger</span>
              </button>
              <button
                className="flex items-center gap-1.5 px-space-md py-2 bg-secondary text-on-secondary font-label-md text-label-md rounded-lg shadow-sm hover:bg-secondary/90 transition-colors"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">
                  bolt
                </span>
                <span>Quick Circulation</span>
              </button>
              <button
                className="flex items-center gap-1.5 px-space-md py-2 bg-primary text-on-primary font-label-md text-label-md rounded-lg shadow-sm hover:bg-primary-container transition-colors"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">
                  add_circle
                </span>
                <span>Register New Book/Media</span>
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md mb-space-lg">
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary-fixed/20 rounded-full blur-xl pointer-events-none"></div>
            <div className="flex items-start justify-between">
              <div>
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block">
                  Total Catalog Volumes
                </span>
                <span className="font-metric-lg text-metric-lg text-primary font-bold mt-1 block">
                  14,850
                </span>
              </div>
              <div className="p-2.5 bg-primary-fixed rounded-lg text-primary">
                <span className="material-symbols-outlined text-[24px]">
                  menu_book
                </span>
              </div>
            </div>
            <div className="mt-space-md pt-space-sm bg-surface-container-low/40 rounded-lg p-space-sm">
              <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                <span className="material-symbols-outlined text-secondary text-[16px]">
                  verified
                </span>
                <span>Curriculum Textbooks, Islamic Lit &amp; Science</span>
              </p>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block">
                  Active Circulations
                </span>
                <span className="font-metric-lg text-metric-lg text-secondary font-bold mt-1 block">
                  482
                </span>
              </div>
              <div className="p-2.5 bg-secondary-container rounded-lg text-on-secondary-container">
                <span className="material-symbols-outlined text-[24px]">
                  swap_horizontal_circle
                </span>
              </div>
            </div>
            <div className="mt-space-md pt-space-sm">
              <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm mb-1.5">
                <span>340 Students</span>
                <span className="text-on-surface font-semibold">
                  142 Faculty
                </span>
              </div>
              <div className="w-full bg-surface-container rounded-full h-2 overflow-hidden flex">
                <div className="bg-secondary h-full rounded-full w-[70.5%]"></div>
                <div className="bg-secondary-fixed-dim h-full w-[29.5%]"></div>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block">
                  Overdue Returns
                </span>
                <span className="font-metric-lg text-metric-lg text-error font-bold mt-1 block">
                  19
                </span>
              </div>
              <div className="p-2.5 bg-error-container rounded-lg text-on-error-container">
                <span className="material-symbols-outlined text-[24px]">
                  history_toggle_off
                </span>
              </div>
            </div>
            <div className="mt-space-md pt-space-sm bg-error-container/30 rounded-lg p-space-sm flex items-center justify-between">
              <span className="font-body-sm text-body-sm text-error font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">
                  sms_failed
                </span>
                Parent SMS reminders queued
              </span>
              <span className="font-label-sm text-label-sm bg-error text-on-error px-2 py-0.5 rounded-full font-bold">
                19 Pending
              </span>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block">
                  Digital e-Library Access
                </span>
                <span className="font-metric-lg text-metric-lg text-tertiary-container font-bold mt-1 block">
                  820
                </span>
              </div>
              <div className="p-2.5 bg-tertiary-fixed rounded-lg text-tertiary">
                <span className="material-symbols-outlined text-[24px]">
                  devices
                </span>
              </div>
            </div>
            <div className="mt-space-md pt-space-sm flex items-center justify-between">
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Daily lab &amp; tablet sessions
              </span>
              <span className="font-label-sm text-label-sm text-secondary font-bold flex items-center">
                <span className="material-symbols-outlined text-[16px]">
                  trending_up
                </span>{" "}
                +14.8%
              </span>
            </div>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm mb-space-lg">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-md mb-space-md">
            <div className="relative flex-1">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[20px]">
                search
              </span>
              <input
                className="w-full pl-11 pr-4 py-2.5 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="Search library collection by Title, Author, Accession, ISBN, Subject (e.g. New General Mathematics, Essential Physics)..."
                type="text"
              />
            </div>
            <div className="flex flex-wrap items-center gap-space-sm">
              <div className="flex items-center gap-1.5 px-3 py-2 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface">
                <span className="text-outline text-label-sm uppercase font-semibold">
                  Filter:
                </span>
                <select className="bg-transparent font-medium text-on-surface focus:outline-none cursor-pointer">
                  <option>All Categories (14,850)</option>
                  <option>Senior Secondary (SSS)</option>
                  <option>Junior Secondary (JSS)</option>
                  <option>Primary School</option>
                  <option>Islamic Studies &amp; Arabic Texts</option>
                  <option>Teacher References</option>
                </select>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-2 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface">
                <span className="text-outline text-label-sm uppercase font-semibold">
                  Status:
                </span>
                <select className="bg-transparent font-medium text-on-surface focus:outline-none cursor-pointer">
                  <option>All Statuses</option>
                  <option>Available On Shelf</option>
                  <option>Checked Out</option>
                  <option>Reserved</option>
                </select>
              </div>
            </div>
          </div>
          <div className="p-space-md bg-surface-container rounded-xl flex flex-col xl:flex-row items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-sm w-full xl:w-auto">
              <div className="p-2 bg-primary text-on-primary rounded-lg shrink-0">
                <span className="material-symbols-outlined text-[20px]">
                  barcode_scanner
                </span>
              </div>
              <div className="min-w-0">
                <h4 className="font-headline-sm text-headline-sm text-primary truncate">
                  Fast Desk Issue / Return Terminal
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                  Scan barcode scanner or enter manual identification tokens
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-space-sm w-full xl:w-auto flex-1 max-w-3xl justify-end">
              <div className="relative w-full sm:w-56">
                <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-outline text-[16px]">
                  badge
                </span>
                <input
                  className="w-full pl-8 pr-3 py-1.5 bg-surface-container-lowest rounded-lg font-body-sm text-body-sm font-medium text-on-surface placeholder:text-outline focus:outline-none"
                  placeholder="Student ID"
                  type="text"
                  value="NIIS/2024/0118"
                />
              </div>
              <div className="relative w-full sm:w-56">
                <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-outline text-[16px]">
                  qr_code_2
                </span>
                <input
                  className="w-full pl-8 pr-3 py-1.5 bg-surface-container-lowest rounded-lg font-body-sm text-body-sm font-medium text-on-surface placeholder:text-outline focus:outline-none"
                  placeholder="Accession Barcode"
                  type="text"
                  value="BK-PHY-2026-089"
                />
              </div>
              <button
                className="w-full sm:w-auto shrink-0 flex items-center justify-center gap-1.5 px-space-md py-1.5 bg-primary text-on-primary font-label-md text-label-md rounded-lg shadow-sm hover:bg-primary-container transition-colors"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">
                  assignment_turned_in
                </span>
                <span>Issue (14-Day: 30 Oct 2026)</span>
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
          <div className="xl:col-span-8 flex flex-col gap-space-md">
            <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
              <div className="p-space-lg flex items-center justify-between bg-surface-container-low/50">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-[22px]">
                    auto_stories
                  </span>
                  <h2 className="font-headline-sm text-headline-sm text-primary">
                    Textbook Bank &amp; Media Repository
                  </h2>
                </div>
                <div className="flex items-center gap-space-sm">
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                    Displaying 6 of 14,850 volumes
                  </span>
                  <button
                    className="p-1 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      tune
                    </span>
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                      <th className="py-3 px-space-md font-semibold">
                        Title &amp; Classification
                      </th>
                      <th className="py-3 px-space-md font-semibold">
                        Accession / ISBN
                      </th>
                      <th className="py-3 px-space-md font-semibold">
                        Stack Location
                      </th>
                      <th className="py-3 px-space-md font-semibold text-center">
                        Copies (Stock)
                      </th>
                      <th className="py-3 px-space-md font-semibold">
                        Current Lending
                      </th>
                      <th className="py-3 px-space-md font-semibold text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y-0 text-on-surface font-body-sm text-body-sm">
                    <tr className="hover:bg-surface-container-low/60 transition-colors">
                      <td className="py-3.5 px-space-md">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-12 bg-primary-container text-on-primary rounded flex flex-col items-center justify-center shrink-0 shadow-sm">
                            <span className="material-symbols-outlined text-[18px]">
                              calculate
                            </span>
                            <span className="text-[8px] font-bold tracking-tight">
                              MTH
                            </span>
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="font-label-md text-label-md font-bold text-on-surface truncate">
                              New General Mathematics for SSS 2
                            </span>
                            <span className="text-on-surface-variant text-body-sm truncate">
                              Pearson / Longman • SSS Curriculum Track
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-space-md font-mono text-[11px] text-on-surface-variant whitespace-nowrap">
                        <span className="font-semibold text-primary block">
                          BK-MTH-0294
                        </span>
                        <span>978-978-01-4421-2</span>
                      </td>
                      <td className="py-3.5 px-space-md whitespace-nowrap">
                        <span className="font-medium block">
                          Shelf B4, Bay 2
                        </span>
                        <span className="text-outline text-[11px]">
                          Senior Science Sec.
                        </span>
                      </td>
                      <td className="py-3.5 px-space-md text-center whitespace-nowrap">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-label-sm font-semibold bg-secondary-container text-on-secondary-container">
                          14 Available / 18
                        </span>
                      </td>
                      <td className="py-3.5 px-space-md whitespace-nowrap">
                        <div className="flex flex-col">
                          <span className="font-semibold text-on-surface truncate">
                            Aisha Mansur Danbaba
                          </span>
                          <span className="text-secondary font-medium text-[11px]">
                            SSS 2 Science A • Due in 6 days
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-space-md text-right whitespace-nowrap">
                        <div className="inline-flex items-center gap-1">
                          <button
                            className="px-2.5 py-1 bg-primary text-on-primary rounded font-label-sm text-label-sm hover:bg-primary-container transition-colors"
                            type="button"
                          >
                            Issue
                          </button>
                          <button
                            className="px-2.5 py-1 bg-surface-container-high text-on-surface rounded font-label-sm text-label-sm hover:bg-surface-variant transition-colors"
                            type="button"
                          >
                            Reserve
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-low/60 transition-colors bg-surface-container-lowest">
                      <td className="py-3.5 px-space-md">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-12 bg-secondary text-on-secondary rounded flex flex-col items-center justify-center shrink-0 shadow-sm">
                            <span className="material-symbols-outlined text-[18px]">
                              biotech
                            </span>
                            <span className="text-[8px] font-bold tracking-tight">
                              BIO
                            </span>
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="font-label-md text-label-md font-bold text-on-surface truncate">
                              Essential Biology for Senior Secondary
                            </span>
                            <span className="text-on-surface-variant text-body-sm truncate">
                              K.S. Cole • Africana First Publishers
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-space-md font-mono text-[11px] text-on-surface-variant whitespace-nowrap">
                        <span className="font-semibold text-primary block">
                          BK-BIO-0112
                        </span>
                        <span>978-978-175-302-1</span>
                      </td>
                      <td className="py-3.5 px-space-md whitespace-nowrap">
                        <span className="font-medium block">
                          Shelf C1, Bay 1
                        </span>
                        <span className="text-outline text-[11px]">
                          Life Sciences Section
                        </span>
                      </td>
                      <td className="py-3.5 px-space-md text-center whitespace-nowrap">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-label-sm font-semibold bg-secondary-container text-on-secondary-container">
                          22 Available / 25
                        </span>
                      </td>
                      <td className="py-3.5 px-space-md whitespace-nowrap">
                        <div className="flex flex-col">
                          <span className="font-semibold text-on-surface truncate">
                            Bello Mohammed Aliyu
                          </span>
                          <span className="text-secondary font-medium text-[11px]">
                            SSS 3 Science B • Due in 9 days
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-space-md text-right whitespace-nowrap">
                        <div className="inline-flex items-center gap-1">
                          <button
                            className="px-2.5 py-1 bg-primary text-on-primary rounded font-label-sm text-label-sm hover:bg-primary-container transition-colors"
                            type="button"
                          >
                            Issue
                          </button>
                          <button
                            className="px-2.5 py-1 bg-surface-container-high text-on-surface rounded font-label-sm text-label-sm hover:bg-surface-variant transition-colors"
                            type="button"
                          >
                            Reserve
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-low/60 transition-colors">
                      <td className="py-3.5 px-space-md">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-12 bg-tertiary-container text-on-tertiary-container rounded flex flex-col items-center justify-center shrink-0 shadow-sm">
                            <span className="material-symbols-outlined text-[18px]">
                              auto_stories
                            </span>
                            <span className="text-[8px] font-bold tracking-tight">
                              ENG
                            </span>
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="font-label-md text-label-md font-bold text-on-surface truncate">
                              Things Fall Apart &amp; Selected African Prose
                            </span>
                            <span className="text-on-surface-variant text-body-sm truncate">
                              Chinua Achebe • Heinemann African Writers
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-space-md font-mono text-[11px] text-on-surface-variant whitespace-nowrap">
                        <span className="font-semibold text-primary block">
                          BK-LIT-0842
                        </span>
                        <span>978-0-385-47454-2</span>
                      </td>
                      <td className="py-3.5 px-space-md whitespace-nowrap">
                        <span className="font-medium block">
                          Shelf E3, Bay 4
                        </span>
                        <span className="text-outline text-[11px]">
                          African Literature
                        </span>
                      </td>
                      <td className="py-3.5 px-space-md text-center whitespace-nowrap">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-label-sm font-semibold bg-tertiary-fixed text-on-tertiary-fixed-variant">
                          2 Available / 30
                        </span>
                      </td>
                      <td className="py-3.5 px-space-md whitespace-nowrap">
                        <div className="flex flex-col">
                          <span className="font-semibold text-on-surface truncate">
                            Hauwa Abdullahi Mustapha
                          </span>
                          <span className="text-secondary font-medium text-[11px]">
                            SSS 1 Arts • Due in 3 days
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-space-md text-right whitespace-nowrap">
                        <div className="inline-flex items-center gap-1">
                          <button
                            className="px-2.5 py-1 bg-primary text-on-primary rounded font-label-sm text-label-sm hover:bg-primary-container transition-colors"
                            type="button"
                          >
                            Issue
                          </button>
                          <button
                            className="px-2.5 py-1 bg-surface-container-high text-on-surface rounded font-label-sm text-label-sm hover:bg-surface-variant transition-colors"
                            type="button"
                          >
                            Reserve
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-low/60 transition-colors bg-surface-container-lowest">
                      <td className="py-3.5 px-space-md">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-12 bg-secondary-fixed text-on-secondary-fixed-variant rounded flex flex-col items-center justify-center shrink-0 shadow-sm">
                            <span className="material-symbols-outlined text-[18px]">
                              menu_book
                            </span>
                            <span className="text-[8px] font-bold tracking-tight">
                              ARB
                            </span>
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="font-label-md text-label-md font-bold text-on-surface truncate">
                              Riyadhus Saliheen (Gardens of the Righteous)
                            </span>
                            <span className="text-on-surface-variant text-body-sm truncate">
                              Imam An-Nawawi • Darussalam Edition (Ar/En)
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-space-md font-mono text-[11px] text-on-surface-variant whitespace-nowrap">
                        <span className="font-semibold text-primary block">
                          BK-IRS-0056
                        </span>
                        <span>978-9-960-71708-1</span>
                      </td>
                      <td className="py-3.5 px-space-md whitespace-nowrap">
                        <span className="font-medium block">
                          Shelf A1, Bay 1
                        </span>
                        <span className="text-outline text-[11px]">
                          Islamic Heritage Stack
                        </span>
                      </td>
                      <td className="py-3.5 px-space-md text-center whitespace-nowrap">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-label-sm font-semibold bg-secondary-container text-on-secondary-container">
                          16 Available / 20
                        </span>
                      </td>
                      <td className="py-3.5 px-space-md whitespace-nowrap">
                        <div className="flex flex-col">
                          <span className="font-semibold text-on-surface truncate">
                            Ustadh Ibrahim Zakari
                          </span>
                          <span className="text-on-surface-variant font-medium text-[11px]">
                            Faculty (IRS) • Due 14 Nov
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-space-md text-right whitespace-nowrap">
                        <div className="inline-flex items-center gap-1">
                          <button
                            className="px-2.5 py-1 bg-primary text-on-primary rounded font-label-sm text-label-sm hover:bg-primary-container transition-colors"
                            type="button"
                          >
                            Issue
                          </button>
                          <button
                            className="px-2.5 py-1 bg-surface-container-high text-on-surface rounded font-label-sm text-label-sm hover:bg-surface-variant transition-colors"
                            type="button"
                          >
                            Reserve
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-low/60 transition-colors">
                      <td className="py-3.5 px-space-md">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-12 bg-primary-fixed text-primary rounded flex flex-col items-center justify-center shrink-0 shadow-sm">
                            <span className="material-symbols-outlined text-[18px]">
                              account_balance
                            </span>
                            <span className="text-[8px] font-bold tracking-tight">
                              SOS
                            </span>
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="font-label-md text-label-md font-bold text-on-surface truncate">
                              Kaduna State Social Studies &amp; Civic Guide
                            </span>
                            <span className="text-on-surface-variant text-body-sm truncate">
                              Kaduna Ministry of Education &amp; SUBEB
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-space-md font-mono text-[11px] text-on-surface-variant whitespace-nowrap">
                        <span className="font-semibold text-primary block">
                          BK-CIV-0418
                        </span>
                        <span>978-978-842-109-0</span>
                      </td>
                      <td className="py-3.5 px-space-md whitespace-nowrap">
                        <span className="font-medium block">
                          Shelf D2, Bay 3
                        </span>
                        <span className="text-outline text-[11px]">
                          Civic &amp; History Archive
                        </span>
                      </td>
                      <td className="py-3.5 px-space-md text-center whitespace-nowrap">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-label-sm font-semibold bg-secondary-container text-on-secondary-container">
                          40 Available / 45
                        </span>
                      </td>
                      <td className="py-3.5 px-space-md whitespace-nowrap">
                        <div className="flex flex-col">
                          <span className="font-semibold text-on-surface truncate">
                            Suleiman Garba Jibril
                          </span>
                          <span className="text-secondary font-medium text-[11px]">
                            JSS 2 Diamond • Due in 11 days
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-space-md text-right whitespace-nowrap">
                        <div className="inline-flex items-center gap-1">
                          <button
                            className="px-2.5 py-1 bg-primary text-on-primary rounded font-label-sm text-label-sm hover:bg-primary-container transition-colors"
                            type="button"
                          >
                            Issue
                          </button>
                          <button
                            className="px-2.5 py-1 bg-surface-container-high text-on-surface rounded font-label-sm text-label-sm hover:bg-surface-variant transition-colors"
                            type="button"
                          >
                            Reserve
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-surface-container-low/60 transition-colors bg-surface-container-lowest">
                      <td className="py-3.5 px-space-md">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-12 bg-surface-container-highest text-on-surface rounded flex flex-col items-center justify-center shrink-0 shadow-sm">
                            <span className="material-symbols-outlined text-[18px]">
                              architecture
                            </span>
                            <span className="text-[8px] font-bold tracking-tight">
                              TEC
                            </span>
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="font-label-md text-label-md font-bold text-on-surface truncate">
                              Junior Secondary Basic Tech &amp; Technical
                              Drawing
                            </span>
                            <span className="text-on-surface-variant text-body-sm truncate">
                              F.E. Green • Evans Brothers Nigeria
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-space-md font-mono text-[11px] text-on-surface-variant whitespace-nowrap">
                        <span className="font-semibold text-primary block">
                          BK-TEC-0199
                        </span>
                        <span>978-978-020-551-7</span>
                      </td>
                      <td className="py-3.5 px-space-md whitespace-nowrap">
                        <span className="font-medium block">
                          Shelf C3, Bay 2
                        </span>
                        <span className="text-outline text-[11px]">
                          Applied Engineering
                        </span>
                      </td>
                      <td className="py-3.5 px-space-md text-center whitespace-nowrap">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-label-sm font-semibold bg-error-container text-on-error-container">
                          0 Available / 15
                        </span>
                      </td>
                      <td className="py-3.5 px-space-md whitespace-nowrap">
                        <div className="flex flex-col">
                          <span className="font-semibold text-on-surface truncate">
                            Farouk Umar Sadiq
                          </span>
                          <span className="text-error font-medium text-[11px]">
                            JSS 3 Gold • 2 Days Overdue
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-space-md text-right whitespace-nowrap">
                        <div className="inline-flex items-center gap-1">
                          <button
                            className="px-2.5 py-1 bg-surface-container text-outline rounded font-label-sm text-label-sm cursor-not-allowed"
                            disabled
                            type="button"
                          >
                            Out
                          </button>
                          <button
                            className="px-2.5 py-1 bg-primary text-on-primary rounded font-label-sm text-label-sm hover:bg-primary-container transition-colors"
                            type="button"
                          >
                            Queue
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-space-md bg-surface-container-low/50 flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-surface-variant font-label-sm text-label-sm">
                <span>Showing records 1 to 6 of 14,850 catalog items</span>
                <div className="flex items-center gap-1">
                  <button
                    className="px-3 py-1 bg-surface-container-lowest rounded hover:bg-surface-container text-on-surface"
                    type="button"
                  >
                    Prev
                  </button>
                  <button
                    className="px-3 py-1 bg-primary text-on-primary rounded font-bold"
                    type="button"
                  >
                    1
                  </button>
                  <button
                    className="px-3 py-1 bg-surface-container-lowest rounded hover:bg-surface-container text-on-surface"
                    type="button"
                  >
                    2
                  </button>
                  <button
                    className="px-3 py-1 bg-surface-container-lowest rounded hover:bg-surface-container text-on-surface"
                    type="button"
                  >
                    3
                  </button>
                  <span className="px-1 text-outline">...</span>
                  <button
                    className="px-3 py-1 bg-surface-container-lowest rounded hover:bg-surface-container text-on-surface"
                    type="button"
                  >
                    2,475
                  </button>
                  <button
                    className="px-3 py-1 bg-surface-container-lowest rounded hover:bg-surface-container text-on-surface"
                    type="button"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-space-md">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-secondary text-[22px]">
                    laptop_chromebook
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    Digital Learning Devices &amp; E-Reader Terminals
                  </h3>
                </div>
                <span className="font-label-sm text-label-sm text-secondary font-semibold bg-secondary-container px-2.5 py-0.5 rounded-full">
                  48 Units Active
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                <div className="p-space-md rounded-lg bg-surface-container-low flex items-center gap-space-md">
                  <div className="p-3 bg-surface-container-lowest rounded-lg text-primary shadow-sm">
                    <span className="material-symbols-outlined text-[24px]">
                      tablet_mac
                    </span>
                  </div>
                  <div className="min-w-0">
                    <span className="font-label-md text-label-md text-on-surface font-bold block truncate">
                      Kindle / Galaxy Tab Units
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant block">
                      32 of 36 Deployed
                    </span>
                    <span className="font-label-sm text-[10px] text-secondary font-semibold mt-0.5 block">
                      88% Capacity
                    </span>
                  </div>
                </div>
                <div className="p-space-md rounded-lg bg-surface-container-low flex items-center gap-space-md">
                  <div className="p-3 bg-surface-container-lowest rounded-lg text-secondary shadow-sm">
                    <span className="material-symbols-outlined text-[24px]">
                      desktop_windows
                    </span>
                  </div>
                  <div className="min-w-0">
                    <span className="font-label-md text-label-md text-on-surface font-bold block truncate">
                      E-Research Desktops
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant block">
                      20 Stations Free
                    </span>
                    <span className="font-label-sm text-[10px] text-primary font-semibold mt-0.5 block">
                      Jamb / WAEC CBT Lab
                    </span>
                  </div>
                </div>
                <div className="p-space-md rounded-lg bg-surface-container-low flex items-center gap-space-md">
                  <div className="p-3 bg-surface-container-lowest rounded-lg text-tertiary shadow-sm">
                    <span className="material-symbols-outlined text-[24px]">
                      wifi
                    </span>
                  </div>
                  <div className="min-w-0">
                    <span className="font-label-md text-label-md text-on-surface font-bold block truncate">
                      Kaduna EdNet Fiber
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant block">
                      99.4% Uptime
                    </span>
                    <span className="font-label-sm text-[10px] text-secondary font-semibold mt-0.5 block">
                      Direct MoE Gateway
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:col-span-4 flex flex-col gap-space-lg">
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
              <div className="flex items-center justify-between pb-space-sm mb-space-md">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-error text-[22px]">
                    notification_important
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-error">
                    Overdue Lending &amp; Fines
                  </h3>
                </div>
                <span className="font-label-sm text-label-sm bg-error-container text-on-error-container px-2 py-0.5 rounded-full font-bold">
                  19 Defaulting
                </span>
              </div>
              <div className="space-y-space-md">
                <div className="p-space-md bg-surface-container-low rounded-lg flex flex-col gap-space-xs">
                  <div className="flex items-start justify-between gap-space-xs">
                    <div>
                      <span className="font-label-md text-label-md font-bold text-on-surface block">
                        Farouk Umar Sadiq
                      </span>
                      <span className="font-body-sm text-[11px] text-on-surface-variant block">
                        JSS 3 Gold • Admission ID: NIIS/2023/0488
                      </span>
                    </div>
                    <span className="px-2 py-0.5 bg-error text-on-error font-label-sm text-[10px] rounded-full font-bold">
                      2 Days Overdue
                    </span>
                  </div>
                  <div className="mt-1 flex items-center justify-between text-body-sm text-on-surface-variant">
                    <span className="truncate max-w-[180px]">
                      Basic Tech &amp; Drawing
                    </span>
                    <span className="font-bold text-on-surface text-label-md">
                      Fine: ₦200
                    </span>
                  </div>
                  <div className="mt-2 pt-2 flex items-center gap-space-xs">
                    <button
                      className="flex-1 py-1.5 px-2 bg-error text-on-error font-label-sm text-label-sm rounded flex items-center justify-center gap-1 hover:bg-error/90 transition-colors"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[14px]">
                        send
                      </span>
                      <span>Send SMS Reminder</span>
                    </button>
                    <button
                      className="py-1.5 px-3 bg-surface-container-lowest text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm rounded transition-colors"
                      type="button"
                    >
                      Waive
                    </button>
                  </div>
                </div>
                <div className="p-space-md bg-surface-container-low rounded-lg flex flex-col gap-space-xs">
                  <div className="flex items-start justify-between gap-space-xs">
                    <div>
                      <span className="font-label-md text-label-md font-bold text-on-surface block">
                        Zainab Yakubu
                      </span>
                      <span className="font-body-sm text-[11px] text-on-surface-variant block">
                        SSS 2 Commercial • ID: NIIS/2024/0912
                      </span>
                    </div>
                    <span className="px-2 py-0.5 bg-error text-on-error font-label-sm text-[10px] rounded-full font-bold">
                      4 Days Overdue
                    </span>
                  </div>
                  <div className="mt-1 flex items-center justify-between text-body-sm text-on-surface-variant">
                    <span className="truncate max-w-[180px]">
                      Financial Accounting SSS
                    </span>
                    <span className="font-bold text-on-surface text-label-md">
                      Fine: ₦400
                    </span>
                  </div>
                  <div className="mt-2 pt-2 flex items-center gap-space-xs">
                    <button
                      className="flex-1 py-1.5 px-2 bg-error text-on-error font-label-sm text-label-sm rounded flex items-center justify-center gap-1 hover:bg-error/90 transition-colors"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[14px]">
                        send
                      </span>
                      <span>Send SMS Reminder</span>
                    </button>
                    <button
                      className="py-1.5 px-3 bg-surface-container-lowest text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm rounded transition-colors"
                      type="button"
                    >
                      Waive
                    </button>
                  </div>
                </div>
                <div className="p-space-md bg-surface-container-low rounded-lg flex flex-col gap-space-xs">
                  <div className="flex items-start justify-between gap-space-xs">
                    <div>
                      <span className="font-label-md text-label-md font-bold text-on-surface block">
                        Aliyu Abdullahi Kano
                      </span>
                      <span className="font-body-sm text-[11px] text-on-surface-variant block">
                        SSS 3 Science A • ID: NIIS/2022/0104
                      </span>
                    </div>
                    <span className="px-2 py-0.5 bg-error text-on-error font-label-sm text-[10px] rounded-full font-bold">
                      5 Days Overdue
                    </span>
                  </div>
                  <div className="mt-1 flex items-center justify-between text-body-sm text-on-surface-variant">
                    <span className="truncate max-w-[180px]">
                      Calculus &amp; Further Maths
                    </span>
                    <span className="font-bold text-on-surface text-label-md">
                      Fine: ₦500
                    </span>
                  </div>
                  <div className="mt-2 pt-2 flex items-center gap-space-xs">
                    <button
                      className="flex-1 py-1.5 px-2 bg-error text-on-error font-label-sm text-label-sm rounded flex items-center justify-center gap-1 hover:bg-error/90 transition-colors"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[14px]">
                        send
                      </span>
                      <span>Send SMS Reminder</span>
                    </button>
                    <button
                      className="py-1.5 px-3 bg-surface-container-lowest text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm rounded transition-colors"
                      type="button"
                    >
                      Waive
                    </button>
                  </div>
                </div>
              </div>
              <button
                className="w-full mt-space-md py-2 text-center text-primary font-label-sm text-label-sm hover:underline flex items-center justify-center gap-1"
                type="button"
              >
                <span>Open Full Fine Reconciliation Ledger (₦8,600 Total)</span>
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </button>
            </div>
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
              <div className="flex items-center justify-between pb-space-sm mb-space-md">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[22px]">
                    leaderboard
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    Most Borrowed This Term
                  </h3>
                </div>
                <span className="font-label-sm text-label-sm text-outline font-semibold">
                  1st Term 2026/27
                </span>
              </div>
              <div className="space-y-space-md">
                <div className="space-y-1">
                  <div className="flex items-center justify-between font-label-sm text-label-sm">
                    <span className="font-bold text-on-surface truncate max-w-[200px]">
                      1. New General Maths SSS 2
                    </span>
                    <span className="text-primary font-bold">142 borrows</span>
                  </div>
                  <div className="w-full bg-surface-container rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-[95%]"></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between font-label-sm text-label-sm">
                    <span className="font-bold text-on-surface truncate max-w-[200px]">
                      2. Essential Biology for SSS
                    </span>
                    <span className="text-secondary font-bold">
                      118 borrows
                    </span>
                  </div>
                  <div className="w-full bg-surface-container rounded-full h-2">
                    <div className="bg-secondary h-2 rounded-full w-[78%]"></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between font-label-sm text-label-sm">
                    <span className="font-bold text-on-surface truncate max-w-[200px]">
                      3. Things Fall Apart (Achebe)
                    </span>
                    <span className="text-tertiary font-bold">96 borrows</span>
                  </div>
                  <div className="w-full bg-surface-container rounded-full h-2">
                    <div className="bg-tertiary-container h-2 rounded-full w-[64%]"></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between font-label-sm text-label-sm">
                    <span className="font-bold text-on-surface truncate max-w-[200px]">
                      4. Riyadhus Saliheen (Hadith)
                    </span>
                    <span className="text-primary font-bold">84 borrows</span>
                  </div>
                  <div className="w-full bg-surface-container rounded-full h-2">
                    <div className="bg-primary-container h-2 rounded-full w-[56%]"></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between font-label-sm text-label-sm">
                    <span className="font-bold text-on-surface truncate max-w-[200px]">
                      5. Basic Tech &amp; Drawing JSS
                    </span>
                    <span className="text-on-surface-variant font-bold">
                      71 borrows
                    </span>
                  </div>
                  <div className="w-full bg-surface-container rounded-full h-2">
                    <div className="bg-outline h-2 rounded-full w-[47%]"></div>
                  </div>
                </div>
              </div>
              <div className="mt-space-lg p-space-md bg-surface-container-low rounded-lg">
                <div className="flex items-center gap-space-sm mb-2">
                  <img
                    className="w-12 h-12 rounded-lg object-cover shadow-sm shrink-0"
                    data-alt="Warm photograph of the quiet and sunlit library reading room at Noorul Ilm International School Kaduna with students wearing clean navy uniforms reading alongside book stacks"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl5-7WT2LMjxAd3kkwx_-UN0O1UOvDPaTyBhfOlmllYR3YzvkvW8Fvw-BQmHoOVz-CzvncIuLVmopmECwy7F3-azaZj1arV8N8OSIMaaZC6u8g3t6QmuWpCdSz72robcWfZMN85UCKuo6OLvgHrq-RNM9Eb00wi5pIEusRQ3GlTkf2rH7PIqlyt9336AuEPgkesGwO3n9BgjGcKue9fL5mqCatzWcYyc_wMTHTuUUO1zjCnf6fPVWs4A"
                  />
                  <div className="min-w-0">
                    <span className="font-label-sm text-label-sm font-bold text-on-surface block truncate">
                      Reading Room Capacity
                    </span>
                    <span className="font-body-sm text-[11px] text-on-surface-variant block">
                      Main Hall: 120 seats • 84% full
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1 font-label-sm text-label-sm text-outline">
                  <span>Next Study Bell: 2:00 PM</span>
                  <span className="text-secondary font-bold">Open Access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
