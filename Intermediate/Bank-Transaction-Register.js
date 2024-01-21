/* Challenge

Create a JavaScript program that allows the user to perform a single operation from a menu with four options: Deposit, Withdraw, Balance and Exit. After choosing one of these options, the program should execute the corresponding operation and display the updated balance information. After executing the operation, the program will close automatically.
Entry:

    The program starts with a fictitious bank account, with the following information:
        Customer Name: João
        Initial balance: R$ 1,000.00

    The user interacts with the program via a menu with the following options:
        Deposit: The user enters the amount of the deposit, which is added to the account balance.
        Withdrawal: The user enters the withdrawal amount, which is deducted from the balance, provided there is sufficient balance.
        Balance: The program displays the current balance of John's account.
        Exit: The user can close the program.

Exit:

The program should execute one of the 4 menu options (Deposit/Draw/Balance/Exit) and display the updated balance information. 
If you enter option 4, you should get the message "Closing program". */


// Object called contaBancaria with the customer's name and initial balance:
const contaBancaria = {
    nameCustomer: "John",
    balance: 1000.0,
  };
  
  // Define a function called performOperation:
  function realizarOperacao() {
    // Gets an option from the user and converts it to an integer.
    const option = parseInt(gets());
  
    // We create a conditional switch structure to handle the different operations based on the selected option:
    switch (option) {
      // If the option is 1 (Deposit).
      case 1:
        // Get the value of the user's deposit.
        const depositvalue = parseFloat(gets());
        // Adds the deposit amount to the account balance.
        contaBancaria.saldo += valorDeposito;
        // Prints the deposit confirmation and the current formatted balance.
        print("Deposit operation completed.");
        print(`Current balance: R$ ${contaBancaria.saldo.toFixed(2)}`);
        break;
  
      // If the option is 2 (Withdrawal).
    case 2:
      // Get the value of the user's withdrawal.
      const valueWithdrawal = parseFloat(gets());
      // TODO: Check that the balance is sufficient for the withdrawal:
      if (amountWithdrawal <= bankaccount.balance) {
        // TODO: Subtract the withdrawal amount from the account balance:
        contaBancaria.saldo -= valorSaque;
        print("Withdrawal operation completed.");
        // TODO: Print the withdrawal confirmation and the formatted current balance:
        print(`Current balance: R$ ${contaBancaria.saldo.toFixed(2)}`);
      } else {
        print("Insufficient balance. Withdrawal operation canceled.");
        // TODO: If the balance is insufficient, print an error message and the current balance:
        print(`Current balance: ${contaBancaria.saldo.toFixed(2)}`);
      }
      break;
      
      // If the option is 3 (Check Balance).
      case 3:
        // TODO: Print the formatted current balance:
        print(`Current balance: R$ ${contaBancaria.saldo.toFixed(2)}`);
        break;
  
      // If the option is 4 (Terminate the program).
      case 4:
        // Prints a closing message and returns from the function, ending the program.
        print("Closing the program.");
        return;
  
      // If the option does not match any of the previous cases.
      default:
        // Print an invalid option message.
        print("Invalid option.");
    }
  }
  
  // Calls the performOperation function to start the program.
  performOperation();