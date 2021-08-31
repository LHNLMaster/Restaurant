const db = require('mongoose');
const Order= db.model('orders', {
	fullName: String, 
	email: String, 
	phoneNumber: String,
    address: String,
    total: String,
    details: Array
});

module.exports = Order;
