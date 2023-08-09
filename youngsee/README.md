# Youngsee-React-Frontend
영수증 관리 시스템(Youngsee) + React

## 🖥️ 프로젝트 소개
영수증을 등록 수정 삭제(CRUD) 관리 할 수 있는 프론트엔드입니다.

## 🕰️ 개발 기간
23.06.26일 - 23.07.17일

### ⚙️ 개발 환경
- `Javascript`, `Typescript`
- **IDE** : IntelliJ
- **Framework** : React(18.x)
- **Database** : MariaDB

## 📌 주요 기능
#### 로그인
- 로그인 시 아이디, 비밀번호 입력 체크
- 로그인 시 세션(Session) 호출
#### 영수증 목록
- 등록된 영수증 내림차순 목록 API 호출
- 영수증 수정, 삭제 API 호출
#### 정산하기
- 연도와 월은 현재 시각 기준 자동 선택
- 연도와 월을 선택시 해당하는 영수증들의 합계, 총 건수, 정산금액 조회 API 호출
#### 영수증 등록
- 날짜, 금액, 사용 내역 입력받아 등록 API 호출
#### 영수증 수정
- 해당 영수증의 내용을 날짜, 금액, 사용 내역에 맞게 렌더링
- 수정하면 수정된 내용 업데이트 API 호출
#### 영수증 삭제
- 해당 영수증을 삭제 API 호출

### ⚙️ Environment Setup
```
# Install Packages
npm install

# Run Frontend Server
npm start
```
