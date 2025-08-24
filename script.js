console.log("Q : 1");

var q1 = prompt("Enter your age");
if (q1 < 13) {
    alert("child");
    console.log("child");
} else if (q1 < 19) {
    alert("teenager");
    console.log("teenager");
} else {
    alert("adult");
    console.log("adult");
}






console.log("Q : 2");

var q2 = prompt("Enter any number");
q2 = Number(q2);

if (q2 % 2 === 0 && q2 % 3 === 0) {
    alert("Divisible by both");
    console.log("Divisible by both");
} else {
    alert("Not divisible by both");
    console.log("Not divisible by both");
}





console.log("Q : 3");

var q3 = prompt("Enter password");

if (q3 === "saylani123") {
    alert("Access Granted");
    console.log("Access Granted");
} else {
    alert("Access Denied");
    console.log("Access Denied");
}





console.log("Q : 4");

var q4_1 = Number(prompt("Enter 1st number"));
var q4_2 = Number(prompt("Enter 2nd number"));

if (q4_1 > q4_2) {
    alert("big number is: " + q4_1);
} else if (q4_2 > q4_1) {
    alert("big number is: " + q4_2);
} else {
    alert("number is equal");
}




console.log("Q : 5");

var q5 = ['white', 'black', 'red','green','blue'];
alert(q5[0] + " " + q5[4]);
console.log(q5[0] + " " + q5[4]);




console.log("Q : 6");

var q6 = ['apple', 'banana', 'cherry'];
console.log(q6);
q6.push('orange');
console.log(q6);




console.log("Q : 7");

var q7 = ['lahore', 'karachi', 'islamabad'];
console.log(q7);
q7.shift();
console.log(q7);




console.log("Q : 8");

var q8 = [10, 20, 30, 40, 50];
q8.splice(2, 1);
console.log(q8);




console.log("Q : 9"); 

var q9 = [100, 200, 300, 400, 500];
console.log(q9.slice(1, 4));




console.log("Q : 10");

var q10_1 = Number(prompt("Enter your 1st subject marks"));
var q10_2 = Number(prompt("Enter your 2nd subject marks"));
var q10_3 = Number(prompt("Enter your 3rd subject marks"));

var q10 = [q10_1, q10_2, q10_3];

var totalMarks = q10[0] + q10[1] + q10[2];
var average = totalMarks / 3;

console.log("Total Marks = " + totalMarks);
console.log("Average Marks = " + average);




console.log("Q : 11");

var q11 = Number(prompt("enter month number 1 to 12"));
if (q11 === 12 || q11 === 1 || q11 === 2) {
    alert("Winter");
    console.log("Winter");
} else if (q11 === 3 || q11 === 4 || q11 === 5) {
    alert("Spring");
    console.log("Spring");
} else if (q11 === 6 || q11 === 7 || q11 === 8) {
    alert("Summer");
    console.log("Summer");
} else if (q11 === 9 || q11 === 10 || q11 === 11) {
    alert("Autumn");
    console.log("Autumn");
} else {
    alert("Invalid month");
    console.log("Invalid month");
}




console.log("Q : 12");

for (var i = 2; i <= 20; i += 2) {
  console.log(i);
}





console.log("Q : 13");

var q13 = ['Ali', 'Sara', 'Ahmad', 'Ayesha'];
for (var i = 0; i < q13.length; i++) {
    console.log(q13[i]);
}



console.log("Q : 14");

var q14 = Number(prompt("enter any number i convert in table"));
for (var i = 1; i <= 10; i++) {
    console.log(q14 + "   x  " + i + "  =  " + (q14 * i))
}



console.log("Q : 15");

var q15 = [2, 4, 6, 8, 10];
var q15sum = 0;
for (var i = 0; i < q15.length; i++) {
    q15sum += q15[i];
}
console.log(q15sum);




console.log("Q : 16");

var q16 = prompt('Enter your name').toLowerCase();

if (q16 === "alice" || q16 === "bob") {
    alert('Welcome');
    console.log('Welcome');
} else {
    alert('You are not authorized.');
    console.log('You are not authorized.');
}




console.log("Q : 17");

var num = Number(prompt("Ek number pucho."));

if (num > 0 && num % 2 === 0) {
    alert("Positive Even");
    console.log("Positive Even");
} else if (num > 0 && num % 2 !== 0) {
    alert("Positive Odd");
    console.log("Positive Odd");
} else if (num < 0) {
    alert("Negative number");
    console.log("Negative number");
} else {
    alert("Zero or invalid input");
    console.log("Zero or invalid input");
}




console.log("Q : 18");

var fruits = ['Apple','Banana','Cherry','Date','Elderberry'];

fruits.splice(2, 0, 'Mango');

console.log(fruits);