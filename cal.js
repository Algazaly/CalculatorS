// // const conversionRates = {
// //   milligram: 0.001,
// //   gram: 1,
// //   kilogram: 1000,
// //   pound: 453.592,
// //   ton: 1_000_000,
// //   carat: 0.2
// // };

// // const inputs = document.querySelectorAll(".weight-input");

// // inputs.forEach(input => {
// //   input.addEventListener("input", function () {
// //     if (this.value === "") return;

// //     const fromUnit = this.dataset.unit;
// //     const fromValue = parseFloat(this.value);
// //     const valueInGrams = fromValue * conversionRates[fromUnit];

// //     inputs.forEach(otherInput => {
// //       const toUnit = otherInput.dataset.unit;
// //       if (otherInput !== this) {
// //         const convertedValue = valueInGrams / conversionRates[toUnit];
// //         otherInput.value = convertedValue.toFixed(4);
// //       }
// //     });
// //   });
// // });

const display = document.getElementById("display");
const clearBtn = document.getElementById("clear");
const buttons = document.querySelectorAll(".btn"); // Get all buttons


// for (let i = 0; i < buttons.length; i++) {
//     let btn = buttons[i]; // Get each button
//     btn.addEventListener("click", function () {
//         const value = btn.getAttribute("data-value");
//         display.value += value; // Add clicked value to display
//     });
// }


// buttons.forEach(btn => {
//   btn.addEventListener('click', function () {
//     const value = btn.getAttribute('data-value'); // Get the button's value
//     display.value += value; // Add it to the display
//   });
// });

// Get the input display
// const display = document.getElementById("display");

// // Get all buttons with class "btn"
// const buttons = document.querySelectorAll(".btn");

// // For each button, add a click event
// buttons.forEach(btn => {
//   btn.addEventListener('click', function () {
//     const value = btn.getAttribute('data-value'); // Get the button's value
//     display.value += value; // Add it to the display
//   });
// });

//const buttons = document.querySelectorAll(".btn");
//const display = document.getElementById("display");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "=") {
      try {
        currentInput = eval(currentInput);
        display.value = currentInput;
      } catch {
        display.value = "Error";
        currentInput = "";
      }
    } else if (value === "C") {
      currentInput = "";
      display.value = "";
    } else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});


function evaluate() {
    
};
