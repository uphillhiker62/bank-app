import {Account} from "../common/interfaces/Account";
import {CheckingAccount} from "../student-work/CheckingAccount";
import {SavingsAccount} from "../student-work/SavingsAccount";
import {RetirementAccount} from "../student-work/RetirementAccount";

export class AccountFactory {

    static getCheckingAccountObject(currentDate: Date): Account {
        let todaysDate= new CheckingAccount();
        todaysDate.currentDate = currentDate;
        return todaysDate;
    }

    static getSavingsAccountObject(currentDate: Date): Account {
        let todaysDate = new SavingsAccount();
        todaysDate.currentDate = currentDate;
        return todaysDate;
    }

    static getRetirementAccountObject(currentDate: Date, accountHolderBirthDate: Date): Account {
        let todaysDate = new RetirementAccount(currentDate, accountHolderBirthDate);
        todaysDate.accountHolderBirthDate = accountHolderBirthDate;
        todaysDate.currentDate = currentDate;
        return todaysDate;
    }
}