const fs = require('fs');
let c = fs.readFileSync('tailwind.config.js', 'utf8');
c = c.replace(/"#551625"/g, '"#3c3c94"');
c = c.replace(/"#390111"/g, '"#343494"');
c = c.replace(/"#D3BC7C"/g, '"#a4a4d0"');
fs.writeFileSync('tailwind.config.js', c);

const images = [
  '0c95167f-d698-4d13-b559-9e67b9cefad2.jpg',
  '175b7c9d-3353-4781-be2f-c3c46d517ea2.jpg',
  '2928cca9-fa34-46ba-9230-e5d76a08447d.jpg',
  '43fcfc05-3f2f-4594-a3d2-741e9b70f588.jpg',
  '56faa8f9-fbc2-453e-b2b0-e3bc5c534a17.jpg',
  '61ff5787-a152-41e4-80c8-f47ef2bece5b.jpg',
  '63e17dc7-673a-4d16-89da-0ddace15c479.jpg',
  '775a66ad-33fe-4605-8927-be22af0e4c5f.jpg',
  '7ff7f9c3-a04c-4a43-ab47-e49da9c97a5c.jpg',
  '87bea5ad-3932-4a66-b68b-6b27bf765d41.jpg',
  'ad3967cd-5029-4c44-88f8-a2652c874f31.jpg',
  'ad6873e6-5b2c-495a-bd82-dd266efda86f.jpg',
  'c7d4bbd8-0b1e-4b52-87e7-48ebc851c0f6.jpg'
];

const paths = [
  'src/routes/academic-programs.lazy.tsx',
  'src/routes/leadership-board.lazy.tsx',
  'src/routes/index.lazy.tsx',
  'src/routes/contact-us.lazy.tsx',
  'src/routes/campus-gallery.lazy.tsx'
];

let imgIndex = 0;

for (const p of paths) {
  let content = fs.readFileSync(p, 'utf8');
  let imports = '';
  
  content = content.replace(/src="https:\/\/lh3\.googleusercontent\.com[^"]+"/g, (match) => {
    const currentImg = images[imgIndex % images.length];
    const imgName = `img${imgIndex}`;
    imports += `import ${imgName} from '../assets/images/${currentImg}';\n`;
    imgIndex++;
    return `src={${imgName}}`;
  });
  
  if (imports) {
    content = content.replace(/import \{ createLazyFileRoute [^\n]+\n/, (match) => {
      return match + imports;
    });
  }
  fs.writeFileSync(p, content);
}
