const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dirPath = path.join(__dirname, 'assets');
const htmlDirPath = __dirname;

async function processDirectory(directory) {
    const files = fs.readdirSync(directory);
    for (const file of files) {
        const fullPath = path.join(directory, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            await processDirectory(fullPath);
        } else if (stat.isFile() && /\.(png|jpe?g)$/i.test(file)) {
            const ext = path.extname(file);
            const webpPath = fullPath.replace(new RegExp(`${ext}$`, 'i'), '.webp');
            
            console.log(`Converting ${fullPath} to ${webpPath}...`);
            try {
                await sharp(fullPath).webp({ quality: 80 }).toFile(webpPath);
                fs.unlinkSync(fullPath); // remove old file
                console.log(`Converted and removed original: ${file}`);
            } catch (err) {
                console.error(`Failed to convert ${file}:`, err);
            }
        }
    }
}

function updateHtmlFiles(directory) {
    const files = fs.readdirSync(directory);
    for (const file of files) {
        const fullPath = path.join(directory, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory() && file !== 'node_modules' && file !== '.git') {
            updateHtmlFiles(fullPath);
        } else if (stat.isFile() && file.endsWith('.html')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            const originalContent = content;
            
            // replace .png, .jpg, .jpeg with .webp in src and href attributes, or backgrounds
            content = content.replace(/\.(png|jpe?g)/gi, '.webp');
            
            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated HTML file: ${file}`);
            }
        }
    }
}

async function run() {
    console.log("Starting conversion...");
    await processDirectory(dirPath);
    console.log("Image conversion complete.");
    
    console.log("Updating HTML files...");
    updateHtmlFiles(htmlDirPath);
    
    // Also update style.css
    const cssPath = path.join(htmlDirPath, 'style.css');
    if (fs.existsSync(cssPath)) {
        let cssContent = fs.readFileSync(cssPath, 'utf8');
        const origCssContent = cssContent;
        cssContent = cssContent.replace(/\.(png|jpe?g)/gi, '.webp');
        if (cssContent !== origCssContent) {
            fs.writeFileSync(cssPath, cssContent, 'utf8');
            console.log("Updated style.css");
        }
    }
    
    // Also update script.js just in case
    const jsPath = path.join(htmlDirPath, 'script.js');
    if (fs.existsSync(jsPath)) {
        let jsContent = fs.readFileSync(jsPath, 'utf8');
        const origJsContent = jsContent;
        jsContent = jsContent.replace(/\.(png|jpe?g)/gi, '.webp');
        if (jsContent !== origJsContent) {
            fs.writeFileSync(jsPath, jsContent, 'utf8');
            console.log("Updated script.js");
        }
    }

    console.log("All done!");
}

run();
