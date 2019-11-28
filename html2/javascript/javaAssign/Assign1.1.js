var sub=function(fact){
    var sum=1;
    for(var i=1;i<=fact;i++)
    {
         sum=sum*i;
    }
    return sum;
}
var result=sub(5);
console.log(result);
