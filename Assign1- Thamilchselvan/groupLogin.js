const correctTeamNumber =3;
const ValidMembers = ["Thamilchselvan Kethareswaran","Sachin Sing","Kadelle Liburd","Navaneeth Joshy"];

// Main login function
function groupLogin() {
    // Ask the user for the team number
    const teamNumber = prompt("Please enter your team number (numeral, not text):");

    // Check if the team number is correct using a switch statement
    switch (parseInt(teamNumber)) {
        case correctTeamNumber:
            // Team number is correct, ask for the firstname
            const firstName = prompt("Please enter your first name:");

            // Check if the name is in the list
            if (ValidMembers[firstName]) {
                alert(`Welcome, ${ValidMembers[firstName]}!`);
            } else {
                // Name is not recognized
                alert("Access denied! Name not recognized.");
            }
            break;

        default:
            // Incorrect team number
            alert("Access denied! Incorrect team number.");
            break;
    }
}

// Trigger the login function when the page loads
groupLogin();