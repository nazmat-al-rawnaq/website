import mongoose, { Schema } from "mongoose";

const SettingsSchema = new mongoose.Schema({
	key: {
		type: String,
	},
	value: {
		type: mongoose.Schema.Types.Mixed,
	},
});

module.exports =
	mongoose.models.Settings || mongoose.model("Settings", SettingsSchema);
