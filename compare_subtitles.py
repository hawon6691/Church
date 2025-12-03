import os
import re

def compare_subtitles():
    source_dir = 'tx/정렬전'
    target_dir = 'tx'
    
    all_match = True
    total_files = 0
    total_subtitles_source = 0
    total_subtitles_target = 0
    
    # 모든 txt 파일 처리
    for filename in sorted(os.listdir(source_dir)):
        if filename.endswith('.txt') and filename.startswith(('1-', '2-')):
            source_path = os.path.join(source_dir, filename)
            target_path = os.path.join(target_dir, filename)
            
            if not os.path.exists(target_path):
                print(f'❌ {filename}: 타겟 파일 없음')
                all_match = False
                continue
            
            # 소스 파일에서 소제목 추출
            with open(source_path, 'r', encoding='utf-8-sig') as f:
                source_lines = [line.strip() for line in f if line.strip()]
            
            source_subtitles = {}
            for line in source_lines:
                match = re.match(r'^([가-힣]+\d+:\d+)\s+<([^>]+)>', line)
                if match:
                    verse_ref = match.group(1)
                    subtitle = match.group(2)
                    source_subtitles[verse_ref] = subtitle
            
            # 타겟 파일에서 소제목 추출
            with open(target_path, 'r', encoding='utf-8') as f:
                target_lines = [line.strip() for line in f if line.strip()]
            
            target_subtitles = {}
            for line in target_lines:
                match = re.match(r'^([가-힣]+\d+:\d+)\s+<([^>]+)>', line)
                if match:
                    verse_ref = match.group(1)
                    subtitle = match.group(2)
                    target_subtitles[verse_ref] = subtitle
            
            total_files += 1
            total_subtitles_source += len(source_subtitles)
            total_subtitles_target += len(target_subtitles)
            
            # 비교
            missing = []
            different = []
            
            for verse_ref, source_subtitle in source_subtitles.items():
                if verse_ref not in target_subtitles:
                    missing.append(f'{verse_ref} <{source_subtitle}>')
                elif target_subtitles[verse_ref] != source_subtitle:
                    different.append(f'{verse_ref}: 원본=<{source_subtitle}> vs 타겟=<{target_subtitles[verse_ref]}>')
            
            # 결과 출력
            if len(source_subtitles) == len(target_subtitles) and not missing and not different:
                print(f'✅ {filename}: {len(source_subtitles)}개 소제목 일치')
            else:
                print(f'⚠️  {filename}:')
                print(f'   원본: {len(source_subtitles)}개, 타겟: {len(target_subtitles)}개')
                
                if missing:
                    print(f'   누락된 소제목 ({len(missing)}개):')
                    for m in missing[:5]:  # 처음 5개만
                        print(f'     - {m}')
                    if len(missing) > 5:
                        print(f'     ... 외 {len(missing)-5}개')
                
                if different:
                    print(f'   다른 소제목 ({len(different)}개):')
                    for d in different[:3]:  # 처음 3개만
                        print(f'     - {d}')
                    if len(different) > 3:
                        print(f'     ... 외 {len(different)-3}개')
                
                all_match = False
    
    print('\n' + '='*60)
    print(f'총 {total_files}개 파일 검사 완료')
    print(f'원본 총 소제목: {total_subtitles_source}개')
    print(f'타겟 총 소제목: {total_subtitles_target}개')
    
    if all_match:
        print('✅ 모든 파일의 소제목이 완벽하게 일치합니다!')
    else:
        print('⚠️  일부 파일에 차이가 있습니다.')

if __name__ == '__main__':
    compare_subtitles()
