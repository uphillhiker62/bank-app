"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var BankAccount_1 = require("./BankAccount");
var TransactionOrigin_1 = require("../common/enums/TransactionOrigin");
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount() {
        var _this = _super.call(this) || this;
        _this.balance = 10000;
        _this.intRate = .02;
        return _this;
    }
    SavingsAccount.prototype.withdrawMoney = function (amount, description, transactionOrigin) {
        if (transactionOrigin === TransactionOrigin_1.TransactionOrigin.PHONE || transactionOrigin === TransactionOrigin_1.TransactionOrigin.WEB) {
            if (this.onlineTransactionCount > 6) {
                var notAllowed = {
                    amount: -amount,
                    success: false,
                    errorMessage: "There are only 6 withdrawals allowed each month via phone or web. You have exceeded this amount.",
                    resultBalance: this.balance,
                    transactionDate: this.currentDate,
                    description: description,
                    transactionOrigin: transactionOrigin
                };
                this.accountHistory.push(notAllowed);
                return notAllowed;
            }
            else {
                this.onlineTransactionCount++;
                return _super.prototype.withdrawMoney.call(this, amount, description, transactionOrigin);
            }
        }
        else {
            return _super.prototype.withdrawMoney.call(this, amount, description, transactionOrigin);
        }
    };
    return SavingsAccount;
}(BankAccount_1.BankAccount));
exports.SavingsAccount = SavingsAccount;
