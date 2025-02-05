// 
// TODO: Function to validate user input
// Get the value entered in the input field
  // Convert the input to an integer

  // Validate the input to ensure it's a number between 0 and 5
    // Display an alert if the input is invalid
     // Return null for invalid input
  // Return the valid input
function validateInput() {
  const lightInput = document.getElementById('light-input').value;
  const input = parseInt(lightInput,10);

  if(isNaN(input) || input < 0 || input > 5) {
    alert("Please enter a number between 0 and 5");
    return null;
  }
  return input;
}

// TODO: Function to update the lights and display based on user input
// Get all elements with the class 'light' (representing the lights)
// Get the element to display the current input value
// Update the display with the input value
  // Loop through all lights and update their state (on/off)
    // Turn on the lights up to the input value
    // Turn off the remaining lights
function updateLightsAndDisplay(input) {
  const lights = document.querySelectorAll('.light')
  const lightDisplay = document.getElementById("light-display");

  lightDisplay.textContent = input;

  for(let i = 0; i < lights.length; i++) {
    if(i < input) {
      lights[i].classList.add("on");
    } else {
      lights[i].classList.remove("on");
    }
  }
}

// Main function to control the lights
function controlLights() {
  // Validate the user input
  const input = validateInput();

  // If the input is valid, update the lights and display
  if (input !== null) {
    updateLightsAndDisplay(input);
  }
}

