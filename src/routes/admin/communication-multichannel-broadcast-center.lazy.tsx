
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/admin/communication-multichannel-broadcast-center')({
  component: CommunicationMultichannelBroadcastCenter,
});

function CommunicationMultichannelBroadcastCenter() {
  return (
    <main className="w-full pt-16 px-space-lg py-space-lg flex-1 bg-background"><div className="flex flex-col w-full">
{/*  Top Context Header Area  */}
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-md mb-space-lg">
<div className="space-y-space-xs">
<div className="flex items-center gap-space-sm flex-wrap">
<span className="font-headline-lg text-headline-lg text-primary tracking-tight">Communication &amp; Multi-Channel Broadcast Center</span>
<span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
          Kaduna SMS &amp; WhatsApp Gateway Active
        </span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-3xl">
        Centralized communication management for school-wide notices, emergency broadcasts, class announcements, parent-teacher direct messaging, and telco SMS delivery analytics.
      </p>
</div>
{/*  Quick Action / Wallet Pill Cluster  */}
<div className="flex items-center gap-space-sm flex-wrap shrink-0">
<div className="flex items-center gap-space-xs px-space-md py-2 rounded-xl bg-surface-container shadow-sm">
<span className="material-symbols-outlined text-[20px] text-tertiary-container">account_balance_wallet</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">SMS Airtime Wallet</span>
<span className="font-label-lg text-label-lg text-on-surface">₦184,500 <span className="font-body-sm text-body-sm text-outline font-normal">(36,900 Units)</span></span>
</div>
<button className="ml-2 px-2 py-1 rounded-lg bg-surface-container-lowest text-primary hover:bg-surface-container-high transition-colors font-label-sm text-label-sm shadow-sm" type="button">
          Top Up
        </button>
</div>
<button className="flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-colors shadow-sm font-label-md text-label-md" type="button">
<span className="material-symbols-outlined text-[18px] text-outline">content_copy</span>
<span>Templates Library</span>
</button>
<button className="flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-colors shadow-sm font-label-md text-label-md" type="button">
<span className="material-symbols-outlined text-[18px] text-outline">history</span>
<span>Delivery Audit Logs</span>
</button>
<a className="flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-primary text-on-primary hover:bg-primary-container transition-all shadow-sm font-label-md text-label-md" href="#composer">
<span className="material-symbols-outlined text-[18px]">campaign</span>
<span>Compose New Broadcast</span>
</a>
</div>
</div>
{/*  Metric Summary Cards Grid  */}
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md mb-space-xl">
{/*  Metric 1  */}
<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="space-y-1">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Messages Sent This Term</span>
<div className="font-metric-lg text-metric-lg text-on-surface">48,250</div>
</div>
<div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[22px]">send</span>
</div>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span className="text-secondary font-semibold flex items-center gap-0.5">
<span className="material-symbols-outlined text-[14px]">arrow_upward</span> +12.4% vs Term 3
        </span>
<span className="font-body-sm text-body-sm text-outline">99.1% delivered</span>
</div>
</div>
{/*  Metric 2  */}
<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="space-y-1">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Parent Mobile Reach</span>
<div className="font-metric-lg text-metric-lg text-on-surface">1,420 <span className="font-body-md text-body-md text-outline font-normal">/ 1,440</span></div>
</div>
<div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container shrink-0">
<span className="material-symbols-outlined text-[22px]">contacts</span>
</div>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between font-label-sm text-label-sm">
<div className="w-2/3 bg-surface-container-high rounded-full h-1.5 overflow-hidden">
<div className="bg-secondary h-1.5 rounded-full w-[98.6%]"></div>
</div>
<span className="text-secondary font-semibold">98.6% active</span>
</div>
</div>
{/*  Metric 3  */}
<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="space-y-1">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Pending Outbox Queue</span>
<div className="font-metric-lg text-metric-lg text-on-surface">0 <span className="font-headline-sm text-headline-sm font-normal text-secondary">Queued</span></div>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[22px]">check_circle</span>
</div>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span className="flex items-center gap-1 text-on-secondary-container">
<span className="w-2 h-2 rounded-full bg-secondary"></span> Auto-retry ready
        </span>
<span className="font-body-sm text-body-sm text-outline">0 throttled</span>
</div>
</div>
{/*  Metric 4  */}
<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="space-y-1">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">In-App Announcements</span>
<div className="font-metric-lg text-metric-lg text-on-surface">18 <span className="font-headline-sm text-headline-sm font-normal text-on-surface-variant">Live</span></div>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[22px]">notifications_active</span>
</div>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span className="text-primary font-semibold">84.5% read rate</span>
<span className="font-body-sm text-body-sm text-outline">Parent &amp; Student</span>
</div>
</div>
</div>
{/*  Main Content Asymmetric Split  */}
<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg">
{/*  Left Column (8 cols): Interactive Composer & Dispatch Ledger  */}
<div className="xl:col-span-8 space-y-space-lg">
{/*  Composer Card  */}
<section className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm" id="composer">
<div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-md mb-space-md bg-surface-container-lowest">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-lg bg-primary-container text-on-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">edit_note</span>
</div>
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Create Multichannel Announcement / Broadcast</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Instant push to GSM mobile networks, WhatsApp API, and Student/Parent Portals</p>
</div>
</div>
<span className="mt-2 sm:mt-0 px-2.5 py-1 rounded-md bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm self-start sm:self-auto">
            Sender ID: <strong className="text-primary">NOORUL-ILM</strong>
</span>
</div>
<form className="space-y-space-md" onSubmit={(e) => e.preventDefault()}>
{/*  Step 1: Channels Selector  */}
<div>
<label className="block font-label-md text-label-md text-on-surface mb-2">Delivery Channels (Multi-select)</label>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-xs">
<label className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors">
<input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary accent-primary" type="checkbox"/>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface truncate">SMS Blast</span>
<span className="font-body-sm text-[11px] text-on-surface-variant truncate">MTN/Airtel/Glo/9mobile</span>
</div>
</label>
<label className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors">
<input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary accent-primary" type="checkbox"/>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface truncate">WhatsApp Direct</span>
<span className="font-body-sm text-[11px] text-on-surface-variant truncate">Meta Verified API</span>
</div>
</label>
<label className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors">
<input defaultChecked className="w-4 h-4 rounded text-primary focus:ring-primary accent-primary" type="checkbox"/>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface truncate">Mobile App Push</span>
<span className="font-body-sm text-[11px] text-on-surface-variant truncate">Parent &amp; Student App</span>
</div>
</label>
<label className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors">
<input className="w-4 h-4 rounded text-primary focus:ring-primary accent-primary" type="checkbox"/>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface truncate">Email Digest</span>
<span className="font-body-sm text-[11px] text-on-surface-variant truncate">Official Domain Mail</span>
</div>
</label>
</div>
</div>
{/*  Step 2: Target Audience  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div>
<label className="block font-label-md text-label-md text-on-surface mb-1.5" htmlFor="targetGroup">Target Audience Segment</label>
<div className="relative">
<select className="w-full h-10 pl-3 pr-8 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md appearance-none focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20" id="targetGroup">
<option selected>All Registered Parents &amp; Guardians (1,440 contacts)</option>
<option>Specific Class Arm: SSS 2 Science A (38 contacts)</option>
<option>Specific Class Arm: JSS 1 Emerald (42 contacts)</option>
<option>Hostel Boarders Guardians Only (315 contacts)</option>
<option>Debtors &amp; Term 1 Tuition Arrears List (124 contacts)</option>
<option>Academic &amp; Non-Teaching Staff (86 contacts)</option>
</select>
<span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[18px]">expand_more</span>
</div>
</div>
<div>
<label className="block font-label-md text-label-md text-on-surface mb-1.5" htmlFor="templatePreset">Quick Load Pre-Approved Template</label>
<div className="relative">
<select className="w-full h-10 pl-3 pr-8 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md appearance-none focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20" id="templatePreset" onChange={() => {}}>
<option value="">-- Choose a standard notification --</option>
<option value="harmattan">Harmattan Early Morning Schedule Notice</option>
<option value="exam">1st Term Examination Clearance &amp; Timetable</option>
<option value="fee">Outstanding Tuition Reminder (Kaduna MoE)</option>
<option value="absence">Emergency Unexcused Attendance Notice</option>
</select>
<span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[18px]">library_books</span>
</div>
</div>
</div>
{/*  Variable Tags Tray  */}
<div>
<div className="flex items-center justify-between mb-1.5">
<span className="font-label-sm text-label-sm text-on-surface-variant">Dynamic Data Tags (Click to Insert)</span>
<span className="font-body-sm text-[11px] text-outline">Auto-populated per student profile</span>
</div>
<div className="flex flex-wrap gap-1.5">
<button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-[12px] transition-colors" onClick={() => {}} type="button">
                + {`{Student_Name}`}
              </button>
<button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-[12px] transition-colors" onClick={() => {}} type="button">
                + {`{Class_Arm}`}
              </button>
<button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-[12px] transition-colors" onClick={() => {}} type="button">
                + {`{Outstanding_Balance}`}
              </button>
<button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-[12px] transition-colors" onClick={() => {}} type="button">
                + {`{Parent_Salutation}`}
              </button>
<button className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-[12px] transition-colors" onClick={() => {}} type="button">
                + {`{Portal_Link}`}
              </button>
</div>
</div>
{/*  Message Body with Live Character Counter  */}
<div>
<div className="flex items-center justify-between mb-1.5">
<label className="font-label-md text-label-md text-on-surface" htmlFor="broadcastMessage">Broadcast Content</label>
<div className="flex items-center gap-space-sm font-label-sm text-label-sm">
<span className="text-on-surface-variant" id="charCount">142 characters</span>
<span className="text-outline">•</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-primary font-semibold" id="smsCount">1 SMS Unit / Contact</span>
</div>
</div>
<textarea className="w-full p-3 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 placeholder:text-outline" id="broadcastMessage" onInput={() => {}} placeholder="Type school notice or advisory here..." rows={4}>Dear {`{Parent_Salutation}`}, please note that Noorul Ilm Int'l 1st Term Mid-Term Assessment for {`{Student_Name}`} ({`{Class_Arm}`}) commences Monday 20 Oct 2026. Portal login: {`{Portal_Link}`}</textarea>
</div>
{/*  Multilingual Hausa / English Language Toggle & Cost preview  */}
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-[20px] text-secondary mt-0.5">translate</span>
<div>
<span className="font-label-sm text-label-sm text-on-surface font-semibold block">Kaduna Bilingual Delivery Option</span>
<span className="font-body-sm text-[12px] text-on-surface-variant">Include automatic Hausa translated copy in WhatsApp / SMS dispatch for registered Hausa-speaking households.</span>
</div>
</div>
<label className="flex items-center gap-2 cursor-pointer self-start md:self-center shrink-0">
<input className="w-4 h-4 rounded text-primary focus:ring-primary accent-primary" type="checkbox"/>
<span className="font-label-sm text-label-sm text-on-surface">Enable Hausa SMS Sync</span>
</label>
</div>
{/*  Action Buttons Bar  */}
<div className="pt-space-sm flex flex-col sm:flex-row items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px] text-secondary">verified_user</span>
<span>Estimated Cost: <strong className="text-on-surface">1,440 Units (₦7,200)</strong></span>
</div>
<div className="flex items-center gap-space-sm w-full sm:w-auto justify-end">
<button className="px-space-md py-2 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md" type="button">
                Save Draft
              </button>
<button className="px-space-md py-2 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[18px]">schedule</span>
<span>Schedule Later</span>
</button>
<button className="px-space-md py-2 rounded-lg bg-primary text-on-primary hover:bg-primary-container transition-all shadow-sm font-label-md text-label-md flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[18px]">rocket_launch</span>
<span>Send Instant Broadcast</span>
</button>
</div>
</div>
</form>
</section>
{/*  Ledger / Broadcast History Table Card  */}
<section className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm">
<div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-md mb-space-md bg-surface-container-lowest">
<div className="space-y-0.5">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Recent Broadcast History &amp; Dispatch Ledger</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Live audit of dispatched bulk messages, DND exemptions, and carrier handoffs</p>
</div>
<div className="mt-2 sm:mt-0 flex items-center gap-space-xs">
<button className="px-2.5 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">filter_list</span>
<span>Filter Channels</span>
</button>
<button className="px-2.5 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">file_download</span>
<span>Export CSV</span>
</button>
</div>
</div>
{/*  Table Container  */}
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-3 px-space-sm rounded-l-lg">Dispatch Timestamp</th>
<th className="py-3 px-space-sm">Broadcast Subject / Preview</th>
<th className="py-3 px-space-sm">Channels</th>
<th className="py-3 px-space-sm text-right">Recipients</th>
<th className="py-3 px-space-sm text-center">Delivery Rate</th>
<th className="py-3 px-space-sm">Dispatched By</th>
<th className="py-3 px-space-sm rounded-r-lg text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-low font-body-sm text-body-sm">
{/*  Row 1  */}
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-3.5 px-space-sm whitespace-nowrap text-on-surface font-medium">
                  16 Oct 2026 <span className="text-outline text-[11px] block">07:45 AM</span>
</td>
<td className="py-3.5 px-space-sm max-w-xs">
<span className="font-label-md text-label-md text-on-surface block truncate">Mid-Term Assessment Exam Timetable</span>
<span className="text-outline text-[11px] truncate block">Assessment dates uploaded for all Junior &amp; Senior classes...</span>
</td>
<td className="py-3.5 px-space-sm whitespace-nowrap">
<div className="flex items-center gap-1">
<span className="px-1.5 py-0.5 rounded bg-surface-container font-label-sm text-[10px] text-primary">SMS</span>
<span className="px-1.5 py-0.5 rounded bg-secondary-container font-label-sm text-[10px] text-on-secondary-container">WA</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-high font-label-sm text-[10px] text-on-surface">APP</span>
</div>
</td>
<td className="py-3.5 px-space-sm text-right font-medium text-on-surface">1,440</td>
<td className="py-3.5 px-space-sm text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                    99.4%
                  </span>
</td>
<td className="py-3.5 px-space-sm whitespace-nowrap text-on-surface-variant">
                  Dr. Aminu Bello <span className="text-outline text-[10px] block">Super Admin</span>
</td>
<td className="py-3.5 px-space-sm text-right whitespace-nowrap">
<button className="p-1 rounded text-primary hover:bg-surface-container transition-colors" title="View Detail Logs">
<span className="material-symbols-outlined text-[18px]">receipt_long</span>
</button>
<button className="p-1 rounded text-outline hover:text-on-surface hover:bg-surface-container transition-colors" title="Resend to 8 Failed">
<span className="material-symbols-outlined text-[18px]">replay</span>
</button>
</td>
</tr>
{/*  Row 2  */}
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-3.5 px-space-sm whitespace-nowrap text-on-surface font-medium">
                  14 Oct 2026 <span className="text-outline text-[11px] block">02:15 PM</span>
</td>
<td className="py-3.5 px-space-sm max-w-xs">
<span className="font-label-md text-label-md text-on-surface block truncate">Term 1 Tuition 2nd Tranche Reminder</span>
<span className="text-outline text-[11px] truncate block">Friendly reminder regarding second installment payment for...</span>
</td>
<td className="py-3.5 px-space-sm whitespace-nowrap">
<div className="flex items-center gap-1">
<span className="px-1.5 py-0.5 rounded bg-surface-container font-label-sm text-[10px] text-primary">SMS</span>
<span className="px-1.5 py-0.5 rounded bg-secondary-container font-label-sm text-[10px] text-on-secondary-container">WA</span>
</div>
</td>
<td className="py-3.5 px-space-sm text-right font-medium text-on-surface">312</td>
<td className="py-3.5 px-space-sm text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                    98.8%
                  </span>
</td>
<td className="py-3.5 px-space-sm whitespace-nowrap text-on-surface-variant">
                  Malam Danladi <span className="text-outline text-[10px] block">Head Bursar</span>
</td>
<td className="py-3.5 px-space-sm text-right whitespace-nowrap">
<button className="p-1 rounded text-primary hover:bg-surface-container transition-colors" title="View Detail Logs">
<span className="material-symbols-outlined text-[18px]">receipt_long</span>
</button>
<button className="p-1 rounded text-outline hover:text-on-surface hover:bg-surface-container transition-colors" title="Resend">
<span className="material-symbols-outlined text-[18px]">replay</span>
</button>
</td>
</tr>
{/*  Row 3  */}
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-3.5 px-space-sm whitespace-nowrap text-on-surface font-medium">
                  11 Oct 2026 <span className="text-outline text-[11px] block">06:10 AM</span>
</td>
<td className="py-3.5 px-space-sm max-w-xs">
<span className="font-label-md text-label-md text-on-surface block truncate">Harmattan Weather Warning &amp; Bus Route Reschedule</span>
<span className="text-outline text-[11px] truncate block">Due to dense haze along Zaria Expressway, morning bus routes...</span>
</td>
<td className="py-3.5 px-space-sm whitespace-nowrap">
<div className="flex items-center gap-1">
<span className="px-1.5 py-0.5 rounded bg-surface-container font-label-sm text-[10px] text-primary">SMS</span>
<span className="px-1.5 py-0.5 rounded bg-secondary-container font-label-sm text-[10px] text-on-secondary-container">WA</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-high font-label-sm text-[10px] text-on-surface">APP</span>
</div>
</td>
<td className="py-3.5 px-space-sm text-right font-medium text-on-surface">1,440</td>
<td className="py-3.5 px-space-sm text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                    100.0%
                  </span>
</td>
<td className="py-3.5 px-space-sm whitespace-nowrap text-on-surface-variant">
                  Dr. Aminu Bello <span className="text-outline text-[10px] block">Principal</span>
</td>
<td className="py-3.5 px-space-sm text-right whitespace-nowrap">
<button className="p-1 rounded text-primary hover:bg-surface-container transition-colors" title="View Detail Logs">
<span className="material-symbols-outlined text-[18px]">receipt_long</span>
</button>
<button className="p-1 rounded text-outline hover:text-on-surface hover:bg-surface-container transition-colors" title="Resend">
<span className="material-symbols-outlined text-[18px]">replay</span>
</button>
</td>
</tr>
{/*  Row 4  */}
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-3.5 px-space-sm whitespace-nowrap text-on-surface font-medium">
                  08 Oct 2026 <span className="text-outline text-[11px] block">01:40 PM</span>
</td>
<td className="py-3.5 px-space-sm max-w-xs">
<span className="font-label-md text-label-md text-on-surface block truncate">SSS 3 WAEC Science Practicals Lab Fees</span>
<span className="text-outline text-[11px] truncate block">Senior secondary parents notice for laboratory consumables...</span>
</td>
<td className="py-3.5 px-space-sm whitespace-nowrap">
<div className="flex items-center gap-1">
<span className="px-1.5 py-0.5 rounded bg-secondary-container font-label-sm text-[10px] text-on-secondary-container">WA</span>
<span className="px-1.5 py-0.5 rounded bg-surface-container-high font-label-sm text-[10px] text-on-surface">APP</span>
</div>
</td>
<td className="py-3.5 px-space-sm text-right font-medium text-on-surface">118</td>
<td className="py-3.5 px-space-sm text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                    99.1%
                  </span>
</td>
<td className="py-3.5 px-space-sm whitespace-nowrap text-on-surface-variant">
                  Mrs. Zainab Aliyu <span className="text-outline text-[10px] block">Exam Officer</span>
</td>
<td className="py-3.5 px-space-sm text-right whitespace-nowrap">
<button className="p-1 rounded text-primary hover:bg-surface-container transition-colors" title="View Detail Logs">
<span className="material-symbols-outlined text-[18px]">receipt_long</span>
</button>
<button className="p-1 rounded text-outline hover:text-on-surface hover:bg-surface-container transition-colors" title="Resend">
<span className="material-symbols-outlined text-[18px]">replay</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</section>
</div>
{/*  Right Column (4 cols): Telco Gateway Health, Templates, Direct 2-Way Feed  */}
<div className="xl:col-span-4 space-y-space-lg">
{/*  Telco Gateway Health & Network Latency Card  */}
<section className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm">
<div className="flex items-center justify-between pb-space-sm mb-space-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[20px] text-secondary">cell_tower</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Gateway Health &amp; Latency</h3>
</div>
<span className="font-label-sm text-label-sm text-secondary font-bold">99.8% Nominal</span>
</div>
<div className="space-y-space-sm">
{/*  MTN Nigeria  */}
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-7 h-7 rounded-md bg-amber-400/20 text-tertiary font-bold font-label-sm text-[11px] flex items-center justify-center shrink-0">
                MTN
              </div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">MTN Nigeria GSM Core</span>
<span className="font-body-sm text-[11px] text-on-surface-variant">Avg latency: 1.2s • Kaduna Hub</span>
</div>
</div>
<div className="flex items-center gap-1.5 shrink-0">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-sm text-label-sm text-on-secondary-container">Connected</span>
</div>
</div>
{/*  Airtel Nigeria  */}
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-7 h-7 rounded-md bg-red-400/20 text-error font-bold font-label-sm text-[11px] flex items-center justify-center shrink-0">
                AIR
              </div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">Airtel Kaduna Gateway</span>
<span className="font-body-sm text-[11px] text-on-surface-variant">Avg latency: 1.6s • Operational</span>
</div>
</div>
<div className="flex items-center gap-1.5 shrink-0">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-sm text-label-sm text-on-secondary-container">Connected</span>
</div>
</div>
{/*  WhatsApp Cloud API  */}
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-7 h-7 rounded-md bg-secondary-container text-on-secondary-container font-bold font-label-sm text-[11px] flex items-center justify-center shrink-0">
                WA
              </div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface truncate">WhatsApp Business API</span>
<span className="font-body-sm text-[11px] text-on-surface-variant">Tier-2 High Throughput</span>
</div>
</div>
<div className="flex items-center gap-1.5 shrink-0">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-sm text-label-sm text-on-secondary-container">Tier Active</span>
</div>
</div>
</div>
{/*  Latency Sparkline Graph Visualizer  */}
<div className="mt-space-md pt-space-sm bg-surface-container-lowest">
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-[11px] mb-1">
<span>24-Hour Dispatch Throughput</span>
<span className="text-primary font-medium">Peak: 180 msg/min</span>
</div>
<svg className="w-full h-12 text-primary" fill="none" viewBox="0 0 300 48">
<path className="fill-primary/10" d="M0,40 Q30,35 60,38 T120,20 T180,25 T240,8 T300,16 L300,48 L0,48 Z"></path>
<path d="M0,40 Q30,35 60,38 T120,20 T180,25 T240,8 T300,16" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
<circle className="fill-primary animate-ping" cx="240" cy="8" r="3"></circle>
<circle className="fill-primary" cx="240" cy="8" r="3"></circle>
</svg>
</div>
</section>
{/*  Pre-Approved Message Templates Quick-Use Cards  */}
<section className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm">
<div className="flex items-center justify-between pb-space-sm mb-space-sm">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Standard SMS Templates</h3>
<span className="font-label-sm text-label-sm text-primary cursor-pointer hover:underline">Manage All</span>
</div>
<div className="space-y-space-sm">
{/*  Template 1  */}
<div className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-all cursor-pointer" onClick={() => {}}>
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Outstanding Fee Notice</span>
<span className="font-label-sm text-[10px] text-tertiary-container bg-tertiary-fixed px-1.5 py-0.5 rounded">Bursary</span>
</div>
<p className="font-body-sm text-[12px] text-on-surface-variant line-clamp-2">
              "Dear Guardian, kindly settle the 1st Term balance of {`{Outstanding_Balance}`} for {`{Student_Name}`} before Friday..."
            </p>
</div>
{/*  Template 2  */}
<div className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-all cursor-pointer" onClick={() => {}}>
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Harmattan Weather Delay</span>
<span className="font-label-sm text-[10px] text-primary bg-primary-fixed px-1.5 py-0.5 rounded">Logistics</span>
</div>
<p className="font-body-sm text-[12px] text-on-surface-variant line-clamp-2">
              "School resumption tomorrow shifted to 8:30 AM due to dense atmospheric dust haze. School transport adjusted..."
            </p>
</div>
{/*  Template 3  */}
<div className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-all cursor-pointer" onClick={() => {}}>
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-label-sm text-on-surface font-semibold">Unexcused Absence Alert</span>
<span className="font-label-sm text-[10px] text-error bg-error-container px-1.5 py-0.5 rounded">Discipline</span>
</div>
<p className="font-body-sm text-[12px] text-on-surface-variant line-clamp-2">
              "Notice: {`{Student_Name}`} was marked unexcused absent today at 08:15 AM roll call. Please contact Form Master..."
            </p>
</div>
</div>
</section>
{/*  Direct 2-Way Parent Messages (Live Feed Drawer)  */}
<section className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm">
<div className="flex items-center justify-between pb-space-sm mb-space-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[20px] text-primary">forum</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">2-Way Parent Inquiries</h3>
</div>
<span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-[11px] font-bold">3 Unread</span>
</div>
<div className="space-y-space-md">
{/*  Inquiry 1  */}
<div className="p-space-sm rounded-lg bg-surface-container-low">
<div className="flex items-center justify-between mb-1">
<div className="flex items-center gap-2 min-w-0">
<span className="w-6 h-6 rounded-full bg-primary-fixed text-primary font-bold font-label-sm text-[11px] flex items-center justify-center shrink-0">HA</span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold truncate">Hajiya Aisha Danbatta</span>
</div>
<span className="font-body-sm text-[10px] text-outline shrink-0">12m ago</span>
</div>
<p className="font-body-sm text-[12px] text-on-surface-variant mb-2">
              "Salam Alaikum, please confirm if the school bus will pick up Ibrahim around Barnawa tomorrow morning given the road works?"
            </p>
<div className="flex items-center gap-1">
<input className="w-full px-2.5 py-1 text-[12px] bg-surface-container-lowest rounded-md text-on-surface font-body-sm focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Type quick SMS reply..." type="text"/>
<button className="p-1 rounded-md bg-primary text-on-primary hover:bg-primary-container transition-colors shrink-0" type="button">
<span className="material-symbols-outlined text-[16px]">send</span>
</button>
</div>
</div>
{/*  Inquiry 2  */}
<div className="p-space-sm rounded-lg bg-surface-container-low">
<div className="flex items-center justify-between mb-1">
<div className="flex items-center gap-2 min-w-0">
<span className="w-6 h-6 rounded-full bg-secondary-container text-on-secondary-container font-bold font-label-sm text-[11px] flex items-center justify-center shrink-0">EU</span>
<span className="font-label-sm text-label-sm text-on-surface font-semibold truncate">Engr. Usman Bello</span>
</div>
<span className="font-body-sm text-[10px] text-outline shrink-0">45m ago</span>
</div>
<p className="font-body-sm text-[12px] text-on-surface-variant mb-2">
              "Good afternoon Bursar, I just transferred ₦85,000 for Fatima's boarding fee. Kindly confirm receipt token."
            </p>
<div className="flex items-center gap-1">
<input className="w-full px-2.5 py-1 text-[12px] bg-surface-container-lowest rounded-md text-on-surface font-body-sm focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Type quick SMS reply..." type="text"/>
<button className="p-1 rounded-md bg-primary text-on-primary hover:bg-primary-container transition-colors shrink-0" type="button">
<span className="material-symbols-outlined text-[16px]">send</span>
</button>
</div>
</div>
</div>
<button className="mt-space-md w-full py-2 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors text-center" type="button">
          Open Full 2-Way Messaging Console →
        </button>
</section>
</div>
</div>
</div>
</main>
  );
}
    