//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========
let cart = [];
let total = 0;

//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.
while (true) {

	//GET ITEM COST FROM USER
	let input = prompt("Enter the price of your item:");

	//CONVERT USER INPUT TO A NUMBER
	let price = parseInt(input);

	//ADD ITEM COST TO RUNNING TOTAL VARIABLE
	total += price;

	//PUSH ITEM COST TO CART ARRAY
	cart.push(price);

	//CHECK IF TOTAL METS OR EXCEEDS $35
	if (total >= 35) {
		//SEND POPUP MESSAGE TO USER
		alert("Your shipping for this order will be free!");
		break;
	}
}

//SEND OUTPUT TO CONSOLE
console.log("Item prices: " + cart.join(" | "));
