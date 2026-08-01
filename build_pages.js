const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf-8');

function getSectionRegex(sectionName, nextSectionName) {
    if (nextSectionName) {
        return new RegExp(`<!-- ========== SECTION ${sectionName} ========== -->[\\s\\S]*?(?=<!-- ========== ${nextSectionName} ========== -->)`, 'g');
    } else {
        return new RegExp(`<!-- ========== SECTION ${sectionName} ========== -->[\\s\\S]*?(?=<!-- ========== FOOTER ========== -->)`, 'g');
    }
}

const s2 = getSectionRegex('2: JOURNEY TIMELINE', 'SECTION 3: PROJECTS SHOWCASE');
const s3 = getSectionRegex('3: PROJECTS SHOWCASE', 'SECTION 4: ABOUT');
const s4 = getSectionRegex('4: ABOUT', 'SECTION 5: VISION');
const s5 = getSectionRegex('5: VISION', 'SECTION 6: CONTACT / FOOTER');
const s6 = getSectionRegex('6: CONTACT / FOOTER', 'FOOTER');

// ABOUT.HTML
let aboutHtml = indexHtml
    .replace(s2, '')
    .replace(s3, '')
    .replace(s5, '')
    .replace(s6, '');
    
aboutHtml = aboutHtml.replace(
    /<h1 class="brand-heading">[\s\S]*?<\/h1>/, 
    '<h1 class="brand-heading"><span class="heading-line"><span class="hero-title-word">About</span></span><span class="heading-line accent-gold"><span class="hero-title-word">Skyom.</span></span></h1>'
);
aboutHtml = aboutHtml.replace(
    /<p class="brand-subheading">[\s\S]*?<\/p>/,
    '<p class="brand-subheading">A luxury real estate builder crafting visionary residential townships and estate residences that redefine urban living across India.</p>'
);
fs.writeFileSync('about.html', aboutHtml);

// PROJECTS.HTML
let projectsHtml = indexHtml
    .replace(s2, '')
    .replace(s4, '')
    .replace(s5, '')
    .replace(s6, '');

projectsHtml = projectsHtml.replace(
    /<h1 class="brand-heading">[\s\S]*?<\/h1>/, 
    '<h1 class="brand-heading"><span class="heading-line"><span class="hero-title-word">Our</span></span><span class="heading-line accent-gold"><span class="hero-title-word">Projects.</span></span></h1>'
);
projectsHtml = projectsHtml.replace(
    /<p class="brand-subheading">[\s\S]*?<\/p>/,
    '<p class="brand-subheading">Discover Skyom City in Mohanlalganj, Lucknow — offering Villa Land Options, Residential Plots, and 24+ Landscaped Parks.</p>'
);
fs.writeFileSync('projects.html', projectsHtml);

// VISION.HTML
let visionHtml = indexHtml
    .replace(s2, '')
    .replace(s3, '')
    .replace(s4, '')
    .replace(s6, '');

visionHtml = visionHtml.replace(
    /<h1 class="brand-heading">[\s\S]*?<\/h1>/, 
    '<h1 class="brand-heading"><span class="heading-line"><span class="hero-title-word">Our</span></span><span class="heading-line accent-gold"><span class="hero-title-word">Vision.</span></span></h1>'
);
visionHtml = visionHtml.replace(
    /<p class="brand-subheading">[\s\S]*?<\/p>/,
    '<p class="brand-subheading">Sustainable by design, creating future-ready homes where everything is within reach.</p>'
);
fs.writeFileSync('vision.html', visionHtml);

// CONTACT.HTML
let contactHtml = indexHtml
    .replace(s2, '')
    .replace(s3, '')
    .replace(s4, '')
    .replace(s5, '');

contactHtml = contactHtml.replace(
    /<h1 class="brand-heading">[\s\S]*?<\/h1>/, 
    '<h1 class="brand-heading"><span class="heading-line"><span class="hero-title-word">Contact</span></span><span class="heading-line accent-gold"><span class="hero-title-word">Us.</span></span></h1>'
);
contactHtml = contactHtml.replace(
    /<p class="brand-subheading">[\s\S]*?<\/p>/,
    '<p class="brand-subheading">Let\'s build your dream. Get in touch with us at our corporate office in Sushant Golf City or visit the site at Mohanlalganj.</p>'
);
fs.writeFileSync('contact.html', contactHtml);

console.log('Pages built successfully.');
