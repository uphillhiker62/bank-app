//import { TransactionOrigin } from './../common/enums/TransactionOrigin';
import { BankAccount } from './BankAccount';

export class CheckingAccount extends BankAccount {
    constructor(){
        super();
        //this.currentDate = currentDate;
        this.balance = 1000;
        this.intRate = .01;
    }
}

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