import nc from "next-connect";
import InitDb from "@/helpers/Db";
import { onError } from "@/helpers/ncOpt";

const handler = nc({ onError: onError });

handler.use(InitDb);

handler.get(async (req, res) => {
	res.send("hi");
});

export default handler;
