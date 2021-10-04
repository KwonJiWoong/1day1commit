
var g = 20;
console.log('g :', this.g); // 20 출력(전역 window)를 context 객체로 갖음 : window.g
console.log('g :', window.g);

function doSomething() {
    this.dummy2 = "가을";
    console.log(this); // window 객체
  }
  
  console.log(this.dummy1); // undefined (선언 전이므로 x )
  console.log(this.dummy2); // undefined (doSomething함수 안에 있으므로 x)
  
  this.dummy1 = "겨울";
  
  console.log(this.dummy1); // 겨울
  console.log(this.dummy2); // undefined (doSomething함수 안에 있으므로 x)
  
  doSomething();
  
  console.log(this.dummy1); // 겨울 (doSomething함수 실행 뒤 o)
  console.log(this.dummy2); // 가을 (doSomething함수 실행 뒤 o)