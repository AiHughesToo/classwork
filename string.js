var firstN ="alex"; 
var midN ="ivan";
var lastN ="hughes";
var fullN =firstN + " " + midN + " " + lastN;
console.log (firstN +" "+ midN +" "+ lastN);

var reversed = fullN
                .split("")
                .reverse()
                .join("");

            console.log (reversed);