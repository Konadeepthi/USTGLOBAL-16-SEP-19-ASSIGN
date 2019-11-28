
var a=0;
var b=1;
function fibanacci(fib)
{
    for(var i=0;i<fib;i++)
    {
        console.log(a);
        var c=a+b;
        a=b;
        b=c;
    }
}
fibanacci(5);