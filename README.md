# 1day1commit
+참고 문헌 : Learning React 2판
# 1일 1커밋 - 권지웅   
## 2021-08-29 - 1일차
1. 호이스팅(끌어 올림) : 변수를 먼저 정의 후 undefined로 초기화한 변수처럼 다루는 것   

## 2021-08-30 - 2일차
1. header/section/footer   
2. 빌드 후 github page 업로드

## 2021-08-31 - 2일차(8월의 마지막!)   
1. json 파일에서 footer 데이터 출력(footer.json > footer.js로 출력)
2. map함수 활용

## 2021-09-01
1. useState 사용하여 푸터 정리   

## 2021-09-02
1. 버튼 추가로 text state로 화면 출력

## 2021-09-03
1. 버튼 추가로 컴포턴트 추가

## 2021-09-04
1. 03일에 추가한 내용 수정

## 2021-09-05
1. 라우터 테스트 추가
2. 라우터 base 추가


## 2021-09-06
1. 어제의 문제점 발견 : State를 이용하여 header.js 에 react-router를 이용하여 Link 태그 경로를 호출했는데 Link로 이동 시 렌더링이 되지않음
2. 해결방법 : 이것 저것 시도해보다가 BrowserRouter를 header에도 적용시켜서 생긴 문제였음 제거 후 로컬서버 확인 시 이상없음