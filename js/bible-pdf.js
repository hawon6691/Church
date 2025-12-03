$(document).ready(function() {
    // 구약 성경 목록 (39권)
    const oldTestament = [
        { num: '1-01', name: '창세기' },
        { num: '1-02', name: '출애굽기' },
        { num: '1-03', name: '레위기' },
        { num: '1-04', name: '민수기' },
        { num: '1-05', name: '신명기' },
        { num: '1-06', name: '여호수아' },
        { num: '1-07', name: '사사기' },
        { num: '1-08', name: '룻기' },
        { num: '1-09', name: '사무엘상' },
        { num: '1-10', name: '사무엘하' },
        { num: '1-11', name: '열왕기상' },
        { num: '1-12', name: '열왕기하' },
        { num: '1-13', name: '역대상' },
        { num: '1-14', name: '역대하' },
        { num: '1-15', name: '에스라' },
        { num: '1-16', name: '느헤미야' },
        { num: '1-17', name: '에스더' },
        { num: '1-18', name: '욥기' },
        { num: '1-19', name: '시편' },
        { num: '1-20', name: '잠언' },
        { num: '1-21', name: '전도서' },
        { num: '1-22', name: '아가' },
        { num: '1-23', name: '이사야' },
        { num: '1-24', name: '예레미야' },
        { num: '1-25', name: '예레미아애가' },
        { num: '1-26', name: '에스겔' },
        { num: '1-27', name: '다니엘' },
        { num: '1-28', name: '호세아' },
        { num: '1-29', name: '요엘' },
        { num: '1-30', name: '아모스' },
        { num: '1-31', name: '오바댜' },
        { num: '1-32', name: '요나' },
        { num: '1-33', name: '미가' },
        { num: '1-34', name: '나훔' },
        { num: '1-35', name: '하박국' },
        { num: '1-36', name: '스바냐' },
        { num: '1-37', name: '학개' },
        { num: '1-38', name: '스가랴' },
        { num: '1-39', name: '말라기' }
    ];

    // 신약 성경 목록 (27권)
    const newTestament = [
        { num: '2-01', name: '마태복음' },
        { num: '2-02', name: '마가복음' },
        { num: '2-03', name: '누가복음' },
        { num: '2-04', name: '요한복음' },
        { num: '2-05', name: '사도행전' },
        { num: '2-06', name: '로마서' },
        { num: '2-07', name: '고린도전서' },
        { num: '2-08', name: '고린도후서' },
        { num: '2-09', name: '갈라디아서' },
        { num: '2-10', name: '에베소서' },
        { num: '2-11', name: '빌립보서' },
        { num: '2-12', name: '골로새서' },
        { num: '2-13', name: '데살로니가전서' },
        { num: '2-14', name: '데살로니가후서' },
        { num: '2-15', name: '디모데전서' },
        { num: '2-16', name: '디모데후서' },
        { num: '2-17', name: '디도서' },
        { num: '2-18', name: '빌레몬서' },
        { num: '2-19', name: '히브리서' },
        { num: '2-20', name: '야고보서' },
        { num: '2-21', name: '베드로전서' },
        { num: '2-22', name: '베드로후서' },
        { num: '2-23', name: '요한일서' },
        { num: '2-24', name: '요한이서' },
        { num: '2-25', name: '요한삼서' },
        { num: '2-26', name: '유다서' },
        { num: '2-27', name: '요한계시록' }
    ];

    // 구약/신약 선택 시
    $('#testamentSelect').on('change', function() {
        const testament = $(this).val();
        const $bookSelect = $('#bibleBook');
        
        $bookSelect.empty();
        $bookSelect.append('<option value="">성경책을 선택하세요</option>');
        
        if (testament === 'old') {
            oldTestament.forEach(book => {
                $bookSelect.append(`<option value="${book.num}">${book.name}</option>`);
            });
        } else if (testament === 'new') {
            newTestament.forEach(book => {
                $bookSelect.append(`<option value="${book.num}">${book.name}</option>`);
            });
        }
        
        // PDF 뷰어 초기화
        $('#pdfViewer').html(`
            <div class="text-center py-5" id="emptyState">
                <div class="mb-3" style="font-size: 4rem;">📖</div>
                <h5 class="text-muted">성경책을 선택하면 PDF가 표시됩니다</h5>
            </div>
        `);
        $('#bibleTitle').text('성경을 선택하세요');
    });

    // 성경책 선택 시 PDF 로드
    $('#bibleBook').on('change', function() {
        const bookNum = $(this).val();
        const bookName = $(this).find('option:selected').text();
        
        if (bookNum) {
            loadPDF(bookNum, bookName);
        }
    });

    // PDF 로드 함수
    function loadPDF(bookNum, bookName) {
        const pdfPath = `/pdf/${bookNum}${bookName}.pdf`;
        
        $('#bibleTitle').html(`<i class="bi bi-book"></i> ${bookName}`);
        
        // PDF를 iframe으로 표시
        $('#pdfViewer').html(`
            <iframe 
                src="${pdfPath}#toolbar=1&navpanes=1&scrollbar=1" 
                width="100%" 
                height="800" 
                style="border: none;"
                type="application/pdf">
                <p>PDF를 표시할 수 없습니다. 
                    <a href="${pdfPath}" target="_blank">여기를 클릭하여 다운로드하세요</a>
                </p>
            </iframe>
        `);
    }

    // 페이지 로드 시 첫 번째 책 자동 선택 (선택사항)
    // $('#testamentSelect').val('old').trigger('change');
    // setTimeout(() => {
    //     $('#bibleBook').val('1-01').trigger('change');
    // }, 100);
});
