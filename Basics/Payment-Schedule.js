/* Description

Now, to test your knowledge of computer logic using concepts of inputs and outputs, variable assignment and string concatenation, let's develop an algorithmic solution that simulates the behavior of a payment schedule. In order to help customers of a banking system schedule their recurring payments, the program should ask the user for information about the bill to be paid, such as the name of the beneficiary, the amount of the bill to be paid and the due date. The program will then provide a scheduling confirmation message with the information provided.
Entry

The program should ask for the following information:

    Name of the beneficiary.

    Amount to be paid (in reais, without decimals).

    Due date in "DD/MM/YYYY" format (Day, Month and Year separated by slashes).

Output

The output should provide a confirmation message, informing the customer that the appointment was successful. The message must contain the information provided by the user in a concatenated form. The format of the output message should be:

"Payment Scheduled! Amount: R$ [Bill Amount], due [Due Date]." */

let nameBeneficiary;
let valueAccount;
let dueDate;

// In this block, we have the gets functions to read the input values:
nameBeneficiary = gets();
valueAccount = parseFloat(gets());
dueDate = gets();

// TODO: Print the appropriate output using the template strings concept:
print(`Payment Scheduled! Amount: ${valueAccount}, due date ${dueDate}.`);