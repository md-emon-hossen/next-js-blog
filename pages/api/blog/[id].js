import Delete from "../../../mongodb/crud/delete";
import getById from "../../../mongodb/crud/getById";
import update from "../../../mongodb/crud/update";

async function Index(req, res) {


    if (req.method === 'GET') {
        getById(req, res)
    } else if (req.method === 'DELETE') {
        Delete(req, res)
    } else if (req.method === "PUT") {
        update(req, res)
    }
}


export default Index;