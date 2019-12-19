// Prime or not
    
console.log("number is prime or not using named function");
var a=12;
prime(a);
function prime(b){
    var flag=false;
    for(var i=2;i<(b/2);i++)
    {
        if(b%i===0){
            flag=true;
            break;
        }
    }
    if(flag===true){
        console.log(b+'  no is not prime');
    }else{
        console.log(b+' no is prime')
    }

}

//Annonym Function
console.log("number is prime or not using Annonyms function");
var prime1=function(b){
    var flag=false;
    for(var i=2;i<(b/2);i++)
    {
        if(b%i===0){
            flag=true;
            break;
        }
    }
    if(flag===true){
        console.log(b+'  no is not prime');
    }else{
        console.log(b+'  no is prime')
    }
}
prime1(5);

//self invoked 
console.log("number is prime or not using Self Invoked function");
(function(b){
    var flag=false;
    for(var i=2;i<(b/2);i++)
    {
        if(b%i===0){
            flag=true;
            break;
        }
    }
    if(flag===true){
        console.log(b+'  no is not prime');
    }else{
        console.log(b+'  no is prime')
    }
})(87);

//Fat Arrow
console.log("number is prime or not using Fat Arrow function");
prime3=b=>{
    var flag=false;
    for(var i=2;i<(b/2);i++)
    {
        if(b%i===0){
            flag=true;
            break;
        }
    }
    if(flag===true){
        console.log(b+'  no is not prime');
    }else{
        console.log(b+'  no is prime')
    }
}
prime3(65);
console.log(h1);
var h1;

