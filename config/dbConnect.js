const mongoose = require('mongoose');

mongoose
	.connect('mongodb://localhost:27017/shop', {
		useCreateIndex: true,
		useFindAndModify: true,
		useUnifiedTopology: true,
		useNewUrlParser: true
	})
	.then(() => console.log('Datababse connected successfully'))
	.catch((err) => console.log(err.message));
