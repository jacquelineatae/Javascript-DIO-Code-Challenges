/* Description

Now, we're going to combine various programming logic concepts, such as string manipulation, mathematical operations, flow control and regular expressions, applied to the development of a correction solution for the administration team of a banking company. They need a solution for validating account numbers based on specific rules. The program will ask the user to enter an account number and check that it meets the predefined validation criteria. In addition, you can add the ability to inform the user which specific rule has not been met if validation fails.

Validation rules:

    The account number must be exactly 6 digits long.

    The first digit must be greater than zero, i.e. be in the range 1 to 9.

    The sum of the digits in the account number must not be greater than 30.

Input

The program should ask for the following information:

    Account number (a sequence of 6 digits).

Output

The program should provide a message stating whether the account number is valid or invalid, indicating whether the account number meets the validation rules. If the account number is invalid, the program should inform you which specific rule has not been met. */

// Gets() will take an account number as input:
const numeroConta = gets();

// Checks if the account number consists of exactly 6 digits using a regular expression:
if (/^\d{6}$/.test(numeroAccount)) {
  const numArray = numeroAccount.split('').map(Number);

  // Calculate the sum of the digits in the account number
  const sum = numArray.reduce((a, b) => a + b, 0);

  // Checks if the first digit is greater than zero and the sum of the digits is less than or equal to 30
  if (numArray[0] > 0 && sum <= 30) {
  // TODO: If the above condition is true, print the expected message:
    print('Valid account number.');
  } else {
  // TODO: Check that numArray[0] for the first digit is equal to zero :
    if (numArray[0] == 0) {
      // TODO: If the first digit is equal to zero, print the expected message:
      print('Account number invalid: The first digit must be greater than zero.');
    } else {
      print('Invalid account number: The sum of the digits is greater than 30.');
    }
  }
}