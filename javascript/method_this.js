function f(){
    console.log(this);
    console.log("f is called");
}
/* this로 객체의 name 변경 */
function setName(name){
    this.name=name;
}

var o = {name:"object", method:f, setName:setName};
var o2 = {name:"", setName:setName} ;

o.setName("object1");
o2.setName("object2");

/* 객체 확인 시 변경 된걸 확인 할수있음 */
console.log( o, o2 );
