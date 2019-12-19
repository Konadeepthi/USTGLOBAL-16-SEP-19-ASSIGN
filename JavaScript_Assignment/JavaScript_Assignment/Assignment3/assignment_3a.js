var arr=[1,2,3,4,5,6];
var bike=['hero','bajaj','tvs','royal enfield'];
var laptop=['lenovo','hp','asus','gateway'];
var even=[1,2,3,4,5,6,7,8,9,10,11,13,14,16,16];
var bank=['icici','sbi','hdfc','canara'];
var students=[{
    name:'ram',
    usn:1,
    perc:75
    },
    {
        name:'kumar',
        usn:2,
        perc:86
    }
];

var mobiles=[{
    name:'mi',
    type:'smartphone',
    price:16000
},
{
    name:'nokia',
    type:'smartphone',
    price:20000
}
];
console.log("===================================")
console.log('factorial no using for loop 1');
var a=5;

fact(a);
function fact(a){
    var fact_no=1;
    var i;
    for( i=a;i>=1;i--){
        fact_no=fact_no*i;
    }
    console.log("factorial of "+a+"is="+fact_no);
}  
console.log('fibinocci no using for loop 2');

var b=10;
 fib(b);
function fib(b){

    var fib1=0,fib2=1,fib3=0;
    console.log(fib1);
    console.log(fib2);
    
    while(fib3<b){
        fib3=fib1+fib2;
        fib1=fib2;
        fib2=fib3;
        console.log(fib3);
    }

} 
console.log('prime no using for loop 3');

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
console.log('printing array using for loop 4');
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}
console.log('printing bike using for loop 5');
for(var i=0;i<bike.length;i++)
{
    console.log(bike[i]);
}
console.log('printing bank using for loop 6');
for(var i=0;i<bike.length;i++)
{
    console.log(bank[i]);
}
console.log('printing laptop using for loop 7');
for(var i=0;i<laptop.length;i++)
{
    console.log(laptop[i]);
}
console.log('printing even numbers using for loop 8');
for(var i=0;i<even.length;i++)
{
   if((even[i]%2)===0){
    console.log(even[i]);
   }
}

console.log('printing Students using for loop 9');
for(var i=0;i<students.length;i++)
{
    console.log(students[i]);
}
console.log('printing mobiles using for loop 10');
for(var i=0;i<mobiles.length;i++)
{
    console.log(mobiles[i]);
}
