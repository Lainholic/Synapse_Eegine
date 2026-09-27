const fs = require('fs');
const path = require('path');

console.log('=== [TouchRP tr/ Local Build Start] ===');

const baseDir = path.resolve(__dirname, '..');
const srcDir = __dirname;
const distDir = path.join(baseDir, 'dist');

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

const indexHtml = fs.readFileSync(path.join(baseDir, 'index.html'), 'utf8');
const styleCss = fs.readFileSync(path.join(baseDir, 'style.css'), 'utf8');
const rpEngine = fs.readFileSync(path.join(srcDir, 'rp_engine.src.js'), 'utf8');
const uiController = fs.readFileSync(path.join(srcDir, 'ui_controller.src.js'), 'utf8');

// 1. Sync dist/
fs.writeFileSync(path.join(distDir, 'rp_engine.js'), rpEngine, 'utf8');
fs.writeFileSync(path.join(distDir, 'ui_controller.js'), uiController, 'utf8');
console.log('✔ dist/rp_engine.js & dist/ui_controller.js 갱신 완료');

// 2. Build Standalone HTML
let standalone = indexHtml;
standalone = standalone.replace('<link rel="stylesheet" href="style.css">', () => `<style>\n${styleCss}\n</style>`);
const inlineScripts = `<script>\n${rpEngine}\n</script>\n<script>\n${uiController}\n</script>`;
standalone = standalone.replace(
  /<script src="dist\/rp_engine\.js"><\/script>\s*<script src="dist\/ui_controller\.js"><\/script>/,
  () => inlineScripts
);

fs.writeFileSync(path.join(baseDir, 'Synapse_Engine.html'), standalone, 'utf8');
console.log(`✔ Synapse_Engine.html 생성 완료 (${(standalone.length / 1024).toFixed(1)} KB)`);

console.log('=== [Build Finished Successfully] ===');
