//#### LAB 4 - FUNCTIONS ####
//PART 3:  WALKING THE DOG 


//################## CREATE YOUR checkTemp FUNCTION
//This function will check the temperature and alert the user if the temperature is not in the range
function checkTemp(currentTemp)
{
    if(currentTemp > 30 || currentTemp < -10)
        {
        return false;
    } 
    else 
    {
        return true;
    }
}
//It expects to receive the input from yhe user...
var usertemp = prompt("What is the current temperature?");

//It will return the value entered by the user...
var newtemp = parseFloat(usertemp);



//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
//  the value entered by the user is sent into the function and again follows the checktemp code
if(checkTemp(newtemp) === false){
    alert("Yikes! No weather  for dog walking");
} else {
    alert("You're good, have a nice walk!");
}