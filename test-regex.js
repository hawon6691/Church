// 간단한 regex 테스트
const testLines = [
    '창1:1 <천지 창조> 태초에 하나님이 천지를 창조하시니라',
    '창1:2 그 땅이 혼돈하고 공허하며 흑암이 깊음 위에 있고 하나님의 영은 수면 위에 운행하시니라',
    '창1:3 하나님이 이르시되 빛이 있으라 하시니 빛이 있었고'
];

testLines.forEach((line, index) => {
    const match = line.match(/^([가-힣]+)(\d+):(\d+)\s+(.*)$/);
    if (match) {
        console.log(`✓ Line ${index}: Matched!`, match[1], match[2], match[3]);
        const subtitleMatch = match[4].match(/^<([^>]+)>\s*(.*)$/);
        if (subtitleMatch) {
            console.log(`  Subtitle: ${subtitleMatch[1]}`);
            console.log(`  Text: ${subtitleMatch[2]}`);
        } else {
            console.log(`  Text: ${match[4]}`);
        }
    } else {
        console.log(`✗ Line ${index}: No match!`, JSON.stringify(line));
    }
});
