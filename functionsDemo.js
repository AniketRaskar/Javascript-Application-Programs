//Function defination
function fun() {
    console.log("inside fun");
}
//Function call
fun();
function gun(no) {
    console.log("Inside gun:" + no);
}
gun(11);
function sun(no) {
    var i = no; //local variables
    i++;
    return i;
}
var ret = 0;
var a = 10;
ret = sun(a);
console.log("Return value is:" + ret);
