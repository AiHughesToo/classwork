//problem 1

var numArray =[18, 24, 57, 98, 45, 27, 3, 456, 3, 35, 85];

var posNum = numArray.indexOf(27);
console.log(posNum);

//problem 2
// take each value of the array ane add it to the next.
var sum = 0;
for (i=0; i < numArray.length; i++) {
var numberA = numArray[i];
var sum = sum + numberA;

}
console.log(sum);
// problem 3

var newA = [];

for (i=0;i <= 10; i++){

    newA.push(i);

}
newA.pop();
console.log(newA);
// problem 4 

function funName(num1,num2){

    sum = num1 + num2;

    if (sum <= 25){
        return "true";
    }else {
        return "false";
    }
}
console.log(funName(1,20));
// problem 5

function funString(string1,string2) {

    var stringSum = string1 + string2;

    if (stringSum.length > 12){
        return "error string too long.";
    }else{
        return stringSum;
    }
    }
    console.log(funString("hi","there"));

//problem 6
var num = 0;
while (num < 20){
 if (num <= 5){
     console.log("words");
 }else if (num >= 5 && num <= 10){
     console.log("words2");
     }else if ( num >= 11 && num <15){

        console.log("words3");
     }else {
         console.log("words4");
     }
    num = num + 1;
  console.log(num);
 
}

