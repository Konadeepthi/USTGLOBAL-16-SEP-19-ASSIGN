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

console.log('printing skills using for of loop 9');
for(var i of skills)
{
    console.log(i);
}


console.log('printing bags using for of loop 10');
for(var i of bags)
{
    console.log(i);
}

