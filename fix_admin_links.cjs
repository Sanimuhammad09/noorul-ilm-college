const fs = require('fs');

let tsx = fs.readFileSync('src/routes/admin.tsx', 'utf8');

// The original href was <a class="..." data-path="..." href="#">
tsx = tsx.replace(/<a([^>]*)data-path="([^"]+)"([^>]*)href="#"([^>]*)>([\s\S]*?)<\/a>/g, (match, p1, dataPath, p2, p3, inner) => {
    let clsMatch = match.match(/className="([^"]+)"/);
    let className = clsMatch ? clsMatch[1] : '';
    let toPath = '/admin/' + dataPath;
    if (dataPath === 'dashboard' || dataPath === 'executive-administrative-dashboard') toPath = '/admin';
    if (dataPath === 'student-directory') toPath = '/admin/student-directory-records';
    let cleanClass = className.replace('bg-primary-container text-on-primary font-label-lg rounded-lg shadow-sm', '').trim();
    // Re-inject className
    return `<Link to="${toPath}" className="${cleanClass}" activeProps={{ className: "bg-primary-container text-on-primary font-label-lg shadow-sm" }}>${inner}</Link>`;
});

// Remove unused useState
tsx = tsx.replace('import { useState } from "react";', '');

// Also, the <a aria-current="page" class="..." data-path="..." href="#">
tsx = tsx.replace(/<a([^>]*)aria-current="page"([^>]*)data-path="([^"]+)"([^>]*)href="#"([^>]*)>([\s\S]*?)<\/a>/g, (match, p1, p2, dataPath, p3, p4, inner) => {
    let clsMatch = match.match(/className="([^"]+)"/);
    let className = clsMatch ? clsMatch[1] : '';
    let toPath = '/admin/' + dataPath;
    if (dataPath === 'dashboard' || dataPath === 'executive-administrative-dashboard') toPath = '/admin';
    if (dataPath === 'student-directory') toPath = '/admin/student-directory-records';
    let cleanClass = className.replace('bg-primary-container text-on-primary font-label-lg rounded-lg shadow-sm', '').trim();
    return `<Link to="${toPath}" className="${cleanClass}" activeProps={{ className: "bg-primary-container text-on-primary font-label-lg shadow-sm" }}>${inner}</Link>`;
});

fs.writeFileSync('src/routes/admin.tsx', tsx);
