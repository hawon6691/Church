// 개발자 도구 감지 및 경고
(function() {
    'use strict';

    // 개발자 도구 열림 감지
    let devtoolsOpen = false;
    const threshold = 160;

    const detectDevTools = () => {
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;

        if (widthThreshold || heightThreshold) {
            if (!devtoolsOpen) {
                devtoolsOpen = true;
                console.clear();
                console.log('%c⚠️ 경고', 'color: red; font-size: 30px; font-weight: bold;');
                console.log('%c이 기능은 개발자를 위한 것입니다.', 'font-size: 16px;');
                console.log('%c알 수 없는 코드를 붙여넣지 마세요. 계정이 탈취될 수 있습니다.', 'font-size: 14px; color: orange;');
            }
        } else {
            devtoolsOpen = false;
        }
    };

    // 우클릭 방지
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });

    // 특정 키 조합 방지 (Ctrl+F와 스크린샷 제외)
    document.addEventListener('keydown', function(e) {
        // Ctrl+F (검색) 허용
        if (e.ctrlKey && e.keyCode === 70) {
            return true;
        }

        // 스크린샷 관련 키 허용
        // PrintScreen (44), Alt+PrintScreen, Windows+Shift+S 등은 브라우저에서 감지 불가능

        // F12 차단
        if (e.keyCode === 123) {
            e.preventDefault();
            return false;
        }

        // Ctrl+Shift+I (개발자 도구) 차단
        if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
            e.preventDefault();
            return false;
        }

        // Ctrl+Shift+J (콘솔) 차단
        if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
            e.preventDefault();
            return false;
        }

        // Ctrl+U (소스 보기) 차단
        if (e.ctrlKey && e.keyCode === 85) {
            e.preventDefault();
            return false;
        }

        // Ctrl+Shift+C (요소 검사) 차단
        if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
            e.preventDefault();
            return false;
        }

        // Ctrl+Shift+K (Firefox 콘솔) 차단
        if (e.ctrlKey && e.shiftKey && e.keyCode === 75) {
            e.preventDefault();
            return false;
        }
    });

    // 주기적으로 확인
    setInterval(detectDevTools, 1000);

    // 콘솔 경고 메시지
    console.log('%c⚠️ 주의', 'color: red; font-size: 20px; font-weight: bold;');
    console.log('%c개발자 도구를 사용 중입니다.', 'font-size: 14px;');
    console.log('%c알 수 없는 스크립트를 실행하지 마세요.', 'font-size: 12px; color: orange;');
})();
