import nc from "next-connect";
import InitDb from "@/helpers/Db";
import { onError, r, corsOption, getImageUrl } from "@/helpers/ncOpt";
import Service from "models/Service";
import Joi from "joi";
import mongoose from "mongoose";
import cors from "cors";

const handler = nc({ onError: onError });

handler.use(InitDb);
handler.use(cors({ origin: "*" }));

handler.get(async (req, res) => {
	try {
		const isAdmin = req.query.admin;

		let service;

		if (isAdmin) {
			service = await Service.find({});
		} else {
			service = await Service.find({
				home: true,
			});
		}

		let data = [];

		for (let b of service) {
			data.push({
				image: getImageUrl(req, b.image),
				title: b.title,
				category: b.category,
				home: b.home,
				_id: b._id,
			});
		}
		return r(res, true, "data found", data);
	} catch (err) {
		return r(res, false, err.message, null);
	}
});

handler.post(async (req, res) => {
	try {
		const schema = Joi.object({
			title: Joi.string().required(),
			image: Joi.string().required(),
			category: Joi.string().required(),
		}).validate(req.body);

		if (schema.error) {
			r(res, false, schema.error.message, null);
		}

		const data = schema.value;

		const service = new Service(data);

		await service.save();
		return r(res, true, "Service Added Successfully", null);
	} catch (err) {
		return r(res, false, err.message, null);
	}
});

handler.put(async (req, res) => {
	try {
		const schema = Joi.object({
			id: Joi.string().required(),
		}).validate(req.body);

		if (schema.error) {
			r(res, false, schema.error.message, null);
		}

		const data = schema.value;

		let service = await Service.findById(data.id);

		if (!service) {
			return r(res, false, "Invalid request", null);
		}

		// service.title = data.title;
		// service.image = data.image;
		service.home = !service.home;
		// service.category = data.category;

		await service.save();
		return r(res, true, "Service Updated Successfully", null);
	} catch (err) {
		return r(res, false, err.message, null);
	}
});

handler.delete(async (req, res) => {
	try {
		const id = req.query.id;
		if (!id) return r(res, false, "Please select a service to update", null);
		let service = await Service.findByIdAndDelete(id);
		if (!service) {
			return r(res, false, "Invalid request", null);
		}

		return r(res, true, "Service Updated Successfully", null);
	} catch (err) {
		return r(res, false, err.message, null);
	}
});
// Project
export default handler;
