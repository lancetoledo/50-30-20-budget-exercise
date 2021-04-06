// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Intialize Variables
let income = 0;
let budget = {
  Needs: 0,
  Wants: 0,
  Savings: 0
};

// Function that takes parameter of income
function fiftyThirtyTwenty(income) {
  // Using Object.create() to create a new object that takes income and budgets it accordingly
  let newBudget = Object.create(budget);
  newBudget.Needs = income * 0.5;
  newBudget.Wants = income * 0.3;
  newBudget.Savings = income * 0.2;

  return newBudget;
}

console.log(fiftyThirtyTwenty(10000));
