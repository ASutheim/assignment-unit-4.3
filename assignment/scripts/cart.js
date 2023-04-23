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
