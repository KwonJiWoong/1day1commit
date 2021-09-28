/* shadowing 전 */
function shadowing_ex1(){
    console.log("1-Function In : ", val1);
    val1++;
}
var val1 = 0;
shadowing_ex1();
console.log("1-Function Out : ", val1);
/* shadowing 후 */
function shadowing_ex2(){
    var val2 =5;
    console.log("2-Function In : ", val2);
}
var val2 = 0;
shadowing_ex2();
console.log("2-Function Out : ", val2);

