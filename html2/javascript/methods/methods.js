const hobbies=['sleeping','movies','cricket','cooking','singing']
console.log(typeof hobbies);
const ar=Array.isArray(hobbies);
console.log(ar);
const str=hobbies.includes('cricket');
console.log(str);
hobbies.push('Guitar','vollyball');
console.log(hobbies);
hobbies.pop();
console.log(hobbies);
hobbies.unshift('eating','dancing')
console.log(hobbies);
hobbies.shift()
console.log(hobbies);
const str4=hobbies.splice(1,2,'watching','pubg');
console.log(str4);
const str3=hobbies.slice(2,4)
console.log(str3)
const str5=hobbies.indexOf('cricket',1)
console.log(str5);
const str6=hobbies.join('-');
console.log(str6)