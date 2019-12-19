let n1;
let n2;
let str='invalid user';
let str1='invalid password';

function keyUp(){
     n1=document.getElementById("name").value;
    // n1.trim();
   
}
    function keyUP(){
        n2=document.getElementById("password").value;
       n2.trim();
      let n= n1.trim();
       if(n.length<5){
        document.getElementById("user-error").textContent='invalid user';
       }else{
        document.getElementById("user-error").textContent=' ';
       }
       let n3;
       n3=n2.trim();
       if(n3.length<6){
           document.getElementById("pasw-error").textContent='invalid password';
       }else{
        document.getElementById("pasw-error").textContent=' ';
       }
       if(n1.length>=5&&n2.length>=6){
           document.getElementById("btn").disabled=false;

       }
     
    }
    let c1=document.getElementById("check").value;
    function myFun(){
        let l=document.getElementById("password");
            if(l.type==="password")
            {
                l.type="text";
            }else{
                l.type="password";
            }
    
    }
    if(n2.length<6){
        document.getElementById("pasw-error").textContent='invalid password';
  }

