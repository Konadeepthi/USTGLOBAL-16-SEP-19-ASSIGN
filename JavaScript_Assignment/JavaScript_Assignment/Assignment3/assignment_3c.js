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

var colleges=[{
    name:'SSIT',
    location:'tumkur'
},{
name:'SIT',
location:'tumkur'}];

var skills=['c','java','js','html'];
var bags=['skybag','puma','reebok','nokia','hp'];


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



