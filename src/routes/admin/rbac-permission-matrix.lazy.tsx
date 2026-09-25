
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/admin/rbac-permission-matrix')({
  component: RbacPermissionMatrix,
});

function RbacPermissionMatrix() {
  return (
    <main className="w-full pt-16 px-space-lg py-space-lg flex-1 bg-background"><div className="flex flex-col w-full">
{/*  Sticky Global Save & Confirmation Banner if unsaved state  */}
<div className="hidden mb-space-md p-space-md bg-secondary-container text-on-secondary-container rounded-xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-md transition-all duration-300" id="unsaved-changes-banner">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[24px] text-secondary">shield_lock</span>
<div>
<p className="font-label-lg text-label-lg font-bold">Uncommitted Permission Matrix Revisions</p>
<p className="font-body-sm text-body-sm opacity-90">You have altered 3 permission nodes for role: <span className="font-semibold underline">Class Teacher</span>. These will not enforce on Kaduna SMS cluster until committed.</p>
</div>
</div>
<div className="flex items-center gap-space-sm shrink-0">
<button className="px-space-md py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors shadow-sm" onClick={() => {}} type="button">Discard</button>
<button className="px-space-md py-1.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm flex items-center gap-1" onClick={() => {}} type="button">
<span className="material-symbols-outlined text-[16px]">check_circle</span>
<span>Commit Changes Now</span>
</button>
</div>
</div>
{/*  Header Section with Hierarchy & Strategic Buttons  */}
<div className="flex flex-col gap-space-md mb-space-lg">
{/*  Breadcrumb & Status Pill  */}
<div className="flex flex-wrap items-center justify-between gap-space-sm">
<nav className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<a className="hover:text-primary transition-colors" href="#">Home</a>
<span className="text-outline-variant">/</span>
<a className="hover:text-primary transition-colors" href="#">System Administration</a>
<span className="text-outline-variant">/</span>
<span className="text-on-surface font-semibold">Roles &amp; Permissions</span>
</nav>
<div className="flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full text-on-surface-variant font-label-sm text-label-sm">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span>Kaduna State SMS Security Baseline: <strong className="text-on-surface font-semibold">Compliant (ISO 27001 / NDPR)</strong></span>
</div>
</div>
{/*  Main Title & Action Bar  */}
<div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md">
<div className="space-y-1">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-[24px]">verified_user</span>
</div>
<div>
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Role-Based Access Control (RBAC) &amp; Permissions</h1>
<p className="font-body-md text-body-md text-on-surface-variant">Configure enterprise-grade security policies, module visibility, action permissions, and data scopes for staff, parents, and students.</p>
</div>
</div>
</div>
{/*  Action Buttons Cluster  */}
<div className="flex flex-wrap items-center gap-2 shrink-0">
<button className="px-space-md py-2 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md flex items-center gap-1.5 shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px] text-primary">add_moderator</span>
<span>+ Create Custom Role</span>
</button>
<button className="px-space-md py-2 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md flex items-center gap-1.5 shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px] text-on-surface-variant">content_copy</span>
<span>Clone Role</span>
</button>
<button className="px-space-md py-2 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md flex items-center gap-1.5 shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px] text-on-surface-variant">file_download</span>
<span>Export Policy</span>
</button>
<button className="px-space-lg py-2 rounded-lg bg-primary text-on-primary hover:bg-primary-container transition-all font-label-lg text-label-lg flex items-center gap-2 shadow-md" onClick={() => {}} type="button">
<span className="material-symbols-outlined text-[20px] text-tertiary-fixed">save</span>
<span>Save &amp; Apply Changes</span>
</button>
</div>
</div>
</div>
{/*  Role Selection Tabs & Ribbon  */}
<div className="mb-space-md">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">System Roles Registry</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-[11px] font-semibold">10 Roles Defined</span>
</div>
<div className="text-outline text-body-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">touch_app</span>
<span>Select role to audit &amp; tune matrix</span>
</div>
</div>
{/*  Scrollable Horizontal Role Tabs  */}
<div className="overflow-x-auto pb-2 scrollbar-none flex gap-2">
<button className="px-space-md py-2.5 rounded-xl bg-surface-container-lowest hover:bg-surface-container transition-all text-left shrink-0 shadow-sm flex items-center gap-space-sm" type="button">
<div className="w-8 h-8 rounded-lg bg-error-container text-on-error-container flex items-center justify-center font-bold text-label-md">SA</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Super Administrator</span>
<span className="font-body-sm text-[11px] text-on-surface-variant">3 users • Root</span>
</div>
</button>
<button className="px-space-md py-2.5 rounded-xl bg-surface-container-lowest hover:bg-surface-container transition-all text-left shrink-0 shadow-sm flex items-center gap-space-sm" type="button">
<div className="w-8 h-8 rounded-lg bg-surface-container text-primary flex items-center justify-center font-bold text-label-md">PR</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">School Principal</span>
<span className="font-body-sm text-[11px] text-on-surface-variant">1 user (Dr. Aminu Bello)</span>
</div>
</button>
<button className="px-space-md py-2.5 rounded-xl bg-surface-container-lowest hover:bg-surface-container transition-all text-left shrink-0 shadow-sm flex items-center gap-space-sm" type="button">
<div className="w-8 h-8 rounded-lg bg-surface-container text-primary flex items-center justify-center font-bold text-label-md">VP</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Academic VP</span>
<span className="font-body-sm text-[11px] text-on-surface-variant">2 users</span>
</div>
</button>
<button className="px-space-md py-2.5 rounded-xl bg-surface-container-lowest hover:bg-surface-container transition-all text-left shrink-0 shadow-sm flex items-center gap-space-sm" type="button">
<div className="w-8 h-8 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center font-bold text-label-md">BUR</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Bursar / Sr. Accountant</span>
<span className="font-body-sm text-[11px] text-on-surface-variant">4 users</span>
</div>
</button>
{/*  ACTIVE TAB: CLASS TEACHER  */}
<button className="px-space-md py-2.5 rounded-xl bg-primary text-on-primary transition-all text-left shrink-0 shadow-md flex items-center gap-space-sm relative" type="button">
<div className="w-8 h-8 rounded-lg bg-surface-container-lowest text-primary flex items-center justify-center font-bold text-label-md shadow-inner">CT</div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-primary font-bold">Class Teacher</span>
<span className="w-2 h-2 rounded-full bg-secondary-fixed"></span>
</div>
<span className="font-body-sm text-[11px] text-on-primary/80">42 users • Assigned Arms</span>
</div>
</button>
<button className="px-space-md py-2.5 rounded-xl bg-surface-container-lowest hover:bg-surface-container transition-all text-left shrink-0 shadow-sm flex items-center gap-space-sm" type="button">
<div className="w-8 h-8 rounded-lg bg-surface-container text-on-surface-variant flex items-center justify-center font-bold text-label-md">ST</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Subject Teacher</span>
<span className="font-body-sm text-[11px] text-on-surface-variant">68 users</span>
</div>
</button>
<button className="px-space-md py-2.5 rounded-xl bg-surface-container-lowest hover:bg-surface-container transition-all text-left shrink-0 shadow-sm flex items-center gap-space-sm" type="button">
<div className="w-8 h-8 rounded-lg bg-surface-container text-on-surface-variant flex items-center justify-center font-bold text-label-md">EO</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Examination Officer</span>
<span className="font-body-sm text-[11px] text-on-surface-variant">3 users</span>
</div>
</button>
<button className="px-space-md py-2.5 rounded-xl bg-surface-container-lowest hover:bg-surface-container transition-all text-left shrink-0 shadow-sm flex items-center gap-space-sm" type="button">
<div className="w-8 h-8 rounded-lg bg-surface-container text-on-surface-variant flex items-center justify-center font-bold text-label-md">CLI</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">School Nurse / Clinic</span>
<span className="font-body-sm text-[11px] text-on-surface-variant">2 users</span>
</div>
</button>
<button className="px-space-md py-2.5 rounded-xl bg-surface-container-lowest hover:bg-surface-container transition-all text-left shrink-0 shadow-sm flex items-center gap-space-sm" type="button">
<div className="w-8 h-8 rounded-lg bg-surface-container text-on-surface-variant flex items-center justify-center font-bold text-label-md">PAR</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Parent Portal</span>
<span className="font-body-sm text-[11px] text-on-surface-variant">1,420 users</span>
</div>
</button>
<button className="px-space-md py-2.5 rounded-xl bg-surface-container-lowest hover:bg-surface-container transition-all text-left shrink-0 shadow-sm flex items-center gap-space-sm" type="button">
<div className="w-8 h-8 rounded-lg bg-surface-container text-on-surface-variant flex items-center justify-center font-bold text-label-md">STU</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Student Portal</span>
<span className="font-body-sm text-[11px] text-on-surface-variant">1,842 users</span>
</div>
</button>
</div>
</div>
{/*  Role Meta Dossier Card & Policy Scope  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg mb-space-lg">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="flex items-start gap-space-md max-w-3xl">
<div className="w-12 h-12 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[28px]">assignment_ind</span>
</div>
<div className="space-y-1">
<div className="flex flex-wrap items-center gap-2">
<h2 className="font-headline-md text-headline-md text-primary">Class Teacher</h2>
<span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">Standard Faculty Tier</span>
<span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">42 Active Accounts</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">Academic personnel responsible for daily class attendance, continuous assessment entry, student remarks, and parent liaison for assigned arms.</p>
</div>
</div>
{/*  Scope Metadata Badges  */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm shrink-0 bg-surface-container-low p-space-sm rounded-xl">
<div className="flex flex-col p-2 bg-surface-container-lowest rounded-lg">
<span className="font-label-sm text-[11px] uppercase tracking-wider text-outline">Data Scope Isolation</span>
<span className="font-label-md text-label-md text-secondary font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">filter_alt</span>
<span>Restricted: Assigned Class Only</span>
</span>
</div>
<div className="flex flex-col p-2 bg-surface-container-lowest rounded-lg">
<span className="font-label-sm text-[11px] uppercase tracking-wider text-outline">Exam Overwrite Policy</span>
<span className="font-label-md text-label-md text-error font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">lock_clock</span>
<span>EO Sign-off Mandated</span>
</span>
</div>
<div className="col-span-1 sm:col-span-2 flex items-center justify-between text-[11px] font-body-sm text-on-surface-variant px-1 pt-1">
<span>Security Rev: <strong className="text-on-surface font-semibold">12 Oct 2026</strong></span>
<span>By: <strong className="text-primary font-semibold">Dr. Aminu Bello (Super Admin)</strong></span>
</div>
</div>
</div>
</div>
{/*  Search, Filter Controls & Bulk Action Tray  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md mb-space-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-sm flex-1 max-w-lg">
<div className="relative flex-1">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">manage_search</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest transition-all" id="matrix-search" onInput={() => {}} placeholder="Filter modules, actions or permissions (e.g., Attendance, Payroll)..." type="text"/>
</div>
<div className="flex items-center gap-1 px-2.5 py-1.5 bg-surface-container-low rounded-lg text-on-surface-variant text-label-sm font-label-sm">
<span className="material-symbols-outlined text-[16px] text-primary">tune</span>
<span>All 4 Categories</span>
</div>
</div>
{/*  Quick Batch Buttons  */}
<div className="flex flex-wrap items-center gap-2">
<button className="px-space-sm py-1.5 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors font-label-sm text-label-sm flex items-center gap-1" onClick={() => {}} type="button">
<span className="material-symbols-outlined text-[16px]">unfold_more</span>
<span>Expand All</span>
</button>
<button className="px-space-sm py-1.5 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors font-label-sm text-label-sm flex items-center gap-1" onClick={() => {}} type="button">
<span className="material-symbols-outlined text-[16px]">unfold_less</span>
<span>Collapse All</span>
</button>
<button className="px-space-sm py-1.5 rounded-lg bg-secondary-container text-on-secondary-container hover:opacity-90 transition-opacity font-label-sm text-label-sm font-semibold flex items-center gap-1 shadow-sm" onClick={() => {}} type="button">
<span className="material-symbols-outlined text-[16px]">verified</span>
<span>Grant Safe Defaults</span>
</button>
<button className="px-space-sm py-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors font-label-sm text-label-sm flex items-center gap-1" onClick={() => {}} type="button">
<span className="material-symbols-outlined text-[16px]">history</span>
<span>Reset to Saved</span>
</button>
</div>
</div>
{/*  Granular Permission Matrix Table Container  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden mb-space-lg">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse" id="rbac-matrix-table">
<thead>
<tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider h-11">
<th className="px-space-md py-2 w-72">Module / Capability</th>
<th className="px-space-sm py-2 text-center w-24">
<div className="flex items-center justify-center gap-1">
<span>View</span>
<span className="material-symbols-outlined text-[14px] text-outline">visibility</span>
</div>
</th>
<th className="px-space-sm py-2 text-center w-24">
<div className="flex items-center justify-center gap-1">
<span>Create</span>
<span className="material-symbols-outlined text-[14px] text-outline">add_circle</span>
</div>
</th>
<th className="px-space-sm py-2 text-center w-36">
<div className="flex items-center justify-center gap-1">
<span>Edit / Mod</span>
<span className="material-symbols-outlined text-[14px] text-outline">edit</span>
</div>
</th>
<th className="px-space-sm py-2 text-center w-24">
<div className="flex items-center justify-center gap-1">
<span>Delete</span>
<span className="material-symbols-outlined text-[14px] text-outline">delete</span>
</div>
</th>
<th className="px-space-sm py-2 text-center w-32">
<div className="flex items-center justify-center gap-1">
<span>Approve</span>
<span className="material-symbols-outlined text-[14px] text-outline">task_alt</span>
</div>
</th>
<th className="px-space-sm py-2 text-center w-28">
<div className="flex items-center justify-center gap-1">
<span>Export</span>
<span className="material-symbols-outlined text-[14px] text-outline">download</span>
</div>
</th>
<th className="px-space-md py-2 text-left w-48">Scope Constraint</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container font-body-md text-body-md text-on-surface">
{/*  CATEGORY 1: ACADEMIC MANAGEMENT  */}
<tr className="bg-surface-container-high/60 font-label-sm text-label-sm text-primary uppercase tracking-wider font-bold">
<td className="px-space-md py-2" colSpan={8}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">school</span>
<span>Academic Management &amp; Pedagogy (5 Modules)</span>
</div>
<span className="text-on-surface-variant font-normal normal-case text-[12px]">Class Teachers have primary operational jurisdiction</span>
</div>
</td>
</tr>
{/*  Row 1: Student Directory  */}
<tr className="hover:bg-surface-container-low transition-colors module-row" data-name="Student Directory">
<td className="px-space-md py-3 font-label-md text-label-md font-semibold">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="text-primary font-bold">Student Directory</span>
</div>
<span className="text-on-surface-variant font-body-sm text-[12px]">Bio-data, emergency contacts, parent mappings</span>
</div>
</td>
{/*  View  */}
<td className="px-space-sm py-3 text-center">
<input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer accent-primary" onChange={() => {}} type="checkbox"/>
</td>
{/*  Create  */}
<td className="px-space-sm py-3 text-center">
<input className="w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer accent-primary" onChange={() => {}} type="checkbox"/>
</td>
{/*  Edit  */}
<td className="px-space-sm py-3 text-center">
<div className="flex flex-col items-center">
<input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer accent-primary" onChange={() => {}} type="checkbox"/>
<span className="text-[10px] text-outline font-label-sm mt-0.5">Own Class</span>
</div>
</td>
{/*  Delete  */}
<td className="px-space-sm py-3 text-center">
<input className="w-4 h-4 rounded bg-surface-container text-outline opacity-40 cursor-not-allowed" disabled type="checkbox"/>
</td>
{/*  Approve  */}
<td className="px-space-sm py-3 text-center">
<input className="w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer accent-primary" onChange={() => {}} type="checkbox"/>
</td>
{/*  Export  */}
<td className="px-space-sm py-3 text-center">
<input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer accent-primary" onChange={() => {}} type="checkbox"/>
</td>
{/*  Scope  */}
<td className="px-space-md py-3">
<span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[11px] font-semibold flex items-center gap-1 w-max">
<span className="material-symbols-outlined text-[13px]">groups</span>
<span>Assigned Class</span>
</span>
</td>
</tr>
{/*  Row 2: Daily Attendance  */}
<tr className="hover:bg-surface-container-low transition-colors module-row" data-name="Daily Attendance">
<td className="px-space-md py-3 font-label-md text-label-md font-semibold">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="text-primary font-bold">Daily Attendance</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container text-primary font-label-sm text-[10px]">Morning / Afternoon</span>
</div>
<span className="text-on-surface-variant font-body-sm text-[12px]">Roll call, Kaduna MoE register compliance</span>
</div>
</td>
{/*  View  */}
<td className="px-space-sm py-3 text-center">
<input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer accent-primary" onChange={() => {}} type="checkbox"/>
</td>
{/*  Create  */}
<td className="px-space-sm py-3 text-center">
<input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer accent-primary" onChange={() => {}} type="checkbox"/>
</td>
{/*  Edit  */}
<td className="px-space-sm py-3 text-center">
<div className="flex flex-col items-center">
<input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer accent-primary" onChange={() => {}} type="checkbox"/>
<span className="text-[10px] text-secondary font-label-sm font-semibold mt-0.5">Within 24h</span>
</div>
</td>
{/*  Delete  */}
<td className="px-space-sm py-3 text-center">
<input className="w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer accent-primary" onChange={() => {}} type="checkbox"/>
</td>
{/*  Approve  */}
<td className="px-space-sm py-3 text-center">
<input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer accent-primary" onChange={() => {}} type="checkbox"/>
</td>
{/*  Export  */}
<td className="px-space-sm py-3 text-center">
<input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer accent-primary" onChange={() => {}} type="checkbox"/>
</td>
{/*  Scope  */}
<td className="px-space-md py-3">
<span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[11px] font-semibold flex items-center gap-1 w-max">
<span className="material-symbols-outlined text-[13px]">check_circle</span>
<span>Assigned Class</span>
</span>
</td>
</tr>
{/*  Row 3: Examination Marks Entry  */}
<tr className="hover:bg-surface-container-low transition-colors module-row" data-name="Examination Marks Entry">
<td className="px-space-md py-3 font-label-md text-label-md font-semibold">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="text-primary font-bold">Examination Marks Entry</span>
<span className="px-1.5 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[10px]">1st/2nd/3rd Term CA</span>
</div>
<span className="text-on-surface-variant font-body-sm text-[12px]">Continuous assessments, mid-term &amp; final exam inputs</span>
</div>
</td>
{/*  View  */}
<td className="px-space-sm py-3 text-center">
<input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer accent-primary" onChange={() => {}} type="checkbox"/>
</td>
{/*  Create  */}
<td className="px-space-sm py-3 text-center">
<input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer accent-primary" onChange={() => {}} type="checkbox"/>
</td>
{/*  Edit  */}
<td className="px-space-sm py-3 text-center">
<div className="flex flex-col items-center">
<input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer accent-primary" onChange={() => {}} type="checkbox"/>
<span className="text-[10px] text-outline font-label-sm mt-0.5">Pre-Lock Only</span>
</div>
</td>
{/*  Delete  */}
<td className="px-space-sm py-3 text-center">
<input className="w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer accent-primary" onChange={() => {}} type="checkbox"/>
</td>
{/*  Approve  */}
<td className="px-space-sm py-3 text-center">
<div className="flex flex-col items-center">
<input className="w-4 h-4 rounded bg-surface-container text-outline opacity-40 cursor-not-allowed" disabled type="checkbox"/>
<span className="text-[10px] text-error font-label-sm font-semibold mt-0.5">Requires EO</span>
</div>
</td>
{/*  Export  */}
<td className="px-space-sm py-3 text-center">
<input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer accent-primary" onChange={() => {}} type="checkbox"/>
</td>
{/*  Scope  */}
<td className="px-space-md py-3">
<span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-[11px] font-semibold flex items-center gap-1 w-max">
<span className="material-symbols-outlined text-[13px]">menu_book</span>
<span>Assigned Subjects</span>
</span>
</td>
</tr>
{/*  Row 4: Report Card Remarks  */}
<tr className="hover:bg-surface-container-low transition-colors module-row" data-name="Report Card Remarks">
<td className="px-space-md py-3 font-label-md text-label-md font-semibold">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="text-primary font-bold">Report Card Remarks</span>
</div>
<span className="text-on-surface-variant font-body-sm text-[12px]">Form master commentary, conduct rating, psychomotor evaluation</span>
</div>
</td>
{/*  View  */}
<td className="px-space-sm py-3 text-center">
<input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer accent-primary" onChange={() => {}} type="checkbox"/>
</td>
{/*  Create  */}
<td className="px-space-sm py-3 text-center">
<input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer accent-primary" onChange={() => {}} type="checkbox"/>
</td>
{/*  Edit  */}
<td className="px-space-sm py-3 text-center">
<input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer accent-primary" onChange={() => {}} type="checkbox"/>
</td>
{/*  Delete  */}
<td className="px-space-sm py-3 text-center">
<input className="w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer accent-primary" onChange={() => {}} type="checkbox"/>
</td>
{/*  Approve  */}
<td className="px-space-sm py-3 text-center">
<div className="flex flex-col items-center">
<input className="w-4 h-4 rounded bg-surface-container text-outline opacity-40 cursor-not-allowed" disabled type="checkbox"/>
<span className="text-[10px] text-primary font-label-sm font-semibold mt-0.5">Principal Signed</span>
</div>
</td>
{/*  Export  */}
<td className="px-space-sm py-3 text-center">
<input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer accent-primary" onChange={() => {}} type="checkbox"/>
</td>
{/*  Scope  */}
<td className="px-space-md py-3">
<span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[11px] font-semibold flex items-center gap-1 w-max">
<span className="material-symbols-outlined text-[13px]">rate_review</span>
<span>Assigned Class</span>
</span>
</td>
</tr>
{/*  Row 5: Curriculum & Lesson Plans  */}
<tr className="hover:bg-surface-container-low transition-colors module-row" data-name="Curriculum &amp; Lesson Plans">
<td className="px-space-md py-3 font-label-md text-label-md font-semibold">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="text-primary font-bold">Curriculum &amp; Lesson Plans</span>
</div>
<span className="text-on-surface-variant font-body-sm text-[12px]">Kaduna State NERDC syllabus, weekly notes, learning aids</span>
</div>
</td>
{/*  View  */}
<td className="px-space-sm py-3 text-center">
<input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer accent-primary" onChange={() => {}} type="checkbox"/>
</td>
{/*  Create  */}
<td className="px-space-sm py-3 text-center">
<input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer accent-primary" onChange={() => {}} type="checkbox"/>
</td>
{/*  Edit  */}
<td className="px-space-sm py-3 text-center">
<input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer accent-primary" onChange={() => {}} type="checkbox"/>
</td>
{/*  Delete  */}
<td className="px-space-sm py-3 text-center">
<input className="w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer accent-primary" onChange={() => {}} type="checkbox"/>
</td>
{/*  Approve  */}
<td className="px-space-sm py-3 text-center">
<div className="flex flex-col items-center">
<input className="w-4 h-4 rounded bg-surface-container text-outline opacity-40 cursor-not-allowed" disabled type="checkbox"/>
<span className="text-[10px] text-outline font-label-sm mt-0.5">HOD Approves</span>
</div>
</td>
{/*  Export  */}
<td className="px-space-sm py-3 text-center">
<input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer accent-primary" onChange={() => {}} type="checkbox"/>
</td>
{/*  Scope  */}
<td className="px-space-md py-3">
<span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-[11px] font-semibold flex items-center gap-1 w-max">
<span className="material-symbols-outlined text-[13px]">school</span>
<span>Department</span>
</span>
</td>
</tr>
{/*  CATEGORY 2: FINANCIAL & BURSARY  */}
<tr className="bg-surface-container-high/60 font-label-sm text-label-sm text-primary uppercase tracking-wider font-bold">
<td className="px-space-md py-2" colSpan={8}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">account_balance_wallet</span>
<span>Financial &amp; Bursary Accounting (3 Modules)</span>
</div>
<span className="text-error font-semibold text-[11px] uppercase tracking-wider flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">lock</span>
<span>Strict Bursary Wall Active</span>
</span>
</div>
</td>
</tr>
{/*  Row 6: Fee Structure & Billing  */}
<tr className="hover:bg-surface-container-low transition-colors module-row" data-name="Fee Structure &amp; Billing">
<td className="px-space-md py-3 font-label-md text-label-md font-semibold">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="text-on-surface font-bold">Fee Structure &amp; Billing</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-[10px]">₦ Tuition</span>
</div>
<span className="text-on-surface-variant font-body-sm text-[12px]">Schedule of term fees, boarding levies, PTA charges</span>
</div>
</td>
{/*  View  */}
<td className="px-space-sm py-3 text-center">
<div className="flex flex-col items-center">
<input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer accent-primary" onChange={() => {}} type="checkbox"/>
<span className="text-[10px] text-outline font-label-sm mt-0.5">Rates Only</span>
</div>
</td>
{/*  Create  */}
<td className="px-space-sm py-3 text-center">
<input className="w-4 h-4 rounded bg-surface-container text-outline opacity-40 cursor-not-allowed" disabled type="checkbox"/>
</td>
{/*  Edit  */}
<td className="px-space-sm py-3 text-center">
<input className="w-4 h-4 rounded bg-surface-container text-outline opacity-40 cursor-not-allowed" disabled type="checkbox"/>
</td>
{/*  Delete  */}
<td className="px-space-sm py-3 text-center">
<input className="w-4 h-4 rounded bg-surface-container text-outline opacity-40 cursor-not-allowed" disabled type="checkbox"/>
</td>
{/*  Approve  */}
<td className="px-space-sm py-3 text-center">
<input className="w-4 h-4 rounded bg-surface-container text-outline opacity-40 cursor-not-allowed" disabled type="checkbox"/>
</td>
{/*  Export  */}
<td className="px-space-sm py-3 text-center">
<input className="w-4 h-4 rounded bg-surface-container text-outline opacity-40 cursor-not-allowed" disabled type="checkbox"/>
</td>
{/*  Scope  */}
<td className="px-space-md py-3">
<span className="px-2.5 py-1 rounded-full bg-error-container text-on-error-container font-label-sm text-[11px] font-semibold flex items-center gap-1 w-max">
<span className="material-symbols-outlined text-[13px]">visibility_off</span>
<span>Balances Hidden</span>
</span>
</td>
</tr>
{/*  Row 7: Payments & Invoicing  */}
<tr className="hover:bg-surface-container-low transition-colors module-row" data-name="Payments &amp; Invoicing">
<td className="px-space-md py-3 font-label-md text-label-md font-semibold">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="text-on-surface font-bold opacity-80">Payments &amp; Invoicing</span>
<span className="px-1.5 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-[10px]">Restricted</span>
</div>
<span className="text-on-surface-variant font-body-sm text-[12px]">Bank deposits, Remita/Paystack reconciliation, receipts</span>
</div>
</td>
{/*  View  */}
<td className="px-space-sm py-3 text-center">
<input className="w-4 h-4 rounded bg-surface-container text-outline opacity-40 cursor-not-allowed" disabled type="checkbox"/>
</td>
{/*  Create  */}
<td className="px-space-sm py-3 text-center">
<input className="w-4 h-4 rounded bg-surface-container text-outline opacity-40 cursor-not-allowed" disabled type="checkbox"/>
</td>
{/*  Edit  */}
<td className="px-space-sm py-3 text-center">
<input className="w-4 h-4 rounded bg-surface-container text-outline opacity-40 cursor-not-allowed" disabled type="checkbox"/>
</td>
{/*  Delete  */}
<td className="px-space-sm py-3 text-center">
<input className="w-4 h-4 rounded bg-surface-container text-outline opacity-40 cursor-not-allowed" disabled type="checkbox"/>
</td>
{/*  Approve  */}
<td className="px-space-sm py-3 text-center">
<input className="w-4 h-4 rounded bg-surface-container text-outline opacity-40 cursor-not-allowed" disabled type="checkbox"/>
</td>
{/*  Export  */}
<td className="px-space-sm py-3 text-center">
<input className="w-4 h-4 rounded bg-surface-container text-outline opacity-40 cursor-not-allowed" disabled type="checkbox"/>
</td>
{/*  Scope  */}
<td className="px-space-md py-3">
<span className="px-2.5 py-1 rounded-full bg-surface-container-high text-outline font-label-sm text-[11px] font-semibold flex items-center gap-1 w-max">
<span className="material-symbols-outlined text-[13px]">block</span>
<span>No Access</span>
</span>
</td>
</tr>
{/*  Row 8: Fee Waivers & Discounts  */}
<tr className="hover:bg-surface-container-low transition-colors module-row" data-name="Fee Waivers &amp; Discounts">
<td className="px-space-md py-3 font-label-md text-label-md font-semibold">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="text-on-surface font-bold opacity-80">Fee Waivers &amp; Scholarships</span>
</div>
<span className="text-on-surface-variant font-body-sm text-[12px]">Staff child concessions, merit scholarships, orphan grants</span>
</div>
</td>
{/*  View  */}
<td className="px-space-sm py-3 text-center"><input className="w-4 h-4 rounded bg-surface-container opacity-40 cursor-not-allowed" disabled type="checkbox"/></td>
<td className="px-space-sm py-3 text-center"><input className="w-4 h-4 rounded bg-surface-container opacity-40 cursor-not-allowed" disabled type="checkbox"/></td>
<td className="px-space-sm py-3 text-center"><input className="w-4 h-4 rounded bg-surface-container opacity-40 cursor-not-allowed" disabled type="checkbox"/></td>
<td className="px-space-sm py-3 text-center"><input className="w-4 h-4 rounded bg-surface-container opacity-40 cursor-not-allowed" disabled type="checkbox"/></td>
<td className="px-space-sm py-3 text-center"><input className="w-4 h-4 rounded bg-surface-container opacity-40 cursor-not-allowed" disabled type="checkbox"/></td>
<td className="px-space-sm py-3 text-center"><input className="w-4 h-4 rounded bg-surface-container opacity-40 cursor-not-allowed" disabled type="checkbox"/></td>
<td className="px-space-md py-3">
<span className="px-2.5 py-1 rounded-full bg-surface-container-high text-outline font-label-sm text-[11px] font-semibold flex items-center gap-1 w-max">
<span className="material-symbols-outlined text-[13px]">gavel</span>
<span>Bursary Only</span>
</span>
</td>
</tr>
{/*  CATEGORY 3: HUMAN RESOURCES  */}
<tr className="bg-surface-container-high/60 font-label-sm text-label-sm text-primary uppercase tracking-wider font-bold">
<td className="px-space-md py-2" colSpan={8}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">badge</span>
<span>Human Resources &amp; Staff Operations (3 Modules)</span>
</div>
<span className="text-on-surface-variant font-normal normal-case text-[12px]">Staff confidentiality policies in effect</span>
</div>
</td>
</tr>
{/*  Row 9: Staff Directory  */}
<tr className="hover:bg-surface-container-low transition-colors module-row" data-name="Staff Directory">
<td className="px-space-md py-3 font-label-md text-label-md font-semibold">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="text-primary font-bold">Staff Directory</span>
</div>
<span className="text-on-surface-variant font-body-sm text-[12px]">Internal telephone extension, room assignment, email</span>
</div>
</td>
{/*  View  */}
<td className="px-space-sm py-3 text-center">
<input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer accent-primary" onChange={() => {}} type="checkbox"/>
</td>
<td className="px-space-sm py-3 text-center"><input className="w-4 h-4 rounded bg-surface-container opacity-40 cursor-not-allowed" disabled type="checkbox"/></td>
<td className="px-space-sm py-3 text-center"><input className="w-4 h-4 rounded bg-surface-container opacity-40 cursor-not-allowed" disabled type="checkbox"/></td>
<td className="px-space-sm py-3 text-center"><input className="w-4 h-4 rounded bg-surface-container opacity-40 cursor-not-allowed" disabled type="checkbox"/></td>
<td className="px-space-sm py-3 text-center"><input className="w-4 h-4 rounded bg-surface-container opacity-40 cursor-not-allowed" disabled type="checkbox"/></td>
<td className="px-space-sm py-3 text-center"><input className="w-4 h-4 rounded bg-surface-container opacity-40 cursor-not-allowed" disabled type="checkbox"/></td>
<td className="px-space-md py-3">
<span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-[11px] font-semibold flex items-center gap-1 w-max">
<span className="material-symbols-outlined text-[13px]">contact_phone</span>
<span>All Staff (Public)</span>
</span>
</td>
</tr>
{/*  Row 10: Staff Payroll & Salaries  */}
<tr className="hover:bg-surface-container-low transition-colors module-row bg-error-container/20" data-name="Staff Payroll &amp; Salaries">
<td className="px-space-md py-3 font-label-md text-label-md font-semibold">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="text-error font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">lock</span>
<span>Staff Payroll &amp; Emoluments</span>
</span>
<span className="px-1.5 py-0.5 rounded bg-error text-on-error font-label-sm text-[10px] font-bold">Classified</span>
</div>
<span className="text-on-surface-variant font-body-sm text-[12px]">Salary breakdowns, pension remittances, PAYE Kaduna IRS tax</span>
</div>
</td>
{/*  All Locked  */}
<td className="px-space-sm py-3 text-center"><span className="material-symbols-outlined text-[18px] text-error">lock</span></td>
<td className="px-space-sm py-3 text-center"><span className="material-symbols-outlined text-[18px] text-error">lock</span></td>
<td className="px-space-sm py-3 text-center"><span className="material-symbols-outlined text-[18px] text-error">lock</span></td>
<td className="px-space-sm py-3 text-center"><span className="material-symbols-outlined text-[18px] text-error">lock</span></td>
<td className="px-space-sm py-3 text-center"><span className="material-symbols-outlined text-[18px] text-error">lock</span></td>
<td className="px-space-sm py-3 text-center"><span className="material-symbols-outlined text-[18px] text-error">lock</span></td>
<td className="px-space-md py-3">
<span className="px-2.5 py-1 rounded-full bg-error-container text-on-error-container font-label-sm text-[11px] font-semibold flex items-center gap-1 w-max">
<span className="material-symbols-outlined text-[13px]">security</span>
<span>Restricted</span>
</span>
</td>
</tr>
{/*  Row 11: Personal Leave Application  */}
<tr className="hover:bg-surface-container-low transition-colors module-row" data-name="Personal Leave Application">
<td className="px-space-md py-3 font-label-md text-label-md font-semibold">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="text-primary font-bold">Leave &amp; Absence Requests</span>
</div>
<span className="text-on-surface-variant font-body-sm text-[12px]">Casual leave, medical certification, maternity/paternity notice</span>
</div>
</td>
{/*  View  */}
<td className="px-space-sm py-3 text-center">
<input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer accent-primary" onChange={() => {}} type="checkbox"/>
</td>
{/*  Create  */}
<td className="px-space-sm py-3 text-center">
<input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer accent-primary" onChange={() => {}} type="checkbox"/>
</td>
{/*  Edit  */}
<td className="px-space-sm py-3 text-center">
<div className="flex flex-col items-center">
<input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer accent-primary" onChange={() => {}} type="checkbox"/>
<span className="text-[10px] text-outline font-label-sm mt-0.5">Own Drafts</span>
</div>
</td>
<td className="px-space-sm py-3 text-center"><input className="w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer accent-primary" onChange={() => {}} type="checkbox"/></td>
<td className="px-space-sm py-3 text-center"><input className="w-4 h-4 rounded bg-surface-container opacity-40 cursor-not-allowed" disabled type="checkbox"/></td>
<td className="px-space-sm py-3 text-center"><input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer accent-primary" onChange={() => {}} type="checkbox"/></td>
<td className="px-space-md py-3">
<span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-[11px] font-semibold flex items-center gap-1 w-max">
<span className="material-symbols-outlined text-[13px]">person</span>
<span>Self Record Only</span>
</span>
</td>
</tr>
{/*  CATEGORY 4: STUDENT WELFARE & HEALTH  */}
<tr className="bg-surface-container-high/60 font-label-sm text-label-sm text-primary uppercase tracking-wider font-bold">
<td className="px-space-md py-2" colSpan={8}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">health_and_safety</span>
<span>Student Welfare, Health &amp; Discipline (2 Modules)</span>
</div>
<span className="text-on-surface-variant font-normal normal-case text-[12px]">Kaduna Child Protection &amp; Care Mandate</span>
</div>
</td>
</tr>
{/*  Row 12: Clinic & Health Records  */}
<tr className="hover:bg-surface-container-low transition-colors module-row" data-name="Clinic &amp; Health Records">
<td className="px-space-md py-3 font-label-md text-label-md font-semibold">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="text-primary font-bold">Clinic &amp; Health Records</span>
</div>
<span className="text-on-surface-variant font-body-sm text-[12px]">Allergies, chronic conditions, emergency contact protocol</span>
</div>
</td>
{/*  View  */}
<td className="px-space-sm py-3 text-center">
<div className="flex flex-col items-center">
<input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer accent-primary" onChange={() => {}} type="checkbox"/>
<span className="text-[10px] text-tertiary font-label-sm mt-0.5">Emergency</span>
</div>
</td>
<td className="px-space-sm py-3 text-center"><input className="w-4 h-4 rounded bg-surface-container opacity-40 cursor-not-allowed" disabled type="checkbox"/></td>
<td className="px-space-sm py-3 text-center"><input className="w-4 h-4 rounded bg-surface-container opacity-40 cursor-not-allowed" disabled type="checkbox"/></td>
<td className="px-space-sm py-3 text-center"><input className="w-4 h-4 rounded bg-surface-container opacity-40 cursor-not-allowed" disabled type="checkbox"/></td>
<td className="px-space-sm py-3 text-center"><input className="w-4 h-4 rounded bg-surface-container opacity-40 cursor-not-allowed" disabled type="checkbox"/></td>
<td className="px-space-sm py-3 text-center"><input className="w-4 h-4 rounded bg-surface-container opacity-40 cursor-not-allowed" disabled type="checkbox"/></td>
<td className="px-space-md py-3">
<span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[11px] font-semibold flex items-center gap-1 w-max">
<span className="material-symbols-outlined text-[13px]">medical_services</span>
<span>Assigned Students</span>
</span>
</td>
</tr>
{/*  Row 13: Discipline Records  */}
<tr className="hover:bg-surface-container-low transition-colors module-row" data-name="Discipline Records">
<td className="px-space-md py-3 font-label-md text-label-md font-semibold">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="text-primary font-bold">Disciplinary Incidents</span>
</div>
<span className="text-on-surface-variant font-body-sm text-[12px]">Infraction logging, detention notices, counseling notes</span>
</div>
</td>
{/*  View  */}
<td className="px-space-sm py-3 text-center">
<input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer accent-primary" onChange={() => {}} type="checkbox"/>
</td>
{/*  Create  */}
<td className="px-space-sm py-3 text-center">
<div className="flex flex-col items-center">
<input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer accent-primary" onChange={() => {}} type="checkbox"/>
<span className="text-[10px] text-secondary font-label-sm mt-0.5">Incident Log</span>
</div>
</td>
{/*  Edit  */}
<td className="px-space-sm py-3 text-center">
<input className="w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer accent-primary" onChange={() => {}} type="checkbox"/>
</td>
{/*  Delete  */}
<td className="px-space-sm py-3 text-center">
<input className="w-4 h-4 rounded bg-surface-container opacity-40 cursor-not-allowed" disabled type="checkbox"/>
</td>
{/*  Approve  */}
<td className="px-space-sm py-3 text-center">
<div className="flex flex-col items-center">
<input className="w-4 h-4 rounded bg-surface-container opacity-40 cursor-not-allowed" disabled type="checkbox"/>
<span className="text-[10px] text-outline font-label-sm mt-0.5">VP Welfare</span>
</div>
</td>
{/*  Export  */}
<td className="px-space-sm py-3 text-center">
<input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer accent-primary" onChange={() => {}} type="checkbox"/>
</td>
{/*  Scope  */}
<td className="px-space-md py-3">
<span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[11px] font-semibold flex items-center gap-1 w-max">
<span className="material-symbols-outlined text-[13px]">gavel</span>
<span>Assigned Class</span>
</span>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Table Footer with Audit Note  */}
<div className="p-space-md bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-surface-variant font-label-sm text-label-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-secondary">verified</span>
<span>Showing 13 granular operational nodes for <strong className="text-on-surface">Class Teacher</strong></span>
</div>
<div className="flex items-center gap-space-sm">
<span className="text-outline">Matrix schema v4.2.1 • Hash: 9f8b..21c</span>
</div>
</div>
</div>
{/*  Advanced Security & Field-Level Masking Bento Panel  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg mb-space-lg">
{/*  Card 1: Sensitive Field Masking  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col justify-between">
<div className="space-y-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[20px] text-primary">visibility_off</span>
<h3 className="font-headline-sm text-headline-sm text-primary">Field-Level Data Masking</h3>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-[10px] font-semibold">Active</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Fields automatically redacted or pseudonymized for this role in UI and API payloads:</p>
<div className="space-y-2 pt-2">
<div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-outline">payments</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Parent Financial History</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-[11px] font-bold">100% Masked</span>
</div>
<div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-outline">clinical_notes</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Student Medical History</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[11px] font-bold">Emergency Only</span>
</div>
<div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-outline">star_half</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Teacher Appraisal Scores</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-[11px] font-bold">Confidential</span>
</div>
</div>
</div>
<button className="mt-space-md text-primary hover:text-primary-container font-label-sm text-label-sm font-semibold flex items-center gap-1 transition-colors" type="button">
<span>Configure 14 other dynamic masking rules</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
{/*  Card 2: Dual Authorization & Sign-off Workflows  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col justify-between">
<div className="space-y-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[20px] text-secondary">approval</span>
<h3 className="font-headline-sm text-headline-sm text-primary">Dual-Authorization Protocols</h3>
</div>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[10px] font-bold">Enforced</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Critical state transitions requiring two independent administrative keys:</p>
<div className="space-y-3 pt-2">
{/*  Toggle 1  */}
<div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Term Result Publishing</span>
<span className="font-body-sm text-[11px] text-on-surface-variant">Class Teacher submits -&gt; Principal commits</span>
</div>
<div className="relative inline-block w-10 align-middle select-none">
<input defaultChecked className="checked:bg-primary w-10 h-6 rounded-full bg-surface-container appearance-none transition-colors duration-200 cursor-pointer relative after:content-[''] after:w-4 after:h-4 after:bg-surface-container-lowest after:rounded-full after:absolute after:top-1 after:left-1 checked:after:left-5 after:transition-all" type="checkbox"/>
</div>
</div>
{/*  Toggle 2  */}
<div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Fee Waivers &amp; Refunds</span>
<span className="font-body-sm text-[11px] text-on-surface-variant">Bursar flags -&gt; Proprietor approves</span>
</div>
<div className="relative inline-block w-10 align-middle select-none">
<input defaultChecked className="checked:bg-primary w-10 h-6 rounded-full bg-surface-container appearance-none transition-colors duration-200 cursor-pointer relative after:content-[''] after:w-4 after:h-4 after:bg-surface-container-lowest after:rounded-full after:absolute after:top-1 after:left-1 checked:after:left-5 after:transition-all" type="checkbox"/>
</div>
</div>
{/*  Toggle 3  */}
<div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Permanent Record Expungement</span>
<span className="font-body-sm text-[11px] text-on-surface-variant">Requires MoE Kaduna Notification</span>
</div>
<div className="relative inline-block w-10 align-middle select-none">
<input defaultChecked className="checked:bg-primary w-10 h-6 rounded-full bg-surface-container appearance-none transition-colors duration-200 cursor-pointer relative after:content-[''] after:w-4 after:h-4 after:bg-surface-container-lowest after:rounded-full after:absolute after:top-1 after:left-1 checked:after:left-5 after:transition-all" type="checkbox"/>
</div>
</div>
</div>
</div>
<div className="mt-space-md flex items-center gap-2 text-on-surface-variant font-label-sm text-[11px]">
<span className="material-symbols-outlined text-[16px] text-primary">verified_user</span>
<span>Multi-signature tokens verified via Kaduna SMS Auth Gateway</span>
</div>
</div>
{/*  Card 3: Security Audit Trigger & Immutable Logger  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col justify-between">
<div className="space-y-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[20px] text-error">history_edu</span>
<h3 className="font-headline-sm text-headline-sm text-primary">Immutable Security Audit Trail</h3>
</div>
<span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-[10px] font-bold">Real-Time</span>
</div>
<div className="p-3 bg-error-container/20 rounded-xl space-y-2">
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-[20px] text-error shrink-0">emergency</span>
<p className="font-body-sm text-body-sm text-on-surface">
              Any manual override or permission elevation is recorded in the immutable <strong className="text-primary">Kaduna SMS Audit Log</strong> with timestamp, hardware finger-print, and authorized IP address.
            </p>
</div>
</div>
{/*  Recent Audit Log Stream  */}
<div className="space-y-2 pt-1 font-body-sm text-[11px]">
<div className="flex items-center justify-between text-on-surface-variant p-2 rounded bg-surface-container-low">
<div className="flex items-center gap-2 truncate">
<span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
<span className="truncate">Role 'Class Teacher' permissions updated</span>
</div>
<span className="text-outline shrink-0">12 Oct 14:22</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant p-2 rounded bg-surface-container-low">
<div className="flex items-center gap-2 truncate">
<span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
<span className="truncate">Scope narrowed to 'Assigned Arms'</span>
</div>
<span className="text-outline shrink-0">08 Oct 09:15</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant p-2 rounded bg-surface-container-low">
<div className="flex items-center gap-2 truncate">
<span className="w-1.5 h-1.5 rounded-full bg-error shrink-0"></span>
<span className="truncate">Payroll direct query blocked for 42 users</span>
</div>
<span className="text-outline shrink-0">01 Oct 00:00</span>
</div>
</div>
</div>
<a className="mt-space-md text-primary hover:text-primary-container font-label-sm text-label-sm font-semibold flex items-center gap-1 transition-colors" href="#">
<span>Inspect full cryptographic audit log</span>
<span className="material-symbols-outlined text-[16px]">open_in_new</span>
</a>
</div>
</div>
{/*  Toast Notification Simulator (Invisible by default)  */}
<div className="fixed bottom-6 right-6 z-50 transform translate-y-24 opacity-0 transition-all duration-300 pointer-events-none" id="save-toast">
<div className="bg-primary text-on-primary px-space-lg py-space-md rounded-xl shadow-xl flex items-center gap-space-md">
<div className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">check</span>
</div>
<div>
<p className="font-label-lg text-label-lg font-bold">Permissions Successfully Saved</p>
<p className="font-body-sm text-[12px] opacity-90">RBAC policies for 'Class Teacher' propagated across all 42 active teacher sessions.</p>
</div>
</div>
</div>
{/*  Micro-interactions Script  */}

</div></main>
  );
}
    