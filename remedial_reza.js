//Comment 
console.log("============COMMENTS============");
// This is a single line comment
/* 
This is a multi-line comment
*/
console.log("================================");

//assigment
console.log("============ASSIGNMENT============");
var a = 10;
var b = 20;
console.log(a)
console.log(b)
console.log("================================");


//comparison
console.log("============COMPARISON============");
console.log(a == b);
console.log(a != b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log("================================");


//logical
console.log("============LOGICAL============");
console.log(a == b && a > b);
console.log(a == b || a > b);
console.log(!(a == b));
console.log("================================");

//if
console.log("============IF============");
if (a == b) {
    console.log("a is equal to b");
} 
//else
console.log("============ELSE============");
if (a == b) {
    console.log("a is equal to b");
}else {
    console.log("a is less than b");
}

//else if
console.log("============ELSE IF============");
if (a == b) {
    console.log("a is equal to b");
} else if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("a is less than b");
}
console.log("================================");

//switch
console.log("============SWITCH============");
var grade = "A";
switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Fair");
        break;
    case "D":
        console.log("Poor");
        break;
    default:
        console.log("Invalid grade");
}
console.log("================================");

//for
console.log("============FOR============");
let n = 5;
let string = "";
// Upside pyramid
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = n; j > i; j--) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < i * 2 - 1; k++) {
    string += "*";
  }
  string += "\n";
}
// downside pyramid
for (let i = 1; i <= n - 1; i++) {
    // printing spaces
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  // printing star
  for (let k = (n - i) * 2 - 1; k > 0; k--) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
console.log("================================");

//while
console.log("============WHILE============");
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
    }
console.log("================================");

//do while
console.log("============DO WHILE============");
let j = 1;
do {
    console.log(j);
    j++;
}
while (j <= 10);
console.log("================================");


