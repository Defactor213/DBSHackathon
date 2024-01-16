const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    description: String,
    amount: Number,
    date: { type: Date, default: Date.now },
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;