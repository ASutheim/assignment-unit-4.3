console.log("***** Cart Functions *****");
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
console.log("Test basket variable: should be an empty array:", basket);

function addItem(item) {
  basket.push(item);
  return true;
}

console.log(
  "Test of add.Item function: should return 'true'",
  addItem("oranges")
);
console.log("Array 'basket' should now contain 'oranges':", basket);

/*
The code above creates an array called 'basket' and a function 
called 'addItem' which pushes new items into the basket array.
*/

function listItems(basket) {
  for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
  }
  return "I did it";
}

console.log("Test of listItems function, should return 'oranges':");
listItems(basket);

/*The code above creates a function called 'listItems' 
which loops over the array 'basket' and console logs each 
item in the basket.*/

/*
function empty(basket) {
  for (let i = 0; i < basket.length; i++) {
    basket.shift[i];
  }

  Leaving this non-functional code in here because I would love
  to know why it wasn't working!
*/

function empty() {
  basket = [];
}

console.log("Test of 'empty' function: should return empty array brackets:");
empty();
console.log(basket);

/* The above code resets the array 'basket' to an empty array*/
