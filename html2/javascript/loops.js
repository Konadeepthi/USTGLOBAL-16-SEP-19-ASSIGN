var brands=['xyz','abc','pqr','agh']
for(var i=0;i<brands.length;i++)
{
    console.log(brands[i]);
}
for(var element of brands){
    console.log(element);
}
for(var index in brands){
    console.log(brands[index]);
}
var person={
    name:'sundari',
    Age:33,
    color:'white',

}
for(var key in person){
    console.log('value',person[key]);
}
