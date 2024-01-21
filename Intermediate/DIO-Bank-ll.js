/* Challenge

Now, let's expand on the previous challenge related to the bank balance. We're going to create a JavaScript program that simulates a bank account balance, but this time the program will include deposit and withdrawal operations.
Input

The input must receive the values that will fill the JSON object contaBancaria. It must contain the following properties:

BankAccount:

    nameCustomer: a string with the customer's name.
    balance: a number representing the account's initial balance.
    numOperacoes: a number indicating the number of operations to be carried out.

Operations

For each operation, the user must enter

    typeOperation: a string that can be 'deposit' or 'withdrawal'.
    valueOperation: a number representing the value of the operation.

Balance calculation

The account balance must be updated based on the deposit and withdrawal operations carried out by the user. The initial balance of the account is adjusted according to these operations.

Output

After all the operations, display the customer's name and the account's final balance.

Customer name: ${contaBancaria.cliente}
Closing balance: R$ ${contaBancaria.saldo.toFixed(2)} */

// Log to console
const bankaccount = {
    nameClient: "",
    balance: 0,
  };
  
  contaBancaria.nomeCliente = gets();
  contaBancaria.saldo = parseFloat(gets());
  
  const numOperacoes = parseInt(gets());
  
  // TODO: Create a for loop to iterate over the specified number of operations:
  for (let i = 0; i < numOperacoes; i++) {
    const typeOperation = gets();
    const valueOperation = parseFloat(gets())
  
   // TODO: Check the type of operation (withdrawal) and update the bank account balance:
    if (typeOperation.toLowerCase() === "deposit") {
      // If it's a deposit, add the amount to the balance.
      contaBancaria.saldo += valorOperacao;
    } else if (tipoOperacao.toLowerCase() === "withdrawal") {
      // If it's a withdrawal, subtract the amount from the balance.
      contaBancaria.saldo -= valorOperacao;
    }
  }
  
  // Print the name of the bank account customer;
  print(`Customer name: ${contaBancaria.nomeCliente}`);
  // Print the final balance of the bank account formatted as Brazilian currency (R$) with two decimal places.
  print(`Final balance: R$ ${contaBancaria.saldo.toFixed(2)}`);