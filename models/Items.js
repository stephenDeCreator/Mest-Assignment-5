const { Schema, model } = require('mongoose');

const itemSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, 'Please indicate the item name']
		},
		price: {
			type: Number,
			required: [true, 'Please indicate the item price']
		},
		description: {
			type: String,
			required: [true, 'Please indicate the item description']
		},
		quantity: {
			type: Number,
			required: [true, 'Please indicate the item quantity']
		}
	},
	{
		timestamps: true
	}
);
module.exports = model('Item', itemSchema);
