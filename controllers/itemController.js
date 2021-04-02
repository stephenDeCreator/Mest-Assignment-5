const Item = require('../models/Items');

const getAllItems = async (req, res) => {
	const items = await Item.find();
	res.status(200).json({ items });
};
const getItem = async (req, res) => {
	const id = req.params.id;
	const item = await Item.findById(id);
	res.status(200).json({ item });
};
const createItem = async (req, res) => {
	const name = req.body.name;
	const price = req.body.price;
	const description = req.body.description;
	const quantity = req.body.quantity;
	const item = await Item.create({ name, price, description, quantity });
	res.status(201).json({ item });
};
const updateItem = async (req, res) => {
	const id = req.params.id;
	const item = await Item.findByIdAndUpdate(id, req.body, { new: true });
	res.status(200).json({ item });
};
const deleteItem = async (req, res) => {
	const id = req.params.id;
	await Item.findByIdAndDelete(id);
};

module.exports = {
	getAllItems,
	getItem,
	createItem,
	updateItem,
	deleteItem
};
