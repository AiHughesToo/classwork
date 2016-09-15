/*for (var i =0; i<= 30; i++){
if (i !== 17 && i !== 13 && i !== 3){
console.log(i);
}
} */
/*var result "";
for ( var n =10; n <= 50; n++){

result += n.toString();


}
console.log(result);
*/


var newN = 0;
var oldN = 1;
var result = 0;

for (i=0; i <10; i++){


    result = newN + oldN;
    console.log(result);
    oldN = newN;
    newN = result;
}


