fact(5);
function fact(fact1){
    var sum=1
    for(var i=1;i<=fact1;i++)
    {
        var sum=sum*i;
    }
    console.log('factorial of a number is: '+sum);
}