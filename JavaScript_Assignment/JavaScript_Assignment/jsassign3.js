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

console.log("===============================================")

console.log('printing mobiles using for of loop 1');
for(var i of mobiles)
{
    console.log(i);
}
console.log('printing banks using for of loop 2');
for(var i of bank)
{
    console.log(i);
}
console.log('printing laptop using for of loop 3');
for(var i of laptop)
{
    console.log(i);
}
console.log('printing Students using for of loop 4');
for(var i of students)
{
    console.log(i);
}
console.log('printing array using for of loop 5');
for(var i of arr)
{
    console.log(i);
}
console.log('printing even number using for of loop 6');
for(var i of even)
{
    if(i%2===0){
    console.log(i);
    }
}

var colleges=[{
    name:'SSIT',
    location:'tumkur'
},{
name:'SIT',
location:'tumkur'}];

console.log('printing colleges using for of loop 7');
for(var i of colleges)
{
    console.log(i);
}

console.log('printing bike using for of loop 8');
for(var i of bike)
{
    console.log(i);
}

var skills=['c','java','js','html'];

console.log('printing skills using for of loop 9');
for(var i of skills)
{
    console.log(i);
}

var bags=['skybag','puma','reebok','nokia','hp'];

console.log('printing bags using for of loop 10');
for(var i of bags)
{
    console.log(i);
}


console.log("====================================================")

console.log('printing even number using for in loop 1');
for(var i in even)
{
    if(even[i]%2===0){
    console.log(even[i]);
    }
}

console.log('printing bank using for in loop 1');
for(var i in bank)
{
    
    console.log(bank[i]);
    
}
console.log('printing laptop using for in loop 2');
for(var i in laptop)
{
    
    console.log(laptop[i]);
    
}
console.log('printing students using for in loop 3');
for(var i in students)
{
    
    console.log(students[i]);
    
}

console.log('printing mobile using for in loop 4');
for(var i in mobiles)
{
    
    console.log(mobiles[i]);
    
}

console.log('printing array using for in loop 5');
for(var i in arr)
{
    
    console.log(arr[i]);
    
}
console.log('printing even numbers using for  in loop 6');
for(var i in even)
{
    if(even[i]%2===0)
    console.log(bank[i]);
    
}

console.log('printing colleges using for  in loop 7');
for(var i in colleges)
{
    
    console.log(colleges[i]);
    
}


console.log('printing bike using for in loop 8');
for(var i in bike)
{
    
    console.log(bike[i]);
    
}


console.log('printing skills using for in loop 9');
for(var i in skills)
{
    
    console.log(skills[i]);
    
}

console.log('printing bags using for in loop 10');
for(var i in bags)
{
    
    console.log(bags[i]);
    
}




console.log("===================================================")

console.log('printing bank using for each  loop 1');
bank.forEach(function (val,ind){
    
    console.log(val);
    
});

console.log('printing students using for each loop 2');
students.forEach(
function (val,ind){
    
    console.log(val);
    
});
console.log('printing mobiles using for each in loop 3');
mobiles.forEach(function(val,ind){
    
    console.log(val);
    
});
console.log('printing laptop using for each  loop 4');
laptop.forEach(function(val,ind){
    
    console.log(val);
    
});
console.log('printing array using for each loop 5');
arr.forEach(function (val,ind){
    
    console.log(val);
    
});
console.log('printing even number using for each loop 6');
even.forEach(function (val,ind){
    if(val%2===0)
    console.log(val);
    
});


console.log('printing colleges using for each loop 7');
colleges.forEach(function (val,ind){
    
    console.log(val);
    
});


console.log('printing bike using for each loop 8');
bike.forEach(function (val,ind){
    
    console.log(val);
    
});


console.log('printing bike using for each loop 9');
skills.forEach(function (val,ind){
    
    console.log(val);
    
});


console.log('printing bike using for each loop 10');
bags.forEach(function (val,ind){
    
    console.log(val);
    
});
