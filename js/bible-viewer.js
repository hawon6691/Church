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
    let currentRawData = []; // 범위/다중 선택 시 검색용 원본 데이터
    
    // 캐싱 시스템
    const bibleCache = {}; // 로드된 성경 파일 캐시
    let searchTimeout = null; // 디바운싱용

    // 성경책 목록 초기화
    function initBibleBooks(filterText = '') {
        const $select = $('#bibleBook');
        $select.empty();
        
        const filter = filterText.toLowerCase().trim();
        let hasResults = false;
        
        if (!filter) {
            $select.append('<option value="">성경책을 선택하세요</option>');
        }
        
        bibleBooks.forEach((book, index) => {
            // 필터링
            if (filter && !book.name.toLowerCase().includes(filter)) {
                return;
            }
            
            hasResults = true;
            
            // 신약 시작 전에 구분선 추가 (필터링 없을 때만)
            if (!filter && index === 39) { // 말라기 다음, 마태복음 전
                $select.append('<option disabled>━━━━━━━━━━━━━━━━━━━━</option>');
            }
            $select.append(`<option value="${book.num}" data-name="${book.name}" data-chapters="${book.chapters}">${book.name}</option>`);
        });
        
        if (!hasResults && filter) {
            $select.append('<option disabled>검색 결과 없음</option>');
        }
    }
    
    // 성경책 검색 및 범위 입력 기능 (디바운싱 적용)
    $('#bookSearch').on('input', function() {
        const searchText = $(this).val().trim();
        
        // 범위 입력 감지 (예: "창세기-출애굽기")
        if (searchText.includes('-')) {
            const parts = searchText.split('-');
            if (parts.length === 2) {
                const startBook = parts[0].trim();
                const endBook = parts[1].trim();
                
                // 시작과 끝 책 찾기
                const startIndex = bibleBooks.findIndex(b => b.name.includes(startBook));
                const endIndex = bibleBooks.findIndex(b => b.name.includes(endBook));
                
                if (startIndex !== -1 && endIndex !== -1 && startIndex <= endIndex) {
                    // 범위의 모든 책 선택
                    loadBookRange(startIndex, endIndex);
                    return;
                }
            }
        }
        
        initBibleBooks(searchText);
    });
    
    // 책 범위 로드
    function loadBookRange(startIndex, endIndex) {
        const selectedBooks = bibleBooks.slice(startIndex, endIndex + 1);
        
        // 제목 업데이트
        $('#bibleTitle').html(`<i class="bi bi-book text-white"></i> <span class="text-white">${selectedBooks[0].name} ~ ${selectedBooks[selectedBooks.length-1].name}</span>`);
        
        // 로딩 표시
        $('#bibleContent').html('<div class="text-center py-5"><div class="spinner-border text-primary" role="status"></div><p class="mt-3">로딩 중...</p></div>');
        
        // 병렬 처리를 위한 Promise 배열
        const loadPromises = selectedBooks.map((book, index) => {
            const cacheKey = `${book.num}${book.name}`;
            
            if (bibleCache[cacheKey]) {
                // 캐시된 데이터는 즉시 Promise로 반환
                return Promise.resolve({ data: bibleCache[cacheKey], book, index });
            } else {
                // 새로운 데이터는 AJAX로 로드
                return new Promise((resolve, reject) => {
                    $.ajax({
                        url: `/tx/${book.num}${book.name}.txt`,
                        dataType: 'text',
                        success: function(data) {
                            bibleCache[cacheKey] = data;
                            resolve({ data, book, index });
                        },
                        error: function() {
                            reject({ book, index });
                        }
                    });
                });
            }
        });
        
        // 모든 파일 로드 완료 후 한 번에 처리
        Promise.allSettled(loadPromises).then(results => {
            const bookContents = [];
            const rawDataParts = [];
            
            results.forEach(result => {
                if (result.status === 'fulfilled') {
                    const { data, book, index } = result.value;
                    const lines = data.split(/\r?\n/).filter(line => line.trim());
                    rawDataParts[index] = lines;
                    
                    const isNewTestament = book.num.startsWith('2-');
                    const colorClass = isNewTestament ? 'text-danger' : 'text-primary';
                    const badgeClass = isNewTestament ? 'bg-danger' : 'bg-primary';
                    
                    let html = `<h3 class="${colorClass} mt-5 mb-4 border-bottom pb-3">${book.name}</h3>`;
                    
                    let lastChapter = null;
                    lines.forEach(line => {
                        const match = line.match(/^([가-힣]+)(\d+):(\d+)\s+(.*)$/);
                        if (match) {
                            const [, bookAbbr, chap, ver, rest] = match;
                            
                            let subtitle = '';
                            let text = rest;
                            const subtitleMatch = rest.match(/^<([^>]+)>\s*(.*)$/);
                            if (subtitleMatch) {
                                subtitle = subtitleMatch[1];
                                text = subtitleMatch[2];
                            }
                            
                            if (lastChapter !== chap) {
                                html += `<h5 class="${colorClass} mt-4 mb-3 border-bottom pb-2">${bookAbbr} ${chap}장</h5>`;
                                lastChapter = chap;
                            }
                            
                            if (subtitle) {
                                html += `<h6 class="${colorClass} mt-3 mb-2">${subtitle}</h6>`;
                            }
                            
                            html += `
                                <div class="verse-line mb-2">
                                    <span class="verse-num badge ${badgeClass} me-2">${chap}:${ver}</span>
                                    <span class="verse-text">${text}</span>
                                </div>
                            `;
                        }
                    });
                    
                    bookContents[index] = html;
                } else {
                    const { book, index } = result.reason;
                    bookContents[index] = `<div class="alert alert-danger">불러오기 실패: ${book.name}</div>`;
                }
            });
            
            // 한 번에 렌더링
            $('#bibleContent').html(bookContents.join(''));
            
            // Raw Data 병합
            currentRawData = [];
            rawDataParts.forEach(parts => {
                if (parts) currentRawData.push(...parts);
            });
            currentBibleData = currentRawData.join('\n');
            currentBookInfo = { num: 'range', name: `${selectedBooks[0].name}~${selectedBooks[selectedBooks.length-1].name}` };
        });
    }    // 전체보기 버튼
    $('#showAllBtn').on('click', function() {
        // 선택 해제
        $('#bibleBook').val('');
        currentBibleData = null;
        currentBookInfo = null;
        
        // 입력 필드 초기화
        $('#chapterInput').val('').attr('max', '').attr('placeholder', '장 번호 또는 범위(예: 1-3)');
        $('#verseInput').val('').attr('max', '').attr('placeholder', '절 번호 또는 범위(예: 16-17)').prop('disabled', false);
        $('#bookSearch').val('');
        initBibleBooks();
        
        // 제목 업데이트
        $('#bibleTitle').html('<i class="bi bi-book text-white"></i> <span class="text-white">전체 성경 - 검색어를 입력하세요</span>');
        
        // 안내 메시지 표시
        $('#bibleContent').html(`
            <div class="text-center py-5">
                <div class="mb-3" style="font-size: 4rem;">📖</div>
                <h5 class="text-muted">전체 성경 검색 모드</h5>
                <p class="text-muted">아래 검색창에 단어를 입력하고 Enter를 누르면<br>전체 66권 성경에서 검색합니다</p>
            </div>
        `);
        
        // 버튼 활성화 표시
        $(this).addClass('active');
    });
    
    // 성경책 선택 시 장 입력 필드 업데이트
    $('#bibleBook').on('change', function() {
        const selectedOptions = $(this).val();
        
        // 배열인 경우 (multiple select)
        if (Array.isArray(selectedOptions) && selectedOptions.length > 0) {
            // 전체보기 버튼 비활성화
            $('#showAllBtn').removeClass('active');
            
            if (selectedOptions.length === 1) {
                // 단일 선택
                const bookNum = selectedOptions[0];
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
                // 다중 선택 - 범위 확인
                const indices = selectedOptions.map(num => bibleBooks.findIndex(b => b.num === num)).sort((a, b) => a - b);
                const startIndex = indices[0];
                const endIndex = indices[indices.length - 1];
                
                // 연속된 범위인지 확인
                let isContinuous = true;
                for (let i = startIndex; i <= endIndex; i++) {
                    if (!indices.includes(i)) {
                        isContinuous = false;
                        break;
                    }
                }
                
                if (isContinuous) {
                    loadBookRange(startIndex, endIndex);
                } else {
                    // 비연속 선택된 책들만 로드
                    const selectedBooks = indices.map(i => bibleBooks[i]);
                    loadMultipleBooks(selectedBooks);
                }
            }
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
    
    // 다중 책 로드 (비연속)
    function loadMultipleBooks(books) {
        const bookNames = books.map(b => b.name).join(', ');
        $('#bibleTitle').html(`<i class="bi bi-book text-white"></i> <span class="text-white">${bookNames}</span>`);
        
        $('#bibleContent').html('<div class="text-center py-5"><div class="spinner-border text-primary" role="status"></div><p class="mt-3">로딩 중...</p></div>');
        
        // 병렬 처리를 위한 Promise 배열
        const loadPromises = books.map((book, index) => {
            const cacheKey = `${book.num}${book.name}`;
            
            if (bibleCache[cacheKey]) {
                return Promise.resolve({ data: bibleCache[cacheKey], book, index });
            } else {
                return new Promise((resolve, reject) => {
                    $.ajax({
                        url: `/tx/${book.num}${book.name}.txt`,
                        dataType: 'text',
                        success: function(data) {
                            bibleCache[cacheKey] = data;
                            resolve({ data, book, index });
                        },
                        error: function() {
                            reject({ book, index });
                        }
                    });
                });
            }
        });
        
        Promise.allSettled(loadPromises).then(results => {
            const bookContents = [];
            const rawDataParts = [];
            
            results.forEach(result => {
                if (result.status === 'fulfilled') {
                    const { data, book, index } = result.value;
                    const lines = data.split(/\r?\n/).filter(line => line.trim());
                    rawDataParts[index] = lines;
                    
                    const isNewTestament = book.num.startsWith('2-');
                    const colorClass = isNewTestament ? 'text-danger' : 'text-primary';
                    const badgeClass = isNewTestament ? 'bg-danger' : 'bg-primary';
                    
                    let html = `<h3 class="${colorClass} mt-5 mb-4 border-bottom pb-3">${book.name}</h3>`;
                    
                    let lastChapter = null;
                    lines.forEach(line => {
                        const match = line.match(/^([가-힣]+)(\d+):(\d+)\s+(.*)$/);
                        if (match) {
                            const [, bookAbbr, chap, ver, rest] = match;
                            
                            let subtitle = '';
                            let text = rest;
                            const subtitleMatch = rest.match(/^<([^>]+)>\s*(.*)$/);
                            if (subtitleMatch) {
                                subtitle = subtitleMatch[1];
                                text = subtitleMatch[2];
                            }
                            
                            if (lastChapter !== chap) {
                                html += `<h5 class="${colorClass} mt-4 mb-3 border-bottom pb-2">${bookAbbr} ${chap}장</h5>`;
                                lastChapter = chap;
                            }
                            
                            if (subtitle) {
                                html += `<h6 class="${colorClass} mt-3 mb-2">${subtitle}</h6>`;
                            }
                            
                            html += `
                                <div class="verse-line mb-2">
                                    <span class="verse-num badge ${badgeClass} me-2">${chap}:${ver}</span>
                                    <span class="verse-text">${text}</span>
                                </div>
                            `;
                        }
                    });
                    
                    bookContents[index] = html;
                } else {
                    const { book, index } = result.reason;
                    bookContents[index] = `<div class="alert alert-danger">불러오기 실패: ${book.name}</div>`;
                }
            });
            
            $('#bibleContent').html(bookContents.join(''));
            
            currentRawData = [];
            rawDataParts.forEach(parts => {
                if (parts) currentRawData.push(...parts);
            });
            currentBibleData = currentRawData.join('\n');
            currentBookInfo = { num: 'multiple', name: bookNames };
        });
    }

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
        const chapter = $(this).val().trim();
        
        // 장 범위 입력 시 절 입력 비활성화
        if (chapter.includes('-')) {
            $('#verseInput').prop('disabled', true);
            $('#verseInput').val('');
            $('#verseInput').attr('placeholder', '장 범위 선택 시 비활성화');
        } else {
            $('#verseInput').prop('disabled', false);
            
            if (chapter && currentBibleData) {
                const maxVerse = getMaxVerseInChapter(chapter);
                if (maxVerse > 0) {
                    $('#verseInput').attr('max', maxVerse);
                    $('#verseInput').attr('placeholder', `1-${maxVerse} 또는 범위(예: 16-17)`);
                }
            } else {
                $('#verseInput').attr('placeholder', '절 번호 또는 범위');
            }
        }
    });

    // 성경 텍스트 로드
    function loadBibleText(bookNum, bookName) {
        const cacheKey = `${bookNum}${bookName}`;
        
        // 캐시에 있으면 즉시 반환
        if (bibleCache[cacheKey]) {
            currentBibleData = bibleCache[cacheKey];
            currentBook = bookName;
            displayBibleContent(bibleCache[cacheKey], bookName);
            return;
        }
        
        const filePath = `/tx/${bookNum}${bookName}.txt`;
        
        $.ajax({
            url: filePath,
            dataType: 'text',
            success: function(data) {
                bibleCache[cacheKey] = data; // 캐시에 저장
                currentBibleData = data;
                currentBook = bookName;
                displayBibleContent(data, bookName);
            },
            error: function(xhr, status, error) {
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
        // 신약 여부 판단 (bookNum이 2-로 시작하면 신약)
        const isNewTestament = currentBookInfo && currentBookInfo.num.startsWith('2-');
        const colorClass = isNewTestament ? 'text-danger' : 'text-primary';
        const badgeClass = isNewTestament ? 'bg-danger' : 'bg-primary';
        
        const lines = data.split(/\r?\n/).filter(line => line.trim());
        
        let html = '';
        let filteredLines = lines;

        // 장/절 필터링 (범위 지원)
        if (chapter) {
            const chapterStr = String(chapter).trim();
            
            // 장 범위 처리 (예: "1-3")
            if (chapterStr.includes('-')) {
                const [startChap, endChap] = chapterStr.split('-').map(s => parseInt(s.trim()));
                if (!isNaN(startChap) && !isNaN(endChap)) {
                    filteredLines = lines.filter(line => {
                        const match = line.match(/^[가-힣]+(\d+):/);
                        if (match) {
                            const chap = parseInt(match[1]);
                            return chap >= startChap && chap <= endChap;
                        }
                        return false;
                    });
                }
            } else if (verse) {
                const verseStr = String(verse).trim();
                
                // 절 범위 처리 (예: "16-17")
                if (verseStr.includes('-')) {
                    const [startVerse, endVerse] = verseStr.split('-').map(s => parseInt(s.trim()));
                    if (!isNaN(startVerse) && !isNaN(endVerse)) {
                        filteredLines = lines.filter(line => {
                            const match = line.match(/^[가-힣]+(\d+):(\d+)\s/);
                            if (match && parseInt(match[1]) === parseInt(chapterStr)) {
                                const ver = parseInt(match[2]);
                                return ver >= startVerse && ver <= endVerse;
                            }
                            return false;
                        });
                    }
                } else {
                    // 특정 장절만 표시
                    const versePattern = new RegExp(`^[가-힣]+${chapterStr}:${verseStr}\\s`);
                    filteredLines = lines.filter(line => versePattern.test(line));
                }
            } else {
                // 특정 장 전체 표시
                const chapterPattern = new RegExp(`^[가-힣]+${chapterStr}:`);
                filteredLines = lines.filter(line => chapterPattern.test(line));
            }
        }
        
        console.log('Filtered lines:', filteredLines.length);

        // 제목 업데이트 (헤더는 흰색 유지, 범위 표시)
        let title = bookName;
        if (chapter && verse) {
            const verseStr = String(verse).trim();
            if (verseStr.includes('-')) {
                title = `${bookName} ${chapter}장 ${verse}절`;
            } else {
                title = `${bookName} ${chapter}장 ${verse}절`;
            }
        } else if (chapter) {
            const chapterStr = String(chapter).trim();
            if (chapterStr.includes('-')) {
                title = `${bookName} ${chapter}장`;
            } else {
                title = `${bookName} ${chapter}장`;
            }
        }
        $('#bibleTitle').html(`<i class="bi bi-book text-white"></i> <span class="text-white">${title}</span>`);

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
                        html += `<h5 class="${colorClass} mt-4 mb-3 border-bottom pb-2">${book} ${chap}장</h5>`;
                        lastChapter = chap;
                    }
                    
                    // 소제목이 있으면 추가
                    if (subtitle) {
                        html += `<h6 class="${colorClass} mt-3 mb-2">${subtitle}</h6>`;
                    }
                    
                    html += `
                        <div class="verse-line mb-2">
                            <span class="verse-num badge ${badgeClass} me-2">${chap}:${ver}</span>
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

    // 전체 성경 검색
    function searchAllBible(keyword) {
        if (!keyword.trim()) {
            alert('검색어를 입력하세요');
            return;
        }

        // 장절 참조 패턴 인식
        const versePattern1 = /^([가-힣]+)\s*(\d+)\s*[:：]\s*(\d+)$/;
        const versePattern2 = /^([가-힣]+)\s+(\d+)장\s+(\d+)절$/;
        let verseMatch = keyword.match(versePattern1) || keyword.match(versePattern2);

        if (verseMatch) {
            const bookAbbr = verseMatch[1];
            const chapter = verseMatch[2];
            const verse = verseMatch[3];

            const foundBook = bibleBooks.find(b =>
                b.name.includes(bookAbbr) || b.name.startsWith(bookAbbr)
            );

            if (foundBook) {
                currentBookInfo = foundBook;
                $('#bibleBook').val(foundBook.num);
                loadBibleText(foundBook.num, foundBook.name);
                setTimeout(() => {
                    if (currentBibleData) {
                        displayBibleContent(currentBibleData, foundBook.name, chapter, verse);
                    }
                }, 500);
                return;
            }
        }

        $('#bibleTitle').html(`<i class="bi bi-search text-white"></i> <span class="text-white">전체 성경에서 "${keyword}" 검색중...</span>`);
        $('#bibleContent').html('<div class="text-center py-5"><div class="spinner-border text-primary" role="status"></div><p class="mt-3">검색 중...</p></div>');

        // 띄어쓰기 제거한 검색어
        const normalizedKeyword = keyword.replace(/\s+/g, '');

        // 병렬 처리를 위한 Promise 배열
        const searchPromises = bibleBooks.map(book => {
            const cacheKey = `${book.num}${book.name}`;

            if (bibleCache[cacheKey]) {
                return Promise.resolve({ data: bibleCache[cacheKey], book });
            } else {
                return new Promise((resolve) => {
                    $.ajax({
                        url: `/tx/${book.num}${book.name}.txt`,
                        dataType: 'text',
                        success: function(data) {
                            bibleCache[cacheKey] = data;
                            resolve({ data, book });
                        },
                        error: function() {
                            resolve({ data: null, book });
                        }
                    });
                });
            }
        });

        Promise.allSettled(searchPromises).then(results => {
            let allResults = [];

            results.forEach(result => {
                if (result.status === 'fulfilled' && result.value.data) {
                    const { data, book } = result.value;
                    const lines = data.split(/\r?\n/).filter(line => line.trim());

                    const matches = lines.filter(line => {
                        // 책 제목은 검색하지 않음 (본문과 소제목만 검색)
                        const normalizedLine = line.replace(/\s+/g, '');
                        return normalizedLine.includes(normalizedKeyword);
                    });

                    matches.forEach(line => {
                        const match = line.match(/^([가-힣]+)(\d+):(\d+)\s+(.+)$/);
                        if (match) {
                            allResults.push({
                                bookNum: book.num,
                                bookName: book.name,
                                line: line,
                                book: match[1],
                                chapter: match[2],
                                verse: match[3],
                                text: match[4]
                            });
                        }
                    });
                }
            });

            // 결과 정렬
            allResults.sort((a, b) => {
                if (a.bookNum < b.bookNum) return -1;
                if (a.bookNum > b.bookNum) return 1;
                const chapA = parseInt(a.chapter);
                const chapB = parseInt(b.chapter);
                if (chapA !== chapB) return chapA - chapB;
                const verA = parseInt(a.verse);
                const verB = parseInt(b.verse);
                return verA - verB;
            });

            displayAllSearchResults(keyword, allResults);
        });
    }

    // 띄어쓰기를 무시하고 검색어를 하이라이트하는 함수
    function highlightKeyword(text, keyword) {
        if (!keyword || !text) return text;

        const normalizedKeyword = keyword.replace(/\s+/g, '');
        const keywordChars = normalizedKeyword.split('');
        let result = '';
        let i = 0;

        while (i < text.length) {
            let matched = true;
            let matchedText = '';
            let tempIndex = i;
            let charIndex = 0;

            // 검색어의 각 글자가 순서대로 나타나는지 확인 (띄어쓰기 무시)
            while (charIndex < keywordChars.length && tempIndex < text.length) {
                if (text[tempIndex] === ' ') {
                    matchedText += text[tempIndex];
                    tempIndex++;
                    continue;
                }

                if (text[tempIndex].toLowerCase() === keywordChars[charIndex].toLowerCase()) {
                    matchedText += text[tempIndex];
                    charIndex++;
                    tempIndex++;
                } else {
                    matched = false;
                    break;
                }
            }

            // 모든 글자가 매칭되었으면 하이라이트
            if (matched && charIndex === keywordChars.length) {
                result += `<mark class="bg-warning">${matchedText}</mark>`;
                i = tempIndex;
            } else {
                result += text[i];
                i++;
            }
        }

        return result;
    }

    // 전체 검색 결과 표시
    function displayAllSearchResults(keyword, results) {
        $('#bibleTitle').html(`<i class="bi bi-search text-white"></i> <span class="text-white">전체 성경 "${keyword}" 검색 결과 (${results.length}개)</span>`);

        if (results.length === 0) {
            $('#bibleContent').html(`
                <div class="alert alert-info">
                    <i class="bi bi-info-circle"></i>
                    전체 성경에서 "${keyword}"에 대한 검색 결과가 없습니다.
                </div>
            `);
            return;
        }

        let html = '';
        results.forEach(result => {
            const isNewTestament = result.bookNum.startsWith('2-');
            const borderClass = isNewTestament ? 'border-danger' : 'border-primary';
            const badgeClass = isNewTestament ? 'bg-danger' : 'bg-primary';
            const colorClass = isNewTestament ? 'text-danger' : 'text-primary';

            // 소제목과 본문 분리
            let subtitle = '';
            let text = result.text;
            const subtitleMatch = text.match(/^<([^>]+)>\s*(.*)$/);
            if (subtitleMatch) {
                subtitle = subtitleMatch[1];
                text = subtitleMatch[2];
            }

            // 검색어 하이라이트 (띄어쓰기 무시)
            const highlightedSubtitle = subtitle ? highlightKeyword(subtitle, keyword) : '';
            const highlightedText = highlightKeyword(text, keyword);

            html += `
                <div class="verse-line mb-3 p-3 border-start ${borderClass} border-3">
                    <div class="mb-1">
                        <span class="badge ${badgeClass}">${result.bookName} ${result.chapter}:${result.verse}</span>
                    </div>
                    ${subtitle ? `<h6 class="${colorClass} mt-2 mb-2">${highlightedSubtitle}</h6>` : ''}
                    <div class="verse-text">${highlightedText}</div>
                </div>
            `;
        });

        $('#bibleContent').html(html);
    }

    // 텍스트 검색
    function searchText(keyword) {
        if (!keyword.trim()) {
            alert('검색어를 입력하세요');
            return;
        }

        // 1. 책 범위 패턴: 창세기-출애굽기
        const bookRangePattern = /^([가-힣]+)\s*[-~]\s*([가-힣]+)$/;
        const bookRangeMatch = keyword.match(bookRangePattern);
        
        if (bookRangeMatch) {
            const startBookName = bookRangeMatch[1];
            const endBookName = bookRangeMatch[2];
            
            const startBook = bibleBooks.find(b => b.name.includes(startBookName) || b.name.startsWith(startBookName));
            const endBook = bibleBooks.find(b => b.name.includes(endBookName) || b.name.startsWith(endBookName));
            
            if (startBook && endBook) {
                const startIndex = bibleBooks.findIndex(b => b.num === startBook.num);
                const endIndex = bibleBooks.findIndex(b => b.num === endBook.num);
                
                if (startIndex !== -1 && endIndex !== -1 && startIndex <= endIndex) {
                    loadBookRange(startIndex, endIndex);
                    return;
                }
            }
        }

        // 2. 장 범위 패턴: 창세기 1-3장, 창 1-3장
        const chapterRangePattern1 = /^([가-힣]+)\s+(\d+)\s*[-~]\s*(\d+)장?$/; // 창세기 1-3장
        const chapterRangePattern2 = /^([가-힣]+)\s*(\d+)\s*[-~]\s*(\d+)장?$/; // 창1-3장
        
        let chapterRangeMatch = keyword.match(chapterRangePattern1) || keyword.match(chapterRangePattern2);
        
        if (chapterRangeMatch) {
            const bookAbbr = chapterRangeMatch[1];
            const startChapter = chapterRangeMatch[2];
            const endChapter = chapterRangeMatch[3];
            
            const foundBook = bibleBooks.find(b => 
                b.name.includes(bookAbbr) || b.name.startsWith(bookAbbr)
            );
            
            if (foundBook) {
                currentBookInfo = foundBook;
                $('#bibleBook').val(foundBook.num);
                loadBibleText(foundBook.num, foundBook.name);
                
                setTimeout(() => {
                    if (currentBibleData) {
                        displayBibleContent(currentBibleData, foundBook.name, `${startChapter}-${endChapter}`, null);
                    }
                }, 500);
                return;
            }
        }

        // 3. 단일 장 패턴: 창세기 1장, 창 1장
        const singleChapterPattern1 = /^([가-힣]+)\s+(\d+)장$/; // 창세기 1장
        const singleChapterPattern2 = /^([가-힣]+)\s*(\d+)장$/; // 창1장
        
        let singleChapterMatch = keyword.match(singleChapterPattern1) || keyword.match(singleChapterPattern2);
        
        if (singleChapterMatch) {
            const bookAbbr = singleChapterMatch[1];
            const chapter = singleChapterMatch[2];
            
            const foundBook = bibleBooks.find(b => 
                b.name.includes(bookAbbr) || b.name.startsWith(bookAbbr)
            );
            
            if (foundBook) {
                currentBookInfo = foundBook;
                $('#bibleBook').val(foundBook.num);
                loadBibleText(foundBook.num, foundBook.name);
                
                setTimeout(() => {
                    if (currentBibleData) {
                        displayBibleContent(currentBibleData, foundBook.name, chapter, null);
                    }
                }, 500);
                return;
            }
        }

        // 4. 장절 참조 패턴: 창1:1, 창 1:1, 창세기 1장 1절
        const versePattern1 = /^([가-힣]+)\s*(\d+)\s*[:：]\s*(\d+)$/; // 창1:1, 창 1:1
        const versePattern2 = /^([가-힣]+)\s+(\d+)장\s+(\d+)절$/; // 창세기 1장 1절
        
        let verseMatch = keyword.match(versePattern1) || keyword.match(versePattern2);
        
        if (verseMatch) {
            const bookAbbr = verseMatch[1];
            const chapter = verseMatch[2];
            const verse = verseMatch[3];
            
            const foundBook = bibleBooks.find(b => 
                b.name.includes(bookAbbr) || b.name.startsWith(bookAbbr)
            );
            
            if (foundBook) {
                currentBookInfo = foundBook;
                $('#bibleBook').val(foundBook.num);
                loadBibleText(foundBook.num, foundBook.name);
                
                setTimeout(() => {
                    if (currentBibleData) {
                        displayBibleContent(currentBibleData, foundBook.name, chapter, verse);
                    }
                }, 500);
                return;
            }
        }

        // 성경책이 선택되지 않았으면 전체 검색
        if (!currentBibleData) {
            searchAllBible(keyword);
            return;
        }

        // 신약 여부 판단
        const isNewTestament = currentBookInfo && currentBookInfo.num.startsWith('2-');
        const colorClass = isNewTestament ? 'text-danger' : 'text-primary';
        const borderClass = isNewTestament ? 'border-danger' : 'border-primary';
        const badgeClass = isNewTestament ? 'bg-danger' : 'bg-secondary';

        // 띄어쓰기 제거한 검색어
        const normalizedKeyword = keyword.replace(/\s+/g, '');
        const lines = currentBibleData.split(/\r?\n/).filter(line => line.trim());
        const filteredLines = lines.filter(line => {
            const normalizedLine = line.replace(/\s+/g, '');
            return normalizedLine.includes(normalizedKeyword);
        });

        $('#bibleTitle').html(`<i class="bi bi-search text-white"></i> <span class="text-white">"${keyword}" 검색 결과 (${filteredLines.length}개)</span>`);

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

                // 소제목과 본문 분리
                let subtitle = '';
                let text = rest;
                const subtitleMatch = rest.match(/^<([^>]+)>\s*(.*)$/);
                if (subtitleMatch) {
                    subtitle = subtitleMatch[1];
                    text = subtitleMatch[2];
                }

                // 검색어 하이라이트 (띄어쓰기 무시)
                const highlightedSubtitle = subtitle ? highlightKeyword(subtitle, keyword) : '';
                const highlightedText = highlightKeyword(text, keyword);

                html += `
                    <div class="verse-line mb-3 p-3 border-start ${borderClass} border-3">
                        <div class="mb-1">
                            <span class="badge ${badgeClass}">${currentBook} ${chap}:${ver}</span>
                        </div>
                        ${subtitle ? `<h6 class="${colorClass} mt-2 mb-2">${highlightedSubtitle}</h6>` : ''}
                        <div class="verse-text">${highlightedText}</div>
                    </div>
                `;
            }
        });

        $('#bibleContent').html(html);
    }

    // 이벤트 핸들러
    $('#searchBtn').on('click', function() {
        // 본문 검색어가 있으면 본문 검색 실행
        const searchKeyword = $('#searchText').val().trim();
        if (searchKeyword) {
            searchText(searchKeyword);
            return;
        }
        
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
