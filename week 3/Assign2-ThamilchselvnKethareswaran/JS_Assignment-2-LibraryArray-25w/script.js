let movie1 = "Spider-Man";
let movie2 = "The Goat";
let movie3 = "LEO";
let movie4 = "Iron Man";
let movie5 = "Premalu";
let movie6 = "Sonic-3";
let movie7 = "Tourist Family";

let movies = [movie1, movie2, movie3, movie4, movie5, movie6, movie7];

for (let i = 0; i < movies.length; i++) {
  console.log("Movie " + (i + 1) + ": " + movies[i]);
}

let userInput = prompt("Which top 7 movie would you like?\nPick a number: 1-7");
let movieNumber = parseInt(userInput);

if (movieNumber >= 1 && movieNumber <= 7) {
  alert("Number " + movieNumber + " on the list is: " + movies[movieNumber - 1]);
} else {
  alert("Please enter a number between 1 and 7!");
}
