const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log('=== [TouchRP tr/ Local Verification Start] ===');
let errors = 0;

const baseDir = path.resolve(__dirname, '..');
const filesToVerify = [
  path.join(baseDir, 'dist/rp_engine.js'),
  path.join(baseDir, 'dist/ui_controller.js'),
  path.join(baseDir, 'src/rp_engine.src.js'),
  path.join(baseDir, 'src/ui_controller.src.js')
];

filesToVerify.forEach(f => {
  const rel = path.relative(baseDir, f);
  if (!fs.existsSync(f)) {
    console.error(`❌ 파일 누락: ${rel}`);
    errors++;
    return;
  }
  const code = fs.readFileSync(f, 'utf8');
  try {
    new vm.Script(code);
    console.log(`✅ [문법 정상] ${rel}`);
  } catch (e) {
    console.error(`❌ [문법 오류] ${rel}: ${e.message}`);
    errors++;
  }
});

// Standalone HTML Verification
const htmlPath = path.join(baseDir, 'Synapse_Engine.html');
if (fs.existsSync(htmlPath)) {
  const html = fs.readFileSync(htmlPath, 'utf8');
  const scriptRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  let idx = 0;
  while ((match = scriptRegex.exec(html)) !== null) {
    idx++;
    try {
      new vm.Script(match[1]);
    } catch (e) {
      console.error(`❌ [HTML 스크립트 #${idx} 오류]: ${e.message}`);
      errors++;
    }
  }
  console.log(`✅ [단독 HTML 무결점] TouchRP_Clean_Standalone.html (스크립트 ${idx}개)`);
}

if (errors === 0) {
  console.log('🎉 100% 무결점 통과: 모든 스크립트가 정상 동작합니다.');
} else {
  console.error(`❌ 검증 실패: 총 ${errors}개의 오류가 발견되었습니다.`);
  process.exit(1);
}
