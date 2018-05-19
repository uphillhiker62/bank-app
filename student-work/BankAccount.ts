import { Account } from "./../common/interfaces/Account";
import { Transaction } from "../common/interfaces/Transaction";
import { TransactionOrigin } from "../common/enums/TransactionOrigin";

export class BankAccount implements Account {
  success: boolean;
  amount: number;
  resultBalance: number;
  transactionDate: Date;
  description: string;
  errorMessage: string;
  transactionOrigin?: TransactionOrigin;
  currentDate: Date;
  balance: number;
  accountHistory: Transaction[] = [];
  accountHolderBirthDate?: Date;
  accountHolderName;
  intRate: number;
  onlineTransactionCount: number = 0; 
  //accountHolderName: string;

  withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {
    // let myWithdrawal: Transaction;
      if(amount <= this.balance) {
        // this.balance -= amount;
        // this.balance = +(this.balance.toFixed(2)); 
        let myWithdrawal = {
          amount: - amount,
          success: true,
          errorMessage: "",
          resultBalance: this.balance -= amount,
          transactionDate: this.currentDate,
          description: description,
          transactionOrigin: transactionOrigin
        }
        this.accountHistory.push(myWithdrawal);
        return myWithdrawal;
        

      } else {
        return {
          amount: - amount,
          success: false,
          errorMessage: "Not enough funds available. Please choose a different amount.",
          resultBalance: this.balance,
          transactionDate: this.currentDate,
          description: description,
          transactionOrigin: transactionOrigin
        }
      }
    }

  depositMoney(amount: number, description: string): Transaction {
    let myDeposit: Transaction = {
      amount: amount,
      success: true,
      resultBalance: this.balance += amount,
      transactionDate: this.currentDate,
      errorMessage: "",
      description: description
    };
    this.accountHistory.push(myDeposit);
    return myDeposit;
  }

  advanceDate(numberOfDays: number) {
    let date = this.currentDate;
    let intDepo;
    for(let i = 0; i < numberOfDays; i++) {
      date.setDate(date.getDate() + 1);
      if(date.getDate() === 1) {
          this.onlineTransactionCount = 0;
          let intAmt = (this.balance * (this.intRate/12));
          this.balance += intAmt;
          this.balance = +(this.balance.toFixed(2));

          intDepo = {
            success: true,
            amount: intAmt,
            resultBalance: this.balance,
            transactionDate: date,
            errorMessage: "",
            description: `${intAmt} interest`
          };
          this.accountHistory.push(intDepo);
        }
    }
    return date;
  }
}
