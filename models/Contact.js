import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	subject: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
});

module.exports =
	mongoose.models.Contact || mongoose.model("Contact", ContactSchema);
