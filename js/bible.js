// 성경 읽기 JavaScript
// 무료 성경 API 사용: bible.helloao.org

$(document).ready(function() {
    let currentBook = '창세기';
    let currentChapter = 1;
    let currentVersion = 'korHRV';

    // 성경 책 목록 (66권)
    const bibleBooks = {
        '창세기': { eng: 'Genesis', chapters: 50 },
        '출애굽기': { eng: 'Exodus', chapters: 40 },
        '레위기': { eng: 'Leviticus', chapters: 27 },
        '민수기': { eng: 'Numbers', chapters: 36 },
        '신명기': { eng: 'Deuteronomy', chapters: 34 },
        '여호수아': { eng: 'Joshua', chapters: 24 },
        '사사기': { eng: 'Judges', chapters: 21 },
        '룻기': { eng: 'Ruth', chapters: 4 },
        '사무엘상': { eng: '1Samuel', chapters: 31 },
        '사무엘하': { eng: '2Samuel', chapters: 24 },
        '열왕기상': { eng: '1Kings', chapters: 22 },
        '열왕기하': { eng: '2Kings', chapters: 25 },
        '시편': { eng: 'Psalms', chapters: 150 },
        '잠언': { eng: 'Proverbs', chapters: 31 },
        '이사야': { eng: 'Isaiah', chapters: 66 },
        '예레미야': { eng: 'Jeremiah', chapters: 52 },
        '마태복음': { eng: 'Matthew', chapters: 28 },
        '마가복음': { eng: 'Mark', chapters: 16 },
        '누가복음': { eng: 'Luke', chapters: 24 },
        '요한복음': { eng: 'John', chapters: 21 },
        '사도행전': { eng: 'Acts', chapters: 28 },
        '로마서': { eng: 'Romans', chapters: 16 },
        '고린도전서': { eng: '1Corinthians', chapters: 16 },
        '고린도후서': { eng: '2Corinthians', chapters: 13 },
        '갈라디아서': { eng: 'Galatians', chapters: 6 },
        '에베소서': { eng: 'Ephesians', chapters: 6 },
        '빌립보서': { eng: 'Philippians', chapters: 4 },
        '골로새서': { eng: 'Colossians', chapters: 4 },
        '데살로니가전서': { eng: '1Thessalonians', chapters: 5 },
        '데살로니가후서': { eng: '2Thessalonians', chapters: 3 },
        '디모데전서': { eng: '1Timothy', chapters: 6 },
        '디모데후서': { eng: '2Timothy', chapters: 4 },
        '야고보서': { eng: 'James', chapters: 5 },
        '베드로전서': { eng: '1Peter', chapters: 5 },
        '베드로후서': { eng: '2Peter', chapters: 3 },
        '요한1서': { eng: '1John', chapters: 5 },
        '요한2서': { eng: '2John', chapters: 1 },
        '요한3서': { eng: '3John', chapters: 1 },
        '요한계시록': { eng: 'Revelation', chapters: 22 }
    };

    // 책 선택 드롭다운 채우기
    function populateBookSelect() {
        const $bookSelect = $('#bibleBook');
        $bookSelect.empty();
        Object.keys(bibleBooks).forEach(book => {
            $bookSelect.append(`<option value="${book}">${book}</option>`);
        });
    }

    // 장 선택 드롭다운 업데이트
    function updateChapterSelect(book) {
        const $chapterSelect = $('#bibleChapter');
        $chapterSelect.empty();
        const maxChapters = bibleBooks[book].chapters;
        for (let i = 1; i <= maxChapters; i++) {
            $chapterSelect.append(`<option value="${i}">${i}장</option>`);
        }
    }

    // 성경 본문 가져오기
    function loadBibleContent(book, chapter, version) {
        $('#bibleTitle').text(`${book} ${chapter}장`);
        $('#bibleContent').html(`
            <div class="text-center py-5">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">로딩중...</span>
                </div>
                <p class="mt-3 text-muted">성경을 불러오는 중...</p>
            </div>
        `);

        // JSON 파일에서 성경 불러오기
        $.ajax({
            url: `/tx/bible-data.json`,
            dataType: 'json',
            success: function(data) {
                const bookData = data[book];
                if (bookData && bookData[chapter]) {
                    displayBibleContent(bookData[chapter]);
                } else {
                    displayBibleContent(getSampleBibleContent(book, chapter));
                }
            },
            error: function() {
                // JSON 파일이 없으면 샘플 데이터 사용
                const sampleContent = getSampleBibleContent(book, chapter);
                displayBibleContent(sampleContent);
            }
        });
    }

    // 샘플 성경 내용 (일부 장만 포함)
    function getSampleBibleContent(book, chapter) {
        const samples = {
            '창세기_1': `
                <p class="verse"><sup>1</sup> 태초에 하나님이 천지를 창조하시니라</p>
                <p class="verse"><sup>2</sup> 땅이 혼돈하고 공허하며 흑암이 깊음 위에 있고 하나님의 신은 수면에 운행하시니라</p>
                <p class="verse"><sup>3</sup> 하나님이 가라사대 빛이 있으라 하시매 빛이 있었고</p>
                <p class="verse"><sup>4</sup> 그 빛이 하나님의 보시기에 좋았더라 하나님이 빛과 어두움을 나누사</p>
                <p class="verse"><sup>5</sup> 빛을 낮이라 칭하시고 어두움을 밤이라 칭하시니라 저녁이 되며 아침이 되니 이는 첫째 날이니라</p>
                <p class="verse"><sup>6</sup> 하나님이 가라사대 물 가운데 궁창이 있어 물과 물로 나뉘게 하리라 하시고</p>
                <p class="verse"><sup>7</sup> 하나님이 궁창을 만드사 궁창 아래의 물과 궁창 위의 물로 나뉘게 하시매 그대로 되니라</p>
                <p class="verse"><sup>8</sup> 하나님이 궁창을 하늘이라 칭하시니라 저녁이 되며 아침이 되니 이는 둘째 날이니라</p>
            `,
            '요한복음_3': `
                <p class="verse"><sup>16</sup> 하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니 이는 저를 믿는 자마다 멸망치 않고 영생을 얻게 하려 하심이니라</p>
                <p class="verse"><sup>17</sup> 하나님이 그 아들을 세상에 보내신 것은 세상을 심판하려 하심이 아니요 저로 말미암아 세상이 구원을 받게하려 하심이라</p>
            `,
            '로마서_8': `
                <p class="verse"><sup>28</sup> 우리가 알거니와 하나님을 사랑하는 자 곧 그 뜻대로 부르심을 입은 자들에게는 모든 것이 합력하여 선을 이루느니라</p>
                <p class="verse"><sup>38</sup> 내가 확신하노니 사망이나 생명이나 천사들이나 권세자들이나 현재 일이나 장래 일이나 능력이나</p>
                <p class="verse"><sup>39</sup> 높음이나 깊음이나 다른 아무 피조물이라도 우리를 우리 주 그리스도 예수 안에 있는 하나님의 사랑에서 끊을 수 없으리라</p>
            `
        };

        const key = `${book}_${chapter}`;
        return samples[key] || `
            <div class="alert alert-info">
                <h5><i class="bi bi-info-circle"></i> 안내</h5>
                <p class="mb-2">현재는 일부 장만 샘플로 제공됩니다.</p>
                <p class="mb-0">전체 성경을 보시려면 다음 방법을 사용하세요:</p>
                <ul class="mt-2 mb-0">
                    <li><a href="https://www.bskorea.or.kr/bible/korbibReadpage.php" target="_blank">대한성서공회 온라인 성경</a></li>
                    <li><a href="https://www.bible.com/ko" target="_blank">YouVersion 성경 앱</a></li>
                </ul>
            </div>
            <p class="text-muted">선택하신 장: <strong>${book} ${chapter}장</strong></p>
        `;
    }

    // 성경 내용 표시
    function displayBibleContent(content) {
        $('#bibleContent').html(content);
    }

    // 이벤트 리스너
    $('#bibleBook').on('change', function() {
        currentBook = $(this).val();
        updateChapterSelect(currentBook);
        currentChapter = 1;
        $('#bibleChapter').val('1');
    });

    $('#bibleChapter').on('change', function() {
        currentChapter = parseInt($(this).val());
    });

    $('#bibleVersion').on('change', function() {
        currentVersion = $(this).val();
    });

    $('#loadBible').on('click', function() {
        currentBook = $('#bibleBook').val();
        currentChapter = parseInt($('#bibleChapter').val());
        currentVersion = $('#bibleVersion').val();
        loadBibleContent(currentBook, currentChapter, currentVersion);
    });

    $('#prevChapter').on('click', function() {
        if (currentChapter > 1) {
            currentChapter--;
            $('#bibleChapter').val(currentChapter);
            loadBibleContent(currentBook, currentChapter, currentVersion);
        }
    });

    $('#nextChapter').on('click', function() {
        const maxChapters = bibleBooks[currentBook].chapters;
        if (currentChapter < maxChapters) {
            currentChapter++;
            $('#bibleChapter').val(currentChapter);
            loadBibleContent(currentBook, currentChapter, currentVersion);
        }
    });

    // 초기화
    populateBookSelect();
    updateChapterSelect('창세기');
});
