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
    
// Replace hero text
aboutHtml = aboutHtml.replace(
    /<h1 class="hero-title">[\s\S]*?<\/h1>/, 
    '<h1 class="hero-title"><span class="hero-title-line"><span class="hero-title-word">About</span></span><span class="hero-title-line"><span class="hero-title-word">Skyom.</span></span></h1>'
);
aboutHtml = aboutHtml.replace(
    /<p class="hero-description">[\s\S]*?<\/p>/,
    '<p class="hero-description">Welcome to Urban Luxurious Living. A visionary blueprint of the future that redefines urban living in Lucknow.</p>'
);
fs.writeFileSync('about.html', aboutHtml);

// PROJECTS.HTML
let projectsHtml = indexHtml
    .replace(s2, '')
    .replace(s4, '')
    .replace(s5, '')
    .replace(s6, '');

projectsHtml = projectsHtml.replace(
    /<h1 class="hero-title">[\s\S]*?<\/h1>/, 
    '<h1 class="hero-title"><span class="hero-title-line"><span class="hero-title-word">Our</span></span><span class="hero-title-line"><span class="hero-title-word">Projects.</span></span></h1>'
);
projectsHtml = projectsHtml.replace(
    /<p class="hero-description">[\s\S]*?<\/p>/,
    '<p class="hero-description">Discover Skyom City in Mohanlalganj, Lucknow — offering Villa Land Options, Residential Plots, and 24+ Landscaped Parks.</p>'
);
fs.writeFileSync('projects.html', projectsHtml);

// VISION.HTML
let visionHtml = indexHtml
    .replace(s2, '')
    .replace(s3, '')
    .replace(s4, '')
    .replace(s6, '');

visionHtml = visionHtml.replace(
    /<h1 class="hero-title">[\s\S]*?<\/h1>/, 
    '<h1 class="hero-title"><span class="hero-title-line"><span class="hero-title-word">Our</span></span><span class="hero-title-line"><span class="hero-title-word">Vision.</span></span></h1>'
);
visionHtml = visionHtml.replace(
    /<p class="hero-description">[\s\S]*?<\/p>/,
    '<p class="hero-description">Sustainable by design, creating future-ready homes where everything is within reach.</p>'
);
fs.writeFileSync('vision.html', visionHtml);

// CONTACT.HTML
let contactHtml = indexHtml
    .replace(s2, '')
    .replace(s3, '')
    .replace(s4, '')
    .replace(s5, '');

contactHtml = contactHtml.replace(
    /<h1 class="hero-title">[\s\S]*?<\/h1>/, 
    '<h1 class="hero-title"><span class="hero-title-line"><span class="hero-title-word">Contact</span></span><span class="hero-title-line"><span class="hero-title-word">Us.</span></span></h1>'
);
contactHtml = contactHtml.replace(
    /<p class="hero-description">[\s\S]*?<\/p>/,
    '<p class="hero-description">Let\'s build your dream. Get in touch with us at our corporate office in Sushant Golf City or visit the site at Mohanlalganj.</p>'
);
fs.writeFileSync('contact.html', contactHtml);

console.log('Pages built successfully.');
