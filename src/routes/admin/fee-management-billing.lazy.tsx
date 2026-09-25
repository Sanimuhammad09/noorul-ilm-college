
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/admin/fee-management-billing')({
  component: FeeManagementBilling,
});

function FeeManagementBilling() {
  return (
    <main className="w-full pt-16 px-space-lg py-space-lg flex-1 bg-surface"><div className="flex flex-col w-full">
{/*  Top Breadcrumb & Administrative Header Bar  */}
<div className="flex flex-col gap-space-sm pb-space-lg">
{/*  Breadcrumb Stream  */}
<div className="flex items-center gap-2 font-label-sm text-label-sm text-outline">
<span className="hover:text-primary transition-colors cursor-pointer">Dashboard</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="hover:text-primary transition-colors cursor-pointer">Financial Management</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-on-surface font-semibold">Fee Structure, Billing &amp; Bursary</span>
</div>
{/*  Title and Action Command Strip  */}
<div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md mt-1">
<div className="flex flex-col">
<div className="flex items-center gap-space-sm">
<h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">Fee Management, Student Billing &amp; Bursary</h1>
<span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold tracking-wider uppercase">Active Term Invoicing</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-2 mt-0.5">
<span className="material-symbols-outlined text-[16px] text-outline">location_on</span>
<span>Kaduna Campus (Rigachikun &amp; Malali Quarters)</span>
<span className="text-outline">•</span>
<span>2026/2027 Academic Session</span>
<span className="text-outline">•</span>
<span className="font-medium text-primary">1st Term Bursary Ledger</span>
</p>
</div>
{/*  Action Buttons  */}
<div className="flex flex-wrap items-center gap-space-xs sm:gap-space-sm">
<button className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-md text-label-md shadow-sm transition-all" type="button">
<span className="material-symbols-outlined text-[18px] text-outline">tune</span>
<span>Fee Rates Config</span>
</button>
<button className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-md text-label-md shadow-sm transition-all" type="button">
<span className="material-symbols-outlined text-[18px] text-outline">receipt_long</span>
<span>+ Generate Term Invoices</span>
</button>
<button className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-md text-label-md shadow-sm transition-all" type="button">
<span className="material-symbols-outlined text-[18px] text-outline">file_download</span>
<span>Export Ledger</span>
</button>
<button className="flex items-center gap-2 px-space-md py-2 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-label-lg text-label-lg shadow-md hover:shadow-lg transition-all group" onClick={() => {}} type="button">
<span className="material-symbols-outlined text-[20px] group-hover:rotate-90 transition-transform">point_of_sale</span>
<span>+ Record Payment / Issue Receipt</span>
</button>
</div>
</div>
</div>
{/*  Primary Metric Hero Row (Kaduna Bursary KPI Matrix)  */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-md mb-space-lg">
{/*  Total Invoiced  */}
<div className="flex flex-col p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between text-on-surface-variant mb-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Total Invoiced (Term 1)</span>
<div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[18px]">receipt</span>
</div>
</div>
<div className="font-metric-lg text-metric-lg text-on-surface font-bold tracking-tight">₦187,470,000</div>
<div className="flex items-center justify-between text-body-sm text-body-sm text-on-surface-variant mt-2">
<span className="flex items-center gap-1"><span className="font-medium text-on-surface">1,842</span> billed pupils</span>
<span className="font-label-sm text-label-sm text-primary font-semibold">100% Invoiced</span>
</div>
<div className="w-full bg-surface-container rounded-full h-1.5 mt-2.5 overflow-hidden">
<div className="bg-primary h-full rounded-full w-full"></div>
</div>
</div>
{/*  Total Collected  */}
<div className="flex flex-col p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between text-on-surface-variant mb-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Total Collected (Cash Inflow)</span>
<div className="w-8 h-8 rounded-lg bg-secondary-container flex items-center justify-center text-on-secondary-container">
<span className="material-symbols-outlined text-[18px]">verified</span>
</div>
</div>
<div className="font-metric-lg text-metric-lg text-secondary font-bold tracking-tight">₦142,650,000</div>
<div className="flex items-center justify-between text-body-sm text-body-sm text-on-surface-variant mt-2">
<span className="font-label-sm text-label-sm text-on-secondary-container font-semibold">76.1% Collection Rate</span>
<span className="text-secondary font-semibold flex items-center text-[11px]"><span className="material-symbols-outlined text-[14px]">trending_up</span> +8.4% YoY</span>
</div>
<div className="w-full bg-surface-container rounded-full h-1.5 mt-2.5 overflow-hidden">
<div className="bg-secondary h-full rounded-full w-[76.1%]"></div>
</div>
</div>
{/*  Outstanding Balance  */}
<div className="flex flex-col p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between text-on-surface-variant mb-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Outstanding Balance</span>
<div className="w-8 h-8 rounded-lg bg-error-container flex items-center justify-center text-error">
<span className="material-symbols-outlined text-[18px]">pending_actions</span>
</div>
</div>
<div className="font-metric-lg text-metric-lg text-error font-bold tracking-tight">₦44,820,000</div>
<div className="flex items-center justify-between text-body-sm text-body-sm text-on-surface-variant mt-2">
<span className="flex items-center gap-1"><span className="font-medium text-error">384</span> learners in arrears</span>
<span className="font-label-sm text-label-sm text-error font-semibold">23.9% Pending</span>
</div>
<div className="w-full bg-surface-container rounded-full h-1.5 mt-2.5 overflow-hidden">
<div className="bg-error h-full rounded-full w-[23.9%]"></div>
</div>
</div>
{/*  Discounts & Scholarships  */}
<div className="flex flex-col p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between text-on-surface-variant mb-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Scholarships &amp; Rebates</span>
<div className="w-8 h-8 rounded-lg bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed">
<span className="material-symbols-outlined text-[18px]">military_tech</span>
</div>
</div>
<div className="font-metric-lg text-metric-lg text-on-surface font-bold tracking-tight">₦6,850,000</div>
<div className="flex items-center justify-between text-body-sm text-body-sm text-on-surface-variant mt-2">
<span className="truncate">Sibling (78) • Tahfeez (24)</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">Approved</span>
</div>
<div className="w-full bg-surface-container rounded-full h-1.5 mt-2.5 overflow-hidden">
<div className="bg-tertiary-container h-full rounded-full w-[35%]"></div>
</div>
</div>
{/*  Today's Bank & POS Inflow  */}
<div className="flex flex-col p-space-md rounded-xl bg-primary-container text-on-primary shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between text-on-primary-container mb-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold text-primary-fixed">Today's Realized Inflow</span>
<div className="w-8 h-8 rounded-lg bg-on-primary/10 flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined text-[18px]">account_balance_wallet</span>
</div>
</div>
<div className="font-metric-lg text-metric-lg text-on-primary font-bold tracking-tight">₦3,420,000</div>
<div className="flex items-center justify-between font-body-sm text-body-sm text-primary-fixed mt-2">
<span className="flex items-center gap-1 font-medium">42 settled receipts</span>
<span className="text-[11px] font-semibold bg-on-primary/15 px-2 py-0.5 rounded-full">GTB • POS</span>
</div>
<div className="w-full bg-on-primary/20 rounded-full h-1.5 mt-2.5 overflow-hidden">
<div className="bg-on-primary h-full rounded-full w-[88%] animate-pulse"></div>
</div>
</div>
</div>
{/*  Two-Column Asymmetric Section: Academic Fee Tiers & Bursary Settlement Summary  */}
<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg mb-space-lg">
{/*  Fee Category Configuration & Term Rates Card (8 cols)  */}
<div className="xl:col-span-8 flex flex-col p-space-lg rounded-xl bg-surface-container-lowest shadow-sm">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-space-md">
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">1st Term Official Fee Schedules (2026/2027)</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Approved baseline tuition, PTA statutory levies &amp; institutional curriculum fees</p>
</div>
<div className="flex items-center gap-2">
<span className="px-2.5 py-1 rounded-md bg-surface-container font-label-sm text-label-sm text-on-surface font-semibold flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-secondary"></span> Kaduna MoE Approved
          </span>
</div>
</div>
{/*  Tier Cards Grid  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-xs">
{/*  Primary School (P1 - P6)  */}
<div className="flex flex-col p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors group">
<div className="flex items-center justify-between mb-2">
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold text-primary">Primary Section</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-[10px] font-bold">P1 - P6</span>
</div>
<div className="font-headline-md text-headline-md text-on-surface font-bold">₦135,000 <span className="font-body-sm text-body-sm font-normal text-on-surface-variant">/ term</span></div>
<div className="mt-space-md space-y-2 font-body-sm text-body-sm text-on-surface-variant">
<div className="flex justify-between items-center py-1">
<span>Tuition Fee</span>
<span className="font-semibold text-on-surface">₦95,000</span>
</div>
<div className="flex justify-between items-center py-1">
<span>Development Levy</span>
<span className="font-semibold text-on-surface">₦15,000</span>
</div>
<div className="flex justify-between items-center py-1">
<span>Uniforms &amp; Stationery</span>
<span className="font-semibold text-on-surface">₦25,000</span>
</div>
</div>
<div className="mt-4 pt-3 flex items-center justify-between text-[11px] font-label-sm text-outline">
<span>Enrolled: 642 pupils</span>
<span className="text-secondary font-semibold">91% Paid</span>
</div>
</div>
{/*  Junior Secondary School (JSS 1 - JSS 3)  */}
<div className="flex flex-col p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors group">
<div className="flex items-center justify-between mb-2">
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold text-primary">Junior High</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-[10px] font-bold">JSS 1 - 3</span>
</div>
<div className="font-headline-md text-headline-md text-on-surface font-bold">₦150,000 <span className="font-body-sm text-body-sm font-normal text-on-surface-variant">/ term</span></div>
<div className="mt-space-md space-y-2 font-body-sm text-body-sm text-on-surface-variant">
<div className="flex justify-between items-center py-1">
<span>Tuition Fee</span>
<span className="font-semibold text-on-surface">₦115,000</span>
</div>
<div className="flex justify-between items-center py-1">
<span>Computer &amp; Sci Lab</span>
<span className="font-semibold text-on-surface">₦20,000</span>
</div>
<div className="flex justify-between items-center py-1">
<span>School Dev Levy</span>
<span className="font-semibold text-on-surface">₦15,000</span>
</div>
</div>
<div className="mt-4 pt-3 flex items-center justify-between text-[11px] font-label-sm text-outline">
<span>Enrolled: 590 students</span>
<span className="text-secondary font-semibold">78% Paid</span>
</div>
</div>
{/*  Senior Secondary School (SSS 1 - SSS 3)  */}
<div className="flex flex-col p-space-md rounded-xl bg-surface-container-high/60 hover:bg-surface-container-high transition-colors group">
<div className="flex items-center justify-between mb-2">
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold text-primary">Senior Secondary</span>
<span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-[10px] font-bold">SSS 1 - 3</span>
</div>
<div className="font-headline-md text-headline-md text-on-surface font-bold">₦185,000 <span className="font-body-sm text-body-sm font-normal text-on-surface-variant">/ term</span></div>
<div className="mt-space-md space-y-2 font-body-sm text-body-sm text-on-surface-variant">
<div className="flex justify-between items-center py-1">
<span>Tuition &amp; Prep</span>
<span className="font-semibold text-on-surface">₦135,000</span>
</div>
<div className="flex justify-between items-center py-1">
<span>Advanced Science Labs</span>
<span className="font-semibold text-on-surface">₦30,000</span>
</div>
<div className="flex justify-between items-center py-1">
<span>Infrastructure Levy</span>
<span className="font-semibold text-on-surface">₦20,000</span>
</div>
</div>
<div className="mt-4 pt-3 flex items-center justify-between text-[11px] font-label-sm text-outline">
<span>Enrolled: 610 students</span>
<span className="text-primary font-semibold">68% Paid</span>
</div>
</div>
</div>
{/*  Add-on Subsidies / Optional Services Ribbon  */}
<div className="mt-space-md pt-space-md flex flex-wrap items-center gap-space-sm bg-surface-container-low/70 p-space-sm rounded-lg text-body-sm text-body-sm text-on-surface-variant">
<span className="font-label-sm text-label-sm font-bold uppercase text-on-surface tracking-wider flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-tertiary">alt_route</span> Ancillary Add-ons:
        </span>
<span className="px-2 py-1 rounded bg-surface-container-lowest font-medium text-on-surface">Metropolis Bus: <strong className="text-primary font-semibold">₦35,000</strong></span>
<span className="px-2 py-1 rounded bg-surface-container-lowest font-medium text-on-surface">School Feeding (Daily Lunch): <strong className="text-primary font-semibold">₦25,000</strong></span>
<span className="px-2 py-1 rounded bg-surface-container-lowest font-medium text-on-surface">Full Boarding Hostel: <strong className="text-primary font-semibold">₦180,000</strong></span>
<span className="px-2 py-1 rounded bg-surface-container-lowest font-medium text-on-surface">WAEC/NECO Registration (SSS 3): <strong className="text-primary font-semibold">₦25,000</strong></span>
</div>
</div>
{/*  Bursary Channel Distribution & Clearance Health (4 cols)  */}
<div className="xl:col-span-4 flex flex-col p-space-lg rounded-xl bg-surface-container-lowest shadow-sm justify-between">
<div>
<div className="flex items-center justify-between pb-space-xs">
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Revenue Inflow Channels</h2>
<span className="material-symbols-outlined text-outline">donut_large</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">Real-time payment gateway &amp; direct bank transfers</p>
{/*  Settlement Distribution Progress  */}
<div className="space-y-space-sm">
<div>
<div className="flex justify-between font-body-sm text-body-sm mb-1">
<span className="font-medium text-on-surface flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-primary"></span> GTBank NIBSS Direct Transfer
              </span>
<span className="font-bold text-on-surface">₦74.8M (52.4%)</span>
</div>
<div className="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
<div className="bg-primary h-full rounded-full w-[52.4%]"></div>
</div>
</div>
<div>
<div className="flex justify-between font-body-sm text-body-sm mb-1">
<span className="font-medium text-on-surface flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-secondary"></span> Stanbic &amp; Zenith POS Terminals
              </span>
<span className="font-bold text-on-surface">₦41.2M (28.9%)</span>
</div>
<div className="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
<div className="bg-secondary h-full rounded-full w-[28.9%]"></div>
</div>
</div>
<div>
<div className="flex justify-between font-body-sm text-body-sm mb-1">
<span className="font-medium text-on-surface flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-secondary-fixed-dim"></span> Paystack Parent Portal (Online)
              </span>
<span className="font-bold text-on-surface">₦21.5M (15.1%)</span>
</div>
<div className="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
<div className="bg-secondary-fixed-dim h-full rounded-full w-[15.1%]"></div>
</div>
</div>
<div>
<div className="flex justify-between font-body-sm text-body-sm mb-1">
<span className="font-medium text-on-surface flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-outline"></span> Cash Deposits (Bursary Desk)
              </span>
<span className="font-bold text-on-surface">₦5.15M (3.6%)</span>
</div>
<div className="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
<div className="bg-outline h-full rounded-full w-[3.6%]"></div>
</div>
</div>
</div>
</div>
{/*  Bursary Audit Reconciliation Banner  */}
<div className="mt-space-md p-space-sm bg-surface-container-low rounded-lg flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]">task_alt</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm font-bold text-on-surface">Kaduna MoE Audit Synchronized</span>
<span className="font-body-sm text-[11px] text-on-surface-variant truncate">Bursary cashbooks balanced as of 14:30 GMT+1</span>
</div>
</div>
</div>
</div>
{/*  Invoicing, Student Billing & Arrears Data Masterwork  */}
<div className="flex flex-col rounded-xl bg-surface-container-lowest shadow-sm mb-space-lg overflow-hidden">
{/*  Filter Bar & Search Utility  */}
<div className="p-space-md flex flex-col lg:flex-row lg:items-center justify-between gap-space-md bg-surface-container-low/40">
{/*  Search Input  */}
<div className="relative flex-1 max-w-lg">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
<input className="w-full pl-9 pr-4 py-2 bg-surface-container-lowest rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-sm" placeholder="Search student name, admission no (NIIS/20...), or receipt ref..." type="text"/>
</div>
{/*  Multi-tier Filter Dropdowns  */}
<div className="flex flex-wrap items-center gap-2">
{/*  Class Section Filter  */}
<div className="relative">
<select className="px-3 py-2 pr-8 bg-surface-container-lowest text-on-surface rounded-lg font-label-md text-label-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer shadow-sm">
<option value="all">All Classes &amp; Arms</option>
<option value="p1">Primary 1 - 3</option>
<option value="p2">Primary 4 - 6</option>
<option value="jss">JSS 1 - 3</option>
<option selected value="sss">SSS 1 - 3 (Senior High)</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-outline text-[16px] pointer-events-none">expand_more</span>
</div>
{/*  Payment Status Filter  */}
<div className="relative">
<select className="px-3 py-2 pr-8 bg-surface-container-lowest text-on-surface rounded-lg font-label-md text-label-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer shadow-sm">
<option value="all">Status: All Records</option>
<option value="paid">Fully Paid</option>
<option value="partial">Partial Balance</option>
<option value="overdue">Default / Overdue</option>
</select>
<span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-outline text-[16px] pointer-events-none">expand_more</span>
</div>
{/*  Date Range Filter  */}
<div className="flex items-center gap-1.5 px-3 py-2 bg-surface-container-lowest text-on-surface rounded-lg font-label-md text-label-md shadow-sm">
<span className="material-symbols-outlined text-[16px] text-primary">date_range</span>
<span>1st Term 2026/27</span>
</div>
{/*  Batch Action trigger  */}
<button className="p-2 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container shadow-sm transition-colors" title="Send Bulk SMS Reminders" type="button">
<span className="material-symbols-outlined text-[18px]">sms</span>
</button>
</div>
</div>
{/*  Tabular Data Display  */}
<div className="overflow-x-auto">
<table className="w-full text-left font-body-md text-body-md">
{/*  Table Header  */}
<thead className="bg-surface-container-low font-label-sm text-label-sm uppercase tracking-wider text-outline select-none">
<tr>
<th className="py-3 px-space-md font-semibold">Student &amp; Admission ID</th>
<th className="py-3 px-space-md font-semibold text-right">Total Billed</th>
<th className="py-3 px-space-md font-semibold text-right">Amount Paid</th>
<th className="py-3 px-space-md font-semibold text-right">Outstanding Arrears</th>
<th className="py-3 px-space-md font-semibold text-center">Status</th>
<th className="py-3 px-space-md font-semibold">Payment Channel</th>
<th className="py-3 px-space-md font-semibold">Latest Receipt &amp; Date</th>
<th className="py-3 px-space-md font-semibold text-center">Bursary Actions</th>
</tr>
</thead>
{/*  Table Body Rows  */}
<tbody className="divide-y-0 text-on-surface">
{/*  Row 1: Aisha Mansur Danbaba  */}
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-3">
<img className="w-9 h-9 rounded-full object-cover shrink-0 shadow-sm" data-alt="Portrait photo of a young female Nigerian secondary school student smiling gently, wearing a navy blue hijab uniform at Noorul Ilm International School in Kaduna" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwMfXvgShl7pSwhXx_F-2wn3oJpRThocy_qyS2Zzu46IQHHmOp9s4Q-hGVZcmOjWWrgaw95i6CNMpbcYKQa1-a-Lub7ddhjfaeg9AtOOm1razJS4Q5jVXIWEokx2IZby6EQg24aayQSk5iRMUtuBhRomUIWVRi_1NxaYxFTrroeAQaJbmjRGe-zS7zMqMEcfinpUz6O4HULY1zNqDf8hRgMp-tUn9e2n4AmJupVKUDWViltFgHCloEWg"/>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Aisha Mansur Danbaba</span>
<div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
<span className="text-primary font-semibold">NIIS/2024/0118</span>
<span>•</span>
<span>SSS 2 Science A</span>
</div>
</div>
</div>
</td>
<td className="py-3.5 px-space-md text-right font-medium">₦185,000</td>
<td className="py-3.5 px-space-md text-right font-bold text-secondary">₦185,000</td>
<td className="py-3.5 px-space-md text-right font-medium text-on-surface-variant">₦0</td>
<td className="py-3.5 px-space-md text-center">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Fully Paid
              </span>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-1.5 font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px] text-primary">account_balance</span>
<span>GTBank Transfer</span>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex flex-col font-body-sm text-body-sm">
<span className="font-semibold text-primary">#NIIS-REC-8910</span>
<span className="text-on-surface-variant text-[11px]">08 Oct 2026 • 11:24 AM</span>
</div>
</td>
<td className="py-3.5 px-space-md text-center">
<div className="flex items-center justify-center gap-1">
<button className="p-1.5 rounded-md hover:bg-surface-container text-primary hover:text-primary-container transition-colors" title="Print Official Receipt PDF" type="button">
<span className="material-symbols-outlined text-[18px]">print</span>
</button>
<button className="p-1.5 rounded-md hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" title="View Invoicing History" type="button">
<span className="material-symbols-outlined text-[18px]">history</span>
</button>
</div>
</td>
</tr>
{/*  Row 2: Farouk Umar Sadiq  */}
<tr className="hover:bg-surface-container-low/60 transition-colors bg-surface-container-lowest">
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-3">
<img className="w-9 h-9 rounded-full object-cover shrink-0 shadow-sm" data-alt="Headshot of a teenage Nigerian male student with neat short haircut wearing an institutional crisp white shirt with dark blue blazer crest in Kaduna school environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC53YLxeePiK58Yz2-_iAd1Cnqa-PxPW-pTLtFZEvPVh2Q7caGuM1jU7JEvFf75uogTk3GxkBythwd-lQyFwUTawP6SADa1cWUUUeUODFz8FTDXY4IrnsDLqnsKn8_6R8Xp0u-Tckw2YA0PhZBf8zoT57Lb97PWQetKMKM2BECJMNOyVLmNzlNWWK_LiMVbYUXaKBNDMjw2ZAs08zMgeHUYFicyqCkzxeVRKw7OWahHDjpK_yHN6N8p-w"/>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Farouk Umar Sadiq</span>
<div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
<span className="text-primary font-semibold">NIIS/2024/0145</span>
<span>•</span>
<span>SSS 2 Science A</span>
</div>
</div>
</div>
</td>
<td className="py-3.5 px-space-md text-right font-medium">₦185,000</td>
<td className="py-3.5 px-space-md text-right font-semibold text-on-surface">₦150,000</td>
<td className="py-3.5 px-space-md text-right font-bold text-tertiary-container">₦35,000</td>
<td className="py-3.5 px-space-md text-center">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary-container"></span> Partial Balance
              </span>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-1.5 font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px] text-outline">credit_card</span>
<span>Stanbic IBTC POS</span>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex flex-col font-body-sm text-body-sm">
<span className="font-semibold text-primary">#NIIS-REC-8845</span>
<span className="text-on-surface-variant text-[11px]">02 Oct 2026 • 09:12 AM</span>
</div>
</td>
<td className="py-3.5 px-space-md text-center">
<div className="flex items-center justify-center gap-1">
<button className="p-1.5 rounded-md hover:bg-surface-container text-primary" title="Record Additional Payment" type="button">
<span className="material-symbols-outlined text-[18px]">add_card</span>
</button>
<button className="p-1.5 rounded-md hover:bg-surface-container text-outline hover:text-primary" title="Send SMS reminder to parent" type="button">
<span className="material-symbols-outlined text-[18px]">send_to_mobile</span>
</button>
</div>
</td>
</tr>
{/*  Row 3: Khadijah Ahmad Rufai  */}
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-3">
<img className="w-9 h-9 rounded-full object-cover shrink-0 shadow-sm" data-alt="Portrait of an intelligent 13-year-old Nigerian girl wearing glasses and Noorul Ilm school white collared shirt with green trim in Kaduna classroom" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5k0v4r2Kk48QBsQEOQyqGy0fI9MEbOIiBGYoZQGCjklgSYppiwvpZVZsiBYuQQyWgEiD_oTQ08uQHXfTjEVxzrKQ0_We67nKoKk7Da9XzPoaGs6uN1NA7hCWrxbeHOLB42jz6AF2nwzSRaNSck-C5yPhiz7u9IcalysxQ9pm7SzP_pNBc5tFb0R51wneYksuibF7W8jR8khbK-lfHRUYFKwsD9WVV1fOkIMKhKHugTsvgdFvzyn8-fg"/>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Khadijah Ahmad Rufai</span>
<div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
<span className="text-primary font-semibold">NIIS/2025/0302</span>
<span>•</span>
<span>JSS 2 Emerald</span>
</div>
</div>
</div>
</td>
<td className="py-3.5 px-space-md text-right font-medium">₦150,000</td>
<td className="py-3.5 px-space-md text-right font-bold text-secondary">₦150,000</td>
<td className="py-3.5 px-space-md text-right font-medium text-on-surface-variant">₦0</td>
<td className="py-3.5 px-space-md text-center">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Fully Paid
              </span>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-1.5 font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px] text-secondary">language</span>
<span>Paystack Online</span>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex flex-col font-body-sm text-body-sm">
<span className="font-semibold text-primary">#NIIS-REC-8924</span>
<span className="text-on-surface-variant text-[11px]">11 Oct 2026 • 04:45 PM</span>
</div>
</td>
<td className="py-3.5 px-space-md text-center">
<div className="flex items-center justify-center gap-1">
<button className="p-1.5 rounded-md hover:bg-surface-container text-primary" title="Print Official Receipt PDF" type="button">
<span className="material-symbols-outlined text-[18px]">print</span>
</button>
<button className="p-1.5 rounded-md hover:bg-surface-container text-on-surface-variant" title="View Invoicing History" type="button">
<span className="material-symbols-outlined text-[18px]">history</span>
</button>
</div>
</td>
</tr>
{/*  Row 4: Bilal Abdulrahman  */}
<tr className="hover:bg-surface-container-low/60 transition-colors bg-surface-container-lowest">
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-3">
<img className="w-9 h-9 rounded-full object-cover shrink-0 shadow-sm" data-alt="Portrait of an energetic 8-year-old Nigerian elementary schoolboy wearing Noorul Ilm school primary uniform polo shirt in Kaduna" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiOkQhhbLDzYrW_EIFL0Re5t73hqRQnVJpNv7F2q5ZlacreeT1IgHJSw-EfqOnp0RZEPFN2CuA-ULuvAi6cagDQ3dpYKq1IWOSp9EAkUIRqCpbKiV5royHTaLoS9YKqD8wkIMchejZ6oRE-NA-J4d2Zqoe7ovdZvNdR83uPZHrZWdoHA2jEv5CxCoZss6s9BaOaMXaGVXvqOlVznp5z01nsocgNTIanOJF4-QxHHd2kPaaP7x2N0ug-Q"/>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Bilal Abdulrahman</span>
<div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
<span className="text-primary font-semibold">NIIS/2026/0589</span>
<span>•</span>
<span>Primary 3 Sapphire</span>
</div>
</div>
</div>
</td>
<td className="py-3.5 px-space-md text-right font-medium">₦135,000</td>
<td className="py-3.5 px-space-md text-right font-bold text-secondary">₦135,000</td>
<td className="py-3.5 px-space-md text-right font-medium text-on-surface-variant">₦0</td>
<td className="py-3.5 px-space-md text-center">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Fully Paid
              </span>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-1.5 font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px] text-primary">account_balance</span>
<span>Zenith Direct</span>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex flex-col font-body-sm text-body-sm">
<span className="font-semibold text-primary">#NIIS-REC-8790</span>
<span className="text-on-surface-variant text-[11px]">28 Sep 2026 • 02:18 PM</span>
</div>
</td>
<td className="py-3.5 px-space-md text-center">
<div className="flex items-center justify-center gap-1">
<button className="p-1.5 rounded-md hover:bg-surface-container text-primary" title="Print Official Receipt PDF" type="button">
<span className="material-symbols-outlined text-[18px]">print</span>
</button>
<button className="p-1.5 rounded-md hover:bg-surface-container text-on-surface-variant" title="View Invoicing History" type="button">
<span className="material-symbols-outlined text-[18px]">history</span>
</button>
</div>
</td>
</tr>
{/*  Row 5: Zainab Ibrahim Yakubu (Overdue Arrears)  */}
<tr className="hover:bg-error-container/20 transition-colors bg-error-container/10">
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-3">
<img className="w-9 h-9 rounded-full object-cover shrink-0 shadow-sm" data-alt="Portrait of an older teenage Nigerian female secondary student in dignified school uniform hijab with warm focused expression in Kaduna" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB2yDVpi5WyPoTOPiCzB6hCWHKvrR4IehMw4aYewrJam926C4mnUrG0E_mz0shZhyvgWSN4nGzuREOfm880fRL_aCIgBzdtX3Mjdt0IgdPundAhEqzUqTF22rR1ypguQ5GMO3oaH2AtXWGtL_N0x8L1zo4PEYmlABj6kaVwKbwzjDDxHCt9Z9tVvVoKEWg20ELybyDcZnd_aczThhlxWOUc9P-pXiyNsenEiRcp35LItDvhIr1uuJPmw"/>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Zainab Ibrahim Yakubu</span>
<div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
<span className="text-primary font-semibold">NIIS/2023/0088</span>
<span>•</span>
<span>SSS 3 Commercial</span>
</div>
</div>
</div>
</td>
<td className="py-3.5 px-space-md text-right font-medium">₦210,000 <span className="text-[10px] text-outline block">(incl WAEC)</span></td>
<td className="py-3.5 px-space-md text-right font-bold text-on-surface-variant">₦0</td>
<td className="py-3.5 px-space-md text-right font-bold text-error">₦210,000</td>
<td className="py-3.5 px-space-md text-center">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-error-container text-error font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-error animate-ping"></span> Overdue (2 Notices)
              </span>
</td>
<td className="py-3.5 px-space-md">
<span className="font-body-sm text-body-sm text-outline italic">No Payment On File</span>
</td>
<td className="py-3.5 px-space-md">
<span className="font-body-sm text-body-sm text-outline">—</span>
</td>
<td className="py-3.5 px-space-md text-center">
<div className="flex items-center justify-center gap-1">
<button className="p-1.5 rounded-md hover:bg-error-container text-error" title="Send Immediate SMS Reminder" type="button">
<span className="material-symbols-outlined text-[18px]">sms_failed</span>
</button>
<button className="p-1.5 rounded-md hover:bg-surface-container text-primary font-bold" title="Open Quick Payment Modal" type="button">
<span className="material-symbols-outlined text-[18px]">add_card</span>
</button>
</div>
</td>
</tr>
{/*  Row 6: Usman Kabir Mohammed  */}
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-3">
<img className="w-9 h-9 rounded-full object-cover shrink-0 shadow-sm" data-alt="Portrait photo of a young Nigerian male junior secondary student wearing clean school uniform shirt sitting attentively in a Kaduna classroom" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAirb9Mw7saYTdt9HYxXZHuI4gX3Gl9f-IVspcgUZhJ5eH8-BeZPp5lBLN-HzQlfdumQrGrFtB5jGZgCil0c21oyL2hA6-ODiDG_zT2qiIFoTA4RNAvf2ESA5Kduly8ou3VDJiBxmaD5waA8pbQRwxszTpS8OkV_UktAcAaBKRcnrqUPaCHy2gjqOSiC8GsGqz4nvM0gfqVOnNXyXLrBSOMbvfiY6x8O7DDuqrHY1z5SQagDXx17-6Ng"/>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Usman Kabir Mohammed</span>
<div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
<span className="text-primary font-semibold">NIIS/2025/0421</span>
<span>•</span>
<span>JSS 1 Diamond</span>
</div>
</div>
</div>
</td>
<td className="py-3.5 px-space-md text-right font-medium">₦150,000</td>
<td className="py-3.5 px-space-md text-right font-semibold text-on-surface">₦100,000</td>
<td className="py-3.5 px-space-md text-right font-bold text-tertiary-container">₦50,000</td>
<td className="py-3.5 px-space-md text-center">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary-container"></span> Partial Balance
              </span>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-1.5 font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px] text-outline">credit_card</span>
<span>Bursary POS</span>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex flex-col font-body-sm text-body-sm">
<span className="font-semibold text-primary">#NIIS-REC-8862</span>
<span className="text-on-surface-variant text-[11px]">04 Oct 2026 • 01:10 PM</span>
</div>
</td>
<td className="py-3.5 px-space-md text-center">
<div className="flex items-center justify-center gap-1">
<button className="p-1.5 rounded-md hover:bg-surface-container text-primary" title="Record Balance Payment" type="button">
<span className="material-symbols-outlined text-[18px]">add_card</span>
</button>
<button className="p-1.5 rounded-md hover:bg-surface-container text-outline" title="Print Current Receipt" type="button">
<span className="material-symbols-outlined text-[18px]">print</span>
</button>
</div>
</td>
</tr>
{/*  Row 7: Fatima Zahra Al-Hassan  */}
<tr className="hover:bg-surface-container-low/60 transition-colors bg-surface-container-lowest">
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-3">
<img className="w-9 h-9 rounded-full object-cover shrink-0 shadow-sm" data-alt="Portrait of a young 15-year-old Nigerian female student wearing Islamic school uniform hijab with warm confident smile in Kaduna academy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsyTsQssCKAKmoVUuiveZgd61OnSMM9vie-OroaUJ_u-_LCw-SVyNwrDOOUUBAGcHBzU8n_sto3fUG9BBQuIlhoUNsbgan8X343rSNHO9POFajn9JEnOqbvDmVbQwkBodN4iSg5o5fayJDeCs5VhB3gKdadHtR1VdIQHJmgxgL8wRhUAUVmUZfxBJNd6ylSZaBKEE415ZbU3shUX6wjFZGr-sgstuCvYpiKLfQUIiSjFuyPxTKZhpzNA"/>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg font-bold text-on-surface truncate">Fatima Zahra Al-Hassan</span>
<div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
<span className="text-primary font-semibold">NIIS/2024/0199</span>
<span>•</span>
<span>SSS 1 Arts</span>
</div>
</div>
</div>
</td>
<td className="py-3.5 px-space-md text-right font-medium">₦185,000</td>
<td className="py-3.5 px-space-md text-right font-bold text-secondary">₦185,000</td>
<td className="py-3.5 px-space-md text-right font-medium text-on-surface-variant">₦0</td>
<td className="py-3.5 px-space-md text-center">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Fully Paid
              </span>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-center gap-1.5 font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[16px] text-secondary">language</span>
<span>Paystack Parent Portal</span>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex flex-col font-body-sm text-body-sm">
<span className="font-semibold text-primary">#NIIS-REC-8931</span>
<span className="text-on-surface-variant text-[11px]">14 Oct 2026 • 08:30 AM</span>
</div>
</td>
<td className="py-3.5 px-space-md text-center">
<div className="flex items-center justify-center gap-1">
<button className="p-1.5 rounded-md hover:bg-surface-container text-primary" title="Print Official Receipt PDF" type="button">
<span className="material-symbols-outlined text-[18px]">print</span>
</button>
<button className="p-1.5 rounded-md hover:bg-surface-container text-on-surface-variant" title="View Invoicing History" type="button">
<span className="material-symbols-outlined text-[18px]">history</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Table Pagination & Ledger Meta  */}
<div className="p-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm bg-surface-container-low/40">
<div className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant">
<span>Showing <strong className="text-on-surface">1 - 7</strong> of <strong className="text-on-surface">1,842</strong> student fee records</span>
<span className="text-outline">•</span>
<span className="text-primary font-medium">Bursary Fiscal Lock: Active</span>
</div>
<div className="flex items-center gap-1">
<button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface-container shadow-sm transition-colors disabled:opacity-50" disabled type="button">Previous</button>
<button className="w-8 h-8 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-semibold" type="button">1</button>
<button className="w-8 h-8 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface-container shadow-sm" type="button">2</button>
<button className="w-8 h-8 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface-container shadow-sm" type="button">3</button>
<span className="px-1 text-outline">...</span>
<button className="w-8 h-8 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface-container shadow-sm" type="button">263</button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface-container shadow-sm transition-colors" type="button">Next</button>
</div>
</div>
</div>
{/*  Sliding Quick Bursary Entry & POS Receipt Drawer (Interactive Overlay)  */}
<aside className="fixed right-0 top-0 bottom-0 w-full sm:w-[440px] bg-surface-container-lowest shadow-2xl z-50 transform translate-x-full transition-transform duration-300 ease-in-out flex flex-col justify-between overflow-y-auto" id="bursaryDrawer">
{/*  Drawer Header  */}
<div className="p-space-lg bg-primary text-on-primary flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-lg bg-on-primary/10 flex items-center justify-center">
<span className="material-symbols-outlined text-[20px] text-on-primary">point_of_sale</span>
</div>
<div>
<h3 className="font-headline-sm text-headline-sm font-bold leading-tight">Record Fee Payment</h3>
<p className="font-body-sm text-[11px] text-primary-fixed">Bursary Counter Desk • Kaduna Branch</p>
</div>
</div>
<button className="p-1 rounded-lg text-on-primary/80 hover:text-on-primary hover:bg-on-primary/10 transition-colors" onClick={() => {}} type="button">
<span className="material-symbols-outlined text-[22px]">close</span>
</button>
</div>
{/*  Drawer Body Form  */}
<form className="p-space-lg flex-1 space-y-space-md">
{/*  Student Lookup Field  */}
<div className="space-y-1.5">
<label className="block font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">Student / Admission ID *</label>
<div className="relative">
<input className="w-full pl-3 pr-9 py-2 bg-surface-container-low rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-sm" placeholder="Type 'Farouk Umar' or 'NIIS/2024/0145'" type="text" value="Farouk Umar Sadiq (NIIS/2024/0145)"/>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-secondary text-[18px]">check_circle</span>
</div>
<div className="p-2.5 rounded-lg bg-surface-container-low text-body-sm text-body-sm flex justify-between">
<span className="text-on-surface-variant">Class: <strong>SSS 2 Science A</strong></span>
<span className="text-tertiary-container font-semibold">Balance: <strong>₦35,000</strong></span>
</div>
</div>
{/*  Payment Amount (with ₦ prefix)  */}
<div className="space-y-1.5">
<label className="block font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">Amount Paid (NGN ₦) *</label>
<div className="relative flex items-center">
<span className="absolute left-3 font-headline-sm text-headline-sm font-bold text-outline">₦</span>
<input className="w-full pl-8 pr-4 py-2.5 bg-surface-container-lowest rounded-lg font-headline-sm text-headline-sm font-bold text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-sm" type="text" value="35,000"/>
</div>
<p className="font-body-sm text-[11px] text-secondary font-medium">Paying full outstanding balance of ₦35,000</p>
</div>
{/*  Payment Method / Channel Selector  */}
<div className="space-y-1.5">
<label className="block font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold">Payment Channel *</label>
<div className="grid grid-cols-2 gap-2">
<label className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container-low cursor-pointer hover:bg-surface-container">
<input defaultChecked className="accent-primary" name="channel" type="radio" value="pos"/>
<span className="font-label-md text-label-md text-on-surface">POS Terminal</span>
</label>
<label className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container-low cursor-pointer hover:bg-surface-container">
<input className="accent-primary" name="channel" type="radio" value="transfer"/>
<span className="font-label-md text-label-md text-on-surface">Direct Transfer</span>
</label>
<label className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container-low cursor-pointer hover:bg-surface-container">
<input className="accent-primary" name="channel" type="radio" value="cash"/>
<span className="font-label-md text-label-md text-on-surface">Cash Deposit</span>
</label>
<label className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container-low cursor-pointer hover:bg-surface-container">
<input className="accent-primary" name="channel" type="radio" value="online"/>
<span className="font-label-md text-label-md text-on-surface">Paystack Web</span>
</label>
</div>
</div>
{/*  Reference & Payer Metadata  */}
<div className="space-y-3">
<div>
<label className="block font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold mb-1">Bank RRN / STAN Reference</label>
<input className="w-full px-3 py-2 bg-surface-container-lowest rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-sm" placeholder="e.g. STAN-09823192 or GTB-REF-44" type="text" value="STAN-POS-084920"/>
</div>
<div>
<label className="block font-label-sm text-label-sm uppercase tracking-wider text-outline font-semibold mb-1">Depositor / Parent Full Name *</label>
<input className="w-full px-3 py-2 bg-surface-container-lowest rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-sm" placeholder="e.g. Alhaji Umar Sadiq" type="text" value="Alhaji Umar Sadiq (Father)"/>
</div>
</div>
{/*  Automation Switches  */}
<div className="p-space-sm rounded-lg bg-surface-container-low space-y-2">
<label className="flex items-center gap-2.5 cursor-pointer">
<input defaultChecked className="w-4 h-4 rounded accent-primary cursor-pointer" type="checkbox"/>
<span className="font-label-md text-label-md text-on-surface font-medium">Auto-dispatch SMS Receipt to Parent (+234 803 219 9410)</span>
</label>
<label className="flex items-center gap-2.5 cursor-pointer">
<input defaultChecked className="w-4 h-4 rounded accent-primary cursor-pointer" type="checkbox"/>
<span className="font-label-md text-label-md text-on-surface font-medium">Generate Official Stamp Receipt PDF immediately</span>
</label>
</div>
</form>
{/*  Drawer Footer Actions  */}
<div className="p-space-lg bg-surface-container-low/70 flex flex-col gap-2">
<button className="w-full py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2" onClick={() => {}} type="button">
<span className="material-symbols-outlined text-[20px]">check</span>
<span>Confirm Payment • Issue Receipt #8935</span>
</button>
<button className="w-full py-2 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors" onClick={() => {}} type="button">
        Cancel &amp; Close Window
      </button>
</div>
</aside>
{/*  Interactive script for client-side search simulation and quick actions  */}

</div></main>
  );
}
    