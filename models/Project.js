import mongoose from "mongoose";

const ProjectsSchema = new mongoose.Schema({
	title: {
		type: String,
	},
	image: {
		type: String,
		required: true,
	},
	show: {
		type: Boolean,
		default: true,
	},
	category: {
		type: String,
	},
});

module.exports =
	mongoose.models.Project || mongoose.model("Project", ProjectsSchema);
