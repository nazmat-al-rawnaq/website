import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	home: {
		type: Boolean,
		default: false,
	},
	category: {
		type: String,
		required: true,
	},
});

module.exports =
	mongoose.models.Service || mongoose.model("Service", ServiceSchema);
