export default class Transaction {
    name;
    value;
    currency;
    date;
    transactionType;

    constructor(name, value, currency, date, transactionType) {
        this.name = name;
        this.value = value;
        this.currency = currency;
        this.date = date;
        this.transactionType = transactionType;
    }
};
