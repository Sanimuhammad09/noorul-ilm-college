const fs = require('fs');

const htmlContent = fs.readFileSync('raw.html', 'utf8');

const configStr = htmlContent.match(/tailwind\.config=\{([\s\S]*?)\};/)[1];
const extendMatch = configStr.match(/extend:(\{[\s\S]*?\})\s*\}\s*\}/);
if (extendMatch) {
    let extendBlock = extendMatch[1];
    let tailwindConfig = `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: ${extendBlock}
  },
  plugins: [],
}
`;
    fs.writeFileSync('tailwind.config.js', tailwindConfig);
}

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(htmlContent);
const doc = dom.window.document;

function toReactCode(html) {
    let jsx = html;
    jsx = jsx.replace(/class="/g, 'className="');
    jsx = jsx.replace(/for="/g, 'htmlFor="');
    jsx = jsx.replace(/<!--[\s\S]*?-->/g, '');
    jsx = jsx.replace(/<img([^>]*?[^\/])>/g, '<img$1 />');
    jsx = jsx.replace(/<input([^>]*?[^\/])>/g, '<input$1 />');
    jsx = jsx.replace(/<hr([^>]*?[^\/])>/g, '<hr$1 />');
    jsx = jsx.replace(/<br([^>]*?[^\/])>/g, '<br$1 />');
    jsx = jsx.replace(/style="([^"]*)"/g, (match, styleStr) => {
        return ''; 
    });
    jsx = jsx.replace(/checked=""/g, 'defaultChecked');
    jsx = jsx.replace(/disabled=""/g, 'disabled');
    
    // Fix paths
    jsx = jsx.replace(/<a([^>]*)href="#"([^>]*)data-path="([^"]+)"([^>]*)>([\s\S]*?)<\/a>/g, (match, p1, p2, dataPath, p3, inner) => {
        let clsMatch = match.match(/className="([^"]+)"/);
        let className = clsMatch ? clsMatch[1] : '';
        let toPath = '/admin/' + dataPath;
        if (dataPath === 'dashboard' || dataPath === 'executive-administrative-dashboard') toPath = '/admin';
        
        let cleanClass = className.replace('bg-primary-container text-on-primary font-label-lg rounded-lg shadow-sm', '').trim();
        return `<Link to="${toPath}" className="${cleanClass}" activeProps={{ className: "bg-primary-container text-on-primary font-label-lg shadow-sm" }}>${inner}</Link>`;
    });

    return jsx;
}

const aside = doc.querySelector('aside').outerHTML;
const header = doc.querySelector('header').outerHTML;
const main = doc.querySelector('main').outerHTML;

fs.writeFileSync('AdminSidebarHeader.txt', toReactCode(aside) + '\n' + toReactCode(header));
fs.writeFileSync('AdminMainContent.txt', toReactCode(main));
