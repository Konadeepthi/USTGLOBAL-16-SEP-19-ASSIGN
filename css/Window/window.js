console.log('window object',window);
console.log('this keyword',this)
console.log(this===window)
//alert('welcome to javascript class')
//alert('welcome to ust global and test yentra')
//confirm('are you sure you want to delete')
//let confirmDelete=confirm('do you want to save password')
//console.log('confirm save',confirmDelete);
//let userName=prompt('what is your name','deepthi')
//console.log('user name',userName)
const person={
    firstName:'Aliya',
    age:26,
    lastName:'kapoor',
    getName:function(){
        console.log('this keyword',this);
        return this.firstName+' '+this.lastName
    }
}
let fullName=person.getName()
console.log('Full Name',fullName)