$(document).ready(function() {
    // 전체 성경 목록 (66권) - 최대 장 수 포함
    const bibleBooks = [
        { num: '1-01', name: '창세기', chapters: 50 },
        { num: '1-02', name: '출애굽기', chapters: 40 },
        { num: '1-03', name: '레위기', chapters: 27 },
        { num: '1-04', name: '민수기', chapters: 36 },
        { num: '1-05', name: '신명기', chapters: 34 },
        { num: '1-06', name: '여호수아', chapters: 24 },
        { num: '1-07', name: '사사기', chapters: 21 },
        { num: '1-08', name: '룻기', chapters: 4 },
        { num: '1-09', name: '사무엘상', chapters: 31 },
        { num: '1-10', name: '사무엘하', chapters: 24 },
        { num: '1-11', name: '열왕기상', chapters: 22 },
        { num: '1-12', name: '열왕기하', chapters: 25 },
        { num: '1-13', name: '역대상', chapters: 29 },
        { num: '1-14', name: '역대하', chapters: 36 },
        { num: '1-15', name: '에스라', chapters: 10 },
        { num: '1-16', name: '느헤미야', chapters: 13 },
        { num: '1-17', name: '에스더', chapters: 10 },
        { num: '1-18', name: '욥기', chapters: 42 },
        { num: '1-19', name: '시편', chapters: 150 },
        { num: '1-20', name: '잠언', chapters: 31 },
        { num: '1-21', name: '전도서', chapters: 12 },
        { num: '1-22', name: '아가', chapters: 8 },
        { num: '1-23', name: '이사야', chapters: 66 },
        { num: '1-24', name: '예레미야', chapters: 52 },
        { num: '1-25', name: '예레미아애가', chapters: 5 },
        { num: '1-26', name: '에스겔', chapters: 48 },
        { num: '1-27', name: '다니엘', chapters: 12 },
        { num: '1-28', name: '호세아', chapters: 14 },
        { num: '1-29', name: '요엘', chapters: 3 },
        { num: '1-30', name: '아모스', chapters: 9 },
        { num: '1-31', name: '오바댜', chapters: 1 },
        { num: '1-32', name: '요나', chapters: 4 },
        { num: '1-33', name: '미가', chapters: 7 },
        { num: '1-34', name: '나훔', chapters: 3 },
        { num: '1-35', name: '하박국', chapters: 3 },
        { num: '1-36', name: '스바냐', chapters: 3 },
        { num: '1-37', name: '학개', chapters: 2 },
        { num: '1-38', name: '스가랴', chapters: 14 },
        { num: '1-39', name: '말라기', chapters: 4 },
        { num: '2-01', name: '마태복음', chapters: 28 },
        { num: '2-02', name: '마가복음', chapters: 16 },
        { num: '2-03', name: '누가복음', chapters: 24 },
        { num: '2-04', name: '요한복음', chapters: 21 },
        { num: '2-05', name: '사도행전', chapters: 28 },
        { num: '2-06', name: '로마서', chapters: 16 },
        { num: '2-07', name: '고린도전서', chapters: 16 },
        { num: '2-08', name: '고린도후서', chapters: 13 },
        { num: '2-09', name: '갈라디아서', chapters: 6 },
        { num: '2-10', name: '에베소서', chapters: 6 },
        { num: '2-11', name: '빌립보서', chapters: 4 },
        { num: '2-12', name: '골로새서', chapters: 4 },
        { num: '2-13', name: '데살로니가전서', chapters: 5 },
        { num: '2-14', name: '데살로니가후서', chapters: 3 },
        { num: '2-15', name: '디모데전서', chapters: 6 },
        { num: '2-16', name: '디모데후서', chapters: 4 },
        { num: '2-17', name: '디도서', chapters: 3 },
        { num: '2-18', name: '빌레몬서', chapters: 1 },
        { num: '2-19', name: '히브리서', chapters: 13 },
        { num: '2-20', name: '야고보서', chapters: 5 },
        { num: '2-21', name: '베드로전서', chapters: 5 },
        { num: '2-22', name: '베드로후서', chapters: 3 },
        { num: '2-23', name: '요한일서', chapters: 5 },
        { num: '2-24', name: '요한이서', chapters: 1 },
        { num: '2-25', name: '요한삼서', chapters: 1 },
        { num: '2-26', name: '유다서', chapters: 1 },
        { num: '2-27', name: '요한계시록', chapters: 22 }
    ];

    let currentBibleData = null;
    let currentBook = '';
    let currentBookInfo = null;

    // 성경책 목록 초기화
    function initBibleBooks() {
        const $select = $('#bibleBook');
        $select.empty();
        $select.append('<option value="">성경책을 선택하세요</option>');
        
        bibleBooks.forEach(book => {
            $select.append(`<option value="${book.num}" data-name="${book.name}" data-chapters="${book.chapters}">${book.name}</option>`);
        });
    }
    
    // 성경책 선택 시 장 입력 필드 업데이트
    $('#bibleBook').on('change', function() {
        const bookNum = $(this).val();
        if (bookNum) {
            currentBookInfo = bibleBooks.find(b => b.num === bookNum);
            const bookName = $(this).find('option:selected').data('name');
            $('#chapterInput').attr('max', currentBookInfo.chapters);
            $('#chapterInput').attr('placeholder', `1-${currentBookInfo.chapters}`);
            $('#verseInput').val('');
            $('#verseInput').attr('max', '');
            $('#verseInput').attr('placeholder', '절 번호');
            
            // 성경 파일 로드
            loadBibleText(bookNum, bookName);
        } else {
            currentBookInfo = null;
            currentBibleData = null;
            $('#chapterInput').attr('max', '');
            $('#chapterInput').attr('placeholder', '장 번호');
            $('#verseInput').attr('max', '');
            $('#verseInput').attr('placeholder', '절 번호');
            $('#bibleContent').html(`
                <div class="text-center py-5">
                    <div class="mb-3" style="font-size: 4rem;">📖</div>
                    <h5 class="text-muted">위에서 성경책을 선택하세요</h5>
                    <p class="text-muted">장/절을 비워두면 전체 책을 볼 수 있습니다</p>
                </div>
            `);
        }
    });

    // 장별 최대 절 수 계산
    function getMaxVerseInChapter(chapter) {
        if (!currentBibleData || !chapter) return 0;
        
        const lines = currentBibleData.split(/\r?\n/).filter(line => line.trim());
        let maxVerse = 0;
        
        lines.forEach(line => {
            const match = line.match(/^[가-힣]+(\d+):(\d+)\s+/);
            if (match && parseInt(match[1]) === parseInt(chapter)) {
                const verse = parseInt(match[2]);
                if (verse > maxVerse) maxVerse = verse;
            }
        });
        
        return maxVerse;
    }
    
    // 장 입력 시 절 입력 필드 업데이트
    $('#chapterInput').on('input', function() {
        const chapter = $(this).val();
        if (chapter && currentBibleData) {
            const maxVerse = getMaxVerseInChapter(chapter);
            if (maxVerse > 0) {
                $('#verseInput').attr('max', maxVerse);
                $('#verseInput').attr('placeholder', `1-${maxVerse}`);
            }
        }
    });

    // 성경 텍스트 로드
    function loadBibleText(bookNum, bookName) {
        const filePath = `/tx/${bookNum}${bookName}.txt`;
        
        console.log('Loading:', filePath);
        
        $.ajax({
            url: filePath,
            dataType: 'text',
            success: function(data) {
                console.log('Data loaded, length:', data.length);
                currentBibleData = data;
                currentBook = bookName;
                displayBibleContent(data, bookName);
            },
            error: function(xhr, status, error) {
                console.error('Error loading:', filePath, status, error);
                $('#bibleContent').html(`
                    <div class="alert alert-danger">
                        <i class="bi bi-exclamation-triangle"></i>
                        성경 파일을 불러올 수 없습니다: ${filePath}
                        <br>오류: ${status}
                    </div>
                `);
            }
        });
    }

    // 성경 본문 표시
    function displayBibleContent(data, bookName, chapter = null, verse = null) {
        console.log('displayBibleContent called:', bookName, 'chapter:', chapter, 'verse:', verse);
        console.log('Data length:', data ? data.length : 0);
        
        const lines = data.split(/\r?\n/).filter(line => line.trim());
        console.log('Total lines:', lines.length);
        console.log('First 3 lines:', lines.slice(0, 3));
        
        let html = '';
        let filteredLines = lines;

        // 장/절 필터링
        if (chapter) {
            const chapterStr = String(chapter);
            if (verse) {
                // 특정 장절만 표시
                const versePattern = new RegExp(`^[가-힣]+${chapterStr}:${verse}\\s`);
                filteredLines = lines.filter(line => versePattern.test(line));
            } else {
                // 특정 장 전체 표시
                const chapterPattern = new RegExp(`^[가-힣]+${chapterStr}:`);
                filteredLines = lines.filter(line => chapterPattern.test(line));
            }
        }
        
        console.log('Filtered lines:', filteredLines.length);

        // 제목 업데이트
        let title = bookName;
        if (chapter && verse) {
            title = `${bookName} ${chapter}장 ${verse}절`;
        } else if (chapter) {
            title = `${bookName} ${chapter}장`;
        }
        $('#bibleTitle').html(`<i class="bi bi-book"></i> ${title}`);

        // HTML 생성
        if (filteredLines.length === 0) {
            html = `
                <div class="alert alert-warning">
                    <i class="bi bi-info-circle"></i>
                    해당 장절을 찾을 수 없습니다.
                </div>
            `;
        } else {
            let lastChapter = null;
            
            filteredLines.forEach((line, index) => {
                // 빈 줄 건너뛰기
                if (!line.trim()) {
                    return;
                }
                
                // 형식: 창1:1 <소제목> 본문 또는 창1:1 본문
                const match = line.match(/^([가-힣]+)(\d+):(\d+)\s+(.*)$/);
                if (match) {
                    const [, book, chap, ver, rest] = match;
                    
                    // 소제목과 본문 분리
                    let subtitle = '';
                    let text = rest;
                    const subtitleMatch = rest.match(/^<([^>]+)>\s*(.*)$/);
                    if (subtitleMatch) {
                        subtitle = subtitleMatch[1];
                        text = subtitleMatch[2];
                    }
                    
                    // 새 장이 시작되면 제목 추가
                    if (lastChapter !== chap && !chapter) {
                        html += `<h5 class="text-primary mt-4 mb-3 border-bottom pb-2">${book} ${chap}장</h5>`;
                        lastChapter = chap;
                    }
                    
                    // 소제목이 있으면 추가
                    if (subtitle) {
                        html += `<h6 class="text-primary mt-3 mb-2">${subtitle}</h6>`;
                    }
                    
                    html += `
                        <div class="verse-line mb-2">
                            <span class="verse-num badge bg-primary me-2">${chap}:${ver}</span>
                            <span class="verse-text">${text}</span>
                        </div>
                    `;
                } else {
                    // 매칭 실패한 줄도 표시 (디버깅용)
                    console.log('Failed to match line (index ' + index + ', length ' + line.length + '):', JSON.stringify(line.substring(0, 100)));
                    console.log('First 10 char codes:', line.substring(0, 10).split('').map(c => c.charCodeAt(0)).join(','));
                }
            });
        }
        
        console.log('Generated HTML length:', html.length);
        $('#bibleContent').html(html);
    }

    // 텍스트 검색
    function searchText(keyword) {
        if (!currentBibleData || !keyword.trim()) {
            alert('검색어를 입력하세요');
            return;
        }

        const lines = currentBibleData.split(/\r?\n/).filter(line => line.trim());
        const filteredLines = lines.filter(line => line.includes(keyword));

        $('#bibleTitle').html(`<i class="bi bi-search"></i> "${keyword}" 검색 결과 (${filteredLines.length}개)`);

        if (filteredLines.length === 0) {
            $('#bibleContent').html(`
                <div class="alert alert-info">
                    <i class="bi bi-info-circle"></i>
                    "${keyword}"에 대한 검색 결과가 없습니다.
                </div>
            `);
            return;
        }

        let html = '';
        filteredLines.forEach(line => {
            const match = line.match(/^([가-힣]+)(\d+):(\d+)\s+(.+)$/);
            if (match) {
                const [, book, chap, ver, rest] = match;
                
                // 소제목 제거하고 본문만 추출
                let text = rest;
                const subtitleMatch = rest.match(/^<[^>]+>\s*(.*)$/);
                if (subtitleMatch) {
                    text = subtitleMatch[1];
                }
                
                // 검색어 하이라이트
                const highlightedText = text.replace(
                    new RegExp(keyword, 'gi'), 
                    `<mark class="bg-warning">${keyword}</mark>`
                );
                
                html += `
                    <div class="verse-line mb-3 p-3 border-start border-primary border-3">
                        <div class="mb-1">
                            <span class="badge bg-secondary">${currentBook} ${chap}:${ver}</span>
                        </div>
                        <div class="verse-text">${highlightedText}</div>
                    </div>
                `;
            }
        });

        $('#bibleContent').html(html);
    }

    // 이벤트 핸들러
    $('#bibleBook').on('change', function() {
        const bookNum = $(this).val();
        const bookName = $(this).find('option:selected').text();
        
        if (bookNum) {
            $('#chapterInput').val('');
            $('#verseInput').val('');
            loadBibleText(bookNum, bookName);
        }
    });

    $('#searchBtn').on('click', function() {
        const bookNum = $('#bibleBook').val();
        const chapter = $('#chapterInput').val();
        const verse = $('#verseInput').val();

        if (!bookNum) {
            alert('먼저 성경책을 선택하세요');
            return;
        }

        if (currentBibleData) {
            const bookName = $('#bibleBook option:selected').data('name');
            displayBibleContent(currentBibleData, bookName, chapter, verse);
        }
    });

    $('#searchText').on('keypress', function(e) {
        if (e.which === 13) { // Enter 키
            const keyword = $(this).val();
            searchText(keyword);
        }
    });

    // 초기화
    initBibleBooks();
});
