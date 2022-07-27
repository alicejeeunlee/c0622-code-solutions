/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance <= 0 || !Number.isInteger(balance)) {
    return null;
  } else {
    var accountNumber = this.nextAccountNumber;
    var newAccount = new Account(accountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    ++this.nextAccountNumber;
    return accountNumber;
  }
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (number === this.accounts[i].number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var grandTotal = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    grandTotal += this.accounts[i].getBalance();
  }
  return grandTotal;
};
