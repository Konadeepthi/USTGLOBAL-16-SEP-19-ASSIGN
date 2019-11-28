const num=[1,2,3,4,5]
const num1=num.map(function(value,index){
    let newVal=value+10;
    return newVal
})
console.log(num1)
console.log(num)
const num2=num.filter(function(value,index){
    if(value>1)
    {
        return true;
    }else{
        return false
    }
})
console.log('filter',num2)
console.log(num)