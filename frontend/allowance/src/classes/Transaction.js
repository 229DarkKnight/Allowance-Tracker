class Transaction {
    constructor(amount, childName, reason, timestamp, type, userId) {
        this.amount = amount;
        this.childName = childName;
        this.reason = reason;
        this.timestamp = new Date(timestamp); 
        this.type = type;
        this.userId = userId;

        if (isNaN(this.timestamp)) {
            throw new Error("Invalid timestamp format");
        }
    }

    getDisplayInfo() {
        return {
            amount: this.amount,
            childName: this.childName,
            reason: this.reason,
            timestamp: new Date(this.timestamp).toLocaleString(),
            type: this.type,
            userId: this.userId,
        };
    }

    getFormattedTimestamp() {
        return this.timestamp.toLocaleDateString() + " " + this.timestamp.toLocaleTimeString();
    }
}

export default Transaction;
