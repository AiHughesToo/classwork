// while 

/*while (condition) {
    
} */
// for 



// for each  
/*
var names = ["bob", "steve", "Janine", "Linus"];

for (var n in names){

console.log (names[n]);

}
*/

// do while  

for (n=1; n<=100; n++){
if (n % 3 == 0 && n % 5 != 0){
console.log("fiz");
}
else if(n % 5 == 0 && n % 3 != 0) {
    console.log("buz");
}
else if(n % 3 == 0 && n % 5 == 0) {
    console.log("fizbuz");
}else{
    console.log(n);
}
}
