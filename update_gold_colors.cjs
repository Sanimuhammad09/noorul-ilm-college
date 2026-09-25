const fs = require('fs');
let cfg = fs.readFileSync('tailwind.config.js', 'utf8');

// Replace brown colors with gold/yellow colors
cfg = cfg.replace(/"tertiary":"#442100"/g, '"tertiary":"#d4af37"'); // Gold
cfg = cfg.replace(/"tertiary-container":"#653400"/g, '"tertiary-container":"#fef0c7"'); // Light Gold
cfg = cfg.replace(/"on-tertiary":"#ffffff"/g, '"on-tertiary":"#ffffff"');
cfg = cfg.replace(/"on-tertiary-container":"#fc922b"/g, '"on-tertiary-container":"#7a5900"'); // Dark Gold text
cfg = cfg.replace(/"tertiary-fixed":"#ffdcc3"/g, '"tertiary-fixed":"#fef0c7"');
cfg = cfg.replace(/"tertiary-fixed-dim":"#ffb77d"/g, '"tertiary-fixed-dim":"#fce38a"');
cfg = cfg.replace(/"on-tertiary-fixed":"#2f1500"/g, '"on-tertiary-fixed":"#4a3600"');
cfg = cfg.replace(/"on-tertiary-fixed-variant":"#6e3900"/g, '"on-tertiary-fixed-variant":"#664d00"');

// And secondary colors which might be greenish now
// Let's leave secondary if it's fine, but user said "I don't want brown color".
// What about the sidebar background?
// "surface-container-lowest":"#ffffff"
// "surface-container-high":"#e2e7ff"
// The dashboard sidebar in the screenshot has a very dark red color.
// Wait! If the sidebar is dark red, where is that coming from?
// In `raw.html`, the sidebar header: `<div class="p-space-lg flex flex-col gap-space-md border-b border-outline-variant/20 bg-surface-container-lowest">`
// Wait, the sidebar itself: `<aside class="w-72 fixed top-0 bottom-0 left-0 bg-surface-container-lowest ...">`
// Why would `bg-surface-container-lowest` be dark red?
// Wait, maybe the user is using `bg-primary` for the sidebar?
// In the screenshot, the "Dashboard" active link is dark red, AND the sidebar background is white? NO, the active link is dark red.
// In `admin.tsx`: `<Link to="/admin" className="..." activeProps={{ className: "bg-primary-container text-on-primary font-label-lg shadow-sm" }}>`
// If `bg-primary-container` is red, then `primary-container` is red?
// Let's check `primary-container` in config: `"primary-container":"#1e3a8a"` (this is blue!)
// SO THE CSS IN THE BROWSER IS STALE! The browser is still using the old Tailwind CSS from BEFORE I updated the config.

fs.writeFileSync('tailwind.config.js', cfg);
