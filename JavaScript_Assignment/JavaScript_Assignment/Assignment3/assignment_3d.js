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
