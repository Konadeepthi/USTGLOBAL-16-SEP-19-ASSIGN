const items=[{
    name:'ear ring',
    id: 1,
    price:1000
},{
    name:'kajal',
    id:2,
    price:1500
},{
    name:'trimmer',
    id:3,
    price:4000
},{
    name:"beardo",
    id:4,
    price:6500
}
];

const items1=items.map(val=> { 
   // let val1=val;
    val.price+=300;
    return val;
});
console.log(items1)

const item2=items.filter(val=>val.price>1500);
console.log(item2)

console.log("============================================================");

let arr=[1,2,3,4,5,6];
let bike=['hero','bajaj','tvs','royal enfield'];
let laptop=['lenovo','hp','asus','gateway'];
let even=[1,2,3,4,5,6,7,8,9,10,11,13,14,16,16];
let bank=['icici','sbi','hdfc','canara'];
let students=[{
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

let mobiles=[{
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


console.log("============================================================");


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

console.log("=================================================================");
console.log("checking array or not using isArray() function");

console.log("mobiles is a array 1",Array.isArray(mobiles));
console.log("bank is a array 2",Array.isArray(bank));
console.log("laptop is a array 3",Array.isArray(laptop));
console.log("students is a array 4",Array.isArray(students));
console.log("arr is a array 5",Array.isArray(arr));
console.log("even is a array 6",Array.isArray(even));
console.log("colleges is a array 7",Array.isArray(colleges));
console.log("bike is a array 8",Array.isArray(bike));
console.log("skills is a array 9",Array.isArray(skills));
console.log("bags is a array 10",Array.isArray(bags));



console.log("=================================================================");
console.log("checking whether given element is present or not in array using includes() function");


console.log("hero in bikes 1",bike.includes('hero'));
console.log("hero in bikes from index 3    2",bike.includes('hero',3));
console.log("23 in array 3",arr.includes(23));
console.log("hp in laptop 4",laptop.includes('hp'));
console.log("lenovo in laptop from index 3   5",laptop.includes('lenovo',3));
console.log("skybags in bags 6",bags.includes('skybags'));
console.log("skybags in bags from index 2   7",bags.includes('skybags',2));
console.log("java in skills 8",skills.includes('java'));
console.log("icici in banks 9",bank.includes('icici'));
console.log("icici in bikes from index 3    10",bank.includes('icici',3));


console.log("=================================================================");
console.log("adding element to present array using push() function");

console.log(bike);
bike.push("fz");
console.log('after adding 1',bike);

console.log(laptop);
laptop.push("acer");
console.log('after adding 2',laptop);

console.log(bank);
bank.push("syndicate");
console.log('after adding 3',bank);

console.log(bank);
bank.push("punjab national");
console.log('after adding 4',bank);

console.log(bike);
bike.push("r15");
console.log('after adding 5',bike);

console.log(arr);
arr.push(155);
console.log('after adding 6',arr);

console.log(bags);
bags.push("dell");
console.log('after adding 7',bags);

console.log(skills);
skills.push("c#");
console.log('after adding 8',skills);

console.log(bags);
bags.push("acer");
console.log('after adding 9',bags);

console.log(skills);
skills.push("R programming");
console.log('after adding 10',skills);


console.log("=================================================================");
console.log("removing element to present array using pop() function");

console.log(bags);
bags.pop();
console.log('after removing 1',bags);


console.log(bags);
bags.pop();
console.log('after removing 2',bags);

console.log(bike);
bike.pop();
console.log('after removing 3',bike);

console.log(bike);
bike.pop();
console.log('after removing 4',bags);

console.log(bike);
bike.pop();
console.log('after removing 5',bike);

console.log(skills);
skills.pop();
console.log('after removing 6',skills);

console.log(skills);
skills.pop();
console.log('after removing 7',skills);

console.log(arr);
arr.pop();
console.log('after removing 8',arr);

console.log(arr);
arr.pop();
console.log('after removing 9',arr);

console.log(bank);
bank.pop();
console.log('after removing 10',bank);

console.log("=================================================================");
console.log("adding element from starting arrray to present array using unshift() function");


console.log(bike);
bike.unshift("fz");
console.log('after adding 1',bike);

console.log(laptop);
laptop.unshift("acer");
console.log('after adding 2',laptop);

console.log(bank);
bank.unshift("syndicate");
console.log('after adding 3',bank);

console.log(bank);
bank.unshift("punjab national");
console.log('after adding 4',bank);

console.log(bike);
bike.unshift("r15");
console.log('after adding 5',bike);

console.log(arr);
arr.unshift(155);
console.log('after adding 6',arr);

console.log(bags);
bags.unshift("dell");
console.log('after adding 7',bags);

console.log(skills);
skills.unshift("c#");
console.log('after adding 8',skills);

console.log(bags);
bags.unshift("acer");
console.log('after adding 9',bags);

console.log(skills);
skills.unshift("R programming");
console.log('after adding 10',skills);

console.log("=================================================================");
console.log("removing element from starting arrray to present array using shift() function");


console.log(bags);
bags.shift();
console.log('after removing 1',bags);


console.log(bags);
bags.shift();
console.log('after removing 2',bags);

console.log(bike);
bike.shift();
console.log('after removing 3',bike);

console.log(bike);
bike.shift();
console.log('after removing 4',bags);

console.log(bike);
bike.shift();
console.log('after removing 5',bike);

console.log(skills);
skills.shift();
console.log('after removing 6',skills);

console.log(skills);
skills.shift();
console.log('after removing 7',skills);

console.log(arr);
arr.shift();
console.log('after removing 8',arr);

console.log(arr);
arr.shift();
console.log('after removing 9',arr);

console.log(bank);
bank.shift();
console.log('after removing 10',bank);

console.log("=================================================================");
console.log("replacing element arrray to present array using splice() function");


console.log(bike);
bike.splice(1,2,"fz");
console.log('after replacing 1',bike);

console.log(laptop);
laptop.splice(1,2,"acer");
console.log('after replacing 2',laptop);

console.log(bank);
bank.splice(1,2,"syndicate");
console.log('after replacing 3',bank);

console.log(bank);
bank.splice(1,2,"punjab national");
console.log('after replacing 4',bank);

console.log(bike);
bike.splice(1,2,"r15");
console.log('after replacing 5',bike);

console.log(arr);
arr.splice(1,2,155);
console.log('after replacing 6',arr);

console.log(bags);
bags.splice(1,2,"dell");
console.log('after replacing 7',bags);

console.log(skills);
skills.splice(1,2,"c#");
console.log('after replacing 8',skills);

console.log(bags);
bags.splice(1,2,"acer",'apple');
console.log('after replacing 9',bags);

console.log(skills);
skills.splice(1,1,"R programming");
console.log('after replacing 10',skills);


console.log("=================================================================");
console.log("replacing element arrray to present array using splice() function");


console.log(bike);
bike.slice(1,1);
console.log('after adding 1',bike);

console.log(laptop);
laptop.slice(1,1);
console.log('after adding 2',laptop);

console.log(bank);
bank.slice(1,1);
console.log('after adding 3',bank);

console.log(bank);
bank.slice(1,1);
console.log('after adding 4',bank);

console.log(bike);
bike.slice(1,1);
console.log('after adding 5',bike);

console.log(arr);
arr.slice(1,1);
console.log('after adding 6',arr);

console.log(bags);
bags.slice(1,1);
console.log('after adding 7',bags);

console.log(skills);
skills.slice(1,1);
console.log('after adding 8',skills);

console.log(bags);
bags.slice(1,1);
console.log('after adding 9',bags);

console.log(skills);
skills.slice(0,2);
console.log('after adding 10',skills);

console.log("=================================================================");
console.log("searching element  present array using indexof() function");


console.log(bike);

console.log('index 1',bike.indexOf("hero",2));

console.log(laptop);

console.log('index 2',laptop.indexOf("acer"));

console.log(bank);

console.log('index 3',bank.indexOf("syndicate",2));

console.log(bank);

console.log('index 4',bank.indexOf("punjab national"));


console.log(bike);

console.log('index 5',bike.indexOf("r15"));

console.log(arr);
console.log('index 6',arr.indexOf(155));

console.log(bags);

console.log('index 7',bags.indexOf(1,2,"dell"));

console.log(skills);

console.log('index 8',skills.indexOf(1,2,"c#"));

console.log(bags);

console.log('index 9',bags.indexOf('apple'));

console.log(skills);

console.log('index 10',skills.splice("R programming"));

console.log("=================================================================");
console.log("separator using join() function");



console.log(bike);
bike.join('-');
console.log('after separating 1',bike);

console.log(laptop);
laptop.join('#');
console.log('after separating 2',laptop);

console.log(bank);
bank.join("@");
console.log('after separating 3',bank);

console.log(bank);
bank.join("$");
console.log('after separating 4',bank);

console.log(bike);
bike.join("--");
console.log('after separating 5',bike);

console.log(arr);
arr.join("&");
console.log('after separating 6',arr);

console.log(bags);
bags.join("!!!");
console.log('after separating 7',bags);

console.log(skills);
skills.join("%");
console.log('after separating 8',skills);

console.log(bags);
bags.join('%');
console.log('after separating 9',bags);

console.log(skills);
skills.join("#");
console.log('after separating 10',skills);

console.log('===============================================');
let str1='hello testyantra';
let str2='hello darshan';
let str3="javascript is scripting language";
let str4='java is a programming language';
let str5="hello how are you";
let str6="javascriprt used in both server side and client side";
let str7="javascript is used to create page dynamically"
let str8="html is hypertext markup language";
let str9="css is a cascading stylesheet";
let str10="bootstrap is a framework";

let str=str1.toUpperCase();
console.log("to uppercase() 1",str);


 str=str2.toUpperCase();
console.log("to uppercase() 2",str);

 str=str3.toUpperCase();
console.log("to uppercase() 3",str);

 str=str4.toUpperCase();
console.log("to uppercase() 4",str);

 str=str5.toUpperCase();
console.log("to uppercase() 5",str);

 str=str6.toUpperCase();
console.log("to uppercase() 6",str);

 str=str7.toUpperCase();
console.log("to uppercase() 7",str);

 str=str8.toUpperCase();
console.log("to uppercase() 8",str);

 str=str9.toUpperCase();
console.log("to uppercase() 9",str);

 str=str10.toUpperCase();
console.log("to uppercase() 10",str);



console.log('===============================================');

str=str1.toLowerCase();
console.log("to lowercase() 1",str);

str=str2.toLowerCase();
console.log("to lowercase() 2",str);
str=str3.toLowerCase();
console.log("to lowercase() 3",str);
str=str4.toLowerCase();
console.log("to lowercase() 4",str);
str=str5.toLowerCase();
console.log("to lowercase() 5",str);
str=str6.toLowerCase();
console.log("to lowercase() 6",str);
str=str7.toLowerCase();
console.log("to lowercase() 7",str);
str=str8.toLowerCase();
console.log("to lowercase() 8",str);
str=str9.toLowerCase();
console.log("to lowercase() 9",str);
str=str10.toLowerCase();
console.log("to lowercase() 10",str);


console.log('===============================================');
str=str1.charAt(7);
console.log("charAt() function 1",str);

str=str2.charAt(12);
console.log("charAt() function 2",str);
str=str3.charAt(17);
console.log("charAt() function 3",str);
str=str4.charAt(1);
console.log("charAt() function 4",str);
str=str5.charAt(1);
console.log("charAt() function 5",str);
str=str6.charAt(12);
console.log("charAt() function 6",str);
str=str7.charAt(5);
console.log("charAt() function 7",str);
str=str8.charAt(7);
console.log("charAt() function 8",str);
str=str9.charAt(9);
console.log("charAt() function 9",str);
str=str10.charAt(10);
console.log("charAt() function 10",str);

console.log("===============================================================");

str=str1.indexOf('y',6);
console.log("indexOf() function 1",str);

str=str2.indexOf('h',0);
console.log("indexOf() function 2",str);
str=str3.indexOf('l',8);
console.log("indexOf() function 3",str);
str=str4.indexOf('m',3);
console.log("indexOf() function 4",str);
str=str5.indexOf('l',1);
console.log("indexOf() function 5",str);
str=str6.indexOf('n',5);
console.log("indexOf() function 6",str);
str=str7.indexOf('j',6);
console.log("indexOf() function 7",str);
str=str8.indexOf('h',3);
console.log("indexOf() function 8",str);
str=str9.indexOf('g',2);
console.log("indexOf() function 9",str);
str=str10.indexOf('k',0);
console.log("indexOf() function 10",str);

console.log("===================================================================");
 console.log("before concat 1",str1);
 str=str1.concat("concat");
 console.log("after concat",str);

 console.log("before concat 2",str1);
 str=str2.concat("concat");
 console.log("after concat",str);

 console.log("before concat 3",str1);
 str=str3.concat("concat");
 console.log("after concat",str);

 console.log("before concat 4",str1);
 str=str4.concat("concat");
 console.log("after concat",str);

 console.log("before concat 5",str1);
 str=str5.concat("concat");
 console.log("after concat",str);

 console.log("before concat 6",str1);
 str=str6.concat("concat");
 console.log("after concat",str);

 console.log("before concat 7",str1);
 str=str7.concat("concat");
 console.log("after concat",str);

 console.log("before concat 8",str1);
 str=str8.concat("concat");
 console.log("after concat",str);

 console.log("before concat 9",str1);
 str=str9.concat("concat");
 console.log("after concat",str);

 console.log("before concat 10",str1);
 str=str10.concat("concat");
 console.log("after concat",str);

console.log("===============================================================");

console.log("include() to check string present or not 1",str1.includes("hello",0));

console.log("include() to check string present or not 2",str2.includes("hello",0));

console.log("include() to check string present or not 3",str3.includes("java",0));

console.log("include() to check string present or not 4",str4.includes("script",3));

console.log("include() to check string present or not 5",str5.includes("html",0));

console.log("include() to check string present or not 6",str6.includes("css",0));

console.log("include() to check string present or not 7",str7.includes("java",0));

console.log("include() to check string present or not 8",str8.includes("bootstrap",0));

console.log("include() to check string present or not 9",str9.includes("css",0));

console.log("include() to check string present or not 10",str10.includes("bootstrap",0));

console.log("============================================================================");

console.log("search string 1",str1.search('hello'));

console.log("search string 2",str2.search('hello'));

console.log("search string 3",str3.search('java'));

console.log("search string 4",str4.search('script'));

console.log("search string 5",str5.search('html'));

console.log("search string 6",str6.search('css'));

console.log("search string 7",str1.search('test'));

console.log("search string 8",str7.search('yantra'));

console.log("search string 9",str8.search('java'));

console.log("search string 10",str10.search('strap'));

console.log("==============================================================================");

console.log("before replacing 1",str1);
console.log("replace string",str1.replace('h','b'));



console.log("before replacing 2",str2);
console.log("replace string",str2.replace('h','b'));


console.log("before replacing 3",str3);
console.log("replace string",str3.replace('h','b'));


console.log("before replacing 4",str4);
console.log("replace string",str4.replace('h','s'));


console.log("before replacing 5",str5);
console.log("replace string",str5.replace('h','m'));


console.log("before replacing 6",str6);
console.log("replace string",str6.replace('h','d'));


console.log("before replacing 7",str7);
console.log("replace string",str7.replace('h','v'));


console.log("before replacing 8",str8);
console.log("replace string",str8.replace('h','b'));


console.log("before replacing 9",str9);
console.log("replace string",str9.replace('h','g'));


console.log("before replacing 10",str10);
console.log("replace string",str10.replace('b','j'));

console.log("=======================================================");

console.log("1 substr() of "+str1+"  is  ",str1.substr(0,3));


console.log("2 substr() of "+str2+"  is  ",str2.substr(0,3));


console.log("3 substr() of "+str3+"  is  ",str3.substr(0,3));


console.log("4 substr() of "+str4+"  is  ",str4.substr(0,3));


console.log("5 substr() of "+str5+"  is  ",str5.substr(0,3));


console.log("6 substr() of "+str6+"  is  ",str6.substr(0,3));


console.log("7 substr() of "+str7+"  is  ",str7.substr(0,3));


console.log("8 substr() of "+str8+"  is  ",str8.substr(0,3));


console.log("9 substr() of "+str9+"  is  ",str9.substr(0,3));


console.log("10 substr() of "+str10+"  is  ",str10.substr(0,3));

console.log("================================================================");

str=str10.split('f');
console.log("1 split() of "+str1+"  is  ",str1.split('e'));

console.log("2 split() of "+str2+"  is  ",str2.split('s'));
console.log("3 split() of "+str3+"  is  ",str3.split('l'));
console.log("4 split() of "+str4+"  is  ",str4.split('j'));
console.log("5 split() of "+str5+"  is  ",str5.split('h'));
console.log("6 split() of "+str6+"  is  ",str6.split('k'));
console.log("7 split() of "+str7+"  is  ",str7.split('l'));
console.log("8 split() of "+str8+"  is  ",str8.split('m'));
console.log("9 split() of "+str9+"  is  ",str9.split('d'));
console.log("10 split() of "+str10+"  is  ",str);

