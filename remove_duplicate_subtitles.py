import os
import re

def remove_duplicate_subtitles():
    target_dir = 'tx'
    
    # 모든 txt 파일 처리
    for filename in sorted(os.listdir(target_dir)):
        if filename.endswith('.txt') and filename.startswith(('1-', '2-')):
            filepath = os.path.join(target_dir, filename)
            
            # 파일 읽기
            with open(filepath, 'r', encoding='utf-8') as f:
                lines = f.readlines()
            
            fixed_lines = []
            changes = 0
            
            for line in lines:
                original_line = line.rstrip('\n')
                
                # 구절 패턴 매칭
                match = re.match(r'^([가-힣]+\d+:\d+)\s+(.+)$', original_line)
                if match:
                    verse_ref = match.group(1)
                    content = match.group(2)
                    
                    # 중복된 소제목 찾기 (예: <제목> <제목> <제목>)
                    subtitle_pattern = r'(<[^>]+>)\s*'
                    subtitles = re.findall(subtitle_pattern, content)
                    
                    if len(subtitles) > 1:
                        # 첫 번째 소제목만 남기고 나머지 제거
                        first_subtitle = subtitles[0]
                        # 모든 소제목을 제거한 후 본문 추출
                        text_without_subtitles = re.sub(subtitle_pattern, '', content).strip()
                        # 첫 번째 소제목 + 본문으로 재구성
                        new_line = f'{verse_ref} {first_subtitle} {text_without_subtitles}'
                        fixed_lines.append(new_line)
                        changes += 1
                    else:
                        fixed_lines.append(original_line)
                else:
                    fixed_lines.append(original_line)
            
            # 변경사항이 있으면 파일 저장
            if changes > 0:
                with open(filepath, 'w', encoding='utf-8') as f:
                    for line in fixed_lines:
                        f.write(line + '\n')
                print(f'✓ {filename}: {changes}개 중복 소제목 제거')
            else:
                print(f'  {filename}: 중복 없음')

if __name__ == '__main__':
    remove_duplicate_subtitles()
    print('\n모든 파일 처리 완료!')
