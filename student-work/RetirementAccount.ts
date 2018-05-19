
import {BankAccount} from "./BankAccount";
import {TransactionOrigin} from "../common/enums/TransactionOrigin";
import {Transaction} from "../common/interfaces/Transaction";

export class RetirementAccount extends BankAccount{
    constructor(currentDate, birthDate){
        super();
        this.balance = 100000;
        this.intRate = 0.03;
        this.accountHolderBirthDate = birthDate;
    }

    withdrawMoney(amount: number,description: string, transactionOrigin: TransactionOrigin): Transaction {
        let day = new Date();
        let age = day.getFullYear() - this.accountHolderBirthDate.getFullYear();
        if (age < 60){
            amount *= 1.1;
        }
        return super.withdrawMoney(amount, description, transactionOrigin);
    }
}