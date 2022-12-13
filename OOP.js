//Object Oriented Programing(POP)
//Class Defination
var Arithmatic = /** @class */ (function () {
    function Arithmatic(a, b) {
        this.No1 = a;
        this.No2 = b;
    }
    Arithmatic.prototype.Addition = function () {
        var Ans = 0;
        Ans = this.No1 + this.No2;
        return Ans;
    };
    Arithmatic.prototype.Subtraction = function () {
        var Ans = 0; //Local variables
        Ans = this.No1 - this.No2;
        return Ans;
    };
    return Arithmatic;
}());
var obj1 = new Arithmatic(10, 11);
var obj2 = new Arithmatic(20, 21);
var Ret = 0;
Ret = obj2.Addition();
console.log("Addition is:" + Ret);
Ret = obj2.Subtraction();
console.log("Subtraction is:" + Ret);
//Kay karaychar?  (Behaviours/Functions)
//Addition & subtraction
//Te karnyakarata kay lagnar ahe? (Characteritics/Variables)
//2 numbers value thewlyasathi ani 1 ans thewnyasathi
