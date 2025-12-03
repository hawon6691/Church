# 동서울열방교회 웹사이트

복음을 영화롭게, 진리가 선포되는, 예수의 보혈이 흐르는 동서울열방교회 공식 웹사이트입니다.

## 🛠 기술 스택

- **HTML5** - 시맨틱 마크업
- **CSS3** - 반응형 디자인
- **JavaScript (ES6+)** - 인터랙티브 기능
- **Bootstrap 5.3.2** - UI 프레임워크
- **jQuery 3.7.1** - DOM 조작 및 이벤트 처리
- **Swiper 11** - 터치 슬라이더
- **Google Fonts** - Noto Sans KR 폰트

## 📁 프로젝트 구조

```
Church/
├── index.html              # 메인 페이지
├── index.css               # 메인 페이지 스타일
├── vercel.json             # Vercel 배포 설정
├── robots.txt              # SEO 로봇 설정
├── README.md               # 프로젝트 문서
├── html/
│   ├── about.html          # 교회소개 페이지
│   ├── worship.html        # 예배와 말씀 페이지
│   └── Bible.html          # 성경 페이지
├── css/
│   ├── about.css           # 교회소개 스타일
│   └── worship.css         # 예배 페이지 스타일
├── js/
│   ├── main.js             # 메인 JavaScript
│   └── test.js             # 테스트 파일
├── image/
│   └── channels4_profile.jpg
├── music/                  # 음악 파일
└── tx/                     # 텍스트 파일
    ├── bible.txt
    └── ref.txt
```

## 🚀 Vercel 배포 방법

### 1. Vercel CLI 사용

```bash
# Vercel CLI 설치 (처음 한 번만)
npm install -g vercel

# 프로젝트 디렉토리에서 배포
cd Church
vercel

# 프로덕션 배포
vercel --prod
```

### 2. Vercel 웹사이트 사용

1. [Vercel 웹사이트](https://vercel.com) 접속 및 로그인
2. "New Project" 클릭
3. GitHub 저장소 연결 또는 파일 직접 업로드
4. 프로젝트 설정:
   - Framework Preset: **Other**
   - Root Directory: `./`
   - Build Command: (비워두기)
   - Output Directory: `./`
5. "Deploy" 클릭

### 3. GitHub 연동 배포 (추천)

1. GitHub에 저장소 생성
2. 코드 푸시:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin [YOUR_GITHUB_REPO_URL]
git push -u origin main
```
3. Vercel에서 GitHub 저장소 import
4. 자동 배포 설정 완료

## 🎨 주요 기능

### 메인 페이지 (index.html)
- 🎭 Swiper를 활용한 히어로 슬라이더
- 📱 반응형 네비게이션 바
- 💒 교회 소개 섹션
- ⏰ 예배 시간 안내
- 🎥 최근 설교 영상
- 📍 푸터 정보

### 교회소개 페이지 (about.html)
- 👨‍🏫 담임목사 소개
- 🎯 교회 비전 카드
- 📅 교회 연혁 타임라인
- 🗺 오시는 길 정보

### 예배와 말씀 페이지 (worship.html)
- 🎬 YouTube 재생목록 (자동 업데이트)
- 📋 주일 예배 안내
- ⛪ 예배 시간표
- 📚 자료실 바로가기

### 자료실 페이지 (archive.html)
- 📁 설교 자료 아카이브 (원고, PPT, 음원)
- 🔍 검색 및 필터 기능
- 📅 연도별/유형별 분류
- 💾 다운로드 기능

## 💡 주요 코드 기능

### JavaScript (main.js)
- 스무스 스크롤
- 네비게이션 스크롤 효과
- Swiper 초기화 (히어로, 설교 갤러리)
- 카드 호버 효과
- Back to Top 버튼
- 모바일 메뉴 자동 닫기

### CSS 특징
- CSS 변수를 통한 일관된 색상 관리
- 반응형 그리드 레이아웃
- 부드러운 트랜지션 효과
- 키프레임 애니메이션
- 모바일 우선 디자인

## 📱 반응형 지원

- 💻 Desktop: 1200px+
- 📱 Tablet: 768px - 1199px
- 📱 Mobile: < 768px

## 🎨 색상 테마

```css
--primary-color: #1a3c7d (교회 메인 블루)
--secondary-color: #e94e1b (강조 오렌지)
--light-bg: #f7f7f7 (배경 색상)
```

## 📄 SEO 최적화

- ✅ 메타 태그 최적화
- ✅ 시맨틱 HTML5
- ✅ 구글 사이트 검증
- ✅ robots.txt 설정
- ✅ Open Graph 태그 (추가 권장)

## 🔧 커스터마이징

### 색상 변경
`index.css`, `about.css`, `worship.css` 파일의 `:root` 섹션에서 CSS 변수 수정

### 슬라이더 설정
`js/main.js` 파일에서 Swiper 초기화 옵션 조정

### 예배 시간 수정
각 HTML 파일의 해당 섹션 직접 편집

## 📞 문의

- **교회 전화:** (전화번호 입력)
- **이메일:** church@example.com
- **주소:** 서울특별시 (상세 주소)

## 📝 라이선스

Copyright © 2025 동서울열방교회. All rights reserved.

---

Made with ❤️ for 동서울열방교회
