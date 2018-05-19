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
//import { TransactionOrigin } from './../common/enums/TransactionOrigin';
var BankAccount_1 = require("./BankAccount");
var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount() {
        var _this = _super.call(this) || this;
        //this.currentDate = currentDate;
        _this.balance = 1000;
        _this.intRate = .01;
        return _this;
    }
    return CheckingAccount;
}(BankAccount_1.BankAccount));
exports.CheckingAccount = CheckingAccount;
// withdrawMoney(
//     amount: number,
//     description: string,
//     transactionOrigin: TransactionOrigin
//   ): Transaction {
//       super.withdrawMoney(amount, description, Transaction);
//     return undefined
//   }
//example of how we can work with these classes and interfaces
// let checking = new CheckingAccount();
// checking.withdrawMoney(500, '', TransactionOrigin.BRANCH);
