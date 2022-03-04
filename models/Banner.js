import mongoose from "mongoose";

const BannerSchema = new mongoose.Schema({
	image: {
		type: String,
		required: true,
	},
	show: {
		type: Boolean,
		default: true,
	},
});

module.exports =
	mongoose.models.Banner || mongoose.model("Banner", BannerSchema);
