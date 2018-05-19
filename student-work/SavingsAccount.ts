import {BankAccount} from "./BankAccount";
import {TransactionOrigin} from "../common/enums/TransactionOrigin";
import {Transaction} from "../common/interfaces/Transaction";


export class SavingsAccount extends BankAccount{
    constructor(){
        super();
        this.balance = 10000;
        this.intRate = .02;
    }

    withdrawMoney(amount: number,description: string, transactionOrigin: TransactionOrigin): Transaction {
        if (transactionOrigin === TransactionOrigin.PHONE || transactionOrigin === TransactionOrigin.WEB){
            if (this.onlineTransactionCount > 6){
                let notAllowed = {
                    amount: - amount,
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
                this.onlineTransactionCount ++;
                return super.withdrawMoney(amount, description, transactionOrigin);
             }
         }
         else {
            return super.withdrawMoney(amount, description, transactionOrigin);
        }
     }
}