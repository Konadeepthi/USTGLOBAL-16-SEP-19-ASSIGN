function first(){
    setTimeout( function(){
    console.log('first functin executed')
},5000)
}
function second(){
    console.log('second function executed');
}
first();
second();