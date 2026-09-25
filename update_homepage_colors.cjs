const fs = require('fs');

let tsx = fs.readFileSync('src/routes/index.lazy.tsx', 'utf8');

// Colors
tsx = tsx.replace(/heritage-burgundy/g, 'primary');
tsx = tsx.replace(/academic-gold/g, 'tertiary');
tsx = tsx.replace(/paper-white/g, 'surface');
tsx = tsx.replace(/ink-black/g, 'on-surface');
tsx = tsx.replace(/bg-background/g, 'bg-surface');

fs.writeFileSync('src/routes/index.lazy.tsx', tsx);
