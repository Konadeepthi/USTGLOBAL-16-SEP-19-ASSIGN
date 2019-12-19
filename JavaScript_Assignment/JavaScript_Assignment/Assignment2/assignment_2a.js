console.log("============================================");


var a=5;
console.log("factorial named function");
fact(a)
function fact(a){
    var fact_no=1;
    var i;
    for( i=a;i>=1;i--){
        fact_no=fact_no*i;
    }
    console.log("factorial of "+a+"is="+fact_no);
}   
//annonyms function
console.log("factorial annonym function");
var fac= function(c){
    var n1=1;
    for(var j=c;j>=1;j--){
        n1*=j;
    }
    return n1;
}
var d=10;
console.log('fact of '+d+' is='+fac(d));
//self invokation function
console.log("factorial self invoked function");

(function(a){
var sum=1;
for(var i=a;i>=1;i--){
    sum*=i;
}
console.log("fact of"+a+' is='+sum);
})(12);
//fat  Arrow
console.log("factorial Fat Arrow function");
var n=7;
var sumfact=1;
var facts=a=>{
for(var i=a;i>=1;i--){
    sumfact*=i;
}
}
facts(n);
console.log("factorial of "+n+' is'+sumfact);


