var age = Number(prompt("Give me your age!"));

if (age < 0) {
	console.log("Invalid input")
}

if (age === 21) {
	console.log("happy 21st birthday!!!")
}

if (age % 2 === 1) {
	console.log("your age is odd!")
}

if (age % Math.sqrt(age) === 0) {
  	console.log("Your age is a perfect square!");
}
