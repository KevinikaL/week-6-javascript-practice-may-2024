let part1 = document.getElementById("part1");
let part2 = document.getElementById("part2");
let part3 = document.getElementById("part3");
let part4 = document.getElementById("part4");
let messageParagraph = document.getElementById("messageParagraph");

function day1Part1() {
  let playerOne;
  playerOne = {};
  playerOne.name = prompt("What is your name?");
  playerOne.hiScore = prompt("Online play or Local play?");
  // Try it!
  // TODO: add a new question for the player. Assign the answer to the playerOne Object.

  // Try it!
  // TODO: add the answer to the new question here.
  messageParagraph.innerHTML = `Hi, ${playerOne.name}! Starting ${playerOne.hiScore} now!`;
}

part1.onclick = day1Part1;

function day1Part2() {
  let playertwo;
  playertwo = {};
  playertwo.name = prompt("What is your name?");
  playertwo.character = prompt("Would you like to be the Hero or Villain?");
  // Try it!
  // TODO: add a new question for the player. Assign the answer to the playerOne Object.

  // Try it!
  // TODO: add the answer to the new question to the innerHTML statment below.
  messageParagraph.innerHTML = `Welcome to Rage City, ${playertwo.name}! You've chosen to be a ${playertwo.character}!`;
}
part2.onclick = day1Part2;

function day1Part3() {
  let pet;
  pet = {};
  pet.name = prompt("What's your pet's name?");
  pet.type = prompt("What kind of pet do you have?");

  // Try it!
  // TODO: create a prompt to ask about a pet

  // Try it!
  // TODO: make a message based on the answers to the prompt.
  messageParagraph.innerHTML = `${pet.name} is a great name for a ${pet.type}!`;
}
part3.onclick = day1Part3;

// Try it!
// TODO: add your own idea for a prompt. Use an object to store the user's response.
function day1Part4() {
  let color;
  color = {};
  color.name = prompt("What is your favorite color?");
  color.like = prompt("What does your favorite color remind you of?");

  messageParagraph.innerHTML = `${color.name} is the perfect representation of ${color.like}!`;
}

part4.onclick = day1Part4;
