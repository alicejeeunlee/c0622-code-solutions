/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

function isPositiveInteger(number) {
  if (number > 0 && Number.isInteger(number)) {
    return true;
  } else {
    return false;
  }
}

Account.prototype.deposit = function (amount) {
  if (!isPositiveInteger(amount)) {
    return false;
  } else {
    this.transactions.push(new Transaction('deposit', amount));
    return true;
  }
};

Account.prototype.withdraw = function (amount) {
  if (!isPositiveInteger(amount)) {
    return false;
  } else {
    this.transactions.push(new Transaction('withdrawal', amount));
    return true;
  }
};

Account.prototype.getBalance = function () {
  if (this.transactions.length === 0) {
    return 0;
  } else {
    var balance = 0;
    for (var i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].type === 'deposit') {
        balance += this.transactions[i].amount;
      } else {
        balance -= this.transactions[i].amount;
      }
    }
    return balance;
  }
};
