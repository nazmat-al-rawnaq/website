import nc from "next-connect";
import InitDb from "@/helpers/Db";
import { onError, r, corsOption, getImageUrl } from "@/helpers/ncOpt";
import Banner from "models/Banner";
import Joi from "joi";
import mongoose from "mongoose";
import cors from "cors";

const handler = nc({ onError: onError });

handler.use(InitDb);
handler.use(cors(corsOption));

handler.get(async (req, res) => {
	try {
		const isAdmin = req.query.admin;

		let banner;

		if (isAdmin) {
			banner = await Banner.find({});
		} else {
			banner = await Banner.find({
				show: true,
			});
		}

		let data = [];

		for (let b of banner) {
			const baseUrl = `${"https"}://${req.headers.host}/uploads`;

			data.push({
				image: getImageUrl(req, b.image),
				show: b.show,
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
			image: Joi.string().required(),
			show: Joi.boolean().required(),
		}).validate(req.body);

		if (schema.error) {
			r(res, false, schema.error.message, null);
		}

		const data = schema.value;

		const banner = new Banner(data);

		await banner.save();
		return r(res, true, "Banner Added Successfully", null);
	} catch (err) {
		return r(res, false, err.message, null);
	}
});

handler.put(async (req, res) => {
	try {
		const id = req.body.id;
		if (!id) return r(res, false, "Please select a banner to update", null);
		let banner = await Banner.findById(id);
		if (!banner) {
			return r(res, false, "Invalid request", null);
		}

		banner.show = !banner.show;
		await banner.save();
		return r(res, true, "Banner Updated Successfully", null);
	} catch (err) {
		return r(res, false, err.message, null);
	}
});

handler.delete(async (req, res) => {
	try {
		const id = req.query.id;
		if (!id) return r(res, false, "Please select a banner to update", null);
		let banner = await Banner.findByIdAndDelete(id);
		if (!banner) {
			return r(res, false, "Invalid request", null);
		}

		return r(res, true, "Banner Updated Successfully", null);
	} catch (err) {
		return r(res, false, err.message, null);
	}
});
export default handler;
