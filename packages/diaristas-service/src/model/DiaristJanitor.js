const mongoose = require("mongoose");

const schema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	cityid: Number,
	street: String,
	streetNumber: Number,
	referencePoint: String,
	latitude: Number,
	longitude: Number,
	description: String,
	images: [String],
	isResolved: Boolean,
	date: Date,
});

module.exports = mongoose.model("DiaristJanitor", schema);
