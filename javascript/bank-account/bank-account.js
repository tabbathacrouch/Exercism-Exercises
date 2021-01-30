// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

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
