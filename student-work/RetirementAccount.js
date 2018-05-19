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
var RetirementAccount = /** @class */ (function (_super) {
    __extends(RetirementAccount, _super);
    function RetirementAccount(currentDate, birthDate) {
        var _this = _super.call(this) || this;
        _this.balance = 100000;
        _this.intRate = 0.03;
        _this.accountHolderBirthDate = birthDate;
        return _this;
    }
    RetirementAccount.prototype.withdrawMoney = function (amount, description, transactionOrigin) {
        var day = new Date();
        var age = day.getFullYear() - this.accountHolderBirthDate.getFullYear();
        if (age < 60) {
            amount *= 1.1;
        }
        return _super.prototype.withdrawMoney.call(this, amount, description, transactionOrigin);
    };
    return RetirementAccount;
}(BankAccount_1.BankAccount));
exports.RetirementAccount = RetirementAccount;
