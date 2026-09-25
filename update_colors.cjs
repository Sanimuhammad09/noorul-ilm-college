const fs = require('fs');

let css = fs.readFileSync('src/index.css', 'utf8');
css = css.replace(/#551625/g, '#3c3c94');
css = css.replace(/#390111/g, '#343494');
css = css.replace(/#D3BC7C/g, '#a4a4d0');
css = css.replace(/rgba\(85, 22, 37/g, 'rgba(60, 60, 148');
css = css.replace(/rgba\(211, 188, 124/g, 'rgba(164, 164, 208');
fs.writeFileSync('src/index.css', css);

let tw = fs.readFileSync('tailwind.config.js', 'utf8');

const replacements = {
  '"on-primary-container": "#d37b89"': '"on-primary-container": "#343494"',
  '"inverse-primary": "#ffb2bd"': '"inverse-primary": "#dbdbfa"',
  '"primary-fixed-dim": "#ffb2bd"': '"primary-fixed-dim": "#dbdbfa"',
  '"on-primary-fixed-variant": "#762f3e"': '"on-primary-fixed-variant": "#343494"',
  '"primary-fixed": "#ffd9dd"': '"primary-fixed": "#dbdbfa"',
  '"secondary-fixed-dim": "#dcc584"': '"secondary-fixed-dim": "#a4a4d0"',
  '"on-secondary-container": "#75632c"': '"on-secondary-container": "#3c3c8c"',
  '"secondary-fixed": "#f9e19d"': '"secondary-fixed": "#dbdbfa"',
  '"secondary-container": "#f9e19d"': '"secondary-container": "#dbdbfa"',
  '"secondary": "#6e5d27"': '"secondary": "#5454a4"'
};

for (const [k, v] of Object.entries(replacements)) {
  tw = tw.replace(k, v);
}

fs.writeFileSync('tailwind.config.js', tw);
