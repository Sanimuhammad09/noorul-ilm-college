import { Outlet, createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
});

function AdminLayout() {
  return (
    <div className="bg-background font-body-md text-on-surface antialiased">
      <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between overflow-y-auto">
        <div className="flex flex-col">
          <div className="h-16 px-space-md flex items-center gap-space-sm bg-surface-container-lowest">
            <img
              alt="Noorul Ilm International School Crest Logo"
              className="h-8 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida/AEtjO1UnsEmf0aNfbe6KbA2I2KOjy-AjJPn5HgJbPOPtp92hnrTYTxQU3Kprj-LudxqRJQgXA4zxDpCiPO_JirfX4CUT5LQqs6KeKJ_GSf2Ht-VHgKlfySV1L85K0vfUvC97WCuAzZIVoZDeC2b7HXIThvyHNLjPUSRbiHTNS7vBwbBm98BmECKvj6dOgbHU_hIBM6U-dF5bOg8DiWgfR6A2eilGNEpMRUCcR73OrDVlVhwFTuugrYTBeQ9Yrdc"
            />
            <div className="flex flex-col min-w-0">
              <span className="font-headline-sm text-headline-sm text-primary truncate leading-tight">
                Noorul Ilm Int'l
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant truncate">
                Kaduna • SMS Admin
              </span>
            </div>
          </div>
          <div className="px-space-md py-space-sm">
            <div className="flex items-center gap-space-xs px-space-sm py-space-xs rounded-lg bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-[16px] text-secondary">
                verified
              </span>
              <span className="truncate">Kaduna MoE Accredited</span>
            </div>
          </div>
          <nav
            className="flex-1 px-space-sm py-space-xs space-y-space-md"
            data-active-classes="bg-primary-container text-on-primary font-label-lg rounded-lg shadow-sm"
          >
            <div className="space-y-1">
              <div className="px-space-sm py-1 font-label-sm text-label-sm text-outline uppercase tracking-wider">
                Main
              </div>
              <Link
                to="/admin"
                className="flex items-center px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-body-md text-body-md"
                activeProps={{ className: "bg-primary-container text-on-primary font-label-lg shadow-sm" }}
              >
                Executive Administrative Dashboard
              </Link>
              <Link
                to="/admin/teacher-daily-classroom-portal"
                className="flex items-center px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-body-md text-body-md"
                activeProps={{ className: "bg-primary-container text-on-primary font-label-lg shadow-sm" }}
              >
                Teacher Classroom Portal
              </Link>
              <Link
                to="/admin/student-learning-assignment-portal"
                className="flex items-center px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-body-md text-body-md"
                activeProps={{ className: "bg-primary-container text-on-primary font-label-lg shadow-sm" }}
              >
                Student Learning &amp; Assignment
              </Link>
            </div>
            <div className="space-y-1">
              <div className="px-space-sm py-1 font-label-sm text-label-sm text-outline uppercase tracking-wider">
                Academic Management
              </div>
              <Link
                to="/admin/academic-curriculum-lesson-plans"
                className="flex items-center px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-body-md text-body-md"
                activeProps={{ className: "bg-primary-container text-on-primary font-label-lg shadow-sm" }}
              >
                Curriculum &amp; Lesson Plans
              </Link>
              <Link
                to="/admin/classes-arms-section-capacity-allocator"
                className="flex items-center px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-body-md text-body-md"
                activeProps={{ className: "bg-primary-container text-on-primary font-label-lg shadow-sm" }}
              >
                Classes, Sections &amp; Arms
              </Link>
              <Link
                to="/admin/examinations-continuous-assessment-report-card-compiler"
                className="flex items-center px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-body-md text-body-md"
                activeProps={{ className: "bg-primary-container text-on-primary font-label-lg shadow-sm" }}
              >
                Examinations &amp; Assessments
              </Link>
            </div>
            <div className="space-y-1">
              <div className="px-space-sm py-1 font-label-sm text-label-sm text-outline uppercase tracking-wider">
                Financial Management
              </div>
              <Link
                to="/admin/fee-management-billing"
                className="flex items-center px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-body-md text-body-md"
                activeProps={{ className: "bg-primary-container text-on-primary font-label-lg shadow-sm" }}
              >
                Fee Structure &amp; Billing
              </Link>
              <Link
                to="/admin/fee-management-billing"
                className="flex items-center px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-body-md text-body-md"
                activeProps={{ className: "bg-primary-container text-on-primary font-label-lg shadow-sm" }}
              >
                Payments &amp; Receipts (₦)
              </Link>
            </div>
            <div className="space-y-1">
              <div className="px-space-sm py-1 font-label-sm text-label-sm text-outline uppercase tracking-wider">
                Student Services
              </div>
              <Link
                to="/admin/student-directory-records"
                className="flex items-center px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-body-md text-body-md"
                activeProps={{ className: "bg-primary-container text-on-primary font-label-lg shadow-sm" }}
              >
                Student Directory
              </Link>
              <Link
                to="/admin/student-discipline-welfare-registry"
                className="flex items-center px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-body-md text-body-md"
                activeProps={{ className: "bg-primary-container text-on-primary font-label-lg shadow-sm" }}
              >
                Discipline &amp; Welfare Registry
              </Link>
            </div>
            <div className="space-y-1">
              <div className="px-space-sm py-1 font-label-sm text-label-sm text-outline uppercase tracking-wider">
                Operations
              </div>
              <Link
                to="/admin/facilities-visitor-gatehouse-management"
                className="flex items-center px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-body-md text-body-md"
                activeProps={{ className: "bg-primary-container text-on-primary font-label-lg shadow-sm" }}
              >
                Facilities &amp; Visitor Gatehouse
              </Link>
              <Link
                to="/admin/staff-teachers-hr-directory"
                className="flex items-center px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-body-md text-body-md"
                activeProps={{ className: "bg-primary-container text-on-primary font-label-lg shadow-sm" }}
              >
                Staff Directory
              </Link>
            </div>
            <div className="space-y-1">
              <div className="px-space-sm py-1 font-label-sm text-label-sm text-outline uppercase tracking-wider">
                Analytics &amp; Reports
              </div>
              <Link
                to="/admin/central-reports-moe-analytics-center"
                className="flex items-center px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-body-md text-body-md"
                activeProps={{ className: "bg-primary-container text-on-primary font-label-lg shadow-sm" }}
              >
                Central Reports &amp; MoE Analytics
              </Link>
              <Link
                to="/admin/security-audit-logs-system-inspector"
                className="flex items-center px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors font-body-md text-body-md"
                activeProps={{ className: "bg-primary-container text-on-primary font-label-lg shadow-sm" }}
              >
                Audit Logs &amp; Activity
              </Link>
            </div>
          </nav>
        </div>
        <div className="p-space-md bg-surface-container-low m-space-sm rounded-xl">
          <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm mb-1">
            <span className="font-medium">Academic Term</span>
            <span className="text-secondary font-semibold">78% Elapsed</span>
          </div>
          <div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
            <div className="bg-secondary h-1.5 rounded-full w-[78%]"></div>
          </div>
        </div>
      </aside>
      <div className="pl-72 flex flex-col min-h-screen">
        <header className="fixed top-0 left-72 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-lg gap-space-md">
          <div className="flex items-center gap-space-md flex-1 max-w-2xl">
            <div className="hidden xl:flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg bg-surface-container-high text-on-surface cursor-pointer hover:bg-surface-variant transition-colors">
              <span className="material-symbols-outlined text-[18px] text-primary">
                calendar_today
              </span>
              <span className="font-label-sm text-label-sm font-semibold truncate">
                2026/2027 • 1st Term (Active)
              </span>
              <span className="material-symbols-outlined text-[16px] text-outline">
                arrow_drop_down
              </span>
            </div>
            <div className="relative flex-1">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">
                search
              </span>
              <input
                className="w-full pl-9 pr-4 py-2 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="Search students, staff, admission IDs, fee receipts... (Ctrl+K)"
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-space-md shrink-0">
            <button
              className="hidden sm:flex items-center gap-1.5 px-space-md py-2 bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm"
              type="button"
            >
              <span className="material-symbols-outlined text-[16px]">add</span>
              <span>Quick Action</span>
            </button>
            <div className="hidden lg:flex flex-col text-right">
              <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                Thursday, 16 Oct 2026
              </span>
              <span className="font-body-sm text-[10px] text-on-surface-variant">
                Kaduna Time (GMT+1)
              </span>
            </div>
            <button
              className="relative p-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors"
              type="button"
            >
              <span className="material-symbols-outlined text-[22px]">
                notifications
              </span>
              <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-error text-on-error font-label-sm text-[10px] flex items-center justify-center font-bold">
                4
              </span>
            </button>
            <div className="flex items-center gap-space-sm pl-space-xs">
              <div className="relative">
                <img
                  alt="Dr. Aminu Bello Profile Avatar"
                  className="w-8 h-8 rounded-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiGHmRJ5_PwbzMa3Nh1FSX52NfEBNn0ZEyNf__vuuCXdqxdB9yGe1zBiBmoE7HqWT4wZxteYR5p0Wfdh2gTB7-RjoRckPmT1W0Nm3FqlemLKCfgmvcY86nhQ-LnyWKI_8Z9Ac3pvyyVgRTrfei6-O51d4eAjnBc2V_W0Wuqanv_sQ1ummUo0JloAio9QTDs30Wq140LlR99s77O1mqoB9jk4Nuji9Mg4vCIA7j6_Fjc1hi9RZsEm0Zqw"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-secondary ring-2 ring-surface-container-lowest"></span>
              </div>
              <div className="hidden md:flex flex-col min-w-0">
                <span className="font-label-md text-label-md text-on-surface font-semibold truncate">
                  Dr. Aminu Bello
                </span>
                <span className="font-body-sm text-[11px] text-on-surface-variant truncate">
                  Super Admin / Principal
                </span>
              </div>
            </div>
          </div>
        </header>
        <Outlet />
      </div>
    </div>
  );
}
