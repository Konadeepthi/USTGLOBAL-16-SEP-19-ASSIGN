 //Circumference of circle
 console.log("circumference of circle Named function");
 var r=5;
 var s;
 circum(r);
 function circum(s){
     var res=2*Math.PI*s;
     console.log('circumference of circle of redius='+s+" is="+res);
 }


 //Annonym Function
 console.log("circumference of circle Annanyms function");
 var circum2=function(s){
     var res=2*Math.PI*s;
     console.log('circumference of circle of redius='+s+" is="+res);
 
 }
 var a=6;
 circum2(a);
 // Self Invoked Function
 console.log("circumference of circle Self Invoked function");

 (function(s){
     var res=2*Math.PI*s;
     console.log('circumference of circle of redius='+s+" is="+res);
 
 })(15);

 //Far Arrow
 console.log("circumference of circle Fat Arrow function");
 var circum3=s=>{
     var res=2*Math.PI*s;
     console.log('circumference of circle of redius='+s+" is="+res);
 
 }
 circum3(14);

