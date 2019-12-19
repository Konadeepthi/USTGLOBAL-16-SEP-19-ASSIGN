console.log("===========================================");
console.log("creating objects without using new")

var person={
    name: 'ram',
    page : 23,
  
    getDetails:function () {
        console.log('name='+this.name+' age='+this.page);
    
    }
}
var car={
    name : 'Benz',
    color : 'black',
    details:function(){
        return 'car name='+this.name+' color='+this.color;
    }
}
var student={
    name: 'kumar',
    usn : '132CS',
    studentDetails:function(){
        console.log('student name='+this.name+' student USN='+this.usn);
    }
}
var laptop={
    brand : 'lenovo',
    color : 'black',
    lapDetails:function(){
        console.log("lap name="+this.name+" lap color="+this.color);
    }
}
var mobile={
    brand : 'nokia',
    type : 'smartphone',
    mobDetails:function(){
        console.log('name='+this.name+' type='+this.type);
    }
}
person.getDetails();
console.log(car.details());
laptop.lapDetails();
mobile.mobDetails();
student.studentDetails();
