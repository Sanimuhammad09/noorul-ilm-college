const fs = require('fs');
let tsx = fs.readFileSync('src/routes/admin.tsx', 'utf8');

const mapping = {
    'dashboard': '/admin',
    'notifications-alerts': '/admin',
    'school-calendar': '/admin/school-events-academic-calendar',
    'student-directory': '/admin/student-directory-records',
    'admissions-enrollment': '/admin/admissions-student-onboarding-workflow',
    'classes-sections-arms': '/admin/classes-arms-section-capacity-allocator',
    'subjects-curriculum': '/admin/academic-curriculum-lesson-plans',
    'timetable-scheduling': '/admin/timetable-master-academic-scheduling',
    'daily-attendance': '/admin/student-daily-attendance-roll-call-register',
    'examinations-assessments': '/admin/examinations-continuous-assessment-report-card-compiler',
    'results-report-cards': '/admin/central-reports-moe-analytics-center',
    'fee-structure-billing': '/admin/fee-management-billing',
    'payments-receipts': '/admin/fee-management-billing',
    'financial-reports-bursary': '/admin/fee-management-billing',
    'staff-teachers-directory': '/admin/staff-teachers-hr-directory',
    'staff-attendance-leave': '/admin/staff-attendance-leave-management',
    'payroll': '/admin/staff-payroll-remittance-ledger',
    'user-accounts-roles': '/admin',
    'rbac-permissions': '/admin/rbac-permission-matrix',
    'audit-logs-activity': '/admin/security-audit-logs-system-inspector',
    'system-settings': '/admin/system-settings-school-profile-configuration'
};

tsx = tsx.replace(/<Link to="\/admin\/([^"]+)"/g, (match, path) => {
    // Check if the exact route '/admin/...' exists in mapping
    let mapped = mapping[path];
    if (mapped) {
        return `<Link to="${mapped}"`;
    }
    // Try without '/admin'
    return match;
});

// also fix the active path if needed
tsx = tsx.replace(/<Link to="\/admin"([^>]*)>([\s\S]*?)<\/Link>/g, (match) => {
    // Dashboard should match exact
    if (match.includes('Dashboard')) {
        return match.replace(/activeProps=\{([^}]+)\}/, 'activeOptions={{ exact: true }} activeProps={$1}');
    }
    return match;
});

fs.writeFileSync('src/routes/admin.tsx', tsx);
