class BankAccount {
    #balance
    constructor(balance) {
        this.#balance = balance;
    }
    getBalance() {
        console.log(this.#balance);
    }
    deposit(deposit) {
        this.#balance += deposit;
    }
    withdraw(withdraw) {
        this.#balance -= withdraw;
    }
}
class BankAccountModified extends BankAccount {
    constructor (balance){
        super(balance);
    }
}

const account1 = new BankAccount(1000);
console.log(account1.getBalance()); // 1000
account1.deposit(500);
console.log(account1.getBalance()); // 1500
account1.withdraw(200);
console.log(account1.getBalance()); // 1300

console.log(account1.balance); //privat undefined

const account2 = new BankAccountModified(1000);
console.log(account2.getBalance()); // 1000
account2.deposit(500);
console.log(account2.getBalance()); // 1500
account2.withdraw(200);
console.log(account2.getBalance()); // 1300
console.log(account2.balance); //privat undefined



