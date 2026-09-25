const fs = require('fs');
const path = require('path');

function replaceColorsInFile(filePath) {
    if (!fs.statSync(filePath).isFile()) return;
    if (filePath.endsWith('.tsx') || filePath.endsWith('.css') || filePath.endsWith('.html')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = content
            .replace(/heritage-burgundy/g, 'primary')
            .replace(/academic-gold/g, 'tertiary')
            .replace(/paper-white/g, 'surface')
            .replace(/ink-black/g, 'on-surface')
            .replace(/bg-background/g, 'bg-surface');
            
        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent);
            console.log(`Updated colors in ${filePath}`);
        }
    }
}

function traverseDir(dir) {
    fs.readdirSync(dir).forEach(file => {
        let fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverseDir(fullPath);
        } else {
            replaceColorsInFile(fullPath);
        }
    });
}

traverseDir('src');
replaceColorsInFile('index.html');
