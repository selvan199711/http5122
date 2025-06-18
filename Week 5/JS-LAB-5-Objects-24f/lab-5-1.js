//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!
var meObject = {
    name: "Thamilchselvan",
    age: 27,
    sport: "Cricketer",
    interest: "Reading Books",

    details: function(){
        alert("My name is " + meObject.name + " " + "and I am a " + meObject.sport);
    }

}

console.log(meObject.sport);
meObject.details();

//alert("My name is " + meObject.name + " " + "and I am a " + meObject.sport);

