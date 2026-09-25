const fs = require('fs');
let tsx = fs.readFileSync('src/routes/index.lazy.tsx', 'utf8');

// 1. Hero Overlay Gradient
tsx = tsx.replace(
  '<div className="absolute inset-0 bg-on-surface/40 backdrop-brightness-75"></div>',
  '<div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent backdrop-brightness-75"></div>'
);

// 2. Hero Text Gradient
tsx = tsx.replace(
  '<h1 className="font-display-lg text-display-lg mb-6 leading-tight">',
  '<h1 className="font-display-lg text-[64px] mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-tertiary drop-shadow-lg">'
);

// 3. Hero Paragraph 
tsx = tsx.replace(
  '<p className="font-body-lg text-body-lg text-surface/90 max-w-xl">',
  '<p className="font-body-lg text-xl text-surface/95 max-w-xl font-light leading-relaxed drop-shadow-md">'
);

// 4. Our Story Image Frame
tsx = tsx.replace(
  '<div className="absolute -top-6 -left-6 w-32 h-32 border-l-4 border-t-4 border-tertiary z-0"></div>',
  '<div className="absolute -top-6 -left-6 w-32 h-32 border-l-8 border-t-8 border-tertiary z-0 opacity-80"></div>'
);

// 5. Bento Grid - Main Box
tsx = tsx.replace(
  '<div className="md:col-span-2 bg-primary text-surface p-10 rounded-lg relative overflow-hidden flex flex-col justify-end min-h-[320px]">',
  '<div className="md:col-span-2 bg-gradient-to-br from-primary via-[#003399] to-[#001144] text-surface p-10 rounded-2xl shadow-2xl relative overflow-hidden flex flex-col justify-end min-h-[320px] group transition-all duration-500 hover:shadow-primary/30">'
);
tsx = tsx.replace(
  '<div className="absolute top-10 right-10 opacity-10">',
  '<div className="absolute top-10 right-10 opacity-10 transition-transform duration-700 group-hover:scale-125 group-hover:-rotate-12">'
);

// 6. Bento Grid - Other Boxes
tsx = tsx.replace(
  '<div className="bg-surface-container-high p-10 rounded-lg flex flex-col items-start justify-between border border-on-surface-variant/10">',
  '<div className="bg-white/60 backdrop-blur-xl p-10 rounded-2xl flex flex-col items-start justify-between border border-white shadow-xl hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl">'
);
tsx = tsx.replace(
  '<div className="bg-tertiary/10 p-10 rounded-lg flex flex-col items-start justify-between border border-tertiary/20">',
  '<div className="bg-gradient-to-br from-tertiary/20 to-tertiary/5 backdrop-blur-xl p-10 rounded-2xl flex flex-col items-start justify-between border border-tertiary/30 shadow-xl hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl">'
);

// 7. Small Bento Boxes
tsx = tsx.replace(
  /<div className="bg-white p-10 rounded-lg shadow-sm border border-on-surface-variant\/5">/g,
  '<div className="bg-white p-10 rounded-2xl shadow-lg border border-surface-variant hover:-translate-y-2 transition-all duration-500 hover:shadow-xl">'
);

// 8. Stats Section
tsx = tsx.replace(
  '<section className="py-20 academic-gradient text-paper-white">',
  '<section className="py-24 bg-gradient-to-br from-primary via-[#001f66] to-[#000a22] text-white relative overflow-hidden shadow-inner">'
);

// 9. CTA Section
tsx = tsx.replace(
  '<section className="py-24 bg-surface relative overflow-hidden">',
  '<section className="py-32 bg-surface relative overflow-hidden">'
);
tsx = tsx.replace(
  '<a className="bg-primary text-surface px-10 py-4 rounded-lg font-label-lg hover:bg-primary transition-all shadow-lg hover:shadow-xl" href="/admissions">',
  '<a className="bg-gradient-to-r from-primary to-[#0044cc] text-surface px-10 py-4 rounded-full font-bold tracking-wide hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(0,35,111,0.3)]" href="/admissions">'
);
tsx = tsx.replace(
  '<a className="border-2 border-primary text-primary px-10 py-4 rounded-lg font-label-lg hover:bg-primary hover:text-surface transition-all" href="/contact-us">',
  '<a className="border-2 border-primary text-primary px-10 py-4 rounded-full font-bold tracking-wide hover:bg-primary hover:text-surface hover:scale-105 transition-all duration-300 shadow-lg" href="/contact-us">'
);

fs.writeFileSync('src/routes/index.lazy.tsx', tsx);
console.log('Homepage beautified');
