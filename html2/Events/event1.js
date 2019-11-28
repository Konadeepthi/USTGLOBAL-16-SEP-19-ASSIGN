function showMessage(){
    alert('hi hello')
}
function changeColor(){
    let pElement=document.getElementById('mover')
    pElement.style.color='blue'
}
function removeColor(){
    let pElement=document.getElementById('mover')
    pElement.style.color='black'
}
function printHello(){
    console.log('hello')
   let userName= document.getElementById('username').value
   document.getElementById('showusername').textContent=userName;//content for below textbox
}
let name='deepthi'
let age=21
let phoneno=1234567890
console.log('name is '+name+' age is '+age+' phone no is '+phoneno);
console.log(`name is ${name} age is ${age} phone no is ${phoneno}`)
console.log(`2+2=${2+2}`)
document.getElementById('b1').disabled=false