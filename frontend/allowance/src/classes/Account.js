class Account {
    constructor(accountName, pin, userId, userType, pictureUrl, currentBalance) {
        this.accountName = accountName; 
        this.pin = pin;                 
        this.userId = userId;           
        this.userType = userType;       
        this.pictureUrl = pictureUrl;
        this.currentBalance = currentBalance;
    }

    // Check if a given PIN is correct
    validatePin(inputPin) {
        return this.pin === inputPin;
    }

    getUserRole() {
        return `This account belongs to a ${this.userType}`;
    }

    anonymize() {
        return {
            accountName: this.accountName,
            userId: this.userId,
            userType: this.userType,
        };
    }

    getAccountInfo() {
        return `Account Name: ${this.accountName}\nUser ID: ${this.userId}\nUser Type: ${this.userType}`;
    }

    getDisplayInfo() {
        return {
            name: this.accountName,
            status: this.userType,
            pictureUrl: this.pictureUrl,
            pin: this.pin
        };
    }
}

export default Account;
