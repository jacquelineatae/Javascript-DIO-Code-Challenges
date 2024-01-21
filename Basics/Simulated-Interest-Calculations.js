/* Description

Demonstrate how to apply programming logic concepts such as data validation, inputs and outputs, calculations and conditionals. Then, develop an algorithmic solution for calculating simple interest in a banking corporation, where the program must request as input the initial capital, the interest rate and the period of time in months. It should then return the final amount to be paid, including interest, and provide the result.

Simple Interest Conditions:

Simple Interest (JS) = (Initial Capital * Interest Rate * Time Period) / 100
Final Amount (MF) = Initial Capital + Simple Interest
Input

The program should ask for the following information:

    Initial capital (in reais, to 2 decimal places).

    Interest rate (in percent, without the percentage symbol).

    Time period in months (an integer).

Output

The program should provide a message informing you of the final amount to be paid, including interest. The message must contain the initial capital, the interest rate, the time period and the final amount. The format of the output message should be:

"Amount in [Time Period], with R$ [Initial Capital], [Interest Rate]%, and: R$ [Final Amount]." */

// Entering values with the gets() function:
const capitalInitial = parseFloat(gets());
const interestRate = parseFloat(gets());
const timeMonths = parseInt(gets());

//!isNaN is a built-in JavaScript function that checks if the value passed as an argument is not a number.
if (!isNaN(initialCapital) && !isNaN(interestRate) && !isNaN(timeMonths) && timeMonths > 0) {
//TODO: Calculate the amount using the simple interest formula and the final amount by adding the simple interest to the initial capital:
  const simpleinterest = (initialcapital * interestrate * timeMonths) / 100;
  const finalamount = initialcapital + simpleinterest;

//TODO: Print the result with formatting, including the period, the initial capital, the interest rate and the final amount:
//Remember: Up to two decimal places for Initial Capital and Final Amount.
  print(`Amount in ${timeMonths} months, with initial ${initialCapital.toFixed(2)}, ${interestRate}% interest, and: R$ ${amountFinal.toFixed(2)}.`);
} else {
  print('Please enter valid values and a suitable time period.');
}