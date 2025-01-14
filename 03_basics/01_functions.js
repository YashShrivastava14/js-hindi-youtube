
const addingTwoNumbers = function (num1, num2) {
  // definition has parameters
  console.log(`num1 is ${num1} and num2 is ${num2}`);

  if (!num1 && !num2) {
    console.log("Please enter the numbers.");
  } else if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    console.log("The sum of given inputs is not possible.");
  }
};

console.log(addingTwoNumbers(2, "5")); // calling has arguments
