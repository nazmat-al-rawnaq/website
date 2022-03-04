import nc from "next-connect";
import InitDb from "@/helpers/Db";
import { onError, r, uid, corsOption } from "@/helpers/ncOpt";
import multer from "multer";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";

export const config = {
	api: {
		bodyParser: false,
	},
};

const handler = nc({ onError: onError });

handler.use(InitDb);
handler.use(cors(corsOption));

const upload = multer({
	storage: multer.diskStorage({
		destination: "./public/uploads",
		filename: (req, file, cb) => {
			const extName = path.extname(file.originalname);
			const name = `${uid()}${extName}`;
			cb(null, name);
		},
	}),
});
let uploadFile = upload.single("file");
handler.use(uploadFile);

handler.post(async (req, res) => {
	try {
		const id = uid();

		console.log({ id });

		return r(res, true, "Photo Added Successfully", req.file);
	} catch (err) {
		return r(res, false, err.message, null);
	}
});

export default handler;
