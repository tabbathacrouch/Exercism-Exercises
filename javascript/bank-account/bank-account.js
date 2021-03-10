// exercism --> bank account
// Simulate a bank account supporting opening/closing, withdrawals, and deposits of money. Watch out for concurrent transactions!
// A bank account can be accessed in multiple ways. Clients can make deposits and withdrawals using the internet, mobile phones, etc.
// Shops can charge against the account.
// Create an account that can be accessed from multiple threads/processes (terminology depends on your programming language).
// It should be possible to close an account; operations against a closed account must fail.

export class BankAccount {
  constructor() {
    this.accountBalance = 0;
    this.isOpen = false;
  }

  open() {
    if (this.isOpen) {
      throw new ValueError();
    }
    this.isOpen = true;
  }

  close() {
    if (!this.isOpen) {
      throw new ValueError();
    }
    this.isOpen = false;
    this.accountBalance = 0;
  }

  deposit(amount) {
    if (!this.isOpen || amount < 0) {
      throw new ValueError();
    }
    this.accountBalance += amount;
  }

  withdraw(amount) {
    if (!this.isOpen || this.accountBalance < amount || amount < 0) {
      throw new ValueError();
    }
    this.accountBalance -= amount;
  }

  get balance() {
    if (!this.isOpen) {
      throw new ValueError();
    }
    return this.accountBalance;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
