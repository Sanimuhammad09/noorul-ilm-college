import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(
  "/admin/cafeteria-nutritional-meal-management",
)({
  component: CafeteriaNutritionalMealManagement,
});

function CafeteriaNutritionalMealManagement() {
  return (
    <main className="w-full pt-16 px-space-lg py-space-lg flex-1 bg-background">
      <div className="flex flex-col w-full">
        {/*  Top Breadcrumbs & Header Actions Area  */}
        <div className="flex flex-col gap-space-md mb-space-lg">
          <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
            <span className="hover:text-primary cursor-pointer transition-colors">
              Operations
            </span>
            <span className="material-symbols-outlined text-[14px] text-outline">
              chevron_right
            </span>
            <span className="hover:text-primary cursor-pointer transition-colors">
              Cafeteria &amp; Nutrition
            </span>
            <span className="material-symbols-outlined text-[14px] text-outline">
              chevron_right
            </span>
            <span className="text-primary font-semibold">
              Meal Rosters &amp; Pantry Inventory
            </span>
          </div>
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md">
            <div className="flex flex-col min-w-0 max-w-3xl">
              <div className="flex items-center gap-space-sm mb-1">
                <span className="px-space-xs py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase tracking-wider font-bold">
                  Kaduna State Standards
                </span>
                <span className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[15px] text-secondary">
                    verified_user
                  </span>
                  NAFDAC &amp; MoE Verified Facility
                </span>
              </div>
              <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                Cafeteria &amp; Nutritional Meal Management
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                Nutritious school dining operations, halal meal plan
                configurations, student daily meal check-ins, dietary allergy
                enforcement, and kitchen pantry inventory controls.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-space-sm shrink-0">
              <button
                className="flex items-center gap-1.5 px-space-md py-2 bg-primary text-on-primary rounded-lg font-label-lg text-label-lg shadow-sm hover:bg-primary-container transition-all"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">
                  add_circle
                </span>
                <span>Configure Weekly Menu</span>
              </button>
              <button
                className="flex items-center gap-1.5 px-space-md py-2 bg-secondary text-on-secondary rounded-lg font-label-lg text-label-lg shadow-sm hover:opacity-90 transition-all"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">
                  contactless
                </span>
                <span>Scan Student Meal NFC</span>
              </button>
              <button
                className="flex items-center gap-1.5 px-space-md py-2 bg-surface-container-high text-on-surface rounded-lg font-label-md text-label-md hover:bg-surface-variant transition-colors"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">
                  local_shipping
                </span>
                <span>Log Raw Food Delivery</span>
              </button>
              <button
                className="flex items-center gap-1.5 px-space-md py-2 bg-surface-container-low text-on-surface-variant hover:text-on-surface rounded-lg font-label-md text-label-md transition-colors"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">
                  assignment_turned_in
                </span>
                <span>Nutritional Compliance</span>
              </button>
            </div>
          </div>
        </div>
        {/*  KPI Metric Cards Grid (4 Columns)  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md mb-space-xl">
          {/*  KPI 1  */}
          <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-md transition-all">
            <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-secondary-fixed/20 pointer-events-none"></div>
            <div className="flex items-center justify-between mb-space-sm">
              <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                Daily Distribution
              </span>
              <div className="w-9 h-9 rounded-lg bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
                <span className="material-symbols-outlined text-[20px]">
                  restaurant
                </span>
              </div>
            </div>
            <div className="font-metric-lg text-metric-lg text-on-surface font-bold leading-none mb-1">
              1,420{" "}
              <span className="font-headline-sm text-headline-sm text-on-surface-variant font-normal">
                Meals
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-secondary"></span>
              <span className="truncate">
                Breakfast (348 Boarders) • Lunch (1,072 All-School)
              </span>
            </div>
          </div>
          {/*  KPI 2  */}
          <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-md transition-all">
            <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-tertiary-fixed/30 pointer-events-none"></div>
            <div className="flex items-center justify-between mb-space-sm">
              <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                Clinical Safeguards
              </span>
              <div className="w-9 h-9 rounded-lg bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed-variant">
                <span className="material-symbols-outlined text-[20px]">
                  warning
                </span>
              </div>
            </div>
            <div className="font-metric-lg text-metric-lg text-error font-bold leading-none mb-1">
              24{" "}
              <span className="font-headline-sm text-headline-sm text-on-surface-variant font-normal">
                Guarded Portions
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-tertiary-container"></span>
              <span className="truncate">
                Peanut-Free, Lactose-Free, Celiac Gluten-Free
              </span>
            </div>
          </div>
          {/*  KPI 3  */}
          <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-md transition-all">
            <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-primary-fixed/30 pointer-events-none"></div>
            <div className="flex items-center justify-between mb-space-sm">
              <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                Store Reserves
              </span>
              <div className="w-9 h-9 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[20px]">
                  inventory_2
                </span>
              </div>
            </div>
            <div className="font-metric-lg text-metric-lg text-primary font-bold leading-none mb-1">
              18 Days{" "}
              <span className="font-headline-sm text-headline-sm text-on-surface-variant font-normal">
                Supply
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-secondary"></span>
              <span className="truncate">
                Grain Store &amp; Protein Freezers 88% Full
              </span>
            </div>
          </div>
          {/*  KPI 4  */}
          <div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-md transition-all">
            <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-secondary-fixed-dim/20 pointer-events-none"></div>
            <div className="flex items-center justify-between mb-space-sm">
              <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                Dietary Audit Score
              </span>
              <div className="w-9 h-9 rounded-lg bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
                <span className="material-symbols-outlined text-[20px]">
                  verified
                </span>
              </div>
            </div>
            <div className="font-metric-lg text-metric-lg text-secondary font-bold leading-none mb-1">
              96.5%{" "}
              <span className="font-headline-sm text-headline-sm text-on-surface-variant font-normal">
                Score
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-secondary"></span>
              <span className="truncate">
                Kaduna MoE School Health &amp; NAFDAC Certified
              </span>
            </div>
          </div>
        </div>
        {/*  Primary Dashboard Split (12-Col System: 7 Col Left / 5 Col Right)  */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
          {/*  LEFT COLUMN: 7 Columns  */}
          <div className="lg:col-span-7 flex flex-col gap-space-lg min-w-0">
            {/*  Visual Highlight Banner: Northern Nigerian Nutritious Dining  */}
            <div className="relative overflow-hidden rounded-xl bg-surface-container-low shadow-sm">
              <div className="flex flex-col md:flex-row items-center justify-between p-space-lg gap-space-md">
                <div className="flex-1 min-w-0">
                  <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-primary font-label-sm text-label-sm font-semibold uppercase tracking-wider">
                    Halal Standard Assurance
                  </span>
                  <h2 className="font-headline-md text-headline-md text-on-surface font-bold mt-2">
                    100% Locally Sourced Northern Produce
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                    Fresh farm produce from Giwa &amp; Zaria agricultural
                    cooperatives. Daily protein intake calibrated for growing
                    minds in accordance with Kaduna Ministry of Education health
                    directives.
                  </p>
                  <div className="flex items-center gap-space-md mt-space-sm text-on-surface font-label-sm text-label-sm">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-secondary">
                        check_circle
                      </span>{" "}
                      Daily Caloric Target: 2,150 kcal
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-secondary">
                        check_circle
                      </span>{" "}
                      100% Zabiha Halal
                    </span>
                  </div>
                </div>
                <div className="w-full md:w-48 h-32 rounded-lg overflow-hidden shrink-0 shadow-sm relative">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="High quality overhead view of a fresh Nigerian school cafeteria meal with golden jollof rice, plantain, steamed greens and fresh fruit in a stainless steel tray under bright warm natural light"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjTMvQyASAdfehiR4kli6NNiy_o6XIN5Q2AaFIw4JoPup_Nb7Ql6RomfB8lChlQU6LmxTbGBrUm6_OsMN421Q6Z09979eVAmZbTOCiIYuraNy-e3nTc89Ehr_sd10NkTlDTQMtmCKkPO_5zngYD9r-vl47hzudfv-3eSz_Ig5rB5pwSnCFbw4v2ZFuDxFdWcANKcgnbPxyLHdQhuolt_5R2ues_9oDyaeJu-nbAtiFdWwq9KrY7az7Pw"
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply pointer-events-none"></div>
                </div>
              </div>
            </div>
            {/*  Weekly Balanced Menu Schedule Card  */}
            <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-md mb-space-md gap-space-sm">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-headline-md text-headline-md text-primary font-bold">
                      Term 1 Weekly Balanced Menu Schedule
                    </h2>
                    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                      Week 4 Active
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Aligned with Kaduna State School Nutrition Guidelines
                  </p>
                </div>
                <div className="flex items-center gap-space-xs self-start sm:self-auto">
                  <button
                    className="px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm flex items-center gap-1"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      print
                    </span>
                    Print Roster
                  </button>
                  <button
                    className="px-3 py-1.5 rounded-lg bg-primary-container text-on-primary font-label-sm text-label-sm flex items-center gap-1"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      edit
                    </span>
                    Modify Menu
                  </button>
                </div>
              </div>
              {/*  Weekly Days Table / List  */}
              <div className="space-y-space-sm">
                {/*  Monday  */}
                <div className="rounded-lg bg-surface-container-low p-space-md transition-all hover:bg-surface-container">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-xs mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm font-bold">
                        M
                      </span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Monday
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-medium">
                        Completed
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Avg. Cal: 2,120 kcal • Protein: 72g
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm text-body-sm">
                    <div className="p-2 rounded bg-surface-container-lowest">
                      <span className="font-label-sm text-label-sm text-outline uppercase block font-semibold">
                        Breakfast (Boarders)
                      </span>
                      <p className="text-on-surface font-medium mt-0.5">
                        Akara, Pap (Ogi) &amp; Boiled Egg
                      </p>
                      <span className="text-on-surface-variant text-[11px]">
                        Tea / Milo optional
                      </span>
                    </div>
                    <div className="p-2 rounded bg-surface-container-lowest">
                      <span className="font-label-sm text-label-sm text-outline uppercase block font-semibold">
                        Lunch (All Students)
                      </span>
                      <p className="text-on-surface font-medium mt-0.5">
                        Jollof Rice, Steamed Fish &amp; Coleslaw
                      </p>
                      <span className="text-secondary text-[11px] font-medium">
                        With Fresh Zaria Banana
                      </span>
                    </div>
                    <div className="p-2 rounded bg-surface-container-lowest">
                      <span className="font-label-sm text-label-sm text-outline uppercase block font-semibold">
                        Dinner (Boarders)
                      </span>
                      <p className="text-on-surface font-medium mt-0.5">
                        Semovita with Egusi Soup &amp; Beef
                      </p>
                      <span className="text-on-surface-variant text-[11px]">
                        Watermelon wedge
                      </span>
                    </div>
                  </div>
                </div>
                {/*  Tuesday  */}
                <div className="rounded-lg bg-surface-container-low p-space-md transition-all hover:bg-surface-container">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-xs mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm font-bold">
                        T
                      </span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Tuesday
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-medium">
                        Completed
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Avg. Cal: 2,180 kcal • Protein: 78g
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm text-body-sm">
                    <div className="p-2 rounded bg-surface-container-lowest">
                      <span className="font-label-sm text-label-sm text-outline uppercase block font-semibold">
                        Breakfast (Boarders)
                      </span>
                      <p className="text-on-surface font-medium mt-0.5">
                        Tea, Milk, Sliced Bread &amp; Omelette
                      </p>
                      <span className="text-on-surface-variant text-[11px]">
                        Fortified margarine
                      </span>
                    </div>
                    <div className="p-2 rounded bg-surface-container-lowest">
                      <span className="font-label-sm text-label-sm text-outline uppercase block font-semibold">
                        Lunch (All Students)
                      </span>
                      <p className="text-on-surface font-medium mt-0.5">
                        Beans &amp; Fried Plantain (Dodo) with Chicken
                      </p>
                      <span className="text-secondary text-[11px] font-medium">
                        Tomato &amp; pepper simmered stew
                      </span>
                    </div>
                    <div className="p-2 rounded bg-surface-container-lowest">
                      <span className="font-label-sm text-label-sm text-outline uppercase block font-semibold">
                        Dinner (Boarders)
                      </span>
                      <p className="text-on-surface font-medium mt-0.5">
                        White Rice, Tomato Stew &amp; Fresh Fruit
                      </p>
                      <span className="text-on-surface-variant text-[11px]">
                        Tangerine &amp; Pawpaw
                      </span>
                    </div>
                  </div>
                </div>
                {/*  Wednesday  */}
                <div className="rounded-lg bg-surface-container-low p-space-md transition-all hover:bg-surface-container">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-xs mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm font-bold">
                        W
                      </span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Wednesday
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-medium">
                        Completed
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Avg. Cal: 2,050 kcal • Protein: 70g
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm text-body-sm">
                    <div className="p-2 rounded bg-surface-container-lowest">
                      <span className="font-label-sm text-label-sm text-outline uppercase block font-semibold">
                        Breakfast (Boarders)
                      </span>
                      <p className="text-on-surface font-medium mt-0.5">
                        Custard, Whole Milk &amp; Moi-Moi
                      </p>
                      <span className="text-on-surface-variant text-[11px]">
                        Steamed bean pudding
                      </span>
                    </div>
                    <div className="p-2 rounded bg-surface-container-lowest">
                      <span className="font-label-sm text-label-sm text-outline uppercase block font-semibold">
                        Lunch (All Students)
                      </span>
                      <p className="text-on-surface font-medium mt-0.5">
                        Yam Pottage (Asaro) with Fish &amp; Spinach
                      </p>
                      <span className="text-secondary text-[11px] font-medium">
                        Rich in dietary fiber
                      </span>
                    </div>
                    <div className="p-2 rounded bg-surface-container-lowest">
                      <span className="font-label-sm text-label-sm text-outline uppercase block font-semibold">
                        Dinner (Boarders)
                      </span>
                      <p className="text-on-surface font-medium mt-0.5">
                        Tuwon Shinkafa with Miyan Kuka &amp; Shredded Meat
                      </p>
                      <span className="text-on-surface-variant text-[11px]">
                        Northern traditional staple
                      </span>
                    </div>
                  </div>
                </div>
                {/*  Thursday (Active / Current Day)  */}
                <div className="rounded-lg bg-surface-container p-space-md shadow-sm transition-all relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary rounded-l-lg"></div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-xs mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-sm text-label-sm font-bold">
                        T
                      </span>
                      <span className="font-headline-sm text-headline-sm text-primary font-bold">
                        Thursday
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-semibold tracking-wider uppercase animate-pulse">
                        Serving Today
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                      Avg. Cal: 2,210 kcal • Protein: 84g
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm text-body-sm">
                    <div className="p-2.5 rounded-md bg-surface-container-lowest shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-outline uppercase font-semibold">
                          Breakfast (07:00 AM)
                        </span>
                        <span className="material-symbols-outlined text-[16px] text-secondary">
                          check
                        </span>
                      </div>
                      <p className="text-on-surface font-semibold mt-1">
                        Oatmeal with Honey &amp; Boiled Egg
                      </p>
                      <span className="text-on-surface-variant text-[11px]">
                        Served to 348 Boarders
                      </span>
                    </div>
                    <div className="p-2.5 rounded-md bg-surface-container-lowest shadow-sm ring-1 ring-primary/20">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-primary uppercase font-bold">
                          Lunch (12:45 PM) • LIVE
                        </span>
                        <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
                      </div>
                      <p className="text-on-surface font-bold mt-1">
                        Fried Rice with Beef, Green Peas &amp; Orange
                      </p>
                      <span className="text-secondary text-[11px] font-semibold">
                        1,072 Portions Active
                      </span>
                    </div>
                    <div className="p-2.5 rounded-md bg-surface-container-lowest shadow-sm">
                      <span className="font-label-sm text-label-sm text-outline uppercase block font-semibold">
                        Dinner (06:30 PM)
                      </span>
                      <p className="text-on-surface font-medium mt-1">
                        Spaghetti Bolognese &amp; Boiled Egg
                      </p>
                      <span className="text-on-surface-variant text-[11px]">
                        Scheduled for preparation
                      </span>
                    </div>
                  </div>
                </div>
                {/*  Friday  */}
                <div className="rounded-lg bg-surface-container-low p-space-md transition-all hover:bg-surface-container">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-xs mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center font-label-sm text-label-sm font-bold">
                        F
                      </span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                        Friday
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-medium">
                        Upcoming (Jumu'ah)
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Avg. Cal: 2,190 kcal • Protein: 75g
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm text-body-sm">
                    <div className="p-2 rounded bg-surface-container-lowest">
                      <span className="font-label-sm text-label-sm text-outline uppercase block font-semibold">
                        Breakfast (Boarders)
                      </span>
                      <p className="text-on-surface font-medium mt-0.5">
                        Bread, Fried Egg &amp; Hot Chocolate
                      </p>
                      <span className="text-on-surface-variant text-[11px]">
                        With fresh milk blend
                      </span>
                    </div>
                    <div className="p-2 rounded bg-surface-container-lowest">
                      <span className="font-label-sm text-label-sm text-outline uppercase block font-semibold">
                        Lunch (Special Jumu'ah)
                      </span>
                      <p className="text-on-surface font-medium mt-0.5">
                        Tuwon Masara with Miyan Geda &amp; Chicken
                      </p>
                      <span className="text-secondary text-[11px] font-medium">
                        Groundnut soup with pumpkin leaves
                      </span>
                    </div>
                    <div className="p-2 rounded bg-surface-container-lowest">
                      <span className="font-label-sm text-label-sm text-outline uppercase block font-semibold">
                        Dinner (Boarders)
                      </span>
                      <p className="text-on-surface font-medium mt-0.5">
                        Couscous with Stir-Fry Vegetables &amp; Fish
                      </p>
                      <span className="text-on-surface-variant text-[11px]">
                        Cucumber slices
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  Cafeteria Meal Queue & Biometric/NFC Check-In Ledger  */}
            <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-md mb-space-md gap-space-sm">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-headline-md text-headline-md text-primary font-bold">
                      Biometric &amp; NFC Meal Check-In Ledger
                    </h2>
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Lunch Service • Terminal 01 (Junior School) &amp; Terminal
                    02 (Senior School)
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-label-sm text-label-sm text-secondary font-semibold bg-secondary-fixed/50 px-2.5 py-1 rounded-full flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">
                      sensors
                    </span>{" "}
                    NFC Terminal Active
                  </span>
                </div>
              </div>
              {/*  Ledger Entries Table  */}
              <div className="overflow-x-auto">
                <table className="w-full text-left font-body-sm text-body-sm">
                  <thead>
                    <tr className="bg-surface-container-low text-on-surface-variant uppercase font-label-sm text-[11px] tracking-wider">
                      <th className="py-2.5 px-3 rounded-l-lg">
                        Student / Matric
                      </th>
                      <th className="py-2.5 px-3">Class</th>
                      <th className="py-2.5 px-3">Voucher Plan</th>
                      <th className="py-2.5 px-3">Time</th>
                      <th className="py-2.5 px-3 rounded-r-lg">
                        Dietary Safety Alert
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container-low">
                    {/*  Live Entry 1 - Allergy Flagged  */}
                    <tr className="hover:bg-error-container/20 transition-colors">
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-primary shrink-0">
                            KA
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="font-label-lg text-label-lg text-on-surface font-semibold truncate">
                              Khadijah Ahmad Rufai
                            </span>
                            <span className="font-label-sm text-[11px] text-outline">
                              NIS-2024-0412
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-3 font-medium text-on-surface">
                        JSS 2 Diamond
                      </td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-primary font-label-sm text-[11px] font-semibold">
                          Term Boarder Full Plan
                        </span>
                      </td>
                      <td className="py-3 px-3 font-semibold text-on-surface">
                        12:45:18 PM
                      </td>
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold">
                          <span className="material-symbols-outlined text-[16px] text-error">
                            dangerous
                          </span>
                          <span>PEANUT ALLERGY: Separate Tray Dispensed</span>
                        </div>
                      </td>
                    </tr>
                    {/*  Live Entry 2  */}
                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-primary shrink-0">
                            IU
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="font-label-lg text-label-lg text-on-surface font-semibold truncate">
                              Ibrahim Usman Danbatta
                            </span>
                            <span className="font-label-sm text-[11px] text-outline">
                              NIS-2023-0189
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-3 font-medium text-on-surface">
                        SSS 1 Gold
                      </td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[11px] font-semibold">
                          Day Scholar Hot Lunch
                        </span>
                      </td>
                      <td className="py-3 px-3 font-semibold text-on-surface">
                        12:44:50 PM
                      </td>
                      <td className="py-3 px-3">
                        <span className="text-secondary font-label-sm text-label-sm flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">
                            check_circle
                          </span>{" "}
                          Standard Meal Cleared
                        </span>
                      </td>
                    </tr>
                    {/*  Live Entry 3 - Hydration / Medical note  */}
                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-primary shrink-0">
                            AS
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="font-label-lg text-label-lg text-on-surface font-semibold truncate">
                              Abubakar Sadiq Bello
                            </span>
                            <span className="font-label-sm text-[11px] text-outline">
                              NIS-2022-0980
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-3 font-medium text-on-surface">
                        SSS 3 Platinum
                      </td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-primary font-label-sm text-[11px] font-semibold">
                          Term Boarder Full Plan
                        </span>
                      </td>
                      <td className="py-3 px-3 font-semibold text-on-surface">
                        12:43:12 PM
                      </td>
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">
                          <span className="material-symbols-outlined text-[16px] text-tertiary-container">
                            water_drop
                          </span>
                          <span>Extra Hydration + Folic Supplement Logged</span>
                        </div>
                      </td>
                    </tr>
                    {/*  Live Entry 4  */}
                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-primary shrink-0">
                            ZM
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="font-label-lg text-label-lg text-on-surface font-semibold truncate">
                              Zainab Mohammed Makarfi
                            </span>
                            <span className="font-label-sm text-[11px] text-outline">
                              NIS-2025-1102
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-3 font-medium text-on-surface">
                        JSS 1 Emerald
                      </td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[11px] font-semibold">
                          Day Scholar Hot Lunch
                        </span>
                      </td>
                      <td className="py-3 px-3 font-semibold text-on-surface">
                        12:41:40 PM
                      </td>
                      <td className="py-3 px-3">
                        <span className="text-secondary font-label-sm text-label-sm flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">
                            check_circle
                          </span>{" "}
                          Standard Meal Cleared
                        </span>
                      </td>
                    </tr>
                    {/*  Live Entry 5  */}
                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-primary shrink-0">
                            MY
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="font-label-lg text-label-lg text-on-surface font-semibold truncate">
                              Mustapha Yakubu
                            </span>
                            <span className="font-label-sm text-[11px] text-outline">
                              NIS-2023-0544
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-3 font-medium text-on-surface">
                        JSS 3 Topaz
                      </td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-primary font-label-sm text-[11px] font-semibold">
                          Term Boarder Full Plan
                        </span>
                      </td>
                      <td className="py-3 px-3 font-semibold text-on-surface">
                        12:40:02 PM
                      </td>
                      <td className="py-3 px-3">
                        <span className="text-secondary font-label-sm text-label-sm flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">
                            check_circle
                          </span>{" "}
                          Standard Meal Cleared
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex items-center justify-between mt-space-md pt-space-sm text-on-surface-variant font-body-sm text-body-sm">
                <span>Showing latest 5 of 842 lunch scans today</span>
                <a
                  className="text-primary font-semibold hover:underline flex items-center gap-1"
                  href="#"
                >
                  View full ledger log{" "}
                  <span className="material-symbols-outlined text-[14px]">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/*  RIGHT COLUMN: 5 Columns  */}
          <div className="lg:col-span-5 flex flex-col gap-space-lg min-w-0">
            {/*  Kitchen Dietary Restriction & Medical Safe-List  */}
            <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col">
              <div className="flex items-center justify-between pb-space-md mb-space-md">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-error text-[24px]">
                    medical_services
                  </span>
                  <div>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Kitchen Safe-List &amp; Allergy Guard
                    </h2>
                    <span className="font-label-sm text-label-sm text-outline">
                      Syncing with School Clinic Records
                    </span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold">
                  24 Flagged
                </span>
              </div>
              <div className="space-y-space-sm mb-space-md">
                {/*  Critical Case 1  */}
                <div className="p-space-sm rounded-lg bg-error-container/30">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-label-lg text-label-lg text-on-surface font-bold">
                        Khadijah Ahmad Rufai
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant block">
                        JSS 2 Diamond • Hostel Khadijah Wing B
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-error text-on-error font-label-sm text-[11px] font-bold">
                      CRITICAL
                    </span>
                  </div>
                  <div className="mt-2 text-on-error-container font-label-sm text-label-sm bg-surface-container-lowest p-2 rounded">
                    <span className="font-bold flex items-center gap-1 text-error">
                      <span className="material-symbols-outlined text-[16px]">
                        no_meals
                      </span>{" "}
                      Severe Peanut &amp; Groundnut Anaphylaxis
                    </span>
                    <p className="text-on-surface-variant text-[11px] mt-0.5">
                      Strict non-contamination protocol in effect. Epipen in
                      Nurse Aide kitchen kit.
                    </p>
                  </div>
                </div>
                {/*  Critical Case 2  */}
                <div className="p-space-sm rounded-lg bg-surface-container-low">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-label-lg text-label-lg text-on-surface font-bold">
                        Abubakar Sadiq Bello
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant block">
                        SSS 3 Platinum • Hostel Dan Fodio Rm 14
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-[11px] font-bold">
                      MONITORED
                    </span>
                  </div>
                  <div className="mt-2 text-on-surface font-label-sm text-label-sm bg-surface-container-lowest p-2 rounded">
                    <span className="font-bold flex items-center gap-1 text-on-tertiary-container">
                      <span className="material-symbols-outlined text-[16px]">
                        local_hospital
                      </span>{" "}
                      Sickle Cell Management • High Hydration
                    </span>
                    <p className="text-on-surface-variant text-[11px] mt-0.5">
                      Daily 1.5L extra filtered water canister + clinic folic
                      multivitamin dispenser.
                    </p>
                  </div>
                </div>
                {/*  Critical Case 3  */}
                <div className="p-space-sm rounded-lg bg-surface-container-low">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-label-lg text-label-lg text-on-surface font-bold">
                        Fatima Zahra Umar
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant block">
                        JSS 1 Ruby • Day Scholar
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-[11px] font-bold">
                      DIETARY
                    </span>
                  </div>
                  <div className="mt-2 text-on-surface font-label-sm text-label-sm bg-surface-container-lowest p-2 rounded">
                    <span className="font-bold flex items-center gap-1 text-primary">
                      <span className="material-symbols-outlined text-[16px]">
                        egg_alt
                      </span>{" "}
                      Lactose &amp; Dairy Intolerance
                    </span>
                    <p className="text-on-surface-variant text-[11px] mt-0.5">
                      Substitute cow milk with house-made fortified soya milk
                      for breakfast cereals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-space-sm rounded-lg bg-surface-container flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    badge
                  </span>
                  <div>
                    <span className="font-label-sm text-label-sm text-on-surface font-semibold block">
                      Kitchen Dietary Lead Sign-Off
                    </span>
                    <span className="font-body-sm text-[11px] text-on-surface-variant">
                      Chef Danladi Musa • 06:15 AM Shift
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-secondary text-[24px]">
                  verified
                </span>
              </div>
            </div>
            {/*  Dry Food Pantry & Perishable Inventory Levels  */}
            <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col">
              <div className="flex items-center justify-between pb-space-md mb-space-md">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[24px]">
                    inventory
                  </span>
                  <div>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      Pantry &amp; Cold Storage Reserves
                    </h2>
                    <span className="font-label-sm text-label-sm text-outline">
                      Central Silo &amp; Walk-In Chillers
                    </span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
                  18 Days Runway
                </span>
              </div>
              {/*  Inventory Categorization  */}
              <div className="space-y-space-md">
                {/*  Category: Grains & Dry Stores  */}
                <div>
                  <div className="flex items-center justify-between text-on-surface font-label-sm text-label-sm mb-1.5 font-bold">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-outline">
                        grain
                      </span>{" "}
                      Grains &amp; Carbohydrates
                    </span>
                    <span className="text-secondary">Optimal (84%)</span>
                  </div>
                  <div className="w-full bg-surface-container-high rounded-full h-2 mb-2 overflow-hidden">
                    <div className="bg-secondary h-2 rounded-full w-[84%]"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-body-sm">
                    <div className="p-2 rounded bg-surface-container-low">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold block">
                        42
                      </span>
                      <span className="text-[11px] text-on-surface-variant">
                        White Rice (50kg)
                      </span>
                    </div>
                    <div className="p-2 rounded bg-surface-container-low">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold block">
                        18
                      </span>
                      <span className="text-[11px] text-on-surface-variant">
                        Beans (50kg)
                      </span>
                    </div>
                    <div className="p-2 rounded bg-surface-container-low">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold block">
                        25
                      </span>
                      <span className="text-[11px] text-on-surface-variant">
                        Maize Grains
                      </span>
                    </div>
                  </div>
                </div>
                {/*  Category: Proteins & Freezers  */}
                <div>
                  <div className="flex items-center justify-between text-on-surface font-label-sm text-label-sm mb-1.5 font-bold">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-outline">
                        ac_unit
                      </span>{" "}
                      Cold Storage &amp; Poultry / Beef
                    </span>
                    <span className="text-secondary">Stable (76%)</span>
                  </div>
                  <div className="w-full bg-surface-container-high rounded-full h-2 mb-2 overflow-hidden">
                    <div className="bg-secondary h-2 rounded-full w-[76%]"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-body-sm">
                    <div className="p-2 rounded bg-surface-container-low">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold block">
                        14
                      </span>
                      <span className="text-[11px] text-on-surface-variant">
                        Frozen Chicken (Ctns)
                      </span>
                    </div>
                    <div className="p-2 rounded bg-surface-container-low">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold block">
                        850 kg
                      </span>
                      <span className="text-[11px] text-on-surface-variant">
                        Fresh Beef Sides
                      </span>
                    </div>
                    <div className="p-2 rounded bg-surface-container-low">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold block">
                        85
                      </span>
                      <span className="text-[11px] text-on-surface-variant">
                        Egg Crates
                      </span>
                    </div>
                  </div>
                </div>
                {/*  Category: Cooking Essentials  */}
                <div>
                  <div className="flex items-center justify-between text-on-surface font-label-sm text-label-sm mb-1.5 font-bold">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-outline">
                        sanitizer
                      </span>{" "}
                      Oils, Tubers &amp; Seasonings
                    </span>
                    <span className="text-on-tertiary-container font-semibold">
                      Needs Restock Soon
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-high rounded-full h-2 mb-2 overflow-hidden">
                    <div className="bg-tertiary-container h-2 rounded-full w-[52%]"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-body-sm">
                    <div className="p-2 rounded bg-surface-container-low">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold block">
                        12
                      </span>
                      <span className="text-[11px] text-on-surface-variant">
                        Palm Oil (25L)
                      </span>
                    </div>
                    <div className="p-2 rounded bg-surface-container-low">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold block">
                        15
                      </span>
                      <span className="text-[11px] text-on-surface-variant">
                        Groundnut Oil
                      </span>
                    </div>
                    <div className="p-2 rounded bg-surface-container-low">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold block">
                        340
                      </span>
                      <span className="text-[11px] text-on-surface-variant">
                        Tubers of Yam
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/*  Bursary Action Trigger  */}
              <button
                className="mt-space-md w-full py-2.5 px-space-md rounded-lg bg-surface-container text-primary hover:bg-surface-variant font-label-md text-label-md flex items-center justify-center gap-2 transition-colors"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">
                  receipt_long
                </span>
                <span>Issue Bulk Restock Purchase Order to Bursary</span>
              </button>
            </div>
            {/*  Catering Staff & Hygiene Inspection Log  */}
            <div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col">
              <div className="flex items-center justify-between pb-space-md mb-space-sm">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[24px]">
                    health_and_safety
                  </span>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Hygiene &amp; Safety Compliance
                  </h2>
                </div>
                <span className="font-label-sm text-label-sm text-secondary font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">
                    verified
                  </span>{" "}
                  100% Passed
                </span>
              </div>
              <div className="space-y-space-sm text-body-sm">
                {/*  Personnel Certs  */}
                <div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-bold">
                      <span className="material-symbols-outlined text-[18px]">
                        person
                      </span>
                    </div>
                    <div>
                      <span className="font-label-md text-label-md text-on-surface font-semibold block">
                        Head Chef: Malam Danladi Musa
                      </span>
                      <span className="font-body-sm text-[11px] text-on-surface-variant">
                        14 Food Handlers • Widal Medical Test Certified
                      </span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[11px] font-bold">
                    VALID
                  </span>
                </div>
                {/*  Water Purity  */}
                <div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-secondary-fixed/40 flex items-center justify-center text-secondary font-bold">
                      <span className="material-symbols-outlined text-[18px]">
                        water_ph
                      </span>
                    </div>
                    <div>
                      <span className="font-label-md text-label-md text-on-surface font-semibold block">
                        Water Purification: Reverse Osmosis
                      </span>
                      <span className="font-body-sm text-[11px] text-on-surface-variant">
                        Kaduna Water Corp Test: 99.9% Microbial Purity
                      </span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[11px] font-bold">
                    EXCELLENT
                  </span>
                </div>
                {/*  Pest Control  */}
                <div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-bold">
                      <span className="material-symbols-outlined text-[18px]">
                        pest_control
                      </span>
                    </div>
                    <div>
                      <span className="font-label-md text-label-md text-on-surface font-semibold block">
                        Silo Fumigation &amp; Pest Deterrence
                      </span>
                      <span className="font-body-sm text-[11px] text-on-surface-variant">
                        Conducted 28 Sept 2026 • Next due Nov 2026
                      </span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[11px] font-bold">
                    CURRENT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
