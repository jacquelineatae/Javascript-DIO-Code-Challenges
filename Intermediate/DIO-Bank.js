/* Challenge

The company "DIO Bank" needs to receive data from a bank account via a JSON object and print the following information on the screen: the customer's name, the account number and the balance. 
Input

The input must receive the values that will fill the JSON object contaBancaria. It must contain the following properties:

    customer: a string with the customer's name.
    numeroConta: a string with the account number.
    balanceInitial: a number representing the account's initial balance.

Important: input must take place according to the order of information provided above.

Output

It should return a message (string) informing you of the customer's name, the account number and the final balance, as follows:

Customer name: ${contaBancaria.cliente}
Account number: ${contaBancaria.numeroConta}
Balance: R$ ${contaBancaria.saldo.toFixed(2)} */

//TODO: Create an object called contaBancaria to store account information.
let contaBancaria = {
    // Get the customer name of the account:
    customer: gets(),
  
    //TODO: Now create the other properties numeroAccount and balanceInitial:
    numeroAccount: gets(),
    balanceInitial: parseFloat(gets()), // Use parseFloat to convert the input into a decimal number
  };
  
  // Print the information: Name, Account Number and Balance:
  print(`Customer name: ${contaBancaria.cliente}`);
  print(`Account number: ${contaBancaria.numeroConta}`);
  print(`Balance: R$ ${contaBancaria.saldoInicial.toFixed(2)}`);