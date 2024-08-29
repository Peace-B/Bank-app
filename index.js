let accName = "peace";
let atmPinn = "1234";
let myAccBal = 5000;

function login() {
    let username = prompt("Enter your username:").toLowerCase();
    let pin = prompt("Enter your PIN:");

    if (username === accName.toLowerCase() && pin === atmPinn) {
        alert("Welcome to JSF Bank");
        return true;
    } else {
        alert("Wrong username or PIN");
        return false;
    }
}

function atmWorkflow() {
    if (login()) {
        let trans;
        do {
            trans = prompt("What would you like to do? (deposit, withdraw, balance, exit):").toLowerCase();
            switch (trans) {
                case 'deposit':
                    let depAmount = Number(prompt("Enter amount to deposit:"));
                    if (isNaN(depAmount) || depAmount <= 0) {
                        alert("Invalid deposit amount.");
                    } else {
                        myAccBal += depAmount;
                        alert(`Your new account balance is $${myAccBal.toFixed(2)}`);
                    }
                    break;
                case 'withdraw':
                    let withAmt = Number(prompt("Enter amount to withdraw:"));
                    if (isNaN(withAmt) || withAmt <= 0) {
                        alert("Invalid withdrawal amount.");
                    } else if (withAmt > myAccBal) {
                        alert("Insufficient funds.");
                    } else {
                        myAccBal -= withAmt;
                        alert(`Your new account balance is $${myAccBal.toFixed(2)}`);
                    }
                    break;
                case 'balance':
                    alert(`Your current balance is $${myAccBal.toFixed(2)}`);
                    break;
                case 'exit':
                    alert("Exiting...");
                    return; // Exit the function
                default:
                    alert("Invalid transaction.");
            }
        } while (trans !== 'exit');
    }
}
window.onload = atmWorkflow;






