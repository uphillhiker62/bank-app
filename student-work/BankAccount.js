"use strict";
exports.__esModule = true;
var BankAccount = /** @class */ (function () {
    function BankAccount() {
        this.accountHistory = [];
        this.onlineTransactionCount = 0;
    }
    //accountHolderName: string;
    BankAccount.prototype.withdrawMoney = function (amount, description, transactionOrigin) {
        // let myWithdrawal: Transaction;
        if (amount <= this.balance) {
            // this.balance -= amount;
            // this.balance = +(this.balance.toFixed(2)); 
            var myWithdrawal = {
                amount: -amount,
                success: true,
                errorMessage: "",
                resultBalance: this.balance -= amount,
                transactionDate: this.currentDate,
                description: description,
                transactionOrigin: transactionOrigin
            };
            this.accountHistory.push(myWithdrawal);
            return myWithdrawal;
        }
        else {
            return {
                amount: -amount,
                success: false,
                errorMessage: "Not enough funds available. Please choose a different amount.",
                resultBalance: this.balance,
                transactionDate: this.currentDate,
                description: description,
                transactionOrigin: transactionOrigin
            };
        }
    };
    BankAccount.prototype.depositMoney = function (amount, description) {
        var myDeposit = {
            amount: amount,
            success: true,
            resultBalance: this.balance += amount,
            transactionDate: this.currentDate,
            errorMessage: "",
            description: description
        };
        this.accountHistory.push(myDeposit);
        return myDeposit;
    };
    BankAccount.prototype.advanceDate = function (numberOfDays) {
        var date = this.currentDate;
        var intDepo;
        for (var i = 0; i < numberOfDays; i++) {
            date.setDate(date.getDate() + 1);
            if (date.getDate() === 1) {
                this.onlineTransactionCount = 0;
                var intAmt = (this.balance * (this.intRate / 12));
                this.balance += intAmt;
                this.balance = +(this.balance.toFixed(2));
                intDepo = {
                    success: true,
                    amount: intAmt,
                    resultBalance: this.balance,
                    transactionDate: date,
                    errorMessage: "",
                    description: intAmt + " interest"
                };
                this.accountHistory.push(intDepo);
            }
        }
        return date;
    };
    return BankAccount;
}());
exports.BankAccount = BankAccount;
