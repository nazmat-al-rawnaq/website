import nc from "next-connect";
import InitDb from "@/helpers/Db";
import { onError, r, getImageUrl } from "@/helpers/ncOpt";
import Service from "models/Service";
import Project from "models/Project";
import Joi from "joi";
import mongoose from "mongoose";
import cors from "cors";

const handler = nc({ onError: onError });

handler.use(InitDb);
handler.use(cors({ origin: "*" }));

handler.get(async (req, res) => {
	try {
		let category = req.query.category;
		const id = req.query.id ?? "";
		console.log(req.query);
		category.replace("-", " ");
		console.log({ category });
		if (!category || !id) {
			return r(res, false, "err.message", null);
		}

		const projects = await Project.find({
			category: category,
		});

		const services = await Service.find({
			category: category,
		});

		// let service = await Service.findOne({
		// 	_id: id,
		// });

		let _data = services.concat(projects);

		let data = [];

		for (let b of _data) {
			data.push({
				image: getImageUrl(req, b.image),
				_id: b._id,
				title: b.title,
				category: b.category,
			});
		}
		// service = service.toJSON();
		// service.image = getImageUrl(req, service.image);
		return r(res, true, "data found", { data });
	} catch (err) {
		return r(res, false, err.message, null);
	}
});

export default handler;
