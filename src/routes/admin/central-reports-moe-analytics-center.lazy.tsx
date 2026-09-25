
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/admin/central-reports-moe-analytics-center')({
  component: CentralReportsMoeAnalyticsCenter,
});

function CentralReportsMoeAnalyticsCenter() {
  return (
    <main className="w-full pt-16 px-space-lg py-space-lg flex-1 bg-background"><div className="flex flex-col w-full space-y-space-lg pb-space-xl">
{/*  Top Executive Header & Action Bar  */}
<div className="flex flex-col xl:flex-row xl:items-end justify-between gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
<div className="space-y-space-xs max-w-3xl">
<div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm uppercase tracking-wider">
<span className="material-symbols-outlined text-[16px]">account_balance</span>
<span>Kaduna State Ministry of Education Regulatory Portal • EMIS Center</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Central Reports &amp; Statutory MoE Analytics Center</h1>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
        Institutional business intelligence, Kaduna State Ministry of Education statutory broad-sheets, WAEC/NECO trend analyses, and bursary audit exports.
      </p>
</div>
<div className="flex flex-wrap items-center gap-space-xs">
<button className="flex items-center gap-1.5 px-space-md py-2 bg-surface-container-high text-on-surface hover:bg-surface-variant font-label-md text-label-md rounded-lg transition-colors" type="button">
<span className="material-symbols-outlined text-[18px] text-primary">query_stats</span>
<span>Custom BI Query</span>
</button>
<button className="flex items-center gap-1.5 px-space-md py-2 bg-surface-container-high text-on-surface hover:bg-surface-variant font-label-md text-label-md rounded-lg transition-colors" type="button">
<span className="material-symbols-outlined text-[18px] text-primary">description</span>
<span>Generate Dossier</span>
</button>
<button className="flex items-center gap-1.5 px-space-md py-2 bg-secondary text-on-secondary hover:opacity-95 font-label-md text-label-md rounded-lg shadow-sm transition-opacity" type="button">
<span className="material-symbols-outlined text-[18px]">verified</span>
<span>Compile MoE Broad-Sheet</span>
</button>
<button className="flex items-center gap-1.5 px-space-md py-2 bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md rounded-lg shadow-sm transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">cloud_download</span>
<span>Export All (.xlsx/.pdf)</span>
</button>
</div>
</div>
{/*  Statutory & Institutional KPI Metric Cards  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
{/*  KPI 1  */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group">
<div className="absolute -right-6 -bottom-6 w-24 h-24 bg-primary/5 rounded-full pointer-events-none group-hover:scale-110 transition-transform"></div>
<div className="flex items-start justify-between">
<div className="space-y-1">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">WASSCE Distinction Trajectory</span>
<div className="flex items-baseline gap-2">
<span className="font-metric-lg text-metric-lg text-primary">88.6%</span>
<span className="font-label-sm text-label-sm text-secondary font-semibold flex items-center">
<span className="material-symbols-outlined text-[14px]">trending_up</span> +4.2%
            </span>
</div>
</div>
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]">workspace_premium</span>
</div>
</div>
<div className="mt-space-md pt-space-xs border-t-0 bg-surface-container-low px-2 py-1.5 rounded-lg flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant">
<span>Projected A1–B3 Pass Rate</span>
<span className="font-semibold text-primary">STEM Wing</span>
</div>
</div>
{/*  KPI 2  */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group">
<div className="absolute -right-6 -bottom-6 w-24 h-24 bg-secondary/5 rounded-full pointer-events-none group-hover:scale-110 transition-transform"></div>
<div className="flex items-start justify-between">
<div className="space-y-1">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">MoE Compliance Score</span>
<div className="flex items-baseline gap-2">
<span className="font-metric-lg text-metric-lg text-secondary">100%</span>
<span className="font-label-sm text-label-sm text-secondary font-semibold flex items-center">
<span className="material-symbols-outlined text-[14px]">done_all</span> Validated
            </span>
</div>
</div>
<div className="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center text-on-secondary-container">
<span className="material-symbols-outlined text-[22px]">gavel</span>
</div>
</div>
<div className="mt-space-md pt-space-xs bg-surface-container-low px-2 py-1.5 rounded-lg flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant">
<span>Kaduna QA Board Seal</span>
<span className="font-semibold text-secondary">KD-QA-2026</span>
</div>
</div>
{/*  KPI 3  */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group">
<div className="absolute -right-6 -bottom-6 w-24 h-24 bg-tertiary-container/5 rounded-full pointer-events-none group-hover:scale-110 transition-transform"></div>
<div className="flex items-start justify-between">
<div className="space-y-1">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Total Revenue Realization</span>
<div className="flex items-baseline gap-1">
<span className="font-metric-lg text-metric-lg text-on-surface">₦142.65M</span>
<span className="font-body-sm text-body-sm text-outline">/ ₦187.5M</span>
</div>
</div>
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]">account_balance_wallet</span>
</div>
</div>
<div className="mt-space-md space-y-1">
<div className="w-full bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
<div className="bg-primary h-1.5 rounded-full w-[76.1%]"></div>
</div>
<div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>Term 1 Bursary Realization</span>
<span className="font-semibold text-primary">76.1%</span>
</div>
</div>
</div>
{/*  KPI 4  */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group">
<div className="absolute -right-6 -bottom-6 w-24 h-24 bg-primary/5 rounded-full pointer-events-none group-hover:scale-110 transition-transform"></div>
<div className="flex items-start justify-between">
<div className="space-y-1">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Terminal Retention Rate</span>
<div className="flex items-baseline gap-2">
<span className="font-metric-lg text-metric-lg text-primary">99.1%</span>
<span className="font-label-sm text-label-sm text-secondary font-semibold flex items-center">
<span className="material-symbols-outlined text-[14px]">arrow_upward</span> +0.8%
            </span>
</div>
</div>
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]">diversity_3</span>
</div>
</div>
<div className="mt-space-md pt-space-xs bg-surface-container-low px-2 py-1.5 rounded-lg flex items-center justify-between font-body-sm text-body-sm text-on-surface-variant">
<span>Active Scholar Roll</span>
<span className="font-semibold text-primary">1,842 Enrolled</span>
</div>
</div>
</div>
{/*  Navigation Category Tabs  */}
<div className="bg-surface-container-lowest p-1 rounded-xl shadow-sm flex items-center overflow-x-auto gap-1">
<button className="flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md whitespace-nowrap shadow-sm">
<span className="material-symbols-outlined text-[18px]">verified</span>
<span>Statutory MoE &amp; EMIS Reports</span>
</button>
<button className="flex items-center gap-2 px-space-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-label-md text-label-md whitespace-nowrap transition-colors">
<span className="material-symbols-outlined text-[18px]">school</span>
<span>Academic &amp; Examination Performance</span>
</button>
<button className="flex items-center gap-2 px-space-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-label-md text-label-md whitespace-nowrap transition-colors">
<span className="material-symbols-outlined text-[18px]">receipt_long</span>
<span>Financial &amp; Bursary Audits</span>
</button>
<button className="flex items-center gap-2 px-space-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-label-md text-label-md whitespace-nowrap transition-colors">
<span className="material-symbols-outlined text-[18px]">pie_chart</span>
<span>Demographic &amp; Enrollment Metrics</span>
</button>
<button className="flex items-center gap-2 px-space-md py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-label-md text-label-md whitespace-nowrap transition-colors">
<span className="material-symbols-outlined text-[18px]">badge</span>
<span>Faculty &amp; HR Analytics</span>
</button>
</div>
{/*  Main Asymmetric Workspace Layout (65% / 35%)  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
{/*  LEFT COLUMN (65% - 8 cols on desktop)  */}
<div className="lg:col-span-8 space-y-space-lg">
{/*  Section: Statutory Broad-Sheet Interactive Preview  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg space-y-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-sm bg-surface-container-low -mx-space-lg -mt-space-lg p-space-md rounded-t-xl">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
<span className="material-symbols-outlined text-[24px]">assignment_turned_in</span>
</div>
<div>
<div className="flex items-center gap-2">
<h2 className="font-headline-sm text-headline-sm text-primary">Kaduna State Unified MoE Broad-Sheet Preview</h2>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">EMIS Live Sync</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">SS3 Science Wing • Terminal Assessment Cycle 2026/2027 • Hash: KD-EMIS-2026-T1-88912</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[20px]">security</span>
<span className="font-label-sm text-label-sm text-secondary font-semibold">Digitally Signed • MoE Standard Form B</span>
</div>
</div>
{/*  Filter Controls  */}
<div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm pt-space-xs">
<div>
<label className="block font-label-sm text-label-sm text-outline mb-1">Academic Arm</label>
<select className="w-full h-10 px-3 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest">
<option selected>SSS 3 - Al-Farabi (Science)</option>
<option>SSS 3 - Ibn Khaldun (Arts)</option>
<option>SSS 3 - Al-Khwarizmi (Tech)</option>
</select>
</div>
<div>
<label className="block font-label-sm text-label-sm text-outline mb-1">Subject Cluster</label>
<select className="w-full h-10 px-3 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest">
<option selected>Core WAEC/NECO (9 Subjects)</option>
<option>Science Core Only</option>
<option>Islamic Studies Core</option>
</select>
</div>
<div>
<label className="block font-label-sm text-label-sm text-outline mb-1">Pass Threshold</label>
<select className="w-full h-10 px-3 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest">
<option selected>Credit Benchmark (≥ 50% C6)</option>
<option>Distinction Only (≥ 75% A1-B3)</option>
<option>All Performance Tiers</option>
</select>
</div>
<div className="flex items-end">
<button className="w-full h-10 bg-primary text-on-primary rounded-lg font-label-md text-label-md flex items-center justify-center gap-1.5 hover:bg-primary-container transition-colors">
<span className="material-symbols-outlined text-[16px]">sync</span>
<span>Recompute Ranks</span>
</button>
</div>
</div>
{/*  Broad-Sheet Data Grid Table  */}
<div className="overflow-x-auto rounded-lg bg-surface-container-lowest">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low h-11 text-outline font-label-sm text-label-sm uppercase tracking-wider">
<th className="px-3 py-2 font-semibold">Adm ID</th>
<th className="px-3 py-2 font-semibold">Student Full Name</th>
<th className="px-3 py-2 font-semibold text-center">MATH</th>
<th className="px-3 py-2 font-semibold text-center">ENG</th>
<th className="px-3 py-2 font-semibold text-center">PHY</th>
<th className="px-3 py-2 font-semibold text-center">CHEM</th>
<th className="px-3 py-2 font-semibold text-center">BIO</th>
<th className="px-3 py-2 font-semibold text-center">CIV</th>
<th className="px-3 py-2 font-semibold text-center">AGG / POS</th>
<th className="px-3 py-2 font-semibold text-center">STATE BENCHMARK</th>
</tr>
</thead>
<tbody className="font-body-sm text-body-sm divide-y-0">
{/*  Row 1  */}
<tr className="h-12 hover:bg-surface-container-low/70 transition-colors">
<td className="px-3 py-2 font-semibold text-primary">KD/NI/21/049</td>
<td className="px-3 py-2">
<div className="flex items-center gap-2">
<img className="w-7 h-7 rounded-full object-cover" data-alt="Close up photographic portrait of a brilliant Nigerian female student wearing an immaculate white school hijab with dark navy uniform, smiling with poise inside Noorul Ilm Kaduna academy." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmCVyvDsAY5qkKjIWf_mODTM_Sosw3X3iutXrtVqcl17umiFBfgaiee6DkT7V7hwwBZ7NGeUoI4IaFGmG4HgK6iQ8WPeuEaAdUKvhuHoHpsKU6MiWEYaEkPZ8IuHWCMsrams-6EZ_pXetNBRflseA4ZFnvIeD1uzUOVhzXobjlQjzWGK9nmAOGaiPVsKG5GZQt3eOCVB_c1JpQ0vuZFmYlObfQ7y5SBJDCq_Bcj8fdVomza2_af-KAwA"/>
<div className="flex flex-col">
<span className="font-label-sm text-on-surface font-semibold">Amina Zubairu Usman</span>
<span className="text-[10px] text-outline">SSS 3A • Boarder</span>
</div>
</div>
</td>
<td className="px-3 py-2 text-center font-semibold text-secondary">94 (A1)</td>
<td className="px-3 py-2 text-center font-semibold text-secondary">88 (A1)</td>
<td className="px-3 py-2 text-center font-semibold text-secondary">91 (A1)</td>
<td className="px-3 py-2 text-center font-semibold text-secondary">86 (A1)</td>
<td className="px-3 py-2 text-center font-semibold text-secondary">89 (A1)</td>
<td className="px-3 py-2 text-center font-semibold text-secondary">95 (A1)</td>
<td className="px-3 py-2 text-center">
<span className="font-bold text-primary">543</span>
<span className="text-[10px] text-secondary font-bold block">1st / 128</span>
</td>
<td className="px-3 py-2 text-center">
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[11px] font-bold">
                    MoE Honors
                  </span>
</td>
</tr>
{/*  Row 2  */}
<tr className="h-12 bg-surface-container-low/30 hover:bg-surface-container-low transition-colors">
<td className="px-3 py-2 font-semibold text-primary">KD/NI/21/112</td>
<td className="px-3 py-2">
<div className="flex items-center gap-2">
<img className="w-7 h-7 rounded-full object-cover" data-alt="Portrait of a young northern Nigerian teenage male scholar in crisp school blazer looking sharp and focused in a state-of-the-art laboratory at Noorul Ilm International Kaduna." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOLDP-0KwE5BhnpFb3oqnF_FzctidqGBNogLMnq5AQ4kGBpJa-nzGMkCHYX9I5apxexo2nXX_9upEB0wHa0eOpC3IADRgpI6BWwW3FKjMXBBQa3Dt_Tv7fQmNSpDIOHDAyH-JglS32QsN8HwtnVP4-0Be5nKGUTJW8awZac38SIhp_pPuv2FOL9LPwCjTZU4o2HXnfExaCCsgkwQECBjwkpjjKsBq_4jg1oy1knNXmDpn4taWI9lXCvg"/>
<div className="flex flex-col">
<span className="font-label-sm text-on-surface font-semibold">Farouq Abdullahi Sani</span>
<span className="text-[10px] text-outline">SSS 3A • Day</span>
</div>
</div>
</td>
<td className="px-3 py-2 text-center font-semibold text-secondary">87 (A1)</td>
<td className="px-3 py-2 text-center font-semibold text-primary">78 (B2)</td>
<td className="px-3 py-2 text-center font-semibold text-secondary">85 (A1)</td>
<td className="px-3 py-2 text-center font-semibold text-primary">80 (B2)</td>
<td className="px-3 py-2 text-center font-semibold text-secondary">84 (B2)</td>
<td className="px-3 py-2 text-center font-semibold text-secondary">90 (A1)</td>
<td className="px-3 py-2 text-center">
<span className="font-bold text-primary">504</span>
<span className="text-[10px] text-outline block">2nd / 128</span>
</td>
<td className="px-3 py-2 text-center">
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[11px] font-bold">
                    MoE Distinction
                  </span>
</td>
</tr>
{/*  Row 3  */}
<tr className="h-12 hover:bg-surface-container-low/70 transition-colors">
<td className="px-3 py-2 font-semibold text-primary">KD/NI/21/088</td>
<td className="px-3 py-2">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-xs">HK</div>
<div className="flex flex-col">
<span className="font-label-sm text-on-surface font-semibold">Hauwa Khaleel Ibrahim</span>
<span className="text-[10px] text-outline">SSS 3B • Boarder</span>
</div>
</div>
</td>
<td className="px-3 py-2 text-center font-semibold text-primary">79 (B2)</td>
<td className="px-3 py-2 text-center font-semibold text-secondary">82 (B2)</td>
<td className="px-3 py-2 text-center font-semibold text-primary">76 (B3)</td>
<td className="px-3 py-2 text-center font-semibold text-secondary">88 (A1)</td>
<td className="px-3 py-2 text-center font-semibold text-primary">77 (B3)</td>
<td className="px-3 py-2 text-center font-semibold text-secondary">86 (A1)</td>
<td className="px-3 py-2 text-center">
<span className="font-bold text-primary">488</span>
<span className="text-[10px] text-outline block">3rd / 128</span>
</td>
<td className="px-3 py-2 text-center">
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-[11px] font-semibold">
                    MoE Credit Pass
                  </span>
</td>
</tr>
{/*  Row 4  */}
<tr className="h-12 bg-surface-container-low/30 hover:bg-surface-container-low transition-colors">
<td className="px-3 py-2 font-semibold text-primary">KD/NI/21/205</td>
<td className="px-3 py-2">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold text-xs">MA</div>
<div className="flex flex-col">
<span className="font-label-sm text-on-surface font-semibold">Muhammad Adam Bello</span>
<span className="text-[10px] text-outline">SSS 3C • Day</span>
</div>
</div>
</td>
<td className="px-3 py-2 text-center font-semibold text-primary">74 (B3)</td>
<td className="px-3 py-2 text-center font-semibold text-primary">71 (B3)</td>
<td className="px-3 py-2 text-center font-semibold text-on-surface">68 (C4)</td>
<td className="px-3 py-2 text-center font-semibold text-primary">73 (B3)</td>
<td className="px-3 py-2 text-center font-semibold text-on-surface">65 (C5)</td>
<td className="px-3 py-2 text-center font-semibold text-primary">78 (B2)</td>
<td className="px-3 py-2 text-center">
<span className="font-bold text-primary">429</span>
<span className="text-[10px] text-outline block">9th / 128</span>
</td>
<td className="px-3 py-2 text-center">
<span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-[11px]">
                    MoE Verified
                  </span>
</td>
</tr>
</tbody>
</table>
</div>
<div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs text-on-surface-variant font-body-sm text-body-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-secondary">cloud_done</span>
<span>All continuous assessments synchronized with Kaduna MoE central repository.</span>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1 rounded bg-surface-container-high text-on-surface hover:bg-surface-variant font-label-sm text-label-sm">Download Broad-Sheet .xlsx</button>
<button className="px-3 py-1 rounded bg-primary text-on-primary hover:bg-primary-container font-label-sm text-label-sm">Sign &amp; Transmit MoE</button>
</div>
</div>
</div>
{/*  Section: Multi-Term Comparative Performance Charts  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg space-y-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
<div>
<h2 className="font-headline-sm text-headline-sm text-primary">Multi-Session Longitudinal Academic Analytics</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Comparative Subject Mastery: 2024/2025 vs 2025/2026 vs Current 2026/2027 Session</p>
</div>
<div className="flex items-center gap-space-sm">
<div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
<span className="w-3 h-3 rounded-full bg-outline-variant"></span> 2024/25
            </div>
<div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
<span className="w-3 h-3 rounded-full bg-primary-fixed-dim"></span> 2025/26
            </div>
<div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
<span className="w-3 h-3 rounded-full bg-secondary"></span> 2026/27 (Current)
            </div>
</div>
</div>
{/*  Custom Inline High-Contrast Performance Graph (Clean SVG representation)  */}
<div className="w-full bg-surface-container-low p-space-md rounded-xl space-y-space-md">
<div className="grid grid-cols-5 gap-2 text-center font-label-sm text-label-sm text-outline uppercase pb-1">
<span>Mathematics</span>
<span>English Lang.</span>
<span>Physics</span>
<span>Chemistry</span>
<span>Civic Educ.</span>
</div>
<div className="grid grid-cols-5 gap-4 h-48 items-end px-2">
{/*  Subject 1: Mathematics  */}
<div className="flex items-end justify-center gap-1.5 h-full">
<div className="w-3 bg-outline-variant rounded-t transition-all hover:opacity-80" style={{ height: "68%" }} title="2024/25: 68%"></div>
<div className="w-3 bg-primary-fixed-dim rounded-t transition-all hover:opacity-80" style={{ height: "74%" }} title="2025/26: 74%"></div>
<div className="w-3.5 bg-secondary rounded-t shadow-sm transition-all hover:opacity-90" style={{ height: "89%" }} title="2026/27: 89%"></div>
</div>
{/*  Subject 2: English Language  */}
<div className="flex items-end justify-center gap-1.5 h-full">
<div className="w-3 bg-outline-variant rounded-t transition-all hover:opacity-80" style={{ height: "72%" }} title="2024/25: 72%"></div>
<div className="w-3 bg-primary-fixed-dim rounded-t transition-all hover:opacity-80" style={{ height: "81%" }} title="2025/26: 81%"></div>
<div className="w-3.5 bg-secondary rounded-t shadow-sm transition-all hover:opacity-90" style={{ height: "92%" }} title="2026/27: 92%"></div>
</div>
{/*  Subject 3: Physics  */}
<div className="flex items-end justify-center gap-1.5 h-full">
<div className="w-3 bg-outline-variant rounded-t transition-all hover:opacity-80" style={{ height: "62%" }} title="2024/25: 62%"></div>
<div className="w-3 bg-primary-fixed-dim rounded-t transition-all hover:opacity-80" style={{ height: "71%" }} title="2025/26: 71%"></div>
<div className="w-3.5 bg-secondary rounded-t shadow-sm transition-all hover:opacity-90" style={{ height: "84%" }} title="2026/27: 84%"></div>
</div>
{/*  Subject 4: Chemistry  */}
<div className="flex items-end justify-center gap-1.5 h-full">
<div className="w-3 bg-outline-variant rounded-t transition-all hover:opacity-80" style={{ height: "65%" }} title="2024/25: 65%"></div>
<div className="w-3 bg-primary-fixed-dim rounded-t transition-all hover:opacity-80" style={{ height: "77%" }} title="2025/26: 77%"></div>
<div className="w-3.5 bg-secondary rounded-t shadow-sm transition-all hover:opacity-90" style={{ height: "86%" }} title="2026/27: 86%"></div>
</div>
{/*  Subject 5: Civic Education  */}
<div className="flex items-end justify-center gap-1.5 h-full">
<div className="w-3 bg-outline-variant rounded-t transition-all hover:opacity-80" style={{ height: "80%" }} title="2024/25: 80%"></div>
<div className="w-3 bg-primary-fixed-dim rounded-t transition-all hover:opacity-80" style={{ height: "88%" }} title="2025/26: 88%"></div>
<div className="w-3.5 bg-secondary rounded-t shadow-sm transition-all hover:opacity-90" style={{ height: "96%" }} title="2026/27: 96%"></div>
</div>
</div>
<div className="grid grid-cols-5 gap-2 text-center font-label-md text-label-md text-primary font-bold pt-2 border-t-0 bg-surface-container-lowest py-2 rounded-lg">
<span>89.0% (+15%)</span>
<span>92.4% (+11%)</span>
<span>84.1% (+13%)</span>
<span>86.5% (+9%)</span>
<span>96.0% (+8%)</span>
</div>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span>*Data aggregated from WAEC Mock Trials, Kaduna MoE Common Entrance &amp; Mid-Term Continuous Assessments.</span>
<a className="font-label-sm text-label-sm text-primary hover:underline font-semibold flex items-center gap-1" href="#">
<span>View Full Statistical Variance</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</a>
</div>
</div>
{/*  Section: Departmental Efficiency & Wing Breakdown Table  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg space-y-space-md">
<div className="flex items-center justify-between">
<div>
<h2 className="font-headline-sm text-headline-sm text-primary">Departmental Efficiency &amp; Faculty Metrics</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Regulatory staffing parity, teacher-scholar ratios, and CA compliance speeds</p>
</div>
<span className="px-2.5 py-1 rounded bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold">
            Kaduna MoE Benchmark Met
          </span>
</div>
<div className="overflow-x-auto rounded-lg">
<table className="w-full text-left">
<thead>
<tr className="bg-surface-container-low h-10 text-outline font-label-sm text-label-sm uppercase">
<th className="px-4 py-2 font-semibold">Wing / Division</th>
<th className="px-4 py-2 font-semibold">Lead Academic Dean</th>
<th className="px-4 py-2 font-semibold text-center">Enrollment</th>
<th className="px-4 py-2 font-semibold text-center">Staff Ratio</th>
<th className="px-4 py-2 font-semibold text-center">CA Turnaround</th>
<th className="px-4 py-2 font-semibold text-right">Pass Rate (%)</th>
</tr>
</thead>
<tbody className="font-body-sm text-body-sm">
<tr className="h-12 hover:bg-surface-container-low/50">
<td className="px-4 py-2 font-semibold text-on-surface flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                  Senior Secondary (SSS 1–3)
                </td>
<td className="px-4 py-2 text-on-surface-variant">Ustadh Dr. Kabir Danfulani</td>
<td className="px-4 py-2 text-center font-bold text-primary">612 Scholars</td>
<td className="px-4 py-2 text-center text-on-surface font-medium">1 : 19</td>
<td className="px-4 py-2 text-center">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-semibold text-xs">48 Hours</span>
</td>
<td className="px-4 py-2 text-right font-bold text-secondary">94.8%</td>
</tr>
<tr className="h-12 bg-surface-container-low/30 hover:bg-surface-container-low/50">
<td className="px-4 py-2 font-semibold text-on-surface flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                  Junior Secondary (JSS 1–3)
                </td>
<td className="px-4 py-2 text-on-surface-variant">Malama Aisha Balarabe</td>
<td className="px-4 py-2 text-center font-bold text-primary">684 Scholars</td>
<td className="px-4 py-2 text-center text-on-surface font-medium">1 : 21</td>
<td className="px-4 py-2 text-center">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-semibold text-xs">36 Hours</span>
</td>
<td className="px-4 py-2 text-right font-bold text-secondary">91.2%</td>
</tr>
<tr className="h-12 hover:bg-surface-container-low/50">
<td className="px-4 py-2 font-semibold text-on-surface flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-secondary-fixed-dim"></span>
                  Primary &amp; Tahfeez Wing
                </td>
<td className="px-4 py-2 text-on-surface-variant">Sheikh Mustapha Al-Hassan</td>
<td className="px-4 py-2 text-center font-bold text-primary">546 Scholars</td>
<td className="px-4 py-2 text-center text-on-surface font-medium">1 : 16</td>
<td className="px-4 py-2 text-center">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-primary font-semibold text-xs">24 Hours</span>
</td>
<td className="px-4 py-2 text-right font-bold text-secondary">97.6%</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
{/*  RIGHT COLUMN (35% - 4 cols on desktop)  */}
<div className="lg:col-span-4 space-y-space-lg">
{/*  One-Click Statutory Export Hub  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg space-y-space-md">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[22px] text-primary">archive</span>
<h2 className="font-headline-sm text-headline-sm text-primary">Statutory Export Hub</h2>
</div>
<span className="font-label-sm text-label-sm text-secondary font-bold">4 Verified</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          MoE-certified bundles formatted strictly to Kaduna Ministry &amp; WAEC regulatory specifications.
        </p>
{/*  Document Item List  */}
<div className="space-y-space-sm">
{/*  Doc 1  */}
<div className="p-space-sm bg-surface-container-low rounded-xl flex items-center justify-between hover:bg-surface-container transition-colors group">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center font-bold text-xs">
                XLS
              </div>
<div className="flex flex-col">
<span className="font-label-sm text-on-surface font-semibold truncate max-w-[180px]">Kaduna MoE Term 1 Form A Census</span>
<span className="text-[10px] text-on-surface-variant">Validated 14 Oct • 4.2 MB</span>
</div>
</div>
<button className="p-1.5 rounded-lg bg-surface-container-lowest text-primary hover:bg-primary hover:text-on-primary shadow-sm transition-all" title="Download">
<span className="material-symbols-outlined text-[18px]">download</span>
</button>
</div>
{/*  Doc 2  */}
<div className="p-space-sm bg-surface-container-low rounded-xl flex items-center justify-between hover:bg-surface-container transition-colors group">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-error/10 text-error flex items-center justify-center font-bold text-xs">
                PDF
              </div>
<div className="flex flex-col">
<span className="font-label-sm text-on-surface font-semibold truncate max-w-[180px]">WASSCE CA Benchmark Dossier</span>
<span className="text-[10px] text-on-surface-variant">Digital Signature Active • 1.8 MB</span>
</div>
</div>
<button className="p-1.5 rounded-lg bg-surface-container-lowest text-primary hover:bg-primary hover:text-on-primary shadow-sm transition-all" title="Download">
<span className="material-symbols-outlined text-[18px]">download</span>
</button>
</div>
{/*  Doc 3  */}
<div className="p-space-sm bg-surface-container-low rounded-xl flex items-center justify-between hover:bg-surface-container transition-colors group">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                PDF
              </div>
<div className="flex flex-col">
<span className="font-label-sm text-on-surface font-semibold truncate max-w-[180px]">Bursary Certified Cashbook &amp; Bank Rec</span>
<span className="text-[10px] text-on-surface-variant">Kaduna Inland Rev. Verified • 3.1 MB</span>
</div>
</div>
<button className="p-1.5 rounded-lg bg-surface-container-lowest text-primary hover:bg-primary hover:text-on-primary shadow-sm transition-all" title="Download">
<span className="material-symbols-outlined text-[18px]">download</span>
</button>
</div>
{/*  Doc 4  */}
<div className="p-space-sm bg-surface-container-low rounded-xl flex items-center justify-between hover:bg-surface-container transition-colors group">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center font-bold text-xs">
                XLS
              </div>
<div className="flex flex-col">
<span className="font-label-sm text-on-surface font-semibold truncate max-w-[180px]">Staff TRCN &amp; KTSC Registry</span>
<span className="text-[10px] text-on-surface-variant">100% Certified Teachers • 850 KB</span>
</div>
</div>
<button className="p-1.5 rounded-lg bg-surface-container-lowest text-primary hover:bg-primary hover:text-on-primary shadow-sm transition-all" title="Download">
<span className="material-symbols-outlined text-[18px]">download</span>
</button>
</div>
</div>
<button className="w-full py-2 bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-sm text-label-sm rounded-lg flex items-center justify-center gap-1.5 transition-colors">
<span className="material-symbols-outlined text-[16px]">history</span>
<span>View 3-Year Regulatory Archives</span>
</button>
</div>
{/*  Demographic & Catchment Distribution Insights  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg space-y-space-md">
<div className="flex items-center justify-between">
<h2 className="font-headline-sm text-headline-sm text-primary">Socioeconomic &amp; Catchment</h2>
<span className="material-symbols-outlined text-outline text-[20px]">public</span>
</div>
{/*  Gender Parity Visual  */}
<div className="p-space-sm bg-surface-container-low rounded-xl space-y-2">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface font-semibold">Gender Equity Parity</span>
<span className="text-secondary font-bold">1:1 Balanced</span>
</div>
<div className="flex w-full h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[52%]" title="Male: 52%"></div>
<div className="bg-secondary h-full w-[48%]" title="Female: 48%"></div>
</div>
<div className="flex items-center justify-between text-[11px] font-body-sm text-on-surface-variant pt-0.5">
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-primary"></span> 958 Male (52%)</span>
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-secondary"></span> 884 Female (48%)</span>
</div>
</div>
{/*  Boarding vs Day Scholar Split  */}
<div className="grid grid-cols-2 gap-space-sm">
<div className="p-space-sm bg-surface-container-low rounded-xl text-center">
<span className="font-label-sm text-label-sm text-outline uppercase block">Boarding Wing</span>
<span className="font-headline-md text-headline-md text-primary font-bold">348</span>
<span className="text-[11px] text-on-surface-variant block">18.9% Full Residency</span>
</div>
<div className="p-space-sm bg-surface-container-low rounded-xl text-center">
<span className="font-label-sm text-label-sm text-outline uppercase block">Day Scholars</span>
<span className="font-headline-md text-headline-md text-secondary font-bold">1,494</span>
<span className="text-[11px] text-on-surface-variant block">81.1% Commuters</span>
</div>
</div>
{/*  Geographic Catchment Zones  */}
<div className="space-y-space-xs">
<span className="font-label-sm text-label-sm text-outline uppercase tracking-wider block">Kaduna Metro Catchment Zones</span>
<div className="space-y-1.5 font-body-sm text-body-sm">
<div className="flex items-center justify-between py-1 px-2 rounded bg-surface-container-low">
<span className="text-on-surface">Kaduna North (Malali, Ungwan Rimi)</span>
<span className="font-semibold text-primary">42%</span>
</div>
<div className="flex items-center justify-between py-1 px-2 rounded bg-surface-container-low">
<span className="text-on-surface">Kaduna South &amp; Barnawa</span>
<span className="font-semibold text-primary">28%</span>
</div>
<div className="flex items-center justify-between py-1 px-2 rounded bg-surface-container-low">
<span className="text-on-surface">Igabi &amp; Millennium City Ext.</span>
<span className="font-semibold text-primary">18%</span>
</div>
<div className="flex items-center justify-between py-1 px-2 rounded bg-surface-container-low">
<span className="text-on-surface">Zaria &amp; Outlying Boarders</span>
<span className="font-semibold text-primary">12%</span>
</div>
</div>
</div>
</div>
{/*  Scheduled Automated MoE Dispatch & Audit Log  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg space-y-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[22px] text-secondary">mark_email_read</span>
<h2 className="font-headline-sm text-headline-sm text-primary">Scheduled Auto-Dispatch</h2>
</div>
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold">Active</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Autonomous transmission to Dr. Aminu Bello and the Kaduna State MoE Inspectorate.
        </p>
<div className="space-y-2 bg-surface-container-low p-space-sm rounded-xl">
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-outline">Frequency:</span>
<span className="font-semibold text-on-surface">Every Friday at 16:00 GMT+1</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-outline">Recipients:</span>
<span className="font-semibold text-on-surface">Principal + 4 Trustees</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-outline">MoE Cloud Sync:</span>
<span className="text-secondary font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">cloud_done</span> Enabled
            </span>
</div>
</div>
<div className="pt-space-xs flex items-center gap-2">
<button className="flex-1 py-2 bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md rounded-lg transition-colors">
            Configure Dispatch
          </button>
<button className="px-3 py-2 bg-surface-container-high text-on-surface hover:bg-surface-variant font-label-md text-label-md rounded-lg transition-colors" title="Send Test Alert">
<span className="material-symbols-outlined text-[18px]">send</span>
</button>
</div>
</div>
</div>
</div>
</div>
</main>
  );
}
    