//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION
function avgvalue(num1, num2, num3, num4,num5){

//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.
var add = (num1 + num2 + num3 + num4 + num5)/5;
return add.toFixed(1);
}

//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
avgvalue(5, 10, 15, 20, 25);
console.log(avgvalue(5, 10, 15, 20, 25));

var css = 95;
var arrays = 92;
var database = 70;
var interaction = 85;
var timesheets = 80;

var avggrade = avgvalue(css, arrays, database, interaction, timesheets);
if(avggrade > 70){
    alert("Great, you have passed");
}
else{
    alert("Review required");
}