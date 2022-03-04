import nc from "next-connect";
import InitDb from "@/helpers/Db";
import { onError, r, corsOption, getImageUrl } from "@/helpers/ncOpt";
import Settings from "models/Settings";
import Joi from "joi";
import mongoose from "mongoose";
import cors from "cors";

const handler = nc({ onError: onError });

handler.use(InitDb);
handler.use(cors({ origin: "*" }));

handler.get(async (req, res) => {
	try {
		const key = req.query.key ?? "";

		const setting = await Settings.findOne({
			key: key,
		});
		if (!setting) return r(res, false, "No Data Found", null);
		return r(res, true, "setting", setting.value);
	} catch (err) {
		return r(res, false, err.message, null);
	}
});

handler.post(async (req, res) => {
	try {
		const key = req.body.key ?? "";
		const value = req.body.value;

		if (!key || !value) {
			return r(res, false, "Please Provide all Details", null);
		}

		const setting = await Settings.findOne({
			key: key,
		});
		if (setting) {
			setting.value = value;
			setting.save();
		} else {
			const sett = new Settings({
				key,
				value,
			});
			await sett.save();
		}

		return r(res, true, "Setting saved", sett.value);
	} catch (err) {
		return r(res, false, err.message, null);
	}
});

// Project
export default handler;
