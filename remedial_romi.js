console.log("==========variabel==========")
var baskom = "air";

//comment
console.log("==========Comment==========\n");
//ini contoh single line comment
/*
    blablabla
    ini contoh multi line comment
    blablabla
*/

console.log("==========Assignment and Comparison==========\n");
//Assignment
var a = 1; //nilai 1 dimasukan ke variabel 'a'
var b = 1; //nilai 1 dimasukan ke variabel 'b'
a += 1; //a = a+1
a -= 1; //a = a-1
a *= 1; //a = a*1
a /= 1; //a = a/1
a %= 1; //a = a%1

//Comparison
a == b;
a === b;
a != b;
a !== b;
a > b;
a >= b;
a < b;
a <= b;

console.log("==========If, If else, Else If, and Switch Case==========")
//if
var a = 1;
if(a == 1){
    console.log("ok")
}

//if else
if(a == 1){
    console.log("ok")
} else {
    console.log("not ok")
}

//else if
if(a == 1){
    console.log("ok")
} else if(a >= 1) {
    console.log("eror")
} else {
    console.log("not ok")
}

//switch case
switch(a){
    case 1:
        console.log(a);
    break;
    case 2:
        console.log("not ok")
    break;
    default:
        console.log("aneh")
}

console.log("==========For, While, and Do while==========")

//for
for(u = 1;u <= 5;u++){
    console.log("nomor", u)
}

console.log(" \n")

//while
var w = 1;
while(w<=5){
    console.log("nomor", w)
    w++
}

console.log(" \n")

var o = 1;
do{
    console.log("nomor", o)
    o++
}
while(o<=5)