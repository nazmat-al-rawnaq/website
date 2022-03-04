import nc from "next-connect";
import InitDb from "@/helpers/Db";
import { onError, r } from "@/helpers/ncOpt";
import Banner from "models/Contact";
import Joi from "joi";
import mongoose from "mongoose";
import cors from "cors";
import nodemailer from "nodemailer";

const handler = nc({ onError: onError });

handler.use(InitDb);
handler.use(
	cors({
		origin: "*",
	})
);

handler.get(async (req, res) => {
	try {
		const banner = await Banner.find({});

		return r(res, true, "data found", banner);
	} catch (err) {
		return r(res, false, err.message, null);
	}
});

handler.post(async (req, res) => {
	try {
		const schema = Joi.object({
			name: Joi.string().required(),
			email: Joi.string().required(),
			phone: Joi.string().required(),
			subject: Joi.string().required(),
			description: Joi.string().required(),
		}).validate(req.body);

		if (schema.error) {
			r(res, false, schema.error.message, null);
		}

		const data = schema.value;

		const banner = new Banner(data);

		await banner.save();

		var transporter = await nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: "advertisingnajmat@gmail.com",
				pass: "javedkhan786",
			},
		});

		var mailOption = await {
			from: "advertisingnajmat@gmail.com",
			to: "advertisingnajmat@gmail.com",
			subject: "User Request",
			html: `<pre>
name		:  ${data.name}
email		:  ${data.email}
phone		:  ${data.phone}
subject		:  ${data.subject}
description	:  ${data.description}
					</pre>`,
		};

		await transporter.sendMail(mailOption, (error, info) => {});

		return r(res, true, "Your Message Sent Successfully", null);
	} catch (err) {
		return r(res, false, err.message, null);
	}
});

export default handler;
