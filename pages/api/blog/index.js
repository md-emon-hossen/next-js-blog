import { connnectDB } from "../../../mongodb/connectDB";
import create from "../../../mongodb/crud/create";
import getAll from "../../../mongodb/crud/getAll";

export default async function blog(req, res) {
    await connnectDB();

    if (req.method === 'GET') {
        getAll(req, res);
    } else if (req.method === "POST") {
        create(req, res)
    }


}


