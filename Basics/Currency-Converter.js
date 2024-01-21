/* Description

In this challenge, using conditional if and else structures and other algorithmic concepts, create a solution for the employees of a banking company who need to carry out international transactions, and an option is essential in their web systems to convert values from one currency to another, based on an exchange rate predefined by the team responsible. In this way, your program must take as input the amount needed for the conversion, the source currency and the destination currency. The value must then be converted and the result provided as output.
Input

The program should request the following information:

    Amount to be converted (to 2 decimal places).

    Source currency (e.g. "BRL" for Brazilian real).

    Destination currency (e.g. "USD" for United States dollar).

Output

The program should provide a message informing you of the value converted into the target currency. The message must contain the value, the source currency, the target currency and the converted value. The format of the output message should be:

"[amountMoney] [currencySource] equals [amountConverted] [currencyDestination]." */

const amountMoney = parseFloat(gets());
const currencySource = gets();
const currencyDestination = gets();

// Here it is checked if moneyValue is a number.
// !isNaN is a built-in JavaScript function that checks if the value passed as an argument is not a number.
if (!isNaN(moneyValue)) {
// Fixed definition of exchange rates for currencies:
  const exchangeRateBRLtoUSD = 0.1875;
  const exchangeRateBRLtoEUR = 0.1520;
  const rateCambioUSDtoBRL = 5.3333;
  const rateEURtoBRL = 6.5789;

  let valueConverted;

//TODO: Create a conditional structure that converts the currencies:
  if (currencySource === 'BRL' && currencyDestination === 'USD') {
    valueConverted = valueMoney * rateExchangeBRLtoUSD;
  } else if (currencyOrigin === 'USD' && currencyDestination === 'BRL') {
    valueConverted = valueMoney * rateExchangeUSDtoBRL;
  } else if (currencyOrigin === 'BRL' && currencyDestination === 'EUR') {
    valueConverted = valueMoney * rateExchangeBRLtoEUR;
  } else if (currencyOrigin === 'EUR' && currencyDestination === 'BRL') {
    valueConverted = valueMoney * rateExchangeEURtoBRL;
  } 

//TODO: Print the conversion to two decimal places:
  print(`${valueCash} ${currencyOrigin} equals ${valueConverted.toFixed(2)} ${currencyDestination}.`);
}