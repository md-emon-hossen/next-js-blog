import BlogModel from "../model";
async function Delete(req, res) {
    const { id } = req.query;
    await BlogModel.deleteOne({ _id: id }, (err) => {

        if (!err) {

            res.status(200).json({ "messege": "delete item successfully" })
        } else {
            res.status(503).json({ "messege": "there was a server side error" })
        }

    });
}


export default Delete;

