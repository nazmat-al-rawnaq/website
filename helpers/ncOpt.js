import mongoose from "mongoose";
module.exports = {
	onError: (err, req, res, next) => {
		console.error(err.stack);
		res.status(500).end("Something broke!");
	},
	r: (res, status, message, data) => {
		return res.json({
			status: status,
			message: message,
			data: data,
		});
	},
	uid: () => {
		const id = new mongoose.Types.ObjectId().toString();
		return id;
	},
	corsOption: {
		origin: "*",
	},
	getImageUrl: (req, url) => {
		const baseUrl = `${"http"}://${req.headers.host}/uploads`;
		return `${baseUrl}/${url}`;
	},
};
