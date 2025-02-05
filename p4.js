/*
  Author: Your Name As Listed in Canvas
  Description: Utility Hub with a simple calculator and NATO converter
*/

// TODO: Write a function that performs a calculation based on the operator provided
//       and inputs from HTML input fields. If inputs are invalid, show an alert.
//       Example:
//         calculate("+") performs addition.
//       Required elements:
//       - parseFloat()
//       - isNaN()
//       - call getResult()
//       - call displayCalculatorResult()
//       - alert()
function calculate(operator) {
  const num1 = parseFloat(document.querySelector("#num1").value);
  const num2 = parseFloat(document.querySelector("#num2").value);

  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers!");
    return;
  }

  const result = getResult(num1, num2, operator);
  displayCalculatorResult(num1, num2, operator, result);
}

// TODO: Write a function that computes the result of a basic arithmetic operation
//       based on the operator provided. Return the result to the caller.
//       Example:
//         getResult(5, 3, "+") returns 8.
//       Required elements:
//       - if-else statements or switch statements
//       - arithmetic operations: +, -, *, /
//       - return statement
function getResult(num1, num2, operator) {
  let result;
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      result = "undefined";
    } else {
      result = num1 / num2;
    }
  } else {
    result = "undefined";
  }
  return result;
}


// TODO: Write a function that updates the calculator result in the HTML
//       and logs the calculation in the history list.
//       Example:
//         displayCalculatorResult(5, 3, "+", 8) updates the result to "8" and logs:
//         "5 + 3 = 8" in the history.
//       Required elements:
//       - querySelector()
//       - textContent
//       - createElement()
//       - appendChild()
function displayCalculatorResult(num1, num2, operator, result) {
  document.querySelector("#result").value = result;
  const history = document.querySelector("#history");
  const newLi = document.createElement("li");
  newLi.textContent = `${num1} ${operator} ${num2} = ${result}`;
  history.appendChild(newLi);
}


// TODO: Write a function that clears all calculation history entries.
//       Example: After calling clearHistory(), the history list is empty.
//       Required elements:
//       - querySelector()
//       - innerHTML
function clearHistory() {
  const history = document.querySelector("#history");
  history.innerHTML="";
}

// TODO: Write a function that clears all input fields in the calculator.
//       Example: clearCalculatorInputs() resets all fields to empty strings.
//       Required elements:
//       - querySelector()
//       - value property
function clearCalculatorInputs() {
  document.querySelector("#num1").value="";
  document.querySelector("#num2").value="";
  document.querySelector("#result").value="";
}

// TODO: Write a function that converts a single character to its NATO phonetic equivalent.
//       Example: chToNato("A") returns "Alfa".
//       Required elements:
//       - Object to map characters to NATO equivalents
//       - toUpperCase()
//       - return statement
function chToNato(ch) {
  const natoAlphabet = {
    A: "Alfa", B: "Bravo", C: "Charlie", D: "Delta", E: "Echo",
    F: "Foxtrot", G: "Golf", H: "Hotel", I: "India", J: "Juliett",
    K: "Kilo", L: "Lima", M: "Mike", N: "November", O: "Oscar",
    P: "Papa", Q: "Quebec", R: "Romeo", S: "Sierra", T: "Tango",
    U: "Uniform", V: "Victor", W: "Whiskey", X: "X-ray", Y: "Yankee",
    Z: "Zulu", 0: "Zero", 1: "One", 2: "Two", 3: "Three", 4: "Four",
    5: "Five", 6: "Six", 7: "Seven", 8: "Eight", 9: "Nine"
  };

  const upperChar = ch.toUpperCase();
  return natoAlphabet[upperChar] || ch;
}

// TODO: Write a function that converts a word into its NATO phonetic representation.
//       Example: wordToNato("Cat") returns "Charlie Alfa Tango".
//       Required elements:
//       - split()
//       - map()
//       - join()
function wordToNato(word) {
  return word
    .split("")
    .map(ch => chToNato(ch))
    .join(" ");
}

// TODO: Write a function that converts a sentence into its NATO phonetic representation.
//       Example: sentenceToNato("Hello World") returns 
//       "Hotel Echo Lima Lima Oscar  Whiskey Oscar Romeo Lima Delta".
//       Required elements:
//       - split()
//       - map()
//       - join()
function sentenceToNato(sentence) {
  return sentence
    .split(" ")
    .map(word => wordToNato(word))
    .join(" ");
}

// TODO: Write a function that displays the NATO phonetic representation of an input string.
//       Example: verbalize() updates the HTML to display the NATO version of the input.
//       Required elements:
//       - querySelector()
//       - textContent
//       - call sentenceToNato()
function verbalize() {
  const inputString = document.querySelector("#inputString").value;
  const natoResult = sentenceToNato(inputString);
  document.querySelector("#natoResult").textContent = natoResult;
}

// TODO: Write a function that clears the input and result fields for the NATO converter.
//       Example: clearNATOInputs() resets the input and output to empty strings.
//       Required elements:
//       - querySelector()
//       - value and textContent properties
function clearNATOInputs() {
  document.querySelector("#inputString").value = "";
  document.querySelector("#natoResult").textContent = "";
}

// TODO: Write a function that sets up event listeners for all buttons in the app.
//       Example: setup() assigns click events to calculator and NATO converter buttons.
//       Required elements:
//       - querySelector()
//       - addEventListener()
//       - call appropriate functions for each button
function setup() {
  document.querySelector("#add").addEventListener("click", () => calculate("+"));
  document.querySelector("#subtract").addEventListener("click", () => calculate("-"));
  document.querySelector("#multiply").addEventListener("click", () => calculate("*"));
  document.querySelector("#divide").addEventListener("click", () => calculate("/"));
  document.querySelector("#clearHistory").addEventListener("click", clearHistory);
  document.querySelector("#clearCalculator").addEventListener("click", clearCalculatorInputs);

  document.querySelector("#verbalize").addEventListener("click", verbalize);
  document.querySelector("#clearNATO").addEventListener("click", clearNATOInputs);
}

//An event listener for when the DOM content is loaded to initialize the setup function.
window.addEventListener("DOMContentLoaded", setup);