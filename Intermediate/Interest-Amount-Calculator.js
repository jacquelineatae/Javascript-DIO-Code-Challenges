/* Challenge

Imagine that you are a financial advisor at a banking institution and you need to create a calculator to help your clients estimate the amount they will have in their investment accounts after a certain period, taking into account an initial investment and a monthly interest rate. You need to create a program that makes this estimate quickly and effectively.
Input:

The program will receive a JSON object containing three input values:

    Initial investment (a real number) - represents the amount of money the customer wants to invest.
    Monthly interest rate (a real number) - the interest rate applied monthly to the investment, as a percentage.
    Period in months (a whole number) - the period in months over which the customer wishes to keep the investment.

Important: The amount with interest can be calculated using the compound interest formula:

Amount = Initial Investment * (1 + Monthly Interest Rate) ^ Period in Months
Output:

The program will provide the following information as output:

    Investment: Initial investment amount formatted to two decimal places.
    Interest Rate (%): The monthly interest rate provided as input.
    Period: The number of months provided as input.
    Amount with Interest: The total amount the customer will have after the specified period, calculated on the basis of the initial investment, interest rate and period, formatted to two decimal places. */
    
    const bankaccount = {
        investmentInitial: parseFloat(gets()),
        interestMonthly: parseFloat(gets()),
        periodMonths: parseInt(gets()),
       };
       
       // TODO: Calculate the monthly interest rate in decimal format (0 to 1) from the percentage rate provided:
       const interestrateDecimal = contaBancaria.taxaJurosMensal / 100;
       
       // TODO: Calculate the amount (total value after the investment) using the compound interest formula.
       const amount = contaBancaria.investimentoInicial * Math.pow((1 + taxaJurosDecimal), contaBancaria.períodoMeses);
       
       
       
       // Information about the investment is printed:
       print("Investment: " + contaBancaria.investimentoInicial.toFixed(2));
       print("Interest: " + contaBancaria.taxaJurosMensal);
       print("Period: " + contaBancaria.periodoMeses);
       print("Result: " + amount.toFixed(2));