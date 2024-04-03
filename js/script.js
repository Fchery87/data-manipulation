// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = n1 + n2 + n3 + n4 == 50;
console.log(isSum50);

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique =
  n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis =
  n1 + n2 + n3 + n4 == 50 &&
  (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2 &&
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
  n1 != n2 &&
  n1 != n3 &&
  n1 != n4 &&
  n2 != n3 &&
  n2 != n4 &&
  n3 != n4;



// PROBLEM 1: MATH PROBLEMS

// Check if all numbers are divisible by 5
const isDivisibleBy5 = n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;
console.log(`Are all numbers divisible by 5? ${isDivisibleBy5}`);

// Check if the first number is larger than the last
const isFirstLargerThanLast = n1 > n4;
console.log(`Is the first number larger than the last? ${isFirstLargerThanLast}`);

// Accomplish the arithmetic chain
const result = ((n2 - n1) * n3) % n4;
console.log(`Result of the arithmetic chain: ${result}`);

// Change the way isOver25 calculates and rename the variable
// Now it checks if any number is over 25 and caches the result
const isAnyOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log(`Is any number over 25? ${isAnyOver25}`);



// PROBLEM 2: PRACTICAL MATH

// Variables
let totalDistance = 1500; // Total distance of the trip in miles
let fuelBudget = 175; // Total fuel budget in dollars
let fuelCostPerGallon = 3; // Cost of fuel per gallon in dollars

// Object representing fuel efficiency at different speeds
const fuelEfficiencies = {
  55: 30, // Miles per gallon at 55 mph
  60: 28, // Miles per gallon at 60 mph
  75: 23 // Miles per gallon at 75 mph
};

// Function to calculate total fuel needed for the trip
function calculateTotalFuel(speed) {
  let milesPerGallon = fuelEfficiencies[speed];
  let totalFuel = totalDistance / milesPerGallon;
  return totalFuel;
}

// Function to check if budget is enough to cover fuel expense
function isBudgetEnough(totalFuel) {
  let fuelExpense = totalFuel * fuelCostPerGallon;
  return fuelExpense <= fuelBudget;
}

// Function to calculate total time for the trip
function calculateTotalTime(speed) {
  let totalTime = totalDistance / speed;
  return totalTime;
}

// Function to compare results for different speeds
function compareResults() {
  for (let speed in fuelEfficiencies) {
    let totalFuel = calculateTotalFuel(speed);
    let enoughBudget = isBudgetEnough(totalFuel);
    let totalTime = calculateTotalTime(speed);
    
    console.log("At " + speed + " mph:");
    console.log("Total fuel needed: " + totalFuel.toFixed(2) + " gallons");
    console.log("Will the budget be enough? " + (enoughBudget ? 'Yes' : 'No'));
    console.log("Total trip time: " + totalTime.toFixed(2) + " hours");
    console.log("---------------------------------------------");
  }
}

// Call the function to compare results
compareResults();

