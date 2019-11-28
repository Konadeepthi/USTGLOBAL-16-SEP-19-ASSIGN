let h1Element=document.getElementById('demo')
console.log('element',h1Element)
console.log('Element Text=',h1Element.textContent)
h1Element.textContent='Good Evening'
console.log('============')
let buttonElement=document.createElement('button')
buttonElement.textContent='click Me!!!!'
console.log('button Element',buttonElement)
document.body.appendChild(buttonElement)
let ulElement=document.createElement('ol')
let li1Element=document.createElement('li')
let li2Element=document.createElement('li')
let li3Element=document.createElement('li')
li1Element.textContent='java'
li2Element.textContent='sql'
li3Element.textContent='javascript'
ulElement.appendChild(li1Element)
ulElement.appendChild(li2Element)
ulElement.appendChild(li3Element)
document.body.appendChild(ulElement)
h1Element.style.color='red'
h1Element.style.fontSize='50px'