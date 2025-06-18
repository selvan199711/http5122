//#### LAB 6 - DOM MANIPULATION ####
//PART 2: MYSTERY BOX
window.onload = pageloaded;

//LISTEN FOR load EVENT
function pageloaded(){
	var box = document.getElementById("mysteryBox");
	var button = document.getElementById("buttonBox");

	function newMsg(){
		if(confirm("Do you want to see something?")){
			box.style.display = "none";
			button.style.display = "block";
		
		}
	}
	function newBox(){
		button.style.with = "600px";
		button.style.background = "orange";
		button.innerHTML = "<h2>SURPRISE!!</h2>";

	}
	box.onmouseover = newMsg;
	button.onclick = newBox;
}

//'WRAPPER' FUNCTION FOR DOM LOGIC

	//GET DOM ELEMENTS WE'LL NEED


	//====CREATE THE FUNCTIONS WE'LL NEED====
	//FUNCTION TO ASK USER


	//FUNCTION TO CHANGE buttonBox


	//SETUP LISTENERS


//END onload FUNCTION