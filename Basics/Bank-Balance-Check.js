/* Description

In this challenge, you have to create a solution that allows you to check the balance of a bank account. Use the concept of functions, "if" and "else", among others, to solve it. In this way, the program will have a fixed value, simulating the account balance, as well as a fixed name representing the account holder. Interaction will occur when the user chooses one of the three options for checking account information:

[ 1 ] - Checks the Balance;
[ 2 ] - Make a Deposit;
[ 3 ] - Make a Withdrawal;
Input

The program expects to receive as input integers representing the three options available for checking account information. The entry with the value '1' represents the balance check, the entry with the number '2' represents the deposit action, and the value '3' represents the withdrawal action.

Warning:

In the case of invalid entries, such as any number other than 1, 2 or 3, the program should provide an error message indicating that the option is invalid: "Invalid option. Try again".
Output

The program should provide informative output messages based on the action selected and detailed in the following table. */

// Initial fixed data, account balance, and account holder's name:
let accountBalance = 2000.0;
const accountHolderName = "Mariane";

// Function to check the balance:
function checkBalance() {
  print(`Account balance for ${accountHolderName}: $${accountBalance.toFixed(2)}`);
}

// Function to make a deposit:
function makeDeposit(amount) {
  accountBalance += amount;
  print(`Deposit of $${amount.toFixed(2)} successfully made. Total balance: $${accountBalance.toFixed(2)}`);
}

// Function to make a withdrawal:
function makeWithdrawal(amount) {
  if (amount > accountBalance) {
    print("Insufficient balance to make the withdrawal.");
  } else {
    accountBalance -= amount;
    print(`Withdrawal of $${amount.toFixed(2)} successfully made. Total balance: $${accountBalance.toFixed(2)}`);
  }
}

const option = parseInt(gets());

// Determine the correct conditional structure to choose the action based on the selected option:
if (option === 1) {
  checkBalance();
} else if (option === 2) {
  const depositAmount = parseFloat(gets());
  makeDeposit(depositAmount);
} else if (option === 3) {
  const withdrawalAmount = parseFloat(gets());
  makeWithdrawal(withdrawalAmount);
} else {
  print("Invalid option. Please try again.");
}
