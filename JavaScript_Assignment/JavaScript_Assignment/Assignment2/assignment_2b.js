 // Fibonocci Series
    //Named Function
    console.log("fibonocci series named function");
    var a=10;
     fib(a);
    function fib(b){

        var fib1=0,fib2=1,fib3=0;
        console.log(fib1);
        console.log(fib2);
        
        while(fib3<b){
            fib3=fib1+fib2;
            fib1=fib2;
            fib2=fib3;
            console.log(fib3);
        }

    }
    //Annonym Function
    console.log("fibonocci series Annonym function");
    var b=20;
    var fib2=function(a){
        var fib1=0,fib2=1,fib3=0;
        console.log(fib1);
        console.log(fib2);
        
        while(fib3<b){
            fib3=fib1+fib2;
            fib1=fib2;
            fib2=fib3;
            console.log(fib3);
        }
        
    }
    fib2(b);
    //self Invoked function
    console.log("fibonocci series Self Invokde function");
    (function(c){
        var fib1=0,fib2=1,fib3=0;
        console.log(fib1);
        console.log(fib2);
        
        while(fib3<b){
            fib3=fib1+fib2;
            fib1=fib2;
            fib2=fib3;
            console.log(fib3);
        }
    })(12);
    //Fat Arrow
    console.log("fibonocci series Fat Arrow function");
    var fib3=(d)=>{
        var fib1=0,fib2=1,fib3=0;
        console.log(fib1);
        console.log(fib2);
        
        while(fib3<b){
            fib3=fib1+fib2;
            fib1=fib2;
            fib2=fib3;
            console.log(fib3);
        }
        
    }
    fib3(45)
   