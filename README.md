# Brand Catalog — 브랜드 포트폴리오

빌드 과정 없이 순수 HTML/CSS/JS로 만든 정적 포트폴리오입니다. GitHub Pages에 바로 올릴 수 있습니다.

## 폴더 구조

```
index.html                  # 카탈로그(프로젝트 목록) 페이지
projects/
  gyobo-life.html            # 교보생명 케이스 스터디 (완성본)
  _template.html              # 새 프로젝트용 빈 템플릿
assets/
  css/style.css               # 전체 디자인 시스템(색·폰트·레이아웃)
  js/case.js                  # 케이스 스터디 페이지 스크롤 하이라이트
```

## 새 프로젝트 추가하는 법

1. `projects/_template.html`을 복사해 `projects/프로젝트-이름.html`로 저장합니다.
2. 파일 안 ①~⑦ 주석을 따라 제목, Client/Scope/Year, Background/How We Break The Gap/Visible Impact 본문을 채웁니다.
3. `index.html`의 `<!-- 002 -->` 또는 `<!-- 003 -->` 카드 블록(`.catalog-card`)을 복사해 새 카드를 만들고, `href`를 새 파일명으로 바꿉니다. `is-placeholder` 클래스는 지우세요.
4. 이미지가 있다면 `assets/img/` 폴더를 만들어 넣고, `<div class="case-gallery placeholder">`를 `<img src="../assets/img/파일명.jpg">`로 교체하세요.

## 내 정보로 교체할 것

- `index.html`, 각 `projects/*.html`의 `이름 · Brand Catalog` → 본인 이름
- `you@email.com`, LinkedIn/Instagram 링크
- `index.html` 히어로 문구, 소개 문장

## GitHub Pages로 배포하기

```bash
cd portfolio
git init
git add .
git commit -m "portfolio: init"
git branch -M main
git remote add origin https://github.com/<사용자명>/<저장소명>.git
git push -u origin main
```

그다음 GitHub 저장소 → **Settings → Pages** → Source를 `main` 브랜치의 `/ (root)`로 설정하면
`https://<사용자명>.github.io/<저장소명>/` 에서 바로 볼 수 있습니다.

## 로컬에서 미리보기

별도 서버 없이 `index.html`을 브라우저로 열어도 대부분 정상 작동하지만,
폰트/이미지 상대경로 확인을 위해 아래처럼 간단히 로컬 서버를 띄우는 것을 권장합니다.

```bash
cd portfolio
python3 -m http.server 8000
# 이후 http://localhost:8000 접속
```
