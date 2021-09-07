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

## 2021-09-07
1. section.js 안 InputSample과 어제 테스트용 컴포넌트를 sub폴더에 구분지어서 각 컴포넌트로 변경
2. 이 과정에서 어제와 같은 재 렌더링 이슈가 있어 확인해보니 BrowserRouter를 두번 사용하여 생긴 이슈라고 알게 됨(꼭 1번만 사용할 것)
3. index.js에서만 BrowserRouter 사용하기로 함
4. 현재 빌드 시 마다 index.html 기본 경로가 ./ > / 로 변경되는데 확인 필요 내일 해결예정
5. 빌드 후 실서버에서 확인 사항 : basename경로가 package:homepage경로와 일치하지 않는 것으로 보임(undefined로 출력 예상)