/* Challenge

The aim of this challenge is to create a JavaScript program that compares two bank accounts and determines whether or not they have the same information. The program must create two JSON objects containing the account number and the account balance.
Input

The program will receive the data needed to create two bank accounts for comparison:

Bank Account 1:

    Account Number (integer): account number of the first bank account.
    Balance (number): balance of the first bank account.

Bank Account 2:

    Account Number (integer): account number of the second bank account.
    Balance (number): balance of the second bank account.

Important: the entry must take place according to the order of the information provided above.

Output

If all the bank account data is strictly equal, the program should return the message:
Bank accounts are equal.

Otherwise, the program should return the message:
The bank accounts are different */

// TODO: Create the Customer 1 JSON object and its properties (account and balance):
const customer1 = { 
    name: gets(), 
    account: gets(),
    balance: gets(),
  };
  
  // TODO: Create the Customer 2 JSON object and its properties (name, account and balance):
  const customer2 = { 
    name: gets(),
    account: gets(),
    balance: gets(),
  
  };
  
  //TODO: Compare the JSONs (name, account, balance) of the Customers, checking that all the properties are the same:
  
  if ((client1.name === client2.name) && (client1.account === client2.account ) && (client1.balance === client2.balance )){
   print("The bank accounts are the same.");
  } else {
    print("The bank accounts are different.")
  }