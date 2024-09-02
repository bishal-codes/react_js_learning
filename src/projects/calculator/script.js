/**
 * 1. Access the display element
 * 2. Access all the buttons
 *    - using querySelectorAll return a NodeList, which is not an Array
 *    - first convert the NodeList to an Array using Array.from()
 * 3. Loop through the buttons array (forEach loop method or map method)
 * 4. Add a click event listener (method) to each button: two arguments - event type and callback function
 * 5. get the textContent of the button clicked (innerText or textContent)
 * 6. Append the textContent to the display element
 * 7. create a variable that store the value of the display
 * 8. create a variable of all the operators
 * 9. create a function that evaluates the expression
 *
 * Conditions:
 * 10. if AC is clicked, clear the display
 * 11. check the last operator clicked and prevent multiple operators
 *      12. store the last character of the displayValue
 *      13. create a variable to store the last operator clicked
 *      14. if the last character is an operator, remove it
 *      15. store the last operator clicked
 *      16. append the textContent to the displayValue
 * 17. if . is clicked, prevent multiple decimal points and also prevent multiple operators after the decimal point
 * 18. if C is clicked, remove the last character from the displayValue
 * 19. if = is clicked, evaluate the expression
 */

// 1. Access the display element
const displayElement = document.querySelector(".calculator-display");

// 2. Access all the buttons
const buttons = document.querySelectorAll(".calculator-btn-area > div"); // NodeList []
const buttonsArray = Array.from(buttons); // Array []

// 7. create a variable that store the value of the display
let displayValue = "";

// 8. create a variable of all the operators
const operators = ["+", "-", "*", "/"];

// 9. create a function that displays the result of the calculation
const displayResult = (str) => {
  displayElement.innerText = str || "0.00";
};

// 13. create a variable to store the last operator clicked
let lastOperator = "";

// 3. Loop through the buttons and add a click event listener
buttonsArray.forEach((button) => {
  // 4. Add a click event listener to each button
  button.addEventListener("click", () => {
    // 5. get the textContent of the button clicked
    const buttonText = button.innerText;
    // 6. Append the textContent/innerText to the display element
    displayElement.innerText = buttonText;

    // 10. if AC is clicked, clear the display
    if (buttonText === "AC") {
      displayValue = "";
      displayResult();
      return;
    }

    // 11. check the last operator clicked and prevent multiple operators
    if (operators.includes(buttonText)) {
      // 12.  store the last character of the displayValue
      lastOperator = buttonText;
      console.log("lastOperator: ", lastOperator);
      console.log(displayValue);

      const lastCharacter = displayValue[displayValue.length - 1];
      if (operators.includes(lastCharacter)) {
        // if the last character is an operator, remove it
        displayValue = displayValue.slice(0, -1);
        displayValue += buttonText;

        displayResult(displayValue);
        return;
      }
    }

    // 17. if . is clicked, prevent multiple decimal points and also prevent multiple operators after the decimal point
    if (buttonText === ".") {
      console.log("lastOperator: ", lastOperator);

      if (lastOperator) {
        const lastOperatorIndex = displayValue.lastIndexOf(lastOperator); // position of the last operator clicked before the decimal point is clicked
        console.log("lastOperatorIndex: ", lastOperatorIndex);
        const lastNumber = displayValue.slice(lastOperatorIndex + 1); // get the last number after the last operator clicked
        console.log("lastNumber: ", lastNumber);
        if (lastNumber.includes(".")) {
          return;
        }
        if (!lastOperator && displayValue.includes(".")) {
          return;
        }
      }
    }

    // 18. if C is clicked, remove the last character from the displayValue
    if (buttonText === "C") {
      displayValue = displayValue.slice(0, -1);
      displayResult(displayValue);
      return;
    }

    // 19. if = is clicked, evaluate the expression
    if (buttonText === "=") {
      const result = eval(displayValue);
      displayValue = result.toString();
      displayResult(displayValue);
      return;
    }

    displayValue += buttonText;
    // 9. create a function that evaluates the expression
    displayResult(displayValue);
  });
});
