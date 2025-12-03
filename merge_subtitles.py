import os
import re

def merge_subtitles():
    source_dir = 'tx/정렬전'
    target_dir = 'tx'
    
    # 모든 txt 파일 처리
    for filename in os.listdir(source_dir):
        if filename.endswith('.txt') and filename.startswith(('1-', '2-')):
            source_path = os.path.join(source_dir, filename)
            target_path = os.path.join(target_dir, filename)
            
            # 소스 파일 읽기 (소제목 있음)
            with open(source_path, 'r', encoding='utf-8-sig') as f:
                source_lines = [line.strip() for line in f if line.strip()]
            
            # 타겟 파일 읽기 (소제목 없음)
            if not os.path.exists(target_path):
                print(f'건너뜀: {filename} (타겟 파일 없음)')
                continue
                
            with open(target_path, 'r', encoding='utf-8') as f:
                target_lines = [line.strip() for line in f if line.strip()]
            
            # 소스에서 소제목만 추출 (verse_ref -> subtitle)
            subtitle_map = {}
            for line in source_lines:
                # 소제목 있는 경우
                match = re.match(r'^([가-힣]+\d+:\d+)\s+<([^>]+)>', line)
                if match:
                    verse_ref = match.group(1)
                    subtitle = match.group(2)
                    subtitle_map[verse_ref] = subtitle
            
            # 타겟 라인에 소제목 추가
            merged_lines = []
            for line in target_lines:
                match = re.match(r'^([가-힣]+\d+:\d+)\s+(.+)$', line)
                if match:
                    verse_ref = match.group(1)
                    text = match.group(2)
                    
                    # 소제목이 있으면 추가
                    if verse_ref in subtitle_map:
                        subtitle = subtitle_map[verse_ref]
                        merged_lines.append(f'{verse_ref} <{subtitle}> {text}')
                    else:
                        merged_lines.append(line)
                else:
                    merged_lines.append(line)
            
            # 정렬 (장:절 순서)
            merged_lines.sort(key=lambda x: (
                int(re.match(r'^[가-힣]+(\d+):(\d+)', x).group(1)),
                int(re.match(r'^[가-힣]+(\d+):(\d+)', x).group(2))
            ) if re.match(r'^[가-힣]+(\d+):(\d+)', x) else (0, 0))
            
            # 타겟 파일에 저장
            with open(target_path, 'w', encoding='utf-8') as f:
                for line in merged_lines:
                    f.write(line + '\n')
            
            print(f'완료: {filename} ({len(merged_lines)}개 구절, {len(subtitle_map)}개 소제목)')

if __name__ == '__main__':
    merge_subtitles()
    print('\n모든 파일 병합 완료!')
