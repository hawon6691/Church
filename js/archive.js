// Archive Page JavaScript
$(document).ready(function() {
    const $searchInput = $('#searchInput');
    const $yearFilter = $('#yearFilter');
    const $typeFilter = $('#typeFilter');
    const $archiveList = $('#archiveList');
    const $noResults = $('#noResults');

    // 검색 및 필터링 함수
    function filterArchive() {
        const searchTerm = $searchInput.val().toLowerCase();
        const selectedYear = $yearFilter.val();
        const selectedType = $typeFilter.val();
        
        let visibleCount = 0;

        $('.archive-item').each(function() {
            const $item = $(this);
            const title = $item.find('.card-title').text().toLowerCase();
            const content = $item.find('.card-text').text().toLowerCase();
            const year = $item.data('year').toString();
            const type = $item.data('type');

            // 검색어 매칭
            const matchesSearch = searchTerm === '' || 
                                 title.includes(searchTerm) || 
                                 content.includes(searchTerm);

            // 연도 필터 매칭
            const matchesYear = selectedYear === '' || year === selectedYear;

            // 유형 필터 매칭
            const matchesType = selectedType === '' || type === selectedType;

            // 모든 조건이 맞으면 표시
            if (matchesSearch && matchesYear && matchesType) {
                $item.show();
                visibleCount++;
            } else {
                $item.hide();
            }
        });

        // 결과가 없을 때 메시지 표시
        if (visibleCount === 0) {
            $noResults.show();
        } else {
            $noResults.hide();
        }
    }

    // 이벤트 리스너 등록
    $searchInput.on('input', filterArchive);
    $yearFilter.on('change', filterArchive);
    $typeFilter.on('change', filterArchive);

    // 다운로드 버튼 클릭 이벤트 (예시)
    $(document).on('click', '.btn-outline-primary, .btn-outline-success, .btn-outline-danger', function(e) {
        e.preventDefault();
        const fileName = $(this).closest('.card').find('.card-title').text();
        const fileType = $(this).find('i').attr('class').includes('text') ? '원고' : 
                        $(this).find('i').attr('class').includes('ppt') ? 'PPT' : '음원';
        
        // 실제로는 파일 다운로드 링크로 연결
        alert(`"${fileName}" - ${fileType} 다운로드\n\n실제 구현 시 파일 다운로드 링크를 연결해주세요.`);
    });

    // 카드 애니메이션 효과
    $('.archive-item').each(function(index) {
        $(this).css('animation-delay', (index * 0.1) + 's');
    });

    // 검색창 포커스 시 효과
    $searchInput.focus(function() {
        $(this).parent().addClass('shadow-sm');
    }).blur(function() {
        $(this).parent().removeClass('shadow-sm');
    });
});

// 페이지네이션 (실제 구현 시 서버 사이드와 연동)
function setupPagination() {
    $('.pagination .page-link').on('click', function(e) {
        e.preventDefault();
        $('.pagination .page-item').removeClass('active');
        $(this).parent().addClass('active');
        
        // 페이지 상단으로 스크롤
        $('html, body').animate({
            scrollTop: $('#archiveList').offset().top - 100
        }, 500);
    });
}

// 페이지 로드 시 실행
$(document).ready(function() {
    setupPagination();
});
