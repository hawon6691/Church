const fs = require('fs');

// 실제 파일 읽기
const filePath = 'tx/1-01창세기.txt';
const data = fs.readFileSync(filePath, 'utf-8');

console.log(`File loaded: ${data.length} characters`);

const lines = data.split(/\r?\n/).filter(line => line.trim());
console.log(`Total lines: ${lines.length}`);

let matchCount = 0;
let failCount = 0;

lines.forEach((line, index) => {
    const match = line.match(/^([가-힣]+)(\d+):(\d+)\s+(.*)$/);
    if (match) {
        matchCount++;
        if (index < 3) {
            console.log(`✓ Line ${index}: ${line.substring(0, 50)}`);
        }
    } else {
        failCount++;
        if (failCount <= 5) {
            console.log(`✗ FAIL Line ${index}: [${line}]`);
            console.log(`  Length: ${line.length}, Char codes: ${line.substring(0, 10).split('').map(c => c.charCodeAt(0)).join(',')}`);
        }
    }
});

console.log(`\nMatched: ${matchCount}, Failed: ${failCount}`);
